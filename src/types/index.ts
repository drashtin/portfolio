import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  handle: string;
}

export type SkillLevel = "Expert" | "Advanced" | "Proficient" | "Familiar";

export interface Skill {
  name: string;
  level: SkillLevel;
  /** 0 - 100 proficiency used for the animated meter */
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "accent" | "secondary";
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current: boolean;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  features: string[];
  stack: string[];
  accent: "accent" | "secondary";
  liveUrl?: string;
  repoUrl?: string;
  highlight?: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  htmlUrl: string;
  company: string | null;
  location: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  topics: string[];
  updatedAt: string;
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  languages: { name: string; percentage: number }[];
  totalStars: number;
  source: "live" | "fallback";
}
