const services = [
  {
    title: "DJ",
    highlight: "Muzyka dopasowana do ludzi, nie do gotowej playlisty.",
    desc: "Nie gram wesel według jednego schematu. Przygotowuję się wcześniej razem z Parą Młodą, ale podczas imprezy najważniejsze jest to, co dzieje się na parkiecie. Łączę polskie i zagraniczne klasyki z nowszą muzyką, zmieniam klimat wtedy, kiedy tego wymaga impreza, i unikam grania czegoś tylko dlatego, że „na weselu tak wypada”.",
  },
  {
    title: "Prowadzenie",
    highlight:
      "Konkretnie, swobodnie i bez niepotrzebnego przejmowania mikrofonu.",
    desc: "Prowadzę najważniejsze momenty wesela, dbam o tempo wydarzenia i kontaktuję się z obsługą sali, fotografem oraz filmowcem. Animacje i zabawy dobieramy wcześniej. Nie chodzi o wypełnienie każdej przerwy atrakcją, tylko o stworzenie dobrego flow całego wieczoru.",
  },
  {
    title: "Saksofon live",
    highlight: "Saksofon jako część imprezy, a nie osobny „występ”.",
    desc: "Gram zarówno podczas spokojniejszych momentów, jak i bezpośrednio na parkiecie do setów DJ-skich. Saksofon może pojawić się przy wejściu Pary Młodej, pierwszym tańcu, kolacji albo w środku najbardziej energetycznego seta.",
  },
];

export default function Scope() {
  return (
    <section id="oferta" className="py-24 md:py-36 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* GŁÓWNY NAGŁÓWEK I WSTĘP */}
        <div className="mb-20 md:mb-28 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 font-poppins">
            Oferta
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black leading-[1.15] tracking-tight">
            Jedna osoba. <br className="hidden sm:block" />
            Spójna oprawa całego wydarzenia.
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-[1.8] max-w-2xl mx-auto font-poppins mt-8">
            Muzyka, prowadzenie i saksofon na żywo mogą tworzyć jedną całość.
            Dzięki temu nie trzeba osobno szukać DJ-a, konferansjera czy muzyka,
            a cały przebieg imprezy jest spójny od pierwszego wejścia gości aż
            do ostatniego utworu.
          </p>
        </div>

        {/* 3 FILARY OFERTY - Układ magazynowy z pionowymi liniami */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative md:px-8 lg:px-10 ${
                i !== services.length - 1
                  ? "md:border-r md:border-black/10"
                  : ""
              }`}
            >
              <div className="md:h-full group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-3xl font-serif font-bold text-black tracking-tight mb-5 pb-4 border-b border-black/10 inline-block">
                  {service.title}
                </h3>

                {/* Wyróżnione zdanie - czarna, pogrubiona czcionka zamiast koloru */}
                <p className="text-black text-sm font-semibold leading-relaxed mb-4 mt-5 font-poppins">
                  {service.highlight}
                </p>

                <p className="text-gray-500 text-sm leading-[1.85] font-poppins">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DOLNA NOTKA - Przyziemiona gruba linią */}
        <div className="mt-20 md:mt-28 pt-12 border-t-2 border-black">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-black tracking-tight mb-6">
              Każde wesele wygląda inaczej
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-[1.85] font-poppins mb-10">
              Scenariusz, muzykę i dodatkowe elementy ustalamy podczas
              przygotowań. W zależności od charakteru imprezy możemy wykorzystać
              m.in. dekorację światłem, fontanny iskier, CO₂, prowadzone
              animacje czy dodatkowe elementy muzyczne.
            </p>

            {/* Minimalistyczny tag bez tła i obramowania */}
            <span className="text-black text-xs tracking-[0.2em] uppercase font-poppins font-medium">
              DJ + Sax + Prowadzenie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
