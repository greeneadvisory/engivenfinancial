import { NextRequest, NextResponse } from "next/server";
import { acceptCryptoTransactions } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type AcceptBody = {
  transactionIds?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AcceptBody;
    const transactionIds = Array.isArray(body?.transactionIds) ? body.transactionIds : [];

    const result = await acceptCryptoTransactions(transactionIds);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to accept crypto transactions.",
      },
      { status: 500 }
    );
  }
}
