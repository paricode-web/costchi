import Image from "next/image";
import Link from "next/link";
import { cv, u } from "@/lib/figma"

const POS =
  "xl:absolute xl:left-[var(--l)] xl:top-[var(--t)] xl:w-[var(--w)]";
const at = (l: number, t: number, w: number) =>
  cv({ "--l": u(l), "--t": u(t), "--w": u(w) });

export default function Footer() {
  return (
    <footer
      className="overflow-hidden border-solid border-line-soft bg-surface-muted"
      style={{ borderTopWidth: u(3.16909) }}
    >
      <div
        className="relative mx-auto flex flex-col items-center gap-8 px-6 py-10 text-center xl:block xl:h-[var(--fh)] xl:w-[var(--pw)] xl:px-0 xl:py-0 xl:text-right"
        style={cv({ "--fh": u(861.99), "--pw": u(6084.65) })}
      >
        {/* لوگو (راست) */}
        <div className={POS} style={at(4892, 95.68, 901.39)}>
          <Image
            src="/images/logo.svg"
            alt="کاستچی"
            width={901}
            height={261}
            className="mx-auto h-auto w-40 xl:w-full"
          />
        </div>

        <p
          className={`text-sm text-muted-blue xl:text-[length:var(--fs)] xl:leading-[var(--lh)] ${POS}`}
          style={cv({ ...at(4667, 376.01, 1125.9), "--fs": u(54.5495), "--lh": u(89) })}
        >
          بهینه‌سازی و کنترل قیمت تمام‌شده محصولات
        </p>

        {/* حقوقی */}
        <nav aria-label="لینک‌های فوتر" className={POS} style={at(1292.99, 129.93, 261.7)}>
          <p
            className="text-sm font-medium text-muted-blue xl:text-[length:var(--fs)] xl:leading-[var(--lh)]"
            style={cv({ "--fs": u(38.0291), "--lh": u(51), letterSpacing: u(0.950727) })}
          >
            حقوقی
          </p>
          <ul
            className="mt-3 flex flex-col gap-2 text-sm xl:mt-[var(--lm)] xl:gap-[var(--lg)] xl:text-[length:var(--fs)]"
            style={cv({ "--lm": u(44.37), "--lg": u(41.2), "--fs": u(44.3673) })}
          >
            {[
              { href: "/privacy", label: "حریم خصوصی" },
              { href: "/terms", label: "شرایط استفاده" },
            ].map((l) => (
              <li key={l.href} className="xl:flex xl:h-[var(--ih)] xl:items-center" style={cv({ "--ih": u(60.21) })}>
                <Link href={l.href} className="text-ink transition-colors hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* جای اینماد (سمت چپِ حریم خصوصی) */}
        <div
          aria-label="جایگاه نماد اینماد"
          className={`flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-line text-xs text-ink-soft xl:h-[var(--h)] ${POS}`}
          style={cv({ ...at(733, 129.93, 440), "--h": u(440) })}
        >
          اینماد
        </div>

        {/* نوار پایین */}
        <div
          className={`w-full border-t border-solid border-line-soft pt-4 text-xs text-muted-blue xl:h-[var(--bh)] xl:pt-[var(--bp)] xl:text-[length:var(--fs)] xl:leading-[var(--lh)] ${POS}`}
          style={cv({
            ...at(1292.99, 598.96, 3498.7),
            "--bh": u(263.03), "--bp": u(67.6),
            "--fs": u(38.0291), "--lh": u(57),
            borderTopWidth: u(3.16909),
          })}
        >
          <p className="text-center">© ۲۰۲۶ کاستچی. تمامی حقوق محفوظ است.</p>
          <p className="mt-[9px] text-center xl:mt-[var(--pg)]" style={cv({ "--pg": u(39) })}>
            <a
              href="https://k7webstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="inline-block transition-colors hover:text-brand"
            >
              Powered by K
              <span style={{ fontFamily: "'Shabnam FD WOL', sans-serif" }}>7</span>{" "}
              Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}