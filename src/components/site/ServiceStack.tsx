import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SERVICES } from "@/lib/site-content";
import { Link } from "@tanstack/react-router";

export function ServiceStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  // 3 cards: translate horizontally on desktop
  const x = useTransform(smooth, [0, 1], ["0%", "-66.66%"]);

  return (
    <section
      ref={ref}
      id="diensten"
      className="relative hidden md:block"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-surface">
        <div className="absolute left-10 top-10 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft">
          <span className="h-px w-8 bg-ink-soft" /> Diensten
        </div>
        <motion.div style={{ x }} className="flex h-full w-[300vw] items-center">
          {SERVICES.map((s) => (
            <div key={s.number} className="flex h-full w-screen items-center justify-center px-12">
              <ServiceCard service={s} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <article className="grid w-full max-w-5xl gap-10 rounded-3xl border border-ink/10 bg-background/60 p-10 backdrop-blur md:grid-cols-[1fr_1.2fr] md:p-14">
      <div>
        <div className="font-display text-7xl text-accent">{service.number}</div>
        <h3 className="mt-6 font-display text-4xl leading-tight text-ink md:text-5xl">
          {service.title}
        </h3>
        <p className="mt-6 max-w-md text-ink-soft">{service.blurb}</p>
        <div className="mt-8 flex items-end gap-3">
          <div className="font-display text-3xl text-ink">{service.price}</div>
          <div className="pb-1 text-xs text-ink-soft">excl. btw</div>
        </div>
        <Link
          to="/offerte"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5"
        >
          Vraag offerte →
        </Link>
      </div>
      <ul className="grid content-center gap-3 border-t border-ink/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-ink">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

// Mobile stacked fallback
export function ServiceStackMobile() {
  return (
    <section className="md:hidden">
      <div className="px-6 pb-12 pt-20">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft">
          <span className="h-px w-8 bg-ink-soft" /> Diensten
        </div>
        <div className="space-y-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
