import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedEstates } from "@/components/home/FeaturedEstates";
import { BannerSection } from "@/components/home/BannerSection";
import { InspectionCTA } from "@/components/home/InspectionCTA";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Proof & Metrics Ribbon */}
      <TrustRibbon />

      {/* 3. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 4. Featured Estates Showcase */}
      <FeaturedEstates />

      {/* 4. Official Estate Banner Highlight Section */}
      <BannerSection />

      {/* 5. Site Inspection Booking Section */}
      <InspectionCTA />

      {/* 6. Floating WhatsApp Instant Advisory on Home Page */}
      <FloatingWhatsApp />
    </div>
  );
}
