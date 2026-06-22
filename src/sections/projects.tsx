"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import type { Project } from "@/types";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Selected <span className="text-gradient">work</span>
            </>
          }
          description="Real products I've designed and built — from internal platforms to customer-facing marketplaces and booking systems."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onOpen={setActive}
            />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> See more on GitHub
            </a>
          </Button>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
