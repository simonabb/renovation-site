import type { Locale } from "../i18n";
import galleryPhoto1 from "../assets/gallery-01.jpg";
import galleryPhoto2 from "../assets/gallery-02.jpg";
import galleryPhoto3 from "../assets/gallery-03.jpg";
import galleryPhoto4 from "../assets/gallery-04.jpg";
import galleryPhoto5 from "../assets/gallery-05.jpg";
import galleryPhoto6 from "../assets/gallery-06.jpg";

export const COMPANY = "Coco Construction";
export const EMAIL = "donatello_tm@yahoo.com";
export const TIKTOK_URL = "https://www.tiktok.com/@coco.construction"; // replace with the real channel or video URLs
export const VIDEO_URLS = [
  "https://www.tiktok.com/@coco.construction/video/7617190270718905602?_r=1&_t=ZN-9AbvkdqB6Sk",
  "https://www.tiktok.com/@coco.construction/video/7613012305495772438?_r=1&_t=ZN-9Abvm8po57m",
  "https://www.tiktok.com/@coco.construction/video/7522223092102368534?_r=1&_t=ZN-9AbvnNvJXyo",
  "https://www.tiktok.com/@coco.construction/video/7521483200040946966?_r=1&_t=ZN-9AbvpGZanX4",
  "https://www.tiktok.com/@coco.construction/video/7492486228323863830?_r=1&_t=ZN-9AbvqOiWd9C",
];
export const GALLERY_IMAGES = [
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
  galleryPhoto6,
];

export interface Review {
  name: string;
  place: string;
  role: string;
  text: string;
  bg: string;
  skin: string;
}

interface LocalizedContent {
  nav: { href: string; label: string }[];
  services: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  gallery: string[];
  videos: string[];
  reviews: Review[];
  areas: string[];
  faqs: { q: string; a: string }[];
  serviceOptions: string[];
}

