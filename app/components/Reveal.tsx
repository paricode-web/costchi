// components/Reveal.tsx — برای ظاهر شدن همه المان‌ها با اسکرول
"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Reveal({
  children, index = 0, className,
}: { children: React.ReactNode; index?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}