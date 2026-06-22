import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { NavLink, SocialLink } from "@/types";

export const profile = {
  name: "Drashtin Navadiya",
  firstName: "Drashtin",
  title: "MERN Stack Developer",
  location: "Surat, Gujarat, India",
  domain: "drashtin.in",
  url: "https://drashtin.in",
  email: "navadiyadrashtin07@gmail.com",
  githubUsername: "drashtin",
  github: "https://github.com/drashtin",
  linkedin: "https://www.linkedin.com/in/drashtin-navadiya-b02303277",
  resumeUrl: "/Drashtin_Navadiya_Resume.pdf",
  availability: "Available for freelance & full-time roles",
  headline: "MERN Stack Developer Building Modern Web Experiences",
  subheadline:
    "I build scalable web applications using React.js, Next.js, Node.js, MongoDB, and modern web technologies.",
  // Rotating roles used by the hero typing effect
  roles: [
    "MERN Stack Developer",
    "React & Next.js Engineer",
    "Node.js & API Developer",
    "Scalable Web App Builder",
  ],
  summary:
    "I'm a MERN Stack Developer with hands-on experience building scalable web applications end to end — from polished, responsive interfaces in React and Next.js to robust REST APIs and data models in Node.js, Express, MongoDB, and MySQL. I've shipped project management systems, service marketplaces, and travel booking platforms, integrating Google APIs and Stripe along the way, always with a clean, maintainable architecture mindset.",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    handle: profile.email,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
    handle: `@${profile.githubUsername}`,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
    handle: "Drashtin Navadiya",
  },
];

export const locationLink: SocialLink = {
  label: "Location",
  href: "https://maps.google.com/?q=Surat,Gujarat,India",
  icon: MapPin,
  handle: profile.location,
};
