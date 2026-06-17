import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/referral-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Voorwaarden Verwijsactie — Studio Velora" },
      { name: "description", content: "Verwijs een klant en krijg beide 50% korting. Lees hier de voorwaarden van de Studio Velora verwijsactie." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://studiovelora.nl/referral-voorwaarden" }],
  }),
  component: ReferralVoorwaarden,
});

function ReferralVoorwaarden() {
  return (
    <article className="px-6 pb-32 pt-40 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-accent">
            Verwijsactie
          </div>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">
            Beide 50% korting
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">
            Verwijs een ondernemer naar Studio Velora. Wordt het een betalende klant?
            Dan krijgen <em>jullie allebei</em> 50% korting op een nieuwe website.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10 text-ink-soft leading-relaxed">
          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">1. Hoe werkt het?</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Je verwijst een ondernemer of bedrijf naar Studio Velora.</li>
              <li>De aangedragen klant noemt jouw naam bij de eerste contactaanvraag (telefonisch, per mail of in het offerteformulier onder "Notities").</li>
              <li>Na ondertekening van een offerte en betaling van de aanbetaling door de aangedragen klant ontvangen jullie beide een kortingscode van 50%.</li>
              <li>Jij gebruikt jouw 50% korting op een nieuwe website of webshop. De aangedragen klant krijgt zijn korting direct verwerkt op de eerste factuur.</li>
            </ol>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">2. Voorwaarden</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>De korting geldt op <strong>nieuwe websites of webshops</strong> (geen onderhoud, hosting of losse diensten).</li>
              <li>De aangedragen klant moet een <strong>nieuwe klant</strong> zijn — niet eerder klant geweest bij Studio Velora.</li>
              <li>De korting is <strong>persoonsgebonden</strong> en niet overdraagbaar.</li>
              <li>De korting van de aanleveraar is <strong>12 maanden geldig</strong> vanaf de ondertekening van de offerte van de aangedragen klant.</li>
              <li>De korting kan <strong>niet worden gecombineerd</strong> met andere acties of kortingen.</li>
              <li>Per nieuwe klant kan slechts <strong>één aanleveraar</strong> aanspraak maken op de korting.</li>
              <li>De korting wordt verrekend op de <strong>oorspronkelijke offerteprijs</strong>, exclusief BTW.</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">3. Uitsluiting</h2>
            <p>Studio Velora behoudt zich het recht voor om verwijzingen te weigeren als:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>De aangedragen klant zelf al in gesprek was met Studio Velora.</li>
              <li>De verwijzing niet duidelijk vóór het eerste contact is gemeld.</li>
              <li>De aangedragen klant binnen 30 dagen alsnog afziet van de opdracht.</li>
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">4. Looptijd actie</h2>
            <p>Deze actie loopt tot nader order. Studio Velora kan de actie op elk moment beëindigen of de voorwaarden wijzigen. Reeds toegekende kortingen blijven gewoon geldig.</p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl text-ink mb-3">5. Vragen?</h2>
            <p>
              Mail naar <a href="mailto:info@studiovelora.nl" className="text-accent underline underline-offset-2">info@studiovelora.nl</a> of bel <a href="tel:+31611277632" className="text-accent underline underline-offset-2">+31 6 11 27 76 32</a>.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 rounded-2xl border border-ink/10 bg-surface/50 p-8 text-center">
              <h3 className="font-display text-2xl text-ink">Iemand in gedachten?</h3>
              <p className="mt-2 text-ink-soft">Stuur ze door — of plan zelf een gesprek.</p>
              <Link
                to="/offerte"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                Plan een gesprek →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
