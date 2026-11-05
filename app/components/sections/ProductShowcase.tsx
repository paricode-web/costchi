
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

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* متن و ویژگی‌ها */}
          <div>
            <h3 className="text-xl font-bold text-ink">
              محاسبه‌ی قیمت تمام‌شده
            </h3>

            <p className="mt-3 leading-8 text-ink-soft">
              با وارد کردن مواد اولیه از کاتالوگ جامع ۵۰۰+ قلمی، قیمت تمام‌شده‌ی
              هر محصول را در لحظه محاسبه کنید و با نرخ بازار مقایسه کنید.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-ink">
                  <Check size={18} className="shrink-0 text-profit" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* عکس نمودار */}
          <div className="relative mx-auto w-full max-w-lg">
            <Image
              src="/images/chart.png"
              alt="پیش‌نمایش محاسبه‌ی قیمت تمام‌شده در کاستچی"
              width={800}
              height={600}
              sizes="(min-width: 1024px) 512px, 90vw"
              className="h-auto w-full"
            />

<div className="absolute bottom-0 right-0 flex items-center gap-2.5 rounded-xl bg-surface px-3.5 py-2.5 shadow-md sm:-right-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-profit text-lg font-bold text-white">
                ↓
              </span>

              <div className="leading-tight">
                <p className="text-xs font-medium text-profit">
                  صرفه‌جویی
                </p>
                <p className="text-base font-bold text-ink">
                  ۱۲٪ هزینه
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
