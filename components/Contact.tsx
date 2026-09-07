"use client";

import { useEffect, useRef, useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";

type MarketingData = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  referrer: string;
  landing_page: string;
};

const STORAGE_KEY = "rpevents_marketing_data";

const emptyMarketingData: MarketingData = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
  fbclid: "",
  referrer: "",
  landing_page: "",
};

function getMarketingData(): MarketingData {
  if (typeof window === "undefined") {
    return emptyMarketingData;
  }

  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (saved) {
      return {
        ...emptyMarketingData,
        ...JSON.parse(saved),
      };
    }
  } catch {
    // Ignorujemy błąd sessionStorage
  }

  return emptyMarketingData;
}

export default function Contact({
  data,
  settings,
}: {
  data: any;
  settings: any;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    imie: "",
    data_wydarzenia: "",
    miejscowosc_wydarzenia: "",
    nazwa_lokalu: "",
    liczba_gosci: "",
    telefon: "",
    email: "",
    uwagi: "",
    website: "",
  });

  const requestIdRef = useRef<string>("");

  const phone = settings?.globalPhone;
  const email = settings?.emailUstawienia;
  const location = settings?.lokalizacjaUstawienia;

  const phoneHref = `tel:${String(phone || "").replace(/\s/g, "")}`;
  const emailHref = `mailto:${email || ""}`;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentUrl = new URL(window.location.href);
    const existing = getMarketingData();

    // Zachowujemy dane pierwszego wejścia na stronę.
    if (existing.landing_page) {
      return;
    }

    const marketingData: MarketingData = {
      utm_source: currentUrl.searchParams.get("utm_source") || "",
      utm_medium: currentUrl.searchParams.get("utm_medium") || "",
      utm_campaign: currentUrl.searchParams.get("utm_campaign") || "",
      utm_content: currentUrl.searchParams.get("utm_content") || "",
      utm_term: currentUrl.searchParams.get("utm_term") || "",

      gclid: currentUrl.searchParams.get("gclid") || "",
      fbclid: currentUrl.searchParams.get("fbclid") || "",

      referrer: document.referrer || "",
      landing_page: window.location.href,
    };

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(marketingData));
    } catch {
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }

    if (success) {
      setSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    if (!requestIdRef.current) {
      requestIdRef.current = crypto.randomUUID();
    }

    try {
      const marketingData = getMarketingData();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          request_id: requestIdRef.current,

          rodzaj_wydarzenia: "Wesele",
          czy_konkretny_termin: "Tak",

          data_wydarzenia: String(formData.data_wydarzenia),
          miejscowosc_wydarzenia: String(formData.miejscowosc_wydarzenia),
          nazwa_lokalu: String(formData.nazwa_lokalu),
          liczba_gosci: String(formData.liczba_gosci),

          imie: String(formData.imie),
          email: String(formData.email),
          telefon: String(formData.telefon),
          uwagi: String(formData.uwagi),

          website: formData.website,

          ...marketingData,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.ok !== true) {
        throw new Error(result.error || "Nie udało się wysłać formularza.");
      }

      setSuccess(true);

      setFormData({
        imie: "",
        data_wydarzenia: "",
        miejscowosc_wydarzenia: "",
        nazwa_lokalu: "",
        liczba_gosci: "",
        telefon: "",
        email: "",
        uwagi: "",
        website: "",
      });

      requestIdRef.current = "";
    } catch (err) {
      console.error("Formularz kontaktowy:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Wystąpił błąd podczas wysyłania formularza.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data) return null;

  return (
    <section
      id="kontakt"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-[#050505]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">
            {data.nadtytul}
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] tracking-tight mb-8">
            {data.tytul}
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-16 max-w-md">
            {data.contactDescription}
          </p>

          <div className="space-y-6 border-t border-white/10 pt-8">
            <a
              href={phoneHref}
              className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FiPhone size={16} className="opacity-50" />

              <span className="text-lg sm:text-xl font-light tracking-wide">
                {phone}
              </span>
            </a>

            <a
              href={emailHref}
              className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300 break-all"
            >
              <FiMail size={16} className="opacity-50 mt-0.5" />

              <span className="text-sm font-light">{email}</span>
            </a>

            <div className="flex items-center gap-4 text-gray-400">
              <FiMapPin size={16} className="opacity-50" />

              <span className="text-sm font-light">{location}</span>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-8 pt-2" onSubmit={handleSubmit}>
            {/* Honeypot - niewidoczne dla użytkownika */}
            <div
              className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="website">Website</label>

              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                  Imię i nazwisko
                </label>

                <input
                  type="text"
                  name="imie"
                  value={formData.imie}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                  Data imprezy
                </label>

                <input
                  type="date"
                  name="data_wydarzenia"
                  value={formData.data_wydarzenia}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                  Miejscowość wydarzenia
                </label>

                <input
                  type="text"
                  name="miejscowosc_wydarzenia"
                  value={formData.miejscowosc_wydarzenia}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600"
                  placeholder="Kraków"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                  Lokal / sala
                </label>

                <input
                  type="text"
                  name="nazwa_lokalu"
                  value={formData.nazwa_lokalu}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600"
                  placeholder="Dwór Testowy"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                  Przybliżona liczba gości
                </label>

                <input
                  type="number"
                  name="liczba_gosci"
                  value={formData.liczba_gosci}
                  onChange={handleChange}
                  min="1"
                  inputMode="numeric"
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600"
                  placeholder="120"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                  Telefon
                </label>

                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600"
                  placeholder="+48 500 600 700"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                E-mail
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-600"
                placeholder="jan@email.pl"
              />
            </div>

            <div>
              <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
                Krótko o imprezie
              </label>

              <textarea
                name="uwagi"
                value={formData.uwagi}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-3 text-base text-white focus:outline-none focus:border-white/50 transition-colors resize-none placeholder:text-gray-600"
                placeholder="Dodatkowe informacje..."
              ></textarea>
            </div>

            {success && (
              <div className="text-sm text-gray-300 border border-white/10 px-4 py-4">
                Dziękujemy. Zapytanie zostało wysłane. Skontaktujemy się z Tobą
                tak szybko, jak to możliwe.
              </div>
            )}

            {error && (
              <div className="text-sm text-red-400 border border-red-400/20 px-4 py-4">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group bg-white text-black font-semibold py-5 rounded-sm transition-all duration-300 hover:bg-gray-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest flex items-center justify-center gap-4 mt-4"
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}

              <FiArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
