"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface/95 shadow-card backdrop-blur-xl"
          >
            {/* header band */}
            <div className="relative h-32 overflow-hidden bg-gradient-to-br from-accent/25 via-surface to-secondary/20">
              <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-40" />
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-background/60 text-foreground backdrop-blur-md transition-colors hover:bg-background"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <Badge variant={project.accent === "accent" ? "accent" : "secondary"}>
                  {project.category}
                </Badge>
                <Badge>{project.year}</Badge>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 font-medium text-accent">{project.tagline}</p>
              <p className="mt-4 leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Key Features
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-foreground/90"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Tech Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="solid">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Visit Live <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button asChild variant="outline">
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" /> Source
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
