# Praise Abu Ugbede — Cybersecurity Portfolio

Professional portfolio website for Praise Abu Ugbede: cybersecurity analyst, penetration tester, and security educator.

Built with **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · MDX**.

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Build

```bash
npm run build   # production build
npm run start   # start production server locally
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra build settings needed.
4. Click **Deploy**.

Redeploy automatically triggers on every push to `main`.

---

## Project structure

```
app/                    Next.js App Router pages
  layout.tsx            Root layout (meta, nav, footer, theme script)
  page.tsx              Home page (single-page scroll)
  writeups/
    page.tsx            Write-ups listing
    [slug]/page.tsx     Individual write-up post
  sitemap.ts            Auto-generated sitemap
  robots.ts             robots.txt
components/
  layout/               Navbar, Footer
  sections/             Hero, About, Skills, Experience, Projects,
                        WriteupsList, Certifications, Contact
  ui/                   SectionLabel, Tag, ThemeToggle, Reveal
  mdx/                  Custom MDX component overrides
content/
  writeups/             MDX write-up files (one per post)
data/                   Typed content: profile, skills, experience,
                        projects, certifications
lib/
  mdx.ts                Read + parse MDX files (server-side)
types/
  index.ts              Shared TypeScript types
public/                 Static assets (cv.pdf, favicon, og-image)
```

---

## Adding a write-up

1. Create `content/writeups/my-post-slug.mdx`.
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
date: "2026-01-15"
tags: ["web-app", "penetration-testing"]
summary: "One-sentence summary shown on the listing page."
status: "published"
---
```

3. Write your post in MDX below the frontmatter.
4. `status: "published"` makes it appear in listings. `"draft"` hides it.
5. **Do not publish vulnerability details from bug bounty programmes unless the programme has approved disclosure.**

---

## TODO — required before going live

| # | File | What to do |
|---|------|------------|
| 1 | `data/profile.ts` | Replace `email: "TODO@example.com"` with real email address |
| 2 | `data/profile.ts` | Replace `linkedin: "https://linkedin.com/in/TODO"` with real LinkedIn URL |
| 3 | `public/` | Add `cv.pdf` (your actual CV) — delete `cv-placeholder.txt` |
| 4 | `public/` | Add `og-image.png` at **1200 × 630 px** for social previews |
| 5 | `public/` | Optionally replace `favicon.svg` with a custom icon |
| 6 | `app/layout.tsx` | Update `siteUrl` to your real production domain |
| 7 | `app/sitemap.ts` | Update `BASE_URL` to your real production domain |
| 8 | `app/robots.ts` | Update `BASE_URL` to your real production domain |
| 9 | `components/sections/About.tsx` | Replace the headshot placeholder div with a real `<Image>` |
| 10 | `content/writeups/` | Replace `template-post.mdx` with real write-ups |

### Optional

- Wire a contact form via [Formspree](https://formspree.io): add `<form action="https://formspree.io/f/YOUR_ID">` in the `Contact` section component.
- Add a `vercel.json` only if you need custom redirects or headers (not currently needed).

---

## Disclosure reminders

- The **startupnaija.app** engagement is a redacted high-level summary only. Full report is available under NDA on request. Do not add exploit steps or PoCs to the site.
- **HackerOne / Whatnot** findings: a `// TODO: only include if disclosed` comment in `data/experience.ts` guards the detail placeholder. Only expand if the programme has publicly approved disclosure.