// Replace the sample testimonials and illustrations with real project material when available.
export const localizedContent = {
  "en-GB": {
    nav: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#lighting", label: "Lighting" },
      { href: "#approach", label: "Approach" },
      { href: "#gallery", label: "Gallery" },
      { href: "#videos", label: "Videos" },
      { href: "#reviews", label: "Reviews" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    services: [
      { title: "Full Home Renovations", text: "Complete transformations of Scottish homes, including tenement flats, villas and bungalows, from structural changes to the final coat of paint." },
      { title: "Kitchen & Bathroom Remodelling", text: "Layout, fittings, tiling and finishes for the rooms you use every day." },
      { title: "Plumbing & Installations", text: "Repairs, new installations and upgrades for pipes, central heating, boilers, sanitary ware and appliances, ready for Scottish winters." },
      { title: "Commercial Renovations & Shop Fit-Outs", text: "Shops, cafés, offices and hospitality spaces across Scotland, made ready for business on schedule." },
      { title: "General Repairs & Property Maintenance", text: "Small fixes and regular upkeep for homeowners, landlords and factors, including common repairs in shared tenement buildings." },
      { title: "LED Lighting & Feature Installations", text: "Integrated LED lighting for bathroom mirrors, kitchen cabinets, display units and other interior features, installed with a clean, considered finish." },
      { title: "Interior Finishing & Improvements", text: "Painting, flooring, plastering, carpentry and the details that complete a space." },
      { title: "End-to-End Project Management", text: "One point of contact for planning, trades, materials and timelines, so you don't have to chase anyone." },
    ],
    steps: [
      { title: "Understand", text: "We visit, listen to what you need, and look at the space and its constraints." },
      { title: "Plan", text: "You receive a clear scope, timeline and cost before any work starts." },
      { title: "Deliver", text: "Skilled tradespeople complete the work to a high standard, and we check it with you at the end." },
    ],
    gallery: GALLERY_IMAGES,
    videos: VIDEO_URLS,
    reviews: [
      { name: "Fiona MacLeod", place: "Edinburgh", role: "tenement flat renovation", bg: "#12263A", skin: "#E3B896", text: "They took our Marchmont flat back to the plaster and rebuilt it in ten weeks. They handled the building warrant and our neighbours' questions, and kept the cornices we wanted to save." },
      { name: "Callum Reid", place: "Glasgow", role: "kitchen and bathroom remodelling", bg: "#6F8062", skin: "#C98F6A", text: "Our 1900s flat had awkward pipes and uneven walls. The new kitchen and bathroom fit perfectly, and the team left the close clean every evening." },
      { name: "Isla Henderson", place: "Aberdeen", role: "heating upgrade", bg: "#77746C", skin: "#F0CBA8", text: "They replaced our old boiler and fitted new radiators before winter. A clear quote, no surprises, and they arrived when they said they would." },
      { name: "Morag Stewart", place: "Dundee", role: "landlord, property maintenance", bg: "#5C6B50", skin: "#D9A982", text: "I look after several rental flats and need repairs done quickly and properly. They sort problems fast and tell me exactly what was done." },
    ],
    areas: [
      "Edinburgh & the Lothians", "Glasgow & Lanarkshire", "Aberdeen & Aberdeenshire", "Dundee & Angus",
      "Inverness & the Highlands", "Fife", "Stirling & Perthshire", "Scottish Borders",
    ],
    faqs: [
      { q: "Do I need a building warrant for my renovation?", a: "Many structural changes, extensions and some alterations need a building warrant from your local council. Like-for-like repairs and decoration usually do not. We tell you what applies to your project and help with the application." },
      { q: "Can you work on tenement flats?", a: "Yes. We renovate and repair tenement flats, and we plan the work with shared stairs and neighbours in mind." },
      { q: "Do you handle repairs for landlords and factors?", a: "Yes. We carry out repairs and ongoing maintenance for rental properties and managed buildings, and keep you informed about each job." },
      { q: "How do I get a quote?", a: "Tell us about your project and your location. We arrange a visit, then send a clear scope, timeline and cost before any work begins." },
    ],
    serviceOptions: [
      "Full home renovation", "Kitchen or bathroom remodelling", "Plumbing and installations",
      "Commercial renovation or shop fit-out", "Repairs and property maintenance", "LED lighting installation", "Interior finishing", "Project management",
    ],
  },
  "ro-RO": {
    nav: [
      { href: "#about", label: "Despre noi" },
      { href: "#services", label: "Servicii" },
      { href: "#lighting", label: "Iluminat" },
      { href: "#approach", label: "Abordare" },
      { href: "#gallery", label: "Galerie" },
      { href: "#videos", label: "Videoclipuri" },
      { href: "#reviews", label: "Recenzii" },
      { href: "#faq", label: "Întrebări frecvente" },
      { href: "#contact", label: "Contact" },
    ],
    services: [
      { title: "Renovări complete de locuințe", text: "Transformări complete ale locuințelor din Scoția, inclusiv apartamente în clădiri tradiționale, vile și bungalow-uri, de la modificări structurale până la ultimul strat de vopsea." },
      { title: "Renovarea bucătăriilor și băilor", text: "Reconfigurări, mobilier, placări și finisaje pentru încăperile pe care le folosești zi de zi." },
      { title: "Instalații sanitare și montaj", text: "Reparații, instalații noi și modernizări ale conductelor, încălzirii centrale, centralelor termice, obiectelor sanitare și electrocasnicelor, pregătite pentru iernile din Scoția." },
      { title: "Renovări comerciale și amenajări de spații", text: "Magazine, cafenele, birouri și spații de ospitalitate din toată Scoția, pregătite pentru deschidere la timp." },
      { title: "Reparații generale și întreținerea proprietăților", text: "Reparații minore și întreținere periodică pentru proprietari, proprietari de imobile închiriate și administratori, inclusiv reparații în clădiri cu spații comune." },
      { title: "Iluminat LED și montaj decorativ", text: "Iluminat LED integrat pentru oglinzi de baie, dulapuri de bucătărie, vitrine și alte elemente interioare, montat cu atenție la finisaje." },
      { title: "Finisaje și îmbunătățiri interioare", text: "Vopsitorie, pardoseli, tencuieli, tâmplărie și detaliile care dau unei încăperi aspectul final." },
      { title: "Management complet de proiect", text: "Un singur punct de contact pentru planificare, echipe, materiale și termene, fără să fie nevoie să urmărești fiecare meseriaș." },
    ],
    steps: [
      { title: "Înțelegem", text: "Venim la fața locului, discutăm cerințele tale și evaluăm spațiul și constrângerile acestuia." },
      { title: "Planificăm", text: "Primești o descriere clară a lucrărilor, un calendar și un cost înainte de începerea lucrului." },
      { title: "Executăm", text: "Meseriași calificați realizează lucrările la standarde ridicate, iar la final verificăm rezultatul împreună." },
    ],
    gallery: GALLERY_IMAGES,
    videos: VIDEO_URLS,
    reviews: [
      { name: "Fiona MacLeod", place: "Edinburgh", role: "renovarea unui apartament", bg: "#12263A", skin: "#E3B896", text: "Au renovat complet apartamentul nostru din Marchmont în zece săptămâni. S-au ocupat de autorizația de construire, au discutat cu vecinii și au păstrat cornișele pe care doream să le salvăm." },
      { name: "Callum Reid", place: "Glasgow", role: "renovarea bucătăriei și a băii", bg: "#6F8062", skin: "#C98F6A", text: "Apartamentul nostru din anii 1900 avea conducte greu de gestionat și pereți denivelați. Noua bucătărie și baia se potrivesc perfect, iar echipa lăsa casa scării curată în fiecare seară." },
      { name: "Isla Henderson", place: "Aberdeen", role: "modernizarea încălzirii", bg: "#77746C", skin: "#F0CBA8", text: "Au înlocuit centrala veche și au montat radiatoare noi înainte de iarnă. Ofertă clară, fără costuri neașteptate și au ajuns la timp." },
      { name: "Duncan Campbell", place: "Inverness", role: "amenajarea unui spațiu comercial", bg: "#2B3F52", skin: "#B97F5A", text: "Am deschis la data planificată. O singură persoană de contact s-a ocupat de tâmplari, instalația electrică și cea sanitară, ceea ce ne-a scutit de mult stres." },
      { name: "Morag Stewart", place: "Dundee", role: "întreținerea proprietăților închiriate", bg: "#5C6B50", skin: "#D9A982", text: "Administrez mai multe apartamente închiriate și am nevoie de reparații rapide și bine făcute. Rezolvă problemele prompt și îmi spun exact ce au făcut." },
    ],
    areas: [
      "Edinburgh și regiunea Lothian", "Glasgow și Lanarkshire", "Aberdeen și Aberdeenshire", "Dundee și Angus",
      "Inverness și Highlands", "Fife", "Stirling și Perthshire", "Scottish Borders",
    ],
    faqs: [
      { q: "Am nevoie de autorizație de construire pentru renovare?", a: "Multe modificări structurale, extinderi și unele lucrări necesită autorizație de construire de la consiliul local. Reparațiile similare cu cele existente și decorarea nu necesită, de regulă, autorizație. Îți explicăm ce se aplică proiectului tău și te ajutăm cu cererea." },
      { q: "Puteți lucra în apartamente din clădiri tradiționale?", a: "Da. Renovăm și reparăm astfel de apartamente și planificăm lucrările ținând cont de scările comune și de vecini." },
      { q: "Vă ocupați de reparații pentru proprietari și administratori?", a: "Da. Reparăm și întreținem periodic proprietăți închiriate și clădiri administrate și te ținem la curent cu fiecare lucrare." },
      { q: "Cum pot obține o ofertă?", a: "Spune-ne despre proiect și unde se află proprietatea. Stabilim o vizită, apoi îți trimitem descrierea lucrărilor, calendarul și costul înainte de începerea lucrului." },
    ],
    serviceOptions: [
      "Renovare completă de locuință", "Renovarea bucătăriei sau a băii", "Instalații sanitare și montaj",
      "Renovare comercială sau amenajare de spațiu", "Reparații și întreținerea proprietății", "Instalare iluminat LED", "Finisaje interioare", "Management de proiect",
    ],
  },
} satisfies Record<Locale, LocalizedContent>;
