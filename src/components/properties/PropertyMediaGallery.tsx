"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ChevronLeft, ChevronRight, Eye, Maximize2, X } from "lucide-react";
import { EstateListing } from "@/data/properties";

interface PropertyMediaGalleryProps {
  estate: EstateListing;
}

const photoCaptions: Record<string, string> = {
  "solar-city-170sqm-terrace-front.jpg": "Front Façade & Paved Carport",
  "solar-city-170sqm-terrace-perspective.jpg": "Boulevard Perspective & Landscape",
  "solar-city-170sqm-terrace-night.jpg": "Evening Illumination & Architectural Lighting",
  "solar-city-170sqm-terrace-aerial.jpg": "Rooftop Solar Array & Overhead Layout",
  "solar-city-250sqm-semi-detached-front.jpg": "Front Elevation & Symmetrical Portico",
  "solar-city-250sqm-semi-detached-side.jpg": "Side Perspective & Private Perimeter",
  "solar-city-250sqm-semi-detached-street.jpg": "Daylight Street View & Landscaping",
  "solar-city-250sqm-semi-detached-night.jpg": "Evening Illumination & Architectural Lighting",
  "solar-city-350sqm-fully-detached-front.jpg": "Front Façade & Balcony (Villa Elevation)",
  "solar-city-350sqm-fully-detached-entrance.jpg": "Entrance Steps, Portico & Paved Forecourt",
  "solar-city-350sqm-fully-detached-side.jpg": "Side Perspective & Private Compound Wall",
  "solar-city-350sqm-fully-detached-approach.jpg": "Boulevard Gated Approach & Landscaping",
  "solar-city-350sqm-fully-detached-street.jpg": "Estate Boulevard & Street Overview",
  "solar-city-450sqm-fully-detached-front.jpg": "Front Façade & Double Covered Carport",
  "solar-city-450sqm-fully-detached-street.jpg": "Daylight Street Perspective & Perimeter Wall",
  "solar-city-450sqm-fully-detached-pool.jpg": "Private Swimming Pool Courtyard & Sun Deck",
  "solar-city-450sqm-fully-detached-night.jpg": "Twilight Architectural Illumination & Façade",
  "solar-city-450sqm-fully-detached-carport.jpg": "Executive Carport & Garden Forecourt",
  "solar-city-450sqm-fully-detached-side.jpg": "Corner Elevation & Perimeter Boundary Wall",
  "solar-city-600sqm-fully-detached-front.jpg": "Front Elevation, Covered Carport & Upper Balcony",
  "solar-city-600sqm-fully-detached-perspective.jpg": "Estate Boulevard Perspective & EV Station",
  "solar-city-600sqm-fully-detached-aerial.jpg": "Rooftop Solar Array & Private Pool Courtyard",
  "solar-city-600sqm-fully-detached-entrance.jpg": "Illuminated Entrance Steps & Garden Forecourt",
  "solar-city-600sqm-fully-detached-street.jpg": "Twilight Streetscape & Architectural Fins",
  "solar-city-1000sqm-block-flats-street.jpg": "Boulevard Street View, Teal Canopy & Luxury Cars",
  "solar-city-1000sqm-block-flats-entrance.jpg": "Illuminated Ground-Floor Entrance & LED Stepping Path",
  "solar-city-1000sqm-block-flats-front.jpg": "Full Front Elevation — 3-Storey Block with EV Charging",
  "solar-city-1000sqm-block-flats-aerial.jpg": "Rooftop Solar Array & Overhead Site Layout",
  "embassy-150sqm-terrace-aerial.jpg": "Aerial Street View & Solar-Equipped Terrace Units",
  "embassy-150sqm-terrace-overhead.jpg": "Overhead Rooftop Solar Array & Front Forecourt",
  "embassy-150sqm-terrace-front.jpg": "Ground Street Elevation & Covered Carport Entries",
  "embassy-250sqm-semi-detached-front.jpg": "Front Façade, Executive Carport & Modern Architecture",
  "the-embassy-wasa.jpg": "The Embassy Masterplan — Gated Entrance & Luxury Villa Community",
  "the-embassy-wasa-masterplan.jpg": "The Embassy Masterplan — Gated Security Entrance & Luxury Villas",
  "the-embassy-wasa-aerial.jpg": "The Embassy Aerial Overview — Green Corridor & Planned Subdivisions",
  "theembassy.jpg": "The Embassy Official Pre-Sales Document & District Map",
};

