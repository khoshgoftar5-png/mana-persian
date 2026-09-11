import { Locale, getDictionary } from "@/lib/i18n";
import { libraryItems } from "@/lib/content";

export default function LibraryPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.library}</p>
        <h1>{t.library.title}</h1>
        <p className="muted">{t.library.body}</p>
      </div>
      <div className="item-list">
        {libraryItems.map((item) => (
          <div className="item-row" key={item.slug}>
            <div>
              <h3 style={{ fontSize: "1.05rem" }}>{item.title[locale]}</h3>
              <div className="item-meta">
                <span>{item.author}</span>
                <span className="tag">{item.type.toUpperCase()}</span>
                <span className={`tag ${item.free ? "free" : ""}`}>
                  {item.free ? t.library.free : `${t.library.paid} · $${item.price}`}
                </span>
              </div>
            </div>
            <button className="btn btn-outline">{item.free ? t.library.download : t.library.buy}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
