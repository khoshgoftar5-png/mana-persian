import fa from "./dictionaries/fa";
import en from "./dictionaries/en";

export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

export const rtlLocales: Locale[] = ["fa"];

const dictionaries = { fa, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isRtl(locale: Locale) {
  return rtlLocales.includes(locale);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fa" ? "en" : "fa";
}
