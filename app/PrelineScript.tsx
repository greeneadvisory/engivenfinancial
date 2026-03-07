"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    let cancelled = false;

    const loadPreline = async () => {
      try {
        await import("preline/preline");
      } catch (error) {
        if (cancelled) {
          return;
        }

        const isChunkError =
          error instanceof Error &&
          /(ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module)/i.test(
            error.message
          );

        if (isChunkError && typeof window !== "undefined") {
          const reloadKey = "preline-chunk-reload-once";
          const alreadyReloaded = window.sessionStorage.getItem(reloadKey) === "1";

          if (!alreadyReloaded) {
            window.sessionStorage.setItem(reloadKey, "1");
            window.location.reload();
            return;
          }
        }

        console.error("Failed to load preline runtime", error);
        return;
      }

      if (cancelled || typeof window === "undefined") {
        return;
      }

      window.sessionStorage.removeItem("preline-chunk-reload-once");

      if (!window.HSStaticMethods?.autoInit) {
        return;
      }

      window.HSStaticMethods.autoInit();
    };

    void loadPreline();

    return () => {
      cancelled = true;
    };
  }, [path]);

  return null;
}