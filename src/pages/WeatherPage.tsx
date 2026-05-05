import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tripWeather, describeWmo, type WeatherStop } from "../data/weather";
import { fetchForecast, type DailyForecast } from "../lib/openMeteo";

type ForecastByCoord = Record<string, DailyForecast[]>;

const coordKey = (s: WeatherStop) => `${s.coords[0].toFixed(3)},${s.coords[1].toFixed(3)}`;

export function WeatherPage() {
  const [forecasts, setForecasts] = useState<ForecastByCoord>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const unique = Array.from(
      new Map(tripWeather.map((s) => [coordKey(s), s])).values()
    );

    Promise.all(
      unique.map(async (stop) => {
        try {
          const data = await fetchForecast(stop.coords);
          return [coordKey(stop), data] as const;
        } catch (e) {
          console.error("Forecast failed for", stop.city, e);
          return [coordKey(stop), [] as DailyForecast[]] as const;
        }
      })
    )
      .then((entries) => {
        if (cancelled) return;
        const map: ForecastByCoord = {};
        entries.forEach(([k, v]) => {
          map[k] = v;
        });
        setForecasts(map);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(String(e));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Avdelning W · Väder</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          Prognosen
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Dag för dag-väder längs rutten. Aktuell 16-dagarsprognos från
          Open-Meteo när inom räckvidd, klimatnormalvärden som reserv för datum längre bort.
        </p>
        <p className="byline mt-3">
          Uppdateras vid sidinladdning · Ingen API-nyckel, ingen spårning
        </p>
      </header>

      {loading && (
        <div className="py-10 text-center">
          <p className="kicker text-muted">Hämtar senaste prognoser…</p>
        </div>
      )}

      {error && (
        <div className="my-6 border-2 border-red-700 bg-red-50/40 p-5">
          <p className="kicker text-red-800">⚠️ Prognos ej tillgänglig</p>
          <p className="font-serif text-[15px] mt-2">{error}</p>
        </div>
      )}

      {!loading && (
        <ul className="divide-y divide-ink/40">
          {tripWeather.map((stop) => {
            const list = forecasts[coordKey(stop)] ?? [];
            const live = list.find((f) => f.date === stop.isoDate);
            return <ForecastRow key={stop.dayId} stop={stop} live={live} />;
          })}
        </ul>
      )}

      <section className="mt-12 border-t-[3px] border-double border-ink pt-6">
        <p className="kicker">Om denna prognos</p>
        <hr className="rule mt-2 mb-3" />
        <p className="font-serif text-[15px] max-w-3xl">
          Aktuella väderdata från{" "}
          <a
            href="https://open-meteo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ink-link"
          >
            Open-Meteo
          </a>{" "}
          — ett gratis, öppet väder-API som inte kräver nyckel. Prognoser finns tillgängliga upp till 16 dagar i förväg. För resdatum längre bort visas klimatnormalvärden (typiskt sen juni / tidig juli) i stället — dessa baseras på långtidsmedelvärden från publicerade klimatdata och ger en rimlig förväntning på vad man ska packa.
        </p>
      </section>

      {/* Footer nav */}
      <nav className="mt-12 pt-6 border-t-[3px] border-double border-ink flex flex-col md:flex-row items-center justify-between gap-3">
        <Link to="/itinerary" className="kicker ink-link">
          ← Hela reseplanen
        </Link>
        <Link to="/checklist" className="kicker ink-link">
          Packlista
        </Link>
        <Link to="/map" className="kicker ink-link">
          Reskartan →
        </Link>
      </nav>
    </article>
  );
}

function ForecastRow({
  stop,
  live,
}: {
  stop: WeatherStop;
  live?: DailyForecast;
}) {
  const wmo = live ? describeWmo(live.weatherCode) : null;
  return (
    <li className="py-6 grid grid-cols-12 gap-6 items-start">
      <div className="col-span-12 md:col-span-2">
        <p className="kicker">Dag {String(stop.dayId).padStart(2, "0")}</p>
        <p className="masthead text-3xl mt-1">
          {String(stop.dayId).padStart(2, "0")}
        </p>
        <p className="byline mt-2">{stop.date}</p>
        <p className="byline">
          {stop.driving ? "🚗 Kördag" : "🏨 Övernattning"}
        </p>
      </div>

      <div className="col-span-12 md:col-span-5">
        <p className="kicker text-muted">{stop.country}</p>
        <h3 className="headline text-2xl md:text-3xl mt-1">{stop.city}</h3>
        <p className="font-serif italic text-[15px] mt-2 text-muted">
          {stop.climate.summary}
        </p>
        <dl className="grid grid-cols-3 gap-4 mt-3 max-w-md">
          <ClimateStat label="Snitt max" value={`${stop.climate.highC}°C`} />
          <ClimateStat label="Snitt min" value={`${stop.climate.lowC}°C`} />
          <ClimateStat label="Regndagar" value={`${stop.climate.rainDays}/mån`} />
        </dl>
      </div>

      <div className="col-span-12 md:col-span-5 md:border-l md:border-ink/30 md:pl-5">
        {live && wmo ? (
          <>
            <div className="flex items-baseline justify-between gap-2">
              <p className="kicker text-accent">Aktuell prognos</p>
              <p className="byline">Open-Meteo</p>
            </div>
            <hr className="rule mt-2 mb-3" />
            <div className="flex items-center gap-4">
              <span className="text-5xl leading-none" aria-hidden="true">
                {wmo.emoji}
              </span>
              <div>
                <p className="font-serif font-bold text-[18px]">{wmo.label}</p>
                <p className="font-serif text-[14px] mt-1">
                  <strong>{Math.round(live.highC)}°C</strong>
                  <span className="text-muted">
                    {" "}
                    / {Math.round(live.lowC)}°C
                  </span>
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-3 mt-3">
              <LiveStat
                label="Regn"
                value={`${live.precipitationMm.toFixed(1)} mm`}
              />
              <LiveStat
                label="Vind"
                value={`${Math.round(live.windKph)} km/h`}
              />
              {live.uvIndex !== undefined && (
                <LiveStat label="UV" value={String(Math.round(live.uvIndex))} />
              )}
            </dl>
          </>
        ) : (
          <>
            <p className="kicker text-muted">Utanför prognoshorisonten</p>
            <hr className="rule mt-2 mb-3" />
            <p className="font-serif italic text-[14px] text-muted">
              Open-Meteo tillhandahåller prognoser upp till 16 dagar framåt. Närmre
              resan visas den aktuella prognosen för {stop.date.slice(4)} här. Tills dess är klimatmedelvärdena till vänster din bästa guide.
            </p>
          </>
        )}
      </div>
    </li>
  );
}

function ClimateStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-ink/20 pb-2">
      <dt className="kicker text-muted">{label}</dt>
      <dd className="font-serif text-[15px] mt-1">{value}</dd>
    </div>
  );
}

function LiveStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-ink/40 px-2 py-1 text-center">
      <dt className="kicker text-muted">{label}</dt>
      <dd className="font-serif text-[14px] mt-1">{value}</dd>
    </div>
  );
}
