import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

import { contactDetails } from "@/data/properties";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(contactDetails.website),
  title: {
    default: "Prestige Homes & Properties Ltd | Verifiable FCDA Land Banking in Abuja",
    template: "%s | Prestige Homes & Properties Ltd",
  },
  description:
    "Prestige Homes & Properties Ltd crafts high-quality residential duplexes, master-planned solar estates, and verified FCDA C of O land banking plots across FCT Abuja (Solar City Apo, The Embassy Wasa, Peace Crest Kabusa).",
  keywords: [
    "Prestige Homes & Properties Ltd",
    "Prestige Homes Abuja",
    "Real Estate Developers Abuja",
    "Land for Sale in Abuja",
    "FCDA C of O Land Abuja",
    "Solar City Apo Abuja",
    "The Embassy Wasa District",
    "Peace Crest Estate Kabusa Sherretti",
    "Duplex plots Abuja",
    "Terrace Duplex for Sale Abuja",
    "Penthouse plots Abuja",
    "Diaspora Real Estate Investment Nigeria",
    "Buy Land in Apo Abuja",
    "Wasa District Land Banking",
    "Verified Real Estate Company Abuja",
    "FCT Abuja Land Titles",
  ],
  authors: [{ name: "Prestige Homes & Properties Ltd", url: contactDetails.website }],
  creator: "Prestige Homes & Properties Ltd",
  publisher: "Prestige Homes & Properties Ltd",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Prestige Homes & Properties Ltd | Verifiable FCDA Land Banking in Abuja",
    description:
      "High-quality residential duplexes, master-planned solar estates, and verified FCDA C of O land banking plots across FCT Abuja (Solar City Apo, The Embassy Wasa, Peace Crest Kabusa).",
    url: contactDetails.website,
    siteName: "Prestige Homes & Properties Ltd",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Homes & Properties Ltd — Verified Abuja Estates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Homes & Properties Ltd | Abuja Real Estate & Land Banking",
    description:
      "High-quality residential duplexes, master-planned solar estates, and verified FCDA C of O land banking plots across FCT Abuja.",
    images: ["/images/banner.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "name": contactDetails.company,
    "legalName": contactDetails.company,
    "url": contactDetails.website,
    "logo": `${contactDetails.website}/images/logo-emblem.png`,
    "image": `${contactDetails.website}/images/banner.jpg`,
    "description":
      "Institutional real estate development, verifiable land banking, and master-planned solar estates across FCT Abuja (Solar City Apo, The Embassy Wasa, Peace Crest Kabusa).",
    "telephone": contactDetails.phone,
    "email": contactDetails.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "FF6A, 4th Floor, Ocean Centre, Plot 1018, Cadastral Zone B18, Off Oladipo Diya Road",
      "addressLocality": "Apo, Gudu",
      "addressRegion": "Federal Capital Territory (FCT)",
      "postalCode": "900104",
      "addressCountry": "NG",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.0068,
      "longitude": 7.4985,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "priceRange": "₦₦₦₦",
    "areaServed": [
      { "@type": "City", "name": "Abuja" },
      { "@type": "AdministrativeArea", "name": "Federal Capital Territory" },
      { "@type": "Place", "name": "Apo" },
      { "@type": "Place", "name": "Wasa District" },
      { "@type": "Place", "name": "Kabusa" },
      { "@type": "Place", "name": "Guzape" },
      { "@type": "Place", "name": "Maitama" },
    ],
    "slogan": contactDetails.tagline,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface-canvas text-text-primary antialiased flex flex-col relative">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </body>
    </html>
  );
}
