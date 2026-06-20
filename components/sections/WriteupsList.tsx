import Link from "next/link";
import { getAllWriteups } from "@/lib/mdx";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

export function WriteupsList() {
  const posts = getAllWriteups();

  return (
    <section id="writeups" className="border-t border-edge py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionLabel index="05">Write-ups</SectionLabel>
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <h2 className="text-3xl font-bold text-ink">
              Research &amp; walkthroughs
            </h2>
            <Link
              href="/writeups"
              className="text-sm text-accent hover:text-accent-dim transition-colors font-mono"
            >
              All posts →
            </Link>
          </div>
        </Reveal>

        {posts.length === 0 ? (
          <Reveal delay={80}>
            <div className="rounded-xl border border-dashed border-edge bg-surface px-6 py-10 text-center">
              <p className="text-muted text-sm font-mono">
                Write-ups coming soon, check back later.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5">
            {posts.slice(0, 4).map((post, i) => (
              <Reveal key={post.slug} delay={i * 70}>
                <Link href={`/writeups/${post.slug}`} className="group block">
                  <article className="rounded-xl border border-edge bg-surface p-5 h-full hover:border-accent/40 transition-colors">
                    <time className="font-mono text-xs text-muted block mb-2">
                      {post.date}
                    </time>
                    <h3 className="font-semibold text-ink group-hover:text-accent transition-colors mb-2">
                      {post.title}
                    </h3>
                    {post.summary && (
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
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
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
