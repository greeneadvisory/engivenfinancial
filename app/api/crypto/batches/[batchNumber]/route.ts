import { NextRequest, NextResponse } from "next/server";
import { getCryptoBatchDetail } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ batchNumber: string }> }
) {
  try {
    const { batchNumber } = await context.params;
    const detail = await getCryptoBatchDetail(batchNumber);

    if (!detail) {
      return NextResponse.json({ error: "Batch not found." }, { status: 404 });
    }

    return NextResponse.json(detail);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load crypto batch detail.",
      },
      { status: 500 }
    );
  }
}
