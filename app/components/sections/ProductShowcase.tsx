import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  "انتخاب مواد اولیه از کاتالوگ استاندارد",
  "تحلیل تخصصی قیمت‌گذاری",
  "تحلیل تخصصی حاشیه سود محصولات",
  "مقایسه با نرخ متوسط بازار",
  "تاریخچه‌ی ۳۰ روزه‌ی قیمت",
];

export default function ProductShowcase() {
  return (
    <section id="features" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-relaxed text-ink md:text-3xl md:leading-relaxed">
          قیمت تمام‌شده‌ی هر محصول را با مواد اولیه استاندارد محاسبه کنید و با
          نرخ بازار مقایسه کنید.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* ---------- کارت آبی: مواد اولیه + ویژگی‌ها (در RTL سمت راست) ---------- */}
          <article className="relative flex flex-col overflow-hidden rounded-3xl bg-brand text-white lg:col-span-2">
            <div
              aria-hidden
              className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative p-8 pb-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-ink">
                ۱
              </span>
              <h3 className="mt-5 text-xl font-bold">مواد اولیه را انتخاب کنید</h3>
              <p className="mt-3 leading-8 text-white/85">
                از کاتالوگ جامع ۵۰۰+ قلمی، مواد اولیه‌ی محصولتان را انتخاب کنید
                و مقدار هرکدام را وارد کنید.
              </p>
<ul className="mt-6 flex flex-col gap-3">
  {features.map((f, i) => (
    <li
      key={f}
      className={`group flex w-fit max-w-[88%] items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium leading-6 text-ink transition-colors duration-200 hover:bg-accent ${
        i % 2 === 0 ? "self-start" : "self-end"
      }`}
    >
      <Check
        size={16}
        strokeWidth={3}
        className="shrink-0 text-profit transition-colors duration-200 group-hover:text-ink"
      />
      {f}
    </li>
  ))}
</ul>
            </div>

            {/* سبد: روی کف کارت ایستاده */}
            <div className="relative mt-auto h-64 w-full md:h-72">
              <div
                aria-hidden
                className="absolute bottom-3 left-1/2 h-4 w-3/5 -translate-x-1/2 rounded-full bg-black/30 blur-md"
              />
              <Image
                src="/images/hero-cart.png"
                alt="سبد خرید مواد اولیه"
                fill
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-contain object-bottom pb-4"
              />
            </div>
          </article>

          {/* ---------- کارت روشن: قیمت تمام‌شده (در RTL سمت چپ) ---------- */}
          <article className="flex flex-col rounded-3xl border border-line/40 bg-surface-muted p-8 lg:col-span-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
              ۲
            </span>
            <h3 className="mt-5 text-xl font-bold text-ink">
              قیمت تمام‌شده را در لحظه ببینید
            </h3>
            <p className="mt-3 leading-8 text-ink-soft">
              قیمت تمام‌شده‌ی هر محصول محاسبه می‌شود و با نرخ متوسط بازار مقایسه
              می‌شود تا قیمت فروش درست را تعیین کنید.
            </p>

            <div className="mt-8 flex flex-1 items-center justify-center">
  <div className="relative w-full max-w-lg">
    <Image
      src="/images/chart.png"
      alt="پیش‌نمایش محاسبه‌ی قیمت تمام‌شده در کاستچی"
      width={800}
      height={600}
      sizes="(min-width: 1024px) 560px, 90vw"
      className="h-auto w-full rounded-2xl shadow-xl"
    />

    {/* برچسب صرفه‌جویی: پایین‌چپ نمودار، مثل Figma */}
    <div className="absolute -bottom-4 -left-2 flex items-center gap-2.5 rounded-xl border border-line/30 bg-surface px-3.5 py-2.5 shadow-lg sm:-left-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-profit text-lg font-bold text-white">
        ↓
      </span>
      <div className="leading-tight">
        <p className="text-xs font-medium text-profit">صرفه‌جویی</p>
        <p className="text-base font-bold text-ink">۱۲٪ هزینه</p>
      </div>
    </div>
  </div>
</div>
          </article>
        </div>
      </div>
    </section>
  );
}