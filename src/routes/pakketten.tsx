import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/pakketten")({
  head: () => ({
    meta: [
      { title: "Pakketten & prijzen — Novela Webdesign" },
      {
        name: "description",
        content:
          "Websitepakketten, abonnementen en webshop op een rij. Kies wat bij je past en zie direct de totaalprijs.",
      },
      { property: "og:title", content: "Pakketten & prijzen — Novela Webdesign" },
      {
        property: "og:description",
        content: "Stel je pakket samen: websitebouw, beheer en webshop, met heldere vaste prijzen.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.novelawebdesign.nl/pakketten" }],
  }),
  component: Pakketten,
});

type Pakket = {
  id: string;
  naam: string;
  prijs: number;
  vanaf?: boolean;
  prijsOpAanvraag?: boolean;
  frequentie: "eenmalig" | "maandelijks";
  subtitel: string;
  bullets: string[];
  populair?: boolean;
};

const WEBSITE_PAKKETTEN: Pakket[] = [
  {
    id: "start",
    naam: "Website Start",
    prijs: 450,
    frequentie: "eenmalig",
    subtitel: "Voor zelfstandigen die professioneel online zichtbaar en bereikbaar willen zijn.",
    bullets: [
      "Eén overzichtelijke pagina, met maximaal vijf secties",
      "Verzorgd ontwerp dat aansluit bij jouw onderneming",
      "Geschikt voor mobiel, tablet en desktop",
      "Eén contactformulier",
      "Duidelijke presentatie van jouw diensten en contactgegevens",
      "Technische basis voor vindbaarheid in zoekmachines",
    ],
  },
  {
    id: "groei",
    naam: "Website Groei",
    prijs: 950,
    frequentie: "eenmalig",
    populair: true,
    subtitel: "Voor ondernemers die meer aanvragen, afspraken en offerteverzoeken willen ontvangen.",
    bullets: [
      "Tot vijf pagina's, bijvoorbeeld diensten, projecten en klantbeoordelingen",
      "Onderscheidend ontwerp met passende visuele effecten",
      "Gerichte opbouw die bezoekers helpt om contact op te nemen",
      "Compact stijlboek: kleuren, lettertypen en richtlijnen",
      "Integratie van één bestaande tool, zoals een afsprakenplanner",
      "Tot drie formulieren",
      "Basisoptimalisatie voor zoekmachines en AI-zoekdiensten",
    ],
  },
  {
    id: "organisatie",
    naam: "Website Organisatie",
    prijs: 2950,
    vanaf: true,
    frequentie: "eenmalig",
    subtitel: "Voor organisaties met meerdere diensten, doelgroepen of uitgebreidere informatie.",
    bullets: [
      "Alles uit Website Groei",
      "Tot vijftien pagina's binnen de basisuitvoering",
      "Uitgebreider ontwerp, afgestemd op jouw organisatie",
      "Overzichtelijke navigatie voor verschillende diensten en doelgroepen",
      "Formulieren en workflows afgestemd op jouw werkproces",
      "Koppelingen met de systemen die jouw organisatie gebruikt",
    ],
  },
];

const WEBSHOP_PAKKET: Pakket = {
  id: "webshop",
  naam: "Webshop",
  prijs: 1450,
  vanaf: true,
  frequentie: "eenmalig",
  subtitel: "Een professionele Shopify-webshop waarmee je zelfstandig kunt verkopen en groeien.",
  bullets: [
    "Ontwerp dat bij jouw merk past",
    "Overzichtelijke productpresentatie",
    "Betaal- en verzendinstellingen ingericht",
    "Zelf producten, prijzen en pagina's beheren",
    "Shopify-account op jouw naam — geen lock-in",
  ],
};

const SHOPIFY_VOORDELEN = [
  { titel: "Eenvoudig zelf beheren", tekst: "Producten, prijzen en pagina's pas je zelf aan." },
  { titel: "Gebruiksvriendelijke checkout", tekst: "Klanten rekenen soepel af met bekende betaalmethoden." },
  { titel: "Centraal overzicht", tekst: "Producten, voorraad en bestellingen op één plek." },
  { titel: "Hosting via Shopify", tekst: "Techniek en updates zijn geregeld, zonder omkijken." },
  { titel: "Ruimte om uit te breiden", tekst: "Apps voor reviews, mail en verzending als je wil groeien." },
];

