"use client";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function AboutMe({
  data,
  settings,
}: {
  data: any;
  settings: any;
}) {
  if (!data) return null;

  const socials = [
    {
      name: "Instagram",
      href: settings?.instagram?.linkDoProfiluInstagram,
      icon: FaInstagram,
    },
    {
      name: "Facebook",
      href: settings?.facebook?.linkDoProfiluFacebook,
      icon: FaFacebook,
    },
    {
      name: "YouTube",
      href: settings?.youtbue?.linkDoProfiluYoutube,
      icon: FaYoutube,
    },
  ].filter((social) => social.href);

  return (
    <section
      id="o-mnie"
      className="py-24 md:py-36 px-6 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[3/4] bg-[#111] rounded-sm overflow-hidden">
            <img
              src={data.aboutImage?.node?.sourceUrl || "/avatar.jpg"}
              alt="Robert Pierz"
              width={800}
              height={1100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6 font-poppins">
            {data.nadtytul}
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-bold text-white leading-[1.1] tracking-tight mb-8"
            dangerouslySetInnerHTML={{
              __html: data.tytul,
            }}
          />

          <div className="space-y-5 text-gray-400 text-[0.95rem] leading-[1.85] font-poppins">
            <p>{data.akapit1}</p>
            <p>{data.akapit2}</p>
            <p>{data.akapit3}</p>
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
