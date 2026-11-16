
import KalendarzTerminow, {
  type DaneTerminow,
} from "@/app/terminy/KalendarzTerminow";

const TERMINY_JSON_URL =
  "https://script.google.com/macros/s/AKfycbxE3Ozk3FbGTPoTTsdVihIM9gpSSlSoeTLjzpTsRNDPSbaXqarBnRFV6J9mTsiGKnza_Q/exec?format=json";

const FORM_URL_ZAPASOWY =
  "https://forms.gle/LzwCb3HYEmgc8jpa6";

async function pobierzTerminy(): Promise<DaneTerminow | null> {
  try {
    const res = await fetch(TERMINY_JSON_URL, {
      next: { revalidate: 300 },
      redirect: "follow",
    });

    if (!res.ok) return null;

    const dane: unknown = await res.json();

    if (!dane || typeof dane !== "object") return null;

    const kalendarz = dane as Partial<DaneTerminow>;

    if (
      kalendarz.blad ||
      typeof kalendarz.od !== "string" ||
      typeof kalendarz.do !== "string" ||
      !Array.isArray(kalendarz.zajete) ||
      !kalendarz.zajete.every((data) => typeof data === "string") ||
      (kalendarz.wstepne !== undefined &&
        (!Array.isArray(kalendarz.wstepne) ||
          !kalendarz.wstepne.every((data) => typeof data === "string")))
    ) {
      return null;
    }

    return {
      blad: false,
      od: kalendarz.od,
      do: kalendarz.do,
      zajete: kalendarz.zajete,
      wstepne: kalendarz.wstepne ?? [],
      formUrl:
        typeof kalendarz.formUrl === "string"
          ? kalendarz.formUrl
          : undefined,
    };
  } catch (error) {
    console.error("Nie udało się pobrać terminów:", error);
    return null;
  }
}

export default async function AvailableDates() {
  const dane = await pobierzTerminy();

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

        <KalendarzTerminow
          dane={dane}
          formUrlZapasowy={FORM_URL_ZAPASOWY}
        />
      </div>
    </section>
  );
}
