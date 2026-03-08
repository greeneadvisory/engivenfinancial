"use client";

import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import { getSupabaseAuthClient } from "@/shared/lib/supabase-auth-client";
import nextConfig from "@/next.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const { basePath }: any = nextConfig;
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    let mounted = true;

    const checkSession = async () => {
      try {
        const supabase = getSupabaseAuthClient();
        const { data } = await supabase.auth.getSession();

        if (mounted && data.session) {
          router.replace("/dashboard/sales");
        }
      } catch {
      }
    };

    checkSession();

    return () => {
      mounted = false;
    };
  }, [router]);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const supabase = getSupabaseAuthClient();
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMessage(error.message || "Sign in failed.");
        return;
      }

      router.replace("/dashboard/sales");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Sign in failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="authentication-background min-h-screen">
      <div className="container">
        <div className="grid grid-cols-12 justify-center items-center authentication authentication-basic h-full py-8">
          <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
          <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
            <div className="box my-4">
              <div className="box-body !p-[3rem]">
                <div className="mb-3 flex justify-center">
                  <Link href="/dashboard/sales">
                    <img
                      src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`}
                      alt="logo"
                      className="desktop-logo"
                    />
                    <img
                      src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-white.png`}
                      alt="logo"
                      className="desktop-white"
                    />
                  </Link>
                </div>

                <p className="h5 mb-2 text-center">Sign In</p>
                <p className="mb-4 text-textmuted dark:text-textmuted/50 opacity-70 font-normal text-center">
                  Sign in with your Supabase account
                </p>

                <form className="grid grid-cols-12 gap-y-3" onSubmit={handleSignIn}>
                  <div className="xl:col-span-12 col-span-12">
                    {errorMessage ? (
                      <div className="alert-danger px-4 py-3 shadow-md mb-2" role="alert">
                        <div className="flex">
                          <div>{errorMessage}</div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div className="xl:col-span-12 col-span-12">
                    <label htmlFor="signin-email" className="form-label text-defaulttextcolor">
                      Email<sup className="text-xs text-danger">*</sup>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="signin-email"
                      name="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        setErrorMessage("");
                      }}
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="xl:col-span-12 col-span-12 mb-2">
                    <label htmlFor="signin-password" className="form-label text-defaulttextcolor block">
                      Password<sup className="text-xs text-danger">*</sup>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control create-password-input"
                        id="signin-password"
                        name="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value);
                          setErrorMessage("");
                        }}
                        autoComplete="current-password"
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((previous) => !previous)}
                        className="show-password-button text-textmuted dark:text-textmuted/50"
                        aria-label="Toggle password visibility"
                      >
                        <i className={`${showPassword ? "ri-eye-line" : "ri-eye-off-line"} align-middle`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="xl:col-span-12 col-span-12 mt-2">
                    <SpkButton
                      buttontype="submit"
                      variant="primary"
                      customClass={`ti-btn w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting ? "Signing In..." : "Sign In"}
                    </SpkButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;