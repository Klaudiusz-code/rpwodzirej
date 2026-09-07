"use client";

import { useState, useEffect } from "react";
import { SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

export default function TopBar({ settings }: { settings: any }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const instagram = settings?.instagram?.linkDoProfiluInstagram;
  const youtube = settings?.youtbue?.linkDoProfiluYoutube;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-30 bg-[#020202] text-gray-400 text-[11px] border-b border-white/[0.06] tracking-[0.15em] uppercase transition-all duration-300 ease-in-out ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* justify-between rozsuwa elementy na boki */}
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 py-2.5 flex items-center justify-between h-10 relative">
        {/* LEWA STRONA: BANER */}
        <a
          href="https://www.weselezklasa.pl/ogloszenia-weselne/rpevents-djsax-robert-pierz,60030/"
          target="_blank"
          rel="noopener noreferrer"
          title="Dj/Sax Robert Pierz (rp.events)"
        >
          <img
            src="https://www.weselezklasa.pl/banery/Weselezklasa/button280x60szaretlobordowynapis.png"
            alt="Dj/Sax Robert Pierz (rp.events)"
            className="h-auto max-h-[36px] w-auto object-contain border-0 hover:opacity-80 transition-opacity"
          />
        </a>

        {/* PRAWA STRONA: IKONY SPOŁECZNOŚCIOWE */}
        <div className="flex items-center gap-4 md:gap-6 border-l border-white/10 pl-4 md:pl-6">
          <a
            href={instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <SiInstagram size={14} />
            <span className="hidden md:inline">Instagram</span>
          </a>

          <a
            href={youtube || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={15} />
            <span className="hidden md:inline">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
