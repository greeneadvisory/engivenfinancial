import { CryptoRecord, fetchEngivenCryptoTransactions } from "@/shared/lib/engiven-crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import {
  buildCryptoExistingChanges,
  formatCryptoValue,
  getCryptoChangedFields,
  getCryptoExternalId,
  getTrackedCryptoChangedFields,
} from "@/shared/lib/crypto-sync";
import {
  deleteCryptoWorkflowBatchesByNumbers,
  getStoredCryptoDonationRecordsPage,
  getLatestCryptoBatchNumber,
  getStoredCryptoWorkflowBatches,
  getStoredCryptoWorkflowDonations,
  getStoredCryptoWorkflowDonationsByIds,
  getStoredCryptoWorkflowDonationsPage,
  getStoredMasterCryptoRecords,
  getStoredMasterCryptoRecordsByIds,
  getStoredMasterCryptoRecordsPage,
  patchCryptoWorkflowRecordsByIds,
  SupabaseCryptoDonationRecordRow,
  SupabaseCryptoWorkflowBatchRow,
  SupabaseCryptoWorkflowDonationRow,
  SupabaseMasterCryptoRow,
  upsertCryptoWorkflowBatches,
  upsertCryptoWorkflowDonations,
  upsertMasterCryptoRecords,
} from "@/shared/lib/supabase-rest";

