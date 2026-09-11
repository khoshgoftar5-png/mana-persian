import type { Metadata } from "next";
import { Lora, Inter, Vazirmatn } from "next/font/google";
import { locales, isRtl, getDictionary, Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getDictionary(params.locale);
  return {
    title: { default: `${t.meta.siteName} — ${t.meta.tagline}`, template: `%s — ${t.meta.siteName}` },
    description: t.meta.description,
    openGraph: {
      title: `${t.meta.siteName} — ${t.meta.tagline}`,
      description: t.meta.description,
      locale: params.locale,
      type: "website"
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`]))
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dir = isRtl(params.locale) ? "rtl" : "ltr";
  return (
    <html
      lang={params.locale}
      dir={dir}
      className={`${lora.variable} ${inter.variable} ${vazirmatn.variable}`}
    >
      <body>
        <Header locale={params.locale} />
        <main>{children}</main>
        <Footer locale={params.locale} />
      </body>
    </html>
  );
}
