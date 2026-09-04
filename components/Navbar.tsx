"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar({ settings }: { settings: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const links = [
    "Start",
    "Realizacje",
    "O mnie",
    "Oferta",
    "Opinie",
    "Kontakt",
  ];

  const logo = settings?.logo?.node?.sourceUrl || "/rp-wektor.svg";

  const logoAlt = settings?.logo?.node?.altText || "RP.events";

  const phone = settings?.numerTelefonuUstawienia;

  const phoneHref = `tel:${String(phone || "").replace(/\s/g, "")}`;

  const getLinkHref = (anchor: string) => {
    return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-[60] h-20 transition-all duration-300 ease-in-out border-b border-white/[0.04] ${
          isScrolled
            ? "top-0 bg-[#020202]/95 backdrop-blur-xl"
            : "top-[38px] bg-[#020202]/90 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full w-full">
          <a href="/" className="flex-shrink-0">
            <img
              src={logo}
              alt={logoAlt}
              // ZMIANA: Na mobile h-[50px] w-[140px] (bardzo małe), na desktopie większe (lg:)
              className="h-[50px] w-[140px] object-contain object-left
                         lg:h-[80px] lg:w-[350px]"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((item, index) => (
              <Fragment key={item}>
                <a
                  href={getLinkHref(item.toLowerCase().replace(" ", "-"))}
                  className="text-[13px] font-medium text-gray-500 hover:text-white transition-colors duration-300 relative"
                >
                  {item}

                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-white transition-all duration-300 hover:w-full"></span>
                </a>

                {index < links.length - 1 && (
                  <div className="w-px h-3 bg-white/20"></div>
                )}
              </Fragment>
            ))}
          </div>

          <a
            href={getLinkHref("kontakt")}
            className="hidden lg:inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white hover:text-black text-[13px] font-medium px-6 py-2.5 rounded-sm transition-all duration-300 flex-shrink-0 tracking-wide"
          >
            Zapytaj o termin
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-white p-2 z-50" // Dodałem z-50 dla pewności
            aria-label="Otwórz menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[85vw] max-w-sm bg-[#050505] border-l border-white/10 flex flex-col transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center"
          >
            {/* Logo w menu bocznym - także małe */}
            <img
              src={logo}
              alt={logoAlt}
              className="h-[50px] w-auto object-contain"
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

        <div className="flex-1 flex flex-col justify-center px-8 overflow-y-auto">
          <div className="space-y-1">
            {links.map((item, i) => (
              <a
                key={item}
                href={getLinkHref(item.toLowerCase().replace(" ", "-"))}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-2xl font-medium tracking-tight border-b border-white/[0.04] transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0 text-gray-400 hover:text-white hover:pl-2"
                    : "opacity-0 translate-x-10 text-gray-800"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${150 + i * 50}ms` : "0ms",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            className={`mt-10 transition-all duration-500 ease-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMenuOpen ? "500ms" : "0ms",
            }}
          >
            <a
              href={getLinkHref("kontakt")}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center border border-white/20 text-white hover:bg-white hover:text-black text-sm font-medium px-6 py-3 rounded-sm transition-all duration-300"
            >
              Zapytaj o termin
            </a>
          </div>
        </div>

        <div
          className={`p-6 border-t border-white/10 text-center transition-all duration-500 delay-100 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[10px] text-gray-600 mb-2 uppercase tracking-[0.25em]">
            Zadzwoń
          </p>

          <a
            href={phoneHref}
            className="text-white text-lg font-light tracking-wider hover:text-gray-400 transition-colors"
          >
            {phone}
          </a>
        </div>
      </div>
    </>
  );
}
