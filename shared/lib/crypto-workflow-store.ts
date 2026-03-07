import { CryptoRecord, fetchEngivenCryptoTransactions } from "@/shared/lib/engiven-crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import {
  buildCryptoExistingChanges,
  getCryptoChangedFields,
  getCryptoExternalId,
} from "@/shared/lib/crypto-sync";
import {
  getLatestCryptoBatchNumber,
  getStoredCryptoWorkflowRecordsPage,
  getStoredCryptoWorkflowRecords,
  patchCryptoWorkflowRecordsByIds,
  SupabaseCryptoWorkflowRow,
  upsertCryptoWorkflowRecords,
} from "@/shared/lib/supabase-rest";

type BatchInfo = {
  batchNumber: string;
  batchName: string | null;
  createdAt: string;
  transactionIds: string[];
};

type LegacyCryptoWorkflowStore = {
  savedById?: Record<string, CryptoRecord>;
  batchAssignmentsByTransactionId?: Record<string, string>;
  batchesByNumber?: Record<string, BatchInfo>;
};

const LEGACY_WORKFLOW_STORE_FILE = path.join(process.cwd(), ".cache", "crypto-workflow.json");
let savedCryptoInitialized = false;
let savedCryptoInitializationPromise: Promise<void> | null = null;

const toStoreRow = (
  record: CryptoRecord,
  options?: {
    batchTransactionNumber?: string | null;
    batchName?: string | null;
    batchAssignedAt?: string | null;
    acceptedAt?: string | null;
    hiddenAt?: string | null;
  }
) => {
  const transactionId = getCryptoExternalId(record);

  return {
    transaction_id: transactionId,
    raw_record: record,
    created_at_source: typeof record.createdAt === "string" ? record.createdAt : null,
    updated_at_source: typeof record.updatedAt === "string" ? record.updatedAt : null,
    batch_transaction_number: options?.batchTransactionNumber ?? null,
    batch_name: options?.batchName ?? null,
    batch_assigned_at: options?.batchAssignedAt ?? null,
    accepted_at: options?.acceptedAt ?? null,
    hidden_at: options?.hiddenAt ?? null,
  };
};

const toRecordFromRow = (row: SupabaseCryptoWorkflowRow): CryptoRecord => {
  const rawRecord = row.raw_record ?? {};

  return {
    ...rawRecord,
    batchTransactionNumber: row.batch_transaction_number ?? null,
    batchName: row.batch_name ?? null,
    acceptedAt: row.accepted_at ?? null,
    hiddenAt: row.hidden_at ?? null,
  } as CryptoRecord;
};

const sortById = (records: CryptoRecord[]) => {
  return [...records].sort((left, right) => {
    const leftId = getCryptoExternalId(left);
    const rightId = getCryptoExternalId(right);
    return leftId.localeCompare(rightId, undefined, { numeric: true, sensitivity: "base" });
  });
};

const getWorkflowRowsById = async () => {
  const rows = await getStoredCryptoWorkflowRecords();
  const map = new Map<string, SupabaseCryptoWorkflowRow>();

  rows.forEach((row) => {
    map.set(row.transaction_id, row);
  });

  return { rows, map };
};

const readLegacyWorkflowStore = async (): Promise<LegacyCryptoWorkflowStore | null> => {
  try {
    const text = await fs.readFile(LEGACY_WORKFLOW_STORE_FILE, "utf8");
    return JSON.parse(text) as LegacyCryptoWorkflowStore;
  } catch {
    return null;
  }
};

