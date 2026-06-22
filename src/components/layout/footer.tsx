"use client";

import { ArrowUp, Heart, Sparkles } from "lucide-react";
import { navLinks, profile, socialLinks } from "@/data/profile";

export function Footer() {
  const year = 2026; // build-time constant; update annually

  return (
    <footer className="relative border-t border-white/10 bg-surface/40 backdrop-blur-xl">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#top" className="flex items-center gap-2 font-mono font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-secondary text-accent-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-foreground">
                {profile.firstName}
                <span className="text-accent">.dev</span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {profile.title} crafting scalable, modern web experiences from{" "}
              {profile.location}.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Get in touch
            </h4>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block text-sm text-accent hover:underline"
            >
              {profile.email}
            </a>
            <p className="mt-2 text-sm text-muted">{profile.availability}</p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent"
            >
              Start a conversation →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-muted">
            © {year} {profile.name}. Built with
            <Heart className="h-3.5 w-3.5 text-secondary" /> using Next.js &
            Tailwind.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted transition-all duration-300 hover:border-accent/30 hover:text-accent"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
