import { NextRequest, NextResponse } from "next/server";
import { getNpoPreviewResult } from "@/shared/lib/npo-preview-service";

export const dynamic = "force-dynamic";

type SummaryPayload = {
  summary: {
    incomingCount: number;
    existingCount: number;
    newCount: number;
    updatedCount: number;
    unchangedCount: number;
  };
  pendingCount: number;
  cached: boolean;
  cachedAt: string;
};

export async function GET(request: NextRequest) {
  try {
    const forceRefresh = request.nextUrl.searchParams.get("force") === "1";
    const preview = await getNpoPreviewResult({ forceRefresh });
    const pendingCount = preview.summary.newCount + preview.summary.updatedCount;

    const payload: SummaryPayload = {
      summary: preview.summary,
      pendingCount,
      cached: preview.cached,
      cachedAt: preview.cachedAt,
    };

    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to build NPO summary.",
      },
      { status: 500 }
    );
  }
}
