"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** tailwind color token for the spotlight glow */
  glow?: "accent" | "secondary";
}

/**
 * Glass card that follows the cursor with a soft radial spotlight and a
 * gradient border glow on hover. Pointer math is throttled to rAF.
 */
export function SpotlightCard({
  className,
  children,
  glow = "accent",
  ...props
}: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const frame = React.useRef<number | undefined>(undefined);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${clientX - rect.left}px`);
        el.style.setProperty("--y", `${clientY - rect.top}px`);
      }
      frame.current = undefined;
    });
  };

  const glowColor =
    glow === "accent" ? "rgba(56,189,248,0.18)" : "rgba(139,92,246,0.18)";

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-px backdrop-blur-xl shadow-card transition-all duration-500 hover:border-white/20 hover:shadow-glow",
        className,
      )}
      style={
        {
          "--glow": glowColor,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x) var(--y), var(--glow), transparent 70%)",
        }}
      />
      <div className="relative z-20 h-full rounded-[calc(1rem-1px)]">
        {children}
      </div>
    </div>
  );
}
