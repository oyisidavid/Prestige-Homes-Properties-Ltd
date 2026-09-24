"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Building, Banknote, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Hero() {
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");

  const whatsappHeroUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    "Hello Prestige Homes, I want to inquire about plot allocation in Apo and Wasa districts."
  )}`;

  return (
    <section id="hero" className="relative bg-surface-bg pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-forest/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FCDA Shield Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-300 px-4 py-1.5 rounded-full text-brand-forest text-xs font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>FCDA Certified Titles • 100% Verifiable Abuja Land Ownership</span>
          </div>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.12]">
                Institutional <span className="text-brand-forest">Land Banking</span> & Master-Planned Solar Estates in Abuja
              </h1>
              <p className="font-serif italic text-base sm:text-lg text-brand-gold font-semibold pt-1">
                {contactDetails.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Prestige Homes & Properties Ltd delivers verified FCDA C of O land titles, solar-powered infrastructure, and structured installment payment plans across prime FCT Abuja growth corridors.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0" />
                <span>Immediate Plot Allocation & Survey</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0" />
                <span>FCDA Approved C of O Documents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0" />
                <span>Up to 24 Months Flexible Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0" />
                <span>Solar Streetlights & Paved Access</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/properties"
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-base shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
              >
                <span>View All Properties</span>
                <ArrowRight className="w-5 h-5 text-brand-gold" />
              </Link>
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 rounded-xl border-2 border-brand-gold bg-white hover:bg-brand-gold-light text-brand-gold-dark font-extrabold text-base transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
              >
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase Side Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              <Image
                src="/images/solar-city-apo.jpg"
                alt="Solar City Apo Abuja Master-Planned Estate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gold bg-amber-50 px-2 py-0.5 rounded">
                      Featured Project
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">Solar City Apo</h3>
                    <p className="text-xs text-slate-600 font-bold">Burum West District, Apo</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-500 font-semibold block">Plots from</span>
                    <span className="text-lg font-black text-brand-forest">₦9,000,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Shield */}
            <div className="absolute -top-4 -left-4 bg-white p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-900 block">FCDA Title Verified</span>
                <span className="text-[11px] text-slate-500 font-semibold">100% Guaranteed Ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modular Abuja District Search Bar */}
        <div className="mt-12 bg-white p-5 lg:p-6 rounded-2xl shadow-xl border border-surface-border">
          <div className="text-xs font-extrabold uppercase tracking-wider text-brand-forest mb-3.5 flex items-center gap-2">
            <Search className="w-4 h-4 text-brand-gold" />
            <span>Abuja District Filter & Property Search</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Filter 1: District */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-forest" /> Target District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest"
              >
                <option value="all">All Abuja Districts</option>
                <option value="apo">Burum West District, Apo</option>
                <option value="wasa">Wasa District Corridor</option>
                <option value="guzape">Guzape II Enclave</option>
                <option value="katampe">Katampe Extension</option>
              </select>
            </div>

            {/* Filter 2: Typology */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-brand-forest" /> Property Typology
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest"
              >
                <option value="all">All Typologies</option>
                <option value="plot">Residential Plot (150-1,000 SqM)</option>
                <option value="duplex">Terrace / Semi-Detached Duplex</option>
                <option value="fully-detached">Fully Detached Duplex + BQ</option>
                <option value="commercial">Commercial Plot</option>
              </select>
            </div>

            {/* Filter 3: Budget Range */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-brand-forest" /> Budget Range (NGN)
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest"
              >
                <option value="all">Any Price Range</option>
                <option value="under10m">Under ₦10,000,000</option>
                <option value="10m-20m">₦10,000,000 - ₦20,000,000</option>
                <option value="20m-35m">₦20,000,000 - ₦35,000,000</option>
                <option value="above35m">Above ₦35,000,000</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <Link
                href={`/properties?district=${selectedDistrict}&type=${selectedType}&budget=${selectedBudget}`}
                className="min-h-[44px] w-full px-5 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
              >
                <Search className="w-4 h-4 text-brand-gold" />
                <span>Search Properties</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
