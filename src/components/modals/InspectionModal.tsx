"use me";
"use client";

import React, { useState } from "react";
import { X, Calendar, MapPin, CheckCircle2, User, Phone, Mail, ShieldCheck } from "lucide-react";
import { featuredEstates, contactDetails } from "@/data/properties";

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEstateId?: string;
}

export function InspectionModal({ isOpen, onClose, preselectedEstateId }: InspectionModalProps) {
  const [estateId, setEstateId] = useState(preselectedEstateId || featuredEstates[0].id);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [visitType, setVisitType] = useState<"physical" | "virtual">("physical");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedEstate = featuredEstates.find((e) => e.id === estateId) || featuredEstates[0];

  const whatsappConfirmUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    `Hello Prestige Homes, I just scheduled a ${visitType} inspection for ${selectedEstate.name} (${selectedEstate.district}). Name: ${fullName}, Phone: ${phone}, Preferred Date: ${date}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-surface-border overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-forest uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>On-Site / Virtual Allocation Visit</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Book Site Inspection</h3>
              <p className="text-xs text-slate-500 font-medium">
                Schedule a guided walkthrough with our land allocation officers in FCT Abuja.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Estate */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Estate</label>
                <select
                  value={estateId}
                  onChange={(e) => setEstateId(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest"
                  required
                >
                  {featuredEstates.map((estate) => (
                    <option key={estate.id} value={estate.id}>
                      {estate.name} — {estate.district} ({estate.titleDocument})
                    </option>
                  ))}
                </select>
              </div>

              {/* Visit Type */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVisitType("physical")}
                  className={`min-h-[44px] p-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 ${
                    visitType === "physical"
                      ? "border-brand-forest bg-brand-forest/10 text-brand-forest"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <MapPin className="w-4 h-4 text-brand-forest" />
                  <span>Physical Site Visit</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVisitType("virtual")}
                  className={`min-h-[44px] p-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 ${
                    visitType === "virtual"
                      ? "border-brand-forest bg-brand-forest/10 text-brand-forest"
                      : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Calendar className="w-4 h-4 text-brand-forest" />
                  <span>Virtual Video Tour</span>
                </button>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Chief Emeka Okafor"
                    className="w-full min-h-[44px] pl-10 pr-3 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                    required
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full min-h-[44px] pl-10 pr-3 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                    required
                  />
                </div>
              </div>

              {/* Email Optional */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address (Optional)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="investor@example.com"
                    className="w-full min-h-[44px] pl-10 pr-3 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-forest"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Confirm Site Inspection Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-forest flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-brand-forest" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Inspection Scheduled!</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Our land allocation officer will contact you at <strong className="text-slate-900">{phone}</strong> to confirm transport and meeting details for <strong className="text-brand-forest">{selectedEstate.name}</strong>.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappConfirmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2"
              >
                Send Quick WhatsApp Message to Desk
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full min-h-[44px] border border-slate-200 text-slate-700 font-semibold text-sm rounded-lg hover:bg-slate-50"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
