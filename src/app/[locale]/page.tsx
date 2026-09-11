import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { levels, libraryItems, blogPosts } from "@/lib/content";
import MotifPanel from "@/components/MotifPanel";

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <>
      <section className="hero container">
        <div className="hero-grid">
          <div>
            <p className="kicker">{t.home.heroKicker}</p>
            <h1>{t.home.heroTitle}</h1>
            <p style={{ marginTop: "1.25rem", fontSize: "1.05rem" }}>{t.home.heroBody}</p>
            <div className="btn-row">
              <Link href={`/${locale}/learn`} className="btn btn-primary">
                {t.home.ctaLearn}
              </Link>
              <Link href={`/${locale}/literature`} className="btn btn-outline">
                {t.home.ctaLiterature}
              </Link>
            </div>
          </div>
          <div className="hero-motif">
            <MotifPanel />
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="kicker">01 — {t.nav.learn}</p>
          <h2>{t.home.levelsTitle}</h2>
          <p className="muted">{t.home.levelsBody}</p>
        </div>
        <div className="panel-grid cols-3">
          {levels.map((level, i) => (
            <div className="panel" key={level}>
              <span className="panel-number">0{i + 1}</span>
              <h3>{t.levels[level].title}</h3>
              <p className="muted">{t.levels[level].body}</p>
              <Link href={`/${locale}/learn/${level}`} className="panel-link">
                {t.levels.viewLevel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="kicker">02 — {t.nav.library}</p>
          <h2>{t.home.libraryTitle}</h2>
          <p className="muted">{t.home.libraryBody}</p>
        </div>
        <div className="item-list">
          {libraryItems.slice(0, 3).map((item) => (
            <div className="item-row" key={item.slug}>
              <div>
                <h3 style={{ fontSize: "1.05rem" }}>{item.title[locale]}</h3>
                <div className="item-meta">
                  <span>{item.author}</span>
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
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="kicker">03 — {t.nav.cinema}</p>
          <h2>{t.home.cinemaTitle}</h2>
          <p className="muted">{t.home.cinemaBody}</p>
        </div>
        <Link href={`/${locale}/cinema`} className="btn btn-outline">
          {t.nav.cinema}
        </Link>
      </section>

      <section className="section container">
        <div className="section-head">
          <p className="kicker">04 — {t.nav.blog}</p>
          <h2>{t.home.blogTitle}</h2>
        </div>
        <div className="item-list">
          {blogPosts.slice(0, 3).map((post) => (
            <div className="item-row" key={post.slug}>
              <div>
                <h3 style={{ fontSize: "1.05rem" }}>{post.title[locale]}</h3>
                <p className="muted" style={{ margin: "0.35rem 0 0" }}>{post.excerpt[locale]}</p>
              </div>
              <Link href={`/${locale}/blog/${post.slug}`} className="btn btn-outline">
                {locale === "fa" ? "خواندن" : "Read"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>{t.home.newsletterTitle}</h2>
          <p className="muted">{t.home.newsletterBody}</p>
        </div>
        <form className="field" style={{ display: "flex", flexDirection: "row", gap: "0.75rem", maxWidth: "28rem" }}>
          <input type="email" placeholder="you@example.com" required style={{ flex: 1 }} />
          <button type="submit" className="btn btn-primary">
            {t.home.newsletterCta}
          </button>
        </form>
      </section>
    </>
  );
}
