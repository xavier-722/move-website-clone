import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
    // Increase timeout limit
    minimumCacheTTL: 60, // Set to 60 seconds or any value that suits your needs
  },
};

export default nextConfig;

