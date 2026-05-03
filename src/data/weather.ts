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

// Klimatnormalvärden för sent juni – tidig juli från typiska publicerade medelvärden.
// Används som reserv när datumet är utanför det 16-dagars prognosfönstret.
export const tripWeather: WeatherStop[] = [
  { dayId: 1, date: "Sön 21 jun", isoDate: "2026-06-21", city: "Malmö", country: "Sverige", coords: [55.605, 13.0038], driving: true, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Milt Skånesommar, lång dagsljus." } },
  { dayId: 2, date: "Mån 22 jun", isoDate: "2026-06-22", city: "Stemmen", country: "Tyskland", coords: [52.875, 9.683], driving: true, climate: { highC: 22, lowC: 12, rainDays: 11, summary: "Nedre Sachsen — varma dagar, svala nätter." } },
  { dayId: 3, date: "Tis 23 jun", isoDate: "2026-06-23", city: "Gent", country: "Belgien", coords: [51.0543, 3.7174], driving: true, climate: { highC: 22, lowC: 13, rainDays: 11, summary: "Belgisk sommar — mestadels mild, enstaka skurar." } },
  { dayId: 4, date: "Ons 24 jun", isoDate: "2026-06-24", city: "Honfleur", country: "Frankrike", coords: [49.4185, 0.2308], driving: true, climate: { highC: 21, lowC: 13, rainDays: 9, summary: "Normandisk kust — Kanalbris, lätt molnighet." } },
  { dayId: 5, date: "Tor 25 jun", isoDate: "2026-06-25", city: "Bayeux", country: "Frankrike", coords: [49.2768, -0.7028], driving: true, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Normandisk sommar — svalt i skuggan av bocage." } },
  { dayId: 6, date: "Fre 26 jun", isoDate: "2026-06-26", city: "Bayeux", country: "Frankrike", coords: [49.2768, -0.7028], driving: false, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Turnédag — ta med ett lager för strandsidan." } },
  { dayId: 7, date: "Lör 27 jun", isoDate: "2026-06-27", city: "Bayeux", country: "Frankrike", coords: [49.2768, -0.7028], driving: false, climate: { highC: 21, lowC: 12, rainDays: 9, summary: "Normandisk sommar — perfekt terrassväder." } },
  { dayId: 8, date: "Sön 28 jun", isoDate: "2026-06-28", city: "Paris", country: "Frankrike", coords: [48.8566, 2.3522], driving: true, climate: { highC: 24, lowC: 14, rainDays: 9, summary: "Parisisk sommar — varmare inlandet." } },
  { dayId: 9, date: "Mån 29 jun", isoDate: "2026-06-29", city: "Paris", country: "Frankrike", coords: [48.8566, 2.3522], driving: false, climate: { highC: 24, lowC: 14, rainDays: 9, summary: "Kafétterrassväder, enstaka åska." } },
  { dayId: 10, date: "Tis 30 jun", isoDate: "2026-06-30", city: "Paris", country: "Frankrike", coords: [48.8566, 2.3522], driving: false, climate: { highC: 25, lowC: 15, rainDays: 9, summary: "Varmt — börja tidigt vid utomhusattraktioner." } },
  { dayId: 11, date: "Ons 1 jul", isoDate: "2026-07-01", city: "Recklinghausen", country: "Tyskland", coords: [51.6144, 7.1979], driving: true, climate: { highC: 23, lowC: 13, rainDays: 11, summary: "Ruhr — varma dagar, kvällsmolnighet." } },
  { dayId: 12, date: "Tor 2 jul", isoDate: "2026-07-02", city: "Lübeck", country: "Tyskland", coords: [53.8654, 10.6866], driving: true, climate: { highC: 22, lowC: 13, rainDays: 10, summary: "Östersjökust — frisk bris, mestadels mild." } },
  { dayId: 13, date: "Fre 3 jul", isoDate: "2026-07-03", city: "Lund", country: "Sverige", coords: [55.7047, 13.191], driving: true, climate: { highC: 22, lowC: 12, rainDays: 9, summary: "Skånesommar — soligt, blåsigt vid Sundet." } },
  { dayId: 14, date: "Lör 4 jul", isoDate: "2026-07-04", city: "Stockholm", country: "Sverige", coords: [59.3293, 18.0686], driving: true, climate: { highC: 22, lowC: 13, rainDays: 9, summary: "Långa svenska midsommarkvällar." } },
];

// WMO väderkodsmappning → etikett + emoji.
// Referens: https://open-meteo.com/en/docs (väderkodstabell)
export const wmoCode: Record<number, { label: string; emoji: string; severity: "fair" | "cloudy" | "wet" | "stormy" | "snow" }> = {
  0: { label: "Klart", emoji: "☀️", severity: "fair" },
  1: { label: "Mestadels klart", emoji: "🌤️", severity: "fair" },
  2: { label: "Halvklart", emoji: "⛅", severity: "cloudy" },
  3: { label: "Mulet", emoji: "☁️", severity: "cloudy" },
  45: { label: "Dimma", emoji: "🌫️", severity: "cloudy" },
  48: { label: "Rimfrostdimma", emoji: "🌫️", severity: "cloudy" },
  51: { label: "Lätt duggregn", emoji: "🌦️", severity: "wet" },
  53: { label: "Duggregn", emoji: "🌦️", severity: "wet" },
  55: { label: "Kraftigt duggregn", emoji: "🌧️", severity: "wet" },
  56: { label: "Lätt underkylt duggregn", emoji: "🌧️", severity: "wet" },
  57: { label: "Underkylt duggregn", emoji: "🌧️", severity: "wet" },
  61: { label: "Lätt regn", emoji: "🌦️", severity: "wet" },
  63: { label: "Regn", emoji: "🌧️", severity: "wet" },
  65: { label: "Kraftigt regn", emoji: "🌧️", severity: "wet" },
  66: { label: "Lätt underkylt regn", emoji: "🌧️", severity: "wet" },
  67: { label: "Underkylt regn", emoji: "🌧️", severity: "wet" },
  71: { label: "Lätt snö", emoji: "🌨️", severity: "snow" },
  73: { label: "Snö", emoji: "❄️", severity: "snow" },
  75: { label: "Kraftig snö", emoji: "❄️", severity: "snow" },
  77: { label: "Snögryn", emoji: "❄️", severity: "snow" },
  80: { label: "Regnskurar", emoji: "🌦️", severity: "wet" },
  81: { label: "Kraftiga regnskurar", emoji: "🌧️", severity: "wet" },
  82: { label: "Våldsamma regnskurar", emoji: "⛈️", severity: "stormy" },
  85: { label: "Snöbyar", emoji: "🌨️", severity: "snow" },
  86: { label: "Kraftiga snöbyar", emoji: "❄️", severity: "snow" },
  95: { label: "Åskväder", emoji: "⛈️", severity: "stormy" },
  96: { label: "Åskväder med hagel", emoji: "⛈️", severity: "stormy" },
  99: { label: "Svårt åskväder", emoji: "⛈️", severity: "stormy" },
};

export function describeWmo(code: number) {
  return wmoCode[code] ?? { label: `Kod ${code}`, emoji: "🌡️", severity: "cloudy" as const };
}
