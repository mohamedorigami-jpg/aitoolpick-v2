import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AffiliateBanner } from "@/components/affiliate-banner";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AIToolPick — Find the Right AI Tool, Fast",
  description:
    "Honest, hands-on reviews of the best AI tools. We test every tool ourselves so you can find the right one — fast.",
  keywords: [
    "AI tools",
    "AI tool reviews",
    "best AI tools",
    "AI software",
    "artificial intelligence tools",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {/* Affiliate disclosure banner — fixed top, dismissible */}
        <AffiliateBanner />

        {/* Sticky navbar */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Site-wide footer */}
        <Footer />
      </body>
    </html>
  );
}
