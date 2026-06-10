import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ } from "@/lib/site-content";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-2xl text-ink md:text-3xl">{f.q}</span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-lg transition-all ${
                  isOpen ? "rotate-45 bg-accent text-accent-foreground border-accent" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-ink-soft">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
