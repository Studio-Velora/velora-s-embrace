export const NAV = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Mogelijkheden", to: "/mogelijkheden" },
  { label: "SEO", to: "/seo" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Zakelijke website",
    price: "€500",
    blurb:
      "Een strakke, snelle website die je bedrijf sterk presenteert. Mobiel-vriendelijk en gevonden op Google.",
    bullets: [
      "Meerdere pagina's op maat",
      "Mobile-first design",
      "SEO inbegrepen",
      "Meertalig mogelijk",
      "2 revisierondes",
      "30 dagen support",
    ],
  },
  {
    number: "02",
    title: "Premium website",
    price: "€950",
    blurb:
      "Alles van de zakelijke website, plus premium functies naar keuze: van afspraakmodules en AI chatbots tot klantportalen.",
    bullets: [
      "Alles uit de zakelijke website",
      "Premium functies naar keuze",
      "Geavanceerde animaties & interactie",
      "Koppelingen met externe systemen",
      "Bekijk alle mogelijkheden →",
      "2 revisierondes + 30 dagen support",
    ],
    link: { label: "Bekijk de mogelijkheden", to: "/mogelijkheden" },
  },
  {
    number: "03",
    title: "Webshop",
    price: "€2.500",
    blurb:
      "Online verkopen met veilige betalingen via iDEAL, Stripe en Mollie. Eenvoudig te beheren.",
    bullets: [
      "Productcatalogus",
      "iDEAL / Stripe / Mollie",
      "Bestellingsbeheer",
      "SEO inbegrepen",
      "2 revisierondes",
      "30 dagen support",
    ],
  },
  {
    number: "04",
    title: "Onderhoud & beheer",
    price: "€30/mnd of €50/uur",
    blurb:
      "Geen gedoe met aanpassingen. Kies wat past — er zijn geen verplichte maandkosten.",
    bullets: [
      "Onbeperkt kleine aanpassingen",
      "Updates & beveiliging",
      "Snelle responstijd",
      "WhatsApp bereikbaar",
    ],
  },
] as const;

export const FEATURES = [
  ["Afspraakmodule", "Klanten plannen zelf"],
  ["Online reserveringen", "Tafels, kamers, plekken"],
  ["Webshop", "Productbeheer en betaling"],
  ["Reviews", "Google reviews tonen"],
  ["Google Maps", "Interactieve locatiekaart"],
  ["WhatsApp", "Direct contact-knop"],
  ["Live chat", "Realtime met bezoekers"],
  ["Klantportaal", "Eigen omgeving per klant"],
  ["Loginomgeving", "Beveiligde inlogpagina"],
  ["Admin dashboard", "Beheer al je data"],
  ["Factuurmodule", "Automatisch factureren"],
  ["Blog / nieuws", "Artikelen & tips"],
  ["CMS", "Zelf teksten aanpassen"],
  ["Meertaligheid", "Site in meerdere talen"],
  ["iDEAL betaling", "Veilig betalen"],
  ["AI chatbot", "24/7 automatisch antwoord"],
  ["AI-vindbaarheid (GEO)", "Gevonden in ChatGPT & co"],
  ["Analytics", "Inzicht in bezoekers"],
  ["Nieuwsbrief", "E-maillijst opbouwen"],
  ["Automatisering", "Mails bij acties"],
  ["API koppelingen", "Bestaande systemen"],
] as const;

export const PROCESS = [
  {
    n: "01",
    day: "Dag 1",
    title: "Gratis intake",
    body:
      "Ik kom gewoon bij je langs — met echte koekjes. We bespreken wat je bedrijf doet en wat de site moet bereiken.",
  },
  {
    n: "02",
    day: "Dag 1–2",
    title: "Akkoord & direct aan de slag",
    body:
      "Heldere offerte met vaste prijs. Bij akkoord regel ik ter plekke je domein en zakelijke e-mail — klaar binnen 30 minuten.",
  },
  {
    n: "03",
    day: "Dag 3–6",
    title: "Ontwerp & preview",
    body:
      "Je ziet exact hoe de site eruit komt te zien voordat er code wordt geschreven.",
  },
  {
    n: "04",
    day: "Dag 7–11",
    title: "Bouw & SEO",
    body:
      "Technisch gebouwd: snel, mobiel-vriendelijk en SEO-klaar. Hosting en mail zetten we op.",
  },
  {
    n: "05",
    day: "Dag 12–13",
    title: "Revisies",
    body:
      "Twee volledige revisierondes inbegrepen. We finetunen tot het klopt.",
  },
  {
    n: "06",
    day: "Dag 14",
    title: "Live & overdracht",
    body:
      "De site gaat live met SSL, domein en Search Console. Aansluitend 30 dagen gratis support.",
  },
] as const;

export const AUDIENCES = [
  ["Kappers & barbers", "Online afspraken, diensten en openingstijden."],
  ["Restaurants", "Menu, reserveringen en bezorging."],
  ["Beautysalons", "Treatments, agenda en webshop."],
  ["Interieurbedrijven", "Portfolio en offerteaanvragen."],
  ["Aannemers & vakmensen", "Diensten, referenties en contact."],
  ["Verenigingen", "Agenda, leden en donaties."],
  ["Webshops", "Producten, betaling en verzending."],
  ["ZZP & coaches", "Personal brand, portfolio en leads."],
] as const;

