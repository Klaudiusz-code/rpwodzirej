"use client";

import { useState, useEffect, Fragment } from "react";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";
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

  const phone = settings?.numerTelefonuUstawienia || settings?.globalPhone;
  const location = settings?.lokalizacjaUstawienia;

  const phoneHref = `tel:${String(phone || "").replace(/\s/g, "")}`;

  const getLinkHref = (anchor: string) => {
    return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-[60] h-20 lg:h-28 transition-all duration-300 ease-in-out border-b border-white/[0.04] ${
          isScrolled
            ? "top-0 bg-[#020202]/95 backdrop-blur-xl shadow-lg"
            : "top-[36px] bg-[#020202]/90 backdrop-blur-xl" // Dostosowane do h-9 TopBar (36px)
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 lg:px-8 flex items-center justify-between h-full w-full relative">
          <div className="flex items-center gap-6 lg:gap-10">
            <a
              href="/"
              className="flex-shrink-0 z-50
                         absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 // Centrowanie na Mobile
                         lg:static lg:transform-none lg:translate-x-0 lg:translate-y-0" // Reset na Desktop
            >
              <img
                src={logo}
                alt={logoAlt}
                className="h-[80px] w-auto object-contain object-left
                           lg:h-[100px]"
              />
            </a>

            <div className="hidden lg:flex flex-col items-start justify-center gap-1.5 border-l border-white/10 pl-6 lg:pl-10">
              <a
                href={phoneHref}
                className="flex items-center gap-2 text-sm lg:text-base text-white font-light tracking-wide hover:text-gray-300 transition-colors"
              >
                <FiPhone size={16} className="text-gray-500" />
                {phone}
              </a>

              <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-400 tracking-wide">
                <FiMapPin size={14} className="text-gray-500" />
                {location}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {links.map((item, index) => (
              <Fragment key={item}>
                <a
                  href={getLinkHref(item.toLowerCase().replace(" ", "-"))}
                  className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-300 relative"
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

          <div className="flex items-center gap-4">
            <a
              href={getLinkHref("kontakt")}
              className="hidden lg:inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white hover:text-black text-[13px] font-medium px-6 py-2.5 rounded-sm transition-all duration-300 flex-shrink-0 tracking-wide"
            >
              Zapytaj o termin
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white p-2 z-50"
              aria-label="Otwórz menu"
            >
              <FiMenu size={24} />
            </button>
          </div>
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
            <img
              src={logo}
              alt={logoAlt}
              className="h-[50px] w-auto object-contain"
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1"
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
                    : "opacity-0 translate-x-10 text-gray-500"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${150 + i * 50}ms` : "0ms",
                }}
              >
                {item}
              </a>
            ))}
          </div>
          |
        </div>

        <div
          className={`p-6 border-t border-white/10 text-center transition-all duration-500 delay-100 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[10px] text-gray-400 mb-2 uppercase tracking-[0.25em]">
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
