import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for now to fix image serving
  images: {
    unoptimized: false, // Allow Next.js image optimization
  },
  experimental: {
    webpackBuildWorker: true,
  },
};
