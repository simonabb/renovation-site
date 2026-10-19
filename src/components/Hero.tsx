import heroEnglish from "../assets/hero-en.jpg";
import heroRomanian from "../assets/hero-ro.jpg";
import { useLocale } from "../i18n";

export default function Hero() {
  const { locale, messages } = useLocale();
  const heroImage = locale === "ro-RO" ? heroRomanian : heroEnglish;

  return (
    <section id="top" className="overflow-hidden bg-card">
      <h1 className="sr-only">{messages.hero.title}</h1>
      <p className="sr-only">{messages.hero.description} {messages.hero.services} {messages.hero.area}</p>
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="relative shadow-[0_28px_48px_-24px_rgba(18,38,58,0.55)]">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="block h-auto w-full"
        />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgb(var(--hero) / 0.55), transparent 10%, transparent 90%, rgb(var(--hero) / 0.55)), linear-gradient(0deg, rgb(var(--card)), rgb(var(--card) / 0) 24%)",
            }}
          />
          <div className="relative z-10 flex flex-wrap justify-center gap-3.5 px-4 py-5 md:absolute md:bottom-0 md:left-0 md:justify-start md:pl-[4%] md:pb-[3%] md:pt-0">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded bg-[#F0C77E] px-5 py-3 font-display font-bold text-[#283A2F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F7D99E] focus-visible:outline-offset-4 sm:px-6"
            >
              {messages.hero.requestQuote}
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded border-2 border-[#F0C77E] bg-[#283A2F]/80 px-5 py-3 font-display font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#283A2F] focus-visible:outline-offset-4 sm:px-6"
            >
              {messages.hero.seeServices}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
