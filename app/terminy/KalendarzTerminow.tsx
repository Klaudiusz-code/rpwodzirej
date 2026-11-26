"use client";

import { useEffect, useMemo, useState, type ReactElement } from "react";
import styles from "./terminy.module.css";

export type DaneTerminow = {
  blad: boolean;
  od: string;
  do: string;
  zajete: string[];
  wstepne?: string[];
  formUrl?: string;
};

const MIESIACE = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];

const MIESIACE_DOP = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

const DNI = ["Pn", "Wt", "Śr", "Cz", "Pt", "Sb", "Nd"];

const DNI_PELNE = [
  "niedziela",
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
];

const iso = (rok: number, miesiac: number, dzien: number) =>
  `${rok}-${String(miesiac + 1).padStart(2, "0")}-${String(dzien).padStart(2, "0")}`;

function czyPoprawnaData(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [rok, miesiac, dzien] = value.split("-").map(Number);
  const data = new Date(rok, miesiac - 1, dzien);

  return (
    data.getFullYear() === rok &&
    data.getMonth() === miesiac - 1 &&
    data.getDate() === dzien
  );
}

function dzisiejszaData(): string {
  const dzisiaj = new Date();

  return iso(dzisiaj.getFullYear(), dzisiaj.getMonth(), dzisiaj.getDate());
}

