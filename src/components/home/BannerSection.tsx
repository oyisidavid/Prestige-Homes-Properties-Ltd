"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { contactDetails } from "@/data/properties";
import { InspectionModal } from "@/components/modals/InspectionModal";

export function BannerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    "Hello Prestige Homes, I am interested in land allocation details for your Abuja estates."
  )}`;

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9]">
          {/* Banner Image */}
          <Image
            src="/images/banner.jpg"
            alt="Prestige Homes & Properties Ltd Abuja Estate Development Banner"
            fill
            className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />

          {/* Overlay Content */}
          <div className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-center max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-extrabold uppercase tracking-wider w-fit">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Institutional FCDA Land Banking</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Crafting Quality, <span className="text-brand-gold">Delivering Value</span>
            </h2>

            <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-medium hidden sm:block">
              Experience transparent land acquisition in Burum West District Apo and Wasa Expressway Corridor. Instant plot allocation, survey beacons, and 24-month payment duration.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
              >
                <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Book Guided Site Inspection</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3 rounded-xl bg-white/95 hover:bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
              >
                <MessageSquare className="w-4 h-4 text-brand-forest shrink-0" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <InspectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}
