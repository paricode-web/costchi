"use client";
import { motion } from "framer-motion";
import {
  BadgePercent,
  Gift,
  Lightbulb,
  ListChecks,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { cv, u } from "@/lib/figma";

const items = [
  { icon: Truck, title: "معرفی منابع تأمین‌کننده", text: "تأمین‌کنندگان مواد اولیه با بهترین قیمت را بشناسید." },
  { icon: BadgePercent, title: "راهنمای قیمت‌گذاری", text: "با مشاهده‌ی حاشیه‌ی سود محصولات، قیمت فروش مناسب را تعیین کنید." },
  { icon: Lightbulb, title: "تحلیل بدون نیاز به تخصص", text: "تحلیل بر اساس نرخ قیمت‌گذاری و حاشیه‌ی سود فروش محصولات بازار." },
  { icon: Gift, title: "تست رایگان", text: "محاسبه‌ی ۵ محصول کاملاً رایگان." },
  { icon: TrendingUp, title: "نرخ روز بازار ایران", text: "مشاهده‌ی قیمت به‌روز مواد اولیه‌ی بازار ایران." },
  { icon: ListChecks, title: "مدیریت مواد تشکیل‌دهنده", text: "هزینه‌ی هر محصول را با فهرست دقیق مواد اولیه و مقادیر ثبت کنید." },
];

const vars = cv({
  "--h2": u(211.915), "--h2l": u(268), "--h2h": u(268.43), "--h2m": u(157.61),
  "--gm": u(252.15), "--gw": u(3498.7), "--gap": u(63.37), "--ch": u(444.46),
  "--ir": u(95.07), "--it": u(95.07), "--is": u(69.72),
  "--tr": u(243.2), "--tt": u(66.5), "--tw": u(798.7),
  "--h3": u(57.0436), "--h3l": u(82),
  "--pm": u(16.4), "--p": u(44.3673), "--pl": u(72),
  "--pb": u(253.53),
});

/**
 * آیکون با انیمیشن چندمرحله‌ای؛ هر آیکون جدا، وقتی خودش به دید برسد
 * یک‌بار اجرا می‌شود و بعد سر جایش ثابت می‌ماند.
 */
function AnimatedIcon({ Icon }: { Icon: LucideIcon }) {
  const viewport = { once: true, amount: 0.8 } as const;

  return (
    <span className="relative shrink-0 text-brand-alt xl:absolute xl:right-[var(--ir)] xl:top-[var(--it)]">
      {/* دایره‌ی پس‌زمینه: باز می‌شود و می‌ماند */}
      <motion.span
        aria-hidden
        className="absolute rounded-full bg-brand-alt/10"
        style={{ inset: u(-22) }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewport}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.1 }}
      />

      {/* حلقه‌ی پخش‌شونده: یک بار پخش می‌شود و محو می‌شود */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full border-2 border-brand-alt"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: [0, 0.6, 0], scale: [0.6, 1.8, 2.4] }}
        viewport={viewport}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.35 }}
      />

      {/* خود آیکون: پرش + چرخش + لرزش نرم تا آرام شدن */}
      <motion.span
        className="relative block"
        initial={{ opacity: 0, scale: 0, rotate: -60, y: 20 }}
        whileInView={{
          opacity: 1,
          scale: [0, 1.35, 0.9, 1.08, 1],
          rotate: [-60, 20, -10, 4, 0],
          y: [20, -12, 0, -3, 0],
        }}
        viewport={viewport}
        transition={{
          duration: 1.1,
          ease: "easeOut",
          times: [0, 0.4, 0.65, 0.85, 1],
        }}
      >
        <Icon
          strokeWidth={2}
          className="h-7 w-7 xl:h-[var(--is)] xl:w-[var(--is)]"
        />
      </motion.span>
    </span>
  );
}

export default function WhyCostchi() {
  return (
    <section
      id="why"
      className="scroll-mt-24 overflow-hidden bg-surface py-12 xl:pb-[var(--pb)] xl:pt-0"
      style={vars}
    >
      <h2 className="text-center text-3xl font-bold text-brand xl:mt-[var(--h2m)] xl:flex xl:h-[var(--h2h)] xl:items-center xl:justify-center xl:text-[length:var(--h2)] xl:leading-[var(--h2l)]">
        چرا کاستچی؟
      </h2>

      <ul className="mx-auto mt-8 grid w-full max-w-md gap-4 px-6 sm:max-w-3xl sm:grid-cols-2 xl:mt-[var(--gm)] xl:w-[var(--gw)] xl:max-w-none xl:grid-cols-3 xl:gap-[var(--gap)] xl:px-0">
        {items.map(({ icon, title, text }) => (
          <li
            key={title}
            className="relative flex items-start gap-4 border-solid border-line-soft bg-card-bg p-5 xl:block xl:h-[var(--ch)] xl:p-0"
            style={{ borderWidth: u(3.16909), borderRadius: u(38.0291) }}
          >
            <AnimatedIcon Icon={icon} />

            <div className="text-right xl:absolute xl:right-[var(--tr)] xl:top-[var(--tt)] xl:w-[var(--tw)]">
              <h3 className="font-bold text-ink xl:text-[length:var(--h3)] xl:leading-[var(--h3l)]">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-7 text-ink xl:mt-[var(--pm)] xl:text-[length:var(--p)] xl:leading-[var(--pl)]">
                {text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}