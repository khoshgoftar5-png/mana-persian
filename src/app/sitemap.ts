import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { levels, literatureTopics, blogPosts, shopProducts } from "@/lib/content";

const BASE = "https://your-domain.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/learn", "/literature", "/library", "/shop", "/blog", "/cinema", "/contact", "/faq"];
  const dynamicPaths = [
    ...levels.map((l) => `/learn/${l}`),
    ...literatureTopics.map((t) => `/literature/${t}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
    ...shopProducts.map((p) => `/shop/${p.slug}`)
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of [...staticPaths, ...dynamicPaths]) {
      entries.push({ url: `${BASE}/${locale}${path}`, lastModified: new Date() });
    }
  }
  return entries;
}
