"use client";

import { coreTech } from "@/data/skills";

/** Infinite horizontal ticker of core technologies. */
export function TechMarquee() {
  const items = [...coreTech, ...coreTech];

  return (
    <div className="pause-on-hover relative w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-4 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-3 font-mono text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
