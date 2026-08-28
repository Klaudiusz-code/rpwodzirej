"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Nie chciałam typowego wesela z gotowymi playlistami. Wyczuł parkiet w 5 minut i zagrał dokładnie to, czego potrzebowaliśmy. Saksofon podczas pierwszego tańca to był moment, który nasi goście wspominają do dziś.",
    name: "Anna & Maciej",
    event: "Wesele, lipiec 2026",
  },
  {
    quote:
      "Olbrzymia ulga, że nie musieliśmy układać timeline'u z trzema różnymi osobami. Wszystko zgrało się perfekcyjnie, a prowadzenie było naturalne, bez wciskania na siłę sztucznych zabaw.",
    name: "Kasia & Tomek",
    event: "Wesele, sierpień 2026",
  },
  {
    quote:
      "Najlepsza decyzja, jaką podjęliśmy planując ślub. Energia, z jaką zagrał saksofon w środku żywego seta, rozbujała wszystkich, nawet tych, którzy zazwyczaj nie tańczą.",
    name: "Ola & Piotr",
    event: "Event firmowy, październik 2026",
  },
];

export default function SocialProof() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    widgetRef.current.innerHTML = `
      <div class="wzk-widget iframe-height" data-wzk-widget-type="type1" data-wzk-notice="60030" style="max-width: 100%;">
        <div class="wzk-widget-footer" style="background-color:#F5F6FA;text-align:center;padding:16px;font-size:12px;line-height:12px;border-radius:0 0 8px 8px;">
          <a class="wzk-accent-color" title="Dj/Sax Robert Pierz (rp.events)" href="https://www.weselezklasa.pl/ogloszenia-weselne/rpevents-djsax-robert-pierz,60030/#opinie" rel="nofollow" target="_blank" style="color:currentColor;text-decoration:none;">Dj/Sax Robert Pierz (rp.events)</a>
          <img style="margin:8px auto 0;display:block" src="https://widgets.4wzk.pl/dist/img/footer-logo.svg" alt="Wesele z klasą" />
        </div>
      </div>
    `;
    const script = document.createElement("script");
    script.src = "https://widgets.4wzk.pl/dist/js/widget.js";
    script.defer = true;
    widgetRef.current.appendChild(script);
    return () => {
      if (widgetRef.current) widgetRef.current.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="opinie"
      className="py-24 md:py-36 px-6 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6 font-poppins">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] tracking-tight">
            Co mówią po weselu
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-10">
            {testimonials.map((item, i) => (
              <div key={i} className="group relative flex flex-col">
                <span className="absolute -top-4 -left-2 text-[6rem] font-serif text-white/[0.03] leading-none select-none pointer-events-none">
                  &ldquo;
                </span>
                <div className="relative z-10 flex flex-col">
                  <p className="text-gray-400 text-sm leading-[1.85] font-poppins mb-6">
                    {item.quote}
                  </p>
                  <div>
                    <div className="w-8 h-px bg-white/20 mb-4" />
                    <p className="text-white text-sm font-semibold font-poppins tracking-wide">
                      {item.name}
                    </p>
                    <p className="text-gray-600 text-xs tracking-wider uppercase font-poppins mt-1">
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <p className="text-gray-600 text-xs tracking-[0.2em] uppercase font-poppins mb-4 text-center lg:text-left">
                Zobacz więcej na Wesele z Klasą
              </p>
              <div className="relative bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                <div className="max-h-[400px] lg:max-h-[600px] overflow-hidden">
                  <div ref={widgetRef}></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent pointer-events-none z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
