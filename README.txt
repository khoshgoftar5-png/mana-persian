# مانا (Mana) — پلتفرم آموزش زبان و ادبیات فارسی

اسکلت اولیهٔ سایت «مانا»، ساخته‌شده با Next.js (App Router)، دوزبانه (فارسی/انگلیسی) و آماده برای افزودن زبان‌های بعدی.

## ساختار پروژه

```
src/
  app/
    [locale]/            ← تمام صفحات زیر این مسیر قرار دارند (fa | en)
      page.tsx            صفحهٔ اصلی
      about/               درباره
      learn/               آموزش فارسی (+ [level])
      literature/          ادبیات فارسی (+ [topic])
      library/             کتابخانه
      shop/                فروشگاه (+ [slug])
      blog/                یادداشت‌ها (+ [slug])
      cinema/              سینما و داستان‌گویی
      contact/             تماس
      faq/                 پرسش‌های متداول
      layout.tsx           چیدمان اصلی (html/body، هدر و فوتر)
    globals.css           سیستم طراحی (رنگ، تایپوگرافی، الگوها)
    sitemap.ts / robots.ts   بهینه‌سازی برای موتورهای جستجو
    middleware.ts          تشخیص و ریدایرکت زبان
  components/              Header, Footer, MotifPanel
  lib/
    i18n.ts                تنظیمات زبان‌ها
    dictionaries/fa.ts, en.ts   متن‌های سایت به تفکیک زبان
    content.ts              محتوای نمونه (سطوح، موضوعات ادبی، کتابخانه، فروشگاه، وبلاگ)
```

### افزودن محتوای واقعی
فعلاً محتوای نمونه در `src/lib/content.ts` قرار دارد. برای شروع، همین فایل را با کتاب‌ها، مقاله‌ها و محصولات واقعی خود جایگزین کنید. در مرحلهٔ بعد می‌توان این فایل را با یک CMS (مثل Sanity، Payload یا Strapi) یا یک پایگاه‌دادهٔ ساده جایگزین کرد؛ ساختار صفحات و مسیرها بدون تغییر باقی می‌ماند.

### افزودن زبان جدید
1. یک فایل جدید مثل `src/lib/dictionaries/fr.ts` بسازید (بر اساس `en.ts`).
2. آن را در `src/lib/dictionaries` و در `src/lib/i18n.ts` به آرایهٔ `locales` اضافه کنید.
3. اگر زبان از راست‌به‌چپ است (مثل عربی)، آن را به `rtlLocales` هم اضافه کنید.

---

## راه‌اندازی محلی (روی سیستم خودتان)

```bash
npm install
npm run dev
```
سپس آدرس `http://localhost:3000` را باز کنید (به‌طور خودکار به `/fa` هدایت می‌شوید).

> نکته: فونت «Vazirmatn» از طریق `next/font/google` بارگذاری می‌شود. اگر هنگام build با خطای عدم دسترسی به این فونت مواجه شدید، آن را در `src/app/[locale]/layout.tsx` با یک فونت فارسی دیگر (مثل `Noto Sans Arabic` یا `Noto Naskh Arabic`) جایگزین کنید یا فایل فونت را به‌صورت محلی در پوشهٔ `public/fonts` قرار داده و با `@font-face` در `globals.css` بارگذاری کنید.

---

## راهنمای انتشار رایگان — گام‌به‌گام

### روش پیشنهادی: GitHub + Vercel (ساده‌ترین و رایگان برای شروع)

**۱. ساخت مخزن در GitHub**
- به [github.com](https://github.com) بروید و یک حساب بسازید (در صورت نداشتن).
- روی «New repository» کلیک کنید، نامی مثل `mana-persian` انتخاب کنید و آن را بسازید.

**۲. بارگذاری پروژه در GitHub**
از داخل پوشهٔ پروژه، دستورهای زیر را اجرا کنید:
```bash
git init
git add .
git commit -m "Initial commit — Mana platform"
git branch -M main
git remote add origin https://github.com/USERNAME/mana-persian.git
git push -u origin main
```

**۳. اتصال به Vercel**
- به [vercel.com](https://vercel.com) بروید و با حساب GitHub خود وارد شوید.
- روی «Add New Project» کلیک کنید و مخزن `mana-persian` را انتخاب کنید.
- Vercel به‌طور خودکار تشخیص می‌دهد که پروژه Next.js است؛ تنظیمات پیش‌فرض را بدون تغییر بپذیرید و روی «Deploy» بزنید.
- پس از چند دقیقه، سایت روی آدرسی مانند `mana-persian.vercel.app` در دسترس خواهد بود.

**۴. اتصال دامنهٔ اختصاصی (اختیاری)**
- در پنل پروژه در Vercel، به بخش «Settings → Domains» بروید.
- دامنهٔ خود را وارد کنید و رکوردهای DNS پیشنهادی Vercel را در پنل ثبت‌کنندهٔ دامنه (مثل Namecheap یا Cloudflare) اضافه کنید.

**۵. به‌روزرسانی‌های بعدی**
هر بار که تغییری در کد اعمال و `push` کنید، Vercel به‌طور خودکار نسخهٔ جدید را می‌سازد و منتشر می‌کند.

---

### روش جایگزین: GitHub + Cloudflare Pages

**۱ و ۲.** همان مراحل بالا برای ساخت مخزن GitHub و بارگذاری پروژه.

**۳. اتصال به Cloudflare Pages**
- به داشبورد Cloudflare بروید → «Workers & Pages» → «Create application» → «Pages» → «Connect to Git».
- مخزن `mana-persian` را انتخاب کنید.
- در تنظیمات build:
  - **Framework preset:** Next.js
  - **Build command:** `npm run build`
  - **Build output directory:** `.next`
- روی «Save and Deploy» کلیک کنید.

> توجه: برخی قابلیت‌های Next.js (مثل Middleware و برخی مسیرهای پویا) روی Cloudflare Pages به تنظیمات یا افزونهٔ `@cloudflare/next-on-pages` نیاز دارند. برای شروع سریع، Vercel سازگاری کامل‌تری با Next.js دارد؛ Cloudflare Pages گزینهٔ خوبی برای مرحلهٔ بعد یا برای هزینهٔ پهنای باند پایین‌تر در مقیاس بزرگ است.

---

## مراحل بعدی پیشنهادی

1. جایگزینی محتوای نمونه در `src/lib/content.ts` با محتوای واقعی شما.
2. افزودن سیستم پرداخت (مثل Stripe) برای فروشگاه و محتوای پولی.
3. افزودن سیستم حساب کاربری واقعی (مثل Auth.js / Clerk) برای ورود، ثبت‌نام و دانلود فایل‌های خریداری‌شده.
4. اتصال یک CMS برای مدیریت آسان مقاله‌ها، کتاب‌ها و دوره‌ها بدون نیاز به ویرایش کد.
5. جایگزینی آدرس نمونهٔ `your-domain.example.com` در `sitemap.ts` و `robots.ts` با دامنهٔ نهایی سایت. .
