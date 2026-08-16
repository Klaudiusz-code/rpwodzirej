import { FiHeadphones, FiMic, FiMusic, FiZap } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "DJ",
      desc: "Gram to, co ludzie chcą usłyszeć. Płynnie zmieniam klimaty, by parkiet nigdy nie pustoszał.",
      icon: <FiHeadphones size={20} className="sm:w-6 sm:h-6" />,
    },
    {
      num: "02",
      title: "Wodzirej",
      desc: "Prowadzenie z klasą. Bez krępujących zabaw, tylko naturalne angażowanie gości.",
      icon: <FiMic size={20} className="sm:w-6 sm:h-6" />,
    },
    {
      num: "03",
      title: "Saksofon",
      desc: "Live element robiący 'wow'. Pierwszy taniec, wejścia w sety i mocne outro.",
      icon: <FiMusic size={20} className="sm:w-6 sm:h-6" />,
    },
    {
      num: "04",
      title: "Barman",
      desc: "Show barmański w pakiecie. Ogień, efekty i koktajle bez wynajmowania ekipy.",
      icon: <FiZap size={20} className="sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <section
      id="oferta"
      className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#f4f4f5] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* NAGŁÓWEK - zredukowane marginesy na mobile, żeby od razu widać karty */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="h-px w-6 sm:w-8 bg-[#C6A97D]"></div>
            <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest">
              Jeden kontakt, pełen serwis
            </p>
            <div className="h-px w-6 sm:w-8 bg-[#C6A97D]"></div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Dlaczego szukać dalej,
            <br className="hidden sm:block" /> jak masz{" "}
            <span className="text-[#C6A97D]">4 w 1</span>?
          </h2>
        </div>

        {/* SIATKA KART - zaciasnięte gap-y na mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              // USUNIĘTO agresywne -translate-y-4 (psuło UX na dotyku). Zmniejszono padding na mobile.
              className="group relative bg-[#0a0a0a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full flex flex-col border border-white/10 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 lg:hover:-translate-y-3 hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* Złoty gradient od góry na hoverze */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#C6A97D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animowana linia na górze */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C6A97D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* NUMER W TLE - ZMNIEJSZONY z 8rem, dodany delikatny efekt w hoverze */}
              <p className="absolute bottom-3 right-4 sm:bottom-6 sm:right-6 text-6xl sm:text-8xl font-black text-white/[0.03] leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-[#C6A97D]/[0.08]">
                {service.num}
              </p>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* IKONA - mniejszy kontener na mobile, usunięte "scale-110" w hoverze (wyglądało jak glitch) */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-[#C6A97D]/10 border border-[#C6A97D]/20 flex items-center justify-center text-[#C6A97D] mb-5 sm:mb-8 group-hover:bg-[#C6A97D] group-hover:text-black group-hover:border-[#C6A97D] group-hover:shadow-[0_10px_25px_-5px_rgba(198,169,125,0.35)] transition-all duration-300">
                  {service.icon}
                </div>

                {/* TYTUŁ - responsywny font */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#C6A97D] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* OPIS - zmieniono kolor z gray-500 na gray-400, jest dużo czytelniejszy na ciemnym tle */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
