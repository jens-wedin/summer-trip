import { useEffect, useMemo, useRef, useState } from "react";
import { SunMap } from "../components/SunMap";
import { trip } from "../data/trip";
import {
  azimuthCompass,
  azimuthCompassFull,
  photoWindows,
  sunAltitude,
  sunAzimuth,
  sunState,
  sunriseSunset,
  type PhotoWindow,
  type PhotoWindows,
  type SunEvents,
} from "../lib/sun";
import type { Stop } from "../types";

type StopRow = {
  stop: Stop;
  events: SunEvents;
  windows: PhotoWindows;
  altitudeNow: number;
  azimuthNow: number;
};

const PLAY_HOURS_PER_SECOND = 1.5;

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function dateInputValue(d: Date): string {
  return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
}

function buildDate(dateStr: string, minutes: number): Date {
  const [y, m, d] = dateStr.split("-").map(Number);
  const utcMs = Date.UTC(y, m - 1, d, 0, 0, 0) + minutes * 60_000;
  return new Date(utcMs);
}

function formatUtc(date: Date): string {
  return `${pad2(date.getUTCHours())}:${pad2(date.getUTCMinutes())}`;
}

/**
 * Format `date` in the time zone identified by `timeZone`. Falls back to the
 * UTC string if the runtime doesn't recognize the zone.
 */
function formatLocal(date: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(date);
  } catch {
    return formatUtc(date);
  }
}

function uniqueStops(): Stop[] {
  const seen = new Map<string, Stop>();
  trip.days.forEach((d) => {
    if (!seen.has(d.from.id)) seen.set(d.from.id, d.from);
    if (!seen.has(d.to.id)) seen.set(d.to.id, d.to);
  });
  return Array.from(seen.values());
}

