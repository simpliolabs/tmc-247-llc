import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const siteUrl = "https://tmcllc.theceo.store";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TMC 24/7 LLC | Nationwide Freight Transportation & Trucking Services",
    template: "%s | TMC 24/7 LLC",
  },
  description:
    "TMC 24/7 LLC delivers general freight safely, quickly, and on-time across the United States. Licensed, insured, and committed to excellence in transportation services.",
  keywords: [
    "trucking company",
    "freight transportation",
    "logistics services",
    "general freight",
    "nationwide delivery",
    "trucking services",
    "Oklahoma trucking",
    "24/7 freight",
    "on-time delivery",
    "reliable transportation",
    "TMC 24/7",
    "dry van transportation",
    "full truckload",
    "FTL shipping",
  ],
  authors: [{ name: "TMC 24/7 LLC" }],
  creator: "TMC 24/7 LLC",
  publisher: "TMC 24/7 LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TMC 24/7 LLC",
    title: "TMC 24/7 LLC | Nationwide Freight Transportation",
    description:
      "Setting the standard of excellence in freight transportation. We deliver general freight safely, quickly, and on-time across the United States.",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "TMC 24/7 LLC - Nationwide Freight Transportation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TMC 24/7 LLC | Nationwide Freight Transportation",
    description:
      "Setting the standard of excellence in freight transportation. Reliable, on-time delivery across all 48 states.",
    images: [`${siteUrl}/images/og-image.jpg`],
    creator: "@tmc247llc",
  },
  category: "Transportation",
  classification: "Freight Transportation Services",
  other: {
    "geo.region": "US-OK",
    "geo.placename": "Yukon, Oklahoma",
    "geo.position": "35.4874;-97.7655",
    ICBM: "35.4874, -97.7655",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0f1a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
