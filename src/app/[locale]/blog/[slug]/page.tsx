import { notFound } from "next/navigation";
import Link from "next/link";
import { Locale, getDictionary } from "@/lib/i18n";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { locale: Locale; slug: string } }) {
  const { locale, slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const t = getDictionary(locale);

  return (
    <article className="section container">
      <p className="breadcrumb">
        <Link href={`/${locale}/blog`}>{t.nav.blog}</Link> / {post.title[locale]}
      </p>
      <div className="section-head">
        <p className="kicker">{post.category} · {post.date}</p>
        <h1>{post.title[locale]}</h1>
      </div>
      <p>{post.excerpt[locale]}</p>
      <p className="muted">
        {locale === "fa"
          ? "متن کامل این یادداشت به‌زودی منتشر می‌شود."
          : "The full text of this note will be published soon."}
      </p>
    </article>
  );
}
