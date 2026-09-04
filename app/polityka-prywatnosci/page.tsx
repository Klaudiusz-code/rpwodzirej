import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

const WORDPRESS_API_URL = "https://rpevents.pl/graphql";

async function getPageData() {
  const query = `
    query GetPrivacyPolicy {
      page(id: 3, idType: DATABASE_ID) {
        databaseId
        slug
        uri
        content
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

  const json = await res.json();

  if (!res.ok) {
    console.error("WordPress error:", json);
    throw new Error(`WordPress API error: ${res.status}`);
  }

  if (json.errors) {
    console.error("GraphQL errors:", json.errors);
    throw new Error("GraphQL error");
  }

  return json.data?.page;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Polityka prywatności | RP.events – Robert Pierz",
    description:
      "Polityka prywatności strony RP.events. Informacje o przetwarzaniu danych osobowych, formularzu kontaktowym, plikach cookies i Google Analytics.",
    alternates: {
      canonical: "https://rpevents.pl/polityka-prywatnosci/",
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PrivacyPolicyPage() {
  const pageData = await getPageData();

  if (!pageData) {
    return (
      <main className="min-h-screen bg-[#050505] text-white p-10">
        <h1>Nie udało się pobrać polityki prywatności.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500 selection:text-white">

      <Navbar settings={undefined} />

      <section className="px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div
            className="
              text-white 
              [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-white
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-white
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-white
              [&_p]:mb-4 [&_p]:text-white/80 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
              [&_li]:text-white/80
              [&_strong]:text-white [&_strong]:font-bold
              [&_a]:text-red-500 [&_a]:underline [&_a]:hover:text-red-400
            "
            dangerouslySetInnerHTML={{
              __html: pageData.content || "",
            }}
          />
        </div>
      </section>

      <Footer settings={undefined} />
    </main>
  );
}
