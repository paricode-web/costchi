import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const linkClass =
    "text-sm font-medium text-ink-soft transition-colors hover:text-brand";

  return (
    <header className="fixed inset-x-0 top-3 z-50 md:top-4">
      <div className="mx-auto max-w-6xl px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-line/30 bg-surface/90 px-5 shadow-sm backdrop-blur-md">
          {/* لوگو (راست) */}
          <Link href="/" aria-label="کاستچی">
            <Image src="/images/logo.svg" alt="کاستچی" width={120} height={36} priority />
          </Link>

        

          {/* دکمه‌ها (چپ) */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-muted sm:inline-flex"
            >
              ورود
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              شروع رایگان
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}