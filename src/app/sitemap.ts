import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "",
    "#about",
    "#skills",
    "#experience",
    "#projects",
    "#github",
    "#contact",
  ];

  return sections.map((s) => ({
    url: `${siteUrl}/${s}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.7,
  }));
}
