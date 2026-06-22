"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { SpotlightCard } from "@/components/common/spotlight-card";
import { ContactForm } from "@/components/contact/contact-form";
import { socialLinks, locationLink, profile } from "@/data/profile";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Contact() {
  const channels = [...socialLinks, locationLink];

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">great</span>
            </>
          }
          description="Have a role, a project, or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: channels */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <motion.div variants={fadeUp}>
              <SpotlightCard className="p-6">
                <h3 className="text-lg font-bold text-foreground">
                  Reach me directly
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Based in {profile.location} — working with clients worldwide.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/15 to-secondary/15 text-accent">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs uppercase tracking-wide text-muted">
                          {c.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-foreground">
                          {c.handle}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </a>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SpotlightCard glow="secondary" className="p-6 sm:p-8">
              <ContactForm />
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
