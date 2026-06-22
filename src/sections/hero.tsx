"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { heroStats } from "@/data/stats";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { HeroIllustration } from "@/components/hero/hero-illustration";
import { TechMarquee } from "@/components/hero/tech-marquee";

export function Hero() {
  const typed = useTypingEffect({ words: [...profile.roles] });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left: copy */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <span className="font-mono text-sm text-accent">
              Hi, I&apos;m {profile.name} 👋
            </span>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Full Stack Developer Building{" "}
              <span className="text-gradient">Modern Web Experiences</span>
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex h-7 items-center font-mono text-base text-muted sm:text-lg"
          >
            <span className="text-accent">&gt;</span>
            <span className="ml-2 text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.resumeUrl} download>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={fadeUp}
            className="mt-2 grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm"
              >
                <dd className="text-xl font-bold text-foreground sm:text-2xl">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-xs text-muted">{stat.label}</dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right: illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* Tech ticker */}
      <div className="absolute inset-x-0 bottom-0">
        <TechMarquee />
      </div>
    </section>
  );
}
