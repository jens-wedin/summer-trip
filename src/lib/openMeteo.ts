import type { LatLng } from "../types";

export type DailyForecast = {
  date: string; // ISO YYYY-MM-DD
  highC: number;
  lowC: number;
  precipitationMm: number;
  weatherCode: number;
  windKph: number;
  uvIndex?: number;
};

type OpenMeteoDaily = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    weather_code: number[];
    wind_speed_10m_max: number[];
    uv_index_max?: number[];
  };
};

const cache = new Map<string, Promise<DailyForecast[]>>();

function key([lat, lon]: LatLng) {
  return `${lat.toFixed(3)},${lon.toFixed(3)}`;
}

export function fetchForecast(coords: LatLng): Promise<DailyForecast[]> {
  const k = key(coords);
  const cached = cache.get(k);
  if (cached) return cached;

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(coords[0]));
  url.searchParams.set("longitude", String(coords[1]));
  url.searchParams.set(
    "daily",
    "temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,wind_speed_10m_max,uv_index_max"
  );
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("forecast_days", "16");

  const promise = fetch(url.toString())
    .then((r) => {
      if (!r.ok) throw new Error(`Open-Meteo ${r.status}`);
      return r.json() as Promise<OpenMeteoDaily>;
    })
    .then((data) =>
      data.daily.time.map((date, i) => ({
        date,
        highC: data.daily.temperature_2m_max[i],
        lowC: data.daily.temperature_2m_min[i],
        precipitationMm: data.daily.precipitation_sum[i],
        weatherCode: data.daily.weather_code[i],
        windKph: data.daily.wind_speed_10m_max[i],
        uvIndex: data.daily.uv_index_max?.[i],
      }))
    );

  cache.set(k, promise);
  return promise;
}
