import type { Metadata } from "next";
import Link from "next/link";
import { getAllWriteups } from "@/lib/mdx";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Write-ups",
  description:
    "Security research write-ups, CTF walkthroughs, and technical notes by Praise Abu Ugbede.",
};

export default function WriteupsPage() {
  const posts = getAllWriteups();

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-20">
      <SectionLabel>Write-ups</SectionLabel>
      <h1 className="text-4xl font-bold text-ink mb-4">
        Research &amp; walkthroughs
      </h1>
      <p className="text-muted text-base mb-12 max-w-xl leading-relaxed">
        Security research notes, CTF walkthroughs, and technical deep-dives.
        Findings from bug bounty programs are only published where the programme
        permits and disclosure has been approved.
      </p>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-dashed border-edge bg-surface px-6 py-14 text-center">
          <p className="font-mono text-sm text-muted">
            No published posts yet, check back soon.
          </p>
        </div>
      ) : (
        <ul className="space-y-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/writeups/${post.slug}`} className="group block">
                <article className="rounded-xl border border-edge bg-surface p-6 hover:border-accent/40 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h2 className="font-semibold text-ink text-lg group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <time className="font-mono text-xs text-muted shrink-0 pt-1">
                      {post.date}
                    </time>
                  </div>
                  {post.summary && (
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {post.summary}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Tag key={tag} variant="accent">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
