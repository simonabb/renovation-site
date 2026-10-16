import Reveal from "../lib/Reveal";
import { localizedContent } from "../data/content";
import { useLocale } from "../i18n";

export default function Areas() {
  const { locale, messages } = useLocale();
  const areas = localizedContent[locale].areas;
  return (
    <section id="areas" className="border-y border-line bg-card py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.areas.title}</h2>
          <p className="mt-3.5 text-steel">{messages.areas.summary}</p>
        </Reveal>
        <ul className="flex flex-wrap gap-3">
          {areas.map((a) => (
            <li key={a} lang={locale} className="rounded-full border-[1.5px] border-stone px-[18px] py-[9px] font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-sage hover:text-[#12263A]">
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
