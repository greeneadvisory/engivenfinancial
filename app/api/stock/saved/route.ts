import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { fetchEngivenStockTransactions } from "@/shared/lib/engiven-stock";

export const dynamic = "force-dynamic";

const SAVED_STOCK_CACHE_TTL_MS = 60000;

type SavedStockPayload = {
  count: number;
  records: Record<string, string | number | boolean | null>[];
  cached: boolean;
  cachedAt: string;
};

let savedStockCache: {
  value: SavedStockPayload;
  expiresAt: number;
} | null = null;

export async function GET(request: NextRequest) {
  try {
    const forceRefresh = request.nextUrl.searchParams.get("force") === "1";
    const now = Date.now();

    if (forceRefresh) {
      savedStockCache = null;
    }

    if (!forceRefresh && savedStockCache && savedStockCache.expiresAt > now) {
      return NextResponse.json(savedStockCache.value);
    }

    const records = await fetchEngivenStockTransactions();

    const payload: SavedStockPayload = {
      count: records.length,
      records,
      cached: false,
      cachedAt: new Date().toISOString(),
    };

    savedStockCache = {
      value: {
        ...payload,
        cached: true,
      },
      expiresAt: now + SAVED_STOCK_CACHE_TTL_MS,
    };

    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load saved Stock records.",
      },
      { status: 500 }
    );
  }
}
