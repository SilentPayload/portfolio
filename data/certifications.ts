import type { Certification, Education } from "@/types";

export const certifications: Certification[] = [
  {
    name: "CompTIA PenTest+",
    issuer: "CompTIA",
    status: "in-progress",
  },
  {
    name: "Microsoft AZ-500: Azure Security Engineer Associate",
    issuer: "Microsoft",
    status: "in-progress",
    note: "Voucher awarded via hackathon",
  },
  {
    name: "ABC / Microsoft / TeKnowledge Cybersecurity Hackathon 2026",
    status: "awarded",
    note: "Silver Medal, Finalist",
    date: "2026",
  },
  {
    name: "TryHackMe: Privilege Escalation",
    issuer: "TryHackMe",
    status: "in-progress",
  },
  {
    name: "Aitech Cybersecurity Training",
    issuer: "Aitech",
    status: "active",
    date: "2024",
  },
];

export const education: Education[] = [
  {
    institution: "Kogi State University",
    field: "Educational Administration & Planning",
  },
];
