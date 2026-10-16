import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "../lib/Reveal";
import Scene from "../lib/Scene";
import { localizedContent } from "../data/content";
import { formatMessage, useLocale } from "../i18n";

/*
 * Image carousel (CSS scroll-snap). To use real photos, put them in /public/gallery
 * and replace <Scene ... /> below with <img src="/gallery/photo-1.jpg" alt="..." className="h-full w-full object-cover" />.
 */
export default function Gallery() {
  const { locale, messages } = useLocale();
  const gallery = localizedContent[locale].gallery;
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const slides = () => Array.from(track.current?.children ?? []) as HTMLElement[];
  const mid = (el: HTMLElement) => el.offsetLeft + el.clientWidth / 2;

  const nearest = useCallback(() => {
    const t = track.current;
    if (!t) return 0;
    const centre = t.scrollLeft + t.clientWidth / 2;
    const all = Array.from(t.children) as HTMLElement[];
    let best = 0;
    all.forEach((el, i) => {
      if (Math.abs(mid(el) - centre) < Math.abs(mid(all[best]) - centre)) best = i;
    });
    return best;
  }, []);

  const go = (i: number) => {
    const t = track.current;
    const all = slides();
    if (!t || !all.length) return;
    const n = (i + all.length) % all.length;
    t.scrollTo({ left: mid(all[n]) - t.clientWidth / 2, behavior: "smooth" });
  };

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setCurrent(nearest()));
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    return () => t.removeEventListener("scroll", onScroll);
  }, [nearest]);

  const arrow =
    "absolute top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-navy text-3xl leading-none text-ivory shadow-lg transition hover:scale-110 hover:bg-sage hover:text-[#12263A]";

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-11">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.gallery.title}</h2>
        </Reveal>
        <div className="relative" role="region" aria-roledescription="carousel" aria-label={messages.gallery.label}>
          <div
            ref={track}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") { e.preventDefault(); go(nearest() + 1); }
              if (e.key === "ArrowLeft") { e.preventDefault(); go(nearest() - 1); }
            }}
            className="relative flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth p-0.5 [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
          >
            {gallery.map((type, i) => (
              <div
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={formatMessage(messages.gallery.photo, { current: i + 1, total: gallery.length })}
                className="aspect-[4/3] w-[min(560px,82vw)] flex-none snap-center overflow-hidden rounded-lg border border-line"
              >
                <Scene type={type} index={i} />
              </div>
            ))}
          </div>
          <button type="button" aria-label={messages.gallery.previous} onClick={() => go(current - 1)} className={`${arrow} left-2.5`}>‹</button>
          <button type="button" aria-label={messages.gallery.next} onClick={() => go(current + 1)} className={`${arrow} right-2.5`}>›</button>
        </div>
        <div className="mt-[18px] flex justify-center gap-2">
          {gallery.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={formatMessage(messages.gallery.goTo, { current: i + 1 })}
              aria-current={i === current}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full bg-stone transition-all duration-300 ${i === current ? "w-[26px] !bg-sage opacity-100" : "w-2.5 opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
