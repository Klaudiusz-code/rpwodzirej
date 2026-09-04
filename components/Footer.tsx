"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiInstagram, FiYoutube } from "react-icons/fi";

export default function Footer({ settings }: { settings: any }) {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const logo = settings?.logo?.node?.sourceUrl || "/rp-wektor.svg";

  const logoAlt = settings?.logo?.node?.altText || "RP.events";

  const instagram = settings?.instagram?.linkDoProfiluInstagram;

  const youtube = settings?.youtbue?.linkDoProfiluYoutube;

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          <div className="md:max-w-xs">
            <div className="mb-6">
              <Image
                src={logo}
                alt={logoAlt}
                width={160}
                height={48}
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                priority={false}
              />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              DJ, Wodzirej, Saksofon. Kraków i cała Polska.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-6">
            <div>
              <h4 className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.2em] mb-5">
                Nawigacja
              </h4>

              <ul className="space-y-3">
                {["Start", "Realizacje", "O mnie", "Oferta", "Kontakt"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-sm text-gray-600 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.2em] mb-5">
                Social
              </h4>

              <ul className="space-y-3">
                {[
                  {
                    name: "Instagram",
                    href: instagram,
                    icon: FiInstagram,
                  },
                  {
                    name: "YouTube",
                    href: youtube,
                    icon: FiYoutube,
                  },
                ]
                  .filter((link) => link.href)
                  .map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
                      >
                        <link.icon size={12} /> {link.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <p className="text-xs text-gray-500">
              © {year} RP.events. Wszystkie prawa zastrzeżone.
            </p>

            <span className="hidden sm:block w-px h-3 bg-white/10" />

            <a
              href="/polityka-prywatnosci"
              className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-gray-300 transition-colors duration-300"
            >
              Polityka prywatności
            </a>
          </div>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-widest">
              Realizacja:
            </span>

            <img
              src="https://klaudiuszdev.pl/hello.svg"
              alt="Klaudiusz Dev"
              className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
            />

            <span className="text-[11px] font-bold tracking-wide">
              klaudiuszdev.pl
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
