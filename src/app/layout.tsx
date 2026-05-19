import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Pressure Washing Durham NC | StrikeForce Power Washing",
    template: "%s | StrikeForce Pressure Washing Durham NC",
  },
  description:
    "Durham's trusted pressure washing pros. House washing, driveway cleaning, roof soft washing & more. Locally owned, 100% satisfaction guaranteed. Call (919) 358-8306 for a free quote.",
  keywords: [
    "pressure washing Durham NC",
    "power washing Durham NC",
    "house washing Durham",
    "driveway cleaning Durham",
    "roof cleaning Durham NC",
    "soft washing Durham",
    "gutter cleaning Durham NC",
    "commercial pressure washing Durham",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.strikeforcepressurewashing.com",
    siteName: "StrikeForce Pressure Washing",
    title: "Pressure Washing Durham NC | StrikeForce Power Washing",
    description:
      "Durham's trusted pressure washing pros. House washing, driveway cleaning, roof soft washing & more. Locally owned. Call (919) 358-8306.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.strikeforcepressurewashing.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
