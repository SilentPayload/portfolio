import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="border-t border-edge py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionLabel index="01">About</SectionLabel>
          <h2 className="text-3xl font-bold text-ink mb-8">
            Who I am
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
          <Reveal delay={80}>
            <p className="text-muted leading-relaxed text-base max-w-2xl">
              {profile.about}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {profile.languages.map((lang) => (
                <li key={lang} className="flex items-center gap-2">
                  <span className="text-accent font-mono text-xs">▸</span>
                  {lang}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Headshot placeholder — TODO: add real photo */}
          <Reveal delay={160} className="hidden md:block">
            <div
              className="w-48 h-48 rounded-xl border-2 border-dashed border-edge bg-surface flex items-center justify-center text-center text-xs text-muted font-mono"
              aria-label="Headshot placeholder — replace with real photo"
            >
              {/* TODO: Replace with <Image src="/headshot.jpg" ... /> */}
              <span>
                TODO
                <br />
                headshot
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
