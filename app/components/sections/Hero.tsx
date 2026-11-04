import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-surface pt-32 pb-12 md:pt-36 md:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-8 md:grid-cols-2">
        {/* متن (راست) */}
        <div className="text-center md:text-right">
          <h1 className="text-3xl font-bold leading-snug text-ink md:text-5xl md:leading-snug">
            بهینه‌سازی و کنترل
            <br />
            <span className="text-brand">قیمت تمام‌شده محصولات</span>
          </h1>

          <p className="mt-5 text-base leading-8 text-ink-soft md:text-lg">
            محاسبه‌ی هوشمند قیمت تمام‌شده‌ی محصولاتتان؛ ساده، دقیق و بدون نیاز
            به دانش تخصصی.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-medium text-white shadow-lg shadow-brand/25 transition-opacity hover:opacity-90"
            >
              شروع رایگان
              <ArrowLeft size={18} />
            </Link>
            <a
              href="#features"
              className="rounded-xl border border-line/60 bg-surface px-6 py-3 font-medium text-ink transition-colors hover:bg-surface-muted"
            >
              مشاهده‌ی ویژگی‌ها
            </a>
          </div>
        </div>

        {/* تصویرها (چپ) */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
          {/* لکه‌ی آبی پشت تصویرها */}
          <div
            aria-hidden
            className="absolute inset-x-2 inset-y-4 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-gradient-to-br from-brand-50 to-brand/10"
          />

          {/* لپ‌تاپ */}
          <div className="absolute right-0 top-0 h-[92%] w-[56%]">
            <Image
              src="/images/hero-laptop.png"
              alt="داشبورد محاسبه‌ی قیمت تمام‌شده"
              fill
              priority
              sizes="(min-width: 768px) 300px, 50vw"
              className="object-contain"
            />
          </div>

          {/* سبد خرید */}
          <div className="absolute bottom-0 left-0 h-[86%] w-[52%]">
            <Image
              src="/images/hero-cart.png"
              alt="سبد خرید مواد اولیه"
              fill
              priority
              sizes="(min-width: 768px) 280px, 48vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}