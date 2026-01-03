import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuriel Jewelry - Unique Baroque Pearl Jewelry",
  description: "Unique designed and high quality Baroque Pearl pieces. Discover elegant necklaces, earrings, bracelets, and rings with free U.S shipping.",
  keywords: "baroque pearl jewelry, pearl necklaces, pearl earrings, pearl bracelets, pearl rings, handcrafted jewelry, unique jewelry, free shipping",
  authors: [{ name: "Nuriel Jewelry" }],
  openGraph: {
    title: "Nuriel Jewelry - Where Light Meets Ocean",
    description: "Discover ethereal jewelry collections inspired by the mystical dance of light across ocean waves.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
