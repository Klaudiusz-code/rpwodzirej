import { NextResponse } from "next/server";
const CRM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxoto4iyfOKz4TnfHKYkzmDEmOjbHMFQRCnnHtF9EwQsC3aebHdW1hQUL3lZVxX1jJxGQ/exec";

// Maksymalnie 3 wysłania z jednego IP w ciągu 10 minut.
const RATE_LIMIT = 3;
const RATE_WINDOW = 10 * 60 * 1000;

const requests = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  const timestamps = requests.get(ip) || [];

  const recentRequests = timestamps.filter(
    (timestamp) => now - timestamp < RATE_WINDOW,
  );

  if (recentRequests.length >= RATE_LIMIT) {
    requests.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requests.set(ip, recentRequests);

  return false;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Zbyt wiele prób wysłania formularza. Spróbuj ponownie za kilka minut.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Honeypot.
    // Normalny użytkownik tego pola nie widzi.
    if (body.website) {
      console.warn("Honeypot wykrył prawdopodobnego bota:", ip);

      // Udajemy poprawne wysłanie, żeby bot nie wiedział,
      // że został wykryty.
      return NextResponse.json({
        ok: true,
        request_id: crypto.randomUUID(),
      });
    }

    const apiToken = process.env.CRM_API_TOKEN;

    if (!apiToken) {
      console.error("Brak CRM_API_TOKEN w zmiennych środowiskowych");

      return NextResponse.json(
        {
          ok: false,
          error: "Brak konfiguracji serwera.",
        },
        { status: 500 },
      );
    }

    const requestId = body.request_id || crypto.randomUUID();

    const crmData = {
      api_token: apiToken,
      request_id: requestId,

      rodzaj_wydarzenia: body.rodzaj_wydarzenia || "Wesele",
      czy_konkretny_termin: body.czy_konkretny_termin || "Tak",
      data_wydarzenia: body.data_wydarzenia || "",
      miejscowosc_wydarzenia: body.miejscowosc_wydarzenia || "",
      nazwa_lokalu: body.nazwa_lokalu || "",
      liczba_gosci: body.liczba_gosci || "",

      imie: body.imie || "",
      email: body.email || "",
      telefon: body.telefon || "",
      uwagi: body.uwagi || "",

      utm_source: body.utm_source || "",
      utm_medium: body.utm_medium || "",
      utm_campaign: body.utm_campaign || "",
      utm_content: body.utm_content || "",
      utm_term: body.utm_term || "",

      gclid: body.gclid || "",
      fbclid: body.fbclid || "",
      referrer: body.referrer || "",
      landing_page: body.landing_page || "",
    };

    const response = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(crmData),
    });

    const result = await response.json();

    if (!response.ok || result.ok !== true) {
      console.error("CRM error:", result);

      return NextResponse.json(
        {
          ok: false,
          error: result.error || "Nie udało się wysłać formularza.",
          request_id: requestId,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      request_id: requestId,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Wystąpił błąd podczas wysyłania formularza.",
      },
      { status: 500 },
    );
  }
}
