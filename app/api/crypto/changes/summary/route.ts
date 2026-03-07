import { NextResponse } from "next/server";
import { getCryptoExistingChanges } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const preview = await getCryptoExistingChanges();

    return NextResponse.json({
      pendingCount: preview.summary.updatedCount,
      summary: preview.summary,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to build Crypto changes summary.",
      },
      { status: 500 }
    );
  }
}
