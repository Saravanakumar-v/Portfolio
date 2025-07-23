import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", // This enables static export with `next export`
  basePath: isProd ? "/your-repo-name" : "",
  assetPrefix: isProd ? "/your-repo-name/" : "",
  images: {
    unoptimized: true, // Required if using next/image with static export
  },
};

export default nextConfig;
