"use client";

import React from "react";
import dynamic from "next/dynamic";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import Loader from "@/shared/layouts-components/loader/loader";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, STANDARD_PAGE_SIZE_OPTIONS, getTotalPages } from "@/shared/lib/pagination";
import { CRYPTO_FIELDS, formatCryptoValue } from "@/shared/lib/crypto-sync";
import { CryptoRecord } from "@/shared/lib/engiven-crypto";
import { clearClientFetchCache, fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

type BatchableRecord = CryptoRecord & { batchTransactionNumber?: string | null; __rowId: string };

const DEFAULT_VISIBLE_ORDER = [
  "statusFromAdmin",
  "transactionConfirmedTimeStamp",
  "fiscalSponsor",
  "npoName",
  "partner",
  "usdValueAtConfirmation",
  "engivenFee",
  "usdValueForNpo",
] as const;
const CHECKBOX_INPUT_CLASS =
  "h-4 w-4 cursor-pointer rounded border border-slate-400 bg-white accent-primary shadow-sm focus:ring-2 focus:ring-primary/30 dark:border-defaultborder dark:bg-bodybg";
const SELECTION_COLUMN_WIDTH = 40;
const VIEW_ACTION_COLUMN_WIDTH = 72;
const MAX_MANUAL_COLUMN_WIDTH = 220;
const TABLE_WIDTH_GUTTER = 28;

const NPO_NAME_WRAP_SAMPLE = "CORPORACION PARA EL DESARROLLO DE ESCUELAS ALIANZAS";
const NPO_NAME_MAX_CHARS = NPO_NAME_WRAP_SAMPLE.length;
const MONEY_FIELDS = new Set<string>(["usdValueAtConfirmation", "engivenFee", "usdValueForNpo"]);
const WRAPPED_FIELDS = new Set<string>([
  "transactionConfirmedTimeStamp",
  "fiscalSponsor",
  "npoName",
  "partner",
  "statusFromAdmin",
]);

const prettifyFieldName = (field: string) => {
  const withSpaces = field
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};

const formatPstDateTime = (value: string | number | boolean | null) => {
  const rawValue = formatCryptoValue(value);
  if (!rawValue) {
    return "";
  }

  const date = new Date(rawValue);
  if (Number.isNaN(date.getTime())) {
    return rawValue;
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);

  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const day = parts.find((part) => part.type === "day")?.value ?? "";
  const year = parts.find((part) => part.type === "year")?.value ?? "";
  const hour = parts.find((part) => part.type === "hour")?.value ?? "";
  const minute = parts.find((part) => part.type === "minute")?.value ?? "";
  const dayPeriod = (parts.find((part) => part.type === "dayPeriod")?.value ?? "").toUpperCase();

  return `${year}-${month}-${day} ${hour}:${minute} ${dayPeriod} PST`;
};

const compareCellValues = (left: string | number | boolean | null, right: string | number | boolean | null) => {
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

const toNumber = (value: string | number | boolean | null) => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "boolean" || value === null) {
    return 0;
  }

  const trimmed = String(value).trim();
  if (!trimmed) {
    return 0;
  }

  const parsed = Number(trimmed.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const calculateEngivenFee = (row: BatchableRecord) => {
  const gross = toNumber(row.usdValueAtConfirmation as string | number | boolean | null);
  const payout = toNumber(row.usdValueForNpo as string | number | boolean | null);
  return gross - payout;
};

const formatMoney = (value: string | number | boolean | null) => {
  const amount = toNumber(value);
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const getApiFieldDisplayName = (field: string) => {
  if (field === "usdValueAtConfirmation") {
    return "Gross";
  }
  if (field === "usdValueForNpo") {
    return "Payout";
  }
  if (field === "statusFromAdmin") {
    return "Status";
  }
  return prettifyFieldName(field);
};

const getGuideStarName = (row: BatchableRecord) => formatCryptoValue(row.guideStarName ?? null).trim();

const getNpoDisplayName = (row: BatchableRecord) => {
  const guideStarName = getGuideStarName(row);
  if (guideStarName.length > 0) {
    return guideStarName;
  }

  return formatCryptoValue(row.npoName ?? null);
};

const getPartnerName = (row: BatchableRecord) => {
  if (getGuideStarName(row).length > 0) {
    return "Give to Any NPO";
  }

  const partnerCandidates = [
    row.apiPartnerName,
    (row as Record<string, unknown>).affiliatePartnerName as string | number | boolean | null | undefined,
    (row as Record<string, unknown>).instantPartnerName as string | number | boolean | null | undefined,
  ];

  for (const candidate of partnerCandidates) {
    const value = formatCryptoValue((candidate as string | number | boolean | null) ?? null).trim();
    if (value.length > 0) {
      return value;
    }
  }

  return "";
};

const getTransactionId = (row: BatchableRecord) => formatCryptoValue(row.id).trim();

const compareLoadedRecords = (left: BatchableRecord, right: BatchableRecord) => {
  const leftCreatedAt = formatCryptoValue(left.createdAt ?? null).trim();
  const rightCreatedAt = formatCryptoValue(right.createdAt ?? null).trim();

  if (leftCreatedAt && rightCreatedAt) {
    const createdAtComparison = compareCellValues(rightCreatedAt, leftCreatedAt);
    if (createdAtComparison !== 0) {
      return createdAtComparison;
    }
  } else if (leftCreatedAt || rightCreatedAt) {
    return leftCreatedAt ? -1 : 1;
  }

  return getTransactionId(left).localeCompare(getTransactionId(right), undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

const withRowIds = (rows: BatchableRecord[]) =>
  rows.map((record, index) => ({
    ...record,
    __rowId: String(record.id ?? `crypto-batch-${index}`),
  }));

const haveSameSelectedRows = (left: BatchableRecord[], right: BatchableRecord[]) => {
  if (left.length !== right.length) {
    return false;
  }

  const leftIds = new Set(left.map((row) => getTransactionId(row)).filter((id) => id.length > 0));
  if (leftIds.size !== right.length) {
    return false;
  }

  return right.every((row) => leftIds.has(getTransactionId(row)));
};

const isBatchedRecord = (row: BatchableRecord) =>
  formatCryptoValue(row.batchTransactionNumber ?? null).trim().length > 0;

const isAcceptedRecord = (row: BatchableRecord) =>
  formatCryptoValue((row as Record<string, unknown>).acceptedAt as string | number | boolean | null).trim().length > 0;

const isHiddenRecord = (row: BatchableRecord) =>
  formatCryptoValue((row as Record<string, unknown>).hiddenAt as string | number | boolean | null).trim().length > 0;

const getStatusValue = (row: BatchableRecord) =>
  formatCryptoValue(row.statusFromAdmin ?? null).trim().toLowerCase();

const isPendingStatus = (row: BatchableRecord) => getStatusValue(row) === "pending";

const isCompletedStatus = (row: BatchableRecord) => getStatusValue(row) === "completed";

const getStatusBadgeClassName = (row: BatchableRecord) => {
  if (isHiddenRecord(row)) {
    return "bg-warning text-white";
  }

  if (isBatchedRecord(row) && isCompletedStatus(row)) {
    return "bg-primary text-white";
  }

  if (isAcceptedRecord(row) && isCompletedStatus(row)) {
    return "bg-info text-white";
  }

  return "";
};

const formatBatchingFieldValue = (field: string, value: string | number | boolean | null, row?: BatchableRecord) => {
  if (field === "npoName" && row) {
    return getNpoDisplayName(row);
  }

  if (field === "partner" && row) {
    return getPartnerName(row);
  }

  const formattedValue = formatCryptoValue(value);

  if (field === "fiscalSponsor" && formattedValue.trim() === "1414") {
    return "ENGV";
  }

  return formattedValue;
};

const toColumnWidth = (maxLength: number, fieldKey?: string) => {
  const safeLength = Math.max(maxLength, 1);
  const estimatedPx = safeLength * 7 + 28;

  const minByField: Record<string, number> = {
    statusFromAdmin: 96,
    transactionConfirmedTimeStamp: 132,
    fiscalSponsor: 88,
    npoName: 140,
    partner: 120,
    usdValueAtConfirmation: 96,
    engivenFee: 96,
    usdValueForNpo: 96,
  };

  const maxByField: Record<string, number> = {
    statusFromAdmin: 120,
    transactionConfirmedTimeStamp: 150,
    fiscalSponsor: 92,
    npoName: 170,
    partner: 150,
    usdValueAtConfirmation: 110,
    engivenFee: 110,
    usdValueForNpo: 110,
  };

  const minWidthPx = fieldKey ? (minByField[fieldKey] ?? 96) : 96;
  const maxWidthPx = fieldKey ? (maxByField[fieldKey] ?? 140) : 140;
  return `${Math.min(Math.max(estimatedPx, minWidthPx), maxWidthPx)}px`;
};

const BATCHING_FIELD_COLUMNS = [
  ...CRYPTO_FIELDS.filter((field) => field !== "geminiFee" && field !== "id").map((field) => ({
  key: field,
  defaultName:
    field === "statusFromAdmin"
        ? "Status"
        : field === "transactionConfirmedTimeStamp"
          ? "Date"
          : field === "npoName"
            ? "NPO"
            : field === "usdValueAtConfirmation"
              ? "Gross"
              : field === "usdValueForNpo"
                      ? "Payout"
                : field === "batchTransactionNumber"
                  ? "Batch Transaction #"
                  : prettifyFieldName(field),
  selector: (row: BatchableRecord) =>
    field === "transactionConfirmedTimeStamp"
      ? formatPstDateTime(row[field as keyof BatchableRecord] as string | number | boolean | null)
      : field === "usdValueAtConfirmation" || field === "usdValueForNpo"
        ? formatMoney(row[field as keyof BatchableRecord] as string | number | boolean | null)
        : formatBatchingFieldValue(field, row[field as keyof BatchableRecord] as string | number | boolean | null, row),
  sortable: true,
  wrap: WRAPPED_FIELDS.has(field),
  })),
  {
    key: "partner",
    defaultName: "Partner",
    selector: (row: BatchableRecord) => getPartnerName(row),
    sortable: true,
    wrap: true,
  },
  {
    key: "engivenFee",
    defaultName: "Fee",
    selector: (row: BatchableRecord) => formatMoney(calculateEngivenFee(row)),
    sortable: true,
    wrap: false,
  },
] as const;

type BatchingFieldKey = (typeof BATCHING_FIELD_COLUMNS)[number]["key"];

type CryptoDonationsTableSettings = {
  orderedFieldKeys?: unknown;
  hiddenFieldKeys?: unknown;
  displayNames?: unknown;
  manualColumnWidths?: unknown;
};

const DEFAULT_MANUAL_COLUMN_WIDTHS: Partial<Record<BatchingFieldKey, number>> = {
  statusFromAdmin: 100,
  transactionConfirmedTimeStamp: 170,
  fiscalSponsor: 80,
  npoName: 220,
  partner: 120,
  usdValueAtConfirmation: 80,
  engivenFee: 80,
  usdValueForNpo: 80,
};

const getAllowedBatchingFieldKeys = () => new Set<string>(BATCHING_FIELD_COLUMNS.map((column) => column.key));

const normalizeOrderedFieldKeys = (value: unknown) => {
  const allowedKeys = getAllowedBatchingFieldKeys();

  if (!Array.isArray(value)) {
    return getDefaultOrderedFieldKeys();
  }

  const normalizedOrdered = value.filter(
    (key): key is BatchingFieldKey => typeof key === "string" && allowedKeys.has(key)
  );
  const missingKeys = BATCHING_FIELD_COLUMNS.map((column) => column.key).filter((key) => !normalizedOrdered.includes(key));

  return (normalizedOrdered.length > 0 ? [...normalizedOrdered, ...missingKeys] : getDefaultOrderedFieldKeys()) as BatchingFieldKey[];
};

const normalizeHiddenFieldKeys = (value: unknown) => {
  const allowedKeys = getAllowedBatchingFieldKeys();

  if (!Array.isArray(value)) {
    return getDefaultHiddenFieldKeys();
  }

  return Array.from(
    new Set(
      value.filter((key): key is BatchingFieldKey => typeof key === "string" && allowedKeys.has(key))
    )
  ) as BatchingFieldKey[];
};

const normalizeDisplayNames = (value: unknown) => {
  const allowedKeys = getAllowedBatchingFieldKeys();
  const nextDisplayNames = getDefaultDisplayNames();

  if (!value || typeof value !== "object") {
    return nextDisplayNames;
  }

  Object.entries(value as Record<string, unknown>).forEach(([key, fieldValue]) => {
    if (allowedKeys.has(key) && typeof fieldValue === "string") {
      nextDisplayNames[key as BatchingFieldKey] = fieldValue;
    }
  });

  return nextDisplayNames;
};

const normalizeManualColumnWidths = (value: unknown) => {
  const allowedKeys = getAllowedBatchingFieldKeys();
  const next: Partial<Record<BatchingFieldKey, number>> = {
    ...DEFAULT_MANUAL_COLUMN_WIDTHS,
  };

  if (!value || typeof value !== "object") {
    return next;
  }

  Object.entries(value as Record<string, unknown>).forEach(([key, fieldValue]) => {
    if (!allowedKeys.has(key)) {
      return;
    }

    const numericValue = Number(fieldValue);
    if (Number.isFinite(numericValue) && numericValue >= 80 && numericValue <= MAX_MANUAL_COLUMN_WIDTH) {
      next[key as BatchingFieldKey] = Math.round(numericValue);
    }
  });

  return next;
};

type FooterCell = {
  key: string;
  width: string;
  align?: "left" | "right";
  content: React.ReactNode;
};

type CryptoDonationsPaginationProps = {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: (page: number, totalRows: number) => void;
  onChangeRowsPerPage: (rowsPerPage: number, currentPage: number) => void;
  footerCells: FooterCell[];
};

const CryptoDonationsPagination = ({
  rowsPerPage,
  rowCount,
  currentPage,
  onChangePage,
  onChangeRowsPerPage,
  footerCells,
}: CryptoDonationsPaginationProps) => {
  const safeRowsPerPage = Math.max(rowsPerPage, 1);
  const pageCount = Math.max(1, Math.ceil(rowCount / safeRowsPerPage));
  const boundedPage = Math.min(Math.max(currentPage, 1), pageCount);
  const fromRow = rowCount === 0 ? 0 : (boundedPage - 1) * safeRowsPerPage + 1;
  const toRow = rowCount === 0 ? 0 : Math.min(boundedPage * safeRowsPerPage, rowCount);

  return (
    <div>
      <div className="overflow-x-auto bg-white dark:bg-defaultbackground/30">
        <div className="flex min-w-fit items-stretch text-[0.8125rem] text-defaulttextcolor">
          <div
            className="shrink-0"
            style={{ width: `${SELECTION_COLUMN_WIDTH}px`, minWidth: `${SELECTION_COLUMN_WIDTH}px` }}
          ></div>
          {footerCells.map((cell) => (
            <div
              key={cell.key}
              className={`shrink-0 px-3 py-2 tabular-nums ${
                cell.align === "right" ? "text-right" : "text-left"
              }`}
              style={{ width: cell.width, minWidth: cell.width, maxWidth: cell.width }}
            >
              <span
                className={`block w-full font-semibold ${cell.align === "right" ? "text-right" : "text-left"}`}
              >
                {cell.content}
              </span>
            </div>
          ))}
          <div
            className="shrink-0"
            style={{ width: `${VIEW_ACTION_COLUMN_WIDTH}px`, minWidth: `${VIEW_ACTION_COLUMN_WIDTH}px` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white px-3 py-2 text-[0.8125rem] text-defaulttextcolor dark:bg-bodybg md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            className="form-control !w-auto !min-w-[5rem] py-1"
            value={safeRowsPerPage}
            onChange={(event) => onChangeRowsPerPage(Number(event.target.value), boundedPage)}
          >
            {STANDARD_PAGE_SIZE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          <span>
            {fromRow}-{toRow} of {rowCount}
          </span>
          <button
            type="button"
            className={`ti-btn ti-btn-light !px-2 !py-1 ${boundedPage <= 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => onChangePage(boundedPage - 1, rowCount)}
            disabled={boundedPage <= 1}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            type="button"
            className={`ti-btn ti-btn-light !px-2 !py-1 ${boundedPage >= pageCount ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => onChangePage(boundedPage + 1, rowCount)}
            disabled={boundedPage >= pageCount}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const getDefaultOrderedFieldKeys = () =>
  [
    ...DEFAULT_VISIBLE_ORDER,
    ...BATCHING_FIELD_COLUMNS.map((column) => column.key).filter(
      (key) => !DEFAULT_VISIBLE_ORDER.includes(key as (typeof DEFAULT_VISIBLE_ORDER)[number])
    ),
  ] as BatchingFieldKey[];

const getDefaultHiddenFieldKeys = () =>
  BATCHING_FIELD_COLUMNS.map((column) => column.key).filter(
    (key) => !DEFAULT_VISIBLE_ORDER.includes(key as (typeof DEFAULT_VISIBLE_ORDER)[number])
  ) as BatchingFieldKey[];

const getDefaultDisplayNames = () => {
  const initialNames: Record<string, string> = {};
  BATCHING_FIELD_COLUMNS.forEach((column) => {
    initialNames[column.key] = column.defaultName;
  });
  return initialNames as Record<BatchingFieldKey, string>;
};

const CryptoBatchingDataTable = () => {
  const [records, setRecords] = React.useState<BatchableRecord[]>([]);
  const [allLoadedRecords, setAllLoadedRecords] = React.useState<BatchableRecord[]>([]);
  const [hasLoadedAllRecords, setHasLoadedAllRecords] = React.useState(false);
  const [totalRows, setTotalRows] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState<number>(DEFAULT_PAGE);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(DEFAULT_PAGE_SIZE);
  const [selectedRows, setSelectedRows] = React.useState<BatchableRecord[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSelectingAllRows, setIsSelectingAllRows] = React.useState(false);
  const [isSavingBatch, setIsSavingBatch] = React.useState(false);
  const [isAcceptingRows, setIsAcceptingRows] = React.useState(false);
  const [isUnbatchingRows, setIsUnbatchingRows] = React.useState(false);
  const [isHidingRows, setIsHidingRows] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [showFieldModal, setShowFieldModal] = React.useState(false);
  const [showBatchModal, setShowBatchModal] = React.useState(false);
  const [batchNameDraft, setBatchNameDraft] = React.useState("");
  const [viewRecord, setViewRecord] = React.useState<BatchableRecord | null>(null);
  const [showHiddenRows, setShowHiddenRows] = React.useState(false);
  const [paginationResetToggle, setPaginationResetToggle] = React.useState(false);
  const [sortField, setSortField] = React.useState<string>("transactionConfirmedTimeStamp");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("desc");
  const [orderedFieldKeys, setOrderedFieldKeys] = React.useState<BatchingFieldKey[]>(getDefaultOrderedFieldKeys);
  React.useEffect(() => {
    setOrderedFieldKeys((previous) => {
      const npoIndex = previous.indexOf("npoName" as BatchingFieldKey);
      const partnerIndex = previous.indexOf("partner" as BatchingFieldKey);

      if (npoIndex === -1 || partnerIndex === -1 || partnerIndex === npoIndex + 1) {
        return previous;
      }

      const next = previous.filter((key) => key !== ("partner" as BatchingFieldKey));
      next.splice(npoIndex + 1, 0, "partner" as BatchingFieldKey);
      return next;
    });
  }, []);
  const [hiddenFieldKeys, setHiddenFieldKeys] = React.useState<BatchingFieldKey[]>(getDefaultHiddenFieldKeys);
  const [displayNames, setDisplayNames] = React.useState<Record<BatchingFieldKey, string>>(getDefaultDisplayNames);
  const [manualColumnWidths, setManualColumnWidths] = React.useState<Partial<Record<BatchingFieldKey, number>>>(
    () => ({ ...DEFAULT_MANUAL_COLUMN_WIDTHS })
  );
  const [widthInputDrafts, setWidthInputDrafts] = React.useState<Partial<Record<BatchingFieldKey, string>>>({});
  const tableContainerRef = React.useRef<HTMLSpanElement | null>(null);
  const selectAllCheckboxRef = React.useRef<HTMLInputElement | null>(null);
  const allLoadedRecordsRef = React.useRef<BatchableRecord[]>([]);
  const hasLoadedAllRecordsRef = React.useRef(false);
  const backgroundLoadRequestRef = React.useRef(0);
  const hasLoadedServerTableSettingsRef = React.useRef(false);
  const saveTableSettingsTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [availableTableWidth, setAvailableTableWidth] = React.useState(0);

  React.useEffect(() => {
    allLoadedRecordsRef.current = allLoadedRecords;
  }, [allLoadedRecords]);

  React.useEffect(() => {
    hasLoadedAllRecordsRef.current = hasLoadedAllRecords;
  }, [hasLoadedAllRecords]);

  React.useEffect(() => {
    let isCancelled = false;

    const loadTableSettings = async () => {
      try {
        const result = await fetchJsonWithClientCache<{ settings?: CryptoDonationsTableSettings | null }>(
          "/api/crypto/table-settings",
          {
            ttlMs: 60000,
            init: { method: "GET" },
          }
        );

        if (isCancelled) {
          return;
        }

        const settings = result.payload?.settings;
        if (result.ok && settings) {
          setOrderedFieldKeys(normalizeOrderedFieldKeys(settings.orderedFieldKeys));
          setHiddenFieldKeys(normalizeHiddenFieldKeys(settings.hiddenFieldKeys));
          setDisplayNames(normalizeDisplayNames(settings.displayNames));
          setManualColumnWidths(normalizeManualColumnWidths(settings.manualColumnWidths));
        }
      } finally {
        if (!isCancelled) {
          hasLoadedServerTableSettingsRef.current = true;
        }
      }
    };

    void loadTableSettings();

    return () => {
      isCancelled = true;
    };
  }, []);

  React.useEffect(() => {
    if (!hasLoadedServerTableSettingsRef.current) {
      return;
    }

    if (saveTableSettingsTimeoutRef.current) {
      clearTimeout(saveTableSettingsTimeoutRef.current);
    }

    saveTableSettingsTimeoutRef.current = setTimeout(async () => {
      try {
        await fetch("/api/crypto/table-settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderedFieldKeys,
            hiddenFieldKeys,
            displayNames,
            manualColumnWidths,
          }),
        });
        clearClientFetchCache("/api/crypto/table-settings");
      } catch {
        // Ignore save failures and keep the in-memory settings.
      }
    }, 300);

    return () => {
      if (saveTableSettingsTimeoutRef.current) {
        clearTimeout(saveTableSettingsTimeoutRef.current);
        saveTableSettingsTimeoutRef.current = null;
      }
    };
  }, [displayNames, hiddenFieldKeys, manualColumnWidths, orderedFieldKeys]);

  const mergeLoadedRecords = React.useCallback((incomingRecords: BatchableRecord[]) => {
    if (incomingRecords.length === 0) {
      return;
    }

    setAllLoadedRecords((previous) => {
      const nextMap = new Map(previous.map((record) => [getTransactionId(record), record]));

      incomingRecords.forEach((record) => {
        const transactionId = getTransactionId(record);
        if (transactionId) {
          nextMap.set(transactionId, record);
        }
      });

      return Array.from(nextMap.values()).sort(compareLoadedRecords);
    });
  }, []);

  React.useEffect(() => {
    const element = tableContainerRef.current;
    if (!element || typeof ResizeObserver === "undefined") {
      return;
    }

    const updateWidth = () => {
      setAvailableTableWidth(element.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const visibleRecords = React.useMemo(() => {
    let nextRecords = records;

    if (!showHiddenRows) {
      nextRecords = nextRecords.filter((record) => !isHiddenRecord(record));
    }

    return nextRecords;
  }, [records, showHiddenRows]);

  const selectedUnbatchedRows = React.useMemo(
    () => selectedRows.filter((row) => !isBatchedRecord(row)),
    [selectedRows]
  );

  const selectedBatchedRows = React.useMemo(
    () => selectedRows.filter((row) => isBatchedRecord(row)),
    [selectedRows]
  );

  const selectedAcceptedRows = React.useMemo(
    () => selectedRows.filter((row) => isAcceptedRecord(row)),
    [selectedRows]
  );

  const selectedHiddenRows = React.useMemo(
    () => selectedRows.filter((row) => isHiddenRecord(row)),
    [selectedRows]
  );

  const selectedVisibleRows = React.useMemo(
    () => selectedRows.filter((row) => !isHiddenRecord(row)),
    [selectedRows]
  );

  const selectedUnacceptedRows = React.useMemo(
    () => selectedRows.filter((row) => !isAcceptedRecord(row)),
    [selectedRows]
  );

  const selectedTransactionIds = React.useMemo(
    () => new Set(selectedRows.map((row) => getTransactionId(row)).filter((id) => id.length > 0)),
    [selectedRows]
  );
  const allFilteredSelected = totalRows > 0 && selectedTransactionIds.size === totalRows;
  const someFilteredSelected = selectedTransactionIds.size > 0 && !allFilteredSelected;

  const isRowSelected = React.useCallback(
    (row: unknown) => selectedTransactionIds.has(getTransactionId(row as BatchableRecord)),
    [selectedTransactionIds]
  );

  React.useEffect(() => {
    if (selectAllCheckboxRef.current) {
      selectAllCheckboxRef.current.indeterminate = someFilteredSelected;
    }
  }, [someFilteredSelected]);

  const canHide =
    selectedVisibleRows.length > 0 &&
    selectedHiddenRows.length === 0 &&
    selectedUnacceptedRows.length === selectedVisibleRows.length;
  const canUnhide = selectedHiddenRows.length > 0 && selectedVisibleRows.length === 0;
  const canAccept =
    selectedUnacceptedRows.length > 0 &&
    selectedAcceptedRows.length === 0 &&
    selectedBatchedRows.length === 0 &&
    selectedUnacceptedRows.every((row) => !isPendingStatus(row));
  const canRevoke =
    selectedAcceptedRows.length > 0 && selectedUnacceptedRows.length === 0 && selectedBatchedRows.length === 0;
  const canBatch =
    selectedUnbatchedRows.length > 0 &&
    selectedBatchedRows.length === 0 &&
    selectedAcceptedRows.length === selectedUnbatchedRows.length;
  const canUnbatch = selectedBatchedRows.length > 0 && selectedUnbatchedRows.length === 0;
  const canToggleHide = canHide || canUnhide;
  const canToggleReview = canAccept || canRevoke;
  const canToggleBatch = canBatch || canUnbatch;
  const isAnyActionBusy = isSelectingAllRows || isSavingBatch || isAcceptingRows || isUnbatchingRows || isHidingRows;

  const selectedTotals = React.useMemo(() => {
    const grossTotal = selectedRows.reduce(
      (sum, row) => sum + toNumber(row.usdValueAtConfirmation as string | number | boolean | null),
      0
    );
    const engivenFeeTotal = selectedRows.reduce((sum, row) => sum + calculateEngivenFee(row), 0);
    const payoutTotal = selectedRows.reduce(
      (sum, row) => sum + toNumber(row.usdValueForNpo as string | number | boolean | null),
      0
    );

    return {
      selectedCount: selectedRows.length,
      gross: formatMoney(grossTotal),
      engivenFee: formatMoney(engivenFeeTotal),
      payout: formatMoney(payoutTotal),
    };
  }, [selectedRows]);

  const baseColumnWidths = React.useMemo(() => {
    const widths: Record<BatchingFieldKey, string> = {} as Record<BatchingFieldKey, string>;

    BATCHING_FIELD_COLUMNS.forEach((column) => {
      const headerLength = (displayNames[column.key] ?? column.defaultName).length;
      const maxValueLength = visibleRecords.reduce((maxLength, row) => {
        const cellValue = String(column.selector(row) ?? "");
        return Math.max(maxLength, cellValue.length);
      }, 0);

      const uncappedLength = Math.max(headerLength, maxValueLength);
      const cappedLength = column.key === "npoName" ? Math.min(uncappedLength, NPO_NAME_MAX_CHARS) : uncappedLength;

      const autoWidth = toColumnWidth(cappedLength, column.key);
      const manualWidth = manualColumnWidths[column.key];
      widths[column.key] = manualWidth ? `${manualWidth}px` : autoWidth;
    });

    return widths;
  }, [displayNames, manualColumnWidths, visibleRecords]);

  const visibleDataColumns = React.useMemo(() => {
    return orderedFieldKeys
      .map((key) => BATCHING_FIELD_COLUMNS.find((column) => column.key === key))
      .filter((column): column is (typeof BATCHING_FIELD_COLUMNS)[number] => !!column)
      .filter((column) => !hiddenFieldKeys.includes(column.key));
  }, [hiddenFieldKeys, orderedFieldKeys]);

  const columnWidths = React.useMemo(() => {
    const widths = { ...baseColumnWidths };
    const contentWidth = availableTableWidth - SELECTION_COLUMN_WIDTH - VIEW_ACTION_COLUMN_WIDTH - TABLE_WIDTH_GUTTER;

    if (contentWidth <= 0 || visibleDataColumns.length === 0) {
      return widths;
    }

    const totalBaseWidth = visibleDataColumns.reduce(
      (sum, column) => sum + (parseInt(baseColumnWidths[column.key], 10) || 0),
      0
    );

    if (totalBaseWidth <= 0 || totalBaseWidth >= contentWidth) {
      return widths;
    }

    let assignedWidth = 0;

    visibleDataColumns.forEach((column, index) => {
      const baseWidth = parseInt(baseColumnWidths[column.key], 10) || 0;

      if (index === visibleDataColumns.length - 1) {
        widths[column.key] = `${Math.max(contentWidth - assignedWidth, baseWidth)}px`;
        return;
      }

      const expandedWidth = Math.round((baseWidth / totalBaseWidth) * contentWidth);
      assignedWidth += expandedWidth;
      widths[column.key] = `${expandedWidth}px`;
    });

    return widths;
  }, [availableTableWidth, baseColumnWidths, visibleDataColumns]);

  const footerCells = React.useMemo<FooterCell[]>(() => {
    return visibleDataColumns.map((column, index) => {
      let content: React.ReactNode = null;

      if (index === 0) {
        content = selectedTotals.selectedCount > 0 ? `${selectedTotals.selectedCount} selected` : "";
      }

      if (column.key === "usdValueAtConfirmation") {
        content = selectedTotals.gross;
      }

      if (column.key === "engivenFee") {
        content = selectedTotals.engivenFee;
      }

      if (column.key === "usdValueForNpo") {
        content = selectedTotals.payout;
      }

      return {
        key: column.key,
        width: columnWidths[column.key],
        align: MONEY_FIELDS.has(column.key) ? "right" : "left",
        content,
      };
    });
  }, [columnWidths, selectedTotals, visibleDataColumns]);

  const conditionalRowStyles = React.useMemo(() => [], []);

  const tableCustomStyles = React.useMemo(
    () => ({
      progress: {
        style: {
          backgroundColor: "transparent",
        },
      },
      table: {
        style: {
          border: "0",
        },
      },
      headRow: {
        style: {
          borderLeftWidth: "0",
          borderRightWidth: "0",
        },
      },
      rows: {
        style: {
          borderLeftWidth: "0",
          borderRightWidth: "0",
        },
      },
      headCells: {
        style: {
          borderRight: "0",
          borderInlineEnd: "0",
        },
      },
      cells: {
        style: {
          borderRight: "0",
          borderInlineEnd: "0",
        },
      },
      pagination: {
        style: {
          border: "0",
          borderTopWidth: "0",
          backgroundColor: "transparent",
        },
      },
    }),
    []
  );

  const columns = React.useMemo(() => {
    const visibleColumns = visibleDataColumns;

    if (visibleColumns.length === 0) {
      return [
        {
          ...BATCHING_FIELD_COLUMNS[0],
          name: displayNames[BATCHING_FIELD_COLUMNS[0].key],
          field: BATCHING_FIELD_COLUMNS[0].key,
          grow: 0,
          width: columnWidths[BATCHING_FIELD_COLUMNS[0].key],
          style: {
            minWidth: columnWidths[BATCHING_FIELD_COLUMNS[0].key],
            maxWidth: columnWidths[BATCHING_FIELD_COLUMNS[0].key],
            whiteSpace: "nowrap",
          },
          sortFunction: (rowA: BatchableRecord, rowB: BatchableRecord) =>
            compareCellValues(
              rowA[BATCHING_FIELD_COLUMNS[0].key as keyof BatchableRecord] as string | number | boolean | null,
              rowB[BATCHING_FIELD_COLUMNS[0].key as keyof BatchableRecord] as string | number | boolean | null
            ),
        },
      ] as any[];
    }

    const renderedColumns = visibleColumns.map((column) => ({
      ...column,
      wrap: WRAPPED_FIELDS.has(column.key),
      name: (
        <span
          className={`inline-flex items-center gap-1.5 whitespace-normal leading-snug w-full ${
            MONEY_FIELDS.has(column.key) ? "justify-end" : "justify-start"
          }`}
          title={`Width: ${columnWidths[column.key]}`}
        >
          <span>{displayNames[column.key]}</span>
          <span className="inline-flex flex-col leading-none text-[9px]">
            <i
              className={`bi bi-caret-up-fill ${
                sortField === column.key && sortDirection === "asc"
                  ? "text-primary"
                  : "text-textmuted/50 dark:text-textmuted/30"
              }`}
            ></i>
            <i
              className={`bi bi-caret-down-fill -mt-0.5 ${
                sortField === column.key && sortDirection === "desc"
                  ? "text-primary"
                  : "text-textmuted/50 dark:text-textmuted/30"
              }`}
            ></i>
          </span>
        </span>
      ),
      field: column.key,
      id: column.key,
      grow: 0,
      width: columnWidths[column.key],
      cell: (row: BatchableRecord) => {
        const renderedValue = String(column.selector(row) ?? "");

        if (MONEY_FIELDS.has(column.key)) {
          return <div className="w-full text-right tabular-nums">{renderedValue}</div>;
        }

        if (column.key === "statusFromAdmin") {
          const badgeClassName = getStatusBadgeClassName(row);
          if (badgeClassName) {
            return (
              <span className={`inline-flex rounded-sm px-2 py-0.5 ${badgeClassName}`}>
                {renderedValue}
              </span>
            );
          }
        }

        return renderedValue;
      },
      style: {
        minWidth: columnWidths[column.key],
        maxWidth: columnWidths[column.key],
        whiteSpace: MONEY_FIELDS.has(column.key) ? "nowrap" : "normal",
        wordBreak: MONEY_FIELDS.has(column.key) ? "normal" : "break-word",
        textAlign: MONEY_FIELDS.has(column.key) ? "right" : "left",
      },
      sortFunction: (rowA: BatchableRecord, rowB: BatchableRecord) => {
        if (MONEY_FIELDS.has(column.key)) {
          const leftValue =
            column.key === "engivenFee"
              ? calculateEngivenFee(rowA)
              : toNumber(rowA[column.key as keyof BatchableRecord] as string | number | boolean | null);
          const rightValue =
            column.key === "engivenFee"
              ? calculateEngivenFee(rowB)
              : toNumber(rowB[column.key as keyof BatchableRecord] as string | number | boolean | null);

          return leftValue - rightValue;
        }

        return compareCellValues(
          formatBatchingFieldValue(
            column.key,
            rowA[column.key as keyof BatchableRecord] as string | number | boolean | null,
            rowA
          ),
          formatBatchingFieldValue(
            column.key,
            rowB[column.key as keyof BatchableRecord] as string | number | boolean | null,
            rowB
          )
        );
      },
    })) as any[];

    renderedColumns.push({
      name: "",
      id: "viewAction",
      field: "viewAction",
      sortable: false,
      grow: 0,
      width: `${VIEW_ACTION_COLUMN_WIDTH}px`,
      style: {
        minWidth: `${VIEW_ACTION_COLUMN_WIDTH}px`,
        maxWidth: `${VIEW_ACTION_COLUMN_WIDTH}px`,
        whiteSpace: "nowrap",
      },
      cell: (row: BatchableRecord) => (
        <SpkButton
          variant="light"
          customClass="ti-btn py-1 px-2 !text-[0.75rem]"
          onclickfunc={() => setViewRecord(row)}
        >
          View
        </SpkButton>
      ),
    });

    return renderedColumns;
  }, [columnWidths, displayNames, sortDirection, sortField, visibleDataColumns]);

  const updateDisplayName = (key: BatchingFieldKey, value: string) => {
    setDisplayNames((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const updateColumnWidth = (key: BatchingFieldKey, width: number) => {
    const boundedWidth = Math.max(80, Math.min(MAX_MANUAL_COLUMN_WIDTH, Math.round(width)));
    setManualColumnWidths((previous) => ({
      ...previous,
      [key]: boundedWidth,
    }));
  };

  const setWidthInputDraft = (key: BatchingFieldKey, value: string) => {
    setWidthInputDrafts((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const clearWidthInputDraft = (key: BatchingFieldKey) => {
    setWidthInputDrafts((previous) => {
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const commitWidthInputDraft = (key: BatchingFieldKey) => {
    const draft = widthInputDrafts[key];
    const normalized = (draft ?? "").replace(/[^0-9]/g, "").trim();

    if (!normalized) {
      clearWidthInputDraft(key);
      return;
    }

    const numericValue = Number(normalized);
    if (!Number.isFinite(numericValue)) {
      clearWidthInputDraft(key);
      return;
    }

    updateColumnWidth(key, numericValue);
    clearWidthInputDraft(key);
  };

  const toggleFieldVisibility = (key: BatchingFieldKey) => {
    setHiddenFieldKeys((previous) => {
      if (previous.includes(key)) {
        return previous.filter((item) => item !== key);
      }

      const visibleCount = orderedFieldKeys.filter((fieldKey) => !previous.includes(fieldKey)).length;
      if (visibleCount <= 1) {
        return previous;
      }

      return [...previous, key];
    });
  };

  const moveField = (index: number, direction: -1 | 1) => {
    setOrderedFieldKeys((previous) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= previous.length) {
        return previous;
      }

      const next = [...previous];
      const temp = next[index];
      next[index] = next[nextIndex];
      next[nextIndex] = temp;
      return next;
    });
  };

  const moveFieldToTop = (index: number) => {
    setOrderedFieldKeys((previous) => {
      if (index <= 0 || index >= previous.length) {
        return previous;
      }

      const next = [...previous];
      const [item] = next.splice(index, 1);
      next.unshift(item);
      return next;
    });
  };

  const clearSelection = React.useCallback(() => {
    setSelectedRows([]);
    setToggleCleared((previous) => !previous);
  }, []);

  const loadAllFilteredRecords = React.useCallback(async () => {
    const cachedRecords = allLoadedRecordsRef.current;

    if (hasLoadedAllRecordsRef.current && cachedRecords.length >= totalRows) {
      return cachedRecords;
    }

    const pageSize = Math.max(rowsPerPage, 250);
    const totalPages = Math.max(1, Math.ceil(totalRows / pageSize));
    const mergedById = new Map<string, BatchableRecord>(
      cachedRecords.map((record) => [getTransactionId(record), record])
    );

    for (let page = 1; page <= totalPages; page += 1) {
      const searchParams = new URLSearchParams({
        page: String(page),
        perPage: String(pageSize),
        showBatched: "1",
        showHidden: showHiddenRows ? "1" : "0",
      });

      const result = await fetchJsonWithClientCache<any>(`/api/crypto/batches/transactions?${searchParams.toString()}`, {
        ttlMs: 60000,
        init: { method: "GET" },
      });

      if (!result.ok) {
        throw new Error(result.payload?.error ?? "Failed to load all crypto transactions.");
      }

      const nextRecords = Array.isArray(result.payload?.records) ? result.payload.records : [];
      withRowIds(nextRecords as BatchableRecord[]).forEach((record) => {
        const transactionId = getTransactionId(record);
        if (transactionId) {
          mergedById.set(transactionId, record);
        }
      });
    }

    const mergedRecords = Array.from(mergedById.values()).sort(compareLoadedRecords);
    setAllLoadedRecords(mergedRecords);
    setHasLoadedAllRecords(true);
    return mergedRecords;
  }, [rowsPerPage, showHiddenRows, totalRows]);

  const restoreRecordsByTransactionId = React.useCallback((snapshots: BatchableRecord[]) => {
    if (snapshots.length === 0) {
      return;
    }

    const snapshotMap = new Map(snapshots.map((record) => [getTransactionId(record), record]));

    const restore = (previous: BatchableRecord[]) =>
      previous.map((record) => snapshotMap.get(getTransactionId(record)) ?? record);

    setRecords((previous) => restore(previous));
    setAllLoadedRecords((previous) => restore(previous));
  }, []);

  const matchesCurrentFilters = React.useCallback(
    (record: BatchableRecord) => {
      if (!showHiddenRows && isHiddenRecord(record)) {
        return false;
      }

      return true;
    },
    [showHiddenRows]
  );

  const resetToFirstPage = React.useCallback(() => {
    setCurrentPage(DEFAULT_PAGE);
    setPaginationResetToggle((previous) => !previous);
  }, []);

  const updateRecordsByTransactionIds = React.useCallback(
    (
      transactionIds: string[],
      updater: (record: BatchableRecord) => Partial<BatchableRecord>
    ) => {
      const transactionIdSet = new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0));

      if (transactionIdSet.size === 0) {
        return;
      }

      let totalDelta = 0;

      const applyPatch = (previous: BatchableRecord[], trackVisibilityChange: boolean) =>
        previous.map((record) => {
          const transactionId = getTransactionId(record);
          if (!transactionIdSet.has(transactionId)) {
            return record;
          }

          const patch = updater(record);
          const nextRecord = { ...record } as BatchableRecord;

          Object.entries(patch).forEach(([key, value]) => {
            if (value === undefined) {
              return;
            }

            (nextRecord as Record<string, string | number | boolean | null>)[key] = value;
          });

          if (trackVisibilityChange) {
            const wasVisible = matchesCurrentFilters(record);
            const isVisible = matchesCurrentFilters(nextRecord);
            if (wasVisible !== isVisible) {
              totalDelta += isVisible ? 1 : -1;
            }
          }

          return nextRecord;
        });

      setRecords((previous) => applyPatch(previous, true));
      setAllLoadedRecords((previous) => applyPatch(previous, false));

      if (totalDelta !== 0) {
        setTotalRows((previous) => Math.max(0, previous + totalDelta));
      }
    },
    [matchesCurrentFilters]
  );

  const loadRecords = React.useCallback(async () => {
    try {
      const sliceStart = (currentPage - 1) * rowsPerPage;
      const sliceEnd = sliceStart + rowsPerPage;
      const cachedRecords = allLoadedRecordsRef.current;
      const hasLoadedAllCachedRecords = hasLoadedAllRecordsRef.current;

      if (cachedRecords.length >= sliceEnd || (hasLoadedAllCachedRecords && cachedRecords.length > sliceStart)) {
        setRecords(cachedRecords.slice(sliceStart, sliceEnd));
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setErrorMessage("");

      const searchParams = new URLSearchParams({
        page: String(currentPage),
        perPage: String(rowsPerPage),
        showBatched: "1",
        showHidden: showHiddenRows ? "1" : "0",
      });

      const result = await fetchJsonWithClientCache<any>(`/api/crypto/batches/transactions?${searchParams.toString()}`, {
        ttlMs: 60000,
        init: { method: "GET" },
      });
      const payload = result.payload;

      if (!result.ok) {
        setErrorMessage(payload?.error ?? "Failed to load crypto transactions.");
        setRecords([]);
        setTotalRows(0);
        return;
      }

      const nextRecords = Array.isArray(payload?.records) ? payload.records : [];
      const nextTotalRows = Number(payload?.totalCount);
      const normalizedTotalRows = Number.isFinite(nextTotalRows) ? nextTotalRows : nextRecords.length;
      const totalPages = getTotalPages(normalizedTotalRows, rowsPerPage);

      if (normalizedTotalRows > 0 && currentPage > totalPages) {
        setCurrentPage(totalPages);
        return;
      }

      const normalizedRecords = withRowIds(nextRecords as BatchableRecord[]);
      setTotalRows(normalizedTotalRows);
      setRecords(normalizedRecords);
      mergeLoadedRecords(normalizedRecords);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load crypto transactions.");
      setRecords([]);
      setTotalRows(0);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, mergeLoadedRecords, rowsPerPage, showHiddenRows]);

  React.useEffect(() => {
    loadRecords();
  }, [loadRecords]);

  React.useEffect(() => {
    const totalPages = getTotalPages(totalRows, rowsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, rowsPerPage, totalRows]);

  React.useEffect(() => {
    clearSelection();
  }, [clearSelection, showHiddenRows]);

  React.useEffect(() => {
    setAllLoadedRecords([]);
    setHasLoadedAllRecords(false);
    backgroundLoadRequestRef.current += 1;
  }, [showHiddenRows]);

  const handleSelectedRowsChange = React.useCallback(
    (state: { allSelected: boolean; selectedCount: number; selectedRows: unknown[] }) => {
      const nextSelectedRows = state.selectedRows as BatchableRecord[];
      setSelectedRows((previous) =>
        haveSameSelectedRows(previous, nextSelectedRows) ? previous : nextSelectedRows
      );
    },
    []
  );

  const toggleSelectAllRows = React.useCallback(async () => {
    if (allFilteredSelected) {
      clearSelection();
      return;
    }

    try {
      setIsSelectingAllRows(true);
      setErrorMessage("");
      const allFilteredRecords = await loadAllFilteredRecords();
      setSelectedRows((previous) =>
        haveSameSelectedRows(previous, allFilteredRecords) ? previous : allFilteredRecords
      );
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to select all crypto transactions.");
    } finally {
      setIsSelectingAllRows(false);
    }
  }, [allFilteredSelected, clearSelection, loadAllFilteredRecords]);

  React.useEffect(() => {
    if (totalRows <= allLoadedRecords.length || totalRows === 0) {
      if (totalRows > 0 && allLoadedRecords.length >= totalRows) {
        setHasLoadedAllRecords(true);
      }
      return;
    }

    const requestId = backgroundLoadRequestRef.current + 1;
    backgroundLoadRequestRef.current = requestId;
    let isCancelled = false;

    const prefetchAllRecords = async () => {
      const backgroundPageSize = 250;
      const totalPages = Math.ceil(totalRows / backgroundPageSize);

      for (let page = 1; page <= totalPages; page += 1) {
        if (isCancelled || backgroundLoadRequestRef.current !== requestId) {
          return;
        }

        try {
          const searchParams = new URLSearchParams({
            page: String(page),
            perPage: String(backgroundPageSize),
            showBatched: "1",
            showHidden: showHiddenRows ? "1" : "0",
          });

          const result = await fetchJsonWithClientCache<any>(
            `/api/crypto/batches/transactions?${searchParams.toString()}`,
            {
              ttlMs: 300000,
              init: { method: "GET" },
            }
          );

          if (!result.ok) {
            return;
          }

          const payload = result.payload;
          const nextRecords = Array.isArray(payload?.records) ? payload.records : [];
          mergeLoadedRecords(withRowIds(nextRecords as BatchableRecord[]));
        } catch {
          return;
        }
      }

      if (!isCancelled && backgroundLoadRequestRef.current === requestId) {
        setHasLoadedAllRecords(true);
      }
    };

    void prefetchAllRecords();

    return () => {
      isCancelled = true;
    };
  }, [allLoadedRecords.length, mergeLoadedRecords, showHiddenRows, totalRows]);

  const openBatchModal = () => {
    if (selectedUnbatchedRows.length === 0 || isSavingBatch) {
      return;
    }

    setBatchNameDraft("");
    setShowBatchModal(true);
  };

  const closeBatchModal = () => {
    if (isSavingBatch) {
      return;
    }

    setShowBatchModal(false);
    setBatchNameDraft("");
  };

  const createBatch = async () => {
    if (selectedUnbatchedRows.length === 0 || isSavingBatch) {
      return;
    }

    const batchName = batchNameDraft.trim();
    if (!batchName) {
      setErrorMessage("Batch name is required.");
      return;
    }

    try {
      setIsSavingBatch(true);
      setErrorMessage("");

      const transactionIds = selectedUnbatchedRows
        .map((row) => formatCryptoValue(row.id))
        .filter((id) => id.length > 0);
      const selectedSnapshots = selectedUnbatchedRows.map((row) => ({ ...row }));
      const optimisticAssignedAt = new Date().toISOString();

      setShowBatchModal(false);
      setBatchNameDraft("");
      updateRecordsByTransactionIds(transactionIds, (record) => ({
        ...record,
        batchTransactionNumber: record.batchTransactionNumber ?? "Batching...",
        batchName,
        batchAssignedAt: optimisticAssignedAt,
      }));
      clearSelection();

      const response = await fetch("/api/crypto/batches/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionIds, batchName }),
      });

      const payload = await response.json();

      if (!response.ok) {
        restoreRecordsByTransactionId(selectedSnapshots);
        setErrorMessage(payload?.error ?? "Failed to create crypto batch.");
        return;
      }

      updateRecordsByTransactionIds(transactionIds, (record) => ({
        ...record,
        batchTransactionNumber: payload.batchNumber ?? batchName,
        batchName: payload.batchName ?? batchName,
        batchAssignedAt: payload.createdAt ?? new Date().toISOString(),
      }));
      clearClientFetchCache("/api/crypto/batches/transactions");
      clearClientFetchCache("/api/crypto/batches");
    } catch (error) {
      restoreRecordsByTransactionId(selectedUnbatchedRows.map((row) => ({ ...row })));
      setErrorMessage(error instanceof Error ? error.message : "Failed to create crypto batch.");
    } finally {
      setIsSavingBatch(false);
    }
  };

  const acceptSelected = async () => {
    if (selectedUnacceptedRows.length === 0 || isAcceptingRows) {
      return;
    }

    try {
      setIsAcceptingRows(true);
      setErrorMessage("");

      const transactionIds = selectedUnacceptedRows
        .map((row) => formatCryptoValue(row.id))
        .filter((id) => id.length > 0);
      const selectedSnapshots = selectedUnacceptedRows.map((row) => ({ ...row }));
      const optimisticAcceptedAt = new Date().toISOString();

      updateRecordsByTransactionIds(transactionIds, () => ({
        acceptedAt: optimisticAcceptedAt,
      }));
      clearSelection();

      const response = await fetch("/api/crypto/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionIds }),
      });

      const payload = await response.json();

      if (!response.ok) {
        restoreRecordsByTransactionId(selectedSnapshots);
        setErrorMessage(payload?.error ?? "Failed to accept crypto transactions.");
        return;
      }

      updateRecordsByTransactionIds(transactionIds, () => ({
        acceptedAt: payload.acceptedAt ?? new Date().toISOString(),
      }));
      clearClientFetchCache("/api/crypto/batches/transactions");
    } catch (error) {
      restoreRecordsByTransactionId(selectedUnacceptedRows.map((row) => ({ ...row })));
      setErrorMessage(error instanceof Error ? error.message : "Failed to accept crypto transactions.");
    } finally {
      setIsAcceptingRows(false);
    }
  };

  const revokeSelected = async () => {
    if (selectedAcceptedRows.length === 0 || isAcceptingRows) {
      return;
    }

    try {
      setIsAcceptingRows(true);
      setErrorMessage("");

      const transactionIds = selectedAcceptedRows
        .map((row) => formatCryptoValue(row.id))
        .filter((id) => id.length > 0);
      const selectedSnapshots = selectedAcceptedRows.map((row) => ({ ...row }));

      updateRecordsByTransactionIds(transactionIds, () => ({
        acceptedAt: null,
      }));
      clearSelection();

      const response = await fetch("/api/crypto/accept/revoke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionIds }),
      });

      const payload = await response.json();

      if (!response.ok) {
        restoreRecordsByTransactionId(selectedSnapshots);
        setErrorMessage(payload?.error ?? "Failed to revoke crypto transactions.");
        return;
      }

      updateRecordsByTransactionIds(transactionIds, () => ({
        acceptedAt: null,
      }));
      clearClientFetchCache("/api/crypto/batches/transactions");
    } catch (error) {
      restoreRecordsByTransactionId(selectedAcceptedRows.map((row) => ({ ...row })));
      setErrorMessage(error instanceof Error ? error.message : "Failed to revoke crypto transactions.");
    } finally {
      setIsAcceptingRows(false);
    }
  };

  const unbatchSelected = async () => {
    if (selectedBatchedRows.length === 0 || isUnbatchingRows) {
      return;
    }

    try {
      setIsUnbatchingRows(true);
      setErrorMessage("");

      const transactionIds = selectedBatchedRows
        .map((row) => formatCryptoValue(row.id))
        .filter((id) => id.length > 0);
      const selectedSnapshots = selectedBatchedRows.map((row) => ({ ...row }));

      updateRecordsByTransactionIds(transactionIds, () => ({
        batchTransactionNumber: null,
        batchName: null,
        batchAssignedAt: null,
      }));
      clearSelection();

      const response = await fetch("/api/crypto/batches/unbatch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionIds }),
      });

      const payload = await response.json();

      if (!response.ok) {
        restoreRecordsByTransactionId(selectedSnapshots);
        setErrorMessage(payload?.error ?? "Failed to unbatch crypto transactions.");
        return;
      }

      updateRecordsByTransactionIds(transactionIds, () => ({
        batchTransactionNumber: null,
        batchName: null,
        batchAssignedAt: null,
      }));
      clearClientFetchCache("/api/crypto/batches/transactions");
      clearClientFetchCache("/api/crypto/batches");
    } catch (error) {
      restoreRecordsByTransactionId(selectedBatchedRows.map((row) => ({ ...row })));
      setErrorMessage(error instanceof Error ? error.message : "Failed to unbatch crypto transactions.");
    } finally {
      setIsUnbatchingRows(false);
    }
  };

  const hideSelected = async () => {
    if (selectedVisibleRows.length === 0 || isHidingRows) {
      return;
    }

    try {
      setIsHidingRows(true);
      setErrorMessage("");

      const transactionIds = selectedVisibleRows
        .map((row) => formatCryptoValue(row.id))
        .filter((id) => id.length > 0);
      const selectedSnapshots = selectedVisibleRows.map((row) => ({ ...row }));
      const optimisticHiddenAt = new Date().toISOString();

      updateRecordsByTransactionIds(transactionIds, () => ({
        hiddenAt: optimisticHiddenAt,
      }));
      clearSelection();

      const response = await fetch("/api/crypto/hide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionIds }),
      });

      const payload = await response.json();

      if (!response.ok) {
        restoreRecordsByTransactionId(selectedSnapshots);
        setErrorMessage(payload?.error ?? "Failed to hide crypto transactions.");
        return;
      }

      updateRecordsByTransactionIds(transactionIds, () => ({
        hiddenAt: payload.hiddenAt ?? new Date().toISOString(),
      }));
      clearClientFetchCache("/api/crypto/batches/transactions");
    } catch (error) {
      restoreRecordsByTransactionId(selectedVisibleRows.map((row) => ({ ...row })));
      setErrorMessage(error instanceof Error ? error.message : "Failed to hide crypto transactions.");
    } finally {
      setIsHidingRows(false);
    }
  };

  const unhideSelected = async () => {
    if (selectedHiddenRows.length === 0 || isHidingRows) {
      return;
    }

    try {
      setIsHidingRows(true);
      setErrorMessage("");

      const transactionIds = selectedHiddenRows
        .map((row) => formatCryptoValue(row.id))
        .filter((id) => id.length > 0);
      const selectedSnapshots = selectedHiddenRows.map((row) => ({ ...row }));

      updateRecordsByTransactionIds(transactionIds, () => ({
        hiddenAt: null,
      }));
      clearSelection();

      const response = await fetch("/api/crypto/unhide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionIds }),
      });

      const payload = await response.json();

      if (!response.ok) {
        restoreRecordsByTransactionId(selectedSnapshots);
        setErrorMessage(payload?.error ?? "Failed to unhide crypto transactions.");
        return;
      }

      updateRecordsByTransactionIds(transactionIds, () => ({
        hiddenAt: null,
      }));
      clearClientFetchCache("/api/crypto/batches/transactions");
    } catch (error) {
      restoreRecordsByTransactionId(selectedHiddenRows.map((row) => ({ ...row })));
      setErrorMessage(error instanceof Error ? error.message : "Failed to unhide crypto transactions.");
    } finally {
      setIsHidingRows(false);
    }
  };

  const paginationComponent = React.useCallback(
    (paginationProps: {
      rowsPerPage: number;
      rowCount: number;
      currentPage: number;
      onChangePage: (page: number, totalRows: number) => void;
      onChangeRowsPerPage: (rowsPerPage: number, currentPage: number) => void;
    }) => <CryptoDonationsPagination {...paginationProps} footerCells={footerCells} />,
    [footerCells]
  );

  return (
    <span ref={tableContainerRef} className="datatable block w-full">
      {isLoading || isAnyActionBusy ? <Loader active transparentBackground={!isLoading} /> : null}

      <div className="mb-3 flex flex-wrap items-center justify-end gap-2 text-[0.8125rem] text-defaulttextcolor">
        <div className="me-auto flex flex-wrap items-center gap-4">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              ref={selectAllCheckboxRef}
              type="checkbox"
              className={CHECKBOX_INPUT_CLASS}
              checked={allFilteredSelected}
              onChange={() => {
                void toggleSelectAllRows();
              }}
              disabled={isAnyActionBusy || totalRows === 0}
            />
            <span>Select All</span>
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className={CHECKBOX_INPUT_CLASS}
              checked={showHiddenRows}
              onChange={(event) => {
                setShowHiddenRows(event.target.checked);
                resetToFirstPage();
              }}
            />
            <span>Show Hidden</span>
          </label>
        </div>
        <SpkButton variant="light" customClass="ti-btn" onclickfunc={() => setShowFieldModal(true)}>
          Select Fields
        </SpkButton>
        <SpkButton
          variant="warning"
          customClass={`ti-btn ${!canToggleHide || isAnyActionBusy ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!canToggleHide || isAnyActionBusy}
          onclickfunc={canUnhide ? unhideSelected : hideSelected}
        >
          {isHidingRows
            ? canUnhide
              ? "Unhiding..."
              : "Hiding..."
            : canUnhide
              ? `Unhide${canUnhide ? ` (${selectedHiddenRows.length})` : ""}`
              : `Hide${canHide ? ` (${selectedVisibleRows.length})` : ""}`}
        </SpkButton>
        <SpkButton
          variant="info"
          customClass={`ti-btn ${!canToggleReview || isAnyActionBusy ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!canToggleReview || isAnyActionBusy}
          onclickfunc={canRevoke ? revokeSelected : acceptSelected}
        >
          {isAcceptingRows
            ? canRevoke
              ? "Revoking..."
              : "Accepting..."
            : canRevoke
              ? `Revoke${canRevoke ? ` (${selectedAcceptedRows.length})` : ""}`
              : `Accept${canAccept ? ` (${selectedUnacceptedRows.length})` : ""}`}
        </SpkButton>
        <SpkButton
          variant="primary"
          customClass={`ti-btn ${!canToggleBatch || isAnyActionBusy ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!canToggleBatch || isAnyActionBusy}
          onclickfunc={canUnbatch ? unbatchSelected : openBatchModal}
        >
          {canUnbatch
            ? isUnbatchingRows
              ? "Unbatching..."
              : `Unbatch${canUnbatch ? ` (${selectedBatchedRows.length})` : ""}`
            : isSavingBatch
              ? "Saving Batch..."
              : `Batch${canBatch ? ` (${selectedUnbatchedRows.length})` : ""}`}
        </SpkButton>
      </div>

      {errorMessage ? <p className="mb-3 text-danger">{errorMessage}</p> : null}

      <DataTable
        title
        noContextMenu
        columns={columns}
        data={visibleRecords}
        customStyles={tableCustomStyles}
        keyField="__rowId"
        sortIcon={<span className="hidden" />}
        defaultSortFieldId="transactionConfirmedTimeStamp"
        defaultSortAsc={false}
        onSort={(selectedColumn: any, direction: "asc" | "desc") => {
          setSortField(selectedColumn?.field ?? "");
          setSortDirection(direction);
        }}
        selectableRows
        selectableRowsNoSelectAll
        selectableRowSelected={isRowSelected}
        onSelectedRowsChange={handleSelectedRowsChange}
        clearSelectedRows={toggleCleared}
        conditionalRowStyles={conditionalRowStyles as any}
        pagination
        paginationServer
        paginationServerOptions={{
          persistSelectedOnPageChange: true,
          persistSelectedOnSort: true,
        }}
        paginationComponent={paginationComponent as any}
        paginationDefaultPage={DEFAULT_PAGE}
        paginationResetDefaultPage={paginationResetToggle}
        paginationTotalRows={totalRows}
        paginationPerPage={rowsPerPage}
        paginationRowsPerPageOptions={Array.from(STANDARD_PAGE_SIZE_OPTIONS)}
        paginationComponentOptions={{
          selectAllRowsItem: true,
          selectAllRowsItemText: "All",
        }}
        onChangePage={(page: number) => setCurrentPage(page)}
        onChangeRowsPerPage={(nextRowsPerPage: number) => {
          setRowsPerPage(nextRowsPerPage);
          resetToFirstPage();
        }}
        progressPending={isLoading}
        progressComponent={<div className="py-6" aria-hidden="true" />}
      />

      {showBatchModal ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-sm bg-white dark:bg-bodybg p-5 border border-defaultborder">
            <div className="mb-3 flex items-center justify-between">
              <h6 className="mb-0">Create Batch</h6>
              <SpkButton variant="light" customClass="ti-btn" onclickfunc={closeBatchModal}>
                Close
              </SpkButton>
            </div>

            <p className="mb-3 text-[0.8125rem] text-textmuted">
              Enter a batch name for the {selectedUnbatchedRows.length} selected unbatched transaction{selectedUnbatchedRows.length === 1 ? "" : "s"}.
            </p>

            <div className="mb-4">
              <label className="form-label">Batch Name</label>
              <input
                type="text"
                className="form-control"
                value={batchNameDraft}
                onChange={(event) => setBatchNameDraft(event.target.value)}
                placeholder="Enter batch name"
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    void createBatch();
                  }
                }}
              />
            </div>

            <div className="flex justify-end gap-2">
              <SpkButton variant="light" customClass="ti-btn" onclickfunc={closeBatchModal}>
                Cancel
              </SpkButton>
              <SpkButton
                variant="primary"
                customClass={`ti-btn ${isSavingBatch ? "opacity-50 cursor-not-allowed" : ""}`}
                onclickfunc={createBatch}
              >
                {isSavingBatch ? "Saving Batch..." : "Create Batch"}
              </SpkButton>
            </div>
          </div>
        </div>
      ) : null}

      {showFieldModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm bg-white dark:bg-bodybg p-5 border border-defaultborder">
            <div className="mb-3 flex items-center justify-between">
              <h6 className="mb-0">Select Fields</h6>
              <SpkButton variant="light" customClass="ti-btn" onclickfunc={() => setShowFieldModal(false)}>
                Close
              </SpkButton>
            </div>

            <p className="mb-3 text-[0.8125rem] text-textmuted">
              Hide fields with the toggle, reorder fields with Up/Down, and set widths up to {MAX_MANUAL_COLUMN_WIDTH}px.
            </p>

            <div className="table-responsive max-h-[60vh] overflow-auto">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap">Field</th>
                    <th className="whitespace-nowrap">Display Name</th>
                    <th className="whitespace-nowrap">Width (px)</th>
                    <th className="whitespace-nowrap">Show</th>
                    <th className="whitespace-nowrap">Order</th>
                  </tr>
                </thead>
                <tbody>
                  {orderedFieldKeys.map((key, index) => {
                    const column = BATCHING_FIELD_COLUMNS.find((item) => item.key === key);
                    if (!column) {
                      return null;
                    }

                    const isVisible = !hiddenFieldKeys.includes(key);
                    const widthFieldValue = manualColumnWidths[key] ?? (parseInt(columnWidths[key], 10) || 120);
                    const widthFieldDraft = widthInputDrafts[key];
                    const widthFieldDisplayValue = widthFieldDraft ?? String(widthFieldValue);

                    return (
                      <tr key={key}>
                        <td>{column.defaultName}</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={displayNames[key]}
                            onChange={(event) => updateDisplayName(key, event.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="form-control !w-[3.3rem] !min-w-0 inline-block text-end"
                            value={widthFieldDisplayValue}
                            title={`Current width: ${columnWidths[key]}`}
                            onChange={(event) => {
                              const rawValue = event.target.value.replace(/[^0-9]/g, "");
                              setWidthInputDraft(key, rawValue);
                            }}
                            onBlur={() => commitWidthInputDraft(key)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                (event.currentTarget as HTMLInputElement).blur();
                              }
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            className={CHECKBOX_INPUT_CLASS}
                            checked={isVisible}
                            onChange={() => toggleFieldVisibility(key)}
                          />
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            <SpkButton
                              variant="light"
                              customClass={`ti-btn py-1 px-2 ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                              onclickfunc={() => moveFieldToTop(index)}
                            >
                              <i className="bi bi-chevron-double-up"></i>
                            </SpkButton>
                            <SpkButton
                              variant="light"
                              customClass={`ti-btn py-1 px-2 ${index === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                              onclickfunc={() => moveField(index, -1)}
                            >
                              Up
                            </SpkButton>
                            <SpkButton
                              variant="light"
                              customClass={`ti-btn py-1 px-2 ${index === orderedFieldKeys.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                              onclickfunc={() => moveField(index, 1)}
                            >
                              Down
                            </SpkButton>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}

      {viewRecord ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm bg-white dark:bg-bodybg p-5 border border-defaultborder">
            <div className="mb-3 flex items-center justify-between">
              <h6 className="mb-0">Transaction Details</h6>
              <SpkButton variant="light" customClass="ti-btn" onclickfunc={() => setViewRecord(null)}>
                Close
              </SpkButton>
            </div>

            <div className="mb-3 text-[0.8125rem] text-textmuted">
              Transaction ID: <strong>{formatCryptoValue(viewRecord.id)}</strong>
            </div>

            <div className="table-responsive max-h-[70vh] overflow-auto">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap">Field</th>
                    <th className="whitespace-nowrap">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {CRYPTO_FIELDS.map((field) => {
                    const value =
                      field === "transactionConfirmedTimeStamp"
                        ? formatPstDateTime(viewRecord[field as keyof BatchableRecord] as string | number | boolean | null)
                        : formatBatchingFieldValue(
                            field,
                            viewRecord[field as keyof BatchableRecord] as string | number | boolean | null,
                            viewRecord
                          );

                    return (
                      <tr key={`view-${field}`}>
                        <td className="align-top text-[0.75rem] text-textmuted">{getApiFieldDisplayName(field)}</td>
                        <td className="align-top text-[0.8125rem] break-all whitespace-normal">{value || ""}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        .datatable input[type="checkbox"] {
          accent-color: #6259ca;
        }

        .datatable [data-testid="datatable-select-all-checkbox"],
        .datatable [data-testid="datatable-select-row-checkbox"] {
          width: 1rem;
          height: 1rem;
          cursor: pointer;
          border: 1px solid #94a3b8;
          border-radius: 0.25rem;
          background-color: #ffffff;
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
        }

        .dark .datatable [data-testid="datatable-select-all-checkbox"],
        .dark .datatable [data-testid="datatable-select-row-checkbox"] {
          border-color: rgba(148, 163, 184, 0.45);
          background-color: transparent;
        }
      `}</style>
    </span>
  );
};

export default CryptoBatchingDataTable;
