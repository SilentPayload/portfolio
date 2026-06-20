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
    name: "TechCorp Industries SOC Lab",
    subtitle: "Breach Investigation Training Scenario",
    description:
      "A full four-phase SOC investigation lab set inside a medium-sized tech company that processes payment data. Students investigate slow network performance and fraudulent card charges, working through vulnerability assessment, attack reconstruction, data compromise analysis, and remediation — all built on pre-generated log files in Splunk.",
    tags: ["Splunk", "SOC", "Digital Forensics", "Security Education", "Incident Response"],
  },
  {
    name: "HealthGuard Medical Centre SOC Lab",
    subtitle: "Healthcare Breach Investigation Scenario",
    description:
      "A scenario-based SOC lab set in a hospital environment. Students investigate how confidential patient records were leaked to an anonymous forum and trace suspicious after-hours billing server access. Covers log ingestion, lateral movement analysis, data exfiltration investigation, and remediation across a realistic 10.0.1.0/28 network with domain controller, file server, and patient records database.",
    tags: ["Splunk", "SOC", "Healthcare Security", "Security Education", "Log Analysis"],
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
