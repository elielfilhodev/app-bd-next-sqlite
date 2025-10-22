import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Next.js treats this folder as the workspace root
  outputFileTracingRoot: __dirname,
  // Clean the .next folder on each build to avoid stale chunks
  cleanDistDir: true,
};

export default nextConfig;
