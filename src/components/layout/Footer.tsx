import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Lock } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Footer() {

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-14 pb-12 sm:pt-16 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* 1. Brand Identity with Name Alongside Logo */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 sm:gap-3.5 group focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none rounded-xl transition-transform hover:scale-[1.01]"
              aria-label="Prestige Homes & Properties Ltd Homepage"
            >
              <div className="relative h-12 sm:h-14 w-auto aspect-[625/460] shrink-0 flex items-center">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Prestige Homes & Properties Ltd"
                  width={130}
                  height={96}
                  className="h-12 sm:h-14 w-auto object-contain drop-shadow"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5 leading-none">
                  <span className="text-base sm:text-lg lg:text-xl font-black text-white tracking-tight uppercase">
                    Prestige Homes
                  </span>
                  <span className="text-xs sm:text-sm lg:text-base font-black text-emerald-400 tracking-wider uppercase mt-0.5 sm:mt-0">
                    & Properties Ltd
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-serif italic text-brand-gold font-bold leading-tight mt-1">
                  {contactDetails.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-1">
              Institutional real estate development and verifiable land banking across prime Federal Capital Territory (FCT) Abuja. Guaranteed FCDA C of O land documentation, master-planned estates, and structured installment options.
            </p>
          </div>

          {/* 2. Quick Navigation Links */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link
                  href="/properties"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5 inline-block"
                >
                  All Properties & Plots
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5 inline-block"
                >
                  About Prestige Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#inspection-form"
                  className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5 inline-block"
                >
                  Schedule Site Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Abuja Head Office & Inquiries */}
          <div className="md:col-span-1 lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              Abuja Head Office
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">{contactDetails.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors font-bold text-emerald-200"
              >
                {contactDetails.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-white transition-colors text-slate-300"
              >
                {contactDetails.email}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {contactDetails.company}. All rights reserved.</p>
          <div className="flex items-center gap-3 font-semibold">
            <a
              href={contactDetails.webmail}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 text-slate-400"
              title="Admin & Owner Webmail Login (Roundcube)"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>Webmail</span>
            </a>
            <span>•</span>
            <span>FCDA Certified Titles</span>
            <span>•</span>
            <span>Federal Capital Territory (FCT) Abuja</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
