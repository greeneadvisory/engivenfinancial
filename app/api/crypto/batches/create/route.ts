import { NextRequest, NextResponse } from "next/server";
import { createCryptoBatch } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type CreateBatchBody = {
  transactionIds?: string[];
  batchName?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateBatchBody;
    const transactionIds = Array.isArray(body?.transactionIds) ? body.transactionIds : [];
    const batchName = typeof body?.batchName === "string" ? body.batchName : "";

    const result = await createCryptoBatch(transactionIds, batchName);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create crypto batch.",
      },
      { status: 500 }
    );
  }
}
