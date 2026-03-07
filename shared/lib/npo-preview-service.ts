import { fetchEngivenNpos } from "@/shared/lib/engiven-npos";
import {
  buildPreviewChanges,
  NpoPreviewChange,
  NpoRecord,
  toSupabaseMasterRow,
} from "@/shared/lib/npo-sync";
import { getStoredMasterNpos } from "@/shared/lib/supabase-rest";

export type NpoPreviewResult = {
  changes: NpoPreviewChange[];
  summary: {
    incomingCount: number;
    existingCount: number;
    newCount: number;
    updatedCount: number;
    unchangedCount: number;
  };
  incomingRecords: NpoRecord[];
};

const PREVIEW_CACHE_TTL_MS = 60000;

let previewCache: {
  value: NpoPreviewResult;
  expiresAt: number;
  cachedAt: string;
} | null = null;

export async function getNpoPreviewResult(options?: { forceRefresh?: boolean }): Promise<
  NpoPreviewResult & { cached: boolean; cachedAt: string }
> {
  const now = Date.now();

  if (!options?.forceRefresh && previewCache && previewCache.expiresAt > now) {
    return {
      ...previewCache.value,
      cached: true,
      cachedAt: previewCache.cachedAt,
    };
  }

  const [incomingRecords, storedRows] = await Promise.all([
    fetchEngivenNpos(),
    getStoredMasterNpos(),
  ]);

  const existingRecords = storedRows
    .map((row) => row.raw_record)
    .filter((row): row is NpoRecord => !!row && typeof row === "object");

  const { changes, summary } = buildPreviewChanges(incomingRecords, existingRecords);

  const result: NpoPreviewResult = {
    changes,
    summary,
    incomingRecords,
  };

  const cachedAt = new Date().toISOString();
  previewCache = {
    value: result,
    expiresAt: now + PREVIEW_CACHE_TTL_MS,
    cachedAt,
  };

  return {
    ...result,
    cached: false,
    cachedAt,
  };
}

export function invalidateNpoPreviewCache() {
  previewCache = null;
}

export const toMasterUpsertRows = (changes: NpoPreviewChange[]) => {
  return changes.map((change) => toSupabaseMasterRow(change.incoming));
};

export const toChangeLogRows = (changes: NpoPreviewChange[], appliedBy?: string) => {
  const now = new Date().toISOString();

  return changes.map((change) => ({
    npo_external_id: change.npoExternalId,
    change_type: change.changeType,
    changed_fields: change.changedFields,
    previous_record: change.existing,
    new_record: change.incoming,
    previewed_at: now,
    applied_at: now,
    applied_by: appliedBy ?? null,
  }));
};
