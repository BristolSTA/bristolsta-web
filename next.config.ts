import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uobtheatre.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "bristolsta-media.s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
