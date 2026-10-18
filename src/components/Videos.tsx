import Reveal from "../lib/Reveal";
import { localizedContent, TIKTOK_URL } from "../data/content";
import { formatMessage, useLocale } from "../i18n";

function getTikTokVideoId(url: string) {
  const videoId = new URL(url).pathname.match(/\/video\/(\d+)\/?$/)?.[1];
  if (!videoId) {
    throw new Error(`Invalid TikTok video URL: ${url}`);
  }
  return videoId;
}

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
          {videos.map((url, i) => (
            <Reveal key={url} delay={Math.min(i, 6) * 70} className="flex-none snap-start">
              <div className="aspect-[9/16] w-[230px] overflow-hidden rounded-[14px] bg-navy">
                <iframe
                  src={`https://www.tiktok.com/player/v1/${getTikTokVideoId(url)}?controls=1&description=0&music_info=0`}
                  title={formatMessage(messages.videos.watch, { number: i + 1 })}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full border-0"
                />
              </div>
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
