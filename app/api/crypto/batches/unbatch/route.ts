import { NextRequest, NextResponse } from "next/server";
import { unbatchCryptoTransactions } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type UnbatchBody = {
  transactionIds?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as UnbatchBody;
    const transactionIds = Array.isArray(body?.transactionIds) ? body.transactionIds : [];

    const result = await unbatchCryptoTransactions(transactionIds);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to unbatch crypto transactions.",
      },
      { status: 500 }
    );
  }
}
