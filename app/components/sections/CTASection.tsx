import Link from "next/link";
import Reveal from "../Reveal";
import { cv, u } from  "@/lib/figma"

const vars = cv({
  "--pt": u(100.58), "--pb": u(202.82),
  "--h2": u(141.839), "--h2l": u(180),
  "--pm": u(14.34), "--p": u(92.1609), "--pl": u(161),
  "--bm": u(94.84), "--bg": u(38), "--bf": u(47.5363), "--bh": u(159.66),
  "--b1": u(419.2), "--b2": u(408.08),
});

export default function CTASection() {
  return (
    <section
      id="start"
      className="overflow-hidden bg-brand-alt px-6 py-14 text-center xl:px-0 xl:py-0 xl:pb-[var(--pb)] xl:pt-[var(--pt)]"
      style={vars}
    >
      <Reveal>
        <h2 className="text-3xl font-bold text-white xl:text-[length:var(--h2)] xl:leading-[var(--h2l)]">
          همین حالا شروع کنید
        </h2>
      </Reveal>

      <Reveal index={1}>
        <p className="mt-2 text-base text-white/80 xl:mt-[var(--pm)] xl:text-[length:var(--p)] xl:leading-[var(--pl)]">
          ۵ بار تست رایگان با امکان مشاوره.
        </p>
      </Reveal>

      <Reveal index={2} className="mt-8 flex flex-wrap items-center justify-center gap-3 xl:mt-[var(--bm)] xl:gap-[var(--bg)]">
        <Link
          href="/signup"
          className="flex items-center justify-center bg-white px-8 py-3 font-bold text-brand-alt transition-opacity hover:opacity-90 xl:h-[var(--bh)] xl:w-[var(--b1)] xl:p-0 xl:text-[length:var(--bf)]"
          style={{ borderRadius: u(31.6909) }}
        >
          شروع رایگان
        </Link>
        <a
          href="#features"
          className="flex items-center justify-center border-solid border-white/40 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10 xl:h-[var(--bh)] xl:w-[var(--b2)] xl:p-0 xl:text-[length:var(--bf)]"
          style={{ borderWidth: u(3.16909), borderRadius: u(31.6909) }}
        >
          بیشتر بدانید
        </a>
      </Reveal>
    </section>
  );
}