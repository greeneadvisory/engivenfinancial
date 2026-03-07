"use client";

import React from "react";
import dynamic from "next/dynamic";
import differenceBy from "lodash/differenceBy";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import { DEFAULT_PAGE_SIZE, STANDARD_PAGE_SIZE_OPTIONS } from "@/shared/lib/pagination";
import { StockRecord, StockValue } from "@/shared/lib/engiven-stock";
import { fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

type TableStockRecord = StockRecord & { __rowId: string };

const STOCK_FIELDS = [
  "id",
  "createdAt",
  "updatedAt",
  "npo",
  "npoName",
  "EIN",
  "guideStarNPO",
  "guideStarName",
  "guideStarEIN",
  "apiPartner",
  "apiPartnerName",
  "instantPartner",
  "instantPartnerName",
  "affiliate",
  "affiliateName",
  "stockStatus",
  "statusInternalName",
  "statusExternalName",
  "promisedTimeStamp",
  "pledgeConfirmedTimeStamp",
  "receivedTimeStamp",
  "liquidatedTimeStamp",
  "paidTimeStamp",
  "grossUSD",
  "netUSD",
  "numberOfSharesPledged",
  "numberOfShares",
  "ticker",
  "tickerName",
  "typeOfShare",
  "sourceOfFunds",
  "donorName",
  "donorPhone",
  "donorAddress1",
  "donorAddress2",
  "donorCity",
  "donorState",
  "donorZipCode",
  "donorCountry",
  "donorMemo",
  "advisorName",
  "advisorEmail",
  "advisorPhone",
  "stockBrokerage",
  "fiscalSponsor",
] as const;

const FILTER_FIELDS = [
  { key: "id", label: "Transaction ID" },
  { key: "npoName", label: "NPO Name" },
  { key: "EIN", label: "EIN" },
  { key: "donorName", label: "Donor Name" },
  { key: "ticker", label: "Ticker" },
  { key: "statusExternalName", label: "Status" },
  { key: "apiPartnerName", label: "API Partner" },
] as const;

type FilterFieldKey = (typeof FILTER_FIELDS)[number]["key"];
type FilterState = Record<FilterFieldKey, string>;

const INITIAL_FILTERS: FilterState = {
  id: "",
  npoName: "",
  EIN: "",
  donorName: "",
  ticker: "",
  statusExternalName: "",
  apiPartnerName: "",
};

const FILTER_CONTROL_CLASS = "form-control text-textmuted dark:text-textmuted/50 text-[0.8125rem] font-normal";

const prettifyFieldName = (field: string) => {
  const withSpaces = field
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};

const formatCellValue = (value: StockValue) => {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return String(value);
};

const escapeCsvValue = (value: string) => {
  const normalized = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  if (/[",\n]/.test(normalized)) {
    return `"${normalized.replace(/"/g, '""')}"`;
  }
  return normalized;
};

const compareCellValues = (left: StockValue, right: StockValue) => {
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

const MasterStockTransDataTable = () => {
  const [data, setData] = React.useState<TableStockRecord[]>([]);
  const [selectedRows, setSelectedRows] = React.useState<TableStockRecord[]>([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [lastRefreshedAt, setLastRefreshedAt] = React.useState<string>("");
  const [sortField, setSortField] = React.useState<string>("");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");
  const [filters, setFilters] = React.useState<FilterState>(INITIAL_FILTERS);
  const [showFilters, setShowFilters] = React.useState(false);

  const loadStock = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const result = await fetchJsonWithClientCache<any>("/api/stock/saved", {
        ttlMs: 60000,
        init: { method: "GET" },
      });

      const payload = result.payload;

      if (!result.ok) {
        setErrorMessage(payload?.error ?? `Failed to load stock transactions (HTTP ${result.status}).`);
        setData([]);
        return;
      }

      if (!payload) {
        setErrorMessage("Stock API returned non-JSON content.");
        setData([]);
        return;
      }

      const records = Array.isArray(payload?.records) ? payload.records : [];
      const normalizedRows = records.map((row: Record<string, StockValue>, index: number) => ({
        ...row,
        __rowId: String(row.id ?? `stock-${index}`),
      }));

      setData(normalizedRows);
      setLastRefreshedAt(new Date().toLocaleString());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load stock transactions.");
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadStock();
  }, [loadStock]);

  const handleRowSelected = React.useCallback((state: { selectedRows: unknown[] }) => {
    setSelectedRows(state.selectedRows as TableStockRecord[]);
  }, []);

  const exportSelectedAsCsv = React.useCallback(() => {
    if (selectedRows.length === 0) {
      return;
    }

    const headers = [...STOCK_FIELDS];
    const csvRows = selectedRows.map((row) =>
      headers.map((field) => escapeCsvValue(formatCellValue(row[field]))).join(",")
    );

    const csvContent = [headers.join(","), ...csvRows].join("\r\n");
    const blob = new Blob([`\uFEFF${csvContent}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `master-stock-trans-selected-${timestamp}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }, [selectedRows]);

  const columns = React.useMemo<any[]>(
    () =>
      STOCK_FIELDS.map((field) => ({
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
        selector: (row: TableStockRecord) => formatCellValue(row[field]),
        sortable: true,
        wrap: true,
        sortFunction: (rowA: TableStockRecord, rowB: TableStockRecord) =>
          compareCellValues(rowA[field], rowB[field]),
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

  const filteredData = React.useMemo(() => {
    return data.filter((row) => {
      return FILTER_FIELDS.every(({ key }) => {
        const filterValue = filters[key].trim().toLowerCase();
        if (!filterValue) {
          return true;
        }

        const candidateValue = formatCellValue(row[key]).toLowerCase();
        return candidateValue.includes(filterValue);
      });
    });
  }, [data, filters]);

  const updateFilter = (key: FilterFieldKey, value: string) => {
    setFilters((previous) => ({ ...previous, [key]: value }));
  };

  const clearFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const toggleFilters = () => {
    setShowFilters((previous) => !previous);
  };

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

  return (
    <span className="datatable">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2 text-[0.8125rem] text-defaulttextcolor">
        <div className="flex flex-col gap-1">
          <span>
            Rows loaded: <strong>{data.length}</strong> | Showing: <strong>{filteredData.length}</strong>
          </span>
          <span>
            Last refresh: <strong>{lastRefreshedAt || "--"}</strong>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SpkButton
            variant="primary"
            customClass={`ti-btn ${selectedRows.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onclickfunc={exportSelectedAsCsv}
          >
            Export CSV
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
        <div className="mb-3 grid grid-cols-12 gap-3">
          {FILTER_FIELDS.map(({ key, label }) => (
            <div key={key} className="col-span-12 sm:col-span-6 xl:col-span-3">
              <input
                type="text"
                className={FILTER_CONTROL_CLASS}
                placeholder={label}
                value={filters[key]}
                onChange={(event) => updateFilter(key, event.target.value)}
              />
            </div>
          ))}
        </div>
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
        paginationPerPage={DEFAULT_PAGE_SIZE}
        paginationRowsPerPageOptions={Array.from(STANDARD_PAGE_SIZE_OPTIONS)}
        paginationComponentOptions={{
          selectAllRowsItem: true,
          selectAllRowsItemText: "All",
        }}
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

export default MasterStockTransDataTable;
