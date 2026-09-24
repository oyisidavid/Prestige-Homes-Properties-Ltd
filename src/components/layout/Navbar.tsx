"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Menu, X, ShieldCheck, MapPin } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    "Hello Prestige Homes, I am interested in verified FCDA land banking and property allocation in Abuja."
  )}`;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-white/98 backdrop-blur-md transition-all shadow-md">
      {/* Top Banner - FCDA Compliance & Headquarters */}
      <div className="bg-brand-forest-dark text-white px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
              <ShieldCheck className="w-3 h-3 text-white" /> FCDA Verified
            </span>
            <span className="hidden sm:inline text-emerald-100 font-medium">
              Prestige Homes & Properties Ltd — Federal Capital Territory (FCT) Abuja
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100 text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-gold shrink-0" /> Apo, Gudu, Abuja
            </span>
            <span className="hidden md:inline text-emerald-700">|</span>
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors hidden md:flex items-center gap-1 font-bold text-emerald-200"
            >
              <Phone className="w-3 h-3 text-brand-gold" /> {contactDetails.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Expanded Height for Highly Visible Logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-28 flex items-center justify-between">
        {/* Prominent Brand Logo */}
        <Link
          href="/"
          className="flex items-center group focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none rounded-xl p-1.5 transition-transform hover:scale-[1.02]"
          aria-label="Prestige Homes & Properties Ltd Homepage"
        >
          <div className="relative h-16 sm:h-20 md:h-22 w-auto min-w-[180px] sm:min-w-[240px] flex items-center">
            <Image
              src="/images/logowithwhitebackground.jpg"
              alt="Prestige Homes & Properties Ltd Logo"
              width={340}
              height={95}
              className="h-16 sm:h-20 md:h-22 w-auto object-contain drop-shadow-sm rounded-lg"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-extrabold text-text-secondary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 border-b-2 transition-all min-h-[44px] flex items-center ${
                  isActive
                    ? "border-brand-forest text-brand-forest font-black"
                    : "border-transparent hover:border-brand-forest/60 hover:text-brand-forest"
                } focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none rounded-md`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
            className="min-h-[48px] px-5 py-3 rounded-xl border-2 border-surface-border text-text-primary font-extrabold text-sm hover:border-brand-forest hover:text-brand-forest transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          >
            <Phone className="w-4.5 h-4.5 text-brand-forest" />
            <span>Call Advisory</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-black text-sm shadow-lg shadow-emerald-900/15 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          >
            <MessageSquare className="w-4.5 h-4.5 text-brand-gold" />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-h-[48px] min-w-[48px] flex items-center justify-center p-2.5 rounded-xl text-text-primary hover:bg-surface-bg transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7 text-slate-900" /> : <Menu className="w-7 h-7 text-slate-900" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-surface-border px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-1.5 font-extrabold text-text-primary text-base">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] flex items-center px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-brand-forest/10 text-brand-forest font-black"
                      : "hover:bg-surface-bg hover:text-brand-forest"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-surface-border flex flex-col gap-3">
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="min-h-[48px] w-full py-3 rounded-xl border-2 border-brand-forest text-brand-forest font-black text-center flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-brand-forest" />
              <span>Call Advisory ({contactDetails.phone})</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] w-full py-3 rounded-xl bg-brand-forest text-white font-black text-center flex items-center justify-center gap-2 shadow-md text-sm"
            >
              <MessageSquare className="w-4 h-4 text-brand-gold" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
