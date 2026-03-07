import { NextRequest, NextResponse } from "next/server";
import {
  getNpoPreviewResult,
  invalidateNpoPreviewCache,
  toChangeLogRows,
  toMasterUpsertRows,
} from "@/shared/lib/npo-preview-service";
import { insertChangeLog, upsertMasterNpos } from "@/shared/lib/supabase-rest";

export const dynamic = "force-dynamic";

type ApplyBody = {
  changeIds?: string[];
  applyAll?: boolean;
  appliedBy?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ApplyBody;
    const preview = await getNpoPreviewResult();

    const requestedCount = body.applyAll
      ? preview.changes.length
      : Array.isArray(body.changeIds)
      ? body.changeIds.length
      : 0;

    const selectedChanges = body.applyAll
      ? preview.changes
      : preview.changes.filter((change) =>
          Array.isArray(body.changeIds) ? body.changeIds.includes(change.changeId) : false
        );

    if (selectedChanges.length === 0) {
      return NextResponse.json(
        { error: "No changes selected to apply." },
        { status: 400 }
      );
    }

    await upsertMasterNpos(toMasterUpsertRows(selectedChanges));
    await insertChangeLog(toChangeLogRows(selectedChanges, body.appliedBy));
    invalidateNpoPreviewCache();

    return NextResponse.json({
      requestedCount,
      appliedCount: selectedChanges.length,
      mode: body.applyAll ? "all" : "selected",
      appliedIds: selectedChanges.map((change) => change.changeId),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to apply selected NPO changes.",
      },
      { status: 500 }
    );
  }
}
