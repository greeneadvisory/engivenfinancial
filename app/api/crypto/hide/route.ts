import { NextRequest, NextResponse } from "next/server";
import { hideCryptoTransactions } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type HideBody = {
  transactionIds?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as HideBody;
    const transactionIds = Array.isArray(body?.transactionIds) ? body.transactionIds : [];

    const result = await hideCryptoTransactions(transactionIds);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to hide crypto transactions.",
      },
      { status: 500 }
    );
  }
}
