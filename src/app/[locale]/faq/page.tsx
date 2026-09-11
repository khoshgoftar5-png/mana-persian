import { Locale } from "@/lib/i18n";

const faqs = {
  fa: [
    { q: "چگونه می‌توانم یادگیری زبان فارسی را شروع کنم؟", a: "از بخش «آموزش فارسی» و سطح مبتدی شروع کنید؛ هر سطح شامل درس، فایل صوتی، ویدئو و تمرین است." },
    { q: "آیا محتوای رایگان هم وجود دارد؟", a: "بله، بخشی از کتاب‌ها، مقاله‌ها و درس‌ها به‌صورت رایگان در دسترس‌اند و در کتابخانه با برچسب «رایگان» مشخص شده‌اند." },
    { q: "چگونه می‌توانم محصولی را خریداری کنم؟", a: "پس از ساخت حساب کاربری، از صفحهٔ فروشگاه محصول موردنظر را انتخاب و خریداری کنید؛ فایل بلافاصله در حساب شما قابل دانلود خواهد بود." },
    { q: "آیا امکان تماس مستقیم با مدرس وجود دارد؟", a: "بله، از طریق فرم صفحهٔ تماس می‌توانید پیام بگذارید." }
  ],
  en: [
    { q: "How do I start learning Persian?", a: "Start with the Beginner level under Learn Persian; each level includes lessons, audio, video, and exercises." },
    { q: "Is any content free?", a: "Yes, a selection of books, articles, and lessons are free and marked accordingly in the Library." },
    { q: "How do I purchase a product?", a: "Create an account, choose a product in the Shop, and complete your purchase — the file becomes available in your account immediately." },
    { q: "Can I contact the instructor directly?", a: "Yes, use the form on the Contact page." }
  ]
};

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const items = faqs[locale];
  return (
    <section className="section container">
      <div className="section-head">
        <h1>{locale === "fa" ? "پرسش‌های متداول" : "Frequently Asked Questions"}</h1>
      </div>
      <div className="item-list">
        {items.map((item) => (
          <div className="item-row" key={item.q} style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h3 style={{ fontSize: "1.05rem" }}>{item.q}</h3>
              <p className="muted" style={{ margin: "0.5rem 0 0" }}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
