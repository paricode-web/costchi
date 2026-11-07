"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeUp, fromRight, fromLeft } from "@/lib/motion";
import { cv, u } from  "@/lib/figma"

const POS =
  "xl:absolute xl:left-[var(--l)] xl:top-[var(--t)] xl:w-[var(--w)] xl:h-[var(--h)]";

const at = (l: number, t: number, w: number, h: number) =>
  cv({ "--l": u(l), "--t": u(t), "--w": u(w), "--h": u(h) });

const btn = (i: number) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 0.35 + i * 0.15, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-brand bg-surface pb-12 pt-28 xl:pb-0 xl:pt-0"
      style={cv({ "--hero-h": u(2312), "--page-w": u(6084.65) })}
    >
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-center gap-8 px-6 xl:block xl:h-[var(--hero-h)] xl:w-[var(--page-w)] xl:max-w-none xl:px-0">
        {/* متن */}
        <div
          className={`w-full text-center xl:text-right ${POS}`}
          style={at(3915, 224, 1555, 1334.86)}
        >
          <div
            className="flex flex-col items-center xl:items-start xl:gap-[var(--g)]"
            style={cv({ "--g": u(137.59) })}
          >
            <motion.h1
              variants={fadeUp} custom={0} initial="hidden" animate="show"
              className="text-3xl font-bold leading-snug text-ink xl:flex xl:h-[var(--bh)] xl:w-max xl:items-center xl:text-[length:var(--fs)] xl:leading-[var(--lh)]"
              style={cv({ "--fs": u(162.969), "--lh": u(199), "--bh": u(801) })}
            >
              <span className="block xl:text-right">
                بهینه‌سازی و کنترل
                <br />
                <span className="text-brand">قیمت تمام‌شده محصولات</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={1} initial="hidden" animate="show"
              className="mt-5 text-base font-medium leading-8 text-ink xl:mt-0 xl:flex xl:h-[var(--bh)] xl:w-full xl:items-center xl:text-[length:var(--fs)] xl:leading-[var(--lh)]"
              style={cv({ "--fs": u(76.7513), "--lh": u(205), "--bh": u(396.26) })}
            >
              محاسبه‌ی هوشمند قیمت تمام‌شده‌ی محصولاتتان؛ ساده، دقیق و بدون نیاز
              به دانش تخصصی.
            </motion.p>
          </div>
        </div>

        {/* دکمه‌ها (راست → چپ) */}
        <div className="flex flex-wrap justify-center gap-3 xl:contents">
          <motion.div {...btn(0)} className={`${POS}`} style={at(4859.68, 1866, 602.54, 200.32)}>
            <Link
              href="/signup"
              className="flex h-full w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-bold text-white transition-opacity hover:opacity-90 xl:gap-[var(--gp)] xl:p-0 xl:text-[length:var(--fs)]"
              style={cv({ "--gp": u(32), "--fs": u(64.1032), borderRadius: u(40.0645) })}
            >
              شروع رایگان
              <ArrowLeft strokeWidth={2.5} className="h-5 w-5 xl:h-[var(--ic)] xl:w-[var(--ic)]" style={cv({ "--ic": u(64.1) })} />
            </Link>
          </motion.div>

          <motion.div {...btn(1)} className={`${POS}`} style={at(4161, 1866, 630.67, 200.32)}>
            <a
              href="#features"
              className="flex h-full w-full items-center justify-center rounded-xl border-solid border-line bg-surface px-6 py-3 font-bold text-ink transition-colors hover:bg-surface-muted xl:p-0 xl:text-[length:var(--fs)]"
              style={cv({ "--fs": u(64.1032), borderWidth: u(4.00645), borderRadius: u(40.0645) })}
            >
              مشاهده‌ی ویژگی‌ها
            </a>
          </motion.div>
        </div>

        {/* تصاویر */}
        <div className="flex w-full max-w-md items-center justify-center xl:contents">
          {/* لپ‌تاپ: از راست */}
          <motion.div
            variants={fromRight} initial="hidden" animate="show"
            className={`relative aspect-square w-1/2 xl:aspect-auto ${POS}`}
            style={at(1850, 185, 1788, 1788)}
          >
            <Image
              src="/images/hero-laptop.png"
              alt="داشبورد محاسبه‌ی قیمت تمام‌شده"
              fill priority
              sizes="(min-width: 1280px) 450px, 50vw"
              className="object-contain"
            />
          </motion.div>

          {/* سبد خرید: از چپ */}
          <motion.div
            variants={fromLeft} initial="hidden" animate="show"
            className={`relative aspect-[1463/1574] w-1/2 xl:aspect-auto ${POS}`}
            style={at(48, 269, 1463, 1574)}
          >
            <div className="relative h-full w-full -rotate-[14.09deg]">
              <Image
                src="/images/hero-cart.png"
                alt="سبد خرید مواد اولیه"
                fill priority
                sizes="(min-width: 1280px) 370px, 50vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}