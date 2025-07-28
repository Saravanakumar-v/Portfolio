import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", 
  rules: {
    'no-console': 'off',
    // add other rules to disable here
  }
};

export default nextConfig;
