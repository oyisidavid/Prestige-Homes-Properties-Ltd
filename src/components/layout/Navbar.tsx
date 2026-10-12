"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ShieldCheck, MapPin, Mail } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-white transition-all shadow-md">
      {/* Top Banner - FCDA Compliance & Headquarters (Hidden on mobile and tablet) */}
      <div className="hidden lg:block bg-brand-forest-dark text-white px-4 py-1.5 text-xs font-medium">
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
            <span className="hidden lg:inline text-emerald-700">|</span>
            <a
              href={`mailto:${contactDetails.email}`}
              className="hover:text-white transition-colors hidden lg:flex items-center gap-1 font-bold text-emerald-200"
            >
              <Mail className="w-3 h-3 text-brand-gold" /> {contactDetails.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Logo with Company Name & Tagline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[64px] sm:h-20 lg:h-24 py-2 sm:py-0 flex items-center justify-between gap-3 sm:gap-4">
        {/* Logo and Company Name Branding Link */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none rounded-xl p-1 transition-transform hover:scale-[1.01]"
          aria-label="Prestige Homes & Properties Ltd Homepage"
        >
          <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto aspect-[625/460] shrink-0 flex items-center">
            <Image
              src="/images/logo-emblem.png"
              alt="Prestige Homes & Properties Ltd"
              width={130}
              height={96}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5 leading-none">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-brand-forest tracking-tight uppercase">
                Prestige Homes
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-black text-slate-800 tracking-wider uppercase mt-0.5 sm:mt-0">
                & Properties Ltd
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-serif italic text-brand-gold font-bold leading-tight mt-0.5 sm:mt-1 block">
              ...crafting quality, Delivering value
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links & Action */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-base font-extrabold text-text-secondary">
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
          <Link
            href="/contact"
            className="min-h-[46px] px-6 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          >
            <span>Schedule Inspection</span>
          </Link>
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
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] w-full py-3 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-black text-center flex items-center justify-center gap-2 shadow-md text-sm"
            >
              <span>Schedule Site Inspection</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
