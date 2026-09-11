export type Level = "beginner" | "intermediate" | "advanced";
export const levels: Level[] = ["beginner", "intermediate", "advanced"];

export type LiteratureTopic =
  | "classicalPoetry"
  | "contemporaryPoetry"
  | "prose"
  | "shahnameh"
  | "hafez"
  | "saadi"
  | "rumi"
  | "ferdowsi"
  | "contemporaryLit"
  | "criticism";

export const literatureTopics: LiteratureTopic[] = [
  "classicalPoetry",
  "contemporaryPoetry",
  "prose",
  "shahnameh",
  "hafez",
  "saadi",
  "rumi",
  "ferdowsi",
  "contemporaryLit",
  "criticism"
];

export interface LibraryItem {
  slug: string;
  title: { fa: string; en: string };
  author: string;
  level: Level | "all";
  topic: LiteratureTopic | "general";
  free: boolean;
  price?: number;
  type: "pdf" | "ebook" | "article" | "audio";
}

export const libraryItems: LibraryItem[] = [
  {
    slug: "alphabet-workbook",
    title: { fa: "دفتر تمرین الفبای فارسی", en: "Persian Alphabet Workbook" },
    author: "مانا",
    level: "beginner",
    topic: "general",
    free: true,
    type: "pdf"
  },
  {
    slug: "hafez-selected-ghazals",
    title: { fa: "گزیدهٔ غزلیات حافظ با شرح", en: "Selected Ghazals of Hafez, Annotated" },
    author: "مانا",
    level: "advanced",
    topic: "hafez",
    free: false,
    price: 12,
    type: "ebook"
  },
  {
    slug: "shahnameh-intro-essay",
    title: { fa: "درآمدی بر شاهنامهٔ فردوسی", en: "An Introduction to Ferdowsi's Shahnameh" },
    author: "مانا",
    level: "intermediate",
    topic: "shahnameh",
    free: true,
    type: "article"
  },
  {
    slug: "everyday-conversation-audio",
    title: { fa: "مکالمات روزمرهٔ فارسی", en: "Everyday Persian Conversations" },
    author: "مانا",
    level: "beginner",
    topic: "general",
    free: false,
    price: 8,
    type: "audio"
  }
];

export interface ShopProduct {
  slug: string;
  title: { fa: string; en: string };
  description: { fa: string; en: string };
  author: string;
  price: number;
  language: string;
  fileType: "PDF" | "Ebook" | "Audio" | "Video" | "Course";
}

export const shopProducts: ShopProduct[] = [
  {
    slug: "advanced-reading-course",
    title: { fa: "دورهٔ خواندن متون کلاسیک", en: "Reading Classical Texts — Course" },
    description: {
      fa: "دوره‌ای فشرده برای خواندن مستقیم متون کلاسیک فارسی با راهنمای واژگان و دستور.",
      en: "An intensive course for reading classical Persian texts directly, with vocabulary and grammar support."
    },
    author: "مانا",
    price: 49,
    language: "FA/EN",
    fileType: "Course"
  },
  {
    slug: "saadi-golestan-ebook",
    title: { fa: "گلستان سعدی — نسخهٔ توضیحی", en: "Saadi's Golestan — Annotated Edition" },
    description: {
      fa: "متن کامل گلستان همراه با واژه‌نامه و توضیحات برای فارسی‌آموزان پیشرفته.",
      en: "The complete Golestan with glossary and notes for advanced learners."
    },
    author: "مانا",
    price: 15,
    language: "FA/EN",
    fileType: "Ebook"
  },
  {
    slug: "screenwriting-notes-video",
    title: { fa: "یادداشت‌های فیلمنامه‌نویسی — ویدئو", en: "Screenwriting Notes — Video Series" },
    description: {
      fa: "مجموعه‌ای از یادداشت‌های تصویری دربارهٔ ساختار روایت و فیلمنامه‌نویسی.",
      en: "A video series on narrative structure and the craft of screenwriting."
    },
    author: "مانا",
    price: 25,
    language: "FA",
    fileType: "Video"
  }
];

export interface BlogPost {
  slug: string;
  title: { fa: string; en: string };
  excerpt: { fa: string; en: string };
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-learn-persian",
    title: { fa: "چرا فارسی بیاموزیم؟", en: "Why Learn Persian?" },
    excerpt: {
      fa: "نگاهی به هزار سال شعر، نثر و اندیشه که با یادگیری این زبان در دسترس شما قرار می‌گیرد.",
      en: "A look at a thousand years of poetry, prose, and thought that opens up once you learn this language."
    },
    date: "2026-08-01",
    category: "Learning"
  },
  {
    slug: "reading-hafez-for-beginners",
    title: { fa: "خواندن حافظ برای مبتدیان؛ از کجا شروع کنیم؟", en: "Reading Hafez as a Beginner: Where to Start" },
    excerpt: {
      fa: "راهنمایی عملی برای نخستین رویارویی با غزل‌های حافظ.",
      en: "A practical guide to your first encounter with Hafez's ghazals."
    },
    date: "2026-07-12",
    category: "Literature"
  },
  {
    slug: "screenwriting-and-persian-storytelling",
    title: { fa: "فیلمنامه‌نویسی و سنت داستان‌گویی ایرانی", en: "Screenwriting and the Persian Storytelling Tradition" },
    excerpt: {
      fa: "چگونه ساختارهای روایی کهن ایرانی هنوز در فیلمنامه‌نویسی امروز زنده‌اند.",
      en: "How ancient Persian narrative structures still live in screenwriting today."
    },
    date: "2026-06-20",
    category: "Cinema & Storytelling"
  }
];
