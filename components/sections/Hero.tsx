import Link from "next/link";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-[1100px] px-6 pt-24 pb-20 md:pt-32 md:pb-28"
      aria-label="Introduction"
    >
      <div className="max-w-2xl">
        {/* Terminal motif */}
        <div
          className="inline-block mb-8 rounded-lg border border-edge bg-surface px-4 py-3 font-mono text-sm"
          aria-hidden="true"
        >
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="text-muted">whoami</span>
          </p>
          <p className="text-ink mt-1">praise_abu_ugbede</p>
          <p className="mt-2">
            <span className="text-accent">$</span>{" "}
            <span className="text-muted">cat role.txt</span>
          </p>
          <p className="text-ink mt-1 leading-relaxed">
            Cybersecurity Analyst
            <br />
            Penetration Tester
            <br />
            Security Educator
          </p>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">
          {profile.name}
        </h1>

        {/* Headline */}
        <p className="font-mono text-sm text-accent tracking-wide mb-6">
          {profile.headline}
        </p>

        {/* Pitch */}
        <p className="text-lg text-muted leading-relaxed mb-4 max-w-xl">
          &ldquo;{profile.pitch}&rdquo;
        </p>

        {/* Location */}
        <p className="text-sm text-muted mb-10">
          <svg
            className="inline-block mr-1.5 mb-0.5"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {profile.location}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dim transition-colors"
          >
            View Work
          </Link>
          <a
            href="/cv.pdf"
            download
            className="rounded-md border border-edge px-5 py-2.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
            aria-label="Download CV (PDF)"
          >
            Download CV
          </a>
          <Link
            href="/#contact"
            className="rounded-md border border-edge px-5 py-2.5 text-sm font-medium text-muted hover:text-ink hover:border-ink transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
