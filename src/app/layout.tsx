import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Apex Export | Premium Indian Spice Export & Logistics",
  description: "Connecting Indian soil to global markets with premium cardamom, pepper, and world-class logistics since 1994.",
  keywords: ["Indian spice exporters", "cardamom export India", "black pepper exporters", "bulk spice suppliers India", "export logistics"],
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable}`}
    >
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-secondary/30">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
