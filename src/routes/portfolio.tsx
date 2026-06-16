import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Werk — Studio Velora" },
      {
        name: "description",
        content: "Een selectie van projecten die we bouwden voor ondernemers — met branche, technieken, doorlooptijd, investering en resultaat.",
      },
      { property: "og:title", content: "Werk — Studio Velora" },
      { property: "og:description", content: "Cases en case studies van Studio Velora." },
    ],
    links: [{ rel: "canonical", href: "https://studiovelora.nl/portfolio" }],
  }),
  component: Portfolio,
});

type Project = {
  initials: string;
  name: string;
  sector: string;
  color: string;
  desc: string;
  tech: string[];
  meta: { live: string; prijs: string; resultaat: string };
};

const PROJECTS: Project[] = [
  {
    initials: "YI",
    name: "Yalcin Interieur",
    sector: "Interieurstylist · Den Haag",
    color: "#E94F37",
    desc: "Een premium portfolio-website die direct klanten trekt — met grote projectfoto's en een strakke galerij.",
    tech: ["HTML/CSS", "GSAP", "SEO", "Lightbox"],
    meta: { live: "9 dagen", prijs: "€750", resultaat: "+3 leads/wk" },
  },
  {
    initials: "AK",
    name: "Appies Kniphof",
    sector: "Barbershop · Leiden",
    color: "#1A1A1A",
    desc: "Een moderne site met online boekingen in plaats van folders en losse WhatsApp-afspraken.",
    tech: ["HTML/CSS", "Booking", "Maps", "SEO"],
    meta: { live: "7 dagen", prijs: "€750", resultaat: "+40% boekingen" },
  },
];

type Study = {
  initials: string;
  name: string;
  sector: string;
  color: string;
  kpis: [string, string][];
  uitdaging: string;
  oplossing: string;
  tech: string[];
};

const STUDIES: Study[] = [
  {
    initials: "YI",
    name: "Yalcin Interieur",
    sector: "Interieurstylist · Den Haag",
    color: "#E94F37",
    kpis: [["9", "Dagen live"], ["+3", "Leads/week"], ["€750", "Investering"]],
    uitdaging:
      "Yalcin werkte puur via mond-tot-mondreclame. Geen website, geen online portfolio — en hij verloor opdrachten aan concurrenten die professioneler oogden op Google.",
    oplossing:
      "Een minimalistische portfolio-website met grote projectfoto's, een scroll-galerij en duidelijke contactmogelijkheden. SEO-geoptimaliseerd op “interieurstylist Den Haag”.",
    tech: ["HTML5/CSS3", "Vanilla JS", "GSAP", "Lightbox", "Schema.org", "Netlify"],
  },
  {
    initials: "AK",
    name: "Appies Kniphof",
    sector: "Barbershop · Leiden",
    color: "#1A1A1A",
    kpis: [["7", "Dagen live"], ["+40%", "Boekingen"], ["€750", "Investering"]],
    uitdaging:
      "Appie wilde stoppen met visitekaartjes en losse WhatsApp-boekingen. Klanten konden hem niet vinden op Google; Instagram trok bezoekers maar converteerde niet.",
    oplossing:
      "Een strakke één-pagina-site met directe koppeling naar een online boekingstool, openingstijden, Maps en reviews. SEO op “barbershop Leiden” — binnen 6 weken op pagina 1.",
    tech: ["HTML5/CSS3", "Vanilla JS", "Calendly", "Maps", "Reviews", "Netlify"],
  },
];

function Portfolio() {
  return (
    <article>
      <section className="px-6 pt-40 pb-16 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>Werk</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[8rem] xl:text-[9rem] 2xl:text-[10rem]">
            <RevealWords text="Websites die" />{" "}
            <br />
            <span className="italic">
              <RevealWords text="resultaat" wordClassName="text-accent" />
            </span>{" "}
            <RevealWords text="leveren." />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              Elk project begint met een goed gesprek en eindigt met een website die
              echt werkt. Per ondernemer: wat we bouwden, hoe lang het duurde, wat
              het kostte en wat het opleverde.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projecten */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-ink/10 bg-surface/40"
            >
              <div
                className="relative flex h-44 items-center justify-center"
                style={{ backgroundColor: p.color }}
              >
                <span className="font-display text-5xl italic text-background">{p.initials}</span>
                <span className="absolute right-5 top-5 rounded-full bg-background/20 px-3 py-1 text-xs uppercase tracking-[0.1em] text-background">
                  Website
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                <div className="mt-1 text-sm text-ink-soft">{p.sector}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-4 border-t border-ink/10 pt-4">
                  <Meta k="Live in" v={p.meta.live} />
                  <Meta k="Investering" v={p.meta.prijs} />
                  <Meta k="Resultaat" v={p.meta.resultaat} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 pb-28 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12">
            <SectionLabel>Case studies</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              Van briefing <span className="italic text-accent">tot lancering.</span>
            </h2>
          </div>
          <div className="space-y-8">
            {STUDIES.map((s) => (
              <Reveal key={s.name}>
                <div className="overflow-hidden rounded-3xl border border-ink/10 bg-surface/40">
                  <div className="grid md:grid-cols-2">
                    <div
                      className="flex min-h-[200px] items-center justify-center"
                      style={{ backgroundColor: s.color }}
                    >
                      <span className="font-display text-7xl italic text-background">{s.initials}</span>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <h3 className="font-display text-3xl text-ink">{s.name}</h3>
                      <div className="mt-1 text-sm text-ink-soft">{s.sector}</div>
                      <div className="mt-6 flex flex-wrap gap-8">
                        {s.kpis.map(([v, k]) => (
                          <div key={k}>
                            <div className="font-display text-3xl text-accent">{v}</div>
                            <div className="text-xs uppercase tracking-[0.1em] text-ink-soft">{k}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-8 border-t border-ink/10 p-8 md:grid-cols-3 md:p-10">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">De uitdaging</h4>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.uitdaging}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">De oplossing</h4>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.oplossing}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Technieken</h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tech.map((t) => (
                          <span key={t} className="rounded-md border border-ink/10 bg-background px-2 py-1 text-xs text-ink">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Prominente CTA — zoals image3 */}
      <section className="px-6 pb-32 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-20 text-center text-accent-foreground md:px-16">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">
              Jouw project hierna?
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
              Klaar voor een website <span className="italic">die werkt?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">
              Vertel ons over je bedrijf en we plannen een vrijblijvend gesprek.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/offerte"
                className="rounded-full bg-background px-8 py-4 text-sm font-semibold text-ink shadow-[0_0_0_6px_rgba(255,255,255,0.18)] transition-transform hover:scale-105"
              >
                Plan een kennismakingsgesprek →
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-accent-foreground/30 px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
              >
                Even sparren
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[0.6rem] uppercase tracking-[0.1em] text-ink-soft">{k}</div>
      <div className="mt-0.5 font-display text-base text-ink">{v}</div>
    </div>
  );
}
