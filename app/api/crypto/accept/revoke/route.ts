import { NextRequest, NextResponse } from "next/server";
import { revokeCryptoTransactions } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type RevokeBody = {
  transactionIds?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RevokeBody;
    const transactionIds = Array.isArray(body?.transactionIds) ? body.transactionIds : [];

    const result = await revokeCryptoTransactions(transactionIds);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to revoke crypto transactions.",
      },
      { status: 500 }
    );
  }
}
