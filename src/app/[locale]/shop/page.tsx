import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { shopProducts } from "@/lib/content";

export default function ShopPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.shop}</p>
        <h1>{t.shop.title}</h1>
        <p className="muted">{t.shop.body}</p>
      </div>
      <div className="panel-grid cols-3">
        {shopProducts.map((product) => (
          <div className="panel" key={product.slug}>
            <span className="tag">{product.fileType}</span>
            <h3>{product.title[locale]}</h3>
            <p className="muted" style={{ fontSize: "0.9rem" }}>{product.description[locale]}</p>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="price">${product.price}</span>
              <Link href={`/${locale}/shop/${product.slug}`} className="btn btn-outline">
                {t.shop.buy}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
