import type { LatLng } from "../types";

export type ClimateNormal = {
  highC: number;
  lowC: number;
  rainDays: number;
  summary: string;
};

export type WeatherStop = {
  dayId: number;
  date: string;
  isoDate: string;
  city: string;
  country: string;
  coords: LatLng;
  driving: boolean;
  climate: ClimateNormal;
};

// Late June – early July climate normals from typical published averages.
// Used as fallback when the date is outside the 16-day live forecast window.
export const tripWeather: WeatherStop[] = [
  { dayId: 1, date: "Sun 21 Jun", isoDate: "2026-06-21", city: "Malmö", country: "Sweden", coords: [55.605, 13.0038], driving: true, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Mild Skåne summer, long daylight." } },
  { dayId: 2, date: "Mon 22 Jun", isoDate: "2026-06-22", city: "Stemmen", country: "Germany", coords: [52.875, 9.683], driving: true, climate: { highC: 22, lowC: 12, rainDays: 11, summary: "Lower Saxony — warm days, cool nights." } },
  { dayId: 3, date: "Tue 23 Jun", isoDate: "2026-06-23", city: "Gent", country: "Belgium", coords: [51.0543, 3.7174], driving: true, climate: { highC: 22, lowC: 13, rainDays: 11, summary: "Belgian summer — mostly mild, occasional showers." } },
  { dayId: 4, date: "Wed 24 Jun", isoDate: "2026-06-24", city: "Honfleur", country: "France", coords: [49.4185, 0.2308], driving: true, climate: { highC: 21, lowC: 13, rainDays: 9, summary: "Norman coast — Channel breeze, light cloud." } },
  { dayId: 5, date: "Thu 25 Jun", isoDate: "2026-06-25", city: "Bayeux", country: "France", coords: [49.2768, -0.7028], driving: true, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Norman summer — bocage cool in the shade." } },
  { dayId: 6, date: "Fri 26 Jun", isoDate: "2026-06-26", city: "Bayeux", country: "France", coords: [49.2768, -0.7028], driving: false, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Tour day — pack a layer for the beach wind." } },
  { dayId: 7, date: "Sat 27 Jun", isoDate: "2026-06-27", city: "Bayeux", country: "France", coords: [49.2768, -0.7028], driving: false, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Norman summer — perfect terrace weather." } },
  { dayId: 8, date: "Sun 28 Jun", isoDate: "2026-06-28", city: "Paris", country: "France", coords: [48.8566, 2.3522], driving: true, climate: { highC: 24, lowC: 14, rainDays: 9, summary: "Parisian summer — warmer inland." } },
  { dayId: 9, date: "Mon 29 Jun", isoDate: "2026-06-29", city: "Paris", country: "France", coords: [48.8566, 2.3522], driving: false, climate: { highC: 24, lowC: 14, rainDays: 9, summary: "Café-terrace weather, occasional thunder." } },
  { dayId: 10, date: "Tue 30 Jun", isoDate: "2026-06-30", city: "Paris", country: "France", coords: [48.8566, 2.3522], driving: false, climate: { highC: 25, lowC: 15, rainDays: 9, summary: "Warm — start early at outdoor sites." } },
  { dayId: 11, date: "Wed 1 Jul", isoDate: "2026-07-01", city: "Recklinghausen", country: "Germany", coords: [51.6144, 7.1979], driving: true, climate: { highC: 23, lowC: 13, rainDays: 11, summary: "Ruhr — warm days, evening clouds." } },
  { dayId: 12, date: "Thu 2 Jul", isoDate: "2026-07-02", city: "Lübeck", country: "Germany", coords: [53.8654, 10.6866], driving: true, climate: { highC: 22, lowC: 13, rainDays: 10, summary: "Baltic coast — fresh breeze, mostly mild." } },
  { dayId: 13, date: "Fri 3 Jul", isoDate: "2026-07-03", city: "Lund", country: "Sweden", coords: [55.7047, 13.191], driving: true, climate: { highC: 22, lowC: 12, rainDays: 9, summary: "Skåne summer — sunny, breezy by the Sound." } },
  { dayId: 14, date: "Sat 4 Jul", isoDate: "2026-07-04", city: "Stockholm", country: "Sweden", coords: [59.3293, 18.0686], driving: true, climate: { highC: 22, lowC: 13, rainDays: 9, summary: "Long Swedish midsummer evenings." } },
];

// WMO weather code mapping → label + brand emoji.
// Reference: https://open-meteo.com/en/docs (weather code table)
export const wmoCode: Record<number, { label: string; emoji: string; severity: "fair" | "cloudy" | "wet" | "stormy" | "snow" }> = {
  0: { label: "Clear sky", emoji: "☀️", severity: "fair" },
  1: { label: "Mainly clear", emoji: "🌤️", severity: "fair" },
  2: { label: "Partly cloudy", emoji: "⛅", severity: "cloudy" },
  3: { label: "Overcast", emoji: "☁️", severity: "cloudy" },
  45: { label: "Fog", emoji: "🌫️", severity: "cloudy" },
  48: { label: "Depositing rime fog", emoji: "🌫️", severity: "cloudy" },
  51: { label: "Light drizzle", emoji: "🌦️", severity: "wet" },
  53: { label: "Drizzle", emoji: "🌦️", severity: "wet" },
  55: { label: "Heavy drizzle", emoji: "🌧️", severity: "wet" },
  56: { label: "Light freezing drizzle", emoji: "🌧️", severity: "wet" },
  57: { label: "Freezing drizzle", emoji: "🌧️", severity: "wet" },
  61: { label: "Light rain", emoji: "🌦️", severity: "wet" },
  63: { label: "Rain", emoji: "🌧️", severity: "wet" },
  65: { label: "Heavy rain", emoji: "🌧️", severity: "wet" },
  66: { label: "Light freezing rain", emoji: "🌧️", severity: "wet" },
  67: { label: "Freezing rain", emoji: "🌧️", severity: "wet" },
  71: { label: "Light snow", emoji: "🌨️", severity: "snow" },
  73: { label: "Snow", emoji: "❄️", severity: "snow" },
  75: { label: "Heavy snow", emoji: "❄️", severity: "snow" },
  77: { label: "Snow grains", emoji: "❄️", severity: "snow" },
  80: { label: "Rain showers", emoji: "🌦️", severity: "wet" },
  81: { label: "Heavy rain showers", emoji: "🌧️", severity: "wet" },
  82: { label: "Violent rain showers", emoji: "⛈️", severity: "stormy" },
  85: { label: "Snow showers", emoji: "🌨️", severity: "snow" },
  86: { label: "Heavy snow showers", emoji: "❄️", severity: "snow" },
  95: { label: "Thunderstorm", emoji: "⛈️", severity: "stormy" },
  96: { label: "Thunderstorm with hail", emoji: "⛈️", severity: "stormy" },
  99: { label: "Severe thunderstorm", emoji: "⛈️", severity: "stormy" },
};

export function describeWmo(code: number) {
  return wmoCode[code] ?? { label: `Code ${code}`, emoji: "🌡️", severity: "cloudy" as const };
}
