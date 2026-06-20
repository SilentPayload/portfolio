export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  org: string;
  orgUrl?: string;
  period: string;
  bullets: string[];
  disclosureNote?: string;
}

export interface Project {
  name: string;
  subtitle?: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  status: "active" | "in-progress" | "awarded";
  note?: string;
  date?: string;
}

export interface Education {
  institution: string;
  field: string;
  date?: string;
}

export interface WriteupFrontmatter {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  status: "published" | "draft" | "template";
}

export interface WriteupMeta extends WriteupFrontmatter {
  slug: string;
}
