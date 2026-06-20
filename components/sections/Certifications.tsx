import { certifications, education } from "@/data/certifications";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const statusLabel: Record<string, { label: string; className: string }> = {
  active: {
    label: "Completed",
    className: "bg-emerald-900/30 text-emerald-400 border-emerald-700/40",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-amber-900/30 text-amber-400 border-amber-700/40",
  },
  awarded: {
    label: "Awarded",
    className: "bg-accent/10 text-accent border-accent/30",
  },
};

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-edge py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionLabel index="06">Certifications &amp; Education</SectionLabel>
          <h2 className="text-3xl font-bold text-ink mb-12">
            Credentials
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          {/* Certifications */}
          <Reveal delay={60}>
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
              Certifications &amp; Awards
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, i) => {
                const badge = statusLabel[cert.status];
                return (
                  <li
                    key={i}
                    className="flex items-start justify-between gap-4 rounded-lg border border-edge bg-surface px-4 py-3"
                  >
                    <div>
                      <p className="text-sm text-ink font-medium">{cert.name}</p>
                      {cert.issuer && (
                        <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
                      )}
                      {cert.note && (
                        <p className="text-xs text-muted italic mt-0.5">
                          {cert.note}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={`font-mono text-xs border rounded-full px-2 py-0.5 whitespace-nowrap ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                      {cert.date && (
                        <span className="font-mono text-xs text-muted">
                          {cert.date}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Education */}
          <Reveal delay={120}>
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
              Education
            </h3>
            <ul className="space-y-3">
              {education.map((edu, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-edge bg-surface px-4 py-3"
                >
                  <p className="text-sm text-ink font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{edu.field}</p>
                  {edu.date && (
                    <p className="font-mono text-xs text-muted mt-1">
                      {edu.date}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
