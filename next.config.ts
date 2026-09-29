import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: process.env.NODE_ENV !== "production",
  // Dev only: localhost always works; set DEV_ORIGINS (comma-separated LAN IPs/hosts) in .env.local
  // to open the dev server from other devices without HMR being blocked
  allowedDevOrigins: process.env.DEV_ORIGINS?.split(",").map((o) => o.trim()) ?? [],
  experimental: {
    useTypeScriptCli: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
