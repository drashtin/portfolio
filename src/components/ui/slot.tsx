import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal Slot — merges its props onto a single child element so components
 * can support an `asChild` pattern (e.g. render a Button as an anchor) without
 * pulling in an extra runtime dependency.
 */
export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, className, ...props }, ref) => {
    if (!React.isValidElement(children)) return null;

    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      ...props,
      ...child.props,
      ref,
      className: cn(className, child.props.className),
    });
  },
);
Slot.displayName = "Slot";
