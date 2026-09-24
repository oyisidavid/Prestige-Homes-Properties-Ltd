import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { FeaturedEstates } from "@/components/home/FeaturedEstates";
import { BannerSection } from "@/components/home/BannerSection";
import { InspectionCTA } from "@/components/home/InspectionCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Proof & Metrics Ribbon */}
      <TrustRibbon />

      {/* 3. Featured Estates Showcase (Solar City Apo & The Embassy) */}
      <FeaturedEstates />

      {/* 4. Official Estate Banner Highlight Section */}
      <BannerSection />

      {/* 5. Site Inspection Booking Section */}
      <InspectionCTA />
    </div>
  );
}
