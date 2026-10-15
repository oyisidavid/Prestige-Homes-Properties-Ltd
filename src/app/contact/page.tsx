import React from "react";
import type { Metadata } from "next";
import { contactDetails } from "@/data/properties";
import { ContactClientView } from "@/components/sections/ContactClientView";

export const metadata: Metadata = {
  title: "Contact Prestige Homes & Properties Ltd | Abuja Office & Inspection Booking",
  description:
    "Schedule an on-site property inspection or visit our Abuja corporate head office at Ocean Centre, Apo. Professional FCDA title verification, estate allocation, and land banking consultations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Prestige Homes & Properties Ltd | Abuja Office & Site Inspections",
    description:
      "Schedule an on-site property inspection or visit our corporate head office at Ocean Centre, Apo, Abuja.",
    url: `${contactDetails.website}/contact`,
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Homes & Properties Ltd Abuja Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Prestige Homes & Properties Ltd | Abuja Real Estate",
    description:
      "Schedule an on-site property inspection or visit our Abuja corporate head office at Ocean Centre, Apo.",
    images: ["/images/banner.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
