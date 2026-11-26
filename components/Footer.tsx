"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiYoutube } from "react-icons/fi";

export default function Footer({ settings }: { settings: any }) {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const instagram = settings?.instagram?.linkDoProfiluInstagram;
  const youtube = settings?.youtbue?.linkDoProfiluYoutube;

  const footerDesc =
    settings?.globalDescFooter ||
    "Profesjonalne usługi DJ, Wodzireja i Saksofonisty na Twoje wydarzenie.";

  const navigationLinks = [
    { name: "Start", href: "/#start" },
    { name: "Realizacje", href: "/#realizacje" },
    { name: "O mnie", href: "/#o-mnie" },
    { name: "Oferta", href: "/#oferta" },
    { name: "Kontakt", href: "/#kontakt" },
    { name: "Wolne terminy", href: "/terminy" },
  ];

  const legalLinks = [
    { name: "Regulamin", href: "/regulamin.html" },
    { name: "Polityka prywatności", href: "/polityka-prywatnosci.html" },
    { name: "Polityka cookies", href: "/polityka-cookies.html" },
    { name: "Płatności", href: "/platnosci.html" },
  ];

  const socialLinks = [
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
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 md:py-20">
        <div className="mb-14 flex flex-col gap-12 md:mb-16 md:flex-row md:items-start md:justify-between">
          <div className="text-left md:max-w-xs">
            <div className="mb-6 flex items-start justify-start">
              <Image
                src="/rp-wektor.png"
                alt="RP.events"
                width={500}
                height={160}
                priority
                className="h-auto w-[170px] object-contain object-left sm:w-[180px] md:w-[200px]"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              {footerDesc}
            </p>

            <div className="mt-6 space-y-2 text-xs leading-relaxed text-gray-500">
              <p className="font-medium text-gray-400">
                RP Events Robert Pierz
              </p>

              <p>
                ul.{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Wyciąska+87,+31-998+Kraków"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Wyciąska 87, 31-998 Kraków
                </a>
              </p>

              <p>NIP: 7382026998</p>

              <p>
                <a
                  href="mailto:rp.events.robert.pierz@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  rp.events.robert.pierz@gmail.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+48507177939"
                  className="transition-colors hover:text-white"
                >
                  +48 507 177 939
                </a>
              </p>

              <p className="pt-2 text-gray-400">
                Płatności online obsługuje ING Pay.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 sm:gap-x-16">
            <div>
              <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Nawigacja
              </h4>

              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Dokumenty
              </h4>

              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Social
              </h4>

              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                    >
                      <link.icon size={12} />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-gray-400 sm:text-left">
            © {year} RP.events. Wszystkie prawa zastrzeżone.
          </p>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-gray-300"
          >
            <span className="text-[10px] uppercase tracking-widest">
              Realizacja:
            </span>

            <img
              src="https://klaudiuszdev.pl/hello.svg"
              alt="Klaudiusz Dev"
              className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100"
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
