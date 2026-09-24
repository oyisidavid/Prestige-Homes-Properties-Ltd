import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { FeaturedEstates } from "@/components/home/FeaturedEstates";
import { InspectionCTA } from "@/components/home/InspectionCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. 4-Column Proof & Metrics Ribbon */}
      <TrustRibbon />

      {/* 3. Featured Estates Showcase */}
      <FeaturedEstates />

      {/* 4. Site Inspection Booking Section */}
      <InspectionCTA />
    </div>
  );
}
