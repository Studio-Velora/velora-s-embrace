import { type ReactNode } from "react";

type Props = {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
};

export function Marquee({
  items,
  duration = 40,
  reverse = false,
  className,
  itemClassName,
}: Props) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflowX: "clip" }} className={`marquee-pause group relative ${className ?? ""}`}>
      <div
        className={`flex w-max gap-12 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((it, i) => (
          <div key={i} className={`shrink-0 ${itemClassName ?? ""}`}>{it}</div>
        ))}
      </div>
    </div>
  );
}
