import { Locale, getDictionary } from "@/lib/i18n";

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.contact}</p>
        <h1>{t.contact.title}</h1>
        <p className="muted">{t.contact.body}</p>
      </div>
      <form style={{ marginTop: "1.5rem" }}>
        <div className="field">
          <label htmlFor="name">{t.contact.name}</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="email">{t.contact.email}</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="message">{t.contact.message}</label>
          <textarea id="message" name="message" rows={6} required />
        </div>
        <button type="submit" className="btn btn-primary">
          {t.contact.send}
        </button>
      </form>
    </section>
  );
}
