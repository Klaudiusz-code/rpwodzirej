"use client";

import { useState } from "react";
import { FiStar, FiChevronDown, FiExternalLink } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "Kasia i Tomek",
    date: "Sierpień 2026",
    text: "Robert to absolutny top. Miałem obawy przed wodzirejem, ale on wziął to na siebie i o 23:00 cały parkiet trząsł się do basu. Do tego saksofon przy pierwszym tańcu rozłożył pół sali. Goście do dzisiaj dzwonią i pytają, kto grał.",
  },
  {
    id: 2,
    name: "Ania i Marcin",
    date: "Czerwiec 2026",
    text: "Saksofon podczas pierwszego tańca to był strzał w dziesiątkę. Nie musieliśmy szukać osobnego muzyka, barmana i DJ-a. Wszystko w jednym, a poziom profesjonalizmu na najwyższym poziomie. Pełen spokój przed weselem.",
  },
  {
    id: 3,
    name: "Ola i Paweł",
    date: "Wrzesień 2026",
    text: "Najlepsza decyzja jaką podjęliśmy organizując wesele. Zero krępujących zabaw na siłę, a jednak parkiet był pełny od początku do końca. Robert świetnie czyta tłum i wie, kiedy zagrać coś spokojniejszego.",
  },
  {
    id: 4,
    name: "Magda i Krzysztof",
    date: "Maj 2026",
    text: "Show barmański z ogniem zrobił niesamowite wrażenie na gościach. Muzyka dopasowana idealnie do naszych preferencji, prowadzenie dyskretne, ale z klasą. Serdecznie polecamy każdej parze młodej!",
  },
];

export default function SocialProof() {

  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 2; 

  const visibleReviews = isExpanded ? reviews : reviews.slice(0, initialCount);
  const hiddenCount = reviews.length - initialCount;

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4">
            Co mówią o nas nowożeńcy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Opinie, które budują zaufanie
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/15"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">
                    {review.name}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {review.date}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiStar
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A97D] fill-[#C6A97D]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {hiddenCount > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full px-6 py-3 transition-all duration-300"
            >
              {isExpanded
                ? "Zwiń opinie"
                : `Pokaż jeszcze ${hiddenCount} opinie`}
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/rpeventsrobertpierz/reviews?locale=pl_PL" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-[#C6A97D] hover:text-[#d4b88e] font-semibold text-sm sm:text-base transition-colors duration-300"
          >
            Zobacz wszystkie opinie na Facebooku
            <FiExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
