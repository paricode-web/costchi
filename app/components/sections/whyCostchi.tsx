"use client";
import { motion } from "framer-motion";
import {
  BadgePercent, Gift, Lightbulb, ListChecks, TrendingUp, Truck,
} from "lucide-react";
import { fadeUp } from  "@/lib/motion"
import { cv, u } from  "@/lib/figma"

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

export default function WhyCostchi() {
  return (
    <section
      id="why"
      className="scroll-mt-24 overflow-hidden bg-surface py-12 xl:pb-[var(--pb)] xl:pt-0"
      style={vars}
    >
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-3xl font-bold text-brand xl:mt-[var(--h2m)] xl:flex xl:h-[var(--h2h)] xl:items-center xl:justify-center xl:text-[length:var(--h2)] xl:leading-[var(--h2l)]"
      >
        چرا کاستچی؟
      </motion.h2>

      <ul className="mx-auto mt-8 grid w-full max-w-md gap-4 px-6 sm:max-w-3xl sm:grid-cols-2 xl:mt-[var(--gm)] xl:w-[var(--gw)] xl:max-w-none xl:grid-cols-3 xl:gap-[var(--gap)] xl:px-0">
        {items.map(({ icon: Icon, title, text }, i) => (
          <motion.li
            key={title}
            variants={fadeUp} custom={i % 3}
            initial="hidden" whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-start gap-4 border-solid border-line-soft bg-card-bg p-5 xl:block xl:h-[var(--ch)] xl:p-0"
            style={{ borderWidth: u(3.16909), borderRadius: u(38.0291) }}
          >
            {/* موشن یک‌باره آیکون */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 + (i % 3) * 0.1 }}
              className="shrink-0 text-brand-alt xl:absolute xl:right-[var(--ir)] xl:top-[var(--it)]"
            >
              <Icon strokeWidth={2} className="h-7 w-7 xl:h-[var(--is)] xl:w-[var(--is)]" />
            </motion.span>

            <div className="text-right xl:absolute xl:right-[var(--tr)] xl:top-[var(--tt)] xl:w-[var(--tw)]">
              <h3 className="font-bold text-ink xl:text-[length:var(--h3)] xl:leading-[var(--h3l)]">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-7 text-ink xl:mt-[var(--pm)] xl:text-[length:var(--p)] xl:leading-[var(--pl)]">
                {text}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}