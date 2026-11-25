
"use client";

import { useState, useEffect, Fragment } from "react";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar({ settings }: { settings: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const links = [
    { label: "Start", anchor: "start" },
    { label: "Realizacje", anchor: "realizacje" },
    { label: "O mnie", anchor: "o-mnie" },
    { label: "Oferta", anchor: "oferta" },
    { label: "Opinie", anchor: "opinie" },
    { label: "Wolne terminy", anchor: "/terminy" },
  ];

  const logoSrc = settings?.logo?.node?.sourceUrl || "/rp-wektor.png";
  const logoAlt = settings?.logo?.node?.altText || "RP.events";

  const phone =
    settings?.numerTelefonuUstawienia || settings?.globalPhone;

  const location = settings?.lokalizacjaUstawienia;

  const phoneHref = `tel:${String(phone || "").replace(/\s/g, "")}`;

  const getLinkHref = (anchor: string) => {
    if (anchor.startsWith("/")) return anchor;

    return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
  };

  const bookingHref = "/umow-spotkanie.html";

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className={`fixed left-0 right-0 z-[60] h-20 xl:h-24 2xl:h-28 border-b border-white/[0.04] transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-[#020202]/95 backdrop-blur-xl shadow-lg"
            : "top-[36px] bg-[#020202]/90 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 lg:px-8 2xl:px-12 flex items-center justify-between h-full w-full">

          {/* LOGO + KONTAKT */}
          <div className="flex items-center gap-5 2xl:gap-8 flex-shrink-0">
            <a href="/" className="flex-shrink-0">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={180}
                height={60}
                priority
                className="w-[85px] md:w-[100px] xl:w-[110px] 2xl:w-[120px] h-auto object-contain"
              />
            </a>

            {/* TELEFON + LOKALIZACJA */}
            <div className="hidden 2xl:flex flex-col items-start justify-center gap-1.5 border-l border-white/10 pl-6">
              {phone && (
                <a
                  href={phoneHref}
                  className="flex items-center gap-2 text-sm text-white font-light tracking-wide hover:text-gray-300 transition-colors"
                >
                  <FiPhone size={15} className="text-gray-500" />
                  {phone}
                </a>
              )}

              {location && (
                <div className="flex items-center gap-2 text-xs text-gray-400 tracking-wide">
                  <FiMapPin size={14} className="text-gray-500" />
                  {location}
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden xl:flex flex-1 items-center justify-center gap-3 2xl:gap-5 px-4">
            {links.map((item, index) => (
              <Fragment key={item.label}>
                <a
                  href={getLinkHref(item.anchor)}
                  className="whitespace-nowrap text-[12px] 2xl:text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {item.label}

                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>

                {index < links.length - 1 && (
                  <span className="w-px h-3.5 bg-white/20 flex-shrink-0" />
                )}
              </Fragment>
            ))}
          </div>

          {/* BOOKING + MOBILE BUTTON */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={bookingHref}
              className="hidden xl:inline-flex items-center justify-center gap-2 whitespace-nowrap border border-amber-200/40 text-amber-200 hover:bg-amber-200 hover:text-black text-[12px] 2xl:text-[13px] font-medium px-4 2xl:px-5 py-3 rounded-sm transition-all duration-300"
            >
              <FiCalendar size={15} />
              Umów rozmowę
            </a>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden text-white p-2 hover:text-amber-200 transition-colors"
              aria-label="Otwórz menu"
              aria-expanded={isMenuOpen}
            >
              <FiMenu size={25} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[88vw] max-w-[420px] bg-[#050505] border-l border-white/10 flex flex-col transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10">
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center"
          >
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={120}
              height={55}
              className="h-[45px] w-auto object-contain"
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Zamknij menu"
          >
            <FiX size={25} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex-1 flex flex-col justify-center px-7 sm:px-10 overflow-y-auto">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-5">
            Nawigacja
          </p>

          <div className="space-y-0">
            {links.map((item, index) => (
              <a
                key={item.label}
                href={getLinkHref(item.anchor)}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3.5 text-xl sm:text-2xl font-medium tracking-tight border-b border-white/[0.06] transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0 text-gray-300 hover:text-white hover:pl-2"
                    : "opacity-0 translate-x-8 text-gray-500"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${100 + index * 45}ms`
                    : "0ms",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* MOBILE BOOKING BUTTON */}
          <a
            href={bookingHref}
            onClick={() => setIsMenuOpen(false)}
            className={`mt-7 flex items-center justify-center gap-3 w-full py-4 px-5 border border-amber-200/40 bg-amber-200 text-black hover:bg-amber-100 transition-all duration-300 font-semibold text-base ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMenuOpen
                ? `${100 + links.length * 45}ms`
                : "0ms",
            }}
          >
            <FiCalendar size={18} />
            Umów rozmowę
          </a>
        </div>

        {/* MOBILE CONTACT FOOTER */}
        <div className="px-7 sm:px-10 py-7 border-t border-white/10">
          {phone && (
            <>
              <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-[0.25em]">
                Zadzwoń
              </p>

              <a
                href={phoneHref}
                className="flex items-center gap-3 text-white text-lg font-light tracking-wide hover:text-amber-200 transition-colors"
              >
                <FiPhone size={17} className="text-gray-500" />
                {phone}
              </a>
            </>
          )}

          {location && (
            <div className="flex items-center gap-3 text-sm text-gray-500 mt-4">
              <FiMapPin size={16} />
              {location}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
