import { useLocale } from "../i18n";

export default function Hero() {
  const { messages } = useLocale();
  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });
  return (
    <div id="top" className="overflow-hidden bg-navy pt-16 text-ivory md:pt-24">
      <div className="wrap">
        <h1 className="max-w-[15ch] animate-up text-[clamp(2.6rem,7.2vw,5.6rem)] font-black [font-stretch:112%]">
          {messages.hero.title}
        </h1>
        <p style={delay(150)} className="mb-3.5 mt-7 max-w-[58ch] animate-up text-xl opacity-90">
          {messages.hero.description}
        </p>
        <p style={delay(300)} className="mb-2.5 animate-up font-display font-semibold text-sage">
          {messages.hero.services}
        </p>
        <p style={delay(400)} className="mb-8 max-w-[58ch] animate-up text-[#C9C4B6]">
          {messages.hero.area}
        </p>
        <div style={delay(500)} className="flex animate-up flex-wrap gap-3.5 pb-20">
          <a href="#contact" className="btn">{messages.hero.requestQuote}</a>
          <a href="#services" className="btn btn-ghost">{messages.hero.seeServices}</a>
        </div>
      </div>
      <div className="tape" aria-hidden="true" />
    </div>
  );
}
