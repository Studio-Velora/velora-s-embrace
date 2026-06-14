import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";
import { NAV } from "@/lib/site-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pb-3" : "pb-5"
      }`}
      style={{
        // Altijd een dichte achtergrond die tot de fysieke schermtop doorloopt.
        // Samen met viewport-fit=cover vult deze de zone áchter het Dynamic
        // Island, zodat er nooit een gat of doorschijnende strook ontstaat.
        // max() gebruikt op iPhone de Island-hoogte i.p.v. die ERBIJ op te tellen.
        paddingTop: scrolled
          ? "max(0.75rem, env(safe-area-inset-top))"
          : "max(1rem, env(safe-area-inset-top))",
        backgroundColor: "var(--background)",
        borderBottom: scrolled
          ? "1px solid color-mix(in oklab, var(--ink) 8%, transparent)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2" aria-label="Velora home">
          <span className="relative inline-block h-3 w-3 rounded-full bg-accent">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
          </span>
          <span className="font-display text-2xl tracking-tight text-ink">velora</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Magnetic key={n.to} strength={10}>
              <Link
                to={n.to}
                className="group relative px-4 py-2 text-sm text-ink"
                activeProps={{ className: "text-accent" }}
              >
                <span>{n.label}</span>
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </Magnetic>
          ))}
        </nav>

        <Magnetic strength={15} className="hidden md:block">
          <Link
            to="/offerte"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background"
          >
            <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
            <span className="relative">Plan een gesprek</span>
            <span className="relative">→</span>
          </Link>
        </Magnetic>
      </div>
    </motion.header>
  );
}
