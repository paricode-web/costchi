"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export default function PriceCounter({ to }: { to: number }) {
  const reduce = useReducedMotion();
  const value = useMotionValue(0);
  const text = useTransform(value, (v) =>
    Math.round(v).toLocaleString("fa-IR")
  );

  useEffect(() => {
    // اگر کاربر انیمیشن را خاموش کرده، مستقیم عدد نهایی
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, {
      duration: 1.6,
      delay: 0.3,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, to, reduce]);

  return <motion.span>{text}</motion.span>;
}