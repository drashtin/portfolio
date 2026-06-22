"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve been{" "}
              <span className="text-gradient">building</span>
            </>
          }
          description="My professional journey shipping real products to real users."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-secondary to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-10"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeUp}
                className="relative pl-12 sm:pl-0"
              >
                {/* node */}
                <span className="absolute left-4 top-1.5 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center sm:left-1/2">
                  <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-accent/60" />
                  <span className="relative h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                </span>

                <div className="sm:w-1/2 sm:pr-10">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl shadow-card transition-all duration-300 hover:border-accent/30">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-accent">{exp.company}</p>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge variant="accent">Current</Badge>
                      )}
                    </div>

                    <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      <span className="font-mono">{exp.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {exp.location}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted">
                      {exp.summary}
                    </p>

                    <ul className="mt-4 flex flex-col gap-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-foreground/85">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
