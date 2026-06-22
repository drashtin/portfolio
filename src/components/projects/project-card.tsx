"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Folder, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/common/spotlight-card";
import type { Project } from "@/types";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: Props) {
  const isAccent = project.accent === "accent";

  return (
    <motion.article variants={fadeUp}>
      <SpotlightCard glow={project.accent} className="h-full">
        <div className="flex h-full flex-col p-6">
          {/* preview band */}
          <div
            className={cn(
              "relative mb-5 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-white/10",
              isAccent
                ? "bg-gradient-to-br from-accent/20 via-surface to-secondary/10"
                : "bg-gradient-to-br from-secondary/20 via-surface to-accent/10",
            )}
          >
            <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-40" />
            <span className="font-mono text-5xl font-bold text-white/10">
              0{index + 1}
            </span>
            <div
              className={cn(
                "absolute flex h-16 w-16 items-center justify-center rounded-2xl border backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                isAccent
                  ? "border-accent/40 bg-accent/15 text-accent"
                  : "border-secondary/40 bg-secondary/15 text-secondary",
              )}
            >
              <Folder className="h-7 w-7" />
            </div>
            <span className="absolute right-3 top-3">
              <Badge variant={isAccent ? "accent" : "secondary"}>
                {project.category}
              </Badge>
            </span>
          </div>

          <div className="mb-1 flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          <p className="text-sm font-medium text-accent">{project.tagline}</p>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {project.highlight && (
            <p className="mt-3 flex items-start gap-1.5 text-xs text-foreground/80">
              <Sparkle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              {project.highlight}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <button
            onClick={() => onOpen(project)}
            className="group/btn mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent transition-colors hover:text-foreground"
          >
            Project details
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}
