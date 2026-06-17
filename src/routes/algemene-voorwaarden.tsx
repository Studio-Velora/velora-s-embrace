import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene Voorwaarden — Studio Velora" },
      { name: "description", content: "De algemene voorwaarden van Studio Velora voor het leveren van design- en developmentdiensten." },
    ],
    links: [{ rel: "canonical", href: "https://studiovelora.nl/algemene-voorwaarden" }],
  }),
  component: AlgemeneVoorwaarden,
});

function AlgemeneVoorwaarden() {
  return (
    <article className="px-6 pb-32 pt-40 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="font-display text-5xl text-ink md:text-6xl">Algemene Voorwaarden</h1>
          <p className="mt-4 text-sm text-ink-faint">Laatst bijgewerkt: juni 2026 · Studio Velora, Den Haag</p>
        </Reveal>

        <div className="mt-12 space-y-10 text-ink-soft leading-relaxed">
          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">1. Definities</h2>
            <p><strong>Studio Velora:</strong> de opdrachtnemer, gevestigd te Den Haag.</p>
            <p><strong>Opdrachtgever:</strong> de natuurlijke of rechtspersoon die een opdracht verstrekt aan Studio Velora.</p>
            <p><strong>Overeenkomst:</strong> de schriftelijke offerte, opdrachtbevestiging of contract tussen Studio Velora en de opdrachtgever.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">2. Toepasselijkheid</h2>
            <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van Studio Velora, tenzij schriftelijk anders overeengekomen.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">3. Offertes</h2>
            <p>Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld. Prijzen zijn in euro's en exclusief BTW, tenzij anders aangegeven.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">4. Betaling</h2>
            <p>Studio Velora hanteert standaard een aanbetaling van 50% bij start van de werkzaamheden. Het restant wordt gefactureerd bij oplevering. Betalingstermijn is 14 dagen na factuurdatum, tenzij anders overeengekomen.</p>
            <p className="mt-2">Bij te late betaling is de opdrachtgever in verzuim. Studio Velora behoudt zich het recht voor om vanaf dat moment wettelijke rente in rekening te brengen.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">5. Uitvoering</h2>
            <p>Studio Velora voert de opdracht naar beste inzicht en vermogen uit. Geleverde doorlooptijden zijn indicatief en geen fatale termijnen, tenzij uitdrukkelijk anders overeengekomen.</p>
            <p className="mt-2">De opdrachtgever zorgt voor tijdige aanlevering van content, feedback en goedkeuringen. Vertragingen aan de zijde van de opdrachtgever kunnen leiden tot uitloop van de opgegeven opleverdatum.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">6. Revisies</h2>
            <p>Bij elke opdracht zijn twee revisierondes inbegrepen. Aanvullende revisies worden in rekening gebracht op basis van uurtarief.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">7. Oplevering en eigendom</h2>
            <p>Na volledige betaling draagt Studio Velora alle relevante rechten van het eindproduct over aan de opdrachtgever. Studio Velora behoudt het recht om het werk te tonen in haar portfolio, tenzij anders afgesproken.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">8. Onderhoud en support</h2>
            <p>Na oplevering ontvangt de opdrachtgever 30 dagen gratis support voor bugs en kleine aanpassingen. Daarna is een onderhoudsabonnement af te sluiten of wordt gewerkt op basis van uurtarief (€50 per uur).</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">9. Aansprakelijkheid</h2>
            <p>Studio Velora is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of bedrijfsstagnatie. De totale aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende opdracht.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">10. Geheimhouding</h2>
            <p>Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar verkrijgen.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">11. Toepasselijk recht</h2>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Den Haag.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">12. Contact</h2>
            <p>Vragen? Mail naar <a href="mailto:info@studiovelora.nl" className="text-accent underline underline-offset-2">info@studiovelora.nl</a>.</p>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
