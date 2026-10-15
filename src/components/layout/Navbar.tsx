"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Menu,
  X,
  ShieldCheck,
  MapPin,
  Mail,
  Calendar,
  ExternalLink,
  Home,
  Building2,
  Users,
  MessageSquare,
} from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Properties", href: "/properties", icon: Building2 },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-border bg-white shadow-sm transition-all">
      {/* 1. Top Utility Ribbon (Desktop & Tablet) */}
      <div className="hidden md:block bg-brand-forest-dark text-white px-4 py-1.5 text-xs font-medium border-b border-emerald-950/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Compliance & Identity */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1 bg-brand-gold text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide shrink-0">
              <ShieldCheck className="w-3 h-3 text-white" /> FCDA Verified
            </span>
            <span className="text-emerald-100/90 text-xs truncate">
              Prestige Homes & Properties Ltd — Federal Capital Territory (FCT) Abuja
            </span>
          </div>

          {/* Contact & Webmail Links */}
          <div className="flex items-center gap-3.5 text-emerald-100 text-[11px] shrink-0">
            <span className="hidden lg:flex items-center gap-1 text-emerald-200">
              <MapPin className="w-3 h-3 text-brand-gold shrink-0" /> Apo, Gudu, Abuja
            </span>
            <span className="hidden lg:inline text-emerald-700">|</span>
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-bold text-emerald-200"
            >
              <Phone className="w-3 h-3 text-brand-gold shrink-0" /> {contactDetails.phone}
            </a>
            <span className="text-emerald-700">|</span>
            <a
              href={`mailto:${contactDetails.email}`}
              className="hover:text-white transition-colors hidden sm:flex items-center gap-1 font-bold text-emerald-200"
            >
              <Mail className="w-3 h-3 text-brand-gold shrink-0" /> {contactDetails.email}
            </a>
            <span className="text-emerald-700">|</span>
            {/* Quick Webmail Access in Top Ribbon */}
            <a
              href={contactDetails.webmail}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1 font-extrabold text-amber-300 hover:text-amber-200"
              title="Open Roundcube Webmail Login (https://39.qservers.net:2096/webmaillogout.cgi)"
            >
              <Mail className="w-3 h-3 text-amber-300 shrink-0" />
              <span>Webmail</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none rounded-xl p-1 transition-transform hover:scale-[1.01] shrink-0"
          aria-label="Prestige Homes & Properties Ltd Homepage"
        >
          <div className="relative h-8 sm:h-9 lg:h-11 w-auto aspect-[625/460] shrink-0 flex items-center">
            <Image
              src="/images/logo-emblem.png"
              alt="Prestige Homes & Properties Ltd"
              width={100}
              height={74}
              className="h-8 sm:h-9 lg:h-11 w-auto object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5 leading-none">
              <span className="text-sm sm:text-base lg:text-[17px] font-black text-brand-forest tracking-tight uppercase">
                Prestige Homes
              </span>
              <span className="text-[10px] sm:text-[11px] lg:text-xs font-black text-slate-800 tracking-wider uppercase mt-0.5 sm:mt-0">
                & Properties Ltd
              </span>
            </div>
            <span className="text-[8px] sm:text-[8.5px] lg:text-[9.5px] font-serif italic text-brand-gold font-bold leading-tight mt-0.5 sm:mt-1 block">
              ...crafting quality, Delivering value
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 font-bold text-[13px] xl:text-[14px] text-slate-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1.5 px-1 border-b-2 transition-all min-h-[40px] flex items-center whitespace-nowrap ${
                  isActive
                    ? "border-brand-forest text-brand-forest font-black"
                    : "border-transparent hover:border-brand-forest/60 hover:text-brand-forest"
                } focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none rounded-sm`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          {/* Webmail Button (Takes user directly to Roundcube login) */}
          <a
            href={contactDetails.webmail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Staff and Admin Webmail Login"
            title="Open Roundcube Webmail Login (https://39.qservers.net:2096/webmaillogout.cgi)"
            className="min-h-[40px] px-3 py-1.5 rounded-xl border border-slate-300 hover:border-brand-forest/50 bg-slate-50 hover:bg-emerald-50/80 text-slate-800 hover:text-brand-forest font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm group focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          >
            <Mail className="w-3.5 h-3.5 text-brand-gold group-hover:text-brand-forest transition-colors shrink-0" />
            <span>Webmail</span>
            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-brand-forest transition-colors shrink-0" />
          </a>

          {/* Schedule Site Inspection CTA */}
          <Link
            href="/contact#inspection-form"
            className="min-h-[40px] px-3.5 xl:px-4 py-2 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-xs xl:text-[13px] shadow-md shadow-emerald-900/15 transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
            <span className="whitespace-nowrap">Schedule Inspection</span>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden min-h-[40px] min-w-[40px] flex items-center justify-center p-1.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* 3. Mobile Slide-Over Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-surface-border px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {/* Navigation Links with Icons */}
          <nav className="flex flex-col space-y-1 font-bold text-slate-700 text-[13px] sm:text-sm">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] flex items-center gap-3 px-3.5 py-2 rounded-xl transition-colors ${
                    isActive
                      ? "bg-brand-forest/10 text-brand-forest font-black"
                      : "hover:bg-slate-50 hover:text-brand-forest"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? "text-brand-forest" : "text-slate-400"}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons in Drawer */}
          <div className="pt-3 border-t border-surface-border flex flex-col gap-2.5">
            {/* Primary Inspection CTA */}
            <Link
              href="/contact#inspection-form"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] w-full py-2.5 rounded-xl bg-brand-forest hover:bg-brand-forest-dark text-white font-extrabold text-center flex items-center justify-center gap-2 shadow-md text-sm"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Schedule Site Inspection</span>
            </Link>

            {/* Direct Webmail Button */}
            <a
              href={contactDetails.webmail}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] w-full py-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-extrabold text-center flex items-center justify-center gap-2 text-sm shadow-sm transition-all"
            >
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>Webmail</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Contact Direct Links on Mobile */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1">
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-slate-700 hover:text-brand-forest py-1"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{contactDetails.phone}</span>
            </a>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> FCDA Approved
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
