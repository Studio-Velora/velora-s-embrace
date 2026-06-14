import { lazy, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { RevealWords } from "./Reveal";

const HeroWebGL = lazy(() =>
  import("./HeroWebGL").then((m) => ({ default: m.HeroWebGL }))
);

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      {/* WebGL backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        <Suspense fallback={null}>
          <HeroWebGL />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1400px] flex-col justify-between px-6 lg:px-10">
        <div className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-ink-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Studio · Beschikbaar voor nieuwe projecten
          </motion.div>

          <h1 className="mt-8 font-display text-[14vw] leading-[0.92] tracking-tight text-ink md:text-[8.5vw] lg:text-[7.5rem]">
            <RevealWords text="Digitaal design" />
            <br />
            <span className="italic">
              <RevealWords text="& development" wordClassName="text-accent" />
            </span>
            <br />
            <RevealWords text="studio." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg text-ink-soft"
          >
            We helpen ondernemers en bedrijven schaalbare digitale producten bouwen —
            met doordacht design en zorgvuldige ontwikkeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-4"
          >
            <Magnetic strength={20}>
              <Link
                to="/offerte"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-9 py-5 text-base font-semibold text-background"
              >
                <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative">Plan een gesprek</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={15}>
              <Link
                to="/portfolio"
                className="rounded-full border border-ink/20 px-9 py-5 text-base font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background"
              >
                Bekijk ons werk
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 pb-10"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/70 px-4 py-2 shadow-sm">
              <span className="text-ink-soft">Websites</span>
              <strong className="font-semibold text-accent">vanaf €750</strong>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/70 px-4 py-2 shadow-sm">
              <span className="text-ink-soft">Webshops</span>
              <strong className="font-semibold text-accent">vanaf €2.500</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-surface/70 px-4 py-2 text-ink-soft shadow-sm">
              <span className="font-bold text-emerald-600">✓</span> SEO inbegrepen
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
