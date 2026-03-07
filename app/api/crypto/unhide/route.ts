import { NextRequest, NextResponse } from "next/server";
import { unhideCryptoTransactions } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type UnhideBody = {
  transactionIds?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as UnhideBody;
    const transactionIds = Array.isArray(body?.transactionIds) ? body.transactionIds : [];

    const result = await unhideCryptoTransactions(transactionIds);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to unhide crypto transactions.",
      },
      { status: 500 }
    );
  }
}
