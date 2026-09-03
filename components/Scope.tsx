export default function Scope({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="oferta" className="py-24 md:py-36 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 md:mb-28 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 font-poppins">
            {data.nadtytul}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black leading-[1.15] tracking-tight"
            dangerouslySetInnerHTML={{ __html: data.tytul }}
          />
          <p className="text-gray-500 text-base md:text-lg leading-[1.8] max-w-2xl mx-auto font-poppins mt-8">
            {data.opisofferta}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0">
          {data.offerUslugi?.map((service: any, i: number) => (
            <div
              key={i}
              className={`group relative md:px-8 lg:px-10 ${
                i !== data.offerUslugi.length - 1
                  ? "md:border-r md:border-black/10"
                  : ""
              }`}
            >
              <div className="md:h-full group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-3xl font-serif font-bold text-black tracking-tight mb-5 pb-4 border-b border-black/10 inline-block">
                  {service.nazwaUslugi}
                </h3>

                <p className="text-black text-sm font-semibold leading-relaxed mb-4 mt-5 font-poppins">
                  {service.wyroznienie}
                </p>

                <p className="text-gray-500 text-sm leading-[1.85] font-poppins">
                  {service.opis}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dolna notka - jeśli chcesz ją też edytować z WP, musisz dodać pola do GraphQL. Na razie zostawiam statyczną */}
        <div className="mt-20 md:mt-28 pt-12 border-t-2 border-black">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-black tracking-tight mb-6">
              Każde wesele wygląda inaczej
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-[1.85] font-poppins mb-10">
              Scenariusz, muzykę i dodatkowe elementy ustalamy podczas
              przygotowań...
            </p>
            <span className="text-black text-xs tracking-[0.2em] uppercase font-poppins font-medium">
              DJ + Sax + Prowadzenie
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
