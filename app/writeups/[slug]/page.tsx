import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllWriteups, getWriteupBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { Tag } from "@/components/ui/Tag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllWriteups();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWriteupBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function WriteupPost({ params }: Props) {
  const { slug } = await params;
  const post = getWriteupBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-16">
      {/* Back link */}
      <Link
        href="/writeups"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors font-mono mb-10"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        All write-ups
      </Link>

      {/* Template banner */}
      {meta.status === "template" && (
        <div className="mb-8 rounded-lg border border-amber-600/40 bg-amber-900/20 px-4 py-3">
          <p className="text-sm text-amber-400 font-mono">
            ⚠ This is a template post. Replace all content and set{" "}
            <code className="bg-amber-900/30 px-1 rounded">status: &quot;published&quot;</code>{" "}
            in the frontmatter before going live.
          </p>
        </div>
      )}

      <header className="mb-10">
        <time className="font-mono text-xs text-muted block mb-3">{meta.date}</time>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-4 leading-tight">
          {meta.title}
        </h1>
        {meta.summary && (
          <p className="text-muted text-base leading-relaxed mb-5 max-w-2xl">
            {meta.summary}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <Tag key={tag} variant="accent">
              {tag}
            </Tag>
          ))}
        </div>
      </header>

      <hr className="border-edge mb-10" />

      <article className="prose max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      <div className="mt-16 pt-8 border-t border-edge">
        <Link
          href="/writeups"
          className="text-sm text-accent hover:text-accent-dim transition-colors font-mono"
        >
          ← Back to all write-ups
        </Link>
      </div>
    </div>
  );
}
