import {
  Boxes,
  Code2,
  Database,
  Plug,
  Server,
  Wrench,
} from "lucide-react";
import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Crafting fast, accessible, pixel-perfect interfaces.",
    icon: Code2,
    accent: "accent",
    skills: [
      { name: "React.js", level: "Expert", proficiency: 94 },
      { name: "Next.js", level: "Expert", proficiency: 92 },
      { name: "JavaScript", level: "Expert", proficiency: 93 },
      { name: "TypeScript", level: "Advanced", proficiency: 85 },
      { name: "Tailwind CSS", level: "Expert", proficiency: 92 },
      { name: "HTML5", level: "Expert", proficiency: 96 },
      { name: "CSS3", level: "Expert", proficiency: 94 },
      { name: "Bootstrap", level: "Advanced", proficiency: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Designing reliable services and clean REST APIs.",
    icon: Server,
    accent: "secondary",
    skills: [
      { name: "Node.js", level: "Advanced", proficiency: 88 },
      { name: "Express.js", level: "Advanced", proficiency: 87 },
      { name: "REST APIs", level: "Expert", proficiency: 90 },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Modeling data for performance and integrity.",
    icon: Database,
    accent: "accent",
    skills: [
      { name: "MongoDB", level: "Advanced", proficiency: 88 },
      { name: "MySQL", level: "Advanced", proficiency: 84 },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Wiring third-party APIs and payment flows.",
    icon: Plug,
    accent: "secondary",
    skills: [
      { name: "Stripe", level: "Advanced", proficiency: 86 },
      { name: "Google Maps API", level: "Advanced", proficiency: 85 },
      { name: "Google Calendar API", level: "Advanced", proficiency: 82 },
      { name: "Google Sheets API", level: "Proficient", proficiency: 80 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Shipping with version control and collaboration.",
    icon: Wrench,
    accent: "accent",
    skills: [
      { name: "Git", level: "Advanced", proficiency: 88 },
      { name: "GitHub", level: "Advanced", proficiency: 88 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Building clean, scalable, maintainable systems.",
    icon: Boxes,
    accent: "secondary",
    skills: [
      { name: "Clean Architecture", level: "Advanced", proficiency: 86 },
      { name: "Responsive Design", level: "Expert", proficiency: 93 },
      { name: "Scalable Web Apps", level: "Advanced", proficiency: 88 },
    ],
  },
];

// Flat marquee list of core technologies for the hero floating icons / ticker.
export const coreTech: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Stripe",
  "REST APIs",
  "Google APIs",
  "Git",
];
