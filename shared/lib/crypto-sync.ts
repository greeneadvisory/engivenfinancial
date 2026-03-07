import { CryptoRecord, CryptoValue } from "@/shared/lib/engiven-crypto";

export const CRYPTO_FIELDS = [
  "id",
  "createdAt",
  "updatedAt",
  "npo",
  "npoName",
  "EIN",
  "guideStarNPO",
  "guideStarName",
  "guideStarEIN",
  "apiPartner",
  "apiPartnerName",
  "toAddress",
  "destinationTag",
  "donorName",
  "donorPhone",
  "donorAddress1",
  "donorAddress2",
  "donorCity",
  "donorState",
  "donorZipCode",
  "donorCountry",
  "donorMemo",
  "notes",
  "transactionHash",
  "transactionPromisedTimeStamp",
  "transactionConfirmedTimeStamp",
  "transactionExpiredTimeStamp",
  "transactionStatus",
  "pledgedAmount",
  "amount",
  "currency",
  "currencyName",
  "usdValueAtConfirmation",
  "usdValueForNpo",
  "statusFromAdmin",
  "achDateEntered",
  "fiscalSponsor",
  "statusFromFiscalSponsor",
  "statusNoteFiscalSponsor",
  "achDateEnteredFiscalSponsor",
  "geminiFee",
  "anonymousToBeneficiary",
  "batchTransactionNumber",
] as const;

export type CryptoField = (typeof CRYPTO_FIELDS)[number];

export type CryptoPreviewChange = {
  changeId: string;
  transactionId: string;
  changedFields: CryptoField[];
  incoming: CryptoRecord;
  existing: CryptoRecord;
};

export const formatCryptoValue = (value: CryptoValue) => {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  return String(value);
};

export const getCryptoExternalId = (record: CryptoRecord) => formatCryptoValue(record.id).trim();

export const getCryptoChangedFields = (incoming: CryptoRecord, existing: CryptoRecord) => {
  return CRYPTO_FIELDS.filter((field) => {
    if (field === "batchTransactionNumber") {
      return false;
    }

    const incomingValue = formatCryptoValue(incoming[field]);
    const existingValue = formatCryptoValue(existing[field]);
    return incomingValue !== existingValue;
  });
};

export const mapCryptoById = (records: CryptoRecord[]) => {
  const map = new Map<string, CryptoRecord>();

  records.forEach((record) => {
    const id = getCryptoExternalId(record);
    if (id) {
      map.set(id, record);
    }
  });

  return map;
};

export const buildCryptoExistingChanges = (
  incomingRecords: CryptoRecord[],
  savedRecords: CryptoRecord[],
  newAutoApprovedCount = 0
) => {
  const incomingById = mapCryptoById(incomingRecords);
  const savedById = mapCryptoById(savedRecords);

  const changes: CryptoPreviewChange[] = [];
  let unchangedCount = 0;

  savedById.forEach((existing, transactionId) => {
    const incoming = incomingById.get(transactionId);

    if (!incoming) {
      unchangedCount += 1;
      return;
    }

    const changedFields = getCryptoChangedFields(incoming, existing);

    if (changedFields.length === 0) {
      unchangedCount += 1;
      return;
    }

    changes.push({
      changeId: transactionId,
      transactionId,
      changedFields,
      existing,
      incoming,
    });
  });

  const newIgnoredCount = incomingRecords.filter((record) => !savedById.has(getCryptoExternalId(record))).length;

  return {
    changes,
    summary: {
      incomingCount: incomingRecords.length,
      savedCount: savedRecords.length,
      updatedCount: changes.length,
      unchangedCount,
      newAutoApprovedCount,
      newIgnoredCount,
    },
  };
};
