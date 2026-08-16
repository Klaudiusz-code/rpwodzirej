import Image from "next/image";
import { FiCheck, FiAward } from "react-icons/fi";

export default function AboutMe() {
  return (
    <section
      id="o-mnie"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden"
    >
      {/* Złote światło w tle - lekko pomniejszone na mobile, żeby nie robić "jasnej plamy" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#C6A97D] rounded-full filter blur-[150px] sm:blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
        {/* === ZDJĘCIE === */}
        {/* Dodano mb-10, żeby na mobile pływający element "100%" miał miejsce i nie ucinał się pod krawędzią ekranu */}
        <div className="relative order-2 lg:order-1 mb-10 sm:mb-0">
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full border border-white/[0.04] rounded-2xl sm:rounded-3xl hidden lg:block"></div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 h-[350px] sm:h-[500px] lg:h-[600px] shadow-2xl shadow-black/50 group">
            <Image
              src="/avatar.jpg"
              alt="Robert - DJ Wodzirej"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Pływający box "100%" - pomniejszony na mniejszych ekranach */}
          <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-[#0a0a0a] border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/50 hidden sm:flex flex-col items-center justify-center text-center">
            <FiAward className="text-[#C6A97D] text-2xl sm:text-3xl mb-1" />
            <p className="text-2xl sm:text-3xl font-black leading-none text-white">
              100%
            </p>
            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-1 text-gray-500">
              Zadowolonych
            </p>
          </div>
        </div>

        {/* === TREŚĆ === */}
        <div className="order-1 lg:order-2">
          <p className="text-[#C6A97D] font-semibold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-widest">
            Kim jestem?
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 leading-tight text-white">
            Cześć, jestem Robert.
            <br />
            <span className="text-gray-500 font-light">
              I nienawidzę nudy na imprezach.
            </span>
          </h2>

          {/* Tekst zmniejszony na mobile (text-base) dla idealnej czytelności na węższym ekranie */}
          <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            Zaczynałem od grania w małych klubach, dziś prowadzę największe
            wesela i eventy w Małopolsce. Moją misją jest zaoferowanie usług,
            które sprawią, że Para Młoda nie będzie musiała się o nic martwić.
          </p>

          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
            Dlatego dołożyłem do DJ-owania i prowadzenia saksofon na żywo oraz
            show barmańskie. Wchodzę na imprezę, robię zamieszanie w najlepszym
            możliwym sensie i schodzę, gdy goście są w pełni usatysfakcjonowani.
          </p>

          {/* Lista check - ściszone odstępy na mobile (space-y-3) i mniejsze kółka z ptaszkami */}
          <div className="space-y-3 sm:space-y-4">
            {[
              "Ponad 150 zagranych imprez rocznie",
              "Sprzęt koncertowy najwyższej klasy",
              "Elastyczność i brak sztucznych szablonów",
              "Dojazd w całą Polskę",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C6A97D]/10 border border-[#C6A97D]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C6A97D]/20 transition-colors">
                  <FiCheck
                    size={13}
                    className="text-[#C6A97D] sm:w-[14px] sm:h-[14px]"
                  />
                </div>
                <span className="text-gray-300 text-base sm:text-lg group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
