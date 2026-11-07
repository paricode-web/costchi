import Image from "next/image";
import Link from "next/link";
import { u } from "@/lib/figma"

export default function Navbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full bg-surface-muted/90 backdrop-blur-[10px]"
      style={{ height: u(205.99) }}
    >
      <nav
        className="mx-auto flex h-full w-full items-center justify-between px-5 xl:px-0"
        style={{ maxWidth: u(4842.6) }}
      >
        <Link href="/" aria-label="کاستچی">
          <Image
            src="/images/logo.svg"
            alt="کاستچی"
            width={901}
            height={261}
            priority
            className="h-auto"
            style={{ width: u(456.35) }}
          />
        </Link>

        <Link
          href="/login"
          className="flex items-center justify-center bg-profit font-bold text-white transition-colors hover:bg-profit/80"
          style={{
            height: u(150),
            paddingInline: u(110),
            borderRadius: u(31.6909),
            fontSize: u(56),
          }}
        >
          ورود
        </Link>
      </nav>
    </header>
  );
}