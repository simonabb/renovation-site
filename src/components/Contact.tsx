import { useState, type FormEvent } from "react";
import Reveal from "../lib/Reveal";
import { EMAIL, WHATSAPP_NUMBER, localizedContent } from "../data/content";
import { formatMessage, useLocale } from "../i18n";

const field =
  "w-full rounded-md border-[1.5px] border-stone bg-paper px-3.5 py-3 font-[inherit] text-ink";

export default function Contact() {
  const [sentVia, setSentVia] = useState<"email" | "whatsapp" | null>(null);
  const { locale, messages } = useLocale();
  const serviceOptions = localizedContent[locale].serviceOptions;

  const getMessage = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const value = (key: string) => String(formData.get(key) ?? "").trim();
    return [
      `${messages.contact.emailBodyName}: ${value("name")}`,
      `${messages.contact.emailBodyPhone}: ${value("phone")}`,
      `${messages.contact.emailBodyPlace}: ${value("place")}`,
      `${messages.contact.emailBodyService}: ${value("service")}`,
      "",
      value("msg"),
    ].join("\n");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const service = String(formData.get("service") ?? "").trim();
    const subject = formatMessage(messages.contact.emailSubject, { service });
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(getMessage(e.currentTarget))}`;
    const a = document.createElement("a");
    a.href = href;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSentVia("email");
  };

  const onWhatsAppClick = (form: HTMLFormElement | null) => {
    if (!form || !form.reportValidity()) return;
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getMessage(form))}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSentVia("whatsapp");
  };

  return (
    <section id="contact" className="border-t border-line bg-card py-16 md:py-24">
      <div className="wrap grid items-start gap-7 md:grid-cols-[1fr_1.2fr] md:gap-12">
        <Reveal>
          <h2 className="max-w-[20ch] text-[clamp(1.8rem,3.6vw,2.6rem)] font-extrabold">{messages.contact.title}</h2>
          <p className="mt-3.5 max-w-[42ch] text-steel">{messages.contact.summary}</p>
        </Reveal>
        <Reveal delay={70}>
          <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-[.95rem] font-semibold">{messages.contact.name}<input name="name" required autoComplete="name" className={field} /></label>
            <label className="grid gap-1.5 text-[.95rem] font-semibold">{messages.contact.phone}<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
            <label className="grid gap-1.5 text-[.95rem] font-semibold">{messages.contact.place}<input name="place" autoComplete="address-level2" className={field} /></label>
            <label className="grid gap-1.5 text-[.95rem] font-semibold">
              {messages.contact.service}
              <select name="service" className={field}>
                {serviceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-[.95rem] font-semibold md:col-span-2">
              {messages.contact.details}
              <textarea name="msg" required className={`${field} min-h-[120px] resize-y`} />
            </label>
            <div className="flex flex-wrap gap-3 md:col-span-2">
              <button type="submit" className="btn justify-self-start border-0">{messages.contact.submit}</button>
              <button
                type="button"
                onClick={(event) => onWhatsAppClick(event.currentTarget.form)}
                className="inline-flex min-h-12 items-center justify-center rounded bg-[#25D366] px-5 py-3 font-display font-bold text-[#123A28] transition hover:-translate-y-0.5 hover:brightness-105"
              >
                {messages.contact.whatsappSubmit}
              </button>
            </div>
            <p role="status" className="text-steel md:col-span-2">
              {sentVia === "email" && formatMessage(messages.contact.emailStatus, { email: EMAIL })}
              {sentVia === "whatsapp" && messages.contact.whatsappStatus}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
