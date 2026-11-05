import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-brand text-white">
      <div className="mx-auto flex min-h-[216px] max-w-[1440px] flex-col items-center justify-center px-6 py-10 text-center">
        <h2 className="text-2xl font-bold md:text-[32px] md:leading-[1.4]">
          همین حالا شروع کنید
        </h2>

        <p className="mt-2 text-base text-white/85 md:text-[22px]">
          ۵ بار تست رایگان با امکان مشاوره.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signup"
            className="inline-flex h-10 items-center rounded-lg bg-white px-5 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            ثبت‌نام رایگان
          </Link>

          <a
            href="#features"
            className="inline-flex h-10 items-center rounded-lg border border-white/60 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            بیشتر بدانید
          </a>
        </div>
      </div>
    </section>
  );
}