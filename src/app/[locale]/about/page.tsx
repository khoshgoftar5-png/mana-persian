import { Locale, getDictionary } from "@/lib/i18n";

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const t = getDictionary(params.locale);
  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.about.kicker}</p>
        <h1>{t.about.title}</h1>
      </div>
      <p>{t.about.body1}</p>
      <p>{t.about.body2}</p>
      <h3 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>{t.about.fields}</h3>
      <div className="panel-grid cols-2">
        {t.about.fieldsList.map((field) => (
          <div className="panel" key={field}>
            <p style={{ margin: 0 }}>{field}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
