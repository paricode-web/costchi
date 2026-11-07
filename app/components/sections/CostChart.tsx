"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { u } from "@/lib/figma"

const rows = [
  { name: "تخم‌مرغ", qty: "۳ عدد", price: "۱۲,۰۰۰ ت" },
  { name: "آرد گندم", qty: "۲۰۰ گرم", price: "۸,۴۰۰ ت" },
  { name: "کره", qty: "۵۰ گرم", price: "۱۸,۵۰۰ ت" },
];

// ارتفاع‌ها از top%/bottom% همان CSS Figma محاسبه شده‌اند (ترتیب چپ به راست)
const bars = [
  { h: 140.07, color: "bg-accent" },
  { h: 175.09, color: "bg-brand" },
  { h: 106.99, color: "bg-loss" },
  { h: 155.64, color: "bg-profit" },
  { h: 97.3, color: "bg-line" },
  { h: 126.44, color: "bg-ink-soft/80" },
  { h: 77.79, color: "bg-profit/[0.37]" },
];

export default function CostChart() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [100, 12]);
  const [num, setNum] = useState(100);
  useMotionValueEvent(value, "change", (v) => setNum(Math.round(v)));

  return (
    <div
      ref={ref}
      className="relative max-w-full shrink-0"
      style={{ width: u(1098.79), height: u(1247.58) }}
    >
      {/* پنجره */}
      <div
        className="box-border h-full overflow-hidden border-solid border-line bg-surface"
        style={{
          borderWidth: u(2.86143),
          borderRadius: u(34.3371),
          boxShadow: `0 ${u(57.2286)} ${u(71.5357)} ${u(-14.3071)} rgba(0,0,0,0.1), 0 ${u(22.8914)} ${u(28.6143)} ${u(-17.1686)} rgba(0,0,0,0.1)`,
        }}
      >
        {/* هدر مرورگر */}
        <div
          dir="ltr"
          className="box-content flex items-center border-b-solid border-line bg-surface-muted"
          style={{
            height: u(145.93),
            paddingInline: u(45.78),
            gap: u(22.88),
            borderBottomWidth: u(2.86143),
            borderBottomStyle: "solid",
          }}
        >
          <div
            className="flex flex-1 items-center justify-center bg-surface text-ink-soft"
            style={{
              height: u(74.4),
              borderRadius: u(11.4457),
              fontSize: u(34.3371),
              lineHeight: u(52),
            }}
          >
            costchi.ir
          </div>
          <div className="flex shrink-0" style={{ gap: u(22.88) }} aria-hidden>
            {["bg-profit", "bg-accent", "bg-loss"].map((c) => (
              <span
                key={c}
                className={`rounded-full ${c}`}
                style={{ width: u(34.34), height: u(34.34) }}
              />
            ))}
          </div>
        </div>

        {/* بدنه */}
        <div style={{ paddingInline: u(45.78), paddingTop: u(151.66) }}>
          <ul>
            {rows.map((r, i) => (
              <li
                key={r.name}
                className="box-border flex items-center justify-between border-b-solid border-line"
                style={{
                  height: u(117.32),
                  marginTop: i ? u(34.34) : 0,
                  borderBottomWidth: u(2.86143),
                  borderBottomStyle: "solid",
                }}
              >
                <span
                  className="text-ink"
                  style={{ fontSize: u(40.06), lineHeight: u(69) }}
                >
                  {r.name}
                </span>
                <span className="flex items-center" style={{ gap: u(44.71) }}>
                  <span
                    className="font-medium text-ink-soft"
                    style={{ fontSize: u(34.3371), lineHeight: u(46) }}
                  >
                    {r.qty}
                  </span>
                  <span
                    className="font-medium text-ink"
                    style={{ fontSize: u(34.3371), lineHeight: u(46) }}
                  >
                    {r.price}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* قیمت تمام‌شده */}
          <div
            className="flex items-center justify-between text-brand"
            style={{
              height: u(74.4),
              marginTop: u(62.95),
              paddingLeft: u(34.34),
              paddingRight: u(33.38),
            }}
          >
            <span
              className="font-bold"
              style={{ fontSize: u(40.06), lineHeight: u(57) }}
            >
              قیمت تمام‌شده
            </span>
            <span
              className="font-bold"
              style={{ fontSize: u(51.5057), lineHeight: u(74) }}
            >
              ۳۸,۹۰۰ ت
            </span>
          </div>

          {/* ستون‌ها */}
          <div
            className="box-border bg-surface-muted"
            style={{
              height: u(274.7),
              marginTop: u(62.95),
              borderRadius: u(28.6143),
              padding: u(34.34),
            }}
          >
            <div
              dir="ltr"
              className="flex h-full items-end"
              style={{ gap: u(11.4457) }}
            >
              {bars.map((b, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 origin-bottom ${b.color}`}
                  style={{
                    height: u(b.h),
                    borderTopLeftRadius: u(11.4457),
                    borderTopRightRadius: u(11.4457),
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* بج صرفه‌جویی */}
      <div
        className="absolute box-border flex items-center border-solid border-line bg-surface"
        style={{
          minWidth: u(337.56),
          height: u(143.07),
          right: u(-34.34),
          bottom: u(-34.34),
          paddingInline: u(37.2),
          gap: u(21.82),
          borderWidth: u(2.86143),
          borderRadius: u(34.3371),
          boxShadow: `0 ${u(28.6143)} ${u(42.9214)} ${u(-8.58428)} rgba(0,0,0,0.1), 0 ${u(11.4457)} ${u(17.1686)} ${u(-11.4457)} rgba(0,0,0,0.1)`,
        }}
      >
        <span
          className="flex shrink-0 items-center justify-center bg-profit text-surface"
          style={{
            width: u(80.12),
            height: u(80.12),
            borderRadius: u(28.6143),
            fontSize: u(34.3371),
            fontFamily: "'Segoe UI Symbol', sans-serif",
          }}
        >
          ↓
        </span>
        <div className="whitespace-nowrap" style={{ minWidth: u(161.22) }}>
          <p
            className="text-profit"
            style={{ fontSize: u(34.3371), lineHeight: u(34.34) }}
          >
            صرفه‌جویی
          </p>
          <p
            className="font-bold text-ink"
            style={{ fontSize: u(40.06), lineHeight: u(57.23) }}
          >
            {num.toLocaleString("fa-IR")}٪ هزینه
          </p>
        </div>
      </div>
    </div>
  );
}