
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const shabnam = localFont({
  src: [
    {
      path: "./fonts/Shabnam-Light-FD-WOL.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Shabnam-Medium-FD-WOL.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Shabnam-Bold-FD-WOL.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "کاستچی | محاسبه و کنترل قیمت تمام‌شده محصولات",
  description:
    "محاسبه‌ی هوشمند قیمت تمام‌شده‌ی محصولات؛ ساده، دقیق و بدون نیاز به دانش تخصصی.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${shabnam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
