"use client";

import { FiPlay, FiInstagram } from "react-icons/fi";

export default function Showreel({
  data,
  settings,
}: {
  data: any;
  settings: any;
}) {
  if (!data) return null;

  // Pierwszy element = główny Showreel
  const mainItem = data.realizacjeItemy?.[0];

  // Kolejne maksymalnie 2 zdjęcia
  const sideItems = data.realizacjeItemy?.slice(1, 3);

  const instagramLink = settings?.instagram?.linkDoProfiluInstagram;

  return (
    <section
      id="realizacje"
      className="py-32 md:py-40 px-6 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6">
              {data.nadtytulSekcji}
            </p>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] tracking-tight"
              dangerouslySetInnerHTML={{
                __html: data.tytul,
              }}
            />
          </div>

          <a
            href={instagramLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-white text-sm uppercase tracking-widest transition-colors duration-300"
          >
            <FiInstagram size={14} /> {data.instagram}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* DUŻE ZDJĘCIE / SHOWREEL */}
          {mainItem && (
            <a
              href={mainItem.linkDoZdjecia || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative row-span-2 min-h-[400px] md:min-h-0 overflow-hidden group cursor-pointer bg-black block"
            >
              <img
                src={mainItem.showreelsImage?.node?.sourceUrl}
                alt={mainItem.opis || "Showreel"}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 scale-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient zasłaniający dół zdjęcia dla czytelności tekstu */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-[5]"></div>

              {/* Przycisk Play na środku */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:scale-110 transition-transform duration-300">
                  <FiPlay size={28} className="text-white ml-1" />
                </div>
              </div>

              {/* Opis w lewym dolnym rogu */}
              {mainItem.opis && (
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
                  <p className="text-white text-base sm:text-lg font-light tracking-wide">
                    {mainItem.opis}
                  </p>
                </div>
              )}
            </a>
          )}

          {/* MNIEJSZE ZDJĘCIA PO PRAWEJ */}
          {sideItems?.map((item: any, index: number) => (
            <a
              key={index}
              href={item.linkDoZdjecia || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-h-[250px] overflow-hidden group cursor-pointer bg-black block"
            >
              <img
                src={item.showreelsImage?.node?.sourceUrl}
                alt={item.opis || "Realizacja"}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient na dole */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[5]"></div>

              {/* Opis w lewym dolnym rogu + delikatny efekt hover */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <p className="text-white text-base sm:text-lg font-light transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {item.opis}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
