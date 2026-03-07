import { NextRequest, NextResponse } from "next/server";
import { getNpoPreviewResult } from "@/shared/lib/npo-preview-service";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const changeId = request.nextUrl.searchParams.get("changeId")?.trim();

    if (!changeId) {
      return NextResponse.json({ error: "Missing changeId query parameter." }, { status: 400 });
    }

    const preview = await getNpoPreviewResult();
    const change = preview.changes.find((item) => item.changeId === changeId);

    if (!change) {
      return NextResponse.json({ error: "Change not found." }, { status: 404 });
    }

    return NextResponse.json({
      change,
      cached: preview.cached,
      cachedAt: preview.cachedAt,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load NPO change detail.",
      },
      { status: 500 }
    );
  }
}
