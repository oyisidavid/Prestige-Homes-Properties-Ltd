"use client";

import React, { useState } from "react";
import { contactDetails } from "@/data/properties";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello Prestige Homes & Properties Ltd, I am inquiring about verified Abuja estates and plot allocation."
  );
  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${defaultMessage}`;

  return (
    <aside
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex items-center"
      aria-label="WhatsApp Instant Advisory"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with Prestige Homes & Properties Ltd on WhatsApp"
        aria-label="Chat with Prestige Homes & Properties Ltd on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-auto lg:h-auto p-0 lg:py-3 lg:pl-3.5 lg:pr-5 rounded-full flex items-center justify-center lg:gap-3 bg-[#25D366] hover:bg-[#20BA59] text-white shadow-2xl shadow-emerald-950/40 transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/80 focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:outline-none"
      >
        {/* WhatsApp Official Logo SVG */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white drop-shadow-sm"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.27C16.32 14.15 15.11 13.55 14.88 13.47C14.66 13.39 14.5 13.35 14.33 13.59C14.17 13.84 13.7 14.41 13.55 14.57C13.41 14.73 13.26 14.76 13.01 14.63C12.77 14.51 11.98 14.25 11.04 13.41C10.31 12.76 9.82 11.95 9.68 11.71C9.53 11.46 9.66 11.33 9.79 11.2C9.9 11.09 10.03 10.91 10.16 10.76C10.28 10.61 10.32 10.5 10.4 10.34C10.48 10.18 10.44 10.04 10.38 9.92C10.32 9.8 9.83 8.6 9.62 8.11C9.42 7.63 9.22 7.69 9.07 7.68C8.92 7.68 8.76 7.67 8.59 7.67C8.43 7.67 8.16 7.73 7.93 7.98C7.71 8.23 7.07 8.83 7.07 10.05C7.07 11.27 7.96 12.44 8.08 12.6C8.21 12.76 9.82 15.25 12.3 16.32C12.89 16.57 13.35 16.73 13.71 16.84C14.3 17.03 14.84 17 15.26 16.94C15.73 16.87 16.71 16.34 16.91 15.77C17.12 15.2 17.12 14.71 17.06 14.61C16.99 14.5 16.82 14.4 16.57 14.27Z" />
          </svg>

          {/* Pulsing Green Online Indicator Dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-100 border-2 border-[#25D366]"></span>
          </span>
        </div>

        {/* Text Label - Hidden on mobile & tablet, visible on desktop */}
        <div className="hidden lg:flex flex-col text-left leading-tight pr-1">
          <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white inline-block"></span>
            Online Advisory
          </span>
          <span className="text-sm font-extrabold text-white tracking-tight whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
}
