import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/Section";
import { Magnetic } from "@/components/site/Magnetic";
import { ProgressIndicator } from "@/components/ui/progress-indicator";

export const Route = createFileRoute("/offerte")({
  head: () => ({
    meta: [
      { title: "Offerte aanvragen — Studio Velora" },
      {
        name: "description",
        content: "Vraag een vrijblijvende offerte aan. Geen verplichtingen, gewoon een eerlijk plan.",
      },
      { property: "og:title", content: "Offerte aanvragen — Studio Velora" },
      { property: "og:description", content: "In 3 stappen een vrijblijvende offerte op maat." },
    ],
  }),
  component: Offerte,
});

const PROJECT_TYPES: { label: string; desc: string }[] = [
  { label: "Website", desc: "Professionele zakelijke website — mobiel-vriendelijk en SEO-klaar opgeleverd." },
  { label: "Webshop", desc: "Online verkopen met productbeheer en betaling via iDEAL, Stripe & Mollie." },
  { label: "SEO", desc: "Hoger in Google: zoekwoorden, techniek en lokale vindbaarheid." },
  { label: "Branding", desc: "Logo, kleuren en typografie — een complete, herkenbare huisstijl." },
  { label: "Onderhoud", desc: "Updates, beveiliging en kleine aanpassingen — zonder gedoe." },
  { label: "Iets anders", desc: "Maatwerk of even sparren? Vertel het ons, we denken vrijblijvend mee." },
];
const FEATURES = [
  "Afspraakmodule", "Online reserveringen", "Webshop / betalen", "Reviews",
  "Google Maps", "WhatsApp-knop", "Live chat", "AI chatbot", "Klantportaal",
  "Loginomgeving", "Admin dashboard", "Nieuwsbrief", "Blog / nieuws",
  "Meertalig", "Analytics", "CMS / zelf aanpassen",
];
const TIMELINES = ["Zo snel mogelijk", "Binnen 1 maand", "1–3 maanden", "Verkennend"];

// ⚠️ PLAK HIER JE GRATIS WEB3FORMS ACCESS KEY (via https://web3forms.com — e-mail: shakir.studiovelora@gmail.com)
// Zolang dit niet is ingevuld, werkt het formulier wel maar wordt er geen mail verstuurd.
const WEB3FORMS_KEY = "PLAK-HIER-JE-WEB3FORMS-ACCESS-KEY";

