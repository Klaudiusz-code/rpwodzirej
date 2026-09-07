"use client";

import { useState, useEffect } from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";

export default function TopBar({ settings }: { settings: any }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = settings?.globalPhone;
  const location = settings?.lokalizacjaUstawienia;
  const instagram = settings?.instagram?.linkDoProfiluInstagram;
  const youtube = settings?.youtbue?.linkDoProfiluYoutube;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-30 bg-[#020202] text-gray-600 text-[11px] border-b border-white/[0.06] tracking-[0.15em] uppercase transition-all duration-300 ease-in-out ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 py-2.5 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          <a
            href={`tel:${String(phone || "").replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiPhone size={11} className="opacity-60" />
            {phone}
          </a>

          <span className="w-px h-3 bg-white/10"></span>

          <span className="flex items-center gap-2 text-gray-700">
            <FiMapPin size={11} className="opacity-60" />
            {location}
          </span>
        </div>

        <a
          href={instagram || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="md:hidden flex items-center text-gray-400 hover:text-white transition-colors duration-300"
        >
          <SiInstagram size={15} />
        </a>

        <a
          href="https://www.weselezklasa.pl/ogloszenia-weselne/rpevents-djsax-robert-pierz,60030/"
          target="_blank"
          rel="noopener noreferrer"
          title="Dj/Sax Robert Pierz (rp.events)"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <img
            src="https://www.weselezklasa.pl/banery/Weselezklasa/button230x50bordowetlo.png"
            alt="Dj/Sax Robert Pierz (rp.events)"
            width={230}
            height={50}
            className="w-[125px] sm:w-[150px] md:w-[230px] h-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-5 md:gap-6 md:ml-auto font-semibold">
          <a
            href={instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <SiInstagram size={14} />
            <span>Instagram</span>
          </a>

          <a
            href={youtube || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center gap-2 text-gray-700 hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={15} />

            <span className="hidden md:inline">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
