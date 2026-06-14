import { SERVICES } from "@/lib/site-content";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function ServiceStack() {
  return (
    <section id="diensten" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft">
          <span className="h-px w-8 bg-ink-soft" /> Diensten
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-background/60 p-8 backdrop-blur">
      <div className="font-display text-5xl text-accent">{service.number}</div>
      <h3 className="mt-4 font-display text-2xl leading-tight text-ink md:text-3xl">
        {service.title}
      </h3>
      <p className="mt-3 text-sm text-ink-soft">{service.blurb}</p>
      <div className="mt-5 flex items-end gap-2">
        <div className="font-display text-3xl text-ink">{service.price}</div>
        <div className="pb-1 text-xs text-ink-soft">excl. btw</div>
      </div>
      <ul className="mt-5 grid gap-2.5 border-t border-ink/10 pt-5">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex-1 min-h-6" />
      <Link
        to="/offerte"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
      >
        Plan een gesprek →
      </Link>
    </article>
  );
}

// Mobiele variant wordt nu door de responsive grid hierboven afgehandeld.
export function ServiceStackMobile() {
  return null;
}
