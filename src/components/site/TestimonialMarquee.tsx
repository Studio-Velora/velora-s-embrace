import { TESTIMONIALS } from "@/lib/site-content";
import { Marquee } from "./Marquee";

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="flex w-[360px] flex-col gap-4 rounded-2xl border border-ink/10 bg-background p-6 md:w-[440px]">
      <div className="text-accent">★★★★★</div>
      <p className="text-ink">"{t.quote}"</p>
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-ink/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-display text-accent">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-ink">{t.name}</div>
          <div className="text-xs text-ink-soft">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  const half = Math.ceil(TESTIMONIALS.length / 2);
  const a = TESTIMONIALS.slice(0, half).map((t, i) => <Card key={i} t={t} />);
  const b = TESTIMONIALS.slice(half).map((t, i) => <Card key={i} t={t} />);
  return (
    <div className="space-y-6">
      <Marquee items={a} duration={60} />
      <Marquee items={b} duration={75} reverse />
    </div>
  );
}
