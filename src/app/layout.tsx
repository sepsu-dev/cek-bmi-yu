import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export function generateMetadata(): Metadata {
  return {
    title: {
      default: "cekbmiyuk — Cek Berat Badan Idealmu",
      template: `%s — cekbmiyuk`,
    },
    description: "Cara simpel dan estetik untuk cek BMI dan kesehatan tubuhmu secara instan.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable}`} data-scroll-behavior="smooth">
      <body className="antialiased font-sans min-h-screen flex flex-col bg-background text-foreground">
        <NextTopLoader showSpinner={false} color="#00C9B1" />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
