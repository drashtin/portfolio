import { Boxes, Code2, GitBranch, Rocket } from "lucide-react";
import type { GitHubData, Stat } from "@/types";

export const heroStats: Stat[] = [
  { label: "Years Building", value: "2+", icon: Rocket },
  { label: "Projects Shipped", value: "10+", icon: Boxes },
  { label: "Technologies", value: "20+", icon: Code2 },
  { label: "Commits Pushed", value: "1k+", icon: GitBranch },
];

// Fallback data used when the GitHub API is unreachable or rate-limited,
// so the GitHub showcase never renders empty.
export const githubFallback: GitHubData = {
  source: "fallback",
  profile: {
    login: "drashtin",
    name: "Drashtin Navadiya",
    avatarUrl: "https://avatars.githubusercontent.com/u/0?v=4",
    bio: "Full Stack Developer — React, Next.js, Node.js, MongoDB.",
    followers: 0,
    following: 0,
    publicRepos: 12,
    htmlUrl: "https://github.com/drashtin",
    company: "Shranam Info",
    location: "Surat, Gujarat, India",
  },
  repos: [
    {
      id: 1,
      name: "project-management-system",
      description: "PMS with employee, project, leave and finance modules.",
      htmlUrl: "https://github.com/drashtin",
      homepage: null,
      language: "TypeScript",
      stargazersCount: 0,
      forksCount: 0,
      topics: ["nextjs", "tailwindcss", "dashboard"],
      updatedAt: "2025-01-01T00:00:00Z",
    },
    {
      id: 2,
      name: "geekofy-marketplace",
      description: "US local service marketplace with dual dashboards.",
      htmlUrl: "https://github.com/drashtin",
      homepage: null,
      language: "JavaScript",
      stargazersCount: 0,
      forksCount: 0,
      topics: ["nextjs", "marketplace", "nodejs"],
      updatedAt: "2024-11-01T00:00:00Z",
    },
    {
      id: 3,
      name: "imerzn-travel",
      description: "Travel booking platform with Stripe payment flow.",
      htmlUrl: "https://github.com/drashtin",
      homepage: null,
      language: "JavaScript",
      stargazersCount: 0,
      forksCount: 0,
      topics: ["react", "express", "mysql", "stripe"],
      updatedAt: "2024-09-01T00:00:00Z",
    },
  ],
  languages: [
    { name: "JavaScript", percentage: 42 },
    { name: "TypeScript", percentage: 33 },
    { name: "CSS", percentage: 15 },
    { name: "HTML", percentage: 10 },
  ],
  totalStars: 0,
};
