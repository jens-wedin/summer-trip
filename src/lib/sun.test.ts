import { describe, it, expect } from "vitest";
import {
  azimuthCompass,
  azimuthCompassFull,
  nightPolygon,
  photoWindows,
  sunAltitude,
  sunriseSunset,
  sunState,
  terminator,
} from "./sun";

describe("sunState", () => {
  it("puts the subsolar point near the Tropic of Cancer at June solstice noon UTC", () => {
    const s = sunState(new Date("2026-06-21T12:00:00Z"));
    expect(s.declination).toBeGreaterThan(23);
    expect(s.declination).toBeLessThan(23.6);
    // Around solar noon at Greenwich, the subsolar longitude is within a few
    // degrees of 0 (offset is just the equation of time).
    expect(Math.abs(s.subsolarLng)).toBeLessThan(5);
  });

  it("puts the subsolar point near the Tropic of Capricorn at December solstice", () => {
    const s = sunState(new Date("2026-12-21T12:00:00Z"));
    expect(s.declination).toBeLessThan(-23);
    expect(s.declination).toBeGreaterThan(-23.6);
  });

  it("moves the subsolar longitude by ~15° per UTC hour", () => {
    const noon = sunState(new Date("2026-06-21T12:00:00Z"));
    const oneLater = sunState(new Date("2026-06-21T13:00:00Z"));
    expect(noon.subsolarLng - oneLater.subsolarLng).toBeGreaterThan(14.8);
    expect(noon.subsolarLng - oneLater.subsolarLng).toBeLessThan(15.2);
  });
});

describe("sunAltitude", () => {
  it("is near zenith at the subsolar point", () => {
    const date = new Date("2026-06-21T12:00:00Z");
    const s = sunState(date);
    const alt = sunAltitude(s.subsolarLat, s.subsolarLng, date);
    expect(alt).toBeGreaterThan(89);
  });

  it("is below the horizon on the antisolar side", () => {
    const date = new Date("2026-06-21T12:00:00Z");
    const s = sunState(date);
    const antiLng = ((s.subsolarLng + 180 + 540) % 360) - 180;
    const alt = sunAltitude(-s.subsolarLat, antiLng, date);
    expect(alt).toBeLessThan(-89);
  });
});

describe("terminator / nightPolygon", () => {
  it("samples the full longitude range", () => {
    const pts = terminator(new Date("2026-06-21T12:00:00Z"), 5);
    expect(pts.length).toBeGreaterThan(60);
    expect(pts[0][1]).toBe(-180);
    expect(pts[pts.length - 1][1]).toBe(180);
  });

  it("closes the night polygon over the antarctic in June", () => {
    const poly = nightPolygon(new Date("2026-06-21T12:00:00Z"), 5);
    const last = poly[poly.length - 1];
    expect(last[0]).toBe(-90);
  });
});

describe("sunriseSunset", () => {
  it("finds midnight sun above the Arctic Circle in June", () => {
    const r = sunriseSunset(78, 20, new Date("2026-06-21T00:00:00Z"));
    expect(r.midnightSun).toBe(true);
    expect(r.sunrise).toBeNull();
    expect(r.sunset).toBeNull();
  });

  it("finds polar night below the Antarctic Circle in June", () => {
    const r = sunriseSunset(-78, 20, new Date("2026-06-21T00:00:00Z"));
    expect(r.polarNight).toBe(true);
  });

  it("returns sunrise before sunset for Stockholm at solstice", () => {
    const r = sunriseSunset(59.33, 18.07, new Date("2026-06-21T00:00:00Z"));
    expect(r.sunrise).not.toBeNull();
    expect(r.sunset).not.toBeNull();
    expect(r.sunrise!.getTime()).toBeLessThan(r.sunset!.getTime());
  });
});

describe("azimuthCompass", () => {
  it("maps cardinal directions", () => {
    expect(azimuthCompass(0)).toBe("N");
    expect(azimuthCompass(90)).toBe("Ö");
    expect(azimuthCompass(180)).toBe("S");
    expect(azimuthCompass(270)).toBe("V");
    expect(azimuthCompass(360)).toBe("N");
  });

  it("maps the intercardinals", () => {
    expect(azimuthCompass(45)).toBe("NÖ");
    expect(azimuthCompass(135)).toBe("SÖ");
    expect(azimuthCompass(225)).toBe("SV");
    expect(azimuthCompass(315)).toBe("NV");
  });

  it("rounds to the nearest 45° bucket", () => {
    expect(azimuthCompass(22)).toBe("N");
    expect(azimuthCompass(23)).toBe("NÖ");
    expect(azimuthCompassFull(181)).toBe("Söder");
  });
});

describe("photoWindows", () => {
  it("finds all four windows at mid-latitude on solstice", () => {
    const w = photoWindows(48.74, -0.71, new Date("2026-06-21T00:00:00Z"));
    expect(w.blueMorning).not.toBeNull();
    expect(w.goldenMorning).not.toBeNull();
    expect(w.goldenEvening).not.toBeNull();
    expect(w.blueEvening).not.toBeNull();
  });

  it("orders the morning windows: blue before golden, both before noon", () => {
    const w = photoWindows(48.74, -0.71, new Date("2026-06-21T00:00:00Z"));
    expect(w.blueMorning!.start.getTime()).toBeLessThan(w.blueMorning!.end.getTime());
    expect(w.blueMorning!.end.getTime()).toBeLessThanOrEqual(
      w.goldenMorning!.start.getTime()
    );
    expect(w.goldenMorning!.end.getTime()).toBeLessThan(
      w.goldenEvening!.start.getTime()
    );
  });

  it("returns no windows where the sun stays well above the horizon all day", () => {
    const w = photoWindows(78, 20, new Date("2026-06-21T00:00:00Z"));
    expect(w.blueMorning).toBeNull();
    expect(w.blueEvening).toBeNull();
    expect(w.goldenMorning).toBeNull();
    expect(w.goldenEvening).toBeNull();
  });
});
