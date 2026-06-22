"use client";

/**
 * Global animated backdrop: grid pattern, drifting gradient orbs and a subtle
 * vignette. Purely decorative and pointer-events-none so it never blocks UI.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* gradient orbs */}
      <div className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/20 opacity-50 blur-[120px] animate-float-slow" />
      <div className="absolute -right-40 top-[20%] h-[34rem] w-[34rem] rounded-full bg-secondary/20 opacity-50 blur-[120px] animate-float" />
      <div className="absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/10 opacity-40 blur-[120px] animate-float-slow" />

      {/* top spotlight */}
      <div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 bg-radial-accent opacity-60" />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