export const TESTIMONIALS = [
  { quote: "Klanten maken nu online afspraken en we krijgen veel meer aanvragen. Snel en eerlijk.", name: "Ahmed B.", role: "Kapper — Leiden" },
  { quote: "Eindelijk een site die écht strak oogt. Ziet er veel duurder uit dan hij was.", name: "Fatima N.", role: "Beautysalon — Schoonhoven" },
  { quote: "Binnen twee weken live. iDEAL werkt perfect en de bestellingen komen binnen.", name: "Marco V.", role: "Restaurant — Den Haag" },
  { quote: "Mensen bellen en zeggen: ik zag jullie site. Beste investering die ik heb gedaan.", name: "Yalcin T.", role: "Interieur — Den Haag" },
  { quote: "Persoonlijk contact, denkt echt mee. Geen verkooppraatjes maar gewoon goed werk.", name: "Sanne K.", role: "Coach — Utrecht" },
  { quote: "We staan nu op pagina 1 voor onze regio. De SEO doet echt z'n werk.", name: "Rachid E.", role: "Aannemer — Rotterdam" },
  { quote: "Hosting en mail volledig geregeld, en uitgelegd hoe ik het op m'n telefoon zet. Top.", name: "Lisa M.", role: "ZZP — Gouda" },
  { quote: "Vaste prijs, geen verrassingen. Precies wat een ondernemer wil.", name: "Dennis P.", role: "Fitness — Alphen a/d Rijn" },
  { quote: "Onze webshop draait soepel. Producten toevoegen kan ik nu zelf, super handig.", name: "Nadia H.", role: "Webshop — Den Haag" },
  { quote: "Snelle reacties via WhatsApp, ook na de oplevering. Echt een aanrader.", name: "Joost B.", role: "Trainer — Leiden" },
] as const;

export const PROMISES = [
  ["Vaste prijzen", "Je weet vooraf exact wat het kost."],
  ["2 revisierondes", "Het wordt precies zoals jij het wil."],
  ["30 dagen support", "Bugs lossen we binnen 24 uur op — gratis."],
  ["Jouw eigendom", "100% van jou. Geen lock-in."],
] as const;

export const FAQ = [
  {
    q: "Hoe lang duurt het bouwen van een website?",
    a: "Gemiddeld is een website binnen 2 weken live. Een webshop duurt gemiddeld 3–4 weken.",
  },
  {
    q: "Wat kost de hosting?",
    a: "We zetten de hosting gratis voor je op. De hostingkosten zelf (gemiddeld €5–€15/maand) lopen op jouw naam, zodat je altijd eigenaar blijft.",
  },
  {
    q: "Krijg ik ook een zakelijk e-mailadres?",
    a: "Ja — en dat gaat sneller dan je denkt. Zodra je akkoord gaat, maak ik ter plekke je domein aan en stel je zakelijke e-mailadres in op je telefoon. Klaar terwijl je erbij zit.",
  },
  {
    q: "Kan de website meertalig?",
    a: "Zeker. We kunnen je website in meerdere talen opleveren met een nette taalwissel — handig als je ook internationale klanten bedient.",
  },
  {
    q: "Doen jullie ook SEO?",
    a: "Bij elke website is een SEO-basis inbegrepen — inclusief de basis voor GEO en AEO, zodat je ook vindbaar bent in AI-zoekmachines. Wil je verder groeien, dan bieden we doorlopende SEO, GEO, adverteren (SEA) en social media advertising.",
  },
  {
    q: "Wat is GEO en waarom is het belangrijk?",
    a: "GEO (Generative Engine Optimization) zorgt dat je bedrijf ook genoemd en aanbevolen wordt in AI-antwoorden — denk aan ChatGPT, Perplexity en Google's AI-overzichten. Steeds meer mensen zoeken zo, en wij richten je site zo in dat AI-zoekmachines je goed begrijpen en doorverwijzen.",
  },
  {
    q: "Betaal ik alles vooraf?",
    a: "Nee. We werken met 50% aanbetaling bij akkoord en 50% bij oplevering.",
  },
] as const;

export const SEO_STEPS = [
  ["01", "Zoekwoordenonderzoek", "We achterhalen waar jouw klanten écht op zoeken."],
  ["02", "Technische SEO", "Snelle laadtijd, nette code en mobiel-first."],
  ["03", "Lokale SEO", "Google Bedrijfsprofiel en lokale vindbaarheid."],
  ["04", "GEO & AEO", "Ook gevonden worden in AI-antwoorden van ChatGPT, Perplexity en Google's AI-overzichten."],
  ["05", "Content & meten", "Sterke teksten en Search Console."],
] as const;

export const CONTACT = {
  phone: "+31 6 11 27 76 32",
  phoneHref: "tel:+31611277632",
  whatsapp: "https://wa.me/31611277632",
  email: "info@studiovelora.nl",
  hours: "elke dag 09:00–20:00",
};
