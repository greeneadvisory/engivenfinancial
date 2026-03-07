"use client";

import React from "react";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkPaginationControls from "@/shared/@spk-reusable-components/uielements/spk-pagination-controls";
import SpkSpinner from "@/shared/@spk-reusable-components/uielements/spk-spinner";
import {
  formatCellValue,
  NpoPreviewChange,
} from "@/shared/lib/npo-sync";
import { DEFAULT_PAGE_SIZE, getTotalPages, STANDARD_PAGE_SIZE_OPTIONS } from "@/shared/lib/pagination";
import { fetchJsonWithClientCache } from "@/shared/lib/client-fetch-cache";

const prettifyFieldName = (field: string) => {
  const withSpaces = field
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim();
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};

type PreviewChangeListItem = Pick<
  NpoPreviewChange,
  "changeId" | "npoExternalId" | "changeType" | "changedFields"
>;

const NpoUpdatesDataTable = () => {
  const [previewChanges, setPreviewChanges] = React.useState<PreviewChangeListItem[]>([]);
  const [focusedChange, setFocusedChange] = React.useState<NpoPreviewChange | null>(null);
  const [selectedChangeIds, setSelectedChangeIds] = React.useState<string[]>([]);
  const [totalPendingChanges, setTotalPendingChanges] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(DEFAULT_PAGE_SIZE);
  const [previewSummary, setPreviewSummary] = React.useState<{
    incomingCount: number;
    existingCount: number;
    newCount: number;
    updatedCount: number;
    unchangedCount: number;
  } | null>(null);
  const [previewError, setPreviewError] = React.useState("");
  const [previewLoadedAt, setPreviewLoadedAt] = React.useState("");
  const [isPreviewLoading, setIsPreviewLoading] = React.useState(true);
  const [isFocusedChangeLoading, setIsFocusedChangeLoading] = React.useState(false);
  const [isApplyingChanges, setIsApplyingChanges] = React.useState(false);
  const [syncMessage, setSyncMessage] = React.useState("");
  const [focusedChangeId, setFocusedChangeId] = React.useState<string>("");

  const loadChangeDetail = React.useCallback(async (changeId: string) => {
    try {
      if (!changeId) {
        setFocusedChange(null);
        return;
      }

      setIsFocusedChangeLoading(true);
      setFocusedChange(null);

      const result = await fetchJsonWithClientCache<any>(`/api/npos/changes/detail/?changeId=${encodeURIComponent(changeId)}`, {
        ttlMs: 30000,
        init: { method: "GET" },
      });

      const payload = result.payload;

      if (!result.ok || !payload?.change) {
        setFocusedChange(null);
        return;
      }

      setFocusedChange(payload.change as NpoPreviewChange);
    } catch {
      setFocusedChange(null);
    } finally {
      setIsFocusedChangeLoading(false);
    }
  }, []);

  const loadPreviewChanges = React.useCallback(async (page: number, perPage: number) => {
    try {
      setIsPreviewLoading(true);
      setPreviewError("");
      setSyncMessage("");

      const result = await fetchJsonWithClientCache<any>(`/api/npos/changes/preview/?page=${page}&perPage=${perPage}`, {
        ttlMs: 30000,
        init: { method: "GET" },
      });

      const payload = result.payload;

      if (!result.ok || !payload) {
        setPreviewError(payload?.error ?? "Failed to preview NPO changes.");
        setPreviewSummary(null);
        setPreviewChanges([]);
        setTotalPendingChanges(0);
        setSelectedChangeIds([]);
        setFocusedChangeId("");
        setFocusedChange(null);
        return;
      }

      const nextChanges = Array.isArray(payload?.changes) ? payload.changes : [];
      const typedChanges = nextChanges as PreviewChangeListItem[];
      setPreviewChanges(typedChanges);
      setTotalPendingChanges(Number(payload?.totalCount ?? typedChanges.length));
      setSelectedChangeIds((previous) =>
        previous.filter((id) => typedChanges.some((change) => change.changeId === id))
      );

      const nextFocusedId = typedChanges[0]?.changeId ?? "";
      setFocusedChangeId(nextFocusedId);
      if (nextFocusedId) {
        await loadChangeDetail(nextFocusedId);
      } else {
        setFocusedChange(null);
      }

      setPreviewSummary(payload?.summary ?? null);
      setPreviewLoadedAt(new Date().toLocaleString());
    } catch (error) {
      setPreviewError(error instanceof Error ? error.message : "Failed to preview NPO changes.");
      setPreviewSummary(null);
      setPreviewChanges([]);
      setTotalPendingChanges(0);
      setSelectedChangeIds([]);
      setFocusedChangeId("");
      setFocusedChange(null);
    } finally {
      setIsPreviewLoading(false);
    }
  }, [loadChangeDetail]);

  React.useEffect(() => {
    loadPreviewChanges(currentPage, rowsPerPage);
  }, [currentPage, loadPreviewChanges, rowsPerPage]);

  const applySelectedChanges = async () => {
    if (selectedChangeIds.length === 0 || isApplyingChanges) {
      return;
    }

    try {
      setIsApplyingChanges(true);
      setPreviewError("");
      setSyncMessage("");

      const shouldApplyAll =
        previewChanges.length > 0 && selectedChangeIds.length === previewChanges.length;

      const response = await fetch("/api/npos/changes/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          shouldApplyAll
            ? {
                applyAll: true,
                appliedBy: "admin-ui",
              }
            : {
                changeIds: selectedChangeIds,
                appliedBy: "admin-ui",
              }
        ),
      });

      const rawText = await response.text();
      let payload: any = null;

      if (rawText) {
        try {
          payload = JSON.parse(rawText);
        } catch {
          payload = null;
        }
      }

      if (!response.ok || !payload) {
        setPreviewError(payload?.error ?? "Failed to apply selected changes.");
        return;
      }

      const requestedCount = payload.requestedCount ?? selectedChangeIds.length;
      const appliedCount = payload.appliedCount ?? selectedChangeIds.length;
      const modeText = payload.mode === "all" ? "all pending" : "selected";
      setSyncMessage(
        `Apply mode: ${modeText}. Requested: ${requestedCount}. Applied: ${appliedCount}.`
      );
      await loadPreviewChanges(currentPage, rowsPerPage);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("npo-updates-refresh"));
      }
    } catch (error) {
      setPreviewError(error instanceof Error ? error.message : "Failed to apply selected changes.");
    } finally {
      setIsApplyingChanges(false);
    }
  };

  const toggleChangeSelection = (changeId: string) => {
    setFocusedChangeId(changeId);
    void loadChangeDetail(changeId);
    setSelectedChangeIds((previous) =>
      previous.includes(changeId)
        ? previous.filter((id) => id !== changeId)
        : [...previous, changeId]
    );
  };

  const allChangesSelected =
    previewChanges.length > 0 && selectedChangeIds.length === previewChanges.length;

  const toggleSelectAllChanges = () => {
    setSelectedChangeIds(allChangesSelected ? [] : previewChanges.map((change) => change.changeId));
  };

  const hasSupabaseEnvError = previewError.includes("Missing Supabase env vars");

  const totalPages = getTotalPages(totalPendingChanges, rowsPerPage);

  return (
    <span className="datatable">
      <div className="mb-3 flex flex-wrap items-center justify-end gap-2 text-[0.8125rem] text-defaulttextcolor">
        <SpkButton
          variant="primary"
          customClass={`ti-btn ${selectedChangeIds.length === 0 || isApplyingChanges ? "opacity-50 cursor-not-allowed" : ""}`}
          onclickfunc={applySelectedChanges}
        >
          {isApplyingChanges ? "Saving..." : "Save Selected Changes"}
        </SpkButton>
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[0.8125rem] text-defaulttextcolor">
        <span>
          Incoming: <strong>{previewSummary?.incomingCount ?? 0}</strong> | Existing in Supabase: <strong>{previewSummary?.existingCount ?? 0}</strong> | New: <strong>{previewSummary?.newCount ?? 0}</strong> | Updated: <strong>{previewSummary?.updatedCount ?? 0}</strong> | Unchanged: <strong>{previewSummary?.unchangedCount ?? 0}</strong>
        </span>
      </div>

      {previewError ? <p className="mb-3 text-danger">{previewError}</p> : null}
      {hasSupabaseEnvError ? (
        <div className="mb-3 rounded-sm border border-warning/30 bg-warning/10 px-3 py-2 text-[0.8125rem] text-warning">
          Create a .env.local file in the project root with SUPABASE_URL and SUPABASE_SECRET_KEY, then restart the dev server.
        </div>
      ) : null}
      {syncMessage ? <p className="mb-3 text-success">{syncMessage}</p> : null}

      <div className="mb-4 grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-6 rounded-sm border border-defaultborder p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[0.8125rem]">
            <span>
              Pending updates: <strong>{previewLoadedAt || "--"}</strong>
            </span>
            <span>
              Selected: <strong>{selectedChangeIds.length}</strong> / <strong>{previewChanges.length}</strong>
            </span>
          </div>
          <SpkPaginationControls
            page={currentPage}
            totalPages={totalPages}
            totalCount={totalPendingChanges}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={STANDARD_PAGE_SIZE_OPTIONS}
            loading={isPreviewLoading}
            label="Pending Total"
            onPageChange={setCurrentPage}
            onRowsPerPageChange={(nextRowsPerPage: number) => {
              setRowsPerPage(nextRowsPerPage);
              setCurrentPage(1);
            }}
          />
          {isPreviewLoading ? (
            <div className="py-4 flex items-center justify-center">
              <SpkSpinner customClass="!w-5 !h-5 text-purple-500" Label="Loading Updates">
                <span className="sr-only">Loading pending updates...</span>
              </SpkSpinner>
            </div>
          ) : previewChanges.length > 0 ? (
            <div className="table-responsive">
              <table className="table whitespace-nowrap min-w-full">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        aria-label="Select all changes"
                        checked={allChangesSelected}
                        onChange={toggleSelectAllChanges}
                      />
                    </th>
                    <th>NPO ID</th>
                    <th>Change Type</th>
                    <th>Changed Fields</th>
                  </tr>
                </thead>
                <tbody>
                  {previewChanges.map((change) => {
                    const checked = selectedChangeIds.includes(change.changeId);
                    return (
                        <tr
                          key={change.changeId}
                          onClick={() => {
                            setFocusedChangeId(change.changeId);
                            void loadChangeDetail(change.changeId);
                          }}
                          className="cursor-pointer"
                        >
                          <td>
                            <input
                              type="checkbox"
                              aria-label={`Select ${change.npoExternalId}`}
                              checked={checked}
                              onChange={() => toggleChangeSelection(change.changeId)}
                            />
                          </td>
                          <td>{change.npoExternalId}</td>
                          <td>
                            <span
                              className={`badge ${
                                change.changeType === "insert"
                                  ? "bg-success/10 text-success"
                                  : "bg-info/10 text-info"
                              }`}
                            >
                              {change.changeType}
                            </span>
                          </td>
                          <td>{change.changedFields.join(", ")}</td>
                        </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mb-0 text-[0.8125rem] text-textmuted">No pending updates. Approved changes disappear from this list.</p>
          )}
        </div>

        <div className="col-span-12 xl:col-span-6 rounded-sm border border-defaultborder p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[0.8125rem]">
            <span>
              Before vs Pending Update
            </span>
            <span>
              {focusedChange ? (
                <>
                  NPO ID: <strong>{focusedChange.npoExternalId}</strong>
                </>
              ) : (
                <>
                  NPO ID: <strong>--</strong>
                </>
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
                    <tr key={`${focusedChange.changeId}-${field}-side`}> 
                      <td>{prettifyFieldName(field)}</td>
                      <td>{focusedChange.existing ? formatCellValue(focusedChange.existing[field]) : "(new)"}</td>
                      <td>{formatCellValue(focusedChange.incoming[field])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : isFocusedChangeLoading ? (
            <div className="py-4 flex items-center justify-center">
              <SpkSpinner customClass="!w-5 !h-5 text-purple-500" Label="Loading Details">
                <span className="sr-only">Loading update details...</span>
              </SpkSpinner>
            </div>
          ) : (
            <p className="mb-0 text-[0.8125rem] text-textmuted">Select a pending row to compare before vs waiting update values.</p>
          )}
        </div>
      </div>
    </span>
  );
};

export default NpoUpdatesDataTable;
