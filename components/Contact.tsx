'use client'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

// 1. TypeScript: Interfejs dla danych kontaktowych
interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}

// 2. Dane wyciągnięte poza JSX - czystość kodu
const contactInfo: ContactInfoItem[] = [
  {
    icon: <FiPhone size={18} />,
    label: "Zadzwoń",
    value: "507 177 939",
    href: "tel:+48507177939",
  },
  {
    icon: <FiMail size={18} />,
    label: "Napisz maila",
    value: "rp.events.robert.pierz@gmail.com",
    href: "mailto:rp.events.robert.pierz@gmail.com",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Baza",
    value: "Kraków (dojazd cała PL)",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* === ZŁOTA LINIA ODDZIELAJĄCA OD FAQ === */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#C6A97D] to-transparent"></div>
      {/* Poświata pod linią (glow) - daje efekt "premium cut" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-[#C6A97D] shadow-[0_0_15px_3px_rgba(198,169,125,0.4)]"></div>

      {/* Rozmyte tło */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] bg-[#C6A97D] rounded-full filter blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
        {/* === LEWA KOLUMNA: INFORMACJE === */}
        <div className="lg:col-span-2 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-[#C6A97D]"></div>
            <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest">
              Kontakt
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 sm:mb-6">
            Zarezerwuj
            <br /> swój termin
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-10 sm:mb-14 leading-relaxed">
            Odpowiadam błyskawicznie. Napisz, w jaki dzień jest impreza i o co
            dokładnie chodzi.
          </p>

          <div className="space-y-5 sm:space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 sm:gap-5 p-2 -m-2 rounded-xl transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] group-hover:border-[#C6A97D]/30 group-hover:bg-[#C6A97D]/5 flex items-center justify-center text-[#C6A97D] transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mb-0.5 sm:mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-gray-300 group-hover:text-white transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 sm:gap-5 p-2 -m-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#C6A97D] shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mb-0.5 sm:mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-gray-300 truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* === PRAWA KOLUMNA: FORMULARZ === */}
        <div className="lg:col-span-3">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/30 relative overflow-hidden">
            {/* Delikatna złota linia na samej górze formularza */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A97D]/20 to-transparent"></div>

            <form
              className="space-y-5 sm:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 font-medium">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-[#C6A97D]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C6A97D]/20 transition-all placeholder:text-gray-700"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 font-medium">
                    Data imprezy
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-[#C6A97D]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C6A97D]/20 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 font-medium">
                  Telefon / Email
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-[#C6A97D]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C6A97D]/20 transition-all placeholder:text-gray-700"
                  placeholder="500 000 000 / jan@email.com"
                />
              </div>

              <div className="relative">
                <label className="block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 font-medium">
                  Czego szukasz?
                </label>
                <select
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-[#C6A97D]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C6A97D]/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#111]">
                    Wybierz pakiet...
                  </option>
                  <option value="dj" className="bg-[#111]">
                    Tylko DJ
                  </option>
                  <option value="djsax" className="bg-[#111]">
                    DJ + Saksofon
                  </option>
                  <option value="full" className="bg-[#111]">
                    Pełny pakiet (DJ + Wodzirej + Sax + Barman)
                  </option>
                </select>
                <div className="absolute right-4 sm:right-5 top-[38px] sm:top-[42px] text-gray-600 pointer-events-none">
                  <FiChevronDown size={16} />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 font-medium">
                  Krótko o imprezie
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 sm:px-5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-[#C6A97D]/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-[#C6A97D]/20 transition-all resize-none placeholder:text-gray-700"
                  placeholder="Lokalizacja, ilość gości, jakieś konkretne wymagania..."
                ></textarea>
              </div>

              {/* ZMIENIONY PRZYCISK: Zamiast ostrego kwadratu - elegancka, złota pigułka */}
              <button
                type="submit"
                className="w-full group bg-[#C6A97D] hover:bg-[#d4b88e] text-[#050505] font-bold py-4 sm:py-5 rounded-full transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(198,169,125,0.4)] active:scale-[0.98] text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 mt-4 sm:mt-6"
              >
                WYŚLIJ ZAPYTANIE
                <div className="p-1.5 bg-black/10 rounded-full group-hover:bg-black/20 transition-colors">
                  <FiArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </button>

              {/* DODANY TEKST: Buduje zaufanie i zarządza oczekiwaniami */}
              <p className="text-center text-gray-600 text-xs sm:text-sm mt-4 -mb-2">
                Zazwyczaj odpowiadam w ciągu 2 godzin
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
