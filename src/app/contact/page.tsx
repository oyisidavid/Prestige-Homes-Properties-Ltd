"use me";
"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, CheckCircle2, User, Send } from "lucide-react";
import { contactDetails } from "@/data/properties";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    `Hello Prestige Homes, my name is ${fullName}. Message: ${message}`
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Office Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-surface-border space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
                Head Office & Contact Details
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-forest" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Office Address</span>
                    <span className="font-extrabold text-slate-900 leading-relaxed block mt-0.5">
                      {contactDetails.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Direct Telephone</span>
                    <a
                      href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                      className="font-extrabold text-brand-forest hover:underline text-base block mt-0.5"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Address</span>
                    <span className="font-extrabold text-slate-900 block mt-0.5">{contactDetails.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Operational Hours</span>
                    <span className="font-bold text-slate-800 block mt-0.5">{contactDetails.openingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
                    "Hello Prestige Homes, I want to inquire about site inspection and plot allocations."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] w-full bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                >
                  <MessageSquare className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Instant WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-surface-border">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-extrabold text-slate-900">Send an Advisory Message</h3>
                  <p className="text-xs text-slate-500 font-medium">Fill out the inquiry form below for direct response from our FCT desk.</p>
                </div>

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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message / Plot Requirements</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your target plot size (e.g. 500 SqM in Solar City Apo) or installment terms needed..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:ring-2 focus:ring-brand-forest focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
                >
                  <Send className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Submit Inquiry</span>
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
