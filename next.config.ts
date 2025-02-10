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
      {
        hostname: "*lh6.googleusercontent.com*",
      },
    ],
  },
};

export default nextConfig;
