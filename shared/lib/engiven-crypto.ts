export type CryptoValue = string | number | boolean | null;
export type CryptoRecord = Record<string, CryptoValue>;

const CRYPTO_REPORT_URL = "https://platform.engiven.com/api/admin/reports/crypto";
const ENGIVEN_CRYPTO_FETCH_TIMEOUT_MS = 8000;

const getEngivenAdminApiKey = () => process.env.ENGIVEN_ADMIN_API_KEY?.trim() ?? "";

export const isEngivenAdminApiConfigured = () => getEngivenAdminApiKey().length > 0;

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
  const apiKey = getEngivenAdminApiKey();

  if (!apiKey) {
    throw new Error("Missing ENGIVEN_ADMIN_API_KEY environment variable.");
  }

  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), ENGIVEN_CRYPTO_FETCH_TIMEOUT_MS);

  let response: Response;

  try {
    response = await fetch(CRYPTO_REPORT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({}),
      cache: "no-store",
      signal: abortController.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Engiven crypto sync timed out after ${ENGIVEN_CRYPTO_FETCH_TIMEOUT_MS / 1000} seconds.`);
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }

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
