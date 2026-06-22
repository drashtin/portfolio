"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { skillCategories } from "@/data/skills";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills & Tech"
          title={
            <>
              A toolkit for the <span className="text-gradient">full stack</span>
            </>
          }
          description="From front-of-frontend to database design and third-party integrations — the technologies I reach for to ship reliable products."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((cat) => {
            const isAccent = cat.accent === "accent";
            return (
              <motion.div key={cat.id} variants={fadeUp}>
                <SpotlightCard glow={cat.accent} className="h-full">
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-xl border",
                          isAccent
                            ? "border-accent/30 bg-accent/10 text-accent"
                            : "border-secondary/30 bg-secondary/10 text-secondary",
                        )}
                      >
                        <cat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-muted">{cat.description}</p>
                      </div>
                    </div>

                    <ul className="mt-auto flex flex-col gap-3">
                      {cat.skills.map((skill) => (
                        <li key={skill.name}>
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span className="font-medium text-foreground/90">
                              {skill.name}
                            </span>
                            <span className="font-mono text-xs text-muted">
                              {skill.level}
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className={cn(
                                "h-full rounded-full",
                                isAccent
                                  ? "bg-gradient-to-r from-accent to-sky-300"
                                  : "bg-gradient-to-r from-secondary to-fuchsia-300",
                              )}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
