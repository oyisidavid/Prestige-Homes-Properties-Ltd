"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare, Calendar, Filter } from "lucide-react";
import { featuredEstates, contactDetails } from "@/data/properties";
import { InspectionModal } from "@/components/modals/InspectionModal";

export default function PropertiesPage() {
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
    if (selectedDistrict === "apo" && !estate.id.includes("apo")) return false;
    if (selectedDistrict === "wasa" && !estate.id.includes("wasa")) return false;
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
            Abuja Estates & <span className="text-brand-forest">Land Catalog</span>
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
            Browse verified FCDA C of O property sub-divisions across Burum West, Apo Corridor, and Wasa District. Select a development for full plot size breakdowns and flexible payment plans.
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
              All Districts ({featuredEstates.length})
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

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEstates.map((estate) => {
            const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
              `Hello Prestige Homes, I am inquiring about ${estate.name} in ${estate.district}.`
            )}`;

            return (
              <article
                key={estate.id}
                className="bg-white rounded-2xl border border-surface-border shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col group"
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

                  <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-emerald-600 text-white shadow-md">
                      {estate.status}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-bold border border-white/50 shadow-md">
                      <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{estate.titleDocument}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 text-white">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">{estate.name}</h3>
                    <p className="text-xs text-slate-200 flex items-center gap-1 font-medium mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{estate.district}, {estate.city}</span>
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-surface-bg border border-surface-border">
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-500 block">Outright Price From</span>
                      <span className="text-2xl font-black text-brand-forest">{formatNaira(estate.startingPrice)}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-brand-gold-dark block">Plot Sizes</span>
                      <span className="text-xs font-extrabold text-slate-800">150 SqM - 1,000 SqM</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase text-slate-700">Subdivision Options</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {estate.options.slice(0, 4).map((opt, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex justify-between">
                          <span className="font-extrabold text-brand-forest">{opt.sizeSqM} SqM</span>
                          <span className="font-bold text-slate-900">{formatNaira(opt.priceNaira)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <Link
                      href={`/properties/${estate.slug}`}
                      className="min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-xs hover:border-brand-forest hover:text-brand-forest transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <span>Full Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => setActiveModalEstate(estate.id)}
                      className="min-h-[44px] px-3 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>Book Site Visit</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3 py-2.5 rounded-xl border border-emerald-700/30 bg-emerald-50 text-emerald-900 font-bold text-xs hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-brand-forest shrink-0" />
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