type BatchInfo = {
  batchNumber: string;
  batchName: string | null;
  createdAt: string;
  transactionCount?: number;
  grossTotal?: number;
  feeTotal?: number;
  payoutTotal?: number;
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
let savedCryptoSyncPromise: Promise<number> | null = null;

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

const toNumber = (value: unknown) => {
  const textValue = toNullableText(value);

  if (!textValue) {
    return 0;
  }

  const parsed = Number(textValue.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const roundCurrency = (value: number) => Math.round(value * 100) / 100;

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

const toRecordFromJoinedRow = (row: SupabaseCryptoDonationRecordRow) =>
  applyWorkflowToRecord(
    {
      ...(row.raw_record ?? {}),
      id: row.raw_record?.id ?? row.transaction_id,
      createdAt: row.raw_record?.createdAt ?? row.created_at_source ?? null,
      updatedAt: row.raw_record?.updatedAt ?? row.updated_at_source ?? null,
    } as CryptoRecord,
    {
      transaction_id: row.transaction_id,
      batch_transaction_number: row.batch_transaction_number,
      batch_name: row.batch_name,
      batch_assigned_at: row.batch_assigned_at,
      accepted_at: row.accepted_at,
      hidden_at: row.hidden_at,
      created_at: "",
      updated_at: "",
    }
  );

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
const MASTER_RECORD_SCAN_PAGE_SIZE = 1000;

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

const refreshCryptoWorkflowBatchSummaries = async (batchNumbers: string[]) => {
  const uniqueBatchNumbers = Array.from(new Set(batchNumbers.map((value) => value.trim()).filter((value) => value.length > 0)));

  if (uniqueBatchNumbers.length === 0) {
    return;
  }

  const requestedBatchNumberSet = new Set(uniqueBatchNumbers);
  const workflowRows = await getStoredCryptoWorkflowDonations();
  const batchMap = new Map<string, BatchInfo>();

  workflowRows.forEach((row) => {
    const batchNumber = row.batch_transaction_number?.trim() ?? "";

    if (!batchNumber || !requestedBatchNumberSet.has(batchNumber)) {
      return;
    }

    const transactionId = row.transaction_id.trim();
    const batchName = row.batch_name?.trim() || null;
    const createdAt = row.batch_assigned_at ?? row.updated_at ?? row.created_at;
    const existing = batchMap.get(batchNumber);

    if (!existing) {
      batchMap.set(batchNumber, {
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

  const transactionIds = Array.from(new Set(Array.from(batchMap.values()).flatMap((batch) => batch.transactionIds)));
  const masterRows = await getMasterRowsByIdsInChunks(transactionIds);
  const masterRowMap = new Map(masterRows.map((row) => [row.transaction_id, row]));

  const upsertRows = Array.from(batchMap.values()).map((batch) => {
    let grossTotal = 0;
    let payoutTotal = 0;

    batch.transactionIds.forEach((transactionId) => {
      const masterRow = masterRowMap.get(transactionId);
      if (!masterRow) {
        return;
      }

      grossTotal += toNumber(masterRow.raw_record?.usdValueAtConfirmation ?? null);
      payoutTotal += toNumber(masterRow.raw_record?.usdValueForNpo ?? null);
    });

    grossTotal = roundCurrency(grossTotal);
    payoutTotal = roundCurrency(payoutTotal);

    return {
      batch_transaction_number: batch.batchNumber,
      batch_name: batch.batchName,
      batch_assigned_at: batch.createdAt,
      transaction_count: batch.transactionIds.length,
      gross_total: grossTotal,
      fee_total: roundCurrency(grossTotal - payoutTotal),
      payout_total: payoutTotal,
    };
  });

  if (upsertRows.length > 0) {
    await upsertCryptoWorkflowBatches(upsertRows);
  }

  const batchNumbersToDelete = uniqueBatchNumbers.filter((batchNumber) => !batchMap.has(batchNumber));

  if (batchNumbersToDelete.length > 0) {
    await deleteCryptoWorkflowBatchesByNumbers(batchNumbersToDelete);
  }
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

type CryptoApiReconciliationResult = {
  liveRecords: CryptoRecord[];
  savedRecords: CryptoRecord[];
  newCount: number;
  autoApprovedCount: number;
  totalSyncedCount: number;
};

type CryptoSyncSummaryResult = {
  syncedCount: number;
  pendingCount: number;
  summary: ReturnType<typeof buildCryptoExistingChanges>["summary"];
};

const reconcileCryptoApiState = async (): Promise<CryptoApiReconciliationResult> => {
  await ensureSavedCryptoInitialized();
  const { rows, map } = await getMasterRowsById();
  const liveRecords = await fetchEngivenCryptoTransactions();
  const savedRecordsById = new Map<string, CryptoRecord>();

  rows.forEach((row) => {
    const savedRecord = toRecordFromMasterRow(row);
    savedRecordsById.set(row.transaction_id, savedRecord);
  });

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

    newMasterRows.forEach((row) => {
      const savedRecord = toRecordFromMasterRow(row as SupabaseMasterCryptoRow);
      savedRecordsById.set(String(row.transaction_id), savedRecord);
    });
  }

  const autoApprovedExistingRows = liveRecords
    .map((record) => {
      const transactionId = getCryptoExternalId(record);
      const existingRecord = savedRecordsById.get(transactionId);

      if (!transactionId || !existingRecord) {
        return null;
      }

      const changedFields = getCryptoChangedFields(record, existingRecord);
      if (changedFields.length === 0) {
        return null;
      }

      const trackedChangedFields = getTrackedCryptoChangedFields(record, existingRecord, changedFields);
      if (trackedChangedFields.length > 0) {
        return null;
      }

      savedRecordsById.set(transactionId, record);
      return toMasterStoreRow(record);
    })
    .filter((row): row is NonNullable<typeof row> => !!row);

  if (autoApprovedExistingRows.length > 0) {
    await upsertMasterCryptoRecords(autoApprovedExistingRows);
  }

  return {
    liveRecords,
    savedRecords: Array.from(savedRecordsById.values()),
    newCount: newMasterRows.length,
    autoApprovedCount: autoApprovedExistingRows.length,
    totalSyncedCount: newMasterRows.length + autoApprovedExistingRows.length,
  };
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

export async function syncNewCryptoTransactionsFromApi() {
  if (savedCryptoSyncPromise) {
    return savedCryptoSyncPromise;
  }

  savedCryptoSyncPromise = (async () => {
    const reconciliation = await reconcileCryptoApiState();
    const preview = buildCryptoExistingChanges(
      reconciliation.liveRecords,
      reconciliation.savedRecords,
      reconciliation.totalSyncedCount
    );

    return {
      syncedCount: reconciliation.totalSyncedCount,
      pendingCount: preview.summary.updatedCount,
      summary: preview.summary,
    } as CryptoSyncSummaryResult;
  })();

  try {
    return await savedCryptoSyncPromise;
  } finally {
    savedCryptoSyncPromise = null;
  }
}

export async function getSavedCryptoTransactionsPage(options: {
  offset: number;
  limit: number;
  includeBatched?: boolean;
  includeHidden?: boolean;
}) {
  await ensureSavedCryptoInitialized();
  const page = await getStoredCryptoDonationRecordsPage({
    offset: options.offset,
    limit: options.limit,
    includeBatched: options.includeBatched,
    includeHidden: options.includeHidden,
  });

  return {
    records: page.rows.map((row) => toRecordFromJoinedRow(row)),
    totalCount: page.totalCount,
  };
}

export async function getCryptoExistingChanges() {
  const reconciliation = await reconcileCryptoApiState();

  return buildCryptoExistingChanges(
    reconciliation.liveRecords,
    reconciliation.savedRecords,
    reconciliation.totalSyncedCount
  );
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

const normalizeBatchDateInput = (value: string) => {
  const trimmedValue = value.trim();
  const match = trimmedValue.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    !Number.isFinite(year) ||
    !Number.isFinite(month) ||
    !Number.isFinite(day) ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return trimmedValue;
};

const normalizeBatchNameKey = (value: string) => value.trim().toLocaleLowerCase();

const getBatchDateKey = (value: string | null | undefined) => {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const toBatchAssignedAtIso = (batchDate: string) => {
  const normalizedBatchDate = normalizeBatchDateInput(batchDate);

  if (!normalizedBatchDate) {
    throw new Error("Batch date is required.");
  }

  const [year, month, day] = normalizedBatchDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0, 0)).toISOString();
};

export async function createCryptoBatch(transactionIds: string[], batchName: string, batchDate: string) {
  await ensureSavedCryptoInitialized();
  const uniqueIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  const normalizedBatchName = batchName.trim();
  const normalizedBatchDate = normalizeBatchDateInput(batchDate);

  if (!normalizedBatchName) {
    throw new Error("Batch name is required.");
  }

  if (!normalizedBatchDate) {
    throw new Error("Batch date is required.");
  }

  if (uniqueIds.length === 0) {
    throw new Error("No valid unbatched transactions selected for batching.");
  }

  const existingBatches = await getStoredCryptoWorkflowBatches();
  const normalizedBatchNameKey = normalizeBatchNameKey(normalizedBatchName);
  const hasDuplicateBatch = existingBatches.some((batch) => {
    const existingBatchName = batch.batch_name?.trim();

    if (!existingBatchName) {
      return false;
    }

    return (
      normalizeBatchNameKey(existingBatchName) === normalizedBatchNameKey &&
      getBatchDateKey(batch.batch_assigned_at) === normalizedBatchDate
    );
  });

  if (hasDuplicateBatch) {
    throw new Error(`A batch named "${normalizedBatchName}" already exists for ${normalizedBatchDate}.`);
  }

  const datePart = normalizedBatchDate.replace(/-/g, "");
  const prefix = `CB-${datePart}-`;
  const latestBatchNumber = await getLatestCryptoBatchNumber(prefix);
  const latestSequence = latestBatchNumber ? Number(latestBatchNumber.slice(prefix.length)) : 0;
  const batchNumber = buildBatchNumber(datePart, Number.isFinite(latestSequence) ? latestSequence + 1 : 1);
  const createdAt = toBatchAssignedAtIso(normalizedBatchDate);

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    batch_transaction_number: batchNumber,
    batch_name: normalizedBatchName,
    batch_assigned_at: createdAt,
  }, {
    query: {
      batch_transaction_number: "is.null",
    },
  });

  await refreshCryptoWorkflowBatchSummaries([batchNumber]);

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

  const existingWorkflowRows = await getStoredCryptoWorkflowDonationsByIds(uniqueIds);
  const impactedBatchNumbers = Array.from(
    new Set(
      existingWorkflowRows
        .map((row) => row.batch_transaction_number?.trim() ?? "")
        .filter((value) => value.length > 0)
    )
  );

  await patchCryptoWorkflowRecordsByIds(uniqueIds, {
    batch_transaction_number: null,
    batch_name: null,
    batch_assigned_at: null,
  }, {
    query: {
      batch_transaction_number: "not.is.null",
    },
  });

  await refreshCryptoWorkflowBatchSummaries(impactedBatchNumbers);

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
  const rows = await getStoredCryptoWorkflowBatches();

  return rows
    .map((row) => ({
      batchNumber: row.batch_transaction_number,
      batchName: row.batch_name,
      createdAt: row.batch_assigned_at ?? row.created_at,
      transactionCount: Number(row.transaction_count ?? 0),
      grossTotal: toNumber(row.gross_total),
      feeTotal: toNumber(row.fee_total),
      payoutTotal: toNumber(row.payout_total),
    }))
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt));
}

export async function getCryptoBatchDetail(batchNumber: string) {
  await ensureSavedCryptoInitialized();
  const normalizedBatchNumber = batchNumber.trim();
  const [rows, batchRows] = await Promise.all([
    getStoredCryptoWorkflowDonations(),
    getStoredCryptoWorkflowBatches(),
  ]);
  const batch = batchRows.find((row) => row.batch_transaction_number === normalizedBatchNumber);
  const batchTransactions = rows.filter(
    (row) => (row.batch_transaction_number?.trim() ?? "") === normalizedBatchNumber
  );

  if (!batch || batchTransactions.length === 0) {
    return null;
  }

  const rowMap = new Map<string, SupabaseCryptoWorkflowDonationRow>();
  rows.forEach((row) => {
    rowMap.set(row.transaction_id, row);
  });

  const transactionIds = batchTransactions.map((row) => row.transaction_id);
  const masterRows = await getMasterRowsByIdsInChunks(transactionIds);
  const masterMap = new Map(masterRows.map((row) => [row.transaction_id, row]));

  const transactions = transactionIds
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
    batchNumber: batch.batch_transaction_number,
    batchName: batch.batch_name,
    createdAt: batch.batch_assigned_at ?? batch.created_at,
    transactionCount: Number(batch.transaction_count ?? transactions.length),
    grossTotal: toNumber(batch.gross_total),
    feeTotal: toNumber(batch.fee_total),
    payoutTotal: toNumber(batch.payout_total),
    transactions: sortById(transactions),
  };
}
