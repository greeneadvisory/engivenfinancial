import type { NextConfig } from "next";
import path from 'path';
const shouldStaticExport = process.env.NEXT_STATIC_EXPORT === "true";
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
      "firebase",
    ],
  },
  images: {
    loader: "imgix",
    path: "/",
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
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
