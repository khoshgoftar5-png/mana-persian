import { Locale, getDictionary } from "@/lib/i18n";
import { shopProducts } from "@/lib/content";

export default function CinemaPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);
  const related = shopProducts.filter((p) => p.fileType === "Video");

  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.cinema}</p>
        <h1>{t.cinema.title}</h1>
        <p className="muted">{t.cinema.body}</p>
      </div>
      {related.length > 0 && (
        <div className="panel-grid cols-3">
          {related.map((p) => (
            <div className="panel" key={p.slug}>
              <span className="tag">{p.fileType}</span>
              <h3>{p.title[locale]}</h3>
              <p className="muted" style={{ fontSize: "0.9rem" }}>{p.description[locale]}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
