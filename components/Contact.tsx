"use client";

import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Contact({
  data,
  settings,
}: {
  data: any;
  settings: any;
}) {
  if (!data) return null;

  const phone = settings?.numerTelefonuUstawienia;
  const email = settings?.emailUstawienia;
  const location = settings?.lokalizacjaUstawienia;

  const phoneHref = `tel:${String(phone || "").replace(/\s/g, "")}`;
  const emailHref = `mailto:${email || ""}`;

  return (
    <section
      id="kontakt"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-[#050505]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6">
            {data.nadtytul}
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] tracking-tight mb-8">
            {data.tytul}
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-16 max-w-md">
            {data.contactDescription}
          </p>

          <div className="space-y-6 border-t border-white/10 pt-8">
            <a
              href={phoneHref}
              className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiPhone size={16} className="opacity-50" />

              <span className="text-lg sm:text-xl font-light tracking-wide">
                {phone}
              </span>
            </a>

            <a
              href={emailHref}
              className="group flex items-center gap-4 text-gray-500 hover:text-white transition-colors duration-300 break-all"
            >
              <FiMail size={16} className="opacity-50 mt-0.5" />

              <span className="text-sm font-light">{email}</span>
            </a>

            <div className="flex items-center gap-4 text-gray-600">
              <FiMapPin size={16} className="opacity-50" />

              <span className="text-sm font-light">{location}</span>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-8 pt-2" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] text-gray-600 uppercase tracking-widest mb-3 font-medium">
                  Imię i nazwisko
                </label>

                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-800"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-600 uppercase tracking-widest mb-3 font-medium">
                  Data imprezy
                </label>

                <input
                  type="date"
                  required
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-gray-600 uppercase tracking-widest mb-3 font-medium">
                Telefon / Email
              </label>

              <input
                type="text"
                required
                className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-800"
                placeholder="500 000 000"
              />
            </div>

            <div>
              <label className="block text-[10px] text-gray-600 uppercase tracking-widest mb-3 font-medium">
                Krótko o imprezie
              </label>

              <textarea
                rows={4}
                className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors resize-none placeholder:text-gray-800"
                placeholder="Lokalizacja, ilość gości..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full group bg-white text-black font-semibold py-5 rounded-sm transition-all duration-300 hover:bg-gray-200 active:scale-[0.99] text-sm uppercase tracking-widest flex items-center justify-center gap-4 mt-4"
            >
              Wyślij zapytanie
              <FiArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
