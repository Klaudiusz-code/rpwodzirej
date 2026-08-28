"use client";

import { useState, useEffect } from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-30 bg-[#020202] text-gray-600 text-[11px] border-b border-white/[0.06] tracking-[0.15em] uppercase transition-all duration-300 ease-in-out ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8 py-2.5 flex justify-center md:justify-between items-center">
        <div className="hidden md:flex items-center gap-8">
          <a
            href="tel:+48507177939"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiPhone size={11} className="opacity-60" /> 507 177 939
          </a>
          <span className="w-px h-3 bg-white/10"></span>
          <span className="flex items-center gap-2 text-gray-700">
            <FiMapPin size={11} className="opacity-60" /> Kraków & cała Polska
          </span>
        </div>

        <div className="flex items-center gap-5 md:gap-6 md:ml-auto font-semibold">
          <a
            href="https://www.instagram.com/rpevents.robertpierz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <SiInstagram size={14} />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <a
            href="https://youtube.com/@rpeventsrobertpierz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={14} />
            <span className="hidden md:inline">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
