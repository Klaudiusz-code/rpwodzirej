const steps = [
  { title: "Wybierz pakiet", meta: "Plik PDF 2026/2027" },
  { title: "Uzupełnij formularz", meta: "Odpowiedź do 24 godzin" },
  { title: "Zarezerwuj termin", meta: "Podpisanie online" },
  { title: "Przeżyj magiczną noc", meta: "Pamiątka na całe życie" },
];

export default function Process() {
  return (
    <section className="py-24 md:py-28 px-6 bg-[#050505] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-poppins">
            Jak to działa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group text-center py-8 md:py-0 md:px-6 hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
            >
              <h3 className="text-base md:text-lg font-serif font-bold text-white tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-[0.15em] font-poppins">
                {step.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
