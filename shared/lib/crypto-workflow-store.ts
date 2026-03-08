import { CryptoRecord, fetchEngivenCryptoTransactions } from "@/shared/lib/engiven-crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import {
  buildCryptoExistingChanges,
  formatCryptoValue,
  getCryptoChangedFields,
  getCryptoExternalId,
} from "@/shared/lib/crypto-sync";
import {
  getLatestCryptoBatchNumber,
  getStoredCryptoWorkflowDonations,
  getStoredCryptoWorkflowDonationsByIds,
  getStoredCryptoWorkflowDonationsPage,
  getStoredMasterCryptoRecords,
  getStoredMasterCryptoRecordsByIds,
  getStoredMasterCryptoRecordsPage,
  patchCryptoWorkflowRecordsByIds,
  SupabaseCryptoWorkflowDonationRow,
  SupabaseMasterCryptoRow,
  upsertCryptoWorkflowDonations,
  upsertMasterCryptoRecords,
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

const MASTER_CRYPTO_FIELD_COLUMN_MAPPINGS = [
  ["npo", "npo"],
  ["npoName", "npo_name"],
  ["EIN", "ein"],
  ["guideStarNPO", "guide_star_npo"],
  ["guideStarName", "guide_star_name"],
  ["guideStarEIN", "guide_star_ein"],
  ["apiPartner", "api_partner"],
  ["apiPartnerName", "api_partner_name"],
  ["instantPartner", "instant_partner"],
  ["instantPartnerName", "instant_partner_name"],
  ["affiliate", "affiliate"],
  ["affiliateName", "affiliate_name"],
  ["toAddress", "to_address"],
  ["destinationTag", "destination_tag"],
  ["donorName", "donor_name"],
  ["donorPhone", "donor_phone"],
  ["donorAddress1", "donor_address1"],
  ["donorAddress2", "donor_address2"],
  ["donorCity", "donor_city"],
  ["donorState", "donor_state"],
  ["donorZipCode", "donor_zip_code"],
  ["donorCountry", "donor_country"],
  ["donorMemo", "donor_memo"],
  ["notes", "notes"],
  ["transactionHash", "transaction_hash"],
  ["transactionPromisedTimeStamp", "transaction_promised_timestamp"],
  ["transactionConfirmedTimeStamp", "transaction_confirmed_timestamp"],
  ["transactionExpiredTimeStamp", "transaction_expired_timestamp"],
  ["transactionStatus", "transaction_status"],
  ["isCustody", "is_custody"],
  ["pledgedAmount", "pledged_amount"],
  ["amount", "amount"],
  ["custodyAmount", "custody_amount"],
  ["custodyDepositFee", "custody_deposit_fee"],
  ["currency", "currency"],
  ["currencyName", "currency_name"],
  ["usdValueAtConfirmation", "usd_value_at_confirmation"],
  ["usdValueForNpo", "usd_value_for_npo"],
  ["statusFromAdmin", "status_from_admin"],
  ["achDateEntered", "ach_date_entered"],
  ["achReferenceNumber", "ach_reference_number"],
  ["fiscalSponsor", "fiscal_sponsor"],
  ["statusFromFiscalSponsor", "status_from_fiscal_sponsor"],
  ["statusNoteFiscalSponsor", "status_note_fiscal_sponsor"],
  ["achDateEnteredFiscalSponsor", "ach_date_entered_fiscal_sponsor"],
  ["achReferenceNumberFiscalSponsor", "ach_reference_number_fiscal_sponsor"],
  ["geminiFee", "gemini_fee"],
  ["anonymousToBeneficiary", "anonymous_to_beneficiary"],
  ["customDonor", "custom_donor"],
  ["customDonorName", "custom_donor_name"],
  ["customDonorEmail", "custom_donor_email"],
  ["customDonorCryptoFeeRate", "custom_donor_crypto_fee_rate"],
  ["customDonorFiscalSponsorFee", "custom_donor_fiscal_sponsor_fee"],
] as const;

const toNullableText = (value: unknown) => {
  const formatted = formatCryptoValue(value as string | number | boolean | null).trim();
  return formatted.length > 0 ? formatted : null;
};

const toMasterStoreRow = (record: CryptoRecord) => {
  const transactionId = getCryptoExternalId(record);

  const row: Record<string, unknown> = {
    transaction_id: transactionId,
    raw_record: record,
    created_at_source: typeof record.createdAt === "string" ? record.createdAt : null,
    updated_at_source: typeof record.updatedAt === "string" ? record.updatedAt : null,
  };

  MASTER_CRYPTO_FIELD_COLUMN_MAPPINGS.forEach(([field, column]) => {
    row[column] = toNullableText(record[field]);
  });

  return row;
};

const toWorkflowStoreRow = (
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
    batch_transaction_number: options?.batchTransactionNumber ?? null,
    batch_name: options?.batchName ?? null,
    batch_assigned_at: options?.batchAssignedAt ?? null,
    accepted_at: options?.acceptedAt ?? null,
    hidden_at: options?.hiddenAt ?? null,
  };
};

