import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/Section";
import { Magnetic } from "@/components/site/Magnetic";

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

const PROJECT_TYPES = ["Website", "Webshop", "Branding", "Onderhoud", "Iets anders"];
const BUDGETS = ["< €1.000", "€1.000 – €2.500", "€2.500 – €5.000", "€5.000+"];
const TIMELINES = ["Zo snel mogelijk", "Binnen 1 maand", "1–3 maanden", "Verkennend"];

function Offerte() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    type: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const total = 3;
  const progress = ((step + 1) / total) * 100;

  function next() {
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  }
  function prev() {
    if (step > 0) setStep(step - 1);
  }

  const canNext =
    (step === 0 && data.type && data.budget) ||
    (step === 1 && data.timeline) ||
    (step === 2 && data.name && data.email);

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
              Drie korte stappen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-background">
            {/* progress */}
            <div className="h-1 bg-ink/10">
              <motion.div
                className="h-full bg-accent"
                animate={{ width: done ? "100%" : `${progress}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="p-8 md:p-14">
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
                    <div className="mb-6 text-xs uppercase tracking-[0.25em] text-ink-soft">
                      Stap {step + 1} van {total}
                    </div>

                    {step === 0 && (
                      <div className="space-y-10">
                        <div>
                          <h3 className="font-display text-3xl text-ink md:text-4xl">Wat voor project?</h3>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {PROJECT_TYPES.map((t) => (
                              <Chip key={t} active={data.type === t} onClick={() => setData({ ...data, type: t })}>{t}</Chip>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-display text-3xl text-ink md:text-4xl">Wat is je budget?</h3>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {BUDGETS.map((b) => (
                              <Chip key={b} active={data.budget === b} onClick={() => setData({ ...data, budget: b })}>{b}</Chip>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 1 && (
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

                    {step === 2 && (
                      <div className="space-y-6">
                        <h3 className="font-display text-3xl text-ink md:text-4xl">Waar bereiken we je?</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <Field label="Naam *" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                          <Field label="E-mail *" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
                          <div className="md:col-span-2">
                            <Field label="Bedrijf (optioneel)" value={data.company} onChange={(v) => setData({ ...data, company: v })} />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {!done && (
                <div className="mt-12 flex items-center justify-between border-t border-ink/10 pt-6">
                  <button
                    onClick={prev}
                    disabled={step === 0}
                    className="text-sm text-ink-soft transition-colors hover:text-ink disabled:opacity-30"
                  >
                    ← Vorige
                  </button>
                  <Magnetic strength={15}>
                    <button
                      onClick={next}
                      disabled={!canNext}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-sm text-background disabled:opacity-30"
                    >
                      <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
                      <span className="relative">{step === total - 1 ? "Verstuur" : "Volgende"}</span>
                      <span className="relative">→</span>
                    </button>
                  </Magnetic>
                </div>
              )}
            </div>
          </div>
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

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-surface/30 px-4 py-3 text-ink outline-none focus:border-accent"
      />
    </label>
  );
}
