import { useEffect, useRef, useState } from "react";
import { COMPANY, localizedContent } from "../data/content";
import { useLocale } from "../i18n";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale, messages } = useLocale();
  const nav = localizedContent[locale].nav;

  useEffect(() => {
    if (!open && !languageMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setLanguageMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (ref.current && !ref.current.contains(target)) setOpen(false);
      if (languageMenuRef.current && !languageMenuRef.current.contains(target)) setLanguageMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open, languageMenuOpen]);

  const bar = "block h-[2.5px] w-6 rounded bg-current transition duration-300";

  return (
    <header ref={ref} className="sticky top-[env(safe-area-inset-top,0px)] z-20 bg-navy text-ivory">
      <div className="wrap-edge relative flex h-16 items-center justify-between gap-1">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-extrabold sm:gap-2.5 sm:text-lg">
          <i aria-hidden="true" className="inline-block h-[22px] w-[22px] bg-sage [clip-path:polygon(0_100%,0_40%,50%_0,100%_40%,100%_100%)]" />
          {COMPANY}
        </a>
        <div className="flex flex-none items-center gap-1 sm:gap-2">
          <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              aria-label={messages.header.languageLabel}
              aria-expanded={languageMenuOpen}
              aria-controls="language-menu"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center gap-1.5 rounded px-1.5 py-2 text-sm font-bold text-ivory transition hover:bg-ivory/10 focus-visible:outline-offset-2 sm:gap-2 sm:px-2"
            >
              <Flag locale={locale} />
              <span>{locale === "en-GB" ? "EN" : "RO"}</span>
              <svg aria-hidden="true" viewBox="0 0 12 8" className={`h-2 w-3 transition-transform ${languageMenuOpen ? "rotate-180" : ""}`}>
                <path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <div
              id="language-menu"
              hidden={!languageMenuOpen}
              aria-label={messages.header.languageLabel}
              className="absolute right-0 top-[calc(100%+8px)] z-30 min-w-[190px] rounded-xl border border-ivory/15 bg-navy p-1.5 shadow-[0_18px_40px_rgba(10,19,28,.4)]"
            >
              {(["en-GB", "ro-RO"] as const).map((option) => {
                const label = option === "en-GB"
                  ? messages.header.englishLanguage
                  : messages.header.romanianLanguage;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={locale === option}
                    lang={option}
                    onClick={() => {
                      setLocale(option);
                      setLanguageMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition hover:bg-ivory/10 focus-visible:bg-ivory/10"
                  >
                    <Flag locale={option} />
                    <span>{label}</span>
                    {locale === option && <span aria-hidden="true" className="ml-auto text-sage">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
          <a href="#contact" className="btn !px-2.5 !py-2 text-xs sm:!px-[18px] sm:!text-[.95rem]">{messages.header.quote}</a>
          <button
            type="button"
            aria-label={open ? messages.header.closeMenu : messages.header.openMenu}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-content-center gap-1.5"
          >
            <span className={`${bar} ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`${bar} ${open ? "opacity-0" : ""}`} />
            <span className={`${bar} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
        {open && (
          <nav
            id="menu"
            aria-label={messages.header.navLabel}
            className="absolute right-4 top-[calc(100%+8px)] flex max-h-[calc(100dvh-88px)] w-[min(220px,calc(100vw-32px))] origin-top-right animate-drop flex-col gap-0.5 overflow-y-auto rounded-2xl border border-ivory/15 bg-navy p-1.5 shadow-[0_18px_40px_rgba(10,19,28,.4)]"
          >
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block min-h-10 rounded-lg px-3 py-2 font-display text-sm font-semibold transition hover:bg-ivory/10 hover:text-sage focus-visible:bg-ivory/10"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function Flag({ locale }: { locale: "en-GB" | "ro-RO" }) {
  const className = `flex-none rounded-[2px] ${locale === "ro-RO" ? "h-4 w-6" : "h-3 w-6"}`;

  if (locale === "ro-RO") {
    return (
      <svg aria-hidden="true" viewBox="0 0 30 20" className={className}>
        <rect width="10" height="20" fill="#002B7F" />
        <rect x="10" width="10" height="20" fill="#FCD116" />
        <rect x="20" width="10" height="20" fill="#CE1126" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 60 30" className={className}>
      <path fill="#012169" d="M0 0h60v30H0z" />
      <path stroke="#fff" strokeWidth="6" d="m0 0 60 30M60 0 0 30" />
      <path stroke="#C8102E" strokeWidth="2" d="m0 0 60 30M60 0 0 30" />
      <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
      <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
    </svg>
  );
}
