/**
 * Dekt de zone achter het Dynamic Island / de statusbalk af met de
 * achtergrondkleur. Op iOS Safari tint dit de statusbalk-zone crème, zodat
 * die naadloos aansluit op de header in plaats van de pagina-inhoud te tonen.
 *
 * Let op: `env(safe-area-inset-top)` geeft op sommige toestellen 0px terug,
 * daarom werkt deze afdekking met een vaste hoogte (var(--app-safe-top)) i.p.v.
 * de env()-inset. De hoogte is gelijk aan de top-padding van de header zodat er
 * geen doorzichtig gat boven het logo valt.
 *
 * De z-index staat bewust hoog: iOS Safari tint de statusbalk-zone met de kleur
 * van het BOVENSTE fixed-element op top:0. Dit strookje moet dus boven de
 * ScrollProgress-balk (accent-kleur, z-70) en de grain-overlay (z-60) liggen,
 * anders kan daar bij het scrollen weer een andere kleur doorschijnen.
 */
export function SafeAreaFill() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--app-safe-top)",
        background: "var(--background)",
        zIndex: 9999,
      }}
    />
  );
}
