import { NextResponse } from "next/server";
import { toSupabaseMasterRow, NpoRecord } from "@/shared/lib/npo-sync";
import { getStoredMasterNpos, upsertMasterNpos } from "@/shared/lib/supabase-rest";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const storedRows = await getStoredMasterNpos();
    const records = storedRows
      .map((row) => row.raw_record)
      .filter((row): row is NpoRecord => !!row && typeof row === "object");

    if (records.length === 0) {
      return NextResponse.json({
        backfilledCount: 0,
        message: "No saved records available to backfill.",
      });
    }

    const upsertRows = records.map((record) => toSupabaseMasterRow(record));
    await upsertMasterNpos(upsertRows);

    return NextResponse.json({
      backfilledCount: upsertRows.length,
      message: `Backfilled ${upsertRows.length} record(s).`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to backfill saved NPO records.",
      },
      { status: 500 }
    );
  }
}
