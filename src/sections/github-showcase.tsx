"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  GitFork,
  Github,
  Star,
  Users,
  BookMarked,
} from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { formatCompact } from "@/lib/utils";
import { profile } from "@/data/profile";
import type { GitHubData } from "@/types";

export function GitHubShowcase({ data }: { data: GitHubData }) {
  const stats = [
    {
      label: "Repositories",
      value: formatCompact(data.profile.publicRepos),
      icon: BookMarked,
    },
    { label: "Followers", value: formatCompact(data.profile.followers), icon: Users },
    { label: "Total Stars", value: formatCompact(data.totalStars), icon: Star },
    { label: "Following", value: formatCompact(data.profile.following), icon: Users },
  ];

  return (
    <section id="github" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub Showcase"
          title={
            <>
              Building in the <span className="text-gradient">open</span>
            </>
          }
          description="A live look at my open-source activity, most-used languages and featured repositories."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: profile + stats + languages */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SpotlightCard className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-secondary/20 text-accent">
                    <Github className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-foreground">
                      {data.profile.name ?? profile.name}
                    </p>
                    <a
                      href={data.profile.htmlUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-sm text-accent hover:underline"
                    >
                      @{data.profile.login}
                    </a>
                  </div>
                </div>
                {data.profile.bio && (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {data.profile.bio}
                  </p>
                )}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <s.icon className="h-4 w-4 text-accent" />
                      <p className="mt-2 text-lg font-bold text-foreground">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeUp}>
              <SpotlightCard glow="secondary" className="p-6">
                <h3 className="font-semibold text-foreground">
                  Most Used Technologies
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {data.languages.map((lang, i) => (
                    <div key={lang.name}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground/90">
                          {lang.name}
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>

          {/* Right: featured repos */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <motion.h3
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-wide text-muted"
            >
              Featured Repositories
            </motion.h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  variants={fadeUp}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                      <BookMarked className="h-4 w-4 text-accent" />
                      {repo.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">
                    {repo.description ?? "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {repo.stargazersCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {repo.forksCount}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={fadeUp} className="pt-2">
              <Button asChild variant="outline">
                <a href={data.profile.htmlUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> View full GitHub profile
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {data.source === "fallback" && (
          <p className="mt-6 text-center text-xs text-muted/60">
            Showing curated highlights — live GitHub data temporarily unavailable.
          </p>
        )}
      </div>
    </section>
  );
}
