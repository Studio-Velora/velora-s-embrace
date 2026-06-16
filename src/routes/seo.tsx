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
    links: [{ rel: "canonical", href: "https://studiovelora.nl/seo" }],
  }),
  component: SeoPage,
});

function SeoPage() {
  return (
    <article>
      <section className="px-6 pt-40 pb-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>SEO · GEO · AEO</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[8rem] xl:text-[9rem] 2xl:text-[10rem]">
            <RevealWords text="Gevonden" />{" "}
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
              betaalt. En omdat steeds meer mensen zoeken via AI, richten we je site
              ook in op GEO en AEO: vindbaar in ChatGPT, Perplexity en Google's
              AI-overzichten. Bij elke website is een stevige basis inbegrepen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2">
          {SEO_STEPS.map(([n, t, b], i) => (
            <div key={n} className="relative overflow-hidden">
              <ParallaxY amount={40 + i * 8}>
                <div className="absolute -top-6 left-0 select-none font-display text-[8rem] leading-none text-accent/15 md:text-[10rem]">{n}</div>
              </ParallaxY>
              <Reveal className="relative pt-14">
                <h3 className="font-display text-2xl text-ink md:text-3xl">{t}</h3>
                <p className="mt-2 text-ink-soft">{b}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>Zoeken verandert</SectionLabel>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            Niet alleen Google.{" "}
            <br />
            <span className="italic text-accent">Ook AI.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-ink-soft">
            Steeds meer mensen stellen hun vraag aan ChatGPT, Perplexity of Google's
            AI-overzichten in plaats van te scrollen door zoekresultaten. Wij zorgen
            dat jouw bedrijf ook dáár wordt gevonden en aanbevolen — niet alleen in de
            klassieke zoekresultaten.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["SEO", "Search Engine Optimization", "Hoog in de klassieke zoekresultaten van Google, zonder per klik te betalen."],
              ["GEO", "Generative Engine Optimization", "Genoemd en aanbevolen worden in antwoorden van AI zoals ChatGPT en Perplexity."],
              ["AEO", "Answer Engine Optimization", "Direct als antwoord verschijnen op concrete vragen — in featured snippets en AI-overzichten."],
            ].map(([abbr, full, body]) => (
              <Reveal key={abbr}>
                <div className="h-full rounded-2xl border border-ink/10 bg-surface/40 p-8">
                  <div className="font-display text-3xl text-ink">{abbr}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ink-soft">{full}</div>
                  <p className="mt-4 text-ink-soft">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-[2.5rem] bg-ink px-8 py-24 text-background md:px-16">
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl xl:text-8xl">
              Verder groeien?{" "}
              <br />
              <span className="italic text-accent">We helpen.</span>
            </h2>
            <p className="mt-6 max-w-xl text-background/70">
              Doorlopende SEO, content, Search Console-analyses en social ads — we
              denken mee over wat past bij jouw doel en budget.
            </p>
            <Link
              to="/offerte"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-5 text-base font-semibold text-accent-foreground"
            >
              Vraag een quickscan →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
