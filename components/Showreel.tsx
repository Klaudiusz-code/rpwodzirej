"use client";

import { FiPlay, FiInstagram } from "react-icons/fi";

const photos = [
  {
    title: "Impreza Firmowa",
    location: "Warszawa",
    img: "gallery1.jpg",
  },
  {
    title: "Ola & Paweł",
    location: "Zakopane",
    img: "gallery2.jpg",
  },
];

export default function Showreel() {
  return (
    <section
      id="realizacje"
      className="py-32 md:py-40 px-6 bg-[#050505] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-6">
              Realizacje
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] tracking-tight">
              Zobacz klimat
              <br />
              <span className="font-semibold">moich imprez</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/rpevents.robertpierz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-white text-sm uppercase tracking-widest transition-colors duration-300"
          >
            <FiInstagram size={14} /> @djrobertpierz
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="relative row-span-2 min-h-[400px] md:min-h-0 overflow-hidden group cursor-pointer bg-black">
            <img
              src="gallery3.jpg"
              alt="Showreel"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 scale-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full border-2 border-white/70 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:scale-110 transition-transform duration-300">
                <FiPlay size={28} className="text-white ml-1" />
              </div>
            </div>
          </div>

          {photos.map((photo) => (
            <div
              key={photo.title}
              className="relative min-h-[250px] overflow-hidden group cursor-pointer bg-black"
            >
              <img
                src={photo.img}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  {photo.location}
                </p>
                <p className="text-white text-lg font-light">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
