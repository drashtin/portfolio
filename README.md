# Drashtin Navadiya — Developer Portfolio

A premium, dark-themed developer portfolio built as a high-performance SaaS-style
landing page. Server-rendered, SEO-optimized, and animated.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** + `tailwindcss-animate`
- **Framer Motion** (entrance, scroll & hover animations)
- **Lucide Icons**
- shadcn-style UI primitives (Button, Badge, Card, Slot)

## Features

- Hero with typing effect, animated code-window illustration, floating tech icons & live tech ticker
- About, Skills (animated proficiency meters), Experience timeline, Featured Projects (with details modal)
- **GitHub Showcase** — live profile, repos & language stats via the GitHub API (ISR, hourly revalidate) with graceful fallback
- Working contact form with validation, honeypot & API route
- Scroll progress bar, animated gradient background, smooth scrolling, scroll-spy nav
- SEO: dynamic metadata, Open Graph & Twitter cards, dynamic OG image, JSON-LD (Person + WebSite), sitemap, robots, web manifest, dynamic favicon
- Mobile-first, fully responsive, reduced-motion aware

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

### Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://drashtin.in
GITHUB_TOKEN=        # optional — raises GitHub API rate limit
```

The GitHub showcase works without a token; a token only raises the rate limit.

### Regenerate the résumé PDF

```bash
node scripts/generate-resume.mjs
```

## Project Structure

```
src/
  app/                 # App Router: layout, page, route handlers, SEO files
    api/contact/       # contact form endpoint
    opengraph-image.tsx, icon.tsx, sitemap.ts, robots.ts, manifest.ts
  components/
    ui/                # shadcn-style primitives (button, badge, card, slot)
    common/            # section heading, spotlight card, backgrounds, scroll progress
    hero/ projects/ contact/ layout/   # feature components
  sections/            # page sections (hero, about, skills, experience, projects, github, contact)
  hooks/               # useTypingEffect, useActiveSection, useScrolled
  lib/                 # utils, motion variants, seo config, github fetcher
  data/                # profile, skills, experience, projects, stats (single source of truth)
  types/               # shared TypeScript types
public/                # résumé PDF & static assets
```

## Customizing

All content lives in `src/data/*` — edit those files to update copy, skills,
projects and links without touching components.
