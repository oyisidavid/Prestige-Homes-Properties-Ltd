"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  User,
  Send,
  Calendar,
} from "lucide-react";
import { contactDetails } from "@/data/properties";

export function ContactClientView() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedEstate, setSelectedEstate] = useState("Peace Crest Estate (Kabusa)");
  const [inspectionType, setInspectionType] = useState("Physical On-Site Visit");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    `Hello Prestige Homes, I requested a site inspection for ${selectedEstate}. Name: ${fullName}, Phone: ${phone}, Mode: ${inspectionType}, Date: ${preferredDate || "Earliest Available"}. Details: ${message}`
  )}`;

  return (
    <div className="py-12 bg-surface-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 border-b border-surface-border pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>Abuja Corporate Headquarters</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Contact <span className="text-brand-forest">Prestige Homes</span>
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
            Get in touch with our land advisory officers for FCDA title verification, plot allocation schedules, and site visit arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Office Details Card */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-brand-forest text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-brand-forest-dark/40 relative overflow-hidden space-y-6">
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-extrabold text-white border-b border-white/15 pb-4">
                Head Office & Contact Details
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">Office Address</span>
                    <span className="font-extrabold text-white leading-relaxed block mt-0.5">
                      {contactDetails.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">Direct Telephone</span>
                    <a
                      href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                      className="font-black text-amber-300 hover:text-white transition-colors text-base block mt-0.5"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">Email Address</span>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="font-extrabold text-white hover:text-amber-200 transition-colors block mt-0.5 break-all"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block">Operational Hours</span>
                    <span className="font-bold text-emerald-100 block mt-0.5">{contactDetails.openingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15">
                <a
                  href={`https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
                    "Hello Prestige Homes, I want to inquire about site inspection and plot allocations."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] w-full bg-white hover:bg-emerald-50 text-brand-forest-dark font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <MessageSquare className="w-4 h-4 text-brand-forest shrink-0" />
                  <span>Instant WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Inspection Booking Form */}
          <div id="inspection-form" className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-surface-border scroll-mt-28">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-brand-forest text-xs font-bold uppercase mb-2">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>Site Inspection & Advisory Booking</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Schedule Site Inspection / Send Inquiry</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Book an on-site guided tour or submit your plot requirements to our FCT land advisory desk.
                  </p>
                </div>

                {/* Target Estate & Inspection Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Estate</label>
                    <select
                      value={selectedEstate}
                      onChange={(e) => setSelectedEstate(e.target.value)}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:ring-2 focus:ring-brand-forest focus:outline-none bg-slate-50"
                    >
                      <option value="Peace Crest Estate (Kabusa)">Peace Crest Estate (Sherretti, Kabusa)</option>
                      <option value="Solar City Apo (Burum West)">Solar City Apo (Burum West District)</option>
                      <option value="The Embassy Wasa">The Embassy Wasa (Wasa Corridor)</option>
                      <option value="General Land Banking">All Estates / General Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Inspection / Inquiry Type</label>
                    <select
                      value={inspectionType}
                      onChange={(e) => setInspectionType(e.target.value)}
                      className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-bold focus:ring-2 focus:ring-brand-forest focus:outline-none bg-slate-50"
                    >
                      <option value="Physical On-Site Visit">Physical On-Site Visit (Guided Tour)</option>
                      <option value="Office Title Review">Office Consultation & Title Review</option>
                      <option value="Plot Allocation Inquiry">Plot Allocation Inquiry</option>
                    </select>
                  </div>
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
                        placeholder="Chief Emeka Okafor"
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 809 000 0000"
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="investor@example.com"
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Preferred Date (Mon - Sat)</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Specific Requirements / Notes (Optional)</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify plot size (e.g. 150 SqM, 250 SqM, 500 SqM in Peace Crest or Solar City Apo), installment duration, or special requests..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[50px] bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                >
                  <Send className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Submit Inspection Request</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-forest flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-brand-forest" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Message Received!</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Thank you <strong className="text-slate-900">{fullName}</strong>. Your message has been routed to our Ocean Centre desk in Apo, Abuja. Our team will contact <strong className="text-slate-900">{phone}</strong> shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
                  >
                    Send Direct WhatsApp Message
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="flex-1 min-h-[44px] border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:bg-slate-50"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
