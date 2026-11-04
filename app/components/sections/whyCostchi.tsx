import {
  BadgePercent,
  Gift,
  Lightbulb,
  ListChecks,
  TrendingUp,
  Truck,
} from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "معرفی منابع تأمین‌کننده",
    text: "تأمین‌کنندگان مواد اولیه با بهترین قیمت را بشناسید.",
  },
  {
    icon: BadgePercent,
    title: "راهنمای قیمت‌گذاری",
    text: "با مشاهده‌ی حاشیه‌ی سود محصولات، قیمت فروش مناسب را تعیین کنید.",
  },
  {
    icon: Lightbulb,
    title: "تحلیل بدون نیاز به تخصص",
    text: "تحلیل بر اساس نرخ قیمت‌گذاری و حاشیه‌ی سود فروش محصولات بازار.",
  },
  {
    icon: Gift,
    title: "تست رایگان",
    text: "محاسبه‌ی ۵ محصول کاملاً رایگان.",
  },
  {
    icon: TrendingUp,
    title: "نرخ روز بازار ایران",
    text: "مشاهده‌ی قیمت به‌روز مواد اولیه‌ی بازار ایران.",
  },
  {
    icon: ListChecks,
    title: "مدیریت مواد تشکیل‌دهنده",
    text: "هزینه‌ی هر محصول را با فهرست دقیق مواد اولیه و مقادیر ثبت کنید.",
  },
];

export default function WhyCostchi() {
  return (
    <section id="why" className="scroll-mt-24 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* عنوان با خط‌های دو طرف */}
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden className="h-px w-12 bg-brand/30 sm:w-24" />
          <h2 className="text-2xl font-bold text-ink md:text-3xl">
            چرا <span className="text-brand">کاستچی؟</span>
          </h2>
          <span aria-hidden className="h-px w-12 bg-brand/30 sm:w-24" />
        </div>

        {/* کارت‌ها */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-line/30 bg-surface p-5 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                <Icon size={24} />
              </span>
              <div>
                <h3 className="font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-7 text-ink-soft">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}