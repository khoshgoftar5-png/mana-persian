import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { literatureTopics } from "@/lib/content";

export default function LiteraturePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);
  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.literature}</p>
        <h1>{t.nav.literature}</h1>
      </div>
      <div className="panel-grid cols-3">
        {literatureTopics.map((topic) => (
          <Link href={`/${locale}/literature/${topic}`} key={topic} className="panel">
            <h3>{t.literatureTopics[topic]}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
