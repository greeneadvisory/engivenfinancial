"use client";

import React from "react";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";

type SpkPaginationControlsProps = {
  page: number;
  totalPages: number;
  totalCount: number;
  rowsPerPage: number;
  rowsPerPageOptions: readonly number[];
  loading?: boolean;
  onPageChange: (nextPage: number) => void;
  onRowsPerPageChange: (nextRowsPerPage: number) => void;
  label?: string;
};

const SpkPaginationControls = ({
  page,
  totalPages,
  totalCount,
  rowsPerPage,
  rowsPerPageOptions,
  loading = false,
  onPageChange,
  onRowsPerPageChange,
  label = "Total",
}: SpkPaginationControlsProps) => {
  const canGoPrevious = page > 1 && !loading;
  const canGoNext = page < totalPages && !loading;

  return (
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[0.8125rem] text-textmuted">
      <span>
        Page <strong>{page}</strong> of <strong>{totalPages}</strong> | {label}: <strong>{totalCount}</strong>
      </span>
      <div className="flex items-center gap-2">
        <select
          className="form-control py-1 text-[0.8125rem]"
          value={rowsPerPage}
          onChange={(event) => onRowsPerPageChange(Number(event.target.value))}
          disabled={loading}
        >
          {rowsPerPageOptions.map((option) => (
            <option key={`rows-${option}`} value={option}>
              {option}
            </option>
          ))}
        </select>
        <SpkButton
          variant="light"
          customClass={`ti-btn py-1 px-2 ${!canGoPrevious ? "opacity-50 cursor-not-allowed" : ""}`}
          onclickfunc={() => {
            if (canGoPrevious) {
              onPageChange(page - 1);
            }
          }}
        >
          Prev
        </SpkButton>
        <SpkButton
          variant="light"
          customClass={`ti-btn py-1 px-2 ${!canGoNext ? "opacity-50 cursor-not-allowed" : ""}`}
          onclickfunc={() => {
            if (canGoNext) {
              onPageChange(page + 1);
            }
          }}
        >
          Next
        </SpkButton>
      </div>
    </div>
  );
};

export default SpkPaginationControls;