function getCaption(imagePath: string, index: number): string {
  const filename = imagePath.split("/").pop() || "";
  return photoCaptions[filename] || `Estate View ${index + 1}`;
}

export function PropertyMediaGallery({ estate }: PropertyMediaGalleryProps) {
  const images = estate.gallery && estate.gallery.length > 0 ? estate.gallery : [estate.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex] || estate.image;

  return (
    <div className="space-y-4">
      {/* Main Large Media Display Container - Clean Framing Without Text Collision */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-surface-border w-full h-[360px] sm:h-[480px] lg:h-[580px] group">
        <Image
          src={currentImage}
          alt={`${estate.name} - ${getCaption(currentImage, currentIndex)}`}
          fill
          className="object-cover object-center transition-all duration-300"
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />

        {/* Subtle Bottom Vignette Gradient exclusively for the caption bar */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Top Badges & Fullscreen Control */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
          <div className="inline-flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold border border-white/20 shadow-lg pointer-events-auto">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>FCDA Verified Architecture</span>
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="min-h-[40px] px-4 py-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-md text-xs font-bold border border-white/20 transition-all flex items-center gap-2 shadow-lg hover:scale-105 pointer-events-auto"
              aria-label="View Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5 text-brand-gold" />
              <span>Fullscreen ({images.length} Photos)</span>
            </button>
          )}
        </div>

        {/* Left / Right Arrow Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-xl hover:scale-110 border border-white/20 z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md flex items-center justify-center transition-all shadow-xl hover:scale-110 border border-white/20 z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Bottom Floating Info Pill */}
        <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
          <div className="bg-slate-950/85 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/15 shadow-xl flex items-center gap-2 pointer-events-auto">
            <Eye className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              Photo {currentIndex + 1} of {images.length}:{" "}
              <strong className="text-emerald-300 font-extrabold">
                {getCaption(currentImage, currentIndex)}
              </strong>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 pointer-events-auto">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all ${
                  dotIdx === currentIndex ? "w-6 bg-brand-gold" : "w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`Jump to photo ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          {images.map((img, idx) => {
            const isSelected = idx === currentIndex;
            const caption = getCaption(img, idx);
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`group relative rounded-2xl overflow-hidden aspect-[16/10] border-2 transition-all text-left focus-visible:ring-2 focus-visible:ring-brand-forest focus-visible:outline-none ${
                  isSelected
                    ? "border-brand-forest ring-4 ring-brand-forest/20 shadow-lg scale-[1.02]"
                    : "border-slate-200 hover:border-brand-forest/60 opacity-80 hover:opacity-100"
                }`}
                aria-label={`Select photo ${idx + 1}: ${caption}`}
              >
                <Image
                  src={img}
                  alt={caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 transition-colors ${
                    isSelected ? "bg-brand-forest/15" : "bg-black/20 group-hover:bg-transparent"
                  }`}
                />
                <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
                  <span className="block text-[11px] font-extrabold text-white leading-tight truncate">
                    {caption}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in">
          <div className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full">
            <div className="text-white space-y-0.5">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
                {estate.name} — Photo {currentIndex + 1} of {images.length}
              </span>
              <h4 className="text-base font-extrabold text-white">
                {getCaption(currentImage, currentIndex)}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Media */}
          <div className="relative flex-1 w-full max-w-6xl mx-auto my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={currentImage}
                alt={getCaption(currentImage, currentIndex)}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Lightbox Bottom Thumbnails */}
          <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 z-10">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? "border-brand-gold scale-105"
                    : "border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
