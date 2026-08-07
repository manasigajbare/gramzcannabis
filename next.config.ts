import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dutchie.com",
      },
      {
        protocol: "https",
        hostname: "buddy-gramz.nyc3.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "cannavate.nyc3.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "d3n4jy9f1whusf.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d37g1rbq4305wd.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
