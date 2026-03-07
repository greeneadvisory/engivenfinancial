type CachedValue = {
  expiresAt: number;
  value: unknown;
};

const responseCache = new Map<string, CachedValue>();
const inFlightRequests = new Map<string, Promise<unknown>>();

const buildCacheKey = (url: string, method?: string) => `${(method ?? "GET").toUpperCase()}::${url}`;

const parseJsonPayload = async (response: Response) => {
  const rawText = await response.text();
  if (!rawText) {
    return null;
  }

  try {
    return JSON.parse(rawText);
  } catch {
    return null;
  }
};

export async function fetchJsonWithClientCache<T>(
  url: string,
  options?: {
    ttlMs?: number;
    forceRefresh?: boolean;
    init?: RequestInit;
  }
): Promise<{ ok: boolean; status: number; payload: T | null; fromCache: boolean }> {
  const ttlMs = options?.ttlMs ?? 60000;
  const method = options?.init?.method ?? "GET";
  const cacheKey = buildCacheKey(url, method);
  const now = Date.now();

  if (!options?.forceRefresh) {
    const cached = responseCache.get(cacheKey);
    if (cached && cached.expiresAt > now) {
      return {
        ok: true,
        status: 200,
        payload: cached.value as T,
        fromCache: true,
      };
    }
  }

  if (!options?.forceRefresh) {
    const existingRequest = inFlightRequests.get(cacheKey);
    if (existingRequest) {
      const payload = (await existingRequest) as T;
      return {
        ok: true,
        status: 200,
        payload,
        fromCache: true,
      };
    }
  }

  const requestPromise = (async () => {
    const response = await fetch(url, {
      ...options?.init,
      cache: "no-store",
    });

    const payload = (await parseJsonPayload(response)) as T | null;

    if (response.ok && payload) {
      responseCache.set(cacheKey, {
        value: payload,
        expiresAt: now + ttlMs,
      });
    }

    return {
      ok: response.ok,
      status: response.status,
      payload,
      fromCache: false,
    };
  })();

  inFlightRequests.set(
    cacheKey,
    requestPromise.then((result) => result.payload)
  );

  try {
    return await requestPromise;
  } finally {
    inFlightRequests.delete(cacheKey);
  }
}

export function clearClientFetchCache(url?: string, method = "GET") {
  if (!url) {
    responseCache.clear();
    inFlightRequests.clear();
    return;
  }

  const cacheKey = buildCacheKey(url, method);
  const queryPrefix = `${cacheKey}?`;

  Array.from(responseCache.keys()).forEach((key) => {
    if (key === cacheKey || key.startsWith(queryPrefix)) {
      responseCache.delete(key);
    }
  });

  Array.from(inFlightRequests.keys()).forEach((key) => {
    if (key === cacheKey || key.startsWith(queryPrefix)) {
      inFlightRequests.delete(key);
    }
  });
}
