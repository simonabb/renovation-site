import heroEnglish from "../assets/hero-en.webp";
import heroRomanian from "../assets/hero-ro.webp";
import { useLocale } from "../i18n";

export default function Hero() {
  const { locale, messages } = useLocale();
  const heroImage = locale === "ro-RO" ? heroRomanian : heroEnglish;

  return (
    <section id="top" className="overflow-hidden bg-card">
      <div className="relative mx-auto max-w-[1280px] px-0 md:px-6">
        <div className="relative shadow-[0_28px_48px_-24px_rgba(18,38,58,0.55)]">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="block h-[clamp(260px,70vw,520px)] w-full object-cover object-left md:h-auto md:object-contain"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgb(var(--hero) / 0.55), transparent 10%, transparent 90%, rgb(var(--hero) / 0.55)), linear-gradient(0deg, rgb(var(--card)), rgb(var(--card) / 0) 24%)",
            }}
          />
          <div className="relative z-10 flex flex-wrap justify-center gap-2.5 px-3 py-3 md:absolute md:bottom-0 md:left-0 md:justify-start md:gap-3.5 md:pl-[4%] md:pb-[3%] md:pt-0">
            <a
              href="#contact"
              className="inline-flex min-h-10 items-center justify-center rounded bg-[#F0C77E] px-3 py-2 text-sm font-bold text-[#283A2F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F7D99E] focus-visible:outline-offset-4 sm:min-h-12 sm:px-6 sm:py-3 sm:text-base"
            >
              {messages.hero.requestQuote}
            </a>
            <a
              href="#services"
              className="inline-flex min-h-10 items-center justify-center rounded border-2 border-[#F0C77E] bg-[#283A2F]/80 px-3 py-2 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#283A2F] focus-visible:outline-offset-4 sm:min-h-12 sm:px-6 sm:py-3 sm:text-base"
            >
              {messages.hero.seeServices}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
