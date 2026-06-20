import type { Project } from "@/types";

export const projects: Project[] = [
  {
    name: "AutoMitigate",
    subtitle: "AI SOC Triage Dashboard",
    description:
      "Built with Team Ruthless at the ABC / Microsoft / TeKnowledge Cybersecurity Hackathon 2026. Automates SOC incident triage and response, reducing analyst workload on repetitive alert handling.",
    tags: ["SOC", "AI / ML", "Incident Response", "Hackathon"],
    badge: "Silver Medal · Hackathon Finalist",
  },
  {
    name: "FirstBank SOC Training Lab",
    description:
      "Containerized Splunk SOC training environment built with Docker for beginner analysts. Includes a custom Splunk dataset, instructor answer keys, and scenario-based exercises.",
    tags: ["Docker", "Splunk", "SOC", "Security Education"],
    repoUrl: "https://github.com/SilentPayload/FirstBank-Projectlab",
  },
  {
    name: "CryptoPals Cryptography Labs",
    description:
      "Self-directed offensive-cryptography curriculum working through the CryptoPals challenges: ECB detection, XOR, padding oracles, hashing, JWTs, RSA, and ECC.",
    tags: ["Cryptography", "Python", "Offensive Security", "CTF"],
    repoUrl: "https://github.com/SilentPayload/cybersecurity-journey",
  },
];
