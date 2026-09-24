import React from "react";
import { ShieldCheck, Building2, MapPin, CalendarDays } from "lucide-react";

export function TrustRibbon() {
  const metrics = [
    {
      icon: ShieldCheck,
      stat: "100%",
      label: "FCDA C of O Titles",
      subtext: "100% Verifiable Documentation",
    },
    {
      icon: Building2,
      stat: "1,500+",
      label: "Allocated Units",
      subtext: "Delivered & Subdivided Plots",
    },
    {
      icon: MapPin,
      stat: "Prime FCT",
      label: "Abuja Locations",
      subtext: "Apo Corridor & Wasa District",
    },
    {
      icon: CalendarDays,
      stat: "Up to 24 Mos",
      label: "Flexible Plans",
      subtext: "Structured Installment Terms",
    },
  ];

  return (
    <section id="trust-ribbon" className="bg-white border-y border-surface-border py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 p-3 rounded-xl hover:bg-surface-bg transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-forest/10 flex items-center justify-center text-brand-forest shrink-0">
                  <Icon className="w-6 h-6 text-brand-forest" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-forest tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-text-primary">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-text-muted font-semibold">
                    {item.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
