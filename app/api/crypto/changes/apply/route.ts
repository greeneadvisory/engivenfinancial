import { NextRequest, NextResponse } from "next/server";
import { applyCryptoExistingChanges } from "@/shared/lib/crypto-workflow-store";

export const dynamic = "force-dynamic";

type ApplyBody = {
  changeIds?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ApplyBody;
    const changeIds = Array.isArray(body?.changeIds) ? body.changeIds : [];

    const result = await applyCryptoExistingChanges(changeIds);

    if (result.appliedCount === 0) {
      return NextResponse.json(
        { error: "No existing transaction changes selected to apply." },
        { status: 400 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to apply Crypto changes.",
      },
      { status: 500 }
    );
  }
}
