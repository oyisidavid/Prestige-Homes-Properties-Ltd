import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowLeft,
  Building,
  Phone,
} from "lucide-react";
import { getEstateBySlug, contactDetails } from "@/data/properties";

interface PropertyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const estate = getEstateBySlug(slug);

  if (!estate) {
    notFound();
  }

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    `Hello Prestige Homes, I am interested in plot allocation and payment plans for ${estate.name} in ${estate.district}.`
  )}`;

  return (
    <div className="py-10 bg-surface-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-forest transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Properties
          </Link>
        </div>

        {/* Hero Media Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-surface-border aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={estate.image}
            alt={`${estate.name} ${estate.district}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Top Shield & Status Badges */}
          <div className="absolute top-6 inset-x-6 flex items-center justify-between">
            <span className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase bg-emerald-600 text-white shadow-lg">
              {estate.status}
            </span>

            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-slate-900 font-extrabold text-xs shadow-lg border border-white/50">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{estate.titleDocument} Certified Title</span>
            </div>
          </div>

          {/* Bottom Title Header */}
          <div className="absolute bottom-6 inset-x-6 text-white space-y-2">
            {estate.tagline && (
              <span className="text-xs font-bold text-brand-gold bg-black/60 backdrop-blur-md px-3 py-1 rounded-md inline-block">
                {estate.tagline}
              </span>
            )}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">{estate.name}</h1>
            <p className="text-sm sm:text-base text-slate-200 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{estate.district}, {estate.city}</span>
            </p>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-surface-border space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Estate Overview & Development Strategy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {estate.description}
              </p>

              {/* Infrastructure Progress */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-700">Subdivision & Infrastructure Completion</span>
                  <span className="text-brand-forest font-extrabold">{estate.infrastructureProgress}% Completed</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-forest h-full rounded-full transition-all duration-1000"
                    style={{ width: `${estate.infrastructureProgress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Complete Plot Sizes & Pricing Breakdown Table */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-surface-border space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Full Subdivided Plot Breakdown
                </h2>
                <span className="text-xs font-bold text-brand-forest bg-emerald-50 px-3 py-1 rounded-full">
                  FCDA Approved Sizes
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                      <th className="p-3">Plot Size (SqM)</th>
                      <th className="p-3">Typology / Building Type</th>
                      <th className="p-3">Outright Price</th>
                      <th className="p-3">Initial Deposit</th>
                      <th className="p-3">Monthly (12 Mos)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {estate.options.map((opt, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 text-slate-800">
                        <td className="p-3 font-extrabold text-brand-forest">{opt.sizeSqM} SqM</td>
                        <td className="p-3 text-slate-700 font-bold">{opt.typology || "Residential Plot"}</td>
                        <td className="p-3 font-black text-slate-900">{formatNaira(opt.priceNaira)}</td>
                        <td className="p-3 text-slate-600">
                          {opt.initialDepositNaira ? formatNaira(opt.initialDepositNaira) : "20% Deposit"}
                        </td>
                        <td className="p-3 text-slate-600">
                          {opt.monthlyInstallmentNaira ? formatNaira(opt.monthlyInstallmentNaira) : "Spread Plan"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Estate Infrastructure & Amenities */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-surface-border space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Estate Features & Infrastructure Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {estate.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Sticky Conversion Desk */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-surface-border sticky top-24 space-y-6">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Outright Purchase Starting</span>
                <span className="text-3xl font-black text-brand-forest">{formatNaira(estate.startingPrice)}</span>
                <span className="text-xs text-brand-gold-dark font-bold block pt-1">Flexible 12 to 24 Months Payment Terms</span>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                >
                  <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Request Plot Allocation via WhatsApp</span>
                </a>

                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="w-full min-h-[48px] border-2 border-brand-forest text-brand-forest font-extrabold text-sm rounded-xl hover:bg-brand-forest hover:text-white transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call Land Advisory ({contactDetails.phone})</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                <div className="flex items-center gap-1.5 font-extrabold">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>FCDA C of O Guarantee</span>
                </div>
                <p className="text-slate-600 font-medium">
                  Direct physical plot inspection and beacon verification available Monday through Saturday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