export default function KalendarzTerminow({
  dane,
  formUrlZapasowy,
}: {
  dane: DaneTerminow | null;
  formUrlZapasowy: string;
}) {
  const formUrl = dane?.formUrl || formUrlZapasowy;

  const zakresPoprawny =
    !!dane &&
    !dane.blad &&
    czyPoprawnaData(dane.od) &&
    czyPoprawnaData(dane.do) &&
    dane.od <= dane.do;

  const odIso = zakresPoprawny ? dane.od : dzisiejszaData();
  const doIso = zakresPoprawny ? dane.do : odIso;

  const [startRok, startMiesiac] = odIso.split("-").map(Number);

  const [rok, setRok] = useState(startRok);
  const [mies, setMies] = useState(startMiesiac - 1);
  const [wybrany, setWybrany] = useState("");

  const zajete = useMemo(() => new Set(dane?.zajete ?? []), [dane]);

  const wstepne = useMemo(() => new Set(dane?.wstepne ?? []), [dane]);

  useEffect(() => {
    setRok(startRok);
    setMies(startMiesiac - 1);
    setWybrany("");
  }, [startRok, startMiesiac, odIso, doIso]);

  const poprzedni = () => {
    if (rok === startRok && mies === startMiesiac - 1) {
      return;
    }

    if (mies === 0) {
      setMies(11);
      setRok((poprzedniRok) => poprzedniRok - 1);
    } else {
      setMies((poprzedniMiesiac) => poprzedniMiesiac - 1);
    }
  };

  const [koniecRok, koniecMiesiac] = doIso.split("-").map(Number);

  const ostatniMiesiac = rok === koniecRok && mies === koniecMiesiac - 1;

  const pierwszyMiesiac = rok === startRok && mies === startMiesiac - 1;

  const nastepny = () => {
    if (ostatniMiesiac) {
      return;
    }

    if (mies === 11) {
      setMies(0);
      setRok((poprzedniRok) => poprzedniRok + 1);
    } else {
      setMies((poprzedniMiesiac) => poprzedniMiesiac + 1);
    }
  };

  const pokaz = (key: string) => {
    if (!czyPoprawnaData(key)) {
      return;
    }

    setWybrany(key);

    const [nowyRok, nowyMiesiac] = key.split("-").map(Number);

    setRok(nowyRok);
    setMies(nowyMiesiac - 1);
  };

  if (!zakresPoprawny) {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.h1}>Sprawdź wolny termin</h1>

        <div className={styles.divider} />

        <div className={styles.card} style={{ textAlign: "center" }}>
          <p>
            Nie udało się teraz wczytać kalendarza.
            <br />
            Napisz do mnie, a sprawdzę termin od ręki.
          </p>

          <a
            className={styles.btn}
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zapytaj o ofertę
          </a>
        </div>
      </div>
    );
  }

  const przesuniecie = (new Date(rok, mies, 1).getDay() + 6) % 7;

  const ileDni = new Date(rok, mies + 1, 0).getDate();

  const komorki: ReactElement[] = [];

  for (let i = 0; i < przesuniecie; i++) {
    komorki.push(
      <div key={`empty-${i}`} className={`${styles.day} ${styles.empty}`} />,
    );
  }

  for (let dzien = 1; dzien <= ileDni; dzien++) {
    const key = iso(rok, mies, dzien);
    const dzienTygodnia = new Date(rok, mies, dzien).getDay();

    let klasa = styles.day;
    let moznaWybrac = false;
    let kropka = false;

    if (key < odIso || key > doIso) {
      klasa += ` ${styles.past}`;
    } else if (zajete.has(key)) {
      klasa += ` ${styles.busy}`;
      kropka = true;
    } else if (wstepne.has(key)) {
      klasa += ` ${styles.partial}`;
      kropka = true;
      moznaWybrac = true;
    } else {
      klasa += ` ${styles.free}`;

      if (dzienTygodnia === 0 || dzienTygodnia === 6) {
        klasa += ` ${styles.weekend}`;
      }

      moznaWybrac = true;
    }

    if (key === wybrany) {
      klasa += ` ${styles.selected}`;
    }

    komorki.push(
      <button
        type="button"
        key={key}
        className={klasa}
        disabled={!moznaWybrac}
        onClick={() => pokaz(key)}
        aria-label={`${dzien} ${MIESIACE_DOP[mies]} ${rok}`}
        aria-pressed={key === wybrany}
      >
        {dzien}
        {kropka && <span className={styles.tag} />}
      </button>,
    );
  }

  let wynik: ReactElement | null = null;

  if (wybrany) {
    const [wybranyRok, wybranyMiesiac, wybranyDzien] = wybrany
      .split("-")
      .map(Number);

    const opis = `${wybranyDzien} ${
      MIESIACE_DOP[wybranyMiesiac - 1]
    } ${wybranyRok} (${
      DNI_PELNE[new Date(wybranyRok, wybranyMiesiac - 1, wybranyDzien).getDay()]
    })`;

    const przycisk = (tekst: string) => (
      <a
        className={styles.btn}
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tekst}
      </a>
    );

    if (wybrany < odIso || wybrany > doIso) {
      wynik = (
        <div className={`${styles.result} ${styles.no}`}>
          <div className={styles.big}>{opis}</div>
          <div>
            Ten termin jest poza zakresem kalendarza. Napisz, sprawdzę go
            indywidualnie.
          </div>
          {przycisk("Zapytaj o termin")}
        </div>
      );
    } else if (zajete.has(wybrany)) {
      wynik = (
        <div className={`${styles.result} ${styles.no}`}>
          <div className={styles.big}>{opis} – zajęty</div>
          <div>
            Ten dzień jest już zarezerwowany. Sprawdź inny termin albo napisz,
            jeśli data jest jeszcze elastyczna.
          </div>
        </div>
      );
    } else if (wstepne.has(wybrany)) {
      wynik = (
        <div className={`${styles.result} ${styles.mid}`}>
          <div className={styles.big}>{opis} – częściowo dostępny</div>
          <div>
            Termin jest wstępnie zarezerwowany przez inną parę, ale nie jest
            jeszcze potwierdzony. Wyślijcie zapytanie – dam znać, gdy tylko
            termin się zwolni.
          </div>
          {przycisk("Zapytaj o ofertę")}
        </div>
      );
    } else {
      wynik = (
        <div className={`${styles.result} ${styles.ok}`}>
          <div className={styles.big}>{opis} – wolny</div>
          <div>
            Ten termin jest dostępny. Wyślijcie zapytanie, a przygotuję ofertę.
          </div>
          {przycisk("Zapytaj o ofertę")}
        </div>
      );
    }
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Sprawdź wolny termin</h1>

      <div className={styles.divider} />

      <p className={styles.lead}>
        Kliknij datę w kalendarzu i otrzymaj ofertę.
      </p>

      <div className={styles.card}>
        <div className={styles.nav}>
          <button
            type="button"
            onClick={poprzedni}
            disabled={pierwszyMiesiac}
            aria-label="Poprzedni miesiąc"
          >
            ‹
          </button>

          <div className={styles.month}>
            {MIESIACE[mies]} {rok}
          </div>

          <button
            type="button"
            onClick={nastepny}
            disabled={ostatniMiesiac}
            aria-label="Następny miesiąc"
          >
            ›
          </button>
        </div>

        <div className={styles.grid}>
          {DNI.map((dzien) => (
            <div key={dzien} className={styles.dow}>
              {dzien}
            </div>
          ))}

          {komorki}
        </div>

        <div className={styles.legend}>
          <span className={styles.lFree}>Wolny</span>
          <span className={styles.lPartial}>Wstępnie zarezerwowany</span>
          <span className={styles.lBusy}>Zajęty</span>
        </div>

        <div className={styles.check}>
          <input
            type="date"
            min={odIso}
            max={doIso}
            value={wybrany}
            onChange={(e) => pokaz(e.target.value)}
            aria-label="Data wydarzenia"
          />
        </div>

        {wynik}
      </div>

      <p className={styles.note}>
        Kalendarz aktualizuje się automatycznie. Termin rezerwuje dopiero
        podpisana umowa.
      </p>
    </div>
  );
}
