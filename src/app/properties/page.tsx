import React from "react";
import type { Metadata } from "next";
import { contactDetails } from "@/data/properties";
import { PropertiesCatalogClient } from "@/components/properties/PropertiesCatalogClient";

export const metadata: Metadata = {
  title: "Abuja Estates & Property Catalog | FCDA Verified Plots for Sale",
  description:
    "Explore verified FCDA C of O property subdivisions, smart duplex plots, and master-planned land banking opportunities in Apo Corridor, Wasa District, and Sherretti Kabusa, Abuja.",
  alternates: {
    canonical: "/properties",
  },
  openGraph: {
    title: "Abuja Estates & Land Banking Catalog | Femorade Prestige Properties Ltd",
    description:
      "Explore verified FCDA C of O property subdivisions, smart duplex plots, and master-planned land banking opportunities across FCT Abuja.",
    url: `${contactDetails.website}/properties`,
    images: [
      {
        url: "/images/solar-city-apo.jpg",
        width: 1200,
        height: 630,
        alt: "Femorade Prestige Properties Property Catalog Abuja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abuja Estates & Property Catalog | Femorade Prestige Properties",
    description:
      "Explore verified FCDA C of O property subdivisions, smart duplex plots, and master-planned land banking opportunities in Abuja.",
    images: ["/images/solar-city-apo.jpg"],
  },
};

export default function PropertiesPage() {
  return <PropertiesCatalogClient />;
}