const toRecordFromMasterRow = (row: SupabaseMasterCryptoRow): CryptoRecord => {
  const rawRecord = row.raw_record ?? {};

  return {
    ...rawRecord,
    id: rawRecord.id ?? row.transaction_id,
    createdAt: rawRecord.createdAt ?? row.created_at_source ?? null,
    updatedAt: rawRecord.updatedAt ?? row.updated_at_source ?? null,
  } as CryptoRecord;
};

const applyWorkflowToRecord = (
  record: CryptoRecord,
  workflowRow?: SupabaseCryptoWorkflowDonationRow | null
) => ({
  ...record,
  batchTransactionNumber: workflowRow?.batch_transaction_number ?? null,
  batchName: workflowRow?.batch_name ?? null,
  acceptedAt: workflowRow?.accepted_at ?? null,
  hiddenAt: workflowRow?.hidden_at ?? null,
}) as CryptoRecord;

const sortById = (records: CryptoRecord[]) => {
  return [...records].sort((left, right) => {
    const leftId = getCryptoExternalId(left);
    const rightId = getCryptoExternalId(right);
    return leftId.localeCompare(rightId, undefined, { numeric: true, sensitivity: "base" });
  });
};

const getMasterRowsById = async () => {
  const rows = await getStoredMasterCryptoRecords();
  const map = new Map<string, SupabaseMasterCryptoRow>();

  rows.forEach((row) => {
    map.set(row.transaction_id, row);
  });

  return { rows, map };
};

const getWorkflowRowsById = async () => {
  const rows = await getStoredCryptoWorkflowDonations();
  const map = new Map<string, SupabaseCryptoWorkflowDonationRow>();

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

const ensureWorkflowRows = async (transactionIds: string[]) => {
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    return;
  }

  const existingRows = await getStoredCryptoWorkflowDonations();
  const existingIdSet = new Set(existingRows.map((row) => row.transaction_id));
  const missingIds = uniqueIds.filter((id) => !existingIdSet.has(id));

  if (missingIds.length === 0) {
    return;
  }

  await upsertCryptoWorkflowDonations(missingIds.map((transactionId) => ({ transaction_id: transactionId })));
};

const MASTER_RECORD_ID_CHUNK_SIZE = 100;

const getMasterRowsByIdsInChunks = async (transactionIds: string[]) => {
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (uniqueIds.length === 0) {
    return [] as SupabaseMasterCryptoRow[];
  }

  const rows: SupabaseMasterCryptoRow[] = [];

  for (let index = 0; index < uniqueIds.length; index += MASTER_RECORD_ID_CHUNK_SIZE) {
    const chunk = uniqueIds.slice(index, index + MASTER_RECORD_ID_CHUNK_SIZE);
    const chunkRows = await getStoredMasterCryptoRecordsByIds(chunk);
    rows.push(...chunkRows);
  }

  return rows;
};

const getRecordSortTimestamp = (record: CryptoRecord) => {
  const confirmedTimestamp = toNullableText(record.transactionConfirmedTimeStamp);
  if (confirmedTimestamp) {
    return confirmedTimestamp;
  }

  const createdAt = toNullableText(record.createdAt);
  if (createdAt) {
    return createdAt;
  }

  return null;
};

