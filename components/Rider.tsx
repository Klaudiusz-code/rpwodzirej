const specs = [
  { id: "01", value: "DJ & Selekcja" },
  { id: "02", value: "Prowadzenie (Host)" },
  { id: "03", value: "Saksofon na żywo" },
  { id: "04", value: "Własne nagłośnienie" },
  { id: "05", value: "Pełne ubezpieczenie OC" },
  { id: "06", value: "Setup: 30 minut" },
];

export default function Rider() {
  return (
    <section className="py-16 md:py-20 px-6 bg-black border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-x-10 gap-y-4">
          {specs.map((spec) => (
            <div key={spec.id} className="flex items-center gap-4">
              <span className="text-[10px] text-gray-700 font-mono w-4">
                {spec.id}
              </span>
              <div className="w-4 h-px bg-white/10" />
              <span className="text-xs text-gray-500 tracking-widest uppercase font-poppins">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
