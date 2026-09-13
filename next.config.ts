import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.104'],
  async redirects() {
    return [
      // the old all-products listing was replaced by Shopify-style collections
      { source: "/products", destination: "/collections", permanent: false },
      { source: "/collection", destination: "/collections", permanent: false },
      { source: "/collection/:handle", destination: "/collections/:handle", permanent: false },
    ];
  },
  images: {
    // Next 16 allows only [75] by default; quality={100} is coerced without this.
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "images.nifsperfume.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
