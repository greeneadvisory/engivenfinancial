import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getSavedCryptoTransactions } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

const SAVED_CRYPTO_CACHE_TTL_MS = 60000;

type SavedCryptoPayload = {
  count: number;
  records: Record<string, string | number | boolean | null>[];
  cached: boolean;
  cachedAt: string;
};

let savedCryptoCache: {
  value: SavedCryptoPayload;
  expiresAt: number;
} | null = null;

export async function GET(request: NextRequest) {
  try {
    const forceRefresh = request.nextUrl.searchParams.get("force") === "1";
    const now = Date.now();

    if (forceRefresh) {
      savedCryptoCache = null;
    }

    if (!forceRefresh && savedCryptoCache && savedCryptoCache.expiresAt > now) {
      return NextResponse.json(savedCryptoCache.value);
    }

    const records = await getSavedCryptoTransactions();

    const payload: SavedCryptoPayload = {
      count: records.length,
      records,
      cached: false,
      cachedAt: new Date().toISOString(),
    };

    savedCryptoCache = {
      value: {
        ...payload,
        cached: true,
      },
      expiresAt: now + SAVED_CRYPTO_CACHE_TTL_MS,
    };

    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load saved Crypto records.",
      },
      { status: 500 }
    );
  }
}
