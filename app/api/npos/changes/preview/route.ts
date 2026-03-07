import { NextRequest, NextResponse } from "next/server";
import { getNpoPreviewResult } from "@/shared/lib/npo-preview-service";
import { DEFAULT_PAGE_SIZE, parsePaginationParams } from "@/shared/lib/pagination";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const forceRefresh = request.nextUrl.searchParams.get("force") === "1";
    const { page, perPage, offset } = parsePaginationParams({
      pageParam: request.nextUrl.searchParams.get("page"),
      perPageParam: request.nextUrl.searchParams.get("perPage"),
      defaultPerPage: DEFAULT_PAGE_SIZE,
      maxPerPage: 500,
    });
    const includeDetails = request.nextUrl.searchParams.get("details") === "1";
    const preview = await getNpoPreviewResult({ forceRefresh });
    const totalCount = preview.changes.length;
    const pagedChanges = preview.changes.slice(offset, offset + perPage);
    const changes = includeDetails
      ? pagedChanges
      : pagedChanges.map((change) => ({
          changeId: change.changeId,
          npoExternalId: change.npoExternalId,
          changeType: change.changeType,
          changedFields: change.changedFields,
        }));

    return NextResponse.json({
      summary: preview.summary,
      changes,
      totalCount,
      page,
      perPage,
      cached: preview.cached,
      cachedAt: preview.cachedAt,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to build NPO preview changes.",
      },
      { status: 500 }
    );
  }
}