const compareCryptoRecordsByNewest = (left: CryptoRecord, right: CryptoRecord) => {
  const leftTimestamp = getRecordSortTimestamp(left);
  const rightTimestamp = getRecordSortTimestamp(right);

  if (leftTimestamp !== rightTimestamp) {
    if (!leftTimestamp) {
      return 1;
    }

    if (!rightTimestamp) {
      return -1;
    }

    return rightTimestamp.localeCompare(leftTimestamp);
  }

  const leftId = getCryptoExternalId(left);
  const rightId = getCryptoExternalId(right);
  return rightId.localeCompare(leftId, undefined, { numeric: true, sensitivity: "base" });
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
    const existingPage = await getStoredMasterCryptoRecordsPage({
      offset: 0,
      limit: 1,
    });

    if (existingPage.totalCount > 0) {
      const existingMasterRows = await getStoredMasterCryptoRecords();
      await ensureWorkflowRows(existingMasterRows.map((row) => row.transaction_id));
      savedCryptoInitialized = true;
      return;
    }

    const legacyStore = await readLegacyWorkflowStore();
    const legacySavedById = legacyStore?.savedById ?? {};
    const legacyBatchAssignments = legacyStore?.batchAssignmentsByTransactionId ?? {};
    const legacyBatchesByNumber = legacyStore?.batchesByNumber ?? {};

    let masterInsertRows = Object.values(legacySavedById)
      .map((record) => {
        const transactionId = getCryptoExternalId(record);
        if (!transactionId) {
          return null;
        }

        return toMasterStoreRow(record);
      })
      .filter((row): row is NonNullable<typeof row> => !!row);

    let workflowInsertRows = Object.values(legacySavedById)
      .map((record) => {
        const transactionId = getCryptoExternalId(record);
        if (!transactionId) {
          return null;
        }

        const batchTransactionNumber = legacyBatchAssignments[transactionId] ?? null;
        const batchAssignedAt = batchTransactionNumber
          ? legacyBatchesByNumber[batchTransactionNumber]?.createdAt ?? null
          : null;

        return toWorkflowStoreRow(record, {
          batchTransactionNumber,
          batchName: null,
          batchAssignedAt,
          hiddenAt: null,
        });
      })
      .filter((row): row is NonNullable<typeof row> => !!row);

    if (masterInsertRows.length === 0) {
      const liveRecords = await fetchEngivenCryptoTransactions();
      masterInsertRows = liveRecords
        .map((record) => {
          const transactionId = getCryptoExternalId(record);
          if (!transactionId) {
            return null;
          }

          return toMasterStoreRow(record);
        })
        .filter((row): row is NonNullable<typeof row> => !!row);

      workflowInsertRows = liveRecords
        .map((record) => {
          const transactionId = getCryptoExternalId(record);
          if (!transactionId) {
            return null;
          }

          return toWorkflowStoreRow(record);
        })
        .filter((row): row is NonNullable<typeof row> => !!row);
    }

    await upsertMasterCryptoRecords(masterInsertRows);
    await upsertCryptoWorkflowDonations(workflowInsertRows);
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
  const [masterRows, workflowRows] = await Promise.all([
    getStoredMasterCryptoRecords(),
    getStoredCryptoWorkflowDonations(),
  ]);
  const workflowMap = new Map(workflowRows.map((row) => [row.transaction_id, row]));

  return masterRows
    .map((row) => applyWorkflowToRecord(toRecordFromMasterRow(row), workflowMap.get(row.transaction_id)))
    .sort(compareCryptoRecordsByNewest);
}

