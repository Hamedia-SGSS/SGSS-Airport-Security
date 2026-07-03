import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Secure Guard Security Services || Airport Security",
  description:
    "Professional security services supporting access control, perimeter monitoring, passenger flow, cargo safety, and vendor check-in around high-traffic airport areas.",
  keywords: [
    "airport security",
    "airport facility security",
    "private terminal security",
    "cargo facility security",
    "airport parking security",
    "access control",
    "secure guard",
    "perimeter monitoring",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Secure Guard Security Services || Airport Security",
    description:
      "Professional security services supporting access control, perimeter monitoring, passenger flow, cargo safety, and vendor check-in around high-traffic airport areas.",
    type: "website",
  },
};

import { ScrollToTop } from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
