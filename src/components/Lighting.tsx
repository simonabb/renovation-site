import Reveal from "../lib/Reveal";
import { useLocale } from "../i18n";

export default function Lighting() {
  const { messages } = useLocale();

  return (
    <section id="lighting" className="overflow-hidden border-b border-line bg-card py-16 md:py-24">
      <div className="wrap grid items-center gap-10 md:grid-cols-[1fr_1.05fr] md:gap-16">
        <Reveal>
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-[.14em] text-ink">
            {messages.lighting.eyebrow}
          </p>
          <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3rem)] font-extrabold text-ink">
            {messages.lighting.title}
          </h2>
          <p className="mt-5 max-w-[54ch] text-ink">{messages.lighting.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {messages.lighting.features.map((feature) => (
              <li key={feature} className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-ink">
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="relative">
          <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-[#F4D8A9]/40 blur-3xl" />
          <svg
            viewBox="0 0 520 360"
            role="img"
            aria-label={messages.lighting.illustration}
            className="relative h-auto w-full drop-shadow-[0_24px_34px_rgba(75,63,44,.12)]"
          >
            <defs>
              <linearGradient id="bathroom-wall" x1="0" x2="1" y1="0" y2="1">
                <stop stopColor="#F5F0E5" />
                <stop offset="1" stopColor="#E5E8DD" />
              </linearGradient>
              <linearGradient id="mirror-glass" x1="0" x2="1" y1="0" y2="1">
                <stop stopColor="#CFDFD8" />
                <stop offset=".5" stopColor="#EEF2E9" />
                <stop offset="1" stopColor="#B5C9C2" />
              </linearGradient>
              <linearGradient id="cabinet-front" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#B9906C" />
                <stop offset="1" stopColor="#987552" />
              </linearGradient>
              <filter id="led-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect x="12" y="12" width="496" height="336" rx="28" fill="url(#bathroom-wall)" />
            <path d="M12 270H508V320Q508 348 480 348H40Q12 348 12 320Z" fill="#D8D0C0" />
            <path d="M12 270H508" stroke="#C2B9A8" strokeWidth="3" />

            <ellipse cx="250" cy="146" rx="91" ry="112" fill="#F6D58F" opacity=".36" filter="url(#led-glow)" />
            <rect x="168" y="38" width="164" height="204" rx="78" fill="#FBF8EF" />
            <rect x="177" y="47" width="146" height="186" rx="69" fill="url(#mirror-glass)" />
            <rect x="177" y="47" width="146" height="186" rx="69" fill="none" stroke="#FFF4D3" strokeWidth="7" filter="url(#led-glow)" />
            <path d="M200 96Q223 67 264 65" fill="none" stroke="#FFF" strokeWidth="8" strokeLinecap="round" opacity=".62" />

            <path d="M111 244H390L412 266H90Z" fill="#FDFBF5" />
            <path d="M126 263H385V322H126Z" fill="url(#cabinet-front)" />
            <path d="M255 263V322M126 292H385" stroke="#805F43" strokeWidth="2" opacity=".55" />
            <path d="M142 271H369" stroke="#FFE8B4" strokeWidth="4" strokeLinecap="round" filter="url(#led-glow)" />
            <path d="M151 326H360" stroke="#FFE8B4" strokeWidth="5" strokeLinecap="round" filter="url(#led-glow)" />
            <path d="M196 283H214M297 283H315" stroke="#E7D3B5" strokeWidth="4" strokeLinecap="round" />
            <path d="M357 102H401V228H357" fill="#FFFDF7" stroke="#D7D0C2" strokeWidth="3" />
            <path d="M365 112H393V218H365" fill="#E4E9DD" />
            <path d="M366 122H392" stroke="#FFF0C9" strokeWidth="4" strokeLinecap="round" filter="url(#led-glow)" />
            <path d="M366 208H392" stroke="#FFF0C9" strokeWidth="4" strokeLinecap="round" filter="url(#led-glow)" />
            <circle cx="204" cy="254" r="3" fill="#B8AA92" />
            <circle cx="297" cy="254" r="3" fill="#B8AA92" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
