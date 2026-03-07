export type NpoValue = string | number | boolean | null;
export type NpoRecord = Record<string, NpoValue>;

export const NPO_FIELDS = [
  "id",
  "createdAt",
  "updatedAt",
  "npoName",
  "EIN",
  "affiliate",
  "affiliateName",
  "apiPartner",
  "apiPartnerName",
  "instantPartner",
  "instantPartnerName",
  "websiteUrl",
  "address",
  "city",
  "state",
  "zipCode",
  "countryOfOrigin",
  "notificationEmail",
  "verificationStatus",
  "geminiBankConnectionStatus",
  "fiscalSponsor",
] as const;

export type NpoField = (typeof NPO_FIELDS)[number];

export type NpoChangeType = "insert" | "update";

export type NpoPreviewChange = {
  changeId: string;
  npoExternalId: string;
  changeType: NpoChangeType;
  changedFields: NpoField[];
  incoming: NpoRecord;
  existing: NpoRecord | null;
};

export const formatCellValue = (value: NpoValue) => {
  if (value === null || value === undefined) {
    return "";
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  return String(value);
};

const recordExternalId = (record: NpoRecord) => formatCellValue(record.id).trim();

export const getExternalId = (record: NpoRecord) => recordExternalId(record);

export const mapRecordsByExternalId = (records: NpoRecord[]) => {
  const map = new Map<string, NpoRecord>();

  records.forEach((record) => {
    const externalId = recordExternalId(record);
    if (externalId) {
      map.set(externalId, record);
    }
  });

  return map;
};

export const getChangedFields = (incoming: NpoRecord, existing: NpoRecord) => {
  return NPO_FIELDS.filter((field) => {
    const incomingValue = formatCellValue(incoming[field]);
    const existingValue = formatCellValue(existing[field]);
    return incomingValue !== existingValue;
  });
};

export const buildPreviewChanges = (incoming: NpoRecord[], existing: NpoRecord[]) => {
  const existingById = mapRecordsByExternalId(existing);
  const seenIds = new Set<string>();

  const changes: NpoPreviewChange[] = [];
  let unchangedCount = 0;

  incoming.forEach((record) => {
    const externalId = getExternalId(record);
    if (!externalId || seenIds.has(externalId)) {
      return;
    }

    seenIds.add(externalId);
    const existingRecord = existingById.get(externalId);

    if (!existingRecord) {
      changes.push({
        changeId: externalId,
        npoExternalId: externalId,
        changeType: "insert",
        changedFields: [...NPO_FIELDS],
        incoming: record,
        existing: null,
      });
      return;
    }

    const changedFields = getChangedFields(record, existingRecord);
    if (changedFields.length === 0) {
      unchangedCount += 1;
      return;
    }

    changes.push({
      changeId: externalId,
      npoExternalId: externalId,
      changeType: "update",
      changedFields,
      incoming: record,
      existing: existingRecord,
    });
  });

  const newCount = changes.filter((change) => change.changeType === "insert").length;
  const updatedCount = changes.filter((change) => change.changeType === "update").length;

  return {
    changes,
    summary: {
      incomingCount: incoming.length,
      existingCount: existing.length,
      newCount,
      updatedCount,
      unchangedCount,
    },
  };
};

export const toSupabaseMasterRow = (record: NpoRecord) => ({
  source_id: formatCellValue(record.id),
  npo_external_id: formatCellValue(record.id),
  created_at_source: formatCellValue(record.createdAt) || null,
  updated_at_source: formatCellValue(record.updatedAt) || null,
  npo_name: formatCellValue(record.npoName),
  ein: formatCellValue(record.EIN),
  affiliate: formatCellValue(record.affiliate),
  affiliate_name: formatCellValue(record.affiliateName),
  api_partner: formatCellValue(record.apiPartner),
  api_partner_name: formatCellValue(record.apiPartnerName),
  instant_partner: formatCellValue(record.instantPartner),
  instant_partner_name: formatCellValue(record.instantPartnerName),
  website_url: formatCellValue(record.websiteUrl),
  address: formatCellValue(record.address),
  verification_status: formatCellValue(record.verificationStatus),
  city: formatCellValue(record.city),
  state: formatCellValue(record.state),
  zip_code: formatCellValue(record.zipCode),
  country_of_origin: formatCellValue(record.countryOfOrigin),
  notification_email: formatCellValue(record.notificationEmail),
  gemini_bank_connection_status: formatCellValue(record.geminiBankConnectionStatus),
  fiscal_sponsor: formatCellValue(record.fiscalSponsor),
  raw_record: record,
  last_seen_at: new Date().toISOString(),
  last_applied_at: new Date().toISOString(),
});
