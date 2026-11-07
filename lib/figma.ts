import type { CSSProperties } from "react";

export const u = (n: number) => `calc(${n} * var(--s, 0.25px))`;
export const cv = (vars: Record<string, string | number>) =>
  vars as unknown as CSSProperties;