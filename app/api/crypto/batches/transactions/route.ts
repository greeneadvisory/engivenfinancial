import { NextRequest, NextResponse } from "next/server";
import {
  getSavedCryptoTransactionsPage,
  syncNewCryptoTransactionsFromApi,
} from "@/shared/lib/crypto-workflow-store";
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

    const syncResult = syncWithApi ? await syncNewCryptoTransactionsFromApi() : null;
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
