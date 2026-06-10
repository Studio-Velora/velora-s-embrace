# Velora — volledige website met all-out scroll-experience

Een complete remake van studiovelora.nl als showcase voor het bureau zelf. Warme editorial look (crème #FBF6EC, zand #F5E6D3, vermillion accent #E94F37, inkt #1A1A1A), serif display + clean sans, en zware scroll-driven animaties op elke sectie.

## Pagina's

```text
/                  Home (long-scroll showcase, alle hoofdsecties)
/portfolio         Case-grid met hover-reveals (placeholders)
/mogelijkheden     Volledig raster van 20+ features
/seo               Diepteverhaal SEO/GEO/AEO
/offerte           Multi-step offerte-formulier
/contact           Bel/WhatsApp/mail + beschikbaarheid
```

Gedeelde header (sticky, met magnetische links + scroll-progressbar) en footer met groot kinetic logo.

## Tech & libraries

- TanStack Start (al aanwezig) + bestaande Tailwind v4 + shadcn-setup.
- Toevoegen: `framer-motion` (scroll-driven motion, layout animations), `lenis` (smooth scroll), `@react-three/fiber` + `@react-three/drei` + `three` (1 WebGL hero-achtergrond met flowing gradient blobs/noise), `embla-carousel-react` (al aanwezig, voor testimonial-marquee).
- Geen externe data — alles statisch in route-files. SEO via `head()` per route.

## Home-secties (in volgorde, met motion-intentie)

1. **Hero** — Fullscreen WebGL gradient mesh (warme crème → vermillion blobs) achter grote serif kop "Digitaal design & development studio". Kop met staggered word-reveal, subkop fade-up, dual CTA met magnetische hover. Pricing-strip onderaan scrollt horizontaal met marquee.
2. **Trust bar** — Auto-scrolling logo-marquee (Stripe, iDEAL, Mollie, Shopify, Wero) — duplex met reverse-direction op hover-pause.
3. **Over ons** — Split-screen pinned: links sticky koptekst die letter-voor-letter highlight bij scroll (à la `Text Highlighter`), rechts feature-bullets die one-by-one inschuiven.
4. **Diensten (3 pakketten)** — Horizontale pinned scroll: 3 grote service-cards komen één voor één in beeld terwijl de pagina horizontaal sleept. Elke card heeft een 3D-tilt op cursor.
5. **Mogelijkheden** — Bento-grid van 20 features. Bij scroll-entry "staggered drop-in"; hover toont micro-icoon-animatie (Lucide icons met scale + color shift).
6. **SEO-sectie** — Parallax: getallen ("01–04") als gigantische outlined cijfers die op andere snelheid bewegen dan de tekst ernaast.
7. **Branding** — Zigzag layout met afwisselende beelden (AI-gegenereerde mockups van logo/visitekaartje/typografie) die op scroll inzoomen.
8. **Werkwijze (6 stappen)** — Verticale tijdlijn met sticky linker kolom (stap-nummer + dag-badge animeert mee) en rechts de stap-content die voorbij scrollt.
9. **Voor wie** — Card-grid met hover-flip (branche-icoon → korte case-tekst).
10. **Testimonials** — Dubbele oneindig-scrollende marquee (richting tegengesteld), star-rating shimmer.
11. **Belofte / garanties** — 4 grote tegels met border-beam effect bij in-view.
12. **FAQ** — Accordion met smooth height-animatie + onderstreping-stroke die meegroeit.
13. **Final CTA** — Grote kinetic typografie "Jouw website kan dit weekend live zijn" (woorden bewegen tegengesteld bij scroll, vermillion accent op hover). CTA-knoppen + WhatsApp/bel-blok.
14. **Footer** — Reusachtig "VELORA" outline-letterwerk dat als de bezoeker scrollt vult van links naar rechts (clip-path stroke fill).

## Globale animatie-laag

- **Smooth scroll** via Lenis op alle routes.
- **Scroll-progressbar** bovenaan (1px vermillion).
- **Custom cursor** (klein vermillion dot + grotere ring met delay; verandert in tekst-label bij hover op cases/links).
- **Section reveals** via `useInView` + `motion` (fade+translate, 60ms stagger).
- **Page transitions** — overlay-curtain (vermillion) die in/uit veegt bij route-change.

## Design tokens (in `src/styles.css`)

```text
--background      oklch warm crème (#FBF6EC)
--surface         zand (#F5E6D3)
--ink             diep zwart (#1A1A1A)
--accent          vermillion (#E94F37)
--accent-glow     mix vermillion + zand
--font-display    "Fraunces" (serif, variable, via <link>)
--font-body       "Inter Tight" of "Geist" (clean sans)
```

Fonts geladen via `<link>` in `__root.tsx` (Google Fonts). Tokens in `@theme` + `@theme inline` voor shadcn-mapping.

## Bestanden die ik aanmaak/wijzig

```text
src/styles.css                      tokens, fonts, utilities
src/routes/__root.tsx               <link> fonts, Lenis provider, cursor, header, footer, scroll-progress
src/routes/index.tsx                Home — alle 14 secties
src/routes/portfolio.tsx
src/routes/mogelijkheden.tsx
src/routes/seo.tsx
src/routes/offerte.tsx              multi-step (project / budget / contact) met react-hook-form + zod, submit toont bevestiging (geen backend)
src/routes/contact.tsx
src/components/site/
  Header.tsx, Footer.tsx, SmoothScroll.tsx, Cursor.tsx, ScrollProgress.tsx,
  HeroWebGL.tsx, Marquee.tsx, ServiceStack.tsx, BentoFeatures.tsx,
  ProcessTimeline.tsx, TestimonialMarquee.tsx, FaqList.tsx, KineticFooter.tsx,
  MagneticButton.tsx, RevealText.tsx, SectionLabel.tsx
src/lib/site-content.ts             alle Nederlandse teksten/lijsten
```

`bun add framer-motion lenis three @react-three/fiber @react-three/drei` vóór ik importeer.

## Out of scope (nu)

- Echte case-foto's (placeholders/AI-mockups; jij vervangt later).
- Backend voor offerte-formulier (submit faked met toast).
- Cookie-banner, blog/CMS, klantportaal-login.
- Pagina-routes /seo-quickscan, /cookies (links blijven; later in te vullen).

## Quality bar

- 60fps op desktop bij scroll (WebGL alleen in hero, rest CSS/SVG transforms).
- Mobile: WebGL vervangen door static gradient; pinned-horizontal wordt stacked-vertical; cursor uit.
- Lighthouse: behouden ≥85 performance ondanks animaties (lazy-load three.js, prefers-reduced-motion respecteren overal).
- Elke route eigen `head()` met unieke title/description/og-tags.