export async function ensureSavedCryptoInitialized() {
  if (savedCryptoInitialized) {
    return;
  }

  if (savedCryptoInitializationPromise) {
    await savedCryptoInitializationPromise;
    return;
  }

  savedCryptoInitializationPromise = (async () => {
    const existingPage = await getStoredCryptoWorkflowRecordsPage({
      offset: 0,
      limit: 1,
      includeBatched: true,
      includeHidden: true,
    });

    if (existingPage.totalCount > 0) {
      savedCryptoInitialized = true;
      return;
    }

    const legacyStore = await readLegacyWorkflowStore();
    const legacySavedById = legacyStore?.savedById ?? {};
    const legacyBatchAssignments = legacyStore?.batchAssignmentsByTransactionId ?? {};
    const legacyBatchesByNumber = legacyStore?.batchesByNumber ?? {};

    let insertRows = Object.values(legacySavedById)
      .map((record) => {
        const transactionId = getCryptoExternalId(record);
        if (!transactionId) {
          return null;
        }

        const batchTransactionNumber = legacyBatchAssignments[transactionId] ?? null;
        const batchAssignedAt = batchTransactionNumber
          ? legacyBatchesByNumber[batchTransactionNumber]?.createdAt ?? null
          : null;

        return toStoreRow(record, {
          batchTransactionNumber,
          batchName: null,
          batchAssignedAt,
          hiddenAt: null,
        });
      })
      .filter((row): row is NonNullable<typeof row> => !!row);

    if (insertRows.length === 0) {
      const liveRecords = await fetchEngivenCryptoTransactions();
      insertRows = liveRecords
        .map((record) => {
          const transactionId = getCryptoExternalId(record);
          if (!transactionId) {
            return null;
          }

          return toStoreRow(record);
        })
        .filter((row): row is NonNullable<typeof row> => !!row);
    }

    await upsertCryptoWorkflowRecords(insertRows);
    savedCryptoInitialized = true;
  })();

  try {
    await savedCryptoInitializationPromise;
  } finally {
    savedCryptoInitializationPromise = null;
  }
}

export async function getSavedCryptoTransactions() {
  await ensureSavedCryptoInitialized();
  const rows = await getStoredCryptoWorkflowRecords();
  return sortById(rows.map((row) => toRecordFromRow(row)));
}

export async function getSavedCryptoTransactionsPage(options: {
  offset: number;
  limit: number;
  includeBatched?: boolean;
  includeHidden?: boolean;
}) {
  await ensureSavedCryptoInitialized();
  const page = await getStoredCryptoWorkflowRecordsPage(options);

  return {
    records: page.rows.map((row) => toRecordFromRow(row)),
    totalCount: page.totalCount,
  };
}

export async function getCryptoExistingChanges() {
  await ensureSavedCryptoInitialized();
  const { rows, map } = await getWorkflowRowsById();
  const liveRecords = await fetchEngivenCryptoTransactions();

  const newRows = liveRecords
    .map((record) => {
      const transactionId = getCryptoExternalId(record);
      if (!transactionId || map.has(transactionId)) {
        return null;
      }

      return toStoreRow(record);
    })
    .filter((row): row is NonNullable<typeof row> => !!row);

  if (newRows.length > 0) {
    await upsertCryptoWorkflowRecords(newRows);
  }

  const savedRecords = rows.map((row) => toRecordFromRow(row)).concat(
    newRows.map(
      (row) =>
        ({
          ...(row.raw_record ?? {}),
          batchTransactionNumber: row.batch_transaction_number ?? null,
        }) as CryptoRecord
    )
  );

  return buildCryptoExistingChanges(liveRecords, savedRecords, newRows.length);
}

