import { NextResponse } from "next/server";
import { listCryptoBatches } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const batches = await listCryptoBatches();

    return NextResponse.json({
      count: batches.length,
      batches,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load crypto batches.",
      },
      { status: 500 }
    );
  }
}
