// Solar position math — NOAA's Spencer-style approximation.
// Good to ~1 minute / ~0.1° for civil purposes; ample for a visual map.

const D2R = Math.PI / 180;
const R2D = 180 / Math.PI;

export type SunState = {
  /** Subsolar latitude (degrees). Equal to the solar declination. */
  subsolarLat: number;
  /** Subsolar longitude (degrees, in [-180, 180]). */
  subsolarLng: number;
  /** Solar declination (degrees). */
  declination: number;
  /** Equation of time (minutes). */
  eotMinutes: number;
};

function fractionalYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const days = (date.getTime() - start) / 86400000;
  const hours = date.getUTCHours();
  return ((2 * Math.PI) / 365) * (days + (hours - 12) / 24);
}

function wrap180(lng: number): number {
  return ((((lng + 180) % 360) + 360) % 360) - 180;
}

/** Compute solar declination, equation of time, and the subsolar point. */
export function sunState(date: Date): SunState {
  const g = fractionalYear(date);

  const declination =
    (0.006918 -
      0.399912 * Math.cos(g) +
      0.070257 * Math.sin(g) -
      0.006758 * Math.cos(2 * g) +
      0.000907 * Math.sin(2 * g) -
      0.002697 * Math.cos(3 * g) +
      0.00148 * Math.sin(3 * g)) *
    R2D;

  const eotMinutes =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(g) -
      0.032077 * Math.sin(g) -
      0.014615 * Math.cos(2 * g) -
      0.040849 * Math.sin(2 * g));

  const utcHours =
    date.getUTCHours() +
    date.getUTCMinutes() / 60 +
    date.getUTCSeconds() / 3600;
  const subsolarLng = wrap180(15 * (12 - utcHours) - eotMinutes / 4);

  return { subsolarLat: declination, subsolarLng, declination, eotMinutes };
}

/** Sun altitude above the horizon (degrees) at the given observer location and instant. */
export function sunAltitude(lat: number, lng: number, date: Date): number {
  const { declination, eotMinutes } = sunState(date);
  const utcHours =
    date.getUTCHours() +
    date.getUTCMinutes() / 60 +
    date.getUTCSeconds() / 3600;
  const solarTime = utcHours + lng / 15 + eotMinutes / 60;
  const H = (solarTime - 12) * 15 * D2R;
  const phi = lat * D2R;
  const delta = declination * D2R;
  const sinAlt =
    Math.sin(phi) * Math.sin(delta) +
    Math.cos(phi) * Math.cos(delta) * Math.cos(H);
  return Math.asin(Math.max(-1, Math.min(1, sinAlt))) * R2D;
}

/** Sun azimuth (degrees clockwise from north) at the given observer location. */
export function sunAzimuth(lat: number, lng: number, date: Date): number {
  const { declination, eotMinutes } = sunState(date);
  const utcHours =
    date.getUTCHours() +
    date.getUTCMinutes() / 60 +
    date.getUTCSeconds() / 3600;
  const solarTime = utcHours + lng / 15 + eotMinutes / 60;
  const H = (solarTime - 12) * 15 * D2R;
  const phi = lat * D2R;
  const delta = declination * D2R;
  const sinAlt =
    Math.sin(phi) * Math.sin(delta) +
    Math.cos(phi) * Math.cos(delta) * Math.cos(H);
  const alt = Math.asin(Math.max(-1, Math.min(1, sinAlt)));
  const cosAz =
    (Math.sin(delta) - Math.sin(alt) * Math.sin(phi)) /
    (Math.cos(alt) * Math.cos(phi));
  let az = Math.acos(Math.max(-1, Math.min(1, cosAz))) * R2D;
  if (Math.sin(H) > 0) az = 360 - az;
  return az;
}

/** Latitudes of the day/night terminator, sampled once per `stepLng` degrees of longitude. */
export function terminator(date: Date, stepLng: number = 2): [number, number][] {
  const { declination, subsolarLng } = sunState(date);
  const delta = declination * D2R;
  if (Math.abs(delta) < 1e-4) return [];
  const pts: [number, number][] = [];
  for (let lng = -180; lng <= 180; lng += stepLng) {
    const h = (lng - subsolarLng) * D2R;
    const lat = Math.atan(-Math.cos(h) / Math.tan(delta)) * R2D;
    pts.push([lat, lng]);
  }
  return pts;
}

/** Closed polygon (lat,lng pairs) covering the night side of the Earth at this instant. */
export function nightPolygon(date: Date, stepLng: number = 2): [number, number][] {
  const state = sunState(date);
  const term = terminator(date, stepLng);
  if (term.length === 0) {
    // Equinox edge case: the terminator is two meridians. Fall back to a
    // half-world rectangle.
    const a = wrap180(state.subsolarLng + 90);
    const b = wrap180(state.subsolarLng - 90);
    return [
      [-85, a],
      [85, a],
      [85, b],
      [-85, b],
    ];
  }
  const darkPoleLat = state.declination > 0 ? -90 : 90;
  return [...term, [darkPoleLat, 180], [darkPoleLat, -180]];
}

