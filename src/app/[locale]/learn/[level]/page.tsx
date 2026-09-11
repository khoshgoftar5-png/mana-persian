import { notFound } from "next/navigation";
import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { levels, Level } from "@/lib/content";

export function generateStaticParams() {
  return levels.map((level) => ({ level }));
}

const modules = {
  fa: ["درس‌ها", "فایل صوتی", "ویدئو", "تمرین", "آزمون"],
  en: ["Lessons", "Audio", "Video", "Exercises", "Quiz"]
};

export default function LevelPage({ params }: { params: { locale: Locale; level: string } }) {
  const { locale } = params;
  const level = params.level as Level;
  if (!levels.includes(level)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="section container">
      <p className="breadcrumb">
        <Link href={`/${locale}/learn`}>{t.nav.learn}</Link> / {t.levels[level].title}
      </p>
      <div className="section-head">
        <p className="kicker">{t.nav.learn}</p>
        <h1>{t.levels[level].title}</h1>
        <p className="muted">{t.levels[level].body}</p>
      </div>
      <div className="panel-grid cols-3">
        {modules[locale].map((m, i) => (
          <div className="panel" key={m}>
            <span className="panel-number">0{i + 1}</span>
            <h3>{m}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
