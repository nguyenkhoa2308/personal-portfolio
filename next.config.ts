import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external images from Unsplash used in components
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
