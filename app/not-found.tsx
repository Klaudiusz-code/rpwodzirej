import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#050505] overflow-hidden px-4">
      {/* Efekt tła - Czerwona poświata za tekstem */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      {/* Dekoracyjne, wielkie tło "404" */}
      <h1 className="absolute select-none text-[12rem] font-black leading-none text-white/5 md:text-[20rem]">
        404
      </h1>

      {/* Główna treść */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Ojej, brak sygnału.
        </h2>

        <p className="mb-8 max-w-md text-lg text-white/60 md:text-xl">
          Strona, której szukasz, mogła zostać usunięta, przeniesiona lub jej
          adres został wpisany błędnie.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-black transition-all hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            Wróć na stronę główną
            {/* Strzałka animowana */}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