export async function applyCryptoExistingChanges(changeIds: string[]) {
  await ensureSavedCryptoInitialized();
  const { map } = await getWorkflowRowsById();

  const changeIdSet = new Set(changeIds.map((id) => id.trim()).filter((id) => id.length > 0));

  if (changeIdSet.size === 0) {
    return {
      requestedCount: 0,
      appliedCount: 0,
      appliedIds: [] as string[],
    };
  }

  const liveRecords = await fetchEngivenCryptoTransactions();
  const liveById = new Map<string, CryptoRecord>();

  liveRecords.forEach((record) => {
    const id = getCryptoExternalId(record);
    if (id) {
      liveById.set(id, record);
    }
  });

  const appliedIds: string[] = [];
  const updatedRows: Record<string, unknown>[] = [];

  changeIdSet.forEach((changeId) => {
    const existingRow = map.get(changeId);
    const incoming = liveById.get(changeId);

    if (!existingRow || !incoming) {
      return;
    }

    const existing = toRecordFromRow(existingRow);
    const changedFields = getCryptoChangedFields(incoming, existing);

    if (changedFields.length === 0) {
      return;
    }

    updatedRows.push(
      toStoreRow(incoming, {
        batchTransactionNumber: existingRow.batch_transaction_number,
        batchName: existingRow.batch_name,
        batchAssignedAt: existingRow.batch_assigned_at,
        acceptedAt: existingRow.accepted_at,
        hiddenAt: existingRow.hidden_at,
      })
    );
    appliedIds.push(changeId);
  });

  if (updatedRows.length > 0) {
    await upsertCryptoWorkflowRecords(updatedRows);
  }

  return {
    requestedCount: changeIdSet.size,
    appliedCount: appliedIds.length,
    appliedIds,
  };
}

const buildBatchNumber = (datePart: string, sequence: number) => {
  const seqPart = String(sequence).padStart(4, "0");
  return `CB-${datePart}-${seqPart}`;
};

const getNextBatchNumber = (rows: SupabaseCryptoWorkflowRow[]) => {
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const prefix = `CB-${datePart}-`;

  const nextSequence = rows.reduce((highest, row) => {
    const batchNumber = row.batch_transaction_number?.trim() ?? "";
    if (!batchNumber.startsWith(prefix)) {
      return highest;
    }

    const sequencePart = Number(batchNumber.slice(prefix.length));
    if (!Number.isFinite(sequencePart)) {
      return highest;
    }

    return Math.max(highest, sequencePart);
  }, 0) + 1;

  return buildBatchNumber(datePart, nextSequence);
};

export async function createCryptoBatch(transactionIds: string[], batchName: string) {
  await ensureSavedCryptoInitialized();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  const normalizedBatchName = batchName.trim();

  if (!normalizedBatchName) {
    throw new Error("Batch name is required.");
  }

  if (uniqueIds.length === 0) {
    throw new Error("No valid unbatched transactions selected for batching.");
  }

  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const prefix = `CB-${datePart}-`;
  const latestBatchNumber = await getLatestCryptoBatchNumber(prefix);
  const latestSequence = latestBatchNumber ? Number(latestBatchNumber.slice(prefix.length)) : 0;
  const batchNumber = buildBatchNumber(datePart, Number.isFinite(latestSequence) ? latestSequence + 1 : 1);
  const createdAt = new Date().toISOString();

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    batch_transaction_number: batchNumber,
    batch_name: normalizedBatchName,
    batch_assigned_at: createdAt,
  }, {
    query: {
      batch_transaction_number: "is.null",
    },
  });

  return {
    batchNumber,
    batchName: normalizedBatchName,
    createdAt,
    transactionCount: uniqueIds.length,
    transactionIds: uniqueIds,
  };
}

export async function unbatchCryptoTransactions(transactionIds: string[]) {
  await ensureSavedCryptoInitialized();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    throw new Error("No batched transactions selected to unbatch.");
  }

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    batch_transaction_number: null,
    batch_name: null,
    batch_assigned_at: null,
  }, {
    query: {
      batch_transaction_number: "not.is.null",
    },
  });

  return {
    transactionCount: uniqueIds.length,
    transactionIds: uniqueIds,
  };
}

export async function acceptCryptoTransactions(transactionIds: string[]) {
  await ensureSavedCryptoInitialized();
  const acceptedAt = new Date().toISOString();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    throw new Error("No unreviewed transactions selected to accept.");
  }

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    accepted_at: acceptedAt,
  }, {
    query: {
      accepted_at: "is.null",
      batch_transaction_number: "is.null",
    },
  });

  return {
    acceptedAt,
    transactionCount: uniqueIds.length,
    transactionIds: uniqueIds,
  };
}

