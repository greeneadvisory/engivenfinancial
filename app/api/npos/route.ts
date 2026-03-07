import { NextResponse } from "next/server";
import { fetchEngivenNpos } from "@/shared/lib/engiven-npos";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const records = await fetchEngivenNpos();

    return NextResponse.json({ records });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected error while loading NPO report.",
      },
      { status: 500 }
    );
  }
}
