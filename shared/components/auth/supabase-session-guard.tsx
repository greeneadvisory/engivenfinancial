"use client";

import { getSupabaseAuthClient } from "@/shared/lib/supabase-auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const SupabaseSessionGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = React.useState(true);
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;

    const supabase = getSupabaseAuthClient();

    const validateSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const hasSession = !!data.session;

        if (!mounted) {
          return;
        }

        setIsAuthorized(hasSession);
        setIsChecking(false);

        if (!hasSession) {
          router.replace("/");
        }
      } catch {
        if (!mounted) {
          return;
        }

        setIsAuthorized(false);
        setIsChecking(false);
        router.replace("/");
      }
    };

    void validateSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) {
        return;
      }

      const hasSession = !!session;
      setIsAuthorized(hasSession);
      setIsChecking(false);

      if (!hasSession) {
        router.replace("/");
      }
    });

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (isChecking || !isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-e-transparent"></div>
          <p className="mt-3 text-[0.875rem] text-textmuted dark:text-textmuted/50">Checking session...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SupabaseSessionGuard;
