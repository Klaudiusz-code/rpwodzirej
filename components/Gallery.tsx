"use client";

import { useRef, useState, useEffect } from "react";
import {
  FiInstagram,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUpRight,
} from "react-icons/fi";

interface GalleryItem {
  id: number;
  img: string;
  title: string;
  loc: string;
}

const images: GalleryItem[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    title: "Wesele Magda & Jakub",
    loc: "Kraków",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
    title: "Impreza Firmowa",
    loc: "Warszawa",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    title: "Saksofon na żywo",
    loc: "Katowice",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1574879948962-44d0e4c03279?q=80&w=800&auto=format&fit=crop",
    title: "Event Premium",
    loc: "Zakopane",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    title: "Pokaz Barmański",
    loc: "Kraków",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    title: "Studniówka 2024",
    loc: "Wrocław",
  },
];

export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.offsetWidth * 0.7;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => slider.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const btnBase =
    "absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300";
  const btnVisible =
    "opacity-100 hover:opacity-100 hover:bg-[#C6A97D] hover:border-[#C6A97D] hover:text-black hover:scale-110 cursor-pointer shadow-lg";
  const btnHidden = "opacity-0 pointer-events-none scale-90";

  return (
    <section
      id="realizacje"
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-b border-white/[0.04] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-[#C6A97D]"></div>
              <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest">
                Galeria
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Zobacz klimat <span className="text-[#C6A97D]">imprez</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/djrobertpierz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-[#C6A97D] font-medium transition-colors duration-300 border-b border-white/10 group-hover:border-[#C6A97D]/50 pb-1 w-fit"
          >
            <FiInstagram size={16} />
            @djrobertpierz
          </a>
        </div>
      </div>

      <div className="relative max-w-[100vw]">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`${btnBase} left-2 sm:left-6 ${canScrollLeft ? btnVisible : btnHidden}`}
          aria-label="Poprzednie zdjęcie"
        >
          <FiChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`${btnBase} right-2 sm:right-6 ${canScrollRight ? btnVisible : btnHidden}`}
          aria-label="Następne zdjęcie"
        >
          <FiChevronRight size={18} />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6 lg:px-8 scroll-smooth no-scrollbar"
        >
          {images.map((item) => (
            <a
              key={item.id}
              href="https://www.instagram.com/djrobertpierz/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-w-[85vw] sm:min-w-[65vw] md:min-w-[45vw] lg:min-w-[380px] xl:min-w-[420px] h-[400px] sm:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden group/card cursor-pointer snap-start border border-white/[0.06] transition-all duration-500 hover:border-[#C6A97D]/30 flex-shrink-0"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover/card:scale-110 group-hover/card:brightness-75"
              />

              {/* Ciemniejsze, bardziej "kinowe" nakładka na dole */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] sm:text-xs text-[#C6A97D] font-bold uppercase tracking-widest mb-1.5 sm:mb-2 opacity-80 group-hover/card:opacity-100 transition-opacity">
                  {item.loc}
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                  {item.title}
                </h3>

                {/* Złota strzałka na hoverze */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C6A97D]/10 backdrop-blur-md border border-[#C6A97D]/30 flex items-center justify-center text-[#C6A97D] scale-0 group-hover/card:scale-100 group-hover/card:bg-[#C6A97D] group-hover/card:text-black group-hover/card:border-[#C6A97D] transition-all duration-300 delay-75">
                  <FiArrowUpRight size={15} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
