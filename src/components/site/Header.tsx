import { Link } from "@tanstack/react-router";
import { Magnetic } from "./Magnetic";
import { NAV } from "@/lib/site-content";

export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-background transition-all duration-500 pb-3"
      style={{ paddingTop: "var(--app-safe-top)" }}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="group flex items-center gap-2" aria-label="Velora home">
          <span className="relative inline-block h-3.5 w-3.5 rounded-full bg-accent">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
          </span>
          <span className="font-display text-3xl tracking-tight text-ink">velora</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Magnetic key={n.to} strength={10}>
              <Link
                to={n.to}
                className="group relative px-4 py-2 text-base text-ink"
                activeProps={{ className: "text-accent" }}
              >
                <span>{n.label}</span>
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </Magnetic>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+31611277632"
            className="text-sm text-ink-soft hover:text-accent transition-colors"
          >
            +31 6 11 27 76 32
          </a>
        <Magnetic strength={15}>
          <Link
            to="/offerte"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background"
          >
            <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative">Plan een gesprek</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </Magnetic>
        </div>
      </div>
    </header>
  );
}
