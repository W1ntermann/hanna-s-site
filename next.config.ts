import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    SITE_URL: process.env.SITE_URL ?? "https://annalukina.top",
  },
};

export default nextConfig;
