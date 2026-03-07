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
};

type BatchDetail = {
  batchNumber: string;
  batchName: string | null;
  createdAt: string;
  transactionCount: number;
  transactions: Record<string, string | number | boolean | null>[];
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

  const closeModal = () => {
    setDetail(null);
  };

  return (
    <span className="datatable">
      {errorMessage ? <p className="mb-3 text-danger">{errorMessage}</p> : null}

      {isLoading ? (
        <div className="py-6 flex items-center justify-center">
          <SpkSpinner customClass="!w-6 !h-6 text-purple-500" Label="Loading">
            <span className="sr-only">Loading...</span>
          </SpkSpinner>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table whitespace-nowrap min-w-full">
            <thead>
              <tr>
                <th>Batch #</th>
                <th>Batch Name</th>
                <th>Created At</th>
                <th>Transactions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {batches.length > 0 ? (
                batches.map((batch) => (
                  <tr key={batch.batchNumber}>
                    <td>{batch.batchNumber}</td>
                    <td>{batch.batchName || "--"}</td>
                    <td>{new Date(batch.createdAt).toLocaleString()}</td>
                    <td>{batch.transactionCount}</td>
                    <td>
                      <SpkButton variant="light" customClass="ti-btn" onclickfunc={() => openBatchDetail(batch.batchNumber)}>
                        View Batch
                      </SpkButton>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center text-textmuted">No batches created yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {(detail || isDetailLoading) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-6xl rounded-sm bg-white dark:bg-bodybg p-4 border border-defaultborder">
            <div className="mb-3 flex items-center justify-between">
              <h6 className="mb-0">Batch {detail?.batchName ?? detail?.batchNumber ?? ""}</h6>
              <SpkButton variant="light" customClass="ti-btn" onclickfunc={closeModal}>Close</SpkButton>
            </div>

            {isDetailLoading ? (
              <div className="py-6 flex items-center justify-center">
                <SpkSpinner customClass="!w-6 !h-6 text-purple-500" Label="Loading Batch Detail">
                  <span className="sr-only">Loading batch detail...</span>
                </SpkSpinner>
              </div>
            ) : detail ? (
              <>
                <p className="text-[0.8125rem] text-textmuted mb-3">
                  Batch #: <strong>{detail.batchNumber}</strong> | Name: <strong>{detail.batchName || "--"}</strong> | Created: <strong>{new Date(detail.createdAt).toLocaleString()}</strong> | Transactions: <strong>{detail.transactionCount}</strong>
                </p>
                <div className="table-responsive max-h-[60vh] overflow-auto">
                  <table className="table whitespace-nowrap min-w-full">
                    <thead>
                      <tr>
                        <th>Transaction ID</th>
                        <th>NPO Name</th>
                        <th>Donor Name</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail.transactions.map((transaction) => (
                        <tr key={String(transaction.id)}>
                          <td>{formatCryptoValue(transaction.id as any)}</td>
                          <td>{formatCryptoValue(transaction.npoName as any)}</td>
                          <td>{formatCryptoValue(transaction.donorName as any)}</td>
                          <td>{formatCryptoValue(transaction.amount as any)}</td>
                          <td>{formatCryptoValue(transaction.currency as any)}</td>
                          <td>{formatCryptoValue(transaction.transactionStatus as any)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </span>
  );
};

export default CryptoBatchesDataTable;
