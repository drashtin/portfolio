"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Braces,
  Database,
  GitBranch,
  Server,
  Terminal,
} from "lucide-react";

/** Syntax-colored faux code shown inside the floating editor window. */
const codeLines: { tokens: { text: string; className: string }[] }[] = [
  {
    tokens: [
      { text: "const", className: "text-secondary" },
      { text: " developer", className: "text-foreground" },
      { text: " =", className: "text-muted" },
      { text: " {", className: "text-muted" },
    ],
  },
  {
    tokens: [
      { text: "  name", className: "text-accent" },
      { text: ": ", className: "text-muted" },
      { text: "'Drashtin Navadiya'", className: "text-emerald-300" },
      { text: ",", className: "text-muted" },
    ],
  },
  {
    tokens: [
      { text: "  role", className: "text-accent" },
      { text: ": ", className: "text-muted" },
      { text: "'Full Stack Developer'", className: "text-emerald-300" },
      { text: ",", className: "text-muted" },
    ],
  },
  {
    tokens: [
      { text: "  stack", className: "text-accent" },
      { text: ": [", className: "text-muted" },
      { text: "'React'", className: "text-emerald-300" },
      { text: ", ", className: "text-muted" },
      { text: "'Next.js'", className: "text-emerald-300" },
      { text: ", ", className: "text-muted" },
      { text: "'Node'", className: "text-emerald-300" },
      { text: "],", className: "text-muted" },
    ],
  },
  {
    tokens: [
      { text: "  ships", className: "text-accent" },
      { text: ": ", className: "text-muted" },
      { text: "() => ", className: "text-secondary" },
      { text: "'scalable apps'", className: "text-emerald-300" },
      { text: ",", className: "text-muted" },
    ],
  },
  {
    tokens: [{ text: "};", className: "text-muted" }],
  },
];

const floatingIcons = [
  { Icon: Atom, label: "React", className: "top-2 -left-6", delay: 0, color: "text-accent" },
  { Icon: Server, label: "Node", className: "top-1/4 -right-8", delay: 0.4, color: "text-emerald-300" },
  { Icon: Database, label: "MongoDB", className: "bottom-10 -left-8", delay: 0.8, color: "text-secondary" },
  { Icon: Braces, label: "TypeScript", className: "-bottom-5 right-6", delay: 1.1, color: "text-accent" },
  { Icon: GitBranch, label: "Git", className: "top-1/2 -left-10", delay: 0.6, color: "text-foreground" },
];

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square max-w-[30rem]">
      {/* glow */}
      <div className="absolute inset-8 rounded-full bg-accent/20 blur-[80px]" />
      <div className="absolute inset-12 rounded-full bg-secondary/20 blur-[80px]" />

      {/* rotating gradient ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[26rem] w-[26rem] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(56,189,248,0.35),transparent_30%,rgba(139,92,246,0.35),transparent_60%)] opacity-60 blur-sm" />
      </div>

      {/* code editor window */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[92%] max-w-[24rem] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/80 shadow-card backdrop-blur-xl">
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted">
              <Terminal className="h-3.5 w-3.5" /> developer.ts
            </span>
          </div>
          {/* code */}
          <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.18, duration: 0.5 }}
                className="flex"
              >
                <span className="mr-4 w-4 select-none text-right text-muted/40">
                  {i + 1}
                </span>
                <span className="whitespace-pre">
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.className}>
                      {t.text}
                    </span>
                  ))}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating tech icons */}
      {floatingIcons.map(({ Icon, label, className, delay, color }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { delay: 1 + delay, duration: 0.5 },
            scale: { delay: 1 + delay, duration: 0.5 },
            y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute ${className} z-20`}
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-surface/80 px-3 py-2 shadow-glow backdrop-blur-xl">
            <Icon className={`h-5 w-5 ${color}`} />
            <span className="font-mono text-xs text-foreground">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
