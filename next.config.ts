import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow MDX content to be read from the filesystem at build time
  // (gray-matter + fs.readFileSync is used server-side in lib/mdx.ts)
  serverExternalPackages: ["gray-matter"],

  images: {
    // TODO: add domains here if you serve headshot / OG images from an external URL
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
