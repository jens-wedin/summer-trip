import { describe, it, expect } from "vitest";
import { buildPhotoList } from "./photos";

// Shape returned by import.meta.glob(..., { eager: true, query: "?url", import: "default" })
const entries: Record<string, string> = {
  "../photos/IMG_0648.jpeg": "/assets/IMG_0648.abc.jpeg",
  "../photos/IMG_0650.jpeg": "/assets/IMG_0650.def.jpeg",
};

describe("buildPhotoList", () => {
  it("returns one photo per file, carrying filename + resolved src", () => {
    const photos = buildPhotoList(entries, {});
    expect(photos).toHaveLength(2);
    expect([...photos.map((p) => p.filename)].sort()).toEqual([
      "IMG_0648.jpeg",
      "IMG_0650.jpeg",
    ]);
    const p = photos.find((x) => x.filename === "IMG_0648.jpeg")!;
    expect(p.src).toBe("/assets/IMG_0648.abc.jpeg");
    expect(p.id).toBe("IMG_0648.jpeg");
  });

  it("sorts newest-first (descending file name)", () => {
    const photos = buildPhotoList(entries, {});
    expect(photos.map((p) => p.filename)).toEqual([
      "IMG_0650.jpeg",
      "IMG_0648.jpeg",
    ]);
  });

  it("merges caption / date / place by file name", () => {
    const photos = buildPhotoList(entries, {
      "IMG_0648.jpeg": { caption: "Vandalorum", place: "Värnamo", date: "21 juni" },
    });
    const p = photos.find((x) => x.filename === "IMG_0648.jpeg")!;
    expect(p.caption).toBe("Vandalorum");
    expect(p.place).toBe("Värnamo");
    expect(p.date).toBe("21 juni");
  });

  it("uses the caption as alt text when present", () => {
    const photos = buildPhotoList(entries, {
      "IMG_0648.jpeg": { caption: "Vandalorum" },
    });
    expect(photos.find((x) => x.filename === "IMG_0648.jpeg")!.alt).toBe("Vandalorum");
  });

  it("falls back to place, then a generic alt, when no caption", () => {
    const photos = buildPhotoList(entries, {
      "IMG_0650.jpeg": { place: "Värnamo" },
    });
    expect(photos.find((x) => x.filename === "IMG_0650.jpeg")!.alt).toBe(
      "Foto från Värnamo",
    );
    expect(photos.find((x) => x.filename === "IMG_0648.jpeg")!.alt).toMatch(/^Foto/);
  });

  it("returns an empty array when there are no photos", () => {
    expect(buildPhotoList({}, {})).toEqual([]);
  });
});
