import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "0% 50%", top: "env(safe-area-inset-top, 0px)" }}
      className="fixed inset-x-0 z-[70] h-[2px] bg-accent"
      aria-hidden
    />
  );
}
