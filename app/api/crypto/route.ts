import { NextResponse } from "next/server";
import { fetchEngivenCryptoTransactions } from "@/shared/lib/engiven-crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const records = await fetchEngivenCryptoTransactions();

    return NextResponse.json({ records });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected error while loading Crypto report.",
      },
      { status: 500 }
    );
  }
}
