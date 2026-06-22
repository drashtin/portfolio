import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    company: "Shranam Info",
    role: "MERN Stack Developer",
    period: "July 2024 — Present",
    current: true,
    location: "Surat, Gujarat, India",
    summary:
      "Designing and shipping production web applications across the stack — from React/Next.js front ends to Node.js and Express services backed by MongoDB and MySQL.",
    highlights: [
      "Built a full Project Management System covering employee management, project tracking, leave management, and a finance overview.",
      "Developed Geekofy, a US-based local service marketplace with dedicated customer and business dashboards, reviews, and service listings.",
      "Engineered Imerzn, a travel booking platform with experience listings, online booking, Stripe-powered payment flows, and role-based access.",
      "Integrated Google Maps, Calendar, and Sheets APIs plus Stripe payments into customer-facing products.",
      "Owned responsive, mobile-first UIs and clean, scalable architecture across multiple concurrent projects.",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Stripe",
    ],
  },
];
