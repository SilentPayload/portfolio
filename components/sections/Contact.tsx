import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const links = [
  {
    label: "Email",
    href: `mailto:${profile.links.email}`,
    display: profile.links.email,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-10 7L2 7"/>
      </svg>
    ),
    external: false,
  },
  {
    label: "GitHub",
    href: profile.links.github,
    display: "github.com/SilentPayload",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    external: true,
  },
  {
    label: "HackerOne",
    href: profile.links.hackerOne,
    display: "hackerone.com/unpatchedxyz",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    display: "linkedin.com/in/abu-praise",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-edge py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionLabel index="07">Contact</SectionLabel>
          <h2 className="text-3xl font-bold text-ink mb-4">
            Get in touch
          </h2>
          <p className="text-muted text-base mb-12 max-w-lg leading-relaxed">
            Open to opportunities in penetration testing, SOC roles, and security education,
            primarily UK-based and remote. Feel free to reach out via email or any of the links below.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 60}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex flex-col gap-3 rounded-xl border border-edge bg-surface p-5 hover:border-accent/40 hover:bg-surface/80 transition-colors group"
              >
                <span className="text-muted group-hover:text-accent transition-colors">
                  {link.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{link.label}</p>
                  <p className="text-xs text-muted font-mono mt-0.5 truncate">
                    {link.display}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
