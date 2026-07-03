import { describe, it, expect } from "vitest";
import { buildPhotoList, groupPhotosByDate } from "./photos";

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

  it("falls back to descending file name when dates are absent or equal", () => {
    const photos = buildPhotoList(entries, {});
    expect(photos.map((p) => p.filename)).toEqual([
      "IMG_0650.jpeg",
      "IMG_0648.jpeg",
    ]);
  });

  it("sorts by caption date (newest first), regardless of file name", () => {
    // Real-world case: an evening photo from a second phone (IMG_88##, 29 juni)
    // must NOT sort above later days just because '8' > '1' in the file name.
    const mixed: Record<string, string> = {
      "../photos/IMG_8834.jpeg": "/assets/8834.jpg",
      "../photos/IMG_1185.jpeg": "/assets/1185.jpg",
      "../photos/IMG_1022.jpeg": "/assets/1022.jpg",
    };
    const photos = buildPhotoList(mixed, {
      "IMG_8834.jpeg": { date: "29 juni" },
      "IMG_1185.jpeg": { date: "2 juli" },
      "IMG_1022.jpeg": { date: "28 juni" },
    });
    expect(photos.map((p) => p.filename)).toEqual([
      "IMG_1185.jpeg", // 2 juli — newest day
      "IMG_8834.jpeg", // 29 juni
      "IMG_1022.jpeg", // 28 juni
    ]);
  });

  it("orders same-day photos by descending file name (latest capture first)", () => {
    const sameDay: Record<string, string> = {
      "../photos/IMG_1046.jpeg": "/assets/1046.jpg",
      "../photos/IMG_8834.jpeg": "/assets/8834.jpg",
    };
    const photos = buildPhotoList(sameDay, {
      "IMG_1046.jpeg": { date: "29 juni" },
      "IMG_8834.jpeg": { date: "29 juni" },
    });
    expect(photos.map((p) => p.filename)).toEqual([
      "IMG_8834.jpeg",
      "IMG_1046.jpeg",
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

describe("groupPhotosByDate", () => {
  const photo = (filename: string, date?: string) =>
    ({ id: filename, filename, src: `/${filename}`, date, alt: filename }) as const;

  it("groups consecutive same-date photos and preserves the flat index", () => {
    const groups = groupPhotosByDate([
      photo("a.jpeg", "2 juli"),
      photo("b.jpeg", "2 juli"),
      photo("c.jpeg", "1 juli"),
    ]);
    expect(groups.map((g) => g.date)).toEqual(["2 juli", "1 juli"]);
    expect(groups[0].items).toEqual([
      { photo: photo("a.jpeg", "2 juli"), index: 0 },
      { photo: photo("b.jpeg", "2 juli"), index: 1 },
    ]);
    // The lightbox is flat-indexed, so c.jpeg must keep its global index 2.
    expect(groups[1].items).toEqual([{ photo: photo("c.jpeg", "1 juli"), index: 2 }]);
  });

  it("gives each group a DOM-safe key from its date", () => {
    const groups = groupPhotosByDate([photo("a.jpeg", "1 juli")]);
    expect(groups[0].key).toBe("1-juli");
  });

  it("collects undated photos into a single trailing group", () => {
    const groups = groupPhotosByDate([
      photo("a.jpeg", "1 juli"),
      photo("b.jpeg"),
      photo("c.jpeg"),
    ]);
    expect(groups).toHaveLength(2);
    expect(groups[1].date).toBeUndefined();
    expect(groups[1].items.map((i) => i.index)).toEqual([1, 2]);
  });

  it("returns no groups for an empty list", () => {
    expect(groupPhotosByDate([])).toEqual([]);
  });
});
