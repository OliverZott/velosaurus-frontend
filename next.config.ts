import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: process.env.NODE_ENV !== 'production',
  experimental: {
    useTypeScriptCli: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
