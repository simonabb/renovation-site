import Reveal from "../lib/Reveal";
import { localizedContent } from "../data/content";
import { useLocale } from "../i18n";

export default function Faq() {
  const { locale, messages } = useLocale();
  const faqs = localizedContent[locale].faqs;
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-11">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.faq.title}</h2>
        </Reveal>
        <div className="border-t-2 border-ink">
          {faqs.map((f) => (
            <details key={f.q} lang={locale} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none justify-between gap-5 font-display text-xl font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-2xl leading-none text-stone group-open:before:content-['–'] before:content-['+']" />
              </summary>
              <p className="mt-3.5 max-w-[68ch] text-steel">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
