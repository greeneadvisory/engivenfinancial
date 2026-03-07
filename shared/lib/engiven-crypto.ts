export type CryptoValue = string | number | boolean | null;
export type CryptoRecord = Record<string, CryptoValue>;

const CRYPTO_REPORT_URL = "https://platform.engiven.com/api/admin/reports/crypto";

const parseResponsePayload = async (response: Response) => {
  const rawText = await response.text();
  const contentType = response.headers.get("content-type") ?? "";

  if (!rawText) {
    return { payload: null, rawText, contentType };
  }

  if (contentType.includes("application/json")) {
    try {
      return { payload: JSON.parse(rawText), rawText, contentType };
    } catch {
      return { payload: null, rawText, contentType };
    }
  }

  try {
    return { payload: JSON.parse(rawText), rawText, contentType };
  } catch {
    return { payload: null, rawText, contentType };
  }
};

export async function fetchEngivenCryptoTransactions() {
  const apiKey = process.env.ENGIVEN_ADMIN_API_KEY;

  if (!apiKey) {
    throw new Error("Missing ENGIVEN_ADMIN_API_KEY environment variable.");
  }

  const response = await fetch(CRYPTO_REPORT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({}),
    cache: "no-store",
  });

  const { payload, rawText, contentType } = await parseResponsePayload(response);

  if (!response.ok) {
    const fallbackMessage = rawText
      ? `Engiven API returned ${response.status}. Content-Type: ${contentType || "unknown"}.`
      : "Failed to fetch Crypto report data.";

    throw new Error(payload?.error ?? fallbackMessage);
  }

  if (!payload) {
    throw new Error("Engiven API returned a non-JSON response. Verify API key and endpoint access.");
  }

  const records = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.rows)
    ? payload.rows
    : Array.isArray(payload?.data)
    ? payload.data
    : [];

  return records as CryptoRecord[];
}
