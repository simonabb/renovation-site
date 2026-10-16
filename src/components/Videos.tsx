import Reveal from "../lib/Reveal";
import Scene from "../lib/Scene";
import { localizedContent, TIKTOK_URL } from "../data/content";
import { formatMessage, useLocale } from "../i18n";

/*
 * TikTok cards link out to TikTok. To link each card to its own video, change `videos` in
 * src/data/content.ts to objects with a url, and use real thumbnails instead of <Scene />.
 */
export default function Videos() {
  const { locale, messages } = useLocale();
  const videos = localizedContent[locale].videos;
  return (
    <section id="videos" className="bg-navy py-16 text-ivory md:py-24">
      <div className="wrap">
        <Reveal className="mb-11">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.videos.title}</h2>
        </Reveal>
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-[18px] pt-1.5">
          {videos.map((type, i) => (
            <Reveal key={i} delay={Math.min(i, 6) * 70} className="flex-none snap-start">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={formatMessage(messages.videos.watch, { number: i + 1 })}
                className="group relative block aspect-[9/16] w-[230px] overflow-hidden rounded-[14px] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="absolute inset-0"><Scene type={type} index={i + 1} /></span>
                <span className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-navy/90" />
                <span className="absolute left-1/2 top-1/2 z-10 -ml-[29px] -mt-[29px] grid h-[58px] w-[58px] place-items-center rounded-full bg-ivory/90 transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute -inset-2 rounded-full border-2 border-ivory/70 opacity-0 group-hover:animate-ring" />
                  <i className="ml-1 block border-y-[10px] border-l-[16px] border-y-transparent border-l-[#12263A]" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-4">
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-sage underline underline-offset-4">{messages.videos.follow}</a>
        </p>
      </div>
    </section>
  );
}
