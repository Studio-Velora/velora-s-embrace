import { createFileRoute, Link } from "@tanstack/react-router";
import { BentoFeatures } from "@/components/site/BentoFeatures";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/mogelijkheden")({
  head: () => ({
    meta: [
      { title: "Mogelijkheden — Studio Velora" },
      {
        name: "description",
        content: "Alles dat we kunnen bouwen: van afspraakmodules tot AI chatbots en klantportalen.",
      },
      { property: "og:title", content: "Mogelijkheden — Studio Velora" },
      { property: "og:description", content: "Een overzicht van features die we toevoegen aan websites en webshops." },
    ],
  }),
  component: Mogelijkheden,
});

function Mogelijkheden() {
  return (
    <article>
      <section className="px-6 pt-40 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Mogelijkheden</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[8rem]">
            <RevealWords text="Alles" />{" "}
            <RevealWords text="mogelijk." />
            <br />
            <span className="italic">
              <RevealWords text="Niets te" wordClassName="text-accent" />
            </span>{" "}
            <span className="italic"><RevealWords text="veel." wordClassName="text-accent" /></span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              Van een eenvoudige contactpagina tot een volledig klantportaal met AI.
              Mis je iets? We bouwen het op maat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <BentoFeatures />
        </div>
      </section>

      <section className="bg-surface px-6 py-32 lg:px-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="font-display text-4xl text-ink md:text-6xl">
            Iets specifieks nodig?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-soft">
            Vertel ons wat je bedrijf nodig heeft. We bouwen het — gewoon zeggen wat het moet doen.
          </p>
          <Link
            to="/offerte"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm text-background hover:bg-accent"
          >
            Bespreek je idee →
          </Link>
        </div>
      </section>
    </article>
  );
}
