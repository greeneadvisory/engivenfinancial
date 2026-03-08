const getSupabaseConfig = () => {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !secretKey) {
    throw new Error(
      "Missing Supabase env vars. Set SUPABASE_SECRET_KEY (or SUPABASE_SERVICE_ROLE_KEY) and either SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL in .env.local."
    );
  }

  return { url, secretKey };
};

const toQueryString = (query?: Record<string, string>) => {
  if (!query) {
    return "";
  }

  const params = new URLSearchParams(query);
  const value = params.toString();
  return value ? `?${value}` : "";
};

export async function supabaseRestRequest<T>(
  path: string,
  options?: {
    method?: "GET" | "POST" | "PATCH" | "DELETE";
    query?: Record<string, string>;
    body?: unknown;
    prefer?: string;
  }
): Promise<T> {
  const { url, secretKey } = getSupabaseConfig();

  const response = await fetch(`${url}/rest/v1/${path}${toQueryString(options?.query)}`, {
    method: options?.method ?? "GET",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      ...(options?.prefer ? { Prefer: options.prefer } : {}),
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = payload?.message || payload?.error || `Supabase request failed (${response.status}).`;
    throw new Error(message);
  }

  return payload as T;
}

export type SupabaseMasterNpoRow = {
  npo_external_id: string;
  raw_record: Record<string, string | number | boolean | null> | null;
  source_id: string | null;
  created_at_source: string | null;
  updated_at_source: string | null;
  npo_name: string | null;
  ein: string | null;
  affiliate: string | null;
  affiliate_name: string | null;
  api_partner: string | null;
  api_partner_name: string | null;
  instant_partner: string | null;
  instant_partner_name: string | null;
  website_url: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip_code: string | null;
  country_of_origin: string | null;
  notification_email: string | null;
  verification_status: string | null;
  gemini_bank_connection_status: string | null;
  fiscal_sponsor: string | null;
};

export type SupabaseMasterCryptoRow = {
  transaction_id: string;
  raw_record: Record<string, string | number | boolean | null> | null;
  transaction_confirmed_timestamp: string | null;
  created_at_source: string | null;
  updated_at_source: string | null;
  created_at: string;
  updated_at: string;
};

export type SupabaseCryptoWorkflowDonationRow = {
  transaction_id: string;
  batch_transaction_number: string | null;
  batch_name: string | null;
  batch_assigned_at: string | null;
  accepted_at: string | null;
  hidden_at: string | null;
  created_at: string;
  updated_at: string;
};

export type SupabaseUiPreferenceRow = {
  preference_key: string;
  preference_value: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
};

const MASTER_NPO_SELECT_FIELDS = [
  "npo_external_id",
  "raw_record",
  "source_id",
  "created_at_source",
  "updated_at_source",
  "npo_name",
  "ein",
  "affiliate",
  "affiliate_name",
  "api_partner",
  "api_partner_name",
  "instant_partner",
  "instant_partner_name",
  "website_url",
  "address",
  "city",
  "state",
  "zip_code",
  "country_of_origin",
  "notification_email",
  "verification_status",
  "gemini_bank_connection_status",
  "fiscal_sponsor",
].join(",");

const MASTER_CRYPTO_SELECT_FIELDS = [
  "transaction_id",
  "raw_record",
  "transaction_confirmed_timestamp",
  "created_at_source",
  "updated_at_source",
  "created_at",
  "updated_at",
].join(",");

const CRYPTO_WORKFLOW_DONATION_SELECT_FIELDS = [
  "transaction_id",
  "batch_transaction_number",
  "batch_name",
  "batch_assigned_at",
  "accepted_at",
  "hidden_at",
  "created_at",
  "updated_at",
].join(",");

const UI_PREFERENCE_SELECT_FIELDS = ["preference_key", "preference_value", "created_at", "updated_at"].join(",");

const getTotalCountFromContentRange = (contentRangeHeader: string | null, fallbackCount: number) => {
  if (!contentRangeHeader) {
    return fallbackCount;
  }

  const [, totalPart] = contentRangeHeader.split("/");
  const parsed = Number(totalPart);
  return Number.isFinite(parsed) ? parsed : fallbackCount;
};

export async function getStoredMasterNposPage(options: { offset: number; limit: number }) {
  const { url, secretKey } = getSupabaseConfig();
  const params = new URLSearchParams({
    select: MASTER_NPO_SELECT_FIELDS,
    order: "npo_external_id.asc",
    limit: String(options.limit),
    offset: String(options.offset),
  });

  const response = await fetch(`${url}/rest/v1/master_npo_records?${params.toString()}`, {
    method: "GET",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      Prefer: "count=exact",
    },
    cache: "no-store",
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : [];

  if (!response.ok) {
    const message = payload?.message || payload?.error || `Supabase request failed (${response.status}).`;
    throw new Error(message);
  }

  const rows = Array.isArray(payload) ? (payload as SupabaseMasterNpoRow[]) : [];
  const totalCount = getTotalCountFromContentRange(response.headers.get("content-range"), rows.length);

  return {
    rows,
    totalCount,
  };
}

export async function getStoredMasterNpos() {
  const pageSize = 1000;
  let offset = 0;
  const allRows: SupabaseMasterNpoRow[] = [];

  while (true) {
    const page = await supabaseRestRequest<SupabaseMasterNpoRow[]>("master_npo_records", {
      query: {
        select: MASTER_NPO_SELECT_FIELDS,
        order: "npo_external_id.asc",
        limit: String(pageSize),
        offset: String(offset),
      },
    });

    if (!Array.isArray(page) || page.length === 0) {
      break;
    }

    allRows.push(...page);

    if (page.length < pageSize) {
      break;
    }

    offset += pageSize;
  }

  return allRows;
}

export async function upsertMasterNpos(rows: Record<string, unknown>[]) {
  return supabaseRestRequest<unknown>("master_npo_records", {
    method: "POST",
    query: {
      on_conflict: "npo_external_id",
    },
    body: rows,
    prefer: "resolution=merge-duplicates,return=representation",
  });
}

export async function insertChangeLog(rows: Record<string, unknown>[]) {
  return supabaseRestRequest<unknown>("master_npo_change_log", {
    method: "POST",
    body: rows,
    prefer: "return=minimal",
  });
}

export async function getStoredMasterCryptoRecords() {
  const pageSize = 1000;
  let offset = 0;
  const allRows: SupabaseMasterCryptoRow[] = [];

  while (true) {
    const page = await supabaseRestRequest<SupabaseMasterCryptoRow[]>("master_crypto_records", {
      query: {
        select: MASTER_CRYPTO_SELECT_FIELDS,
        order: "transaction_id.asc",
        limit: String(pageSize),
        offset: String(offset),
      },
    });

    if (!Array.isArray(page) || page.length === 0) {
      break;
    }

    allRows.push(...page);

    if (page.length < pageSize) {
      break;
    }

    offset += pageSize;
  }

  return allRows;
}

export async function getStoredMasterCryptoRecordsPage(options: {
  offset: number;
  limit: number;
}) {
  const { url, secretKey } = getSupabaseConfig();
  const params = new URLSearchParams({
    select: MASTER_CRYPTO_SELECT_FIELDS,
    order: "transaction_confirmed_timestamp.desc.nullslast,created_at_source.desc.nullslast,transaction_id.asc",
    limit: String(options.limit),
    offset: String(options.offset),
  });

  const response = await fetch(`${url}/rest/v1/master_crypto_records?${params.toString()}`, {
    method: "GET",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      Prefer: "count=exact",
    },
    cache: "no-store",
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : [];

  if (!response.ok) {
    const message = payload?.message || payload?.error || `Supabase request failed (${response.status}).`;
    throw new Error(message);
  }

  const rows = Array.isArray(payload) ? (payload as SupabaseMasterCryptoRow[]) : [];
  const totalCount = getTotalCountFromContentRange(response.headers.get("content-range"), rows.length);

  return {
    rows,
    totalCount,
  };
}

export async function getStoredCryptoWorkflowDonations() {
  const pageSize = 1000;
  let offset = 0;
  const allRows: SupabaseCryptoWorkflowDonationRow[] = [];

  while (true) {
    const page = await supabaseRestRequest<SupabaseCryptoWorkflowDonationRow[]>("crypto_workflow_donations", {
      query: {
        select: CRYPTO_WORKFLOW_DONATION_SELECT_FIELDS,
        order: "transaction_id.asc",
        limit: String(pageSize),
        offset: String(offset),
      },
    });

    if (!Array.isArray(page) || page.length === 0) {
      break;
    }

    allRows.push(...page);

    if (page.length < pageSize) {
      break;
    }

    offset += pageSize;
  }

  return allRows;
}

export async function getStoredCryptoWorkflowDonationsPage(options: {
  offset: number;
  limit: number;
  includeBatched?: boolean;
  includeHidden?: boolean;
}) {
  const { url, secretKey } = getSupabaseConfig();
  const params = new URLSearchParams({
    select: CRYPTO_WORKFLOW_DONATION_SELECT_FIELDS,
    order: "transaction_id.asc",
    limit: String(options.limit),
    offset: String(options.offset),
  });

  if (!options.includeBatched) {
    params.set("batch_transaction_number", "is.null");
  }

  if (!options.includeHidden) {
    params.set("hidden_at", "is.null");
  }

  const response = await fetch(`${url}/rest/v1/crypto_workflow_donations?${params.toString()}`, {
    method: "GET",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      Prefer: "count=exact",
    },
    cache: "no-store",
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : [];

  if (!response.ok) {
    const message = payload?.message || payload?.error || `Supabase request failed (${response.status}).`;
    throw new Error(message);
  }

  const rows = Array.isArray(payload) ? (payload as SupabaseCryptoWorkflowDonationRow[]) : [];
  const totalCount = getTotalCountFromContentRange(response.headers.get("content-range"), rows.length);

  return {
    rows,
    totalCount,
  };
}

const buildTransactionIdInFilter = (transactionIds: string[]) => {
  const normalizedIds = Array.from(new Set(transactionIds.map((id) => id.trim()).filter((id) => id.length > 0)));

  if (normalizedIds.length === 0) {
    return null;
  }

  return `in.(${normalizedIds.map((id) => `"${id.replace(/"/g, '\\"')}"`).join(",")})`;
};

export async function getStoredCryptoWorkflowRecordsByIds(transactionIds: string[]) {
  return getStoredCryptoWorkflowDonationsByIds(transactionIds);
}

export async function getStoredMasterCryptoRecordsByIds(transactionIds: string[]) {
  const idFilter = buildTransactionIdInFilter(transactionIds);

  if (!idFilter) {
    return [] as SupabaseMasterCryptoRow[];
  }

  return supabaseRestRequest<SupabaseMasterCryptoRow[]>("master_crypto_records", {
    query: {
      select: MASTER_CRYPTO_SELECT_FIELDS,
      transaction_id: idFilter,
    },
  });
}

export async function getStoredCryptoWorkflowDonationsByIds(transactionIds: string[]) {
  const idFilter = buildTransactionIdInFilter(transactionIds);

  if (!idFilter) {
    return [] as SupabaseCryptoWorkflowDonationRow[];
  }

  return supabaseRestRequest<SupabaseCryptoWorkflowDonationRow[]>("crypto_workflow_donations", {
    query: {
      select: CRYPTO_WORKFLOW_DONATION_SELECT_FIELDS,
      transaction_id: idFilter,
    },
  });
}

export async function patchCryptoWorkflowRecordsByIds(
  transactionIds: string[],
  patch: Record<string, unknown>,
  options?: {
    query?: Record<string, string>;
    prefer?: string;
  }
) {
  const idFilter = buildTransactionIdInFilter(transactionIds);

  if (!idFilter) {
    return [];
  }

  return supabaseRestRequest<SupabaseCryptoWorkflowDonationRow[]>("crypto_workflow_donations", {
    method: "PATCH",
    query: {
      transaction_id: idFilter,
      ...(options?.query ?? {}),
    },
    body: patch,
    prefer: options?.prefer ?? "return=minimal",
  });
}

export async function getLatestCryptoBatchNumber(prefix: string) {
  const rows = await supabaseRestRequest<Array<Pick<SupabaseCryptoWorkflowDonationRow, "batch_transaction_number">>>(
    "crypto_workflow_donations",
    {
      query: {
        select: "batch_transaction_number",
        batch_transaction_number: `like.${prefix}*`,
        order: "batch_transaction_number.desc",
        limit: "1",
      },
    }
  );

  return rows[0]?.batch_transaction_number ?? null;
}

export async function getUiPreference<T>(preferenceKey: string) {
  const rows = await supabaseRestRequest<SupabaseUiPreferenceRow[]>("ui_preferences", {
    query: {
      select: UI_PREFERENCE_SELECT_FIELDS,
      preference_key: `eq.${preferenceKey}`,
      limit: "1",
    },
  });

  return (rows[0]?.preference_value ?? null) as T | null;
}

export async function upsertUiPreference(preferenceKey: string, preferenceValue: unknown) {
  return supabaseRestRequest<unknown>("ui_preferences", {
    method: "POST",
    query: {
      on_conflict: "preference_key",
    },
    body: [
      {
        preference_key: preferenceKey,
        preference_value: preferenceValue,
      },
    ],
    prefer: "resolution=merge-duplicates,return=minimal",
  });
}

export async function upsertMasterCryptoRecords(rows: Record<string, unknown>[]) {
  if (rows.length === 0) {
    return [];
  }

  return supabaseRestRequest<unknown>("master_crypto_records", {
    method: "POST",
    query: {
      on_conflict: "transaction_id",
    },
    body: rows,
    prefer: "resolution=merge-duplicates,return=representation",
  });
}

export async function upsertCryptoWorkflowDonations(rows: Record<string, unknown>[]) {
  if (rows.length === 0) {
    return [];
  }

  return supabaseRestRequest<unknown>("crypto_workflow_donations", {
    method: "POST",
    query: {
      on_conflict: "transaction_id",
    },
    body: rows,
    prefer: "resolution=merge-duplicates,return=representation",
  });
}
