"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Sun,
  Home,
} from "lucide-react";
import { featuredEstates, EstateListing, contactDetails } from "@/data/properties";
import { InspectionModal } from "@/components/modals/InspectionModal";

export function FeaturedEstatesSection() {
  const [selectedDistrictFilter, setSelectedDistrictFilter] = useState<string>("all");
  const [activeEstateModal, setActiveEstateModal] = useState<string | null>(null);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredEstates = featuredEstates.filter((estate) => {
    if (selectedDistrictFilter === "all") return true;
    if (selectedDistrictFilter === "apo") return estate.id === "solar-city-apo";
    if (selectedDistrictFilter === "wasa") return estate.id === "the-embassy-wasa";
    return true;
  });

  return (
    <section id="featured-estates" className="py-16 lg:py-24 bg-surface-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Institutional Land Banking & Estates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Featured <span className="text-brand-forest">Abuja Developments</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Explore verified FCDA title listings in prime growth corridors. Immediate plot allocation with options ranging from residential duplexes to commercial parcels.
            </p>
          </div>

          {/* District Filter Chips (Mobile horizontal scroll / desktop flex) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <button
              onClick={() => setSelectedDistrictFilter("all")}
              className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedDistrictFilter === "all"
                  ? "bg-brand-forest text-white shadow-md"
                  : "bg-white text-text-secondary border border-surface-border hover:border-brand-forest/50"
              }`}
            >
              All Estates (2)
            </button>
            <button
              onClick={() => setSelectedDistrictFilter("apo")}
              className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedDistrictFilter === "apo"
                  ? "bg-brand-forest text-white shadow-md"
                  : "bg-white text-text-secondary border border-surface-border hover:border-brand-forest/50"
              }`}
            >
              Apo Corridor (Solar City)
            </button>
            <button
              onClick={() => setSelectedDistrictFilter("wasa")}
              className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                selectedDistrictFilter === "wasa"
                  ? "bg-brand-forest text-white shadow-md"
                  : "bg-white text-text-secondary border border-surface-border hover:border-brand-forest/50"
              }`}
            >
              Wasa District (The Embassy)
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredEstates.map((estate) => {
            const whatsappPropertyUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
              `Hello Prestige Homes, I am interested in options and plot allocation details for ${estate.name} in ${estate.district}.`
            )}`;

            return (
              <article
                key={estate.id}
                id={estate.id}
                className="bg-white rounded-2xl border border-surface-border shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col group"
              >
                {/* Media Aspect Ratio Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={estate.image || "/images/solar-city-apo.jpg"}
                    alt={`${estate.name} ${estate.district}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Top Status & Title Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md ${
                        estate.status === "Selling"
                          ? "bg-emerald-600 text-white"
                          : estate.status === "Pre-Sales"
                          ? "bg-brand-gold text-white"
                          : "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {estate.status}
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold border border-white/50 shadow-md">
                      <ShieldCheck className="w-4 h-4 text-brand-gold" />
                      <span>{estate.titleDocument}</span>
                    </span>
                  </div>

                  {/* Property Name & District Overlay */}
                  <div className="absolute bottom-4 inset-x-4 text-white">
                    {estate.tagline && (
                      <span className="text-xs font-semibold text-brand-gold bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-md inline-block mb-1">
                        {estate.tagline}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                      {estate.name}
                    </h3>
                    <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{estate.district}, {estate.city}</span>
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  {/* Price & Deposit Breakdown */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-bg border border-surface-border gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                        Starting Outright Price
                      </span>
                      <span className="text-2xl font-black text-brand-forest">
                        {formatNaira(estate.startingPrice)}
                      </span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs font-bold text-brand-gold-dark block">
                        Flexible Payment Terms
                      </span>
                      <span className="text-xs text-slate-600 font-medium">
                        Initial deposit from 20% • Up to 24 mos
                      </span>
                    </div>
                  </div>

                  {/* Options & Typology Matrix Table */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                      <span>Available Plot Sizes & Typologies</span>
                      <span className="text-[11px] text-brand-forest font-semibold">{estate.options.length} Sizes</span>
                    </h4>
                    <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                      <div className="grid grid-cols-12 bg-slate-100 p-2.5 font-bold text-slate-700 border-b border-slate-200">
                        <span className="col-span-3">Plot Size</span>
                        <span className="col-span-5">Typology / Intended Use</span>
                        <span className="col-span-4 text-right">Price (NGN)</span>
                      </div>
                      <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
                        {estate.options.map((opt, idx) => (
                          <div key={idx} className="grid grid-cols-12 p-2.5 items-center hover:bg-slate-50 text-slate-800">
                            <span className="col-span-3 font-extrabold text-brand-forest">
                              {opt.sizeSqM} SqM
                            </span>
                            <span className="col-span-5 font-medium text-slate-600 truncate pr-1">
                              {opt.typology || "Residential Plot"}
                            </span>
                            <span className="col-span-4 font-bold text-right text-slate-900">
                              {formatNaira(opt.priceNaira)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Estate Amenities Chips */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Estate Features & Infrastructure
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {estate.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 text-[11px] font-semibold"
                        >
                          <CheckCircle2 className="w-3 h-3 text-brand-forest" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveEstateModal(estate.id)}
                      className="min-h-[44px] px-4 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm shadow-md transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest"
                    >
                      <Calendar className="w-4 h-4 text-brand-gold" />
                      <span>Book Site Inspection</span>
                    </button>

                    <a
                      href={whatsappPropertyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2.5 rounded-xl border border-emerald-700/30 bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-sm transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest"
                    >
                      <MessageSquare className="w-4 h-4 text-brand-forest" />
                      <span>WhatsApp Desk</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Reusable Site Inspection Modal */}
      {activeEstateModal && (
        <InspectionModal
          isOpen={!!activeEstateModal}
          onClose={() => setActiveEstateModal(null)}
          preselectedEstateId={activeEstateModal}
        />
      )}
    </section>
  );
}
