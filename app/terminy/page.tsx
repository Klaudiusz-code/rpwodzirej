
import type { Metadata } from "next";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WORDPRESS_API_URL = "https://rpevents.pl/graphql";

const TERMINY_URL =
  "https://script.google.com/macros/s/AKfycbxE3Ozk3FbGTPoTTsdVihIM9gpSSlSoeTLjzpTsRNDPSbaXqarBnRFV6J9mTsiGKnza_Q/exec?z=www";

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

export default async function TerminyPage() {
  const settings = await getGlobalSettings();

  return (
    <>
      <TopBar settings={settings} />
      <Navbar settings={settings} />

      <main className="min-h-screen overflow-x-clip bg-[#050505] px-0 pb-12 pt-8 text-white sm:px-5 sm:pb-16 sm:pt-10">
        <div className="mx-auto w-full max-w-[760px]">
          <header className="mx-auto w-full max-w-[560px] mt-24 lg:mt-34 px-4 pb-5 text-center sm:px-0 sm:pb-7">
            

            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Zapytaj o ofertę
            </h1>

            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-white/50 sm:mt-3 sm:text-sm sm:leading-6">
              Sprawdź dostępność i wybierz termin swojego wydarzenia.
            </p>
          </header>

          <section
            aria-label="Kalendarz wolnych terminów"
            className="mx-auto w-full max-w-[560px] overflow-hidden sm:rounded-sm"
          >
            <iframe
              src={TERMINY_URL}
              title="Kalendarz wolnych terminów RP.Events"
              loading="eager"
              className="block h-[1150px] min-h-[1000px] w-full border-0 bg-[#0b0b0b] sm:h-[1150px]"
              allow="clipboard-write"
            />
          </section>
        </div>
      </main>

      <Footer settings={settings} />
    </>
  );
}
