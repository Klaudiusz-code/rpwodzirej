"use client";

import { useEffect, useRef } from "react";
import { FiStar, FiExternalLink, FiYoutube, FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

type SocialProofProps = {
  data: any;
  settings: {
    linkForGoogleTestimonial?: string;
    emailUstawienia?: string;
    globalPhone?: string;
    lokalizacjaUstawienia?: string;
    instagram?: { linkDoProfiluInstagram?: string };
    facebook?: { linkDoProfiluFacebook?: string };
    youtbue?: { linkDoProfiluYoutube?: string };
  };
};

export default function SocialProof({ data, settings }: SocialProofProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    widgetRef.current.innerHTML = `
      <div
        class="wzk-widget iframe-height"
        data-wzk-widget-type="type1"
        data-wzk-notice="60030"
        style="width:100%;max-width:100%;"
      >
        <div
          class="wzk-widget-footer"
          style="background-color:#F5F6FA;text-align:center;padding:16px;font-size:12px;line-height:12px;border-radius:0 0 8px 8px;"
        >
          <a
            class="wzk-accent-color"
            title="Dj/Sax Robert Pierz (rp.events)"
            href="https://www.weselezklasa.pl/ogloszenia-weselne/rpevents-djsax-robert-pierz,60030/#opinie"
            rel="nofollow"
            target="_blank"
            style="color:currentColor;text-decoration:none;"
          >
            Dj/Sax Robert Pierz (rp.events)
          </a>

          <img
            style="margin:8px auto 0;display:block"
            src="https://widgets.4wzk.pl/dist/img/footer-logo.svg"
            alt="Wesele z klasą"
          />
        </div>
      </div>
    `;

    const script = document.createElement("script");

    script.src = "https://widgets.4wzk.pl/dist/js/widget.js";
    script.defer = true;

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = "";
      }
    };
  }, []);

  if (!data) return null;

  const instagram = settings?.instagram?.linkDoProfiluInstagram;
  const youtube = settings?.youtbue?.linkDoProfiluYoutube;
  const facebook = settings?.facebook?.linkDoProfiluFacebook;

  const googleUrl =
    settings?.linkForGoogleTestimonial ||
    "https://www.google.com/search?q=Robert+Pierz+RP.Events+%E2%80%93+DJ/Wodzirej/Saksofon";

  return (
    <section
      id="opinie"
      className="py-24 md:py-36 px-6 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 font-poppins">
            {data.nadtytul}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15] tracking-tight">
            {data.tytul}
          </h2>
        </div>

        {/* WESELE Z KLASĄ - WIDGET */}
        <div className="w-full flex justify-center mb-12">
          <div className="w-full max-w-5xl">
            <p className="text-gray-600 text-xs tracking-[0.2em] uppercase font-poppins mb-6 text-center">
              Zaufali nam
            </p>

            <div className="relative bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
              <div className="w-full h-[420px] md:h-[460px] overflow-hidden">
                <div ref={widgetRef} className="w-full h-full" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-white text-sm font-poppins tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 rounded-full bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

            <FiStar
              className="text-yellow-500 fill-yellow-500 relative z-10"
              size={16}
            />
            <span className="relative text-[11px] md-[15px] z-10 font-semibold uppercase tracking-wider">
              Zobacz opinie na Google
            </span>
            <FiExternalLink
              size={14}
              className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 border-t border-white/5 pt-8">
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <SiInstagram size={24} />
            </a>
          )}
          {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="YouTube"
            >
              <FiYoutube size={26} />
            </a>
          )}
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Facebook"
            >
              <FiFacebook size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
