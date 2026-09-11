import Link from "next/link";
import { Locale, getDictionary, locales } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>{t.meta.siteName}</h4>
            <span className="muted">{t.meta.tagline}</span>
          </div>
          <div className="footer-col">
            <h4>{t.nav.learn}</h4>
            <Link href={`/${locale}/learn/beginner`}>{t.levels.beginner.title}</Link>
            <Link href={`/${locale}/learn/intermediate`}>{t.levels.intermediate.title}</Link>
            <Link href={`/${locale}/learn/advanced`}>{t.levels.advanced.title}</Link>
          </div>
          <div className="footer-col">
            <h4>{t.nav.literature}</h4>
            <Link href={`/${locale}/literature/hafez`}>{t.literatureTopics.hafez}</Link>
            <Link href={`/${locale}/literature/shahnameh`}>{t.literatureTopics.shahnameh}</Link>
            <Link href={`/${locale}/library`}>{t.nav.library}</Link>
          </div>
          <div className="footer-col">
            <h4>{t.nav.contact}</h4>
            <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
            <Link href={`/${locale}/faq`}>{t.nav.faq}</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {t.meta.siteName}. {t.footer.rights}
          </span>
          <span>
            {t.footer.languages}: {locales.map((l) => l.toUpperCase()).join(" · ")}
          </span>
        </div>
      </div>
    </footer>
  );
}
