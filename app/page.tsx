"use client";

import { useEffect } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Showreel from "@/components/Showreel";
import AboutMe from "@/components/AboutMe";
import Scope from "@/components/Scope";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("main > section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#050505] text-white font-sans selection:bg-white/20">
      <TopBar />
      <Navbar />
      <Hero />
      <Process />
      <Showreel />
      <AboutMe />
      <Scope />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  );
}
