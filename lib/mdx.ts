import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { WriteupMeta } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content", "writeups");

export function getAllWriteups(): WriteupMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename): WriteupMeta => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "TODO: add date",
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      status: data.status ?? "draft",
    };
  });

  // Show published first, then most recent by date
  return posts
    .filter((p) => p.status !== "draft")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWriteupBySlug(slug: string): {
  meta: WriteupMeta;
  content: string;
} | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "TODO: add date",
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      status: data.status ?? "draft",
    },
    content,
  };
}