const BEHEER_PAKKETTEN: Pakket[] = [
  {
    id: "beheer-basis",
    naam: "Beheer Basis",
    prijs: 30,
    frequentie: "maandelijks",
    subtitel: "Je website technisch verzorgd en bereikbaar.",
    bullets: [
      "Hosting, SSL en automatische back-ups",
      "Dagelijkse controle en beveiligingsupdates",
      "Google Analytics ingericht",
      "Support per e-mail en telefoon, binnen 1 werkdag",
    ],
  },
  {
    id: "beheer-groei",
    naam: "Beheer Groei",
    prijs: 95,
    frequentie: "maandelijks",
    populair: true,
    subtitel: "Je website actueel houden en gericht verbeteren.",
    bullets: [
      "Alles uit Beheer Basis",
      "24/7 controle en beveiligingsupdates",
      "Maandelijkse SEO- en AI-vindbaarheidscheck",
      "Tot vijf kleine wijzigingen per maand",
    ],
  },
  {
    id: "beheer-premium",
    naam: "Beheer Premium",
    prijs: 295,
    frequentie: "maandelijks",
    subtitel:
      "Intensieve, nauwe samenwerking — korte lijntjes en persoonlijk contact om je resultaten continu te verbeteren.",
    bullets: [
      "Alles uit Beheer Groei",
      "Maandelijkse analyse en gerichte verbeteringen",
      "Teksten en foto's aanpassen op bestaande pagina's",
      "Nauw contact: korte lijntjes en een vast aanspreekpunt",
    ],
  },
];

const WEBSHOP_BEHEER_PAKKET: Pakket = {
  id: "webshop-beheer",
  naam: "Beheer Webshop",
  prijs: 0,
  prijsOpAanvraag: true,
  frequentie: "maandelijks",
  subtitel:
    "Nauwe, doorlopende ondersteuning bij het beheren en laten groeien van je webshop — de omvang bepalen we samen.",
  bullets: [
    "Alles uit Beheer Premium, toegespitst op je webshop",
    "Aanpassingen aan productpagina's, collecties, teksten en afbeeldingen",
    "Afstemming over de winkelervaring en het bestelproces",
    "Nauw contact: korte lijntjes en een vast aanspreekpunt",
  ],
};

const ALLE_PAKKETTEN: Pakket[] = [
  ...WEBSITE_PAKKETTEN,
  WEBSHOP_PAKKET,
  ...BEHEER_PAKKETTEN,
  WEBSHOP_BEHEER_PAKKET,
];

function formatPrijs(p: Pakket) {
  if (p.prijsOpAanvraag) return "Prijs op aanvraag";
  const bedrag = `€${p.prijs.toLocaleString("nl-NL")}`;
  return p.vanaf ? `vanaf ${bedrag}` : bedrag;
}

function AnimatedPrice({ pakket }: { pakket: Pakket }) {
  const mv = useMotionValue(0);
  const [weergave, setWeergave] = useState(0);

  useEffect(() => {
    if (pakket.prijsOpAanvraag) return;
    const controls = animate(mv, pakket.prijs, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setWeergave(Math.round(v)),
    });
    return () => controls.stop();
  }, [pakket.prijs, pakket.prijsOpAanvraag, mv]);

  if (pakket.prijsOpAanvraag) return <>Op aanvraag</>;
  const bedrag = `€${weergave.toLocaleString("nl-NL")}`;
  return <>{pakket.vanaf ? `vanaf ${bedrag}` : bedrag}</>;
}

