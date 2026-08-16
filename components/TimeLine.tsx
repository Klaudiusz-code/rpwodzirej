import { FiMusic, FiMic, FiZap, FiClock, FiCheck } from "react-icons/fi";

const items = [
  {
    icon: <FiMusic size={18} />,
    category: "Muzyka",
    bad: "Odtwarzanie gotowej playlisty z top list",
    good: "Granie na żywo i czytanie tłumu w czasie rzeczywistym",
  },
  {
    icon: <FiMic size={18} />,
    category: "Prowadzenie",
    bad: "Sztampowe scenariusze i zabawy na siłę",
    good: "Elegancja, luz i naturalne angażowanie gości",
  },
  {
    icon: <FiZap size={18} />,
    category: "Atrakcje",
    bad: "Konieczność samodzielnego szukania podwykonawców",
    good: "Kompleksowy pakiet 4w1 z saksofonem i barmankiem",
  },
  {
    icon: <FiClock size={18} />,
    category: "Komfort",
    bad: "Trzy różne umowy i koordynacja logistyki",
    good: "Jeden kontakt, jedna umowa i pełen spokój",
  },
];

export default function TheDifference() {
  return (
    <section className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* NAGŁÓWEK (Ciemny tekst na białym tle) */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
            Dlaczego to nie jest zwykła usługa DJ-a
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Odrzuć standard,
            <br className="hidden sm:block" /> wybierz{" "}
            <span className="text-[#C6A97D]">RP.events</span>
          </h2>
        </div>

        {/* === WERSJA DESKTOP (Białe tło, Czarna lewa kolumna) === */}
        <div className="hidden lg:grid lg:grid-cols-2 relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
          
          {/* Kółko VS na granicy czerni i bieli */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-[#0a0a0a] border-2 border-[#C6A97D] flex items-center justify-center shadow-xl">
            <span className="text-[#C6A97D] font-black text-xs xl:text-sm tracking-widest">
              VS
            </span>
          </div>

          {/* Pionowa linia dzieląca */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-10"></div>

          {items.map((item, i) => (
            <div key={i} className="contents">
              
              {/* LEWA STRONA - CZARNA (Zwykła Oferta) */}
              <div className={`flex items-center gap-6 justify-end text-right p-8 xl:p-10 bg-[#0a0a0a] border-r border-gray-100
                ${i === 0 ? 'rounded-tl-3xl' : ''} 
                ${i === items.length - 1 ? 'rounded-bl-3xl' : ''}
              `}>
                <div className="flex-1">
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold mb-2">
                    {item.category}
                  </p>
                  <p className="text-white/50 line-through decoration-white/20 decoration-2 leading-relaxed text-sm xl:text-[15px]">
                    {item.bad}
                  </p>
                </div>
                <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 shrink-0">
                  {item.icon}
                </div>
              </div>

              {/* PRAWA STRONA - BIAŁA (Z Robertem) */}
              <div className={`group flex items-center gap-6 p-8 xl:p-10 bg-white
                ${i === 0 ? 'rounded-tr-3xl' : ''} 
                ${i === items.length - 1 ? 'rounded-br-3xl' : ''}
              `}>
                <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-2xl bg-[#C6A97D]/10 border border-[#C6A97D]/30 flex items-center justify-center text-[#C6A97D] shrink-0 transition-all duration-300 group-hover:bg-[#C6A97D]/20">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-2">
                    {item.category}
                  </p>
                  <p className="text-gray-900 font-semibold leading-relaxed text-sm xl:text-[15px] flex items-start gap-2.5 xl:gap-3 transition-colors duration-300 group-hover:text-[#C6A97D]">
                    <FiCheck className="text-[#C6A97D] shrink-0 mt-1" size={15} />
                    <span>{item.good}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* === WERSJA MOBILNA I TABLET (Czarna karta, potem Biała karta) === */}
        <div className="lg:hidden space-y-4 sm:space-y-6 md:space-y-8">
          
          {/* Karta 1: Zwykła Oferta (Czarna) */}
          <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-6 sm:p-8 shadow-lg">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold mb-6 sm:mb-8">
              Zwykła Oferta
            </p>
            <div className="space-y-5 sm:space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                    <p className="text-white/50 line-through decoration-white/20 text-sm sm:text-[15px] leading-relaxed">
                      {item.bad}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Karta 2: Z Robertem (Biała, wyróżniona) */}
          <div className="bg-white border-2 border-[#C6A97D]/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 relative">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C6A97D] to-transparent rounded-t-2xl"></div>
            
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-px w-4 bg-[#C6A97D]/50"></div>
              <p className="text-[10px] text-[#C6A97D] uppercase tracking-[0.25em] font-bold">
                Z Robertem
              </p>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#C6A97D]/10 border border-[#C6A97D]/20 flex items-center justify-center text-[#C6A97D] shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                    <p className="text-gray-900 font-semibold text-sm sm:text-[15px] leading-relaxed flex items-start gap-2.5">
                      <FiCheck className="text-[#C6A97D] shrink-0 mt-0.5" size={14} />
                      <span>{item.good}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PODSUMOWANIE POD SEKCJĄ */}
        <p className="text-center text-gray-500 text-sm sm:text-base mt-12 md:mt-16 max-w-lg mx-auto leading-relaxed">
          Nie musisz ryzykować atmosfery swojego wesela. Zrób to dobrze za pierwszym razem.
        </p>
      </div>
    </section>
  );
}