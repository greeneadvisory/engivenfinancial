"use client";

import React from "react";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import { formatCryptoValue, CryptoPreviewChange } from "@/shared/lib/crypto-sync";
import { fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

const prettifyFieldName = (field: string) => {
  const withSpaces = field
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};

const CryptoUpdatesDataTable = () => {
  const [changes, setChanges] = React.useState<CryptoPreviewChange[]>([]);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [summary, setSummary] = React.useState<{
    incomingCount: number;
    savedCount: number;
    updatedCount: number;
    unchangedCount: number;
    newAutoApprovedCount?: number;
    newIgnoredCount: number;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isApplying, setIsApplying] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [syncMessage, setSyncMessage] = React.useState("");
  const [loadedAt, setLoadedAt] = React.useState("");
  const [focusedId, setFocusedId] = React.useState("");

  const loadChanges = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setSyncMessage("");

      const result = await fetchJsonWithClientCache<any>("/api/crypto/changes/preview", {
        ttlMs: 30000,
        init: { method: "GET" },
      });
      const payload = result.payload;

      if (!result.ok) {
        setErrorMessage(payload?.error ?? "Failed to load crypto changes.");
        setChanges([]);
        setSummary(null);
        setSelectedIds([]);
        setFocusedId("");
        return;
      }

      const nextChanges = Array.isArray(payload?.changes) ? payload.changes : [];
      setChanges(nextChanges);
      setSummary(payload?.summary ?? null);
      setSelectedIds([]);
      setFocusedId(nextChanges[0]?.changeId ?? "");
      setLoadedAt(new Date().toLocaleString());
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to load crypto changes.");
      setChanges([]);
      setSummary(null);
      setSelectedIds([]);
      setFocusedId("");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadChanges();
  }, [loadChanges]);

  const applySelected = async () => {
    if (selectedIds.length === 0 || isApplying) {
      return;
    }

    try {
      setIsApplying(true);
      setErrorMessage("");
      setSyncMessage("");

      const response = await fetch("/api/crypto/changes/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ changeIds: selectedIds }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setErrorMessage(payload?.error ?? "Failed to apply selected crypto changes.");
        return;
      }

      setSyncMessage(`Requested: ${payload.requestedCount}. Applied: ${payload.appliedCount}.`);
      await loadChanges();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("crypto-updates-refresh"));
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Failed to apply selected crypto changes.");
    } finally {
      setIsApplying(false);
    }
  };

  const toggleSelection = (changeId: string) => {
    setFocusedId(changeId);
    setSelectedIds((previous) =>
      previous.includes(changeId)
        ? previous.filter((id) => id !== changeId)
        : [...previous, changeId]
    );
  };

  const allSelected = changes.length > 0 && selectedIds.length === changes.length;

  const toggleSelectAll = () => {
    setSelectedIds(allSelected ? [] : changes.map((change) => change.changeId));
  };

  const focusedChange = changes.find((change) => change.changeId === focusedId) ?? changes[0];

  return (
    <span className="datatable">
      <div className="mb-3 flex flex-wrap items-center justify-end gap-2 text-[0.8125rem] text-defaulttextcolor">
        <SpkButton
          variant="primary"
          customClass={`ti-btn ${selectedIds.length === 0 || isApplying ? "opacity-50 cursor-not-allowed" : ""}`}
          onclickfunc={applySelected}
        >
          {isApplying ? "Saving..." : "Save Selected Changes"}
        </SpkButton>
      </div>

      <div className="mb-3 text-[0.8125rem] text-defaulttextcolor">
        Incoming: <strong>{summary?.incomingCount ?? 0}</strong> | Saved Existing: <strong>{summary?.savedCount ?? 0}</strong> | Changed Existing: <strong>{summary?.updatedCount ?? 0}</strong> | Unchanged Existing: <strong>{summary?.unchangedCount ?? 0}</strong> | New Auto-Approved: <strong>{summary?.newAutoApprovedCount ?? 0}</strong>
      </div>

      {errorMessage ? <p className="mb-3 text-danger">{errorMessage}</p> : null}
      {syncMessage ? <p className="mb-3 text-success">{syncMessage}</p> : null}

      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-6 rounded-sm border border-defaultborder p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[0.8125rem]">
            <span>Pending existing updates: <strong>{loadedAt || "--"}</strong></span>
            <span>Selected: <strong>{selectedIds.length}</strong> / <strong>{changes.length}</strong></span>
          </div>

          {isLoading ? (
            <div className="py-4 flex items-center justify-center">
              <SpkSpinner customClass="!w-5 !h-5 text-purple-500" Label="Loading Updates">
                <span className="sr-only">Loading pending updates...</span>
              </SpkSpinner>
            </div>
          ) : changes.length > 0 ? (
            <div className="table-responsive">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" aria-label="Select all changes" checked={allSelected} onChange={toggleSelectAll} />
                    </th>
                    <th>Transaction ID</th>
                    <th>Changed Fields</th>
                  </tr>
                </thead>
                <tbody>
                  {changes.map((change) => (
                    <tr key={change.changeId} onClick={() => setFocusedId(change.changeId)} className="cursor-pointer">
                      <td>
                        <input
                          type="checkbox"
                          aria-label={`Select ${change.transactionId}`}
                          checked={selectedIds.includes(change.changeId)}
                          onChange={() => toggleSelection(change.changeId)}
                        />
                      </td>
                      <td>{change.transactionId}</td>
                      <td>{change.changedFields.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mb-0 text-[0.8125rem] text-textmuted">No existing transaction changes pending.</p>
          )}
        </div>

        <div className="col-span-12 xl:col-span-6 rounded-sm border border-defaultborder p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[0.8125rem]">
            <span>Before vs Pending Update</span>
            <span>
              {focusedChange ? (
                <>Transaction ID: <strong>{focusedChange.transactionId}</strong></>
              ) : (
                <>Transaction ID: <strong>--</strong></>
              )}
            </span>
          </div>

          {focusedChange ? (
            <div className="table-responsive">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Before (Saved)</th>
                    <th>Waiting Update (API)</th>
                  </tr>
                </thead>
                <tbody>
                  {focusedChange.changedFields.map((field) => (
                    <tr key={`${focusedChange.changeId}-${field}`}>
                      <td>{prettifyFieldName(field)}</td>
                      <td>{formatCryptoValue(focusedChange.existing[field])}</td>
                      <td>{formatCryptoValue(focusedChange.incoming[field])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mb-0 text-[0.8125rem] text-textmuted">Select a pending row to compare values.</p>
          )}
        </div>
      </div>
    </span>
  );
};

export default CryptoUpdatesDataTable;
