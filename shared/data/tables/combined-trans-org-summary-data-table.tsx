"use client";

import React from "react";
import dynamic from "next/dynamic";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import { DEFAULT_PAGE_SIZE, STANDARD_PAGE_SIZE_OPTIONS } from "@/shared/lib/pagination";
import { CryptoValue } from "@/shared/lib/engiven-crypto";
import { StockValue } from "@/shared/lib/engiven-stock";
import { fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

type CryptoRow = Record<string, CryptoValue>;
type StockRow = Record<string, StockValue>;
type NpoLookupRow = Record<string, string | number | boolean | null>;

type NpoLocation = {
  city: string;
  state: string;
};

type SummaryRow = {
  rowId: string;
  npoName: string;
  npoCity: string;
  npoState: string;
  ein: string;
  transactionCount: number;
  grossTotal: number;
  feeTotal: number;
  netAfterFeesTotal: number;
  sentToOrgTotal: number;
};

const NPO_LOCATION_OVERRIDES: Record<string, NpoLocation> = {
  "The Engiven Foundation": { city: "Towson", state: "MD" },
  "Renaissance Charitable Foundation Inc.": { city: "Indianapolis", state: "IN" },
};

const US_STATE_ABBREVIATIONS: Record<string, string> = {
  ALABAMA: "AL",
  ALASKA: "AK",
  ARIZONA: "AZ",
  ARKANSAS: "AR",
  CALIFORNIA: "CA",
  COLORADO: "CO",
  CONNECTICUT: "CT",
  DELAWARE: "DE",
  FLORIDA: "FL",
  GEORGIA: "GA",
  HAWAII: "HI",
  IDAHO: "ID",
  ILLINOIS: "IL",
  INDIANA: "IN",
  IOWA: "IA",
  KANSAS: "KS",
  KENTUCKY: "KY",
  LOUISIANA: "LA",
  MAINE: "ME",
  MARYLAND: "MD",
  MASSACHUSETTS: "MA",
  MICHIGAN: "MI",
  MINNESOTA: "MN",
  MISSISSIPPI: "MS",
  MISSOURI: "MO",
  MONTANA: "MT",
  NEBRASKA: "NE",
  NEVADA: "NV",
  "NEW HAMPSHIRE": "NH",
  "NEW JERSEY": "NJ",
  "NEW MEXICO": "NM",
  "NEW YORK": "NY",
  "NORTH CAROLINA": "NC",
  "NORTH DAKOTA": "ND",
  OHIO: "OH",
  OKLAHOMA: "OK",
  OREGON: "OR",
  PENNSYLVANIA: "PA",
  "RHODE ISLAND": "RI",
  "SOUTH CAROLINA": "SC",
  "SOUTH DAKOTA": "SD",
  TENNESSEE: "TN",
  TEXAS: "TX",
  UTAH: "UT",
  VERMONT: "VT",
  VIRGINIA: "VA",
  WASHINGTON: "WA",
  "WEST VIRGINIA": "WV",
  WISCONSIN: "WI",
  WYOMING: "WY",
  "DISTRICT OF COLUMBIA": "DC",
};

const formatCellValue = (value: string | number | boolean | null | undefined) => {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return String(value);
};

const toNumber = (value: string | number | boolean | null | undefined) => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "boolean" || value === null || value === undefined) {
    return 0;
  }

  const parsed = Number(String(value).replace(/,/g, "").trim());
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatMoney = (value: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const toStateAbbreviation = (value: string) => {
  const normalized = value.trim();
  if (!normalized) {
    return "--";
  }

  if (/^[a-z]{2}$/i.test(normalized)) {
    return normalized.toUpperCase();
  }

  const byName = US_STATE_ABBREVIATIONS[normalized.toUpperCase()];
  if (byName) {
    return byName;
  }

  return normalized.slice(0, 2).toUpperCase();
};

const buildNpoLookupKey = (npoName: string, ein: string) => `${npoName.trim().toUpperCase()}__${ein.trim()}`;

const getOverriddenLocation = (npoName: string) => {
  return NPO_LOCATION_OVERRIDES[npoName.trim()] ?? null;
};

const getYearFromCryptoRow = (row: CryptoRow) => {
  const dateCandidate = formatCellValue(row.transactionConfirmedTimeStamp ?? row.createdAt).trim();
  if (!dateCandidate) {
    return "";
  }

  const parsed = new Date(dateCandidate);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return String(parsed.getFullYear());
};

const getYearFromStockRow = (row: StockRow) => {
  const dateCandidate = formatCellValue(row.receivedTimeStamp).trim();
  if (!dateCandidate) {
    return "";
  }

  const parsed = new Date(dateCandidate);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return String(parsed.getFullYear());
};

const shouldExcludeStockRow = (row: StockRow) => {
  const statusInternalName = formatCellValue(row.statusInternalName).trim().toLowerCase();
  return statusInternalName === "promised" || statusInternalName === "canceled";
};

const getCryptoIdentity = (row: CryptoRow) => {
  const fiscalSponsor = formatCellValue(row.fiscalSponsor).trim();
  if (fiscalSponsor === "1414") {
    return {
      npoName: "The Engiven Foundation",
      ein: "276601178",
      key: "The Engiven Foundation__276601178",
    };
  }

  const npoName = formatCellValue(row.npoName).trim() || "--";
  const ein = formatCellValue(row.EIN).trim() || "--";

  return {
    npoName,
    ein,
    key: `${npoName}__${ein}`,
  };
};

const getStockIdentity = (row: StockRow) => {
  const fiscalSponsor = formatCellValue(row.fiscalSponsor).trim();

  if (fiscalSponsor === "1414") {
    return {
      npoName: "The Engiven Foundation",
      ein: "276601178",
      key: "The Engiven Foundation__276601178",
    };
  }

  return {
    npoName: "Renaissance Charitable Foundation Inc.",
    ein: "352129262",
    key: "Renaissance Charitable Foundation Inc.__352129262",
  };
};

const compareValues = (left: string | number, right: string | number) => {
  if (typeof left === "number" && typeof right === "number") {
    return left - right;
  }

  return String(left).localeCompare(String(right), undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

const escapeCsvValue = (value: string) => {
  const normalized = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  if (/[",\n]/.test(normalized)) {
    return `"${normalized.replace(/"/g, '""')}"`;
  }
  return normalized;
};

const CombinedTransOrgSummaryDataTable = () => {
  const [cryptoData, setCryptoData] = React.useState<CryptoRow[]>([]);
  const [stockData, setStockData] = React.useState<StockRow[]>([]);
  const [npoLocations, setNpoLocations] = React.useState<Record<string, NpoLocation>>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [lastRefreshedAt, setLastRefreshedAt] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("ALL");

  const loadData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const [cryptoResult, stockResult, npoResult] = await Promise.all([
        fetchJsonWithClientCache<any>("/api/crypto/saved", {
          ttlMs: 60000,
          init: { method: "GET" },
        }),
        fetchJsonWithClientCache<any>("/api/stock/saved", {
          ttlMs: 60000,
          init: { method: "GET" },
        }),
        fetchJsonWithClientCache<any>("/api/npos/saved/?all=1", {
          ttlMs: 60000,
          init: { method: "GET" },
        }),
      ]);

      const cryptoPayload = cryptoResult.payload;
      const stockPayload = stockResult.payload;
      const npoPayload = npoResult.payload;

      if (!cryptoResult.ok || !cryptoPayload) {
        setErrorMessage(
          cryptoPayload?.error ?? `Failed to load crypto transactions (HTTP ${cryptoResult.status}).`
        );
        setCryptoData([]);
        setStockData([]);
        setNpoLocations({});
        return;
      }

      if (!stockResult.ok || !stockPayload) {
        setErrorMessage(
          stockPayload?.error ?? `Failed to load stock transactions (HTTP ${stockResult.status}).`
        );
        setCryptoData([]);
        setStockData([]);
        setNpoLocations({});
        return;
      }

      const cryptoRecords = Array.isArray(cryptoPayload?.records) ? cryptoPayload.records : [];
      const stockRecords = Array.isArray(stockPayload?.records) ? stockPayload.records : [];
      setCryptoData(cryptoRecords);
      setStockData(stockRecords);

      if (npoResult.ok && npoPayload) {
        const records = Array.isArray(npoPayload?.records) ? (npoPayload.records as NpoLookupRow[]) : [];
        const locationMap: Record<string, NpoLocation> = {};

        records.forEach((row) => {
          const npoName = String(row.npoName ?? "").trim();
          const ein = String(row.EIN ?? "").trim();
          if (!npoName || !ein) {
            return;
          }

          const city = String(row.city ?? "").trim() || "--";
          const state = toStateAbbreviation(String(row.state ?? ""));
          locationMap[buildNpoLookupKey(npoName, ein)] = { city, state };
        });

        setNpoLocations(locationMap);
      } else {
        setNpoLocations({});
      }

      setLastRefreshedAt(new Date().toLocaleString());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load combined transaction data.");
      setCryptoData([]);
      setStockData([]);
      setNpoLocations({});
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const availableYears = React.useMemo(() => {
    const years = new Set<string>();

    cryptoData.forEach((row) => {
      const year = getYearFromCryptoRow(row);
      if (year) {
        years.add(year);
      }
    });

    stockData
      .filter((row) => !shouldExcludeStockRow(row))
      .forEach((row) => {
        const year = getYearFromStockRow(row);
        if (year) {
          years.add(year);
        }
      });

    return Array.from(years).sort((a, b) => Number(b) - Number(a));
  }, [cryptoData, stockData]);

  const summaryData = React.useMemo(() => {
    const grouped = new Map<string, SummaryRow>();

    cryptoData.forEach((row) => {
      const year = getYearFromCryptoRow(row);
      if (selectedYear !== "ALL" && year !== selectedYear) {
        return;
      }

      const { npoName, ein, key } = getCryptoIdentity(row);
      const location =
        getOverriddenLocation(npoName) ?? npoLocations[buildNpoLookupKey(npoName, ein)] ?? { city: "--", state: "--" };

      const gross = toNumber(row.usdValueAtConfirmation);
      const payout = toNumber(row.usdValueForNpo);
      const fee = gross - payout;

      const existing = grouped.get(key);
      if (existing) {
        existing.transactionCount += 1;
        existing.grossTotal += gross;
        existing.feeTotal += fee;
        existing.netAfterFeesTotal += payout;
        existing.sentToOrgTotal += payout;
        return;
      }

      grouped.set(key, {
        rowId: key,
        npoName,
        npoCity: location.city,
        npoState: location.state,
        ein,
        transactionCount: 1,
        grossTotal: gross,
        feeTotal: fee,
        netAfterFeesTotal: payout,
        sentToOrgTotal: payout,
      });
    });

    stockData.forEach((row) => {
      if (shouldExcludeStockRow(row)) {
        return;
      }

      const year = getYearFromStockRow(row);
      if (selectedYear !== "ALL" && year !== selectedYear) {
        return;
      }

      const { npoName, ein, key } = getStockIdentity(row);
      const location =
        getOverriddenLocation(npoName) ?? npoLocations[buildNpoLookupKey(npoName, ein)] ?? { city: "--", state: "--" };

      const gross = toNumber(row.grossUSD);
      const payout = toNumber(row.netUSD);
      const fee = gross - payout;

      const existing = grouped.get(key);
      if (existing) {
        existing.transactionCount += 1;
        existing.grossTotal += gross;
        existing.feeTotal += fee;
        existing.netAfterFeesTotal += payout;
        existing.sentToOrgTotal += payout;
        return;
      }

      grouped.set(key, {
        rowId: key,
        npoName,
        npoCity: location.city,
        npoState: location.state,
        ein,
        transactionCount: 1,
        grossTotal: gross,
        feeTotal: fee,
        netAfterFeesTotal: payout,
        sentToOrgTotal: payout,
      });
    });

    return Array.from(grouped.values());
  }, [cryptoData, npoLocations, selectedYear, stockData]);

  const columns = React.useMemo<any[]>(
    () => [
      {
        name: "NPO Name",
        selector: (row: SummaryRow) => row.npoName,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => compareValues(a.npoName, b.npoName),
        field: "npoName",
        wrap: true,
      },
      {
        name: "NPO City",
        selector: (row: SummaryRow) => row.npoCity,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => compareValues(a.npoCity, b.npoCity),
        field: "npoCity",
      },
      {
        name: "NPO State",
        selector: (row: SummaryRow) => row.npoState,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => compareValues(a.npoState, b.npoState),
        field: "npoState",
      },
      {
        name: "NPO EIN",
        selector: (row: SummaryRow) => row.ein,
        cell: (row: SummaryRow) => <span className="font-mono tabular-nums">{row.ein}</span>,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => compareValues(a.ein, b.ein),
        field: "ein",
      },
      {
        name: "Total Transactions",
        selector: (row: SummaryRow) => row.transactionCount,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => a.transactionCount - b.transactionCount,
        field: "transactionCount",
      },
      {
        name: "Total $ Donations",
        selector: (row: SummaryRow) => formatMoney(row.grossTotal),
        cell: (row: SummaryRow) => <div className="w-full text-right tabular-nums">{formatMoney(row.grossTotal)}</div>,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => a.grossTotal - b.grossTotal,
        field: "grossTotal",
        style: { textAlign: "right" },
      },
      {
        name: "Total $ Fees",
        selector: (row: SummaryRow) => formatMoney(row.feeTotal),
        cell: (row: SummaryRow) => <div className="w-full text-right tabular-nums">{formatMoney(row.feeTotal)}</div>,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => a.feeTotal - b.feeTotal,
        field: "feeTotal",
        style: { textAlign: "right" },
      },
      {
        name: "Total $ Donations - Fees",
        selector: (row: SummaryRow) => formatMoney(row.netAfterFeesTotal),
        cell: (row: SummaryRow) =>
          <div className="w-full text-right tabular-nums">{formatMoney(row.netAfterFeesTotal)}</div>,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => a.netAfterFeesTotal - b.netAfterFeesTotal,
        field: "netAfterFeesTotal",
        style: { textAlign: "right" },
      },
      {
        name: "Total $ Sent to Organization",
        selector: (row: SummaryRow) => formatMoney(row.sentToOrgTotal),
        cell: (row: SummaryRow) =>
          <div className="w-full text-right tabular-nums">{formatMoney(row.sentToOrgTotal)}</div>,
        sortable: true,
        sortFunction: (a: SummaryRow, b: SummaryRow) => a.sentToOrgTotal - b.sentToOrgTotal,
        field: "sentToOrgTotal",
        style: { textAlign: "right" },
      },
    ],
    []
  );

  const exportFilteredAsCsv = React.useCallback(() => {
    if (summaryData.length === 0) {
      return;
    }

    const headers = [
      "NPO Name",
      "NPO City",
      "NPO State",
      "NPO EIN",
      "Total Transactions",
      "Total $ Donations",
      "Total $ Fees",
      "Total $ Donations - Fees",
      "Total $ Sent to Organization",
    ];

    const rows = summaryData.map((row) =>
      [
        row.npoName,
        row.npoCity,
        row.npoState,
        row.ein,
        String(row.transactionCount),
        formatMoney(row.grossTotal),
        formatMoney(row.feeTotal),
        formatMoney(row.netAfterFeesTotal),
        formatMoney(row.sentToOrgTotal),
      ]
        .map((value) => escapeCsvValue(value))
        .join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\r\n");
    const blob = new Blob([`\uFEFF${csvContent}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const yearSegment = selectedYear === "ALL" ? "all-years" : selectedYear;
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `combined-trans-org-summary-${yearSegment}-${timestamp}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }, [selectedYear, summaryData]);

  const bottomTotals = React.useMemo(() => {
    return summaryData.reduce(
      (accumulator, row) => ({
        transactionCount: accumulator.transactionCount + row.transactionCount,
        grossTotal: accumulator.grossTotal + row.grossTotal,
        feeTotal: accumulator.feeTotal + row.feeTotal,
        netAfterFeesTotal: accumulator.netAfterFeesTotal + row.netAfterFeesTotal,
        sentToOrgTotal: accumulator.sentToOrgTotal + row.sentToOrgTotal,
      }),
      {
        transactionCount: 0,
        grossTotal: 0,
        feeTotal: 0,
        netAfterFeesTotal: 0,
        sentToOrgTotal: 0,
      }
    );
  }, [summaryData]);

  return (
    <span className="datatable">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2 text-[0.8125rem] text-defaulttextcolor">
        <div className="flex flex-col gap-1">
          <span>
            Crypto loaded: <strong>{cryptoData.length}</strong> | Stock loaded: <strong>{stockData.length}</strong> | NPO summary rows: <strong>{summaryData.length}</strong>
          </span>
          <span>
            Last refresh: <strong>{lastRefreshedAt || "--"}</strong>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <SpkButton
            variant="primary"
            customClass={`ti-btn ${summaryData.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            onclickfunc={exportFilteredAsCsv}
          >
            Export CSV
          </SpkButton>
          <label className="mb-0 text-[0.75rem] text-textmuted">Year</label>
          <select
            className="form-control min-w-[10rem]"
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
          >
            <option value="ALL">All Years</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {errorMessage ? <p className="mb-3 text-danger">{errorMessage}</p> : null}

      <DataTable
        title
        columns={columns}
        data={summaryData}
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
      />

      <div className="mt-3 rounded-sm border border-defaultborder bg-defaultbackground/30 px-3 py-2 text-[0.8125rem]">
        <div className="grid grid-cols-12 gap-3 items-center">
          <div className="col-span-12 md:col-span-2 font-medium">Totals</div>
          <div className="col-span-12 md:col-span-2 text-end tabular-nums">
            <span className="text-textmuted me-1">Transactions:</span>
            <strong>{bottomTotals.transactionCount}</strong>
          </div>
          <div className="col-span-12 md:col-span-2 text-end tabular-nums">
            <span className="text-textmuted me-1">Gross:</span>
            <strong>{formatMoney(bottomTotals.grossTotal)}</strong>
          </div>
          <div className="col-span-12 md:col-span-2 text-end tabular-nums">
            <span className="text-textmuted me-1">Fees:</span>
            <strong>{formatMoney(bottomTotals.feeTotal)}</strong>
          </div>
          <div className="col-span-12 md:col-span-2 text-end tabular-nums">
            <span className="text-textmuted me-1">Donations - Fees:</span>
            <strong>{formatMoney(bottomTotals.netAfterFeesTotal)}</strong>
          </div>
          <div className="col-span-12 md:col-span-2 text-end tabular-nums">
            <span className="text-textmuted me-1">Sent to Org:</span>
            <strong>{formatMoney(bottomTotals.sentToOrgTotal)}</strong>
          </div>
        </div>
      </div>
    </span>
  );
};

export default CombinedTransOrgSummaryDataTable;
