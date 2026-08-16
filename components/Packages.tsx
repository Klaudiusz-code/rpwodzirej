import { FiMusic, FiMic, FiZap, FiCheck, FiArrowRight } from "react-icons/fi";

const packages = [
  {
    icon: <FiMusic size={22} />,
    name: "Muzyka & Klimat",
    description:
      "Dla par ceniących doskonałe brzmienie i elegancką oprawę bez mocnych animacji.",
    features: [
      "DJ na żywo (czytanie parkietu)",
      "Konsultacja playlisty przed ślubem",
      "Nagłośnienie i korekcja dźwięku",
      "Oprawa muzyczna pierwszego tańca",
    ],
    style: "white",
    ctaText: "Zapytaj o wycenę",
  },
  {
    icon: <FiMic size={22} />,
    name: "Wodzirej & Euforia",
    description:
      "Złoty środek. Pełne poprowadzenie, energia na parkiecie i dbałość o detale.",
    features: [
      "Wszystko z opcji 'Muzyka & Klimat'",
      "Profesjonalne prowadzenie imprezy",
      "Dostosowane zabawy i integracja gości",
      "Oświetlenie parkietu (Effekty)",
      "Oprawa muzyczna ceremonii (USC/Kościół)",
    ],
    style: "gold",
    ctaText: "Wybieram ten wariant",
  },
  {
    icon: <FiZap size={22} />,
    name: "Show Premium 4w1",
    description:
      "Spektakl łączący DJ-a, wodzieja, saksofonistę i barmana. Wydarzenie na miarę gal.",
    features: [
      "Wszystko z opcji 'Wodzirej & Euforia'",
      "Saksofonista na żywo (Welcome & Parkiet)",
      "Mobilny barman z pełnym alkoholem",
      "Efekty specjalne (Cold Spark / CO2)",
      "Priorytetowa rezerwacja wybranych terminów",
    ],
    style: "dark",
    ctaText: "Porozmawiajmy o szczegółach",
  },
];

export default function Packages() {
  return (
    <section
      id="pakiety"
      className="py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* NAGŁÓWEK - Zwięzły na mobile, duży na desktopie */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24 max-w-3xl mx-auto">
          <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
            Wszystko uzależnione od Waszej wizji
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-5">
            Jakiej atmosfery{" "}
            <span className="text-[#C6A97D]">oczekujecie?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            Nie ma sztywnych cenników. Wybierz formułę, która pasuje do Was, a
            ja przygotuję indywidualną ofertę.
          </p>
        </div>

        {/* SIATKA - 1 kolumna na mobile/tablet, 3 kolumny dopiero na laptopach (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 items-center relative">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-8 xl:p-10 flex flex-col transition-all duration-500 ease-out group
                ${pkg.style === "white" ? "bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100/50" : ""}
                ${pkg.style === "gold" ? "bg-white border-2 border-[#C6A97D]/40 lg:z-10 lg:scale-[1.05] lg:-my-6 xl:lg:-my-8 shadow-lg shadow-[#C6A97D]/10 lg:shadow-[0_30px_60px_-15px_rgba(198,169,125,0.4)]" : ""}
                ${pkg.style === "dark" ? "bg-[#0a0a0a] border border-white/10 hover:shadow-2xl hover:shadow-black/20" : ""}
              `}
            >
              {/* Badge tylko dla złotego */}
              {pkg.style === "gold" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C6A97D] text-[#020202] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-4 py-1 sm:px-5 sm:py-1.5 rounded-full shadow-lg z-20 whitespace-nowrap">
                  Najpopularniejszy
                </div>
              )}

              {/* Ikona - Mniejsza na mobile */}
              <div
                className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300
                ${pkg.style === "white" ? "bg-gray-100 text-gray-500 group-hover:bg-gray-200" : ""}
                ${pkg.style === "gold" ? "bg-[#C6A97D]/10 text-[#C6A97D] group-hover:bg-[#C6A97D]/20" : ""}
                ${pkg.style === "dark" ? "bg-white/5 text-[#C6A97D] group-hover:bg-white/10" : ""}
              `}
              >
                {pkg.icon}
              </div>

              {/* Typografia - Ściślejsza na mobile */}
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${pkg.style === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-[13px] sm:text-sm leading-relaxed mb-5 sm:mb-8 ${pkg.style === "dark" ? "text-gray-400" : "text-gray-500"}`}
              >
                {pkg.description}
              </p>

              {/* Lista - Mniejsze odstępy na mobile */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <FiCheck
                      className={`shrink-0 mt-0.5 text-[14px] sm:text-[16px] ${pkg.style === "dark" ? "text-[#C6A97D]" : "text-gray-300"}`}
                    />
                    <span
                      className={`text-[13px] sm:text-sm leading-relaxed ${pkg.style === "dark" ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Przycisk - Kompaktowy na mobile */}
              <a
                href="#kontakt"
                className={`flex items-center justify-center gap-2 w-full text-[13px] sm:text-sm font-semibold py-3 sm:py-4 px-6 rounded-full transition-all duration-300
                  ${pkg.style === "white" ? "border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900" : ""}
                  ${pkg.style === "gold" ? "bg-[#C6A97D] text-[#020202] hover:bg-[#d4b88e]" : ""}
                  ${pkg.style === "dark" ? "bg-white text-[#020202] hover:bg-gray-100" : ""}
                `}
              >
                {pkg.ctaText}
                <FiArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {/* STOPKA */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <p className="text-gray-400 text-[13px] sm:text-sm">
            Potrzebujecie czegoś nietypowego?
            <a
              href="#kontakt"
              className="text-[#C6A97D] font-semibold hover:underline ml-1"
            >
              Stwórzmy dedykowany pakiet.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
