import { Marquee } from "./Marquee";
import { FEATURES } from "@/lib/site-content";

function FeatCard({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="w-[240px] rounded-2xl border border-ink/10 border-t-2 border-t-accent bg-surface/40 p-5 transition-colors hover:bg-accent hover:text-accent-foreground">
      <div className="font-display text-lg leading-tight text-ink transition-colors hover:text-accent-foreground">
        {title}
      </div>
      <div className="mt-1 text-xs text-ink-soft">{sub}</div>
    </div>
  );
}

export function BentoFeatures() {
  // Verdeel de mogelijkheden over 3 rijen
  const rows: [string, string][][] = [[], [], []];
  (FEATURES as [string, string][]).forEach((f, i) => {
    rows[i % 3].push(f);
  });

  return (
    <div className="flex flex-col gap-3">
      {rows.map((row, r) => (
        <Marquee
          key={r}
          duration={46 + r * 6}
          // Middelste rij (r === 1) naar links (default), de andere twee naar rechts
          reverse={r !== 1}
          itemClassName=""
          items={row.map(([title, sub]) => (
            <FeatCard key={title} title={title} sub={sub} />
          ))}
        />
      ))}
    </div>
  );
}
