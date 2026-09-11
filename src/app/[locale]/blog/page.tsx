import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { blogPosts } from "@/lib/content";

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale);

  return (
    <section className="section container">
      <div className="section-head">
        <p className="kicker">{t.nav.blog}</p>
        <h1>{t.home.blogTitle}</h1>
      </div>
      <div className="item-list">
        {blogPosts.map((post) => (
          <div className="item-row" key={post.slug}>
            <div>
              <h3 style={{ fontSize: "1.05rem" }}>{post.title[locale]}</h3>
              <p className="muted" style={{ margin: "0.35rem 0 0" }}>{post.excerpt[locale]}</p>
              <div className="item-meta">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
            </div>
            <Link href={`/${locale}/blog/${post.slug}`} className="btn btn-outline">
              {locale === "fa" ? "خواندن" : "Read"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
