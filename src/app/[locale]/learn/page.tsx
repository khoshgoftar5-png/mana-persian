import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { levels } from "@/lib/content";

export default function LearnPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);
  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.learn}</p>
        <h1>{t.home.levelsTitle}</h1>
        <p className="muted">{t.home.levelsBody}</p>
      </div>
      <div className="panel-grid cols-3">
        {levels.map((level, i) => (
          <div className="panel" key={level}>
            <span className="panel-number">0{i + 1}</span>
            <h3>{t.levels[level].title}</h3>
            <p className="muted">{t.levels[level].body}</p>
            <p className="muted" style={{ fontSize: "0.8rem" }}>{t.levels.includes}</p>
            <Link href={`/${locale}/learn/${level}`} className="panel-link">
              {t.levels.viewLevel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
