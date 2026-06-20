import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  return (
    <section id="experience" className="border-t border-edge py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionLabel index="03">Experience</SectionLabel>
          <h2 className="text-3xl font-bold text-ink mb-12">
            Where I&rsquo;ve worked
          </h2>
        </Reveal>

        <ol className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-px bg-edge hidden sm:block"
            aria-hidden="true"
          />

          {experience.map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <li className="relative sm:pl-10 mb-10 last:mb-0">
                {/* Timeline dot */}
                <span
                  className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent bg-canvas hidden sm:block"
                  aria-hidden="true"
                />

                <div className="rounded-xl border border-edge bg-surface p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-ink text-base">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">
                        {item.orgUrl ? (
                          <a
                            href={item.orgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                          >
                            {item.org}
                          </a>
                        ) : (
                          item.org
                        )}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted border border-edge rounded-full px-2.5 py-1 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {item.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0 font-mono text-xs">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {item.disclosureNote && (
                    <div className="mt-4 rounded-md border border-edge/60 bg-canvas/50 px-4 py-3">
                      <p className="text-xs text-muted leading-relaxed">
                        <span className="font-semibold text-muted">
                          Disclosure note:{" "}
                        </span>
                        {item.disclosureNote}
                      </p>
                    </div>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
