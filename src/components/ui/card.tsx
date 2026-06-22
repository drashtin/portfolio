import * as React from "react";
import { cn } from "@/lib/utils";

/** Glassmorphism card surface used across sections. */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl shadow-card",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
