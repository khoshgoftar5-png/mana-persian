import { notFound } from "next/navigation";
import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { literatureTopics, LiteratureTopic, libraryItems } from "@/lib/content";

export function generateStaticParams() {
  return literatureTopics.map((topic) => ({ topic }));
}

export default function TopicPage({ params }: { params: { locale: Locale; topic: string } }) {
  const { locale } = params;
  const topic = params.topic as LiteratureTopic;
  if (!literatureTopics.includes(topic)) notFound();
  const t = getDictionary(locale);
  const related = libraryItems.filter((item) => item.topic === topic);

  return (
    <section className="section container">
      <p className="breadcrumb">
        <Link href={`/${locale}/literature`}>{t.nav.literature}</Link> / {t.literatureTopics[topic]}
      </p>
      <div className="section-head">
        <h1>{t.literatureTopics[topic]}</h1>
      </div>
      {related.length > 0 ? (
        <div className="item-list">
          {related.map((item) => (
            <div className="item-row" key={item.slug}>
              <div>
                <h3 style={{ fontSize: "1.05rem" }}>{item.title[locale]}</h3>
                <div className="item-meta">
                  <span className={`tag ${item.free ? "free" : ""}`}>
                    {item.free ? t.library.free : `${t.library.paid} · $${item.price}`}
                  </span>
                </div>
              </div>
              <Link href={`/${locale}/library`} className="btn btn-outline">
                {item.free ? t.library.download : t.library.buy}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="muted">
          {locale === "fa" ? "محتوای این بخش به‌زودی افزوده می‌شود." : "Content for this section is coming soon."}
        </p>
      )}
    </section>
  );
}
