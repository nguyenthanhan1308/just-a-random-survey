import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Sacramento } from "next/font/google";
const sacramento400 = Sacramento({
	weight: "400",
	subsets: ["latin"],
  variable: "--font-sacramento-400"
});

export const metadata: Metadata = {
  title: "Just a random survey",
  description: "For learning purpose only, I promise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${sacramento400.variable}`}>
          {children}
        </body>
      </html>
    </>
  );
}