function Offerte() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [data, setData] = useState({
    type: "",
    features: [] as string[],
    timeline: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const total = 4;
  const progress = ((step + 1) / total) * 100;
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    // Scroll zo dat de bovenkant van het vakje (incl. de vraag) onder de
    // vaste header valt — anders dekt de header de eerste regels af.
    const headerOffset = 110;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }, [step]);

  function toggleFeature(f: string) {
    setData((d) => ({
      ...d,
      features: d.features.includes(f)
        ? d.features.filter((x) => x !== f)
        : [...d.features, f],
    }));
  }

  async function submit() {
    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "Nieuwe gespreksaanvraag via studiovelora.nl",
      from_name: "Studio Velora website",
      replyto: data.email,
      Naam: data.name,
      Email: data.email,
      Bedrijf: data.company,
      Project: data.type,
      Functies: data.features.join(", "),
      Termijn: data.timeline,
      Bericht: data.message,
    };
    // Nog geen key ingevuld → toon succes zonder te versturen
    if (WEB3FORMS_KEY.indexOf("PLAK-HIER") === 0) {
      setDone(true);
      return;
    }
    setSending(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setDone(true);
    } catch {
      alert("Er ging iets mis met versturen. Bel of app ons gerust op +31 6 11 27 76 32.");
    } finally {
      setSending(false);
    }
  }

  function next() {
    if (step < total - 1) setStep(step + 1);
    else submit();
  }
  function prev() {
    if (step > 0) setStep(step - 1);
  }

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  const emailError = step === 3 && data.email.length > 0 && !isValidEmail(data.email)
    ? "Vul een geldig e-mailadres in"
    : "";

  const canNext =
    (step === 0 && !!data.type) ||
    step === 1 ||
    (step === 2 && !!data.timeline) ||
    (step === 3 && !!data.name && isValidEmail(data.email));

  return (
    <article>
      <section className="px-6 pt-40 pb-12 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>Offerte</SectionLabel>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            <RevealWords text="Vraag een" />{" "}
            <span className="italic"><RevealWords text="vrijblijvende" wordClassName="text-accent" /></span>
            <br />
            <RevealWords text="offerte aan." />
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Geen verplichtingen, geen verkooppraatjes — gewoon een eerlijk plan.
              Een paar korte stappen, daarna plannen we een gesprek.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-[1100px] space-y-4">

          {/* Stap content — alleen dit blok animeert per stap */}
          <div ref={formRef} className="overflow-hidden rounded-3xl border border-ink/10 bg-background">
            <div className="p-8 md:p-14 min-h-[480px]">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-3xl text-accent-foreground">
                      ✓
                    </div>
                    <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">Dankjewel, {data.name.split(" ")[0] || "vriend"}!</h2>
                    <p className="mt-4 text-ink-soft">
                      We hebben je aanvraag ontvangen en nemen binnen 24 uur contact op.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    {step === 0 && (
                      <div>
                        <h3 className="font-display text-3xl text-ink md:text-4xl">Wat voor project?</h3>
                        <p className="mt-2 text-ink-soft">Kies wat het beste past — we adviseren je graag verder.</p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {PROJECT_TYPES.map((t) => (
                            <button
                              key={t.label}
                              onClick={() => setData({ ...data, type: t.label })}
                              className={`rounded-2xl border p-5 text-left transition-all ${
                                data.type === t.label
                                  ? "border-accent bg-accent/10"
                                  : "border-ink/15 bg-background hover:border-ink"
                              }`}
                            >
                              <div className="font-display text-xl text-ink">{t.label}</div>
                              <div className="mt-1 text-sm text-ink-soft">{t.desc}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div>
                        <h3 className="font-display text-3xl text-ink md:text-4xl">Welke functies wil je?</h3>
                        <p className="mt-2 text-ink-soft">Optioneel — selecteer wat interessant is. Meerdere mogen, we denken graag mee.</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {FEATURES.map((f) => (
                            <Chip key={f} active={data.features.includes(f)} onClick={() => toggleFeature(f)}>{f}</Chip>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-10">
                        <div>
                          <h3 className="font-display text-3xl text-ink md:text-4xl">Wanneer wil je live?</h3>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {TIMELINES.map((t) => (
                              <Chip key={t} active={data.timeline === t} onClick={() => setData({ ...data, timeline: t })}>{t}</Chip>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-display text-3xl text-ink md:text-4xl">Vertel ons meer (optioneel)</h3>
                          <textarea
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                            rows={5}
                            placeholder="Wat moet de site doen? Heb je voorbeelden of inspiratie?"
                            className="mt-4 w-full resize-none rounded-2xl border border-ink/15 bg-surface/30 p-4 text-ink outline-none focus:border-accent"
                          />
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-6">
                        <h3 className="font-display text-3xl text-ink md:text-4xl">Waar bereiken we je?</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <Field label="Naam *" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                          <Field label="E-mail *" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} error={emailError} />
                          <div className="md:col-span-2">
                            <Field label="Bedrijf (optioneel)" value={data.company} onChange={(v) => setData({ ...data, company: v })} />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Progress + navigatie — buiten de animerende kaart, altijd vloeiend */}
          {!done && (
            <div className="rounded-3xl border border-ink/10 bg-background p-6 md:p-8">
              <ProgressIndicator
                step={step + 1}
                total={total}
                canNext={canNext}
                sending={sending}
                onNext={next}
                onPrev={prev}
              />
            </div>
          )}

        </div>
      </section>
    </article>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-ink/15 bg-background text-ink hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, value, onChange, type = "text", error }: { label: string; value: string; onChange: (v: string) => void; type?: string; error?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-xl border bg-surface/30 px-4 py-3 text-ink outline-none focus:border-accent ${error ? "border-red-400" : "border-ink/15"}`}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
