import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "@prisma/client",
      "bcryptjs",
      "@prisma/adapter-better-sqlite3",
      "better-sqlite3",
    ],
  },
};

export default nextConfig;
