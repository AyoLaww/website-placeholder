import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import Head from "next/head";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ['400', '700', '900'],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Place holder",
  description: "created by law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}