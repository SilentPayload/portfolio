import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    name: "Offensive Security",
    items: [
      "Penetration Testing",
      "Web App Security",
      "Recon",
      "OSINT",
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "GraphQL Testing",
      "Firebase Security Assessment",
      "Bug Bounty",
    ],
  },
  {
    name: "Defensive / SOC",
    items: [
      "Splunk",
      "SIEM",
      "Log Analysis",
      "Incident Response",
      "Digital Forensics (Autopsy)",
      "DLP",
      "Data Classification",
      "Nessus",
      "Vulnerability Assessment",
    ],
  },
  {
    name: "Networking",
    items: [
      "TCP/IP",
      "OSI Model",
      "Cisco Packet Tracer",
      "Wireshark Traffic Analysis",
      "Wi-Fi Handshake Capture",
    ],
  },
  {
    name: "Systems & Tooling",
    items: [
      "Linux (Kali, Parrot, Ubuntu)",
      "Bash",
      "Git / GitHub",
      "Docker",
      "ProjectDiscovery Suite (subfinder, httpx, nuclei)",
      "tmux",
      "Vim",
      "VS Code",
    ],
  },
  {
    name: "Development",
    items: [
      "Python (OOP, automation, scripting)",
      "Laravel / PHP",
      "PostgreSQL / PostGIS",
      "Redis",
      "JavaScript / Next.js",
      "React Native (learning)",
    ],
  },
  {
    name: "Cloud & Infra",
    items: [
      "Firebase",
      "Vercel",
      "Vultr",
      "Cloudflare (DNS / Proxy / WAF)",
      "Ubuntu Server Admin",
    ],
  },
];
