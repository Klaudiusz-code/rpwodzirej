import type { Metadata } from "next";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import AboutMe from "@/components/AboutMe";
import Scope from "@/components/Scope";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollWrapper from "@/components/ScrollWrapper";

export const dynamic = "force-dynamic";

const WORDPRESS_API_URL = "https://rpevents.pl/graphql";

async function getPageData() {
  const query = `
    query HomePage {
      page(id: "8", idType: DATABASE_ID) {
        seo {
          title
          description
          canonicalUrl
          focusKeywords
        }

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

          emailUstawienia
          numerTelefonuUstawienia
          lokalizacjaUstawienia
        }

        sekcjaHero {
          imieNazwa
          nazwiskoDrugaLinia
          opisHero
          specjalizacje
          tekstPrzycisku
        }

        sekcjaOMnie {
          aboutImage {
            node {
              sourceUrl
            }
          }
          nadtytul
          tytul
          akapit1
          akapit2
          akapit3
        }

        sekcjaRealizacje {
          nadtytulSekcji
          tytul
          instagram
          instagramLink
          realizacjeItemy {
            opis
            showreelsImage {
              node {
                sourceUrl
              }
            }
            linkDoZdjecia
          }
        }

        sekcjaOferta {
          nadtytul
          tytul
          opisofferta
          offerUslugi {
            nazwaUslugi
            wyroznienie
            opis
          }
        }

        sekcjaOpinie {
          nadtytul
          tytul
          testimonials {
            imie
            rodzajWydarzenia
            trescOpinii
          }
        }

        sekcjaKontakt {
          nadtytul
          tytul
          contactDescription
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

  const { data } = await res.json();

  return data?.page;
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();
  const seo = pageData?.seo;

  const title =
    seo?.title || "DJ na wesele Kraków | Wodzirej & Saksofon Robert Pierz";

  const description =
    seo?.description ||
    "DJ, wodzirej i saksofon na żywo na wesela i eventy. Robert Pierz Kraków i cała Polska.";

  const canonical = seo?.canonicalUrl || "https://rpevents.pl/";

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RP.events",
      locale: "pl_PL",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Home() {
  const pageData = await getPageData();

  return (
    <ScrollWrapper>
      <main className="bg-[#050505] text-white font-sans selection:bg-white/20">
        <TopBar settings={pageData.ustawieniaGlobalne} />

        <Navbar settings={pageData.ustawieniaGlobalne} />

        <Hero data={pageData.sekcjaHero} />

        <Showreel
          data={pageData.sekcjaRealizacje}
          settings={pageData.ustawieniaGlobalne}
        />

        <AboutMe
          data={pageData.sekcjaOMnie}
          settings={pageData.ustawieniaGlobalne}
        />

        <Scope data={pageData.sekcjaOferta} />

        <SocialProof data={pageData.sekcjaOpinie} />

        <Contact
          data={pageData.sekcjaKontakt}
          settings={pageData.ustawieniaGlobalne}
        />

        <Footer settings={pageData.ustawieniaGlobalne} />
      </main>
    </ScrollWrapper>
  );
}
