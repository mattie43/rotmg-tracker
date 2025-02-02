import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*realm.wiki*",
      },
      {
        hostname: "*imgur*",
      },
    ],
  },
};

export default nextConfig;