function scrollNaarWebshop() {
  const lenis = (window as unknown as { lenis?: { scrollTo: (target: string, opts?: { offset?: number }) => void } })
    .lenis;
  if (lenis) {
    lenis.scrollTo("#webshop", { offset: -120 });
  } else {
    document.getElementById("webshop")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Pakketten() {
  const [eenmaligId, setEenmaligId] = useState<string | null>(null);
  const [maandelijksId, setMaandelijksId] = useState<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  function selectEenmalig(id: string) {
    setEenmaligId((cur) => (cur === id ? null : id));
  }
  function selectMaandelijks(id: string) {
    setMaandelijksId((cur) => (cur === id ? null : id));
  }

  const gekozenEenmalig = ALLE_PAKKETTEN.find((p) => p.id === eenmaligId) ?? null;
  const gekozenMaandelijks = ALLE_PAKKETTEN.find((p) => p.id === maandelijksId) ?? null;
  const heeftSelectie = !!gekozenEenmalig || !!gekozenMaandelijks;

  return (
    <article className={heeftSelectie ? "pb-32 md:pb-28" : undefined}>
      {/* Hero */}
      <section className="px-6 pt-40 pb-16 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>Pakketten</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[7rem] xl:text-[8rem]">
            <RevealWords text="Websitepakketten" /> <br />
            <span className="italic">
              <RevealWords text="op maat." wordClassName="text-accent" />
            </span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              Een professionele website die past bij jouw onderneming: van een helder online
              visitekaartje tot een uitgebreide website die klanten aantrekt en jouw
              werkprocessen ondersteunt.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-4 max-w-2xl text-sm text-ink-soft">
              Alle prijzen zijn exclusief btw. Websitebouw is eenmalig; beheer en onderhoud
              zijn maandelijks. Kies hieronder een pakket — je ziet direct de prijs onderaan
              de pagina.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Websitepakketten */}
      <section className="px-6 pb-8 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-6 md:grid-cols-3">
            {WEBSITE_PAKKETTEN.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <PakketCard pakket={p} selected={eenmaligId === p.id} onSelect={() => selectEenmalig(p.id)} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-sm text-ink-soft">
              Een bestaande afsprakenmodule, zoals Calendly, toevoegen? Een eenvoudige
              plaatsing is mogelijk vanaf €85, exclusief eventuele abonnementskosten van de
              aanbieder.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-3 max-w-2xl text-sm text-ink-soft">
              Het aantal formulieren, de workflows en de systeemkoppelingen voor Website
              Organisatie leggen wij vooraf vast in de offerte. Zo weet je precies wat je
              krijgt en wat het kost.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button
              type="button"
              onClick={scrollNaarWebshop}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
            >
              Liever een webshop? Bekijk de webshop-opties ↓
            </button>
          </Reveal>
        </div>
      </section>

      {/* Websiteabonnementen */}
      <section className="bg-surface px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>Websiteabonnementen</SectionLabel>
          <h2 className="mt-6 font-display text-4xl text-ink md:text-6xl">
            Beheer &amp; onderhoud.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BEHEER_PAKKETTEN.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <PakketCard pakket={p} selected={maandelijksId === p.id} onSelect={() => selectMaandelijks(p.id)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Webshop */}
      <section id="webshop" className="scroll-mt-28 px-6 py-20 md:scroll-mt-32 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>Webshop</SectionLabel>
          <h2 className="mt-6 font-display text-4xl text-ink md:text-6xl">
            Zelfstandig verkopen met Shopify.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-start">
            <Reveal>
              <PakketCard pakket={WEBSHOP_PAKKET} selected={eenmaligId === WEBSHOP_PAKKET.id} onSelect={() => selectEenmalig(WEBSHOP_PAKKET.id)} />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-2">
              <div className="h-full rounded-3xl border border-ink/10 bg-surface/40 p-8">
                <p className="text-ink-soft">
                  Wij richten jouw webshop in met een ontwerp op maat, duidelijke producten
                  en de juiste betaal- en verzendinstellingen — omvang en koppelingen leggen
                  wij vooraf vast.
                </p>
                <p className="mt-5 font-display text-xl text-ink">Vijf Shopify-voordelen</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {SHOPIFY_VOORDELEN.map((v) => (
                    <li key={v.titel} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>
                        <span className="block font-semibold text-ink">{v.titel}</span>
                        <span className="text-sm text-ink-soft">{v.tekst}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-2xl border border-ink/10 bg-background p-4 text-sm text-ink-soft">
                  <strong className="font-semibold text-ink">Volledig in eigen beheer.</strong>{" "}
                  Het Shopify-account staat op jouw naam — geen lock-in.
                </p>
                <p className="mt-3 text-xs text-ink-soft">
                  Shopify-abonnement, betaal- en transactiekosten en betaalde thema's/apps
                  niet inbegrepen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Webshopabonnementen */}
      <section className="bg-surface px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <SectionLabel>Webshopabonnementen</SectionLabel>
          <h2 className="mt-6 font-display text-4xl text-ink md:text-6xl">
            Beheer voor je webshop.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[BEHEER_PAKKETTEN[1], BEHEER_PAKKETTEN[2], WEBSHOP_BEHEER_PAKKET].map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <PakketCard pakket={p} selected={maandelijksId === p.id} onSelect={() => selectMaandelijks(p.id)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meerwerk */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-ink/10 bg-background p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl text-ink md:text-3xl">Aanvullende werkzaamheden</h3>
              <div className="font-display text-3xl text-ink">
                €85<span className="text-base text-ink-soft"> /uur</span>
              </div>
            </div>
            <p className="mt-4 text-ink-soft">
              Voor werkzaamheden buiten het gekozen pakket ontvang je vooraf een inschatting.
              Wij voeren meerwerk alleen uit na jouw akkoord.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Nieuwe pagina's, nieuwe functionaliteiten, uitgebreide koppelingen en een
              volledig herontwerp vallen buiten kleine onderhoudswijzigingen. Externe
              abonnementen en licenties worden afzonderlijk vermeld.
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              Optimalisatie is gericht op betere vindbaarheid en conversie; specifieke
              posities, vermeldingen in AI-antwoorden of aantallen klanten worden niet
              gegarandeerd.
            </p>
          </div>
        </div>
      </section>

      <PrijsBalk
        eenmalig={gekozenEenmalig}
        maandelijks={gekozenMaandelijks}
        detailsOpen={detailsOpen}
        onToggleDetails={() => setDetailsOpen((v) => !v)}
        onRemove={(freq) => (freq === "eenmalig" ? setEenmaligId(null) : setMaandelijksId(null))}
      />
    </article>
  );
}

function PakketCard({
  pakket,
  selected,
  onSelect,
  compact,
}: {
  pakket: Pakket;
  selected: boolean;
  onSelect: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative flex h-full w-full flex-col rounded-3xl border-2 p-7 text-left transition-all duration-300 md:p-8 ${
        selected
          ? "border-accent bg-accent/5 shadow-lg shadow-accent/15"
          : "border-ink/10 bg-background hover:border-ink/30"
      }`}
    >
      {pakket.populair && (
        <span className="absolute -top-3 left-7 rounded-full bg-ink px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-background">
          Populairste keuze
        </span>
      )}

      <h3 className="font-display text-2xl text-ink md:text-3xl">{pakket.naam}</h3>
      <p className="mt-2 text-sm italic text-ink-soft">{pakket.subtitel}</p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="font-display text-4xl text-ink">
          {formatPrijs(pakket)}
          {!pakket.prijsOpAanvraag && pakket.frequentie === "maandelijks" && (
            <span className="text-lg text-ink-soft">/maand</span>
          )}
        </span>
        {!pakket.prijsOpAanvraag && pakket.frequentie === "eenmalig" && (
          <span className="text-sm text-ink-soft">eenmalig</span>
        )}
      </div>

      <ul className={`mt-6 space-y-2.5 border-t border-ink/10 pt-6 ${compact ? "text-sm" : ""}`}>
        {pakket.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-ink-soft">
            <span
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                selected ? "bg-accent" : "bg-ink/30"
              }`}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />

      <span
        className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
          selected
            ? "bg-accent text-accent-foreground"
            : "bg-ink/5 text-ink group-hover:bg-ink group-hover:text-background"
        }`}
      >
        {selected ? "Geselecteerd ✓" : "Kies dit pakket"}
      </span>
    </button>
  );
}

function PrijsBalk({
  eenmalig,
  maandelijks,
  detailsOpen,
  onToggleDetails,
  onRemove,
}: {
  eenmalig: Pakket | null;
  maandelijks: Pakket | null;
  detailsOpen: boolean;
  onToggleDetails: () => void;
  onRemove: (freq: "eenmalig" | "maandelijks") => void;
}) {
  const zichtbaar = !!eenmalig || !!maandelijks;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-background/95 backdrop-blur transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        zichtbaar ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!zichtbaar}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {detailsOpen && zichtbaar && (
          <div className="space-y-3 border-b border-ink/10 py-5">
            {eenmalig && <PrijsRegel label="Eenmalig" pakket={eenmalig} onRemove={() => onRemove("eenmalig")} />}
            {maandelijks && (
              <PrijsRegel label="Per maand" pakket={maandelijks} onRemove={() => onRemove("maandelijks")} />
            )}
            <p className="text-xs text-ink-soft">Alle prijzen excl. btw.</p>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex flex-wrap items-center gap-6">
            {eenmalig && (
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft">Eenmalig</div>
                <div className="font-display text-xl tabular-nums text-ink">
                  <AnimatedPrice pakket={eenmalig} />
                </div>
              </div>
            )}
            {maandelijks && (
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft">Per maand</div>
                <div className="font-display text-xl tabular-nums text-ink">
                  <AnimatedPrice pakket={maandelijks} />
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleDetails}
              className="flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              Overzicht
              <span className={`inline-block transition-transform duration-300 ${detailsOpen ? "rotate-180" : ""}`}>
                ⌄
              </span>
            </button>
            <Link
              to="/offerte"
              search={{ pakket: eenmalig?.naam, beheer: maandelijks?.naam }}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent"
            >
              Plan een gesprek &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrijsRegel({ label, pakket, onRemove }: { label: string; pakket: Pakket; onRemove: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <div>
        <span className="text-ink-soft">{label}: </span>
        <span className="font-medium text-ink">{pakket.naam}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-medium tabular-nums text-ink">
          <AnimatedPrice pakket={pakket} />
        </span>
        <button type="button" onClick={onRemove} className="text-ink-soft transition-colors hover:text-accent">
          Verwijderen
        </button>
      </div>
    </div>
  );
}
