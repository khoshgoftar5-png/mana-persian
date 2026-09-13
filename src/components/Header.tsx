import Link from "next/link";
import { Locale, getDictionary, otherLocale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const other = otherLocale(locale);

  const links: [string, string][] = [
    [t.nav.learn, `/${locale}/learn`],
    [t.nav.literature, `/${locale}/literature`],
    [t.nav.library, `/${locale}/library`],
    [t.nav.cinema, `/${locale}/cinema`],
    [t.nav.shop, `/${locale}/shop`],
    [t.nav.blog, `/${locale}/blog`],
    [t.nav.about, `/${locale}/about`]
  ];

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href={`/${locale}`} className="brand">
          <span className="brand-mark" aria-hidden="true" />
          {t.meta.siteName}
          <span className="brand-tagline">{مانا پرشین}</span>
        </Link>
        <nav className="primary-nav" aria-label={t.nav.search}>
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={`/${other}`} className="lang-switch">
            {other === "fa" ? "فارسی" : "EN"}
          </Link>
          <Link href={`/${locale}/contact`} className="btn btn-outline">
            {t.nav.account}
          </Link>
        </div>
      </div>
    </header>
  );
}
