"use client";

import React from "react";
import dynamic from "next/dynamic";
import differenceBy from "lodash/differenceBy";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import { formatCellValue, NPO_FIELDS, NpoRecord, NpoValue } from "@/shared/lib/npo-sync";
import { DEFAULT_PAGE_SIZE, STANDARD_PAGE_SIZE_OPTIONS } from "@/shared/lib/pagination";
import { fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

type TableNpoRecord = NpoRecord & { __rowId: string };

const FILTER_FIELDS = [
  { key: "npoName", label: "NPO Name" },
  { key: "EIN", label: "EIN" },
  { key: "city", label: "City" },
  { key: "state", label: "State" },
  { key: "zipCode", label: "Zip Code" },
] as const;

const PARTNER_DROPDOWN_FIELDS = [
  { key: "apiPartnerName", label: "API Partner Name" },
  { key: "affiliateName", label: "Affiliate Partner Name" },
  { key: "instantPartnerName", label: "Instant Partner Name" },
] as const;

type FilterFieldKey = (typeof FILTER_FIELDS)[number]["key"];
type FilterState = Record<FilterFieldKey, string>;

const INITIAL_FILTERS: FilterState = {
  npoName: "",
  EIN: "",
  city: "",
  state: "",
  zipCode: "",
};

type PlatformFilterValue = "" | "Instant" | "Premium";

type PartnerDropdownFieldKey = (typeof PARTNER_DROPDOWN_FIELDS)[number]["key"];
type PartnerFilterState = Record<PartnerDropdownFieldKey, string>;

const INITIAL_PARTNER_FILTERS: PartnerFilterState = {
  apiPartnerName: "",
  affiliateName: "",
  instantPartnerName: "",
};

const FILTER_CONTROL_CLASS = "form-control text-textmuted dark:text-textmuted/50 text-[0.8125rem] font-normal";

const prettifyFieldName = (field: string) => {
  const withSpaces = field
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};

const compareCellValues = (left: NpoValue, right: NpoValue) => {
  if (left === null || left === undefined) {
    return right === null || right === undefined ? 0 : 1;
  }

  if (right === null || right === undefined) {
    return -1;
  }

  if (typeof left === "number" && typeof right === "number") {
    return left - right;
  }

  if (typeof left === "boolean" && typeof right === "boolean") {
    if (left === right) {
      return 0;
    }
    return left ? -1 : 1;
  }

  const leftText = String(left);
  const rightText = String(right);
  const leftDate = Date.parse(leftText);
  const rightDate = Date.parse(rightText);

  if (!Number.isNaN(leftDate) && !Number.isNaN(rightDate)) {
    return leftDate - rightDate;
  }

  return leftText.localeCompare(rightText, undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

const MasterNpoDataTable = () => {
  const [data, setData] = React.useState<TableNpoRecord[]>([]);
  const [allData, setAllData] = React.useState<TableNpoRecord[]>([]);
  const [totalRows, setTotalRows] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(DEFAULT_PAGE_SIZE);
  const [selectedRows, setSelectedRows] = React.useState<TableNpoRecord[]>([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [lastRefreshedAt, setLastRefreshedAt] = React.useState<string>("");
  const [sortField, setSortField] = React.useState<string>("");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");
  const [filters, setFilters] = React.useState<FilterState>(INITIAL_FILTERS);
  const [platformFilter, setPlatformFilter] = React.useState<PlatformFilterValue>("");
  const [partnerFilters, setPartnerFilters] = React.useState<PartnerFilterState>(INITIAL_PARTNER_FILTERS);
  const [showFilters, setShowFilters] = React.useState(false);

  const hasActiveFilters = React.useMemo(() => {
    const hasTextFilters = FILTER_FIELDS.some(({ key }) => filters[key].trim().length > 0);
    const hasPartnerFilters = PARTNER_DROPDOWN_FIELDS.some(({ key }) => partnerFilters[key].trim().length > 0);
    return hasTextFilters || hasPartnerFilters || platformFilter.length > 0;
  }, [filters, partnerFilters, platformFilter]);

  const normalizeRows = React.useCallback((records: Record<string, NpoValue>[]) => {
    return records.map((row, index) => ({
      ...row,
      __rowId: String(row.id ?? `npo-${index}`),
    }));
  }, []);

  const loadPagedNpos = React.useCallback(async (page: number, perPage: number, forceRefresh = false) => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const result = await fetchJsonWithClientCache<any>(
        `/api/npos/saved/?page=${page}&perPage=${perPage}${forceRefresh ? "&force=1" : ""}`,
        {
          ttlMs: 60000,
          forceRefresh,
          init: { method: "GET" },
        }
      );

      const payload = result.payload;

      if (!result.ok) {
        setErrorMessage(payload?.error ?? `Failed to load approved NPO records (HTTP ${result.status}).`);
        setData([]);
        setTotalRows(0);
        return;
      }

      if (!payload) {
        setErrorMessage("Saved records API returned non-JSON content.");
        setData([]);
        setTotalRows(0);
        return;
      }

      const records = Array.isArray(payload?.records) ? payload.records : [];
      setData(normalizeRows(records));
      setTotalRows(Number(payload?.totalCount ?? records.length));
      setLastRefreshedAt(new Date().toLocaleString());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load approved NPO records.");
      setData([]);
      setTotalRows(0);
    } finally {
      setIsLoading(false);
    }
  }, [normalizeRows]);

  const loadAllNpos = React.useCallback(async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const result = await fetchJsonWithClientCache<any>(`/api/npos/saved/?all=1${forceRefresh ? "&force=1" : ""}`, {
        ttlMs: 60000,
        forceRefresh,
        init: { method: "GET" },
      });

      const payload = result.payload;

      if (!result.ok || !payload) {
        setErrorMessage(payload?.error ?? `Failed to load approved NPO records (HTTP ${result.status}).`);
        setAllData([]);
        return;
      }

      const records = Array.isArray(payload?.records) ? payload.records : [];
      setAllData(normalizeRows(records));
      setLastRefreshedAt(new Date().toLocaleString());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load approved NPO records.");
      setAllData([]);
    } finally {
      setIsLoading(false);
    }
  }, [normalizeRows]);

  React.useEffect(() => {
    if (hasActiveFilters) {
      if (allData.length === 0) {
        loadAllNpos();
      }
      return;
    }

    loadPagedNpos(currentPage, rowsPerPage);
  }, [allData.length, currentPage, hasActiveFilters, loadAllNpos, loadPagedNpos, rowsPerPage]);

  const handleRowSelected = React.useCallback((state: { selectedRows: unknown[] }) => {
    setSelectedRows(state.selectedRows as TableNpoRecord[]);
  }, []);

  const columns = React.useMemo<any[]>(
    () =>
      NPO_FIELDS.map((field) => ({
        name: (
          <span className="inline-flex items-center gap-1.5">
            <span>{prettifyFieldName(field)}</span>
            <span className="inline-flex flex-col leading-none text-[9px]">
              <i
                className={`bi bi-caret-up-fill ${
                  sortField === field && sortDirection === "asc"
                    ? "text-primary"
                    : "text-textmuted/50 dark:text-textmuted/30"
                }`}
              ></i>
              <i
                className={`bi bi-caret-down-fill -mt-0.5 ${
                  sortField === field && sortDirection === "desc"
                    ? "text-primary"
                    : "text-textmuted/50 dark:text-textmuted/30"
                }`}
              ></i>
            </span>
          </span>
        ),
        selector: (row: TableNpoRecord) => formatCellValue(row[field]),
        sortable: true,
        wrap: true,
        sortFunction: (rowA: TableNpoRecord, rowB: TableNpoRecord) => compareCellValues(rowA[field], rowB[field]),
        field,
      })),
    [sortDirection, sortField]
  );

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      setToggleCleared((previous) => !previous);
      setData((previous) => differenceBy(previous, selectedRows, "__rowId"));
    };

    return (
      <SpkButton variant="primary" customClass="ti-btn" key="delete" onclickfunc={handleDelete}>
        Delete
      </SpkButton>
    );
  }, [selectedRows]);

  const sourceData = hasActiveFilters ? allData : data;

  const filteredData = React.useMemo(() => {
    return sourceData.filter((row) => {
      const textFiltersMatch = FILTER_FIELDS.every(({ key }) => {
        const filterValue = filters[key].trim().toLowerCase();
        if (!filterValue) {
          return true;
        }

        const candidateValue = formatCellValue(row[key]).toLowerCase();
        return candidateValue.includes(filterValue);
      });

      if (!textFiltersMatch) {
        return false;
      }

      if (platformFilter) {
        const fiscalSponsorValue = formatCellValue(row.fiscalSponsor).trim();
        const affiliateValue = formatCellValue(row.affiliate).trim();
        const apiPartnerValue = formatCellValue(row.apiPartner).trim();
        const instantPartnerValue = formatCellValue(row.instantPartner).trim();

        if (platformFilter === "Instant") {
          const matchesInstant =
            fiscalSponsorValue.length > 0 &&
            affiliateValue.length === 0 &&
            apiPartnerValue.length === 0 &&
            instantPartnerValue.length === 0;

          if (!matchesInstant) {
            return false;
          }
        }

        if (platformFilter === "Premium") {
          const matchesPremium =
            fiscalSponsorValue.length === 0 &&
            affiliateValue.length === 0 &&
            apiPartnerValue.length === 0 &&
            instantPartnerValue.length === 0;
          if (!matchesPremium) {
            return false;
          }
        }
      }

      return PARTNER_DROPDOWN_FIELDS.every(({ key }) => {
        const selectedValue = partnerFilters[key].trim().toLowerCase();
        if (!selectedValue) {
          return true;
        }

        const candidateValue = formatCellValue(row[key]).toLowerCase();
        return candidateValue === selectedValue;
      });
    });
  }, [filters, partnerFilters, platformFilter, sourceData]);

  const updateFilter = (key: FilterFieldKey, value: string) => {
    setFilters((previous) => ({ ...previous, [key]: value }));
  };

  const updatePlatformFilter = (value: PlatformFilterValue) => {
    setPlatformFilter(value);

    if (value) {
      setPartnerFilters(INITIAL_PARTNER_FILTERS);
    }
  };

  const updatePartnerFilter = (key: PartnerDropdownFieldKey, value: string) => {
    if (value) {
      setPlatformFilter("");
    }

    setPartnerFilters((previous) => {
      const nextFilters: PartnerFilterState = {
        ...INITIAL_PARTNER_FILTERS,
        [key]: value,
      };

      if (!value) {
        return {
          ...previous,
          [key]: "",
        };
      }

      return nextFilters;
    });
  };

  const clearFilters = () => {
    setFilters(INITIAL_FILTERS);
    setPlatformFilter("");
    setPartnerFilters(INITIAL_PARTNER_FILTERS);
    setCurrentPage(1);
  };

  const toggleFilters = () => {
    setShowFilters((previous) => !previous);
  };

  const refreshData = React.useCallback(() => {
    setCurrentPage(1);

    if (hasActiveFilters) {
      loadAllNpos(true);
      return;
    }

    loadPagedNpos(1, rowsPerPage, true);
  }, [hasActiveFilters, loadAllNpos, loadPagedNpos, rowsPerPage]);

  const tableCustomStyles = React.useMemo(
    () => ({
      progress: {
        style: {
          backgroundColor: "transparent",
        },
      },
    }),
    []
  );

  const partnerFilterOptions = React.useMemo(() => {
    const buildOptions = (key: PartnerDropdownFieldKey) => {
      return Array.from(
        new Set(
          sourceData
            .map((row) => formatCellValue(row[key]).trim())
            .filter((value) => value.length > 0)
        )
      ).sort((a, b) => a.localeCompare(b));
    };

    return {
      apiPartnerName: buildOptions("apiPartnerName"),
      affiliateName: buildOptions("affiliateName"),
      instantPartnerName: buildOptions("instantPartnerName"),
    };
  }, [sourceData]);

  return (
    <span className="datatable">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2 text-[0.8125rem] text-defaulttextcolor">
        <div className="flex flex-col gap-1">
          <span>
            Rows loaded: <strong>{sourceData.length}</strong> | Total: <strong>{hasActiveFilters ? sourceData.length : totalRows}</strong>
          </span>
          <span>
            Last refresh: <strong>{lastRefreshedAt || "--"}</strong>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SpkButton variant="light" customClass="ti-btn" onclickfunc={refreshData}>
            <i className="bi bi-arrow-clockwise me-1"></i>
            Refresh
          </SpkButton>
          {showFilters ? (
            <SpkButton variant="light" customClass="ti-btn" onclickfunc={clearFilters}>
              Clear Filter
            </SpkButton>
          ) : null}
          <SpkButton variant="light" customClass="ti-btn" onclickfunc={toggleFilters}>
            <i className="bi bi-funnel me-1"></i>
            {showFilters ? "Hide Filter" : "Show Filter"}
          </SpkButton>
        </div>
      </div>

      {showFilters ? (
        <>
          <div className="mb-3 grid grid-cols-12 gap-3">
            {FILTER_FIELDS.map(({ key, label }) => (
              <div key={key} className="col-span-12 sm:col-span-6 xl:col-span-2">
                <input
                  type="text"
                  className={FILTER_CONTROL_CLASS}
                  placeholder={label}
                  value={filters[key]}
                  onChange={(event) => updateFilter(key, event.target.value)}
                />
              </div>
            ))}
            <div className="col-span-12 sm:col-span-6 xl:col-span-2">
              <select
                className={FILTER_CONTROL_CLASS}
                value={platformFilter}
                onChange={(event) => updatePlatformFilter(event.target.value as PlatformFilterValue)}
              >
                <option className="text-textmuted" value="">Platform Tiers</option>
                <option className="text-textmuted" value="Instant">Instant</option>
                <option className="text-textmuted" value="Premium">Premium</option>
              </select>
            </div>
          </div>
          <div className="mb-3 grid grid-cols-12 gap-3">
            {PARTNER_DROPDOWN_FIELDS.map(({ key, label }) => (
              <div key={key} className="col-span-12 sm:col-span-6 xl:col-span-4">
                <select
                  className={FILTER_CONTROL_CLASS}
                  value={partnerFilters[key]}
                  onChange={(event) => updatePartnerFilter(key, event.target.value)}
                >
                  <option className="text-textmuted" value="">
                    {key === "apiPartnerName"
                      ? "API Partners"
                      : key === "affiliateName"
                        ? "Affiliate Partners"
                        : "Instant Partners"}
                  </option>
                  {partnerFilterOptions[key].map((optionValue) => (
                    <option className="text-textmuted" key={`${key}-${optionValue}`} value={optionValue}>
                      {optionValue}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {errorMessage ? <p className="mb-3 text-danger">{errorMessage}</p> : null}

      <DataTable
        title
        columns={columns}
        data={filteredData}
        customStyles={tableCustomStyles}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
        paginationPerPage={rowsPerPage}
        paginationRowsPerPageOptions={Array.from(STANDARD_PAGE_SIZE_OPTIONS)}
        paginationComponentOptions={{
          selectAllRowsItem: true,
          selectAllRowsItemText: "All",
        }}
        {...(!hasActiveFilters
          ? {
              paginationServer: true,
              paginationTotalRows: totalRows,
              onChangePage: (page: number) => {
                setCurrentPage(page);
              },
              onChangeRowsPerPage: (nextRowsPerPage: number) => {
                setRowsPerPage(nextRowsPerPage);
                setCurrentPage(1);
              },
            }
          : {})}
        progressPending={isLoading}
        progressComponent={
          <div className="py-6 flex items-center justify-center">
            <SpkSpinner customClass="!w-6 !h-6 text-purple-500" Label="Loading">
              <span className="sr-only">Loading...</span>
            </SpkSpinner>
          </div>
        }
        sortIcon={<span className="hidden" />}
        onSort={(selectedColumn: any, direction: "asc" | "desc") => {
          setSortField(selectedColumn?.field ?? "");
          setSortDirection(direction);
        }}
      />
    </span>
  );
};

export default MasterNpoDataTable;
