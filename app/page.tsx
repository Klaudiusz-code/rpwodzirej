import type { Metadata } from "next";
import AboutMe from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import Timeline from "@/components/TimeLine";
import TopBar from "@/components/TopBar";

// === PROSTE SEO ===
export function generateMetadata(): Metadata {
  return {
    title: "DJ na Wesele Kraków | Wodzirej, Barman, Saksofon - RP.events",
    description:
      "Odrzuć standard. Kompleksowa obsługa wesel i eventów: DJ, Wodzirej, Barman i Saksofonista w jednym pakiecie. Elegancja, energia i brak sztampowych zabaw. Sprawdź wolne terminy!",
    keywords: [
      "dj na wesele kraków",
      "dj wesele",
      "wodzirej kraków",
      "dobry dj na wesele",
      "barman na wesele",
      "saksofonista na wesele",
      "dj robert pierz",
      "rp.events",
      "obsługa wesel kraków",
    ],
    authors: [{ name: "Robert Pierz - RP.events" }],
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url: "https://rpevents.pl", // <-- WSTAW SWÓJ PRAWDZIWY ADRES URL
      siteName: "RP.events - DJ Robert Pierz",
      title: "DJ na Wesele Kraków | Wodzirej, Barman, Saksofon - RP.events",
      description:
        "Kompleksowy pakiet 4w1 na Twoje wesele: DJ, Wodzirej, Barman i Saksofon. Profesjonalizm, energia i brak sztampowych zabaw.",
  
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Home() {
  return (
    <main className="bg-[#050505] text-white font-sans pt-[118px] selection:bg-[#D4AF37]/30">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Packages />
      <Timeline />
      <SocialProof />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
