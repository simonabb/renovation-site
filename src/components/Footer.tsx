import { COMPANY } from "../data/content";
import { useLocale } from "../i18n";

export default function Footer() {
  const { messages } = useLocale();
  return (
    <footer className="bg-navy py-7 text-[.95rem] text-[#B7C4CF]">
      <div className="wrap-edge flex flex-wrap justify-between gap-2.5">
        <span>© {new Date().getFullYear()} {COMPANY}. {messages.footer.description}</span>
        <span>{messages.footer.contactPlaceholder}</span>
      </div>
    </footer>
  );
}
