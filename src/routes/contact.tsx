import { createFileRoute } from "@tanstack/react-router";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/Section";
import { Magnetic } from "@/components/site/Magnetic";
import { CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Studio Velora" },
      {
        name: "description",
        content: "Bel, mail of WhatsApp ons. We denken vrijblijvend met je mee — zonder verkooppraatjes.",
      },
      { property: "og:title", content: "Contact — Studio Velora" },
      { property: "og:description", content: "Bereik Studio Velora via telefoon, WhatsApp of e-mail." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <article>
      <section className="px-6 pt-40 pb-20 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-6 font-display text-6xl leading-[1.02] text-ink md:text-[8rem]">
            <RevealWords text="Liever even" />
            <br />
            <span className="italic">
              <RevealWords text="sparren?" wordClassName="text-accent" />
            </span>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-lg text-ink-soft">
              Geen idee wat het beste past? Bel of WhatsApp ons gerust. We denken
              vrijblijvend met je mee — zonder verkooppraatjes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-3">
          <ContactCard
            label="Bel direct"
            value={CONTACT.phone}
            href={CONTACT.phoneHref}
            note={`Bereikbaar ${CONTACT.hours}`}
          />
          <ContactCard
            label="WhatsApp"
            value="Stuur ons een bericht"
            href={CONTACT.whatsapp}
            note="Meestal binnen het uur antwoord"
          />
          <ContactCard
            label="E-mail"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
            note="Voor lange vragen of bijlages"
          />
        </div>

        <Reveal className="mt-20">
          <div className="rounded-3xl border border-ink/10 bg-surface p-10 text-center md:p-16">
            <h2 className="font-display text-4xl text-ink md:text-6xl">
              Of vraag direct een <span className="italic text-accent">offerte</span> aan.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              Drie korte stappen en je krijgt binnen 24 uur een persoonlijk plan op maat.
            </p>
            <Magnetic strength={20} className="mt-8 inline-block">
              <a
                href="/offerte"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-4 text-sm text-background"
              >
                <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative">Start je offerte</span>
                <span className="relative">→</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </article>
  );
}

function ContactCard({ label, value, href, note }: { label: string; value: string; href: string; note: string }) {
  return (
    <a
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-background p-8 transition-all hover:-translate-y-1 hover:border-accent"
    >
      <div className="text-xs uppercase tracking-[0.25em] text-ink-soft">{label}</div>
      <div className="mt-4 font-display text-3xl text-ink transition-colors group-hover:text-accent">{value}</div>
      <div className="mt-3 text-sm text-ink-soft">{note}</div>
      <div className="mt-12 text-sm text-ink-soft transition-transform group-hover:translate-x-1">→</div>
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/40" />
    </a>
  );
}
