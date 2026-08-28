"use client";

import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/twojprofil",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rpeventsrobertpierz",
    icon: FaTiktok,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@rpeventsrobertpierz",
    icon: FaYoutube,
  },
];

export default function AboutMe() {
  return (
    <section
      id="o-mnie"
      className="py-24 md:py-36 px-6 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[3/4] bg-[#111] rounded-sm overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Robert Pierz"
              width={800}
              height={1100}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6 font-poppins">
            O mnie
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-bold text-white leading-[1.1] tracking-tight mb-8">
            Nazywam się Robert.
            <br />
            <span className="text-gray-500">Gram, prowadzę, żyję tym.</span>
          </h2>

          <div className="space-y-5 text-gray-400 text-[0.95rem] leading-[1.85] font-poppins">
            <p>
              Od ponad 18 lat gram na saksofonie, a od ponad 13 lat jestem
              związany z weselami i eventami. Przez wiele lat współpracowałem w
              zespole, dziś łączę rolę DJ-a, prowadzącego i saksofonisty.
            </p>
            <p>
              Nie pracuję według jednego gotowego scenariusza. Każda impreza
              jest inna, dlatego zależy mi przede wszystkim na dobrym kontakcie
              z Parą Młodą, wyczuciu gości i prowadzeniu wydarzenia w taki
              sposób, żeby wszystko było naturalne, a nie „odegrane z kartki”.
            </p>
            <p>
              Lubię nowoczesne wesela, dobrą muzykę, energię na parkiecie i
              eleganckie prowadzenie bez zbędnego przerywania zabawy.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-gray-600 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                  <span className="text-xs tracking-wider uppercase font-poppins font-medium">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
