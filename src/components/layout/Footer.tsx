import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function Footer() {
  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${encodeURIComponent(
    "Hello Prestige Homes, I am seeking consultation on verified FCDA titles and plot allocation."
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Prominent Brand Identity & Dark Logo */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block focus-visible:ring-2 focus-visible:ring-brand-forest rounded-xl transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-20 sm:h-24 w-auto min-w-[220px] p-1 flex items-center">
                <Image
                  src="/images/whitelogoonblackbackground.png"
                  alt="Prestige Homes & Properties Ltd Transparent Dark Logo"
                  width={380}
                  height={110}
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="font-serif italic text-sm text-brand-gold font-bold">
              {contactDetails.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Institutional real estate development and verifiable land banking firm operating across Federal Capital Territory (FCT), Abuja, Nigeria. Guaranteed FCDA C of O titles and master-planned solar estates.
            </p>

            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-2 rounded-xl text-emerald-400 text-xs font-bold shadow-inner">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-gold shrink-0" />
              <span>100% Verifiable FCDA Titles Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5">
                  All Properties & Plots
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5">
                  About Prestige Homes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest rounded-md px-1 py-0.5">
                  Contact & Head Office
                </Link>
              </li>
            </ul>
          </div>

          {/* FCT Target Districts */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
              FCT Growth Corridors
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li className="flex items-center gap-1 text-slate-300">• Burum West District, Apo</li>
              <li className="flex items-center gap-1 text-slate-300">• Wasa District Expressway</li>
              <li>• Guzape II Residential Enclave</li>
              <li>• Katampe Extension Hilltop</li>
              <li>• Jabi, Wuye & Karsana Corridor</li>
              <li>• Airport Road Expansion Axis</li>
            </ul>
          </div>

          {/* Head Office & Direct Phone */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4">
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
              <span>{contactDetails.email}</span>
            </div>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700 text-emerald-200 text-xs font-bold transition-all focus-visible:ring-2 focus-visible:ring-brand-forest"
              >
                <MessageSquare className="w-4 h-4 text-brand-gold" />
                <span>WhatsApp Advisory Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {contactDetails.company}. All rights reserved.</p>
          <div className="flex items-center gap-4 font-semibold">
            <span>FCDA Certified Titles</span>
            <span>•</span>
            <span>Master-Planned Solar Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
