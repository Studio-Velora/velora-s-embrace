import { SERVICES } from "@/lib/site-content";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function ServiceStack() {
  return (
    <section id="diensten" className="bg-surface py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="section-label mb-16 flex items-center gap-4 text-base uppercase tracking-[0.24em] text-ink-soft md:text-lg xl:text-xl">
          <span className="h-px w-10 bg-ink-soft md:w-12" /> Diensten
        </div>
        <div className="grid gap-6 md:grid-cols-3 xl:gap-8">
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
    <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-background/60 p-7 backdrop-blur md:min-h-[640px] md:p-10 xl:p-12">
      <div className="md:min-h-[250px]">
        <div className="font-display text-5xl text-accent md:text-6xl xl:text-7xl">{service.number}</div>
        <h3 className="mt-4 font-display text-3xl leading-tight text-ink md:mt-5 md:min-h-[120px] md:text-4xl xl:text-5xl">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-soft md:mt-5 md:min-h-[96px] xl:text-lg">
          {service.blurb}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-start gap-x-3 gap-y-1 md:mt-8 md:min-h-[140px]">
        <div className="font-display text-4xl leading-none text-ink md:text-4xl xl:text-5xl">{service.price}</div>
        <div className="pt-2 text-sm text-ink-soft">excl. btw</div>
      </div>

      <ul className="mt-6 grid gap-3 border-t border-ink/10 pt-6 md:mt-8 md:min-h-[250px] md:gap-3.5 md:pt-8">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-base text-ink">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="min-h-6 flex-1 md:min-h-8" />
      <Link
        to="/offerte"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-background transition-transform hover:-translate-y-0.5 md:px-8 md:py-5"
      >
        Plan een gesprek &rarr;
      </Link>
    </article>
  );
}

export function ServiceStackMobile() {
  return null;
}
