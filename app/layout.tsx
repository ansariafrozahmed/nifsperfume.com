import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://nifsperfume.com";
const SITE_NAME = "NIFS PERFUME";
const OG_IMAGE = "https://images.nifsperfume.com/ChatGPT%20Image%20Sep%2013%2C%202026%2C%2005_51_40%20PM.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "NIFS PERFUME — Luxury Fragrances at Honest Prices",
    template: "%s — NIFS PERFUME",
  },

  description:
    "Discover long-lasting luxury Eau de Parfum crafted in India. Explore NIFS PERFUME's signature fragrances for him, her and everyone, starting at ₹499.",

  applicationName: SITE_NAME,

  keywords: [
    "NIFS Perfume",
    "NIFS PERFUME",
    "perfume",
    "luxury perfume",
    "Eau de Parfum",
    "EDP",
    "long lasting perfume",
    "perfume for men",
    "perfume for women",
    "unisex perfume",
    "Indian perfume brand",
    "premium perfume",
    "affordable luxury perfume",
    "₹499 perfume",
  ],

  authors: [
    {
      name: "NIFS PERFUME",
      url: SITE_URL,
    },
  ],

  creator: "NIFS PERFUME",
  publisher: "NIFS PERFUME",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,

    title: "NIFS PERFUME — Luxury Fragrances at Honest Prices",

    description:
      "Long-lasting luxury Eau de Parfum crafted in India. Discover signature fragrances for him, her and everyone, starting at ₹499.",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NIFS PERFUME — Luxury Fragrances",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NIFS PERFUME — Luxury Fragrances at Honest Prices",

    description:
      "Long-lasting luxury Eau de Parfum crafted in India. Signature fragrances for him, her and everyone, starting at ₹499.",

    images: [
      {
        url: OG_IMAGE,
        alt: "NIFS PERFUME — Luxury Fragrances",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },


  manifest: "/site.webmanifest",

  category: "shopping",

  referrer: "origin-when-cross-origin",
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
