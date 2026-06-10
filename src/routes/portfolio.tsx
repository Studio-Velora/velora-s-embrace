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
        content: "Een selectie van projecten die we bouwden voor ondernemers en bedrijven.",
      },
      { property: "og:title", content: "Werk — Studio Velora" },
      { property: "og:description", content: "Cases en projecten van Studio Velora." },
    ],
  }),
  component: Portfolio,
});

const CASES = [
  { name: "Kapsalon Noor", tag: "Website + booking", year: "2025", color: "#E94F37", desc: "Online afspraken, openingstijden en behandelingen — 3× meer aanvragen." },
  { name: "Restaurant Cinco", tag: "Webshop + reserveringen", year: "2025", color: "#1A1A1A", desc: "Menu, reserveringen en bezorging in één moderne site." },
  { name: "Atelier Vorm", tag: "Portfolio + CMS", year: "2024", color: "#F2B07B", desc: "Interactief portfolio voor een interieurontwerper uit Den Haag." },
  { name: "Studio Aurum", tag: "Brand + website", year: "2024", color: "#C8693C", desc: "Complete brand identity en multilingual site voor een coachingpraktijk." },
  { name: "Velo Bikes", tag: "Shopify shop", year: "2024", color: "#1A1A1A", desc: "Volledige Shopify webshop met iDEAL en internationale verzending." },
  { name: "Coach Lieve", tag: "Personal brand", year: "2025", color: "#E94F37", desc: "Een persoonlijke site die past bij haar coaching — warm en helder." },
];

function Portfolio() {
  return (
    <article>
      <section className="px-6 pt-40 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Werk</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[8rem]">
            <RevealWords text="Een greep" />
            <br />
            <span className="italic">
              <RevealWords text="uit ons" wordClassName="text-accent" />
            </span>{" "}
            <RevealWords text="werk." />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              Van lokale ondernemers tot internationale webshops. Hieronder een
              selectie van projecten die we recent live brachten.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-3xl ${i % 3 === 0 ? "md:col-span-2" : ""}`}
            >
              <div
                className="relative aspect-[16/10] overflow-hidden md:aspect-[3/2]"
                style={{ backgroundColor: c.color }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.4), transparent 50%)"
                }} />
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-between p-8 text-background md:p-12"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-background/70">
                    <span>{c.tag}</span>
                    <span>{c.year}</span>
                  </div>
                  <div>
                    <div className="font-display text-4xl md:text-6xl">{c.name}</div>
                    <p className="mt-3 max-w-md text-background/80">{c.desc}</p>
                  </div>
                </motion.div>
                <div className="absolute right-6 top-6 rounded-full bg-background/90 px-3 py-1 text-xs text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  Case in voorbereiding
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <p className="text-ink-soft">Eigen project op het oog?</p>
          <Link
            to="/offerte"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm text-background hover:bg-accent"
          >
            Vraag een offerte aan →
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