export function SunPage() {
  const today = useMemo(() => new Date(), []);
  const [dateStr, setDateStr] = useState(() => dateInputValue(today));
  const [minutes, setMinutes] = useState(() => {
    return today.getUTCHours() * 60 + today.getUTCMinutes();
  });
  const [playing, setPlaying] = useState(false);

  const date = useMemo(() => buildDate(dateStr, minutes), [dateStr, minutes]);
  const stops = useMemo(() => uniqueStops(), []);

  // Animation loop — advance `minutes` smoothly while playing.
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);
  useEffect(() => {
    if (!playing) {
      lastTickRef.current = null;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }
    const step = (t: number) => {
      const last = lastTickRef.current ?? t;
      const dtSec = (t - last) / 1000;
      lastTickRef.current = t;
      setMinutes((prev) => {
        const next = prev + dtSec * PLAY_HOURS_PER_SECOND * 60;
        return next >= 1440 ? next - 1440 : next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  const state = sunState(date);

  const rows: StopRow[] = useMemo(() => {
    return stops.map((stop) => ({
      stop,
      events: sunriseSunset(stop.coords[0], stop.coords[1], date),
      windows: photoWindows(stop.coords[0], stop.coords[1], date),
      altitudeNow: sunAltitude(stop.coords[0], stop.coords[1], date),
      azimuthNow: sunAzimuth(stop.coords[0], stop.coords[1], date),
    }));
  }, [stops, date]);

  // Roughly: most of the route runs through CET/CEST during the trip window.
  // For arbitrary dates we fall back to "Europe/Stockholm" which observes DST.
  const localZone = "Europe/Stockholm";
  const parisZone = "Europe/Paris";

  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Avdelning S · Astronomi</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          Solens gång över dygnet
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Skjut reglaget genom dygnet — eller tryck på{" "}
          <em>spela</em> — och se subsolar­punkten vandra över jordklotet
          medan natthalvan följer efter.
        </p>
      </header>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 items-end">
        <label className="block">
          <span className="kicker block">Datum (UTC)</span>
          <input
            type="date"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
            className="mt-1 w-full bg-paper border border-ink/60 px-3 py-2 font-serif"
          />
        </label>
        <label className="block">
          <span className="kicker block">
            Tid · {formatUtc(date)} UTC ·{" "}
            <span className="text-muted">
              Stockholm {formatLocal(date, localZone)} · Paris{" "}
              {formatLocal(date, parisZone)}
            </span>
          </span>
          <input
            type="range"
            min={0}
            max={1439}
            step={1}
            value={Math.round(minutes)}
            onChange={(e) => {
              setPlaying(false);
              setMinutes(Number(e.target.value));
            }}
            className="mt-3 w-full accent-accent"
            aria-label="Tid på dygnet i UTC"
          />
        </label>
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="kicker border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
          aria-pressed={playing}
        >
          {playing ? "Pausa" : "Spela"}
        </button>
      </section>

      <div className="mt-6">
        <SunMap date={date} stops={stops} height={560} />
        <p className="byline italic mt-2">
          Den gula skivan markerar solens zenit — punkten där solen står
          rakt över. Det skuggade området är jordens natt­sida; den prickade
          linjen är dag–natt­gränsen (terminatorn). Kartbakgrund:
          OpenStreetMap contributors.
        </p>
      </div>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat label="Deklination" value={`${state.declination.toFixed(2)}°`} />
        <Stat
          label="Subsolar position"
          value={`${state.subsolarLat.toFixed(1)}°, ${state.subsolarLng.toFixed(1)}°`}
        />
        <Stat
          label="Tidsekvation"
          value={`${state.eotMinutes >= 0 ? "+" : ""}${state.eotMinutes.toFixed(1)} min`}
        />
      </section>

      <section className="mt-10">
        <h3 className="headline text-2xl">Solens läge vid varje stopp</h3>
        <hr className="rule mt-2 mb-4" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="kicker text-left">
              <tr className="border-b border-ink/40">
                <th className="py-2 pr-4">Ort</th>
                <th className="py-2 pr-4">Höjd nu</th>
                <th className="py-2 pr-4">Riktning nu</th>
                <th className="py-2 pr-4">Soluppgång (lokal)</th>
                <th className="py-2 pr-4">Solnedgång (lokal)</th>
                <th className="py-2 pr-4">Daglängd</th>
              </tr>
            </thead>
            <tbody className="font-serif">
              {rows.map(({ stop, events, altitudeNow, azimuthNow }) => {
                const zone = zoneFor(stop, localZone, parisZone);
                const dayLen =
                  events.midnightSun
                    ? "Midnattssol"
                    : events.polarNight
                      ? "Polarnatt"
                      : events.sunrise && events.sunset
                        ? formatDuration(
                            events.sunset.getTime() - events.sunrise.getTime()
                          )
                        : "—";
                const compass =
                  altitudeNow >= 0
                    ? `${azimuthCompassFull(azimuthNow)} · ${azimuthCompass(azimuthNow)} ${Math.round(azimuthNow)}°`
                    : "Under horisonten";
                return (
                  <tr key={stop.id} className="border-b border-ink/15">
                    <td className="py-2 pr-4">{stop.name}</td>
                    <td className="py-2 pr-4">
                      {altitudeNow >= 0
                        ? `+${altitudeNow.toFixed(1)}°`
                        : `${altitudeNow.toFixed(1)}°`}
                    </td>
                    <td className="py-2 pr-4">{compass}</td>
                    <td className="py-2 pr-4">
                      {events.sunrise ? formatLocal(events.sunrise, zone) : "—"}
                    </td>
                    <td className="py-2 pr-4">
                      {events.sunset ? formatLocal(events.sunset, zone) : "—"}
                    </td>
                    <td className="py-2 pr-4">{dayLen}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="headline text-2xl">Fotofönster — blå och gyllene timme</h3>
        <p className="deck text-base mt-2 max-w-3xl">
          Blå timme: solen står mellan{" "}
          <span className="whitespace-nowrap">−6° och −4°</span> under
          horisonten — den korta stund då himlen är djupt blå.{" "}
          Gyllene timme: solen rör sig mellan{" "}
          <span className="whitespace-nowrap">−4° och +6°</span> — varmt
          sidoljus runt soluppgång och solnedgång.
        </p>
        <hr className="rule mt-3 mb-4" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="kicker text-left">
              <tr className="border-b border-ink/40">
                <th className="py-2 pr-4">Ort</th>
                <th className="py-2 pr-4">Blå (morgon)</th>
                <th className="py-2 pr-4">Gyllene (morgon)</th>
                <th className="py-2 pr-4">Gyllene (kväll)</th>
                <th className="py-2 pr-4">Blå (kväll)</th>
              </tr>
            </thead>
            <tbody className="font-serif">
              {rows.map(({ stop, windows, events }) => {
                const zone = zoneFor(stop, localZone, parisZone);
                const cells = [
                  windows.blueMorning,
                  windows.goldenMorning,
                  windows.goldenEvening,
                  windows.blueEvening,
                ];
                const fallback = events.midnightSun
                  ? "Midnattssol"
                  : events.polarNight
                    ? "Polarnatt"
                    : "—";
                return (
                  <tr key={stop.id} className="border-b border-ink/15">
                    <td className="py-2 pr-4">{stop.name}</td>
                    {cells.map((w, i) => (
                      <td className="py-2 pr-4" key={i}>
                        {formatWindow(w, zone, fallback)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="byline italic mt-3">
          Tider är lokal tid för respektive ort. Vid höga sommarbreddar
          (t.ex. Stockholm runt midsommar) når solen aldrig &minus;6° under
          horisonten — då uteblir den blå timmen.
        </p>
      </section>
    </article>
  );
}

function zoneFor(stop: Stop, defaultZone: string, parisZone: string): string {
  return stop.country === "Frankrike" || stop.country === "Belgien"
    ? parisZone
    : defaultZone;
}

function formatWindow(
  window: PhotoWindow | null,
  zone: string,
  fallback: string
): string {
  if (!window) return fallback;
  return `${formatLocal(window.start, zone)}–${formatLocal(window.end, zone)}`;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-ink/30 px-4 py-3 bg-paperDark">
      <div className="kicker">{label}</div>
      <div className="font-serif text-xl mt-1">{value}</div>
    </div>
  );
}

function formatDuration(ms: number): string {
  const totalMin = Math.round(ms / 60_000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return `${h}h ${pad2(m)}m`;
}
