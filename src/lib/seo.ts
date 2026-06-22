import { profile } from "@/data/profile";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || profile.url;

export const siteConfig = {
  name: `${profile.name} — ${profile.title}`,
  shortName: profile.name,
  title: `${profile.name} | ${profile.title}`,
  description:
    "Drashtin Navadiya is a MERN Stack Developer in Surat, India, building scalable web applications with MongoDB, Express, React, Node.js and Next.js — including project management systems, marketplaces and travel booking platforms.",
  keywords: [
    "Drashtin Navadiya",
    "MERN Stack Developer",
    "MERN Developer",
    "MongoDB Express React Node Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Express.js",
    "MySQL",
    "Web Developer Surat",
    "Freelance Developer India",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image`,
  locale: "en_US",
};

/** Person + Website structured data (JSON-LD) for rich results. */
export function buildJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    image: `${siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: "Shranam Info",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST API Development",
      "Stripe Integration",
      "Google APIs",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    author: { "@type": "Person", name: profile.name },
  };

  return [person, website];
}
