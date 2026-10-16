import Reveal from "../lib/Reveal";
import { localizedContent } from "../data/content";
import { useLocale } from "../i18n";

export default function Services() {
  const { locale, messages } = useLocale();
  const services = localizedContent[locale].services;
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.services.title}</h2>
          <p className="mt-3.5 text-steel">{messages.services.summary}</p>
        </Reveal>
        <ul className="border-t-2 border-ink">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={Math.min(i, 6) * 70}>
                <div className="group grid gap-3 border-b border-line py-6 transition-all duration-300 hover:bg-sage/15 md:grid-cols-[minmax(220px,1fr)_1.6fr] md:gap-x-10 md:hover:pl-3.5">
                  <h3 className="flex items-baseline gap-3.5 text-[1.35rem] font-bold">
                    <span className="h-3 w-3 flex-none bg-sage transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125" />
                    {s.title}
                  </h3>
                  <p className="max-w-[60ch] text-steel">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
