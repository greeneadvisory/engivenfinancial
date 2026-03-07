import "./globals.scss";
import PrelineScript from "./PrelineScript";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engiven Financial",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>{children}</Providers>
      <PrelineScript />
    </>
  );
};

export default RootLayout;
