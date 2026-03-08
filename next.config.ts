import type { NextConfig } from "next";
import path from 'path';

const shouldStaticExport = process.env.NEXT_STATIC_EXPORT === "true";
const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const publicSupabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "";

const nextConfig: NextConfig = {
  /* config options here */
  ...(shouldStaticExport ? { output: "export" } : {}),
  // reactStrictMode: true,
  trailingSlash: true,
  basePath: "",
	assetPrefix : "",
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 25,
    pagesBufferLength: 10,
  },
  experimental: {
    optimizePackageImports: [
      "@mui/material",
      "@mui/icons-material",
      "lodash",
      "lodash-es",
      "moment",
    ],
  },
  images: {
    loader: "imgix",
    path: "/",
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: publicSupabaseUrl,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: publicSupabaseKey,
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || publicSupabaseKey,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/assets/scss')],
    silenceDeprecations: ['legacy-js-api'],
    quietDeps: true, 
  },
  reactStrictMode: false, // Disable Strict Mode if necessary
};

export default nextConfig;
