
const TERMINY_URL =
  "https://script.google.com/macros/s/AKfycbxE3Ozk3FbGTPoTTsdVihIM9gpSSlSoeTLjzpTsRNDPSbaXqarBnRFV6J9mTsiGKnza_Q/exec?z=www";

export default function AvailableDates() {
  return (
    <section
      id="wolne-terminy"
      aria-labelledby="available-dates-title"
      className="bg-[#050505] px-0 py-12 text-white sm:px-5 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[760px]">
        <div className="mx-auto w-full max-w-[560px] px-4 pb-5 text-center sm:px-0 sm:pb-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40 sm:text-xs">
            RP.Events
          </p>

          <h2
            id="available-dates-title"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
          >
            Wolne terminy
          </h2>

          <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-white/50 sm:mt-3 sm:text-sm sm:leading-6">
            Sprawdź dostępność i wybierz termin swojego wydarzenia.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[560px] overflow-hidden sm:rounded-sm">
          <iframe
            src={TERMINY_URL}
            title="Kalendarz wolnych terminów RP.Events"
            loading="lazy"
            className="block h-[1150px] min-h-[1000px] w-full border-0 bg-[#0b0b0b]"
            allow="clipboard-write"
          />
        </div>
      </div>
    </section>
  );
}