export async function getSavedCryptoTransactionsPage(options: {
  offset: number;
  limit: number;
  includeBatched?: boolean;
  includeHidden?: boolean;
}) {
  await ensureSavedCryptoInitialized();
  const workflowPage = await getStoredCryptoWorkflowDonationsPage({
    offset: 0,
    limit: 1,
    includeBatched: options.includeBatched,
    includeHidden: options.includeHidden,
  });
  const workflowRows = await getStoredCryptoWorkflowDonations();
  const workflowMap = new Map(
    workflowRows
      .filter((row) => {
        if (!options.includeBatched && row.batch_transaction_number) {
          return false;
        }

        if (!options.includeHidden && row.hidden_at) {
          return false;
        }

        return true;
      })
      .map((row) => [row.transaction_id, row])
  );

  const targetCount = options.offset + options.limit;
  const pageSize = Math.max(options.limit * 4, 250);
  const filteredRecords: CryptoRecord[] = [];
  let masterOffset = 0;

  while (filteredRecords.length < targetCount) {
    const masterPage = await getStoredMasterCryptoRecordsPage({
      offset: masterOffset,
      limit: pageSize,
    });

    if (masterPage.rows.length === 0) {
      break;
    }

    for (const masterRow of masterPage.rows) {
      const workflowRow = workflowMap.get(masterRow.transaction_id);
      if (!workflowRow) {
        continue;
      }

      filteredRecords.push(applyWorkflowToRecord(toRecordFromMasterRow(masterRow), workflowRow));

      if (filteredRecords.length >= targetCount) {
        break;
      }
    }

    if (masterPage.rows.length < pageSize) {
      break;
    }

    masterOffset += pageSize;
  }

  const pageRows = filteredRecords.slice(options.offset, options.offset + options.limit);

  return {
    records: pageRows,
    totalCount: workflowPage.totalCount,
  };
}

export async function getCryptoExistingChanges() {
  await ensureSavedCryptoInitialized();
  const { rows, map } = await getMasterRowsById();
  const liveRecords = await fetchEngivenCryptoTransactions();

  const newMasterRows = liveRecords
    .map((record) => {
      const transactionId = getCryptoExternalId(record);
      if (!transactionId || map.has(transactionId)) {
        return null;
      }

      return toMasterStoreRow(record);
    })
    .filter((row): row is NonNullable<typeof row> => !!row);

  if (newMasterRows.length > 0) {
    await upsertMasterCryptoRecords(newMasterRows);
    await upsertCryptoWorkflowDonations(
      newMasterRows.map((row) => ({ transaction_id: String(row.transaction_id) }))
    );
  }

  const savedRecords = rows.map((row) => toRecordFromMasterRow(row)).concat(
    newMasterRows.map((row) => toRecordFromMasterRow(row as SupabaseMasterCryptoRow))
  );

  return buildCryptoExistingChanges(liveRecords, savedRecords, newMasterRows.length);
}

export async function applyCryptoExistingChanges(changeIds: string[]) {
  await ensureSavedCryptoInitialized();
  const { map } = await getMasterRowsById();

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

    const existing = toRecordFromMasterRow(existingRow);
    const changedFields = getCryptoChangedFields(incoming, existing);

    if (changedFields.length === 0) {
      return;
    }

    updatedRows.push(toMasterStoreRow(incoming));
    appliedIds.push(changeId);
  });

  if (updatedRows.length > 0) {
    await upsertMasterCryptoRecords(updatedRows);
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

const buildBatchesFromRows = (rows: SupabaseCryptoWorkflowDonationRow[]) => {
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
  const rows = await getStoredCryptoWorkflowDonations();

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
  const rows = await getStoredCryptoWorkflowDonations();
  const batches = buildBatchesFromRows(rows);
  const batch = batches.find((item) => item.batchNumber === batchNumber);

  if (!batch) {
    return null;
  }

  const rowMap = new Map<string, SupabaseCryptoWorkflowDonationRow>();
  rows.forEach((row) => {
    rowMap.set(row.transaction_id, row);
  });

  const masterRows = await getMasterRowsByIdsInChunks(batch.transactionIds);
  const masterMap = new Map(masterRows.map((row) => [row.transaction_id, row]));

  const transactions = batch.transactionIds
    .map((id) => rowMap.get(id))
    .filter((row): row is SupabaseCryptoWorkflowDonationRow => !!row)
    .map((workflowRow) => {
      const masterRow = masterMap.get(workflowRow.transaction_id);
      if (!masterRow) {
        return null;
      }

      return applyWorkflowToRecord(toRecordFromMasterRow(masterRow), workflowRow);
    })
    .filter((row): row is CryptoRecord => !!row);

  return {
    batchNumber: batch.batchNumber,
    batchName: batch.batchName,
    createdAt: batch.createdAt,
    transactionCount: batch.transactionIds.length,
    transactions: sortById(transactions),
  };
}
