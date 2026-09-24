"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MapPin } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function BannerSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>FCT Abuja Infrastructure & Masterplan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prestige Homes <span className="text-brand-forest">Development Overview</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Official infrastructure masterplan showcasing asphalt road networks, perimeter fencing, and solar grid layouts for Apo and Wasa District estates.
          </p>
        </div>

        {/* Pure Standalone Picture (Zero Text Overlay / Zero Dark Gradient) */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-surface-border bg-slate-50 transition-all hover:shadow-3xl">
          <Image
            src="/images/banner.jpg"
            alt="Prestige Homes & Properties Ltd Official Estate Masterplan Banner"
            width={1920}
            height={800}
            className="w-full h-auto object-cover rounded-3xl"
            priority
          />
        </div>

        {/* Picture Caption & Location Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-surface-bg border border-surface-border gap-2 text-xs font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Federal Capital Territory (FCT), Abuja, Nigeria</span>
          </div>
          <div className="text-brand-forest font-extrabold">
            {contactDetails.company} — {contactDetails.tagline}
          </div>
        </div>
      </div>
    </section>
  );
}
