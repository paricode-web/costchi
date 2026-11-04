
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/30 bg-surface">
      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* لوگو و توضیح (راست) */}
          <div>
            <Image src="/images/logo.svg" alt="کاستچی" width={130} height={40} />
            <p className="mt-3 text-sm text-ink-soft">
              بهینه‌سازی و کنترل قیمت تمام‌شده محصولات
            </p>
          </div>

          {/* لینک‌ها (چپ) */}
          <nav aria-label="لینک‌های فوتر">
            <p className="text-sm font-bold text-ink">حقوقی</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-brand">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-brand">
                  شرایط استفاده
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-line/30 pt-6 text-center text-xs text-ink-soft">
          <p>© ۲۰۲۶ کاستچی. تمامی حقوق محفوظ است.</p>
          <p className="mt-1">Powered by K7 Studio</p>
        </div>
      </div>
    </footer>
  );
}