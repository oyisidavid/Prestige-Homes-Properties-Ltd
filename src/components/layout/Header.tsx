"use me";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, ShieldCheck, MapPin } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formattedWhatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    "Hello Prestige Homes, I am inquiring about verified land banking and estate developments in Abuja."
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-white/95 backdrop-blur-md transition-all">
      {/* Top Banner - Compliance & FCT Markets */}
      <div className="bg-brand-forest-dark text-white px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase">
              <ShieldCheck className="w-3 h-3" /> FCDA Verified
            </span>
            <span className="hidden sm:inline text-emerald-100">
              Institutional Land Banking & Prime Estates in FCT Abuja
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100 text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-gold" /> Apo, Gudu, Abuja
            </span>
            <span className="hidden md:inline">|</span>
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors hidden md:flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-gold" /> {contactDetails.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex flex-col group focus-visible:ring-2 focus-visible:ring-brand-forest rounded-lg p-1">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-forest flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:bg-brand-forest-dark transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl lg:text-2xl text-text-primary tracking-tight leading-none">
                PRESTIGE <span className="text-brand-forest">HOMES</span>
              </span>
              <span className="font-serif italic text-[11px] text-brand-gold font-medium leading-tight mt-0.5">
                ...crafting quality, Delivering value
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-text-secondary">
          <Link
            href="#hero"
            className="hover:text-brand-forest transition-colors py-2 border-b-2 border-transparent hover:border-brand-forest"
          >
            Overview
          </Link>
          <Link
            href="#featured-estates"
            className="hover:text-brand-forest transition-colors py-2 border-b-2 border-transparent hover:border-brand-forest"
          >
            Featured Estates
          </Link>
          <Link
            href="#trust-ribbon"
            className="hover:text-brand-forest transition-colors py-2 border-b-2 border-transparent hover:border-brand-forest"
          >
            Title Verification
          </Link>
          <Link
            href="#inspection-booking"
            className="hover:text-brand-forest transition-colors py-2 border-b-2 border-transparent hover:border-brand-forest"
          >
            Book Site Visit
          </Link>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
            className="min-h-[44px] px-4 py-2.5 rounded-lg border border-surface-border text-text-primary font-semibold text-sm hover:border-brand-forest hover:text-brand-forest transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest"
          >
            <Phone className="w-4 h-4 text-brand-forest" />
            <span>Call Advisory</span>
          </a>
          <a
            href={formattedWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 py-2.5 rounded-lg bg-brand-forest hover:bg-brand-forest-dark text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg text-text-primary hover:bg-surface-bg transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-surface-border px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-text-primary text-base">
            <Link
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md hover:bg-surface-bg hover:text-brand-forest"
            >
              Overview
            </Link>
            <Link
              href="#featured-estates"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md hover:bg-surface-bg hover:text-brand-forest"
            >
              Featured Estates
            </Link>
            <Link
              href="#trust-ribbon"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md hover:bg-surface-bg hover:text-brand-forest"
            >
              Title Transparency & Compliance
            </Link>
            <Link
              href="#inspection-booking"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-md hover:bg-surface-bg hover:text-brand-forest"
            >
              Schedule Site Visit
            </Link>
          </nav>
          <div className="pt-2 border-t border-surface-border flex flex-col gap-3">
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="min-h-[44px] w-full py-3 rounded-lg border border-brand-forest text-brand-forest font-bold text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call {contactDetails.phone}
            </a>
            <a
              href={formattedWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] w-full py-3 rounded-lg bg-brand-forest text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-brand-gold" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
