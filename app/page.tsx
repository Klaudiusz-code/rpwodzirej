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
