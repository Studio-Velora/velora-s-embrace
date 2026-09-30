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
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 xl:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const link = "link" in service ? service.link : undefined;
  const onderhoudPrijs = "onderhoudPrijs" in service ? service.onderhoudPrijs : undefined;
  return (
    <article className="flex h-full flex-col rounded-3xl border border-ink/10 bg-background/60 p-7 backdrop-blur md:min-h-[560px] md:p-8">
      <div className="md:min-h-[196px]">
        <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {service.blurb}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-start gap-x-3 gap-y-1 md:mt-7">
        <div className="font-display text-4xl leading-none text-ink">{service.price}</div>
        <div className="pt-2 text-sm text-ink-soft">excl. btw</div>
      </div>
      {onderhoudPrijs && <div className="mt-1 text-xs text-ink-soft">{onderhoudPrijs}</div>}

      <ul className="mt-6 grid gap-3 border-t border-ink/10 pt-6 md:mt-7 md:pt-7">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-base text-ink">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {link && (
        <Link
          to={link.to}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          {link.label} &rarr;
        </Link>
      )}

      <div className="min-h-6 flex-1 md:min-h-8" />
      <Link
        to="/pakketten"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-background transition-transform hover:-translate-y-0.5"
      >
        Bekijk pakketten &rarr;
      </Link>
    </article>
  );
}

export function ServiceStackMobile() {
  return null;
}
