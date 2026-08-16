"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Czy bawicie w takie sztampowe zabawy weselne?",
    a: "Absolutnie nie. Moje prowadzenie opiera się na naturalnym angażowaniu gości, dobrej muzyce i czytaniu tłumu. Zero rzucania krawatami czy puszczania oczu, chyba że Para Młoda wyraźnie tego zażyczy.",
  },
  {
    q: "Jak to możliwe, że jesteś DJ-em, wodzirejem i barmanem naraz?",
    a: "Prowadzę eventy z profesjonalną ekipą, którą ściśle koordynuję. Dla Ciebie to jeden kontakt, jedna umowa i jeden człowiek (ja) odpowiadający za cały porządek na parkiecie i przy barze.",
  },
  {
    q: "Czy saksofon gram na żywo przez całe wesele?",
    a: "Nie. Saksofon pojawia się w kluczowych momentach, żeby robił efekt 'wow'. Pierwszy taniec, wejścia w vibe'owe sety, chillout po północy. Cały czas na saksofonie zabiłby ten efekt.",
  },
  {
    q: "Do jakiego obszaru dojeżdżasz?",
    a: "Baza to Kraków, ale obsługuję całą Polskę. Przy dalszych dystansach dojazdy są ustalane indywidualnie w zależności od pakietu.",
  },
  {
    q: "Ile kosztuje wasz pełny pakiet 4w1?",
    a: "Wycena jest zawsze indywidualna, bo zależy od lokalizacji, terminu i konkretnych potrzeb. Zostaw zapytanie, a przygotuję dla Ciebie transparentną ofertę bez ukrytych kosztów.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative"
    >
      {/* Delikatna linia oddzielająca od ciemnej sekcji wyżej */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-3xl mx-auto">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-[#C6A97D]"></div>
            <p className="text-[#C6A97D] font-semibold text-[10px] sm:text-xs uppercase tracking-widest">
              Masz wątpliwości?
            </p>
            <div className="h-px w-8 bg-[#C6A97D]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Najczęstsze pytania
          </h2>
        </div>

        {/* LISTA FAQ */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`border rounded-xl sm:rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "bg-[#C6A97D]/[0.03] border-[#C6A97D]/30 shadow-[0_10px_40px_-15px_rgba(198,169,125,0.15)]"
                    : "border-gray-200 hover:bg-gray-50/80 hover:border-gray-300"
                }`}
              >
                {/* PRZYCISK PYTANIA */}
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* ZŁOTA KRESKA - pojawia się po lewej gdy otwarte */}
                    <div
                      className={`w-[3px] h-5 rounded-full bg-[#C6A97D] shrink-0 transition-all duration-300 origin-center ${
                        isOpen
                          ? "opacity-100 scale-y-100"
                          : "opacity-0 scale-y-0"
                      }`}
                    ></div>

                    <span
                      className={`font-semibold text-[15px] sm:text-lg transition-colors duration-300 ${
                        isOpen
                          ? "text-gray-900"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                  </div>

                  {/* STRZAŁKA */}
                  <FiChevronDown
                    size={20}
                    className={`shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-[#C6A97D]"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                </button>

                {/* ANIMOWANA TREŚĆ */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-10 sm:pl-11">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* STOPKA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Nie znalazłeś odpowiedzi na swoje pytanie?{" "}
            <a
              href="#kontakt"
              className="text-[#C6A97D] font-semibold hover:underline"
            >
              Napisz do mnie bezpośrednio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
