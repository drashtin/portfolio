"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/use-scroll-position";

/** Floating button that appears after scrolling and returns to the top. */
export function BackToTop() {
  const show = useScrolled(600);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
          className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-foreground shadow-glow backdrop-blur-xl transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
