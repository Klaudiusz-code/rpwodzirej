"use client";

import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="start"
      // DODANO: pt-28 (112px) - zepchnie wyśrodkowany tekst w dół, pod navbar.
      className="relative h-screen max-h-[750px] pt-28 flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.4) contrast(1.1)" }}
        >
          <source src="/filmik-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-20 pointer-events-none"></div>
      </div>

      <div className="relative z-30 text-center px-6 w-full">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-tighter text-white mb-4">
          ROBERT
          <br />
          PIERZ
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-white/30"></div>
          <p className="text-sm sm:text-base font-light tracking-[0.3em] uppercase text-gray-400">
            DJ &nbsp;·&nbsp; Wodzirej &nbsp;·&nbsp; Saksofon
          </p>
          <div className="h-px w-12 bg-white/30"></div>
        </div>

        <p className="text-gray-500 text-sm sm:text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
          Tworzę unikalny klimat eventów. Bez szablonów, z pełną uwagą na
          detale.
        </p>

        <a
          href="#realizacje"
          className="group inline-flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-500"
        >
          <span className="text-xs uppercase tracking-widest">
            Zobacz realizacje
          </span>
          <FiArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
