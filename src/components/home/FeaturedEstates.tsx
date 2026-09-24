"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { featuredEstates, contactDetails } from "@/data/properties";
import { InspectionModal } from "@/components/modals/InspectionModal";

export function FeaturedEstates() {
  const [activeEstateModal, setActiveEstateModal] = useState<string | null>(null);

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="featured-estates" className="py-16 lg:py-24 bg-surface-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span>Verifiable FCDA Land Banking</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Featured <span className="text-brand-forest">Estates in Abuja</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Explore master-planned solar developments with FCDA Certificate of Occupancy documentation in Apo and Wasa District corridors.
            </p>
          </div>

          <Link
            href="/properties"
            className="min-h-[44px] px-5 py-2.5 rounded-xl border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shrink-0 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Estates 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredEstates.map((estate) => {
            const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
              `Hello Prestige Homes, I am interested in plot allocation options for ${estate.name} in ${estate.district}.`
            )}`;

            return (
              <article
                key={estate.id}
                className="bg-white rounded-2xl border border-surface-border shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col group"
              >
                {/* Image Aspect Ratio Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={estate.image}
                    alt={`${estate.name} ${estate.district} Abuja`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20" />

                  {/* Badges */}
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
                      <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{estate.titleDocument}</span>
                    </span>
                  </div>

                  {/* Title & District Overlay */}
                  <div className="absolute bottom-4 inset-x-4 text-white">
                    {estate.tagline && (
                      <span className="text-[11px] font-bold text-brand-gold bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded inline-block mb-1">
                        {estate.tagline}
                      </span>
                    )}
                    <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                      {estate.name}
                    </h3>
                    <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{estate.district}, {estate.city}</span>
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  {/* Price Banner */}
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
                        Plot Sizes Available
                      </span>
                      <span className="text-xs text-slate-700 font-extrabold">
                        150 SqM to 1,000 SqM
                      </span>
                    </div>
                  </div>

                  {/* Options Snippet */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Subdivision Plot Tiers
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                      {estate.options.slice(0, 4).map((opt, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex justify-between items-center">
                          <span className="font-extrabold text-brand-forest">{opt.sizeSqM} SqM</span>
                          <span className="text-slate-900 font-bold">{formatNaira(opt.priceNaira)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities Badges */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Estate Infrastructure
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {estate.amenities.slice(0, 4).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 text-[11px] font-bold"
                        >
                          <CheckCircle2 className="w-3 h-3 text-brand-forest shrink-0" />
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link
                      href={`/properties/${estate.slug}`}
                      className="min-h-[44px] px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 font-bold text-xs hover:border-brand-forest hover:text-brand-forest transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <span>Full Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => setActiveEstateModal(estate.id)}
                      className="min-h-[44px] px-3 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                    >
                      <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>Book Inspection</span>
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

      {/* Modal */}
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
