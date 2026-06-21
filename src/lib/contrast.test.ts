import { describe, it, expect } from "vitest";
import { contrastRatio, readableTextColor } from "./contrast";

describe("contrastRatio", () => {
  it("is 21 for black on white", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21, 0);
  });

  it("is 1 for identical colors", () => {
    expect(contrastRatio("#a06a30", "#a06a30")).toBeCloseTo(1, 5);
  });

  it("is symmetric regardless of argument order", () => {
    expect(contrastRatio("#94612b", "#fdfaf3")).toBeCloseTo(
      contrastRatio("#fdfaf3", "#94612b"),
      5,
    );
  });
});

describe("readableTextColor", () => {
  it("picks light paper text on dark backgrounds (light-theme swatches)", () => {
    expect(readableTextColor("#1a3a5a")).toBe("#fdfaf3"); // museums
  });

  it("picks dark ink text on light backgrounds (dark-theme swatches)", () => {
    expect(readableTextColor("#d4a070")).toBe("#1a1a1a"); // cafes, dark theme
  });

  it("keeps the darkened café swatch readable with its chosen text (>= 4.5:1)", () => {
    const bg = "#94612b";
    expect(contrastRatio(readableTextColor(bg), bg)).toBeGreaterThanOrEqual(4.5);
  });

  it("keeps every dark-theme category swatch readable (>= 4.5:1)", () => {
    const darkSwatches = [
      "#7ba88a", "#7a9bb8", "#d4a070", "#d97a5a", "#b88ab8", "#c8a85a", "#a89880",
    ];
    for (const bg of darkSwatches) {
      expect(contrastRatio(readableTextColor(bg), bg)).toBeGreaterThanOrEqual(4.5);
    }
  });
});
