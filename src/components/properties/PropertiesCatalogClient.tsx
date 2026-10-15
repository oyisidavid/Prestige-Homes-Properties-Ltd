"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Filter } from "lucide-react";
import { featuredEstates, contactDetails } from "@/data/properties";
import { InspectionModal } from "@/components/modals/InspectionModal";

export function PropertiesCatalogClient() {
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [activeModalEstate, setActiveModalEstate] = useState<string | null>(null);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredEstates = featuredEstates.filter((estate) => {
    const isApo = estate.district.toLowerCase().includes("apo") || estate.id.includes("apo");
    const isWasa = estate.district.toLowerCase().includes("wasa") || estate.id.includes("wasa");
    const isKabusa = estate.district.toLowerCase().includes("kabusa") || estate.district.toLowerCase().includes("sherretti") || estate.id.includes("peace-crest");

    if (selectedDistrict === "apo" && !isApo) return false;
    if (selectedDistrict === "wasa" && !isWasa) return false;
    if (selectedDistrict === "kabusa" && !isKabusa) return false;
    if (statusFilter !== "all" && estate.status !== statusFilter) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.startingPrice - b.startingPrice;
    if (sortBy === "price-high") return b.startingPrice - a.startingPrice;
    return 0;
  });

  return (
    <div className="py-12 bg-surface-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="space-y-3 border-b border-surface-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>FCDA Certified Layouts • FCT Abuja</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Abuja Estates & <span className="text-brand-forest">Property Catalog</span>
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
            Browse verified FCDA Approved and C of O property sub-divisions across Burum West, Apo Corridor, Wasa District, and Sherretti, Kabusa. Select any development or typology for full plot specifications and structured payment terms.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* District Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setSelectedDistrict("all")}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedDistrict === "all"
                  ? "bg-brand-forest text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              } focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none`}
            >
              All Listings ({featuredEstates.length})
            </button>
            <button
              onClick={() => setSelectedDistrict("kabusa")}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedDistrict === "kabusa"
                  ? "bg-brand-forest text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              } focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none`}
            >
              Kabusa / Sherretti
            </button>
            <button
              onClick={() => setSelectedDistrict("apo")}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedDistrict === "apo"
                  ? "bg-brand-forest text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              } focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none`}
            >
              Apo Corridor
            </button>
            <button
              onClick={() => setSelectedDistrict("wasa")}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedDistrict === "wasa"
                  ? "bg-brand-forest text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              } focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none`}
            >
              Wasa District
            </button>
          </div>

          {/* Status & Sort Selectors */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="min-h-[44px] px-3 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs font-bold focus:ring-2 focus:ring-brand-forest"
              >
                <option value="all">All Statuses</option>
                <option value="Selling">Selling Only</option>
                <option value="Pre-Sales">Pre-Sales Only</option>
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="min-h-[44px] px-3 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs font-bold focus:ring-2 focus:ring-brand-forest"
            >
              <option value="default">Sort by Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Listings Grid - Responsive 3-Column Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredEstates.map((estate) => {
            const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
              `Hello Prestige Homes, I am inquiring about ${estate.name} in ${estate.district}.`
            )}`;

            return (
              <article
                key={estate.id}
                className="bg-white rounded-2xl border border-surface-border shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={estate.image}
                    alt={`${estate.name} ${estate.district}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" />

                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase bg-emerald-600 text-white shadow-md">
                      {estate.status}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-bold border border-white/50 shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{estate.titleDocument}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 inset-x-3.5 text-white">
                    <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug line-clamp-1">{estate.name}</h3>
                    <p className="text-xs text-slate-200 flex items-center gap-1 font-medium mt-0.5">
                      <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                      <span>{estate.district}</span>
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-bg border border-surface-border">
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-500 block">Price</span>
                      <span className="text-xl font-black text-brand-forest">{formatNaira(estate.startingPrice)}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-brand-gold-dark block">Plot Size</span>
                      <span className="text-xs font-black text-slate-800">
                        {estate.options.length === 1
                          ? `${estate.options[0].sizeSqM} SqM`
                          : `${estate.options[0].sizeSqM} - ${estate.options[estate.options.length - 1].sizeSqM} SqM`}
                      </span>
                    </div>
                  </div>

                  {/* Amenities / Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                      Key Highlights
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      {estate.amenities.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-forest shrink-0" />
                          <span className="line-clamp-1 font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                    <Link
                      href={`/properties/${estate.slug}`}
                      className="min-h-[42px] px-3 py-2 rounded-xl border border-slate-300 text-slate-900 font-bold text-xs hover:border-brand-forest hover:text-brand-forest transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <span>See More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[42px] px-3 py-2 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-brand-gold" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeModalEstate && (
        <InspectionModal
          isOpen={!!activeModalEstate}
          onClose={() => setActiveModalEstate(null)}
          preselectedEstateId={activeModalEstate}
        />
      )}
    </div>
  );
}
