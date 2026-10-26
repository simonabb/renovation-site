import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "en-GB" | "ro-RO";

const messages = {
  "en-GB": {
    metadata: {
      title: "Renovation, Plumbing & Property Maintenance in Scotland | Coco Construction",
      description: "Renovation, plumbing, LED lighting and property maintenance across Scotland. Home renovations, kitchens, bathrooms, illuminated mirrors and cabinets, shop fit-outs and repairs from one reliable team.",
      socialTitle: "Renovation, Plumbing & Property Maintenance in Scotland",
      socialDescription: "From small repairs to complete renovations for homes and businesses across Scotland.",
    },
    header: {
      quote: "Get a quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      navLabel: "Main navigation",
      languageLabel: "Language",
      englishLanguage: "British English",
      romanianLanguage: "Romanian",
    },
    hero: {
      title: "We Build. We Renovate. We Take Care of It.",
      description: "From everyday repairs to complete residential and commercial renovations, we deliver reliable solutions with quality workmanship from start to finish.",
      services: "Renovation · Plumbing · Property Maintenance",
      area: "Serving homes and businesses across Scotland, including Edinburgh, Glasgow, Aberdeen, Dundee and Inverness.",
      requestQuote: "Request a quote",
      seeServices: "See our services",
    },
    lighting: {
      eyebrow: "Lighting installations",
      title: "The right light makes all the difference",
      description: "We install integrated LED lighting that adds a warm glow and a practical finishing touch to bathroom mirrors, kitchen cabinets, display units and more.",
      features: ["Backlit mirrors", "Kitchen cabinet lighting", "Display niches"],
      illustration: "Illustration of a bathroom with an LED-lit mirror, cabinet and display niche",
    },
    about: {
      title: "From Small Repairs to Complete Renovations",
      lead: "Quality workmanship. Reliable service. Complete solutions.",
      paragraphOne: "We provide comprehensive renovation, plumbing, and property maintenance services for residential and commercial properties. From small repairs and essential maintenance to full home renovations and commercial space transformations, we bring the skills, experience, and attention to detail needed to get the job done right.",
      paragraphTwo: "Our approach is simple: understand your needs, plan the work carefully, and deliver practical, high-quality results from start to finish. Whether you're updating your home, preparing a commercial space for business, or looking for a reliable partner to handle repairs and maintenance, we're here to help turn your plans into reality.",
      promise: "One reliable partner. A complete range of services. Work you can trust.",
      tagline: "Your trusted partner for renovations, repairs, and property improvements.",
      summary: "We deliver complete solutions tailored to your needs, combining skilled workmanship, practical expertise, and dependable service.",
    },
    services: {
      title: "Renovation, Remodelling & Property Maintenance",
      summary: "Everything your property needs, handled by one team.",
    },
    approach: {
      title: "How we work",
      summary: "A clear process, so you always know what happens next.",
    },
    gallery: {
      title: "Our recent work",
      label: "Project photos",
      photo: "Photo {current} of {total}",
      previous: "Previous photo",
      next: "Next photo",
      goTo: "Go to photo {current}",
    },
    videos: {
      title: "Watch us at work",
      watch: "Watch video {number} on TikTok",
      follow: "Follow us on TikTok",
    },
    testimonials: {
      title: "What customers across Scotland say",
      portrait: "Portrait of {name}, customer in {place}",
      disclaimer: "Sample testimonials with placeholder names and photos. Replace them with real customer feedback when available.",
    },
    areas: {
      title: "Renovation and maintenance across Scotland",
      summary: "We work with homeowners, landlords, factors and businesses in towns and cities across the country.",
    },
    faq: {
      title: "Frequently asked questions",
    },
    contact: {
      title: "Tell us about your project",
      summary: "Send us the details and we will reply with a clear scope, timeline and cost.",
      name: "Name",
      phone: "Phone",
      place: "Town or city",
      service: "Service",
      details: "Project details",
      submit: "Send quote request",
      whatsappSubmit: "Send via WhatsApp",
      emailSubject: "Quote request: {service}",
      emailBodyName: "Name",
      emailBodyPhone: "Phone",
      emailBodyPlace: "Town or city",
      emailBodyService: "Service",
      emailStatus: "Your email app should open with the details filled in. If it does not, write to {email}.",
      whatsappStatus: "WhatsApp should open with your message ready. Review it and tap Send to submit your request.",
    },
    footer: {
      description: "Renovation, Remodelling & Property Maintenance.",
    },
  },
  "ro-RO": {
    metadata: {
      title: "Renovări, instalații sanitare și întreținere proprietăți în Scoția | Coco Construction",
      description: "Servicii de renovare, instalații sanitare, iluminat LED și întreținere a proprietăților în toată Scoția. Renovări de locuințe, bucătării, băi, oglinzi și dulapuri iluminate, amenajări comerciale și reparații.",
      socialTitle: "Renovări, instalații sanitare și întreținere proprietăți în Scoția",
      socialDescription: "De la reparații minore la renovări complete pentru locuințe și spații comerciale din toată Scoția.",
    },
    header: {
      quote: "Solicită o ofertă",
      openMenu: "Deschide meniul",
      closeMenu: "Închide meniul",
      navLabel: "Navigare principală",
      languageLabel: "Limba",
      englishLanguage: "Engleză britanică",
      romanianLanguage: "Română",
    },
    hero: {
      title: "Construim. Renovăm. Avem grijă de proprietatea ta.",
      description: "De la reparații de zi cu zi până la renovări complete pentru locuințe și spații comerciale, oferim soluții de încredere și lucrări de calitate, de la început până la final.",
      services: "Renovări · Instalații sanitare · Întreținerea proprietăților",
      area: "Deservim locuințe și afaceri din toată Scoția, inclusiv din Edinburgh, Glasgow, Aberdeen, Dundee și Inverness.",
      requestQuote: "Solicită o ofertă",
      seeServices: "Vezi serviciile",
    },
    lighting: {
      eyebrow: "Instalații de iluminat",
      title: "Lumina potrivită schimbă totul",
      description: "Montăm sisteme LED integrate care adaugă o lumină caldă și un finisaj practic oglinzilor de baie, dulapurilor de bucătărie, vitrinelor și altor spații.",
      features: ["Oglinzi cu iluminare", "Iluminarea dulapurilor", "Nișe decorative"],
      illustration: "Ilustrație a unei băi cu oglindă, dulap și nișă decorativă iluminate cu LED",
    },
    about: {
      title: "De la reparații minore la renovări complete",
      lead: "Lucrări de calitate. Servicii de încredere. Soluții complete.",
      paragraphOne: "Oferim servicii complete de renovare, instalații sanitare și întreținere pentru proprietăți rezidențiale și comerciale. De la reparații minore și lucrări esențiale de întreținere până la renovări complete de locuințe și transformarea spațiilor comerciale, punem la dispoziție competențele, experiența și atenția la detalii necesare pentru o lucrare bine făcută.",
      paragraphTwo: "Abordarea noastră este simplă: înțelegem nevoile tale, planificăm cu atenție lucrările și oferim rezultate practice și de calitate, de la început până la final. Fie că îți modernizezi locuința, pregătești un spațiu comercial pentru afacere sau cauți un partener de încredere pentru reparații și întreținere, te ajutăm să-ți transformi planurile în realitate.",
      promise: "Un partener de încredere. O gamă completă de servicii. Lucrări pe care te poți baza.",
      tagline: "Partenerul tău de încredere pentru renovări, reparații și îmbunătățirea proprietăților.",
      summary: "Oferim soluții complete, adaptate nevoilor tale, îmbinând măiestria, experiența practică și servicii de încredere.",
    },
    services: {
      title: "Renovări, reamenajări și întreținerea proprietăților",
      summary: "Tot ce are nevoie proprietatea ta, realizat de o singură echipă.",
    },
    approach: {
      title: "Cum lucrăm",
      summary: "Un proces clar, ca să știi mereu care este pasul următor.",
    },
    gallery: {
      title: "Lucrări recente",
      label: "Fotografii ale proiectelor",
      photo: "Fotografia {current} din {total}",
      previous: "Fotografia anterioară",
      next: "Fotografia următoare",
      goTo: "Mergi la fotografia {current}",
    },
    videos: {
      title: "Urmărește-ne la lucru",
      watch: "Urmărește videoclipul {number} pe TikTok",
      follow: "Urmărește-ne pe TikTok",
    },
    testimonials: {
      title: "Părerile clienților din toată Scoția",
      portrait: "Portretul lui {name}, client din {place}",
      disclaimer: "Acestea sunt testimoniale demonstrative, cu nume și fotografii provizorii. Înlocuiește-le cu opinii reale ale clienților când sunt disponibile.",
    },
    areas: {
      title: "Renovări și întreținere în toată Scoția",
      summary: "Colaborăm cu proprietari de locuințe, proprietari de imobile închiriate, administratori de clădiri și companii din orașe și localități din întreaga țară.",
    },
    faq: {
      title: "Întrebări frecvente",
    },
    contact: {
      title: "Spune-ne despre proiectul tău",
      summary: "Trimite-ne detaliile, iar noi îți vom răspunde cu o descriere clară a lucrărilor, un termen și un cost.",
      name: "Nume",
      phone: "Telefon",
      place: "Localitate sau oraș",
      service: "Serviciu",
      details: "Detalii despre proiect",
      submit: "Trimite solicitarea de ofertă",
      whatsappSubmit: "Trimite prin WhatsApp",
      emailSubject: "Solicitare de ofertă: {service}",
      emailBodyName: "Nume",
      emailBodyPhone: "Telefon",
      emailBodyPlace: "Localitate sau oraș",
      emailBodyService: "Serviciu",
      emailStatus: "Aplicația ta de e-mail ar trebui să se deschidă cu detaliile completate. Dacă nu se deschide, scrie-ne la {email}.",
      whatsappStatus: "WhatsApp ar trebui să se deschidă cu mesajul pregătit. Verifică-l și apasă Trimite pentru a expedia solicitarea.",
    },
    footer: {
      description: "Renovări, reamenajări și întreținerea proprietăților.",
    },
  },
} as const;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: (typeof messages)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "renovation-site-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEY);
    return savedLocale === "ro-RO" ? "ro-RO" : "en-GB";
  });

  const setLocale = (nextLocale: Locale) => {
    localStorage.setItem(STORAGE_KEY, nextLocale);
    setLocaleState(nextLocale);
  };

  const value = useMemo(
    () => ({ locale, setLocale, messages: messages[locale] }),
    [locale],
  );

  useEffect(() => {
    const { metadata } = messages[locale];
    document.documentElement.lang = locale;
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", locale.replace("-", "_"));
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", metadata.socialTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", metadata.socialDescription);
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}

export function formatMessage(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match));
}
