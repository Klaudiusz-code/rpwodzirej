import Image from "next/image";
import { FiInstagram, FiYoutube, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="col-span-2">
            <div className="mb-5">
              <Image
                src="/logo-rp.png"
                alt="RP.events Logo"
                width={48}
                height={48}
                className="w-11 h-11 md:w-12 md:h-12 rounded-lg border border-white/10 shadow-lg shadow-black/50"
                priority={false}
              />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
              Profesjonalne usługi DJ, Wodzirej, Saksofon i Barman na terenie
              Krakowa i całej Polski.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+48507177939"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#C6A97D] transition-colors duration-300"
              >
                <FiPhone size={14} className="shrink-0" /> 507 177 939
              </a>
              <a
                href="mailto:rp.events.robert.pierz@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#C6A97D] transition-colors duration-300 break-all"
              >
                <FiMail size={14} className="shrink-0 mt-0.5" />{" "}
                rp.events.robert.pierz@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 md:mb-6">
              Nawigacja
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {[
                "Start",
                "Oferta",
                "O mnie",
                "Realizacje",
                "FAQ",
                "Kontakt",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-600 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 md:mb-6">
              Usługi
            </h4>
            <ul className="space-y-2.5 md:space-y-3">
              {["DJ", "Wodzirej", "Saksofon na żywo", "Show barmański"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#oferta"
                      className="text-sm text-gray-600 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/djrobertpierz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-gray-600 hover:text-[#C6A97D] hover:border-[#C6A97D]/30 hover:bg-[#C6A97D]/5 transition-all duration-300"
            >
              <FiInstagram size={17} />
            </a>
            <a
              href="https://youtube.com/@rpeventsrobertpierz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-gray-600 hover:text-[#C6A97D] hover:border-[#C6A97D]/30 hover:bg-[#C6A97D]/5 transition-all duration-300"
            >
              <FiYoutube size={17} />
            </a>
            <p className="hidden sm:block text-xs text-gray-700 ml-2">
              Obserwuj na social mediach
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-right">
            <p className="text-xs text-gray-700">
              © {new Date().getFullYear()} RP.events. Wszelkie prawa
              zastrzeżone.
            </p>
            <div className="hidden sm:block w-px h-4 bg-white/10"></div>
            <a
              href="https://klaudiuszdev.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-700 hover:text-gray-400 transition-all duration-300"
            >
              <span className="text-[11px] font-medium">Realizacja:</span>
              <img
                src="https://klaudiuszdev.pl/hello.svg"
                alt="Klaudiusz Dev Logo"
                className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-[11px] font-bold tracking-wide">
                klaudiuszdev.pl
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
