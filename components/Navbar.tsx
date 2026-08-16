"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const links = ["Start", "Oferta", "O mnie", "Realizacje", "FAQ", "Kontakt"];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-60 h-20 transition-all duration-300 ease-in-out border-b border-white/[0.04]
          ${isScrolled ? "top-0 bg-[#020202]/95 backdrop-blur-xl shadow-lg shadow-black/20" : "top-[38px] bg-[#020202]/90 backdrop-blur-xl"}
        `}
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full w-full">
          <a
            href="#start"
            className="relative w-[120px] h-[40px] flex-shrink-0"
          >
            <Image
              src="/logo-rp.png"
              alt="RP.events"
              fill
              className="object-contain object-left"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center flex-1 justify-center">
            {links.map((item, index) => (
              <div key={item} className="flex items-center group">
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="px-5 text-[13px] font-medium text-gray-400 group-hover:text-[#C6A97D] transition-colors duration-300 relative"
                >
                  {item}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#C6A97D] transition-all duration-300 group-hover:w-full"></span>
                </a>
                {index < links.length - 1 && (
                  <div className="h-5 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-1"></div>
                )}
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="hidden lg:inline-flex items-center gap-2 border border-[#C6A97D] text-[#C6A97D] hover:bg-[#C6A97D] hover:text-[#020202] text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-500 flex-shrink-0"
          >
            Zapytaj o termin
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Otwórz menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* === PRZYLEGNIĘTE TŁO (Kliknięcie w nie zamyka menu) === */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* === PANEL WYSUWANY Z PRAWEJ STRONY === */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-[#050505] border-l border-white/[0.05] flex flex-col transition-transform duration-500 ease-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Nagłówek panelu z logo i krzyżykiem */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.05]">
          <a
            href="#start"
            onClick={() => setIsMenuOpen(false)}
            className="relative w-[100px] h-[30px]"
          >
            <Image
              src="/logo-rp.png"
              alt="RP.events"
              fill
              className="object-contain object-left"
            />
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-500 hover:text-white transition-colors p-1"
            aria-label="Zamknij menu"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Główna lista linków */}
        <div className="flex-1 flex flex-col justify-center px-8 overflow-y-auto">
          <div className="space-y-1">
            {links.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-3xl font-semibold tracking-tight border-b border-white/[0.04] transition-all duration-500 ease-out
                  ${isMenuOpen ? "opacity-100 translate-x-0 text-gray-300 hover:text-[#C6A97D] hover:pl-2" : "opacity-0 translate-x-10 text-gray-800"}
                `}
                style={{
                  transitionDelay: isMenuOpen ? `${150 + i * 50}ms` : "0ms",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Przycisk CTA w panelu */}
          <div
            className={`mt-10 transition-all duration-500 ease-out
              ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
            style={{ transitionDelay: isMenuOpen ? "500ms" : "0ms" }}
          >
            <a
              href="#kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center border border-[#C6A97D] text-[#C6A97D] hover:bg-[#C6A97D] hover:text-[#020202] text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
            >
              Zapytaj o termin
            </a>
          </div>
        </div>

        {/* Stopka panelu z telefonem */}
        <div
          className={`p-6 border-t border-white/[0.05] text-center transition-all duration-500 delay-100
            ${isMenuOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <p className="text-[10px] text-gray-600 mb-2 uppercase tracking-[0.25em]">
            Zadzwoń do nas
          </p>
          <a
            href="tel:+48507177939"
            className="text-[#C6A97D] text-xl font-light tracking-wider hover:text-white transition-colors"
          >
            507 177 939
          </a>
        </div>
      </div>
    </>
  );
}
