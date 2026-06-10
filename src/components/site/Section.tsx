import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft">
      <span className="h-px w-8 bg-ink-soft" />
      {children}
    </div>
  );
}

export function ParallaxY({
  children,
  amount = 80,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
