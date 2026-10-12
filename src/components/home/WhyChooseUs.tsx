"use client";

import React from "react";
import { ShieldCheck, MapPin, Users } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Properties",
      description: "All our properties come with verified titles and proper documentation.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Strategic locations across Abuja with high appreciation potential.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team to guide you through every step of your purchase.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
            Why Choose <span className="text-brand-forest">Prestige Homes?</span>
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            We&apos;re committed to helping you make smart property investments with confidence.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Rounded Icon Emblem */}
                <div className="w-16 h-16 rounded-full bg-amber-50/80 border border-amber-200/60 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-brand-gold" />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
