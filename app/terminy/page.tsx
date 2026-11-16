
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import KalendarzTerminow, {
  type DaneTerminow,
} from "./KalendarzTerminow";

const WORDPRESS_API_URL = "https://rpevents.pl/graphql";

const TERMINY_JSON_URL =
  "https://script.google.com/macros/s/AKfycbxE3Ozk3FbGTPoTTsdVihIM9gpSSlSoeTLjzpTsRNDPSbaXqarBnRFV6J9mTsiGKnza_Q/exec?format=json";

const FORM_URL_ZAPASOWY =
  "https://forms.gle/LzwCb3HYEmgc8jpa6";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
});

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Wolne terminy | RP.Events – DJ, wodzirej, saksofonista",
  description:
    "Sprawdź wolne terminy RP.Events – Robert Pierz, DJ, wodzirej i saksofonista na wesela i imprezy. Wybierz datę i zapytaj o ofertę.",
  alternates: {
    canonical: "/terminy",
  },
};

async function getGlobalSettings() {
  const query = `
    query TerminyPage {
      page(id: "8", idType: DATABASE_ID) {
        ustawieniaGlobalne {
          logo {
            node {
              sourceUrl
              altText
            }
          }
          facebook {
            linkDoProfiluFacebook
          }
          instagram {
            linkDoProfiluInstagram
          }
          youtbue {
            linkDoProfiluYoutube
          }
          globalDescFooter
          linkForGoogleTestimonial
          emailUstawienia
          globalPhone
          lokalizacjaUstawienia
        }
      }
    }
  `;

  const res = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  const { data, errors } = await res.json();

  if (errors?.length) {
    throw new Error("Nie udało się pobrać ustawień strony.");
  }

  return data?.page?.ustawieniaGlobalne;
}

async function pobierzTerminy(): Promise<DaneTerminow | null> {
  try {
    const res = await fetch(TERMINY_JSON_URL, {
      next: {
        revalidate: 300,
      },
      redirect: "follow",
    });

    if (!res.ok) {
      return null;
    }

    const dane: unknown = await res.json();

    if (!dane || typeof dane !== "object") {
      return null;
    }

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
      formUrl: kalendarz.formUrl,
    };
  } catch (error) {
    console.error("Nie udało się pobrać terminów:", error);
    return null;
  }
}

export default async function TerminyPage() {
  const [settings, dane] = await Promise.all([
    getGlobalSettings(),
    pobierzTerminy(),
  ]);

  return (
    <>
      <TopBar settings={settings} />
      <Navbar settings={settings} />

      <main
        className={`${montserrat.className} min-h-screen overflow-x-clip bg-[#050505] px-0 pb-12 pt-8 text-white sm:px-5 sm:pb-16 sm:pt-10`}
      >
        <div className="mx-auto mt-24 w-full max-w-[760px] lg:mt-34">
          <KalendarzTerminow
            dane={dane}
            formUrlZapasowy={FORM_URL_ZAPASOWY}
          />
        </div>
      </main>

      <Footer settings={settings} />
    </>
  );
}
