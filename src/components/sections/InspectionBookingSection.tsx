"use me";
"use client";

import React, { useState } from "react";
import { ShieldCheck, Calendar, MapPin, CheckCircle2, User, Phone, Mail, ArrowRight } from "lucide-react";
import { featuredEstates, contactDetails } from "@/data/properties";

export function InspectionBookingSection() {
  const [selectedEstateId, setSelectedEstateId] = useState(featuredEstates[0].id);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [visitType, setVisitType] = useState<"physical" | "virtual">("physical");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const currentEstate = featuredEstates.find((e) => e.id === selectedEstateId) || featuredEstates[0];

  const whatsappDirectUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    `Hello Prestige Homes, I submitted an inspection request for ${currentEstate.name} (${currentEstate.district}). Name: ${fullName}, Phone: ${phone}, Date: ${date}`
  )}`;

  return (
    <section id="inspection-booking" className="py-16 lg:py-24 bg-brand-forest-dark text-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-forest rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Guarantees & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Verifiable FCDA Allocation Process</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Schedule Your Guided <span className="text-brand-gold">Site Inspection</span>
            </h2>

            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Experience our flagship estate developments in FCT Abuja. Our land allocation officers will take you on a guided tour of Apo (Solar City) and Wasa District (The Embassy).
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Title Verification</h4>
                  <p className="text-xs text-emerald-200">Inspect original FCDA C of O documentation with our legal compliance desk.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Immediate Beacon Allocation</h4>
                  <p className="text-xs text-emerald-200">Physical plot boundary verification & immediate layout subdivision coordinates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Flexible Shuttle Pickup</h4>
                  <p className="text-xs text-emerald-200">Complimentary pick-up from our Apo office or Abuja airport corridor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-extrabold text-slate-900">Book Site Visit / Virtual Tour</h3>
                  <p className="text-xs text-slate-500 font-medium">No obligation inspection request with instant allocation advisor.</p>
                </div>

                {/* Estate Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Estate & Location</label>
                  <select
                    value={selectedEstateId}
                    onChange={(e) => setSelectedEstateId(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:ring-2 focus:ring-brand-forest"
                    required
                  >
                    {featuredEstates.map((estate) => (
                      <option key={estate.id} value={estate.id}>
                        {estate.name} — {estate.district} ({estate.titleDocument})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Visit Type Toggle */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setVisitType("physical")}
                    className={`min-h-[44px] p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      visitType === "physical"
                        ? "border-brand-forest bg-brand-forest/10 text-brand-forest"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-brand-forest" />
                    <span>Physical On-Site Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVisitType("virtual")}
                    className={`min-h-[44px] p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                      visitType === "virtual"
                        ? "border-brand-forest bg-brand-forest/10 text-brand-forest"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-brand-forest" />
                    <span>Virtual Live Tour</span>
                  </button>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Arc. Babatunde Lawal"
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 809 000 0000"
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Inspection Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="investor@domain.com"
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-base rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Confirm Site Inspection Request</span>
                  <ArrowRight className="w-5 h-5 text-brand-gold" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-forest flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-brand-forest" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Inspection Request Logged!</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you <strong className="text-slate-900">{fullName}</strong>. Your inspection slot for <strong className="text-brand-forest">{currentEstate.name}</strong> on <strong className="text-slate-900">{date}</strong> has been received. Our team will call <strong className="text-slate-900">{phone}</strong> shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
                  >
                    Send Instant WhatsApp Message
                  </a>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="flex-1 min-h-[44px] border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:bg-slate-50"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
