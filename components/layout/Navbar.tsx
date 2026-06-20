"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#writeups", label: "Write-ups" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/90 backdrop-blur-sm">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4"
      >
        {/* Logo / name */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold text-ink hover:text-accent transition-colors"
          aria-label="Praise Abu Ugbede, go to homepage"
        >
          <span className="text-accent">~/</span>praise
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-muted hover:text-ink transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted hover:text-ink transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-edge bg-canvas px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-4 text-sm">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-muted hover:text-ink transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
