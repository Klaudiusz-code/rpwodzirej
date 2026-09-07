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
      className={`fixed top-0 left-0 right-0 z-30 bg-[#020202] text-gray-400 text-[11px] border-b border-white/[0.06] tracking-[0.15em] uppercase transition-all duration-300 ease-in-out ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8 py-2.5 flex items-center justify-between relative h-10">
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${String(phone || "").replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            <FiPhone size={12} />
            {phone}
          </a>

          <span className="w-px h-3 bg-white/10"></span>

          <span className="flex items-center gap-2 whitespace-nowrap opacity-80">
            <FiMapPin size={12} />
            {location}
          </span>
        </div>

        {/* LEWA STRONA (MOBILE) */}
        <a
          href={instagram || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="md:hidden flex items-center hover:text-white transition-colors duration-300"
        >
          <SiInstagram size={14} />
        </a>

        {/* ŚRODEK (BANER) */}
        <div className="flex-1 flex justify-center items-center px-2">
          <a
            href="https://www.weselezklasa.pl/ogloszenia-weselne/rpevents-djsax-robert-pierz,60030/"
            target="_blank"
            rel="noopener noreferrer"
            title="Dj/Sax Robert Pierz (rp.events)"
          >
            <img
              src="https://www.weselezklasa.pl/banery/Weselezklasa/button280x60szaretlobordowynapis.png"
              alt="Dj/Sax Robert Pierz (rp.events)"
              // max-h-[36px] pozwala na lepszą czytelność napisu, nie powiększając paska
              className="h-auto max-h-[36px] w-auto object-contain border-0 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* PRAWA STRONA */}
        <div className="flex items-center gap-4 md:gap-6 md:ml-auto">
          <a
            href={instagram || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <SiInstagram size={13} />
            <span>Instagram</span>
          </a>

          <a
            href={youtube || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FiYoutube size={14} />
            <span className="hidden md:inline">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
