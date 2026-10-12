"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Calendar, CheckCircle2, ArrowRight, MessageSquare, MapPin } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function InspectionCTA() {
  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    "Hello Prestige Homes, I would like to schedule a site inspection for your Abuja estates."
  )}`;

  return (
    <section id="inspection-cta" className="py-16 sm:py-24 bg-surface-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-forest-dark text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-brand-forest/40 relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-forest rounded-full blur-3xl opacity-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Verifiable FCDA Titles • FCT Abuja</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Schedule Your Site Inspection in <span className="text-brand-gold">Kabusa, Apo & Wasa</span>
            </h2>

            {/* Description Copy */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl mx-auto">
              Book a guided physical plot tour with our experienced land advisory officers. Inspect original FCDA Approved titles, estate layout plans, and master-planned infrastructure across Peace Crest Estate, Solar City Apo, and The Embassy Wasa with zero obligations.
            </p>

            {/* Key Inspection Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Title Verification</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">Inspect original FCDA title documents with our legal team.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Plot Demarcation</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">Inspect exact plot dimensions and internal paved road networks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Zero Obligation</h4>
                  <p className="text-xs text-emerald-200 mt-0.5">Guided site visits are 100% free with zero purchase obligation.</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#inspection-form"
                className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-brand-forest-dark font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <Calendar className="w-4 h-4 text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span>Schedule Site Inspection</span>
                <ArrowRight className="w-4 h-4 text-brand-forest group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 rounded-xl border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-bold text-sm transition-all flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
