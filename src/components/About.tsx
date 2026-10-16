import Reveal from "../lib/Reveal";
import { useLocale } from "../i18n";

export default function About() {
  const { messages } = useLocale();
  return (
    <>
      <section id="about" className="py-16 md:py-24">
        <div className="wrap grid items-start gap-8 md:grid-cols-[1fr_1.3fr] md:gap-14">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.2vw,3.2rem)] font-extrabold">{messages.about.title}</h2>
          </Reveal>
          <Reveal delay={70} className="space-y-4">
            <p className="max-w-[62ch]"><strong>{messages.about.lead}</strong></p>
            <p className="max-w-[62ch]">{messages.about.paragraphOne}</p>
            <p className="max-w-[62ch]">{messages.about.paragraphTwo}</p>
            <p className="mt-7 border-l-[5px] border-sage pl-4 font-display text-xl font-bold">{messages.about.promise}</p>
          </Reveal>
        </div>
      </section>
      <div className="border-y border-line bg-card py-11 text-center">
        <Reveal className="wrap">
          <p className="mx-auto max-w-[44ch] font-display text-[clamp(1.3rem,2.6vw,1.8rem)] font-bold leading-[1.3]">
            {messages.about.tagline}
          </p>
          <span className="mx-auto mt-3.5 block max-w-[70ch] text-steel">
            {messages.about.summary}
          </span>
        </Reveal>
      </div>
    </>
  );
}
