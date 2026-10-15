"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button when user scrolls down 300px or more
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Scroll to top"
      className={`fixed bottom-[88px] sm:bottom-[96px] right-5 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-forest hover:bg-brand-forest-dark text-white flex items-center justify-center shadow-xl shadow-brand-forest/25 border-2 border-white hover:border-brand-gold/60 transition-all duration-300 ease-in-out group focus-visible:ring-4 focus-visible:ring-brand-forest/40 focus-visible:outline-none active:scale-95 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-white transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
