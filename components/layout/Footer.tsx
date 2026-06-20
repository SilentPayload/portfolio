import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-edge mt-24">
      <div className="mx-auto max-w-[1100px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 text-xs">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.hackerOne}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            HackerOne
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
