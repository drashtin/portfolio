"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CreditCard,
  Database,
  Layout,
  MapPin,
  Server,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "Responsive, accessible UIs in React & Next.js with Tailwind.",
  },
  {
    icon: Server,
    title: "Backend & REST APIs",
    desc: "Reliable Node.js and Express services with clean contracts.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Modeling data in MongoDB and MySQL for scale and integrity.",
  },
  {
    icon: MapPin,
    title: "Google APIs",
    desc: "Maps, Calendar and Sheets integrations in production apps.",
  },
  {
    icon: CreditCard,
    title: "Stripe Integration",
    desc: "End-to-end payment flows with secure checkout.",
  },
  {
    icon: Boxes,
    title: "Clean Architecture",
    desc: "Maintainable, scalable codebases built to last.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Turning ideas into{" "}
              <span className="text-gradient">production-ready</span> products
            </>
          }
          description="A developer who's equally comfortable shaping a pixel and designing an API."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Narrative */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-pretty text-lg leading-relaxed text-foreground/90"
            >
              {profile.summary}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-pretty leading-relaxed text-muted"
            >
              At{" "}
              <span className="font-semibold text-accent">Shranam Info</span>, I
              work across the full stack — owning features from database schema
              to the final interaction. I care about clean architecture, fast
              load times, and interfaces that feel effortless to use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { k: "Based in", v: "Surat, India" },
                { k: "Focus", v: "Full Stack Web" },
                { k: "Open to", v: "Freelance & Full-time" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-wide text-muted">
                    {item.k}
                  </p>
                  <p className="mt-0.5 font-semibold text-foreground">
                    {item.v}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Pillars grid */}
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <Card className="group h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-accent/15 to-secondary/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
