import Image from "next/image";
import Link from "next/link";

// گوشه‌های نامتقارن: بالا‌راست و پایین‌چپ گرد، دو گوشه‌ی دیگر تقریباً تیز
const radius =
  "rounded-[2rem_0.5rem_2rem_0.5rem] md:rounded-[4rem_1rem_4rem_1rem]";

export default function CTASection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="relative isolate">
          {/* لایه‌ی زرد پشت کارت (پایین‌چپ) */}
         

          <div
            className={`relative overflow-hidden bg-brand px-6 py-10 text-white md:px-12 md:py-14 ${radius}`}
          >
            {/* اشکال تزئینی نامتقارن */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-white/10" />
              <div className="absolute -bottom-32 left-[34%] h-72 w-72 rounded-full border-[32px] border-white/10" />

            </div>

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              {/* متن (راست) */}
              <div className="text-center md:text-right">
                <h2 className="text-3xl font-bold md:text-4xl">
                  همین حالا شروع کنید
                </h2>
                <p className="mt-3 text-lg text-white/90">
                  ۵ بار تست رایگان با امکان مشاوره.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <Link
                    href="/signup"
                    className="rounded-xl bg-white px-6 py-3 font-medium text-brand transition-colors hover:bg-accent hover:text-ink"
                  >
                    ثبت‌نام رایگان
                  </Link>
                  <a
                    href="#features"
                    className="rounded-xl border border-white/60 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
                  >
                    بیشتر بدانید
                  </a>
                </div>
              </div>

              {/* تصویر (چپ) */}
              <div className="relative mx-auto h-52 w-full max-w-xs md:h-64">
                <div
                  aria-hidden
                  className="absolute inset-4 rounded-full bg-white/15 blur-xl"
                />
                <Image
                  src="/images/hero-laptop.png"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 320px, 80vw"
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}