export async function revokeCryptoTransactions(transactionIds: string[]) {
  await ensureSavedCryptoInitialized();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    throw new Error("No accepted transactions selected to revoke.");
  }

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    accepted_at: null,
  }, {
    query: {
      accepted_at: "not.is.null",
      batch_transaction_number: "is.null",
    },
  });

  return {
    transactionCount: uniqueIds.length,
    transactionIds: uniqueIds,
  };
}

export async function hideCryptoTransactions(transactionIds: string[]) {
  await ensureSavedCryptoInitialized();
  const hiddenAt = new Date().toISOString();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    throw new Error("No visible transactions selected to hide.");
  }

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    hidden_at: hiddenAt,
  }, {
    query: {
      hidden_at: "is.null",
      accepted_at: "is.null",
    },
  });

  return {
    hiddenAt,
    transactionCount: uniqueIds.length,
    transactionIds: uniqueIds,
  };
}

export async function unhideCryptoTransactions(transactionIds: string[]) {
  await ensureSavedCryptoInitialized();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    throw new Error("No hidden transactions selected to unhide.");
  }

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    hidden_at: null,
  }, {
    query: {
      hidden_at: "not.is.null",
    },
  });

  return {
    transactionCount: uniqueIds.length,
    transactionIds: uniqueIds,
  };
}

const buildBatchesFromRows = (rows: SupabaseCryptoWorkflowRow[]) => {
  const grouped = new Map<string, BatchInfo>();

  rows.forEach((row) => {
    const batchNumber = row.batch_transaction_number?.trim() ?? "";
    if (!batchNumber) {
      return;
    }

    const transactionId = row.transaction_id.trim();
    const createdAt = row.batch_assigned_at ?? row.updated_at ?? row.created_at;
    const batchName = row.batch_name?.trim() || null;
    const existing = grouped.get(batchNumber);

    if (!existing) {
      grouped.set(batchNumber, {
        batchNumber,
        batchName,
        createdAt,
        transactionIds: transactionId ? [transactionId] : [],
      });
      return;
    }

    existing.createdAt = existing.createdAt.localeCompare(createdAt) > 0 ? existing.createdAt : createdAt;
    existing.batchName = existing.batchName ?? batchName;
    if (transactionId) {
      existing.transactionIds.push(transactionId);
    }
  });

  return Array.from(grouped.values()).map((batch) => ({
    ...batch,
    transactionIds: Array.from(new Set(batch.transactionIds)).sort((left, right) =>
      left.localeCompare(right, undefined, { numeric: true, sensitivity: "base" })
    ),
  }));
};

export async function listCryptoBatches() {
  await ensureSavedCryptoInitialized();
  const rows = await getStoredCryptoWorkflowRecords();

  return buildBatchesFromRows(rows)
    .map((batch) => ({
      batchNumber: batch.batchNumber,
      batchName: batch.batchName,
      createdAt: batch.createdAt,
      transactionCount: batch.transactionIds.length,
    }))
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}

export async function getCryptoBatchDetail(batchNumber: string) {
  await ensureSavedCryptoInitialized();
  const rows = await getStoredCryptoWorkflowRecords();
  const batches = buildBatchesFromRows(rows);
  const batch = batches.find((item) => item.batchNumber === batchNumber);

  if (!batch) {
    return null;
  }

  const rowMap = new Map<string, SupabaseCryptoWorkflowRow>();
  rows.forEach((row) => {
    rowMap.set(row.transaction_id, row);
  });

  const transactions = batch.transactionIds
    .map((id) => rowMap.get(id))
    .filter((row): row is SupabaseCryptoWorkflowRow => !!row)
    .map((row) => toRecordFromRow(row));

  return {
    batchNumber: batch.batchNumber,
    batchName: batch.batchName,
    createdAt: batch.createdAt,
    transactionCount: batch.transactionIds.length,
    transactions: sortById(transactions),
  };
}
