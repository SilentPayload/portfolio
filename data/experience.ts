import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    title: "Cybersecurity Instructor",
    org: "Early Code Institute",
    period: "Present",
    bullets: [
      "Delivers a structured cybersecurity curriculum across three cohorts: Linux, networking, SIEM/Splunk, Python, Wireshark, Nessus, web app security, and digital forensics.",
      "Designed and deployed the FirstBank Nigeria SOC Training Docker Lab.",
      "Built an Autopsy forensics lab and a custom Splunk dataset with instructor answer keys.",
      "Created interactive teaching tools: OSI visualizer, security/access-control quizzes, and an OSINT CTF.",
      "Wrote Python incident-response automation scripts and Nessus report templates.",
    ],
  },
  {
    title: "Penetration Tester (Authorized)",
    org: "startupnaija.app",
    orgUrl: "https://startupnaija.app",
    period: "Contract",
    bullets: [
      "Conducted a full authorized penetration test of a Firebase / Next.js / Vercel production application.",
      "Identified eight vulnerabilities including two Criticals: unrestricted Firestore read and unrestricted Firestore write.",
      "Delivered a structured findings report to the client and supervising stakeholder.",
    ],
    disclosureNote:
      "Full report available on request under NDA. No exploit walkthroughs or PoC steps are published here in accordance with responsible disclosure and client confidentiality.",
  },
  {
    title: "Co-Founder & Security Lead",
    org: "Tradae",
    orgUrl: "https://tradae.com",
    period: "Present",
    bullets: [
      "Architected and deployed the production stack: Laravel on Vultr / Ubuntu 24.04, PostgreSQL / PostGIS, Redis, Laravel Horizon, Cloudflare.",
      "Conducted a self-authorized penetration test of the platform, finding and patching 18 vulnerabilities including SQLi, admin auth bypass, and DOM XSS.",
      "Integrated KYB verification via Dojah.",
    ],
  },
  {
    title: "Bug Bounty Researcher",
    org: "HackerOne",
    orgUrl: "https://hackerone.com/unpatchedxyz",
    period: "Present",
    bullets: [
      "Active web-application bug bounty research on the HackerOne platform (handle: unpatchedxyz).",
      "Submitted a report on Whatnot's GraphQL followUser mutation.",
      "Built a dedicated Kali Linux recon workstation with the full ProjectDiscovery suite and custom tooling.",
    ],
    // TODO: only add specific findings here if they have been publicly disclosed by the program
    disclosureNote:
      "Specific vulnerability details are not published here in accordance with HackerOne responsible disclosure policy and individual program rules.",
  },
  {
    title: "Content & Operations Lead",
    org: "Omatablog",
    period: "Previous",
    bullets: [
      "Managed a monetized news blog and small editorial team.",
      "Led content strategy and day-to-day operations.",
    ],
  },
];
