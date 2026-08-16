"use client";

import {
  FiArrowRight,
  FiPlay,
  FiAward,
  FiLayers,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative h-screen min-h-[700px] sm:min-h-[800px] flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.85)" }}
        >
          <source src="/filmik-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_85%)] z-20 pointer-events-none"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[250px] sm:w-[600px] sm:h-[400px] lg:w-[700px] lg:h-[500px] bg-[#C6A97D] rounded-full filter blur-[120px] sm:blur-[180px] opacity-[0.15] z-20 pointer-events-none"></div>

  
      <div className="relative z-30 max-w-4xl sm:max-w-5xl mx-auto px-5 sm:px-6 text-center w-full pt-8 sm:pt-0 pb-8 sm:pb-36 lg:pb-44">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight sm:leading-[1.1] tracking-tight text-white mb-3 sm:mb-4">
          Wesela z klasą, pełnym parkietem i luzem.
        </h1>

        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extralight leading-snug sm:leading-[1.15] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C6A97D] via-[#e2c992] to-[#a38555] mb-6 sm:mb-8">
          Muzyka na żywo, saksofon i show barmański.
        </h2>

        <p className="text-base sm:text-lg text-gray-300/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
          Jeden kontakt, cztery usługi na najwyższym poziomie. Prowadzę imprezy
          tak, żeby nikt nie chciał wracać do domu.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#oferta"
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#C6A97D] hover:bg-[#d4b88e] text-[#020202] font-bold py-3.5 px-7 sm:py-4 sm:px-10 rounded-full transition-all duration-300 w-fit mx-auto sm:mx-0 overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(198,169,125,0.4)] text-sm sm:text-base"
          >
            Sprawdź pakiet 4w1{" "}
            <FiArrowRight className="text-xs sm:text-sm transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://youtube.com/@rpeventsrobertpierz"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 border border-white/20 text-white hover:border-[#C6A97D] hover:text-[#C6A97D] font-medium py-3.5 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 w-fit mx-auto sm:mx-0 backdrop-blur-sm bg-white/5 hover:bg-white/10 text-sm sm:text-base"
          >
            <FiPlay size={14} className="sm:w-4 sm:h-4" /> Zobacz wideo
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-xl border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
          <div className="py-5 sm:py-7 px-4 sm:px-6 flex flex-col items-center justify-center border-r border-white/[0.06]">
            <FiAward className="text-[#C6A97D] mb-1.5 sm:mb-2 text-base sm:text-xl" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-0.5 sm:mb-1">
              100%
            </p>
            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
              Poleca
            </p>
          </div>
          <div className="py-5 sm:py-7 px-4 sm:px-6 flex flex-col items-center justify-center md:border-r border-white/[0.06]">
            <FiLayers className="text-[#C6A97D] mb-1.5 sm:mb-2 text-base sm:text-xl" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#C6A97D] mb-0.5 sm:mb-1">
              4w1
            </p>
            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
              Pakiet
            </p>
          </div>
          <div className="py-5 sm:py-7 px-4 sm:px-6 flex flex-col items-center justify-center md:border-r border-white/[0.06]">
            <FiCalendar className="text-[#C6A97D] mb-1.5 sm:mb-2 text-base sm:text-xl" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-0.5 sm:mb-1">
              150+
            </p>
            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
              Imprez
            </p>
          </div>
          <div className="py-5 sm:py-7 px-4 sm:px-6 flex flex-col items-center justify-center">
            <FiClock className="text-[#C6A97D] mb-1.5 sm:mb-2 text-base sm:text-xl" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-0.5 sm:mb-1">
              24h
            </p>
            <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
              Odpowiedzi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
