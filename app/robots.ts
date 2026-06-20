import type { MetadataRoute } from "next";

const BASE_URL = "https://praiseabougbede.com"; // TODO: update to real production URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
