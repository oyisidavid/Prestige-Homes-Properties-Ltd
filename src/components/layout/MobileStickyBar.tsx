"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { contactDetails } from "@/data/properties";

export function MobileStickyBar() {
  const whatsappMsg = encodeURIComponent(
    "Hello Prestige Homes, I am interested in booking an inspection for your Abuja estates."
  );
  const whatsappUrl = `https://wa.me/${contactDetails.whatsapp}?text=${whatsappMsg}`;

  return (
    <aside
      className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-surface-border p-3 shadow-2xl flex items-center justify-between gap-3"
      aria-label="Mobile conversion action bar"
    >
      <a
        href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
        className="min-h-[44px] flex-1 flex items-center justify-center gap-2 rounded-lg border border-brand-forest/30 bg-surface-bg text-brand-forest font-bold text-sm hover:bg-brand-forest/5 active:bg-brand-forest/10 transition-colors focus-visible:ring-2 focus-visible:ring-brand-forest"
      >
        <Phone className="w-4 h-4 text-brand-forest" />
        <span>Direct Call</span>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[44px] flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-forest hover:bg-brand-forest-dark text-white font-bold text-sm shadow-md active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-brand-forest"
      >
        <MessageSquare className="w-4 h-4 text-brand-gold" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
