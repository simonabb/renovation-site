import { useState, type FormEvent } from "react";
import Reveal from "../lib/Reveal";
import { EMAIL, localizedContent } from "../data/content";
import { formatMessage, useLocale } from "../i18n";

const field =
  "w-full rounded-md border-[1.5px] border-stone bg-paper px-3.5 py-3 font-[inherit] text-ink";

/*
 * There is no server in this project, so the form opens the visitor's email app with the details
 * filled in (mailto). To receive submissions directly, post the form to a service such as
 * Formspree or to your own API instead.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);
  const { locale, messages } = useLocale();
  const serviceOptions = localizedContent[locale].serviceOptions;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const body = `${messages.contact.emailBodyName}: ${v("name")}\n${messages.contact.emailBodyPhone}: ${v("phone")}\n${messages.contact.emailBodyPlace}: ${v("place")}\n${messages.contact.emailBodyService}: ${v("service")}\n\n${v("msg")}`;
    const subject = formatMessage(messages.contact.emailSubject, { service: v("service") });
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const a = document.createElement("a");
    a.href = href;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setSent(true);
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
            <button type="submit" className="btn justify-self-start border-0">{messages.contact.submit}</button>
            <p role="status" className="text-steel md:col-span-2">
              {sent && formatMessage(messages.contact.emailStatus, { email: EMAIL })}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
