import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel, ParallaxY } from "@/components/site/Section";
import { SEO_STEPS } from "@/lib/site-content";

export const Route = createFileRoute("/seo")({
  head: () => ({
    meta: [
      { title: "SEO — Studio Velora" },
      {
        name: "description",
        content: "Gevonden worden op Google met SEO, GEO en AEO. Zoekwoordenonderzoek, technische SEO en lokale vindbaarheid.",
      },
      { property: "og:title", content: "SEO — Studio Velora" },
      { property: "og:description", content: "Een stevige SEO-basis bij elke website, met opties voor doorgroeien." },
    ],
  }),
  component: SeoPage,
});

function SeoPage() {
  return (
    <article>
      <section className="px-6 pt-40 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>SEO · GEO · AEO</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[8rem]">
            <RevealWords text="Gevonden" />
            <br />
            <RevealWords text="worden op" />{" "}
            <span className="italic">
              <RevealWords text="Google." wordClassName="text-accent" />
            </span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              Een strakke website zonder bezoekers heeft weinig zin. Met SEO zorgen
              we dat klanten je vinden wanneer ze zoeken — zonder dat je per klik
              betaalt. Bij elke website is een stevige SEO-basis inbegrepen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">
          {SEO_STEPS.map(([n, t, b], i) => (
            <div key={n} className="relative">
              <ParallaxY amount={40 + i * 8}>
                <div className="font-display text-[12rem] leading-none text-accent/20">{n}</div>
              </ParallaxY>
              <Reveal>
                <h3 className="font-display text-3xl text-ink md:text-4xl">{t}</h3>
                <p className="mt-3 max-w-md text-ink-soft">{b}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-32 text-background lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Verder groeien?
            <br />
            <span className="italic text-accent">We helpen.</span>
          </h2>
          <p className="mt-6 max-w-xl text-background/70">
            Doorlopende SEO, content, Search Console-analyses en social ads — we
            denken mee over wat past bij jouw doel en budget.
          </p>
          <Link
            to="/offerte"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm text-accent-foreground"
          >
            Vraag een quickscan →
          </Link>
        </div>
      </section>
    </article>
  );
}
