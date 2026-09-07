import { NextResponse } from "next/server";

const CRM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxoto4iyfOKz4TnfHKYkzmDEmOjbHMFQRCnnHtF9EwQsC3aebHdW1hQUL3lZVxX1jJxGQ/exec";

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

    // Honeypot — bot wypełnił ukryte pole.
    if (body.website) {
      console.warn("Honeypot wykrył prawdopodobnego bota:", ip);

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
      request_id: String(requestId),

      rodzaj_wydarzenia: String(body.rodzaj_wydarzenia || "Wesele"),

      czy_konkretny_termin: String(body.czy_konkretny_termin || "Tak"),

      data_wydarzenia: String(body.data_wydarzenia || ""),
      miejscowosc_wydarzenia: String(body.miejscowosc_wydarzenia || ""),
      nazwa_lokalu: String(body.nazwa_lokalu || ""),
      liczba_gosci: String(body.liczba_gosci || ""),

      imie: String(body.imie || ""),
      email: String(body.email || ""),
      telefon: String(body.telefon || ""),
      uwagi: String(body.uwagi || ""),

      utm_source: String(body.utm_source || ""),
      utm_medium: String(body.utm_medium || ""),
      utm_campaign: String(body.utm_campaign || ""),
      utm_content: String(body.utm_content || ""),
      utm_term: String(body.utm_term || ""),

      gclid: String(body.gclid || ""),
      fbclid: String(body.fbclid || ""),
      referrer: String(body.referrer || ""),
      landing_page: String(body.landing_page || ""),
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
