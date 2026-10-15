import React from "react";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedEstates } from "@/components/home/FeaturedEstates";
import { BannerSection } from "@/components/home/BannerSection";
import { InspectionCTA } from "@/components/home/InspectionCTA";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 4. Featured Estates Showcase */}
      <FeaturedEstates />

      {/* 4. Official Estate Banner Highlight Section */}
      <BannerSection />

      {/* 5. Site Inspection Booking Section */}
      <InspectionCTA />
    </div>
  );
}
