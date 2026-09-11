import { notFound } from "next/navigation";
import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { shopProducts } from "@/lib/content";

export function generateStaticParams() {
  return shopProducts.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { locale: Locale; slug: string } }) {
  const { locale, slug } = params;
  const product = shopProducts.find((p) => p.slug === slug);
  if (!product) notFound();
  const t = getDictionary(locale);

  return (
    <section className="section container">
      <p className="breadcrumb">
        <Link href={`/${locale}/shop`}>{t.nav.shop}</Link> / {product.title[locale]}
      </p>
      <div className="section-head">
        <span className="tag">{product.fileType}</span>
        <h1>{product.title[locale]}</h1>
      </div>
      <p>{product.description[locale]}</p>
      <div className="item-meta" style={{ marginBlock: "1.5rem" }}>
        <span>{t.shop.author}: {product.author}</span>
        <span>{t.shop.language}: {product.language}</span>
        <span>{t.shop.fileType}: {product.fileType}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span className="price" style={{ fontSize: "1.5rem" }}>${product.price}</span>
        <button className="btn btn-primary">{t.shop.buy}</button>
      </div>
    </section>
  );
}
