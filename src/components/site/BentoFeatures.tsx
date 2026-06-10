import { motion } from "framer-motion";
import { FEATURES } from "@/lib/site-content";

export function BentoFeatures() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
      {FEATURES.map(([title, sub], i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: (i % 10) * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-surface/40 p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <div className="absolute right-3 top-3 text-xs text-ink-soft transition-opacity group-hover:opacity-0">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="flex h-full flex-col justify-end">
            <div className="font-display text-xl leading-tight text-ink transition-colors group-hover:text-accent-foreground">
              {title}
            </div>
            <div className="mt-1 text-xs text-ink-soft transition-colors group-hover:text-accent-foreground/80">
              {sub}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/40" />
        </motion.div>
      ))}
    </div>
  );
}
