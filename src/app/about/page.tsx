import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Building2, MapPin, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { contactDetails } from "@/data/properties";

export default function AboutPage() {
  return (
    <div className="py-12 bg-surface-canvas min-h-screen space-y-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-forest-dark text-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Corporate Profile & Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Prestige Homes & Properties Ltd
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-brand-gold font-medium">
              {contactDetails.tagline}
            </p>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed pt-2">
              Prestige Homes & Properties Ltd is a premier real estate development and institutional land banking firm head-quartered in Federal Capital Territory (FCT), Abuja, Nigeria. We bridge high-trust land acquisition with master-planned solar infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values & FCDA Compliance Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-surface-border shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest">
              <ShieldCheck className="w-6 h-6 text-brand-forest" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Title Transparency</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every parcel in our portfolio undergoes thorough legal verification with the Federal Capital Development Authority (FCDA). We guarantee clean C of O titles and verified survey beacons.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-surface-border shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold">
              <Building2 className="w-6 h-6 text-brand-gold" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Solar Infrastructure</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our flagship developments (Solar City Apo, The Embassy Wasa) incorporate decentralized solar micro-grids, paved access roads, central sewage systems, and perimeter security.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-surface-border shadow-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <Award className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Diaspora & HNWI Banking</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide frictionless remote plot allocation, virtual site walk-throughs, and structured 12 to 24-month installment plans for international diaspora investors.
            </p>
          </div>
        </div>
      </section>

      {/* Head Office Location Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-surface-border shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl font-extrabold text-slate-900">Visit Our Abuja Corporate Office</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {contactDetails.address}
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-700 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-brand-gold" /> Apo, Gudu, Abuja
              </span>
              <span>•</span>
              <span>{contactDetails.openingHours}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="min-h-[48px] px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Contact Executive Desk</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
