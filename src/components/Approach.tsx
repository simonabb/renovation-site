import Reveal from "../lib/Reveal";
import { localizedContent } from "../data/content";
import { useLocale } from "../i18n";

export default function Approach() {
  const { locale, messages } = useLocale();
  const steps = localizedContent[locale].steps;
  return (
    <section id="approach" className="bg-navy py-16 text-ivory md:py-24">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.approach.title}</h2>
          <p className="mt-3.5 text-[#B7C4CF]">{messages.approach.summary}</p>
        </Reveal>
        <div className="grid gap-0 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className={`border-t-4 border-sage pb-7 pt-1.5 md:pb-1.5 md:pr-8 ${i > 0 ? "md:pl-8" : ""}`}>
                <h3 className="mb-2.5 mt-[18px] text-2xl">
                  <span className="text-sage">{i + 1}. </span>{s.title}
                </h3>
                <p className="text-[#C6D1DA]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
