import type { MetadataRoute } from "next";
import { getAllWriteups } from "@/lib/mdx";

const BASE_URL = "https://praiseabougbede.com"; // TODO: update to real production URL

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllWriteups();

  const writeupUrls = posts.map((post) => ({
    url: `${BASE_URL}/writeups/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/writeups`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...writeupUrls,
  ];
}
