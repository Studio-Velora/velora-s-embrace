import { motion, useTransform, type MotionValue } from "framer-motion";

/**
 * Visuele "bouw" van een website naast de werkwijze-stappen, gekoppeld aan
 * dezelfde scrollYProgress als de tijdlijn: elke fase van het proces krijgt
 * hier zichtbaar element (url, ontwerp, content, revisie, live) dat verschijnt
 * naarmate je verder scrollt door de stappen.
 */
export function ProcessVisual({ progress }: { progress: MotionValue<number> }) {
  const urlOpacity = useTransform(progress, [0.06, 0.16], [0, 1]);
  const heroOpacity = useTransform(progress, [0.22, 0.38], [0, 1]);
  const heroY = useTransform(progress, [0.22, 0.38], [16, 0]);
  const gridOpacity = useTransform(progress, [0.42, 0.6], [0, 1]);
  const gridY = useTransform(progress, [0.42, 0.6], [16, 0]);
  const reviseOpacity = useTransform(progress, [0.66, 0.8], [0, 1]);
  const liveOpacity = useTransform(progress, [0.88, 1], [0, 1]);
  const liveScale = useTransform(progress, [0.88, 1], [0.85, 1]);

  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-surface/40 p-4">
      {/* Browserbalk */}
      <div className="flex items-center gap-2 border-b border-ink/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <div className="ml-2 flex-1 rounded-full bg-background px-3 py-1.5 text-xs text-ink-soft">
          <motion.span style={{ opacity: urlOpacity }}>studiovelora.nl</motion.span>
        </div>
      </div>

      {/* Pagina-inhoud die zich opbouwt */}
      <div className="mt-4 space-y-4">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="space-y-2">
          <div className="h-3 w-2/3 rounded-full bg-ink/15" />
          <div className="h-3 w-1/2 rounded-full bg-accent/50" />
          <div className="mt-2 h-16 rounded-xl bg-background" />
        </motion.div>

        <motion.div style={{ opacity: gridOpacity, y: gridY }} className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative h-14 rounded-lg bg-background">
              <motion.span
                style={{ opacity: i === 1 ? reviseOpacity : 0 }}
                className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-accent"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Live-badge */}
      <motion.div
        style={{ opacity: liveOpacity, scale: liveScale }}
        className="mt-4 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-background"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-sm font-semibold">Live</span>
      </motion.div>
    </div>
  );
}
