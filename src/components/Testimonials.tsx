import Reveal from "../lib/Reveal";
import { localizedContent, type Review } from "../data/content";
import { formatMessage, useLocale } from "../i18n";

function Avatar({ bg, skin, locale, label }: { bg: string; skin: string; locale: string; label: string }) {
  return (
    <svg viewBox="0 0 64 64" role="img" lang={locale} aria-label={label} className="h-14 w-14 flex-none rounded-full">
      <rect width="64" height="64" fill={bg} />
      <circle cx="32" cy="25" r="11" fill={skin} />
      <path d="M10 64c2-16 12-22 22-22s20 6 22 22z" fill={skin} opacity=".85" />
    </svg>
  );
}

function Card({ r, locale, portraitLabel }: { r: Review; locale: string; portraitLabel: string }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-md border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(18,38,58,.14)]">
      <blockquote lang={locale}>“{r.text}”</blockquote>
      <figcaption className="mt-auto flex items-center gap-3.5">
        <Avatar bg={r.bg} skin={r.skin} locale={locale} label={portraitLabel} />
        <span>
          <b className="block font-display">{r.name}</b>
          <small className="text-steel">{r.place} · {r.role}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { locale, messages } = useLocale();
  const reviews = localizedContent[locale].reviews;
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="wrap">
        <Reveal className="mb-11 max-w-[60ch]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{messages.testimonials.title}</h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[22px]">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={Math.min(i, 6) * 70}>
              <Card r={r} locale={locale} portraitLabel={formatMessage(messages.testimonials.portrait, { name: r.name, place: r.place })} />
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-[.9rem] text-steel">{messages.testimonials.disclaimer}</p>
      </div>
    </section>
  );
}
