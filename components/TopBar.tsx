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
      {/* h-9 to 36px - stała wysokość paska */}
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 flex items-center justify-between h-9 relative">
        {/* LEWA STRONA: BANER */}
        <div className="flex items-center">
          <a
            href="https://www.weselezklasa.pl/ogloszenia-weselne/rpevents-djsax-robert-pierz,60030/"
            target="_blank"
            rel="noopener noreferrer"
            title="Dj/Sax Robert Pierz (rp.events)"
          >
            <img
              src="https://www.weselezklasa.pl/banery/Weselezklasa/logo128x128czarnetlobialewypelnienie.png"
              alt="Dj/Sax Robert Pierz (rp.events)"
              // Zmiany:
              // 1. my-1 = margines góra/dół (4px) tylko na mobile
              // 2. max-h-[28px] = mały baner na mobile
              // 3. sm:my-0 = usunięcie marginesu na tabletach
              // 4. sm:max-h-[32px] = średni na tabletach
              // 5. md:max-h-[36px] = pełny na desktopie
              className="h-auto my-1 max-h-[28px] sm:my-0 sm:max-h-[32px] md:max-h-[36px] w-auto object-contain border-0 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* PRAWA STRONA: IKONY */}
        <div className="flex items-center gap-3 md:gap-6 border-l border-white/10 pl-3 md:pl-6">
          <a
            href={instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <SiInstagram size={12} className="md:size-[14px]" />
            <span className="hidden md:inline">Instagram</span>
          </a>

          <a
            href={youtube || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={13} className="md:size-[15px]" />
            <span className="hidden md:inline">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
