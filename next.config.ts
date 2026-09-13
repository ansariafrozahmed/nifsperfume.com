import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.104'],
  output: "export",
   
  images: {
    unoptimized: true,
    // Next 16 allows only [75] by default; quality={100} is coerced without this.
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "images.nifsperfume.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
