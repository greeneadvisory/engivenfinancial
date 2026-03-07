import { NextRequest, NextResponse } from "next/server";
import { getUiPreference, upsertUiPreference } from "@/shared/lib/supabase-rest";

export const dynamic = "force-dynamic";

const CRYPTO_DONATIONS_TABLE_SETTINGS_KEY = "crypto_donations_table_settings";

type CryptoDonationsTableSettings = {
  orderedFieldKeys?: unknown;
  hiddenFieldKeys?: unknown;
  displayNames?: unknown;
  manualColumnWidths?: unknown;
};

export async function GET() {
  try {
    const settings = await getUiPreference<CryptoDonationsTableSettings>(CRYPTO_DONATIONS_TABLE_SETTINGS_KEY);

    return NextResponse.json({
      settings: settings ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to load crypto table settings.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CryptoDonationsTableSettings;

    await upsertUiPreference(CRYPTO_DONATIONS_TABLE_SETTINGS_KEY, {
      orderedFieldKeys: body?.orderedFieldKeys,
      hiddenFieldKeys: body?.hiddenFieldKeys,
      displayNames: body?.displayNames,
      manualColumnWidths: body?.manualColumnWidths,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to save crypto table settings.",
      },
      { status: 500 }
    );
  }
}
