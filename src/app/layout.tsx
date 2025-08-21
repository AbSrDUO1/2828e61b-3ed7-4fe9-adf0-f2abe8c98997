import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { useEffect } from 'react';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Landing Page Starter",
  description: "A concise, static single-page landing with clear hero, features, and conversion-focused CTA.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased bg-white text-gray-900`}>{children}</body>
    </html>
  );
}