import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-line/40 bg-surface-muted">
      <nav className="mx-auto flex h-12 w-full max-w-[1440px] items-center justify-between px-5 md:h-[50px] md:px-10">
        {/* لوگو (راست) */}
        <Link href="/" aria-label="کاستچی">
          <Image
            src="/images/logo.svg"
            alt="کاستچی"
            width={901}
            height={261}
            priority
            className="h-auto w-24 md:w-28"
          />
        </Link>

        {/* دکمه‌ها (چپ) */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-md border border-line/50 bg-surface px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-white"
          >
            ورود
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-brand px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            شروع رایگان
          </Link>
        </div>
      </nav>
    </header>
  );
}