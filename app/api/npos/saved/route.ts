import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getStoredMasterNpos, getStoredMasterNposPage } from "@/shared/lib/supabase-rest";
import { DEFAULT_PAGE_SIZE, parsePaginationParams } from "@/shared/lib/pagination";

export const dynamic = "force-dynamic";

const SAVED_RECORDS_CACHE_TTL_MS = 60000;

type SavedRecordsPayload = {
  count: number;
  records: Record<string, string | number | boolean | null>[];
  cached: boolean;
  cachedAt: string;
};

let savedRecordsCache: {
  value: SavedRecordsPayload;
  expiresAt: number;
} | null = null;

const savedRecordsPageCache = new Map<
  string,
  {
    value: SavedRecordsPayload & { totalCount: number; page: number; perPage: number };
    expiresAt: number;
  }
>();

const coerceRecordValue = (value: unknown): string | number | boolean | null => {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  return null;
};

const mapMasterNpoRowToRecord = (row: any): Record<string, string | number | boolean | null> => {
  const rawRecord = row?.raw_record;
  const recordFromRaw =
    rawRecord && typeof rawRecord === "object"
      ? (rawRecord as Record<string, string | number | boolean | null>)
      : null;

  return {
    id: coerceRecordValue(recordFromRaw?.id ?? row?.source_id ?? row?.npo_external_id),
    createdAt: coerceRecordValue(recordFromRaw?.createdAt ?? row?.created_at_source),
    updatedAt: coerceRecordValue(recordFromRaw?.updatedAt ?? row?.updated_at_source),
    npoName: coerceRecordValue(recordFromRaw?.npoName ?? row?.npo_name),
    EIN: coerceRecordValue(recordFromRaw?.EIN ?? row?.ein),
    affiliate: coerceRecordValue(recordFromRaw?.affiliate ?? row?.affiliate),
    affiliateName: coerceRecordValue(recordFromRaw?.affiliateName ?? row?.affiliate_name),
    apiPartner: coerceRecordValue(recordFromRaw?.apiPartner ?? row?.api_partner),
    apiPartnerName: coerceRecordValue(recordFromRaw?.apiPartnerName ?? row?.api_partner_name),
    instantPartner: coerceRecordValue(recordFromRaw?.instantPartner ?? row?.instant_partner),
    instantPartnerName: coerceRecordValue(recordFromRaw?.instantPartnerName ?? row?.instant_partner_name),
    websiteUrl: coerceRecordValue(recordFromRaw?.websiteUrl ?? row?.website_url),
    address: coerceRecordValue(recordFromRaw?.address ?? row?.address),
    city: coerceRecordValue(recordFromRaw?.city ?? row?.city),
    state: coerceRecordValue(recordFromRaw?.state ?? row?.state),
    zipCode: coerceRecordValue(recordFromRaw?.zipCode ?? row?.zip_code),
    countryOfOrigin: coerceRecordValue(recordFromRaw?.countryOfOrigin ?? row?.country_of_origin),
    notificationEmail: coerceRecordValue(recordFromRaw?.notificationEmail ?? row?.notification_email),
    verificationStatus: coerceRecordValue(recordFromRaw?.verificationStatus ?? row?.verification_status),
    geminiBankConnectionStatus: coerceRecordValue(
      recordFromRaw?.geminiBankConnectionStatus ?? row?.gemini_bank_connection_status
    ),
    fiscalSponsor: coerceRecordValue(recordFromRaw?.fiscalSponsor ?? row?.fiscal_sponsor),
  };
};

export async function GET(request: NextRequest) {
  try {
    const allMode = request.nextUrl.searchParams.get("all") === "1";
    const forceRefresh = request.nextUrl.searchParams.get("force") === "1";
    const { page, perPage, offset } = parsePaginationParams({
      pageParam: request.nextUrl.searchParams.get("page"),
      perPageParam: request.nextUrl.searchParams.get("perPage"),
      defaultPerPage: DEFAULT_PAGE_SIZE,
      maxPerPage: 5000,
    });
    const now = Date.now();

    if (forceRefresh) {
      savedRecordsCache = null;
      savedRecordsPageCache.clear();
    }

    if (!forceRefresh && allMode && savedRecordsCache && savedRecordsCache.expiresAt > now) {
      return NextResponse.json(savedRecordsCache.value);
    }

    if (!allMode) {
      const cacheKey = `${page}:${perPage}`;
      const cachedPage = savedRecordsPageCache.get(cacheKey);

      if (!forceRefresh && cachedPage && cachedPage.expiresAt > now) {
        return NextResponse.json(cachedPage.value);
      }

      const pagedResult = await getStoredMasterNposPage({ offset, limit: perPage });
      const pageRecords = pagedResult.rows
        .map((row) => mapMasterNpoRowToRecord(row))
        .filter((row): row is Record<string, string | number | boolean | null> =>
          !!row && typeof row === "object"
        );

      const pagePayload = {
        count: pageRecords.length,
        totalCount: pagedResult.totalCount,
        page,
        perPage,
        records: pageRecords,
        cached: false,
        cachedAt: new Date().toISOString(),
      };

      savedRecordsPageCache.set(cacheKey, {
        value: {
          ...pagePayload,
          cached: true,
        },
        expiresAt: now + SAVED_RECORDS_CACHE_TTL_MS,
      });

      return NextResponse.json(pagePayload);
    }

    const rows = await getStoredMasterNpos();
    const records = rows
      .map((row) => mapMasterNpoRowToRecord(row))
      .filter((row): row is Record<string, string | number | boolean | null> =>
        !!row && typeof row === "object"
      );

    const payload: SavedRecordsPayload = {
      count: records.length,
      records,
      cached: false,
      cachedAt: new Date().toISOString(),
    };

    savedRecordsCache = {
      value: {
        ...payload,
        cached: true,
      },
      expiresAt: now + SAVED_RECORDS_CACHE_TTL_MS,
    };

    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load saved Supabase NPO records.",
      },
      { status: 500 }
    );
  }
}
