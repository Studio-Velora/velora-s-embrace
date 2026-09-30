import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const FADE_HOOGTE = 220;

// De site gebruikt oklch()-kleuren; getComputedStyle geeft die soms terug als
// lab(...) i.p.v. rgb(...). Via canvas normaliseren we elke geldige
// CSS-kleurnotatie naar RGB, zodat de donker-check altijd klopt.
let kleurCanvas: HTMLCanvasElement | null = null;
function naarRGB(kleur: string) {
  if (!kleurCanvas) kleurCanvas = document.createElement("canvas");
  kleurCanvas.width = 1;
  kleurCanvas.height = 1;
  const ctx = kleurCanvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return { r: 255, g: 255, b: 255 };
  ctx.fillStyle = kleur;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
  return { r, g, b };
}

function isDonker(kleur: string) {
  const { r, g, b } = naarRGB(kleur);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.3;
}

function pasFadeToe() {
  document.querySelectorAll("[data-section-fade]").forEach((el) => el.remove());

  const main = document.querySelector("main");
  if (!main) return;
  const sections = Array.from(main.querySelectorAll("section")) as HTMLElement[];

  for (let i = 0; i < sections.length - 1; i++) {
    const a = sections[i];
    const b = sections[i + 1];
    const kleurA = getComputedStyle(a).backgroundColor;
    const kleurB = getComputedStyle(b).backgroundColor;
    if (kleurA === kleurB) continue;
    // Geen vervaging rond de donkere (bg-ink) secties — daar moet de
    // overgang scherp blijven in plaats van doorlopen in de kleur.
    if (isDonker(kleurA) || isDonker(kleurB)) continue;

    const overlay = document.createElement("div");
    overlay.setAttribute("data-section-fade", "1");
    Object.assign(overlay.style, {
      position: "absolute",
      left: "0",
      right: "0",
      height: `${FADE_HOOGTE}px`,
      top: `${a.offsetTop + a.offsetHeight - FADE_HOOGTE / 2}px`,
      pointerEvents: "none",
      zIndex: "1",
      background: `linear-gradient(to bottom, ${kleurA}, ${kleurB})`,
    });
    main.appendChild(overlay);
  }
}

/**
 * Laat de overgang tussen secties met een verschillende achtergrondkleur
 * vloeiend in elkaar overlopen, behalve rond de donkere (bg-ink) secties.
 */
export function SectionFade() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const id = window.setTimeout(pasFadeToe, 150);
    window.addEventListener("resize", pasFadeToe);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", pasFadeToe);
      document.querySelectorAll("[data-section-fade]").forEach((el) => el.remove());
    };
  }, [pathname]);

  return null;
}
