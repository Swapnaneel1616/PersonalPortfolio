import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Next's bundled typecheck OOMs with Three.js types in this environment;
    // `tsc --noEmit` is the source of truth locally.
    ignoreBuildErrors: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
