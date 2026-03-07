import { NextResponse } from "next/server";
import { getCryptoExistingChanges } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const preview = await getCryptoExistingChanges();

    return NextResponse.json({
      summary: preview.summary,
      changes: preview.changes,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to preview Crypto changes.",
      },
      { status: 500 }
    );
  }
}
