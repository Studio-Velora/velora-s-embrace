import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label flex items-center gap-4 text-base uppercase tracking-[0.24em] text-ink-soft md:text-lg xl:text-xl">
      <span className="h-px w-10 bg-ink-soft md:w-12" />
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
