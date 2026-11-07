import { Check } from "lucide-react";
import Reveal from "../Reveal";
import CostChart from "./CostChart";
import { cv, u } from "@/lib/figma"

const features = [
  "انتخاب مواد اولیه از کاتالوگ استاندارد",
  "تحلیل تخصصی قیمت‌گذاری",
  "تحلیل تخصصی حاشیه سود محصولات",
  "مقایسه با نرخ متوسط بازار",
  "تاریخچه‌ی ۳۰ روزه‌ی قیمت",
];

const vars = cv({
  "--pt": u(366.12), "--pb": u(53.39),
  "--hw": u(2494), "--hfs": u(99.1061), "--hlh": u(173),
  "--cmt": u(86),
  "--card-w": u(3292.97), "--card-h": u(1392),
  "--card-pl": u(276.24), "--card-pr": u(238.24),
  "--win-mt": u(56.85), "--col-mt": u(94.15), "--col-w": u(1184.28),
});

export default function ProductShowcase() {
  return (
    <section
      id="features"
      className="scroll-mt-20 overflow-hidden bg-surface py-16 xl:pb-[var(--pb)] xl:pt-[var(--pt)]"
      style={vars}
    >
      <div className="mx-auto max-w-6xl px-8 xl:max-w-none xl:px-0">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-relaxed text-ink/[.69] md:text-3xl md:leading-relaxed xl:max-w-[var(--hw)] xl:text-[length:var(--hfs)] xl:leading-[var(--hlh)]">
            قیمت تمام‌شده‌ی هر محصول را با مواد اولیه استاندارد محاسبه کنید و با
            نرخ بازار مقایسه کنید.
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-12 w-full max-w-[823px] xl:mt-[var(--cmt)] xl:w-[var(--card-w)] xl:max-w-none">
          <div
            className="box-border flex flex-col items-center gap-10 border-solid border-ink-soft bg-surface-muted px-5 py-8 xl:h-[var(--card-h)] xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:py-0 xl:pl-[var(--card-pl)] xl:pr-[var(--card-pr)]"
            style={{ borderWidth: u(3.47626), borderRadius: u(41.7151) }}
          >
            {/* متن (راست) */}
            <div className="w-full xl:mt-[var(--col-mt)] xl:w-[var(--col-w)]">
              <span
                className="flex items-center justify-center bg-profit"
                style={{ width: u(172.62), height: u(172.62), borderRadius: u(47.0787) }}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden style={{ width: u(94.16), height: u(94.16) }}>
                  <circle cx="12" cy="12" r="9" fill="#FEFEFE" stroke="#4C8948" strokeWidth="1.8" />
                  <polyline points="12 6 12 12 16 14" stroke="#4C8948" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <h3
                className="font-bold text-ink"
                style={{ marginTop: u(62.77), fontSize: u(70.618), lineHeight: u(102) }}
              >
                محاسبه‌ی قیمت تمام‌شده
              </h3>

              <p
                className="text-ink"
                style={{ marginTop: u(27.47), fontSize: u(54.9251), lineHeight: u(84.35) }}
              >
                با وارد کردن مواد اولیه از کاتالوگ جامع ۵۰۰+ قلمی، قیمت
                تمام‌شده‌ی هر محصول را در لحظه محاسبه کنید و با نرخ بازار مقایسه
                کنید.
              </p>

              <ul className="flex flex-col" style={{ marginTop: u(64.9), gap: u(35.64) }}>
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center text-ink"
                    style={{ height: u(74.54), gap: u(29.92), fontSize: u(54.9251) }}
                  >
                    <Check
                      strokeWidth={3}
                      className="shrink-0 text-profit"
                      style={{ width: u(54.93), height: u(54.93) }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* چارت (چپ) */}
            <div className="xl:mt-[var(--win-mt)]">
              <CostChart />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}