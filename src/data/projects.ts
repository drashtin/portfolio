import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "pms",
    title: "PMS — Project Management System",
    tagline: "Run an entire agency from one dashboard.",
    description:
      "An internal operations platform that unifies people, projects, and finances. Teams track employees, monitor project progress, manage leave requests, and get a real-time finance overview — all behind role-aware access.",
    category: "Internal Platform",
    year: "2025",
    accent: "accent",
    highlight: "Centralizes 4 business workflows into a single source of truth.",
    features: [
      "Employee Management",
      "Project Tracking",
      "Leave Management",
      "Finance Overview",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    slug: "geekofy",
    title: "Geekofy",
    tagline: "A US-based local service marketplace.",
    description:
      "A two-sided marketplace connecting customers with local service businesses. Customers discover and book services while businesses manage listings and reputation — powered by separate, tailored dashboards and a trust-building review system.",
    category: "Marketplace",
    year: "2024",
    accent: "secondary",
    highlight: "Two-sided platform with distinct customer & business experiences.",
    features: [
      "Customer Dashboard",
      "Business Dashboard",
      "Ratings & Reviews",
      "Service Listings",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Google Maps API"],
  },
  {
    slug: "imerzn",
    title: "Imerzn — Travel Deeper",
    tagline: "Travel booking that connects local guides and travelers.",
    description:
      "A travel booking platform where local guides publish authentic experiences and travelers book them online. Includes an end-to-end booking and payment flow with role-based access for guides, travelers, and admins.",
    category: "Booking Platform",
    year: "2024",
    accent: "accent",
    highlight: "End-to-end booking with Stripe payments and role-based access.",
    features: [
      "Experience Listings",
      "Online Booking",
      "Payment Flow",
      "Role-Based Access",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MySQL", "Stripe"],
  },
];
