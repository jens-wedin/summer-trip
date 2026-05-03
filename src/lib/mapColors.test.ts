import { describe, it, expect } from "vitest";
import { mapColors } from "./mapColors";

describe("mapColors", () => {
  it("returns the dark palette", () => {
    const c = mapColors("dark");
    expect(c.route).toBe("#d97a5a");
    expect(c.routeAlt).toBe("#b8a888");
    expect(c.marker).toBe("#f0e6d2");
    expect(c.markerStroke).toBe("#1c1812");
    expect(c.label).toBe("#f0e6d2");
    expect(c.labelBg).toBe("rgba(28, 24, 18, 0.9)");
  });

  it("returns the light palette", () => {
    const c = mapColors("light");
    expect(c.route).toBe("#8b1a1a");
    expect(c.routeAlt).toBe("#5a5650");
    expect(c.marker).toBe("#1a1a1a");
    expect(c.markerStroke).toBe("#f4efe4");
    expect(c.label).toBe("#1a1a1a");
    expect(c.labelBg).toBe("rgba(244, 239, 228, 0.9)");
  });
});
