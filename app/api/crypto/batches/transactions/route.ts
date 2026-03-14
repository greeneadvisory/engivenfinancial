import { NextRequest, NextResponse } from "next/server";
import {
  getSavedCryptoTransactionsPage,
  syncNewCryptoTransactionsFromApi,
} from "@/shared/lib/crypto-workflow-store";
import { isEngivenAdminApiConfigured } from "@/shared/lib/engiven-crypto";
import { parsePaginationParams } from "@/shared/lib/pagination";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const includeBatched = request.nextUrl.searchParams.get("showBatched") !== "0";
    const includeHidden = request.nextUrl.searchParams.get("showHidden") === "1";
    const syncWithApi = request.nextUrl.searchParams.get("sync") === "1";
    const { offset, page, perPage } = parsePaginationParams({
      pageParam: request.nextUrl.searchParams.get("page"),
      perPageParam: request.nextUrl.searchParams.get("perPage"),
      maxPerPage: 50000,
    });

    let syncResult: Awaited<ReturnType<typeof syncNewCryptoTransactionsFromApi>> | null = null;
    let syncWarning: string | null = null;

    if (syncWithApi) {
      if (!isEngivenAdminApiConfigured()) {
        syncWarning = "Live crypto sync skipped because ENGIVEN_ADMIN_API_KEY is not configured on this deployment.";
      } else {
        try {
          syncResult = await syncNewCryptoTransactionsFromApi();
        } catch (error) {
          syncWarning =
            error instanceof Error ? error.message : "Live crypto sync failed; showing saved records instead.";
        }
      }
    }

    const result = await getSavedCryptoTransactionsPage({
      offset,
      limit: perPage,
      includeBatched,
      includeHidden,
    });

    return NextResponse.json({
      count: result.records.length,
      totalCount: result.totalCount,
      page,
      perPage,
      syncedCount: syncResult?.syncedCount ?? 0,
      pendingCount: syncResult?.pendingCount ?? 0,
      pendingSummary: syncResult?.summary ?? null,
      syncWarning,
      records: result.records,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load crypto transactions for batching.",
      },
      { status: 500 }
    );
  }
}
