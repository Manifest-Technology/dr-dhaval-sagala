import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.17"],

  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