export type SunEvents = {
  sunrise: Date | null;
  sunset: Date | null;
  /** True if the sun never rises that UTC day at this location. */
  polarNight: boolean;
  /** True if the sun never sets that UTC day at this location. */
  midnightSun: boolean;
};

/** Eight-point compass bearing labels (Swedish abbreviations). */
const COMPASS_SV = ["N", "NÖ", "Ö", "SÖ", "S", "SV", "V", "NV"] as const;
const COMPASS_FULL_SV = [
  "Norr",
  "Nordöst",
  "Öster",
  "Sydöst",
  "Söder",
  "Sydväst",
  "Väster",
  "Nordväst",
] as const;

/** Compass index for an azimuth (0..360, clockwise from north). */
function compassIndex(azimuth: number): number {
  const a = ((azimuth % 360) + 360) % 360;
  return Math.floor((a + 22.5) / 45) % 8;
}

export function azimuthCompass(azimuth: number): string {
  return COMPASS_SV[compassIndex(azimuth)];
}

export function azimuthCompassFull(azimuth: number): string {
  return COMPASS_FULL_SV[compassIndex(azimuth)];
}

/** Scan altitude over one UTC day to find sunrise & sunset. */
export function sunriseSunset(lat: number, lng: number, dateUTC: Date): SunEvents {
  const dayStart = Date.UTC(
    dateUTC.getUTCFullYear(),
    dateUTC.getUTCMonth(),
    dateUTC.getUTCDate(),
    0,
    0,
    0
  );
  const stepMin = 5;
  let prev = sunAltitude(lat, lng, new Date(dayStart));
  let minAlt = prev;
  let maxAlt = prev;
  let sunrise: Date | null = null;
  let sunset: Date | null = null;

  for (let m = stepMin; m <= 24 * 60; m += stepMin) {
    const t = dayStart + m * 60_000;
    const alt = sunAltitude(lat, lng, new Date(t));
    if (alt < minAlt) minAlt = alt;
    if (alt > maxAlt) maxAlt = alt;
    if (sunrise === null && prev < 0 && alt >= 0) {
      sunrise = new Date(t - (stepMin / 2) * 60_000);
    }
    if (sunset === null && prev >= 0 && alt < 0) {
      sunset = new Date(t - (stepMin / 2) * 60_000);
    }
    prev = alt;
  }

  return {
    sunrise,
    sunset,
    polarNight: maxAlt < 0,
    midnightSun: minAlt >= 0,
  };
}

export type PhotoWindow = { start: Date; end: Date };

export type PhotoWindows = {
  blueMorning: PhotoWindow | null;
  goldenMorning: PhotoWindow | null;
  goldenEvening: PhotoWindow | null;
  blueEvening: PhotoWindow | null;
};

/**
 * Find blue-hour and golden-hour windows for the given UTC day.
 *
 * Conventions used: blue hour is altitude in [-6°, -4°]; golden hour is
 * altitude in [-4°, +6°]. Each band is recorded once on the way up
 * (morning) and once on the way down (evening). At high latitudes one
 * or more windows may not exist on a given date.
 */
export function photoWindows(lat: number, lng: number, dateUTC: Date): PhotoWindows {
  const thresholds = [-6, -4, 6] as const;
  const crossings: Record<number, { rising: Date | null; falling: Date | null }> = {
    [-6]: { rising: null, falling: null },
    [-4]: { rising: null, falling: null },
    [6]: { rising: null, falling: null },
  };

  const dayStart = Date.UTC(
    dateUTC.getUTCFullYear(),
    dateUTC.getUTCMonth(),
    dateUTC.getUTCDate(),
    0,
    0,
    0
  );
  const stepMin = 2;
  let prev = sunAltitude(lat, lng, new Date(dayStart));

  for (let m = stepMin; m <= 24 * 60; m += stepMin) {
    const t = dayStart + m * 60_000;
    const alt = sunAltitude(lat, lng, new Date(t));
    const half = (stepMin / 2) * 60_000;
    for (const th of thresholds) {
      if (crossings[th].rising === null && prev < th && alt >= th) {
        crossings[th].rising = new Date(t - half);
      } else if (crossings[th].falling === null && prev >= th && alt < th) {
        crossings[th].falling = new Date(t - half);
      }
    }
    prev = alt;
  }

  const window = (a: Date | null, b: Date | null): PhotoWindow | null =>
    a && b && a.getTime() < b.getTime() ? { start: a, end: b } : null;

  return {
    blueMorning: window(crossings[-6].rising, crossings[-4].rising),
    goldenMorning: window(crossings[-4].rising, crossings[6].rising),
    goldenEvening: window(crossings[6].falling, crossings[-4].falling),
    blueEvening: window(crossings[-4].falling, crossings[-6].falling),
  };
}
