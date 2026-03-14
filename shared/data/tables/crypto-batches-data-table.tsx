"use client";

import React from "react";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import { formatCryptoValue } from "@/shared/lib/crypto-sync";
import { fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

type BatchSummary = {
  batchNumber: string;
  batchName: string | null;
  createdAt: string;
  transactionCount: number;
  grossTotal: number;
  feeTotal: number;
  payoutTotal: number;
};

type BatchDetail = {
  batchNumber: string;
  batchName: string | null;
  createdAt: string;
  transactionCount: number;
  grossTotal: number;
  feeTotal: number;
  payoutTotal: number;
  transactions: Record<string, string | number | boolean | null>[];
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

const formatMoney = (value: string | number | boolean | null | undefined) =>
  toNumber(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatBatchDate = (value: string | null | undefined) => {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const formatBatchDateTime = (value: string | null | undefined) => {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString();
};

const calculateEngivenFee = (transaction: Record<string, string | number | boolean | null>) => {
  const gross = toNumber(transaction.usdValueAtConfirmation as any);
  const payout = toNumber(transaction.usdValueForNpo as any);
  return gross - payout;
};

const CryptoBatchesDataTable = () => {
  const [batches, setBatches] = React.useState<BatchSummary[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [detail, setDetail] = React.useState<BatchDetail | null>(null);
  const [isDetailLoading, setIsDetailLoading] = React.useState(false);

  const loadBatches = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const result = await fetchJsonWithClientCache<any>("/api/crypto/batches", {
        ttlMs: 60000,
        init: { method: "GET" },
      });
      const payload = result.payload;

      if (!result.ok) {
        setErrorMessage(payload?.error ?? "Failed to load crypto batches.");
        setBatches([]);
        return;
      }

      setBatches(Array.isArray(payload?.batches) ? payload.batches : []);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load crypto batches.");
      setBatches([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadBatches();
  }, [loadBatches]);

  const openBatchDetail = async (batchNumber: string) => {
    try {
      setIsDetailLoading(true);
      setErrorMessage("");
      setDetail(null);

      const result = await fetchJsonWithClientCache<any>(`/api/crypto/batches/${encodeURIComponent(batchNumber)}`, {
        ttlMs: 60000,
        init: { method: "GET" },
      });
      const payload = result.payload;

      if (!result.ok) {
        setErrorMessage(payload?.error ?? "Failed to load batch detail.");
        return;
      }

      setDetail(payload as BatchDetail);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load batch detail.");
    } finally {
      setIsDetailLoading(false);
    }
  };

  const closeDetail = () => {
    setDetail(null);
  };

  return (
    <span className="datatable block w-full">
      <div className="sticky top-0 z-20 mb-3 bg-white/95 pb-1 backdrop-blur dark:bg-bodybg/95">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[0.8125rem] text-defaulttextcolor">
          <div className="min-w-0">
            <h1 className="mb-0 text-lg font-medium text-defaulttextcolor">Manage Batches</h1>
            <p className="mb-0 text-[0.8125rem] text-textmuted">
              {detail
                ? "Viewing all transactions assigned to the selected batch."
                : "Review batch totals and open individual batches."}
            </p>
          </div>
          {detail ? (
            <SpkButton variant="light" customClass="ti-btn" onclickfunc={closeDetail}>
              Back
            </SpkButton>
          ) : null}
        </div>
      </div>

      {errorMessage ? <p className="mb-3 text-danger">{errorMessage}</p> : null}

      {isLoading && !detail ? (
        <div className="py-6 flex items-center justify-center">
          <SpkSpinner customClass="!w-6 !h-6 text-purple-500" Label="Loading">
            <span className="sr-only">Loading...</span>
          </SpkSpinner>
        </div>
      ) : detail ? (
        <div className="rounded-sm border border-defaultborder bg-white p-4 dark:bg-bodybg">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[0.8125rem] text-defaulttextcolor">
            <div>
              <div>
                Batch Name: <strong>{detail.batchName || "--"}</strong>
              </div>
              <div>
                Batch Date: <strong>{formatBatchDate(detail.createdAt)}</strong>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-right">
              <span>Gross: <strong>{formatMoney(detail.grossTotal)}</strong></span>
              <span>Fee: <strong>{formatMoney(detail.feeTotal)}</strong></span>
              <span>Payout: <strong>{formatMoney(detail.payoutTotal)}</strong></span>
            </div>
          </div>

          {isDetailLoading ? (
            <div className="py-6 flex items-center justify-center">
              <SpkSpinner customClass="!w-6 !h-6 text-primary" Label="Loading Batch Detail">
                <span className="sr-only">Loading batch detail...</span>
              </SpkSpinner>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction ID</th>
                    <th>NPO Name</th>
                    <th>Donor Name</th>
                    <th className="text-end">Gross</th>
                    <th className="text-end">Fee</th>
                    <th className="text-end">Payout</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.transactions.length > 0 ? (
                    detail.transactions.map((transaction) => (
                      <tr key={String(transaction.id)}>
                        <td>{formatBatchDateTime(transaction.transactionConfirmedTimeStamp as any)}</td>
                        <td>{formatCryptoValue(transaction.id as any)}</td>
                        <td>{formatCryptoValue((transaction.guideStarName ?? transaction.npoName) as any)}</td>
                        <td>{formatCryptoValue(transaction.donorName as any)}</td>
                        <td className="text-end tabular-nums">{formatMoney(transaction.usdValueAtConfirmation as any)}</td>
                        <td className="text-end tabular-nums">{formatMoney(calculateEngivenFee(transaction))}</td>
                        <td className="text-end tabular-nums">{formatMoney(transaction.usdValueForNpo as any)}</td>
                        <td>{formatCryptoValue(transaction.statusFromAdmin as any)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="text-center text-textmuted">No transactions found for this batch.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table whitespace-nowrap min-w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th className="text-end">Sum of Gross</th>
                <th className="text-end">Sum of Fee</th>
                <th className="text-end">Sum of Payout</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {batches.length > 0 ? (
                batches.map((batch) => (
                  <tr key={batch.batchNumber}>
                    <td>{formatBatchDate(batch.createdAt)}</td>
                    <td>{batch.batchName || batch.batchNumber}</td>
                    <td className="text-end tabular-nums">{formatMoney(batch.grossTotal)}</td>
                    <td className="text-end tabular-nums">{formatMoney(batch.feeTotal)}</td>
                    <td className="text-end tabular-nums">{formatMoney(batch.payoutTotal)}</td>
                    <td>
                      <SpkButton variant="light" customClass="ti-btn" onclickfunc={() => void openBatchDetail(batch.batchNumber)}>
                        View
                      </SpkButton>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center text-textmuted">No batches created yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </span>
  );
};

export default CryptoBatchesDataTable;
