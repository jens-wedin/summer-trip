import { photoCaptions, type PhotoCaption } from "../data/photoCaptions";

export type Photo = {
  id: string;
  filename: string;
  src: string;
  caption?: string;
  date?: string;
  place?: string;
  /** Always populated — caption, else place, else a generic fallback. */
  alt: string;
};

function basename(path: string): string {
  return path.split("/").pop() ?? path;
}

const SV_MONTHS: Record<string, number> = {
  januari: 1, februari: 2, mars: 3, april: 4, maj: 5, juni: 6,
  juli: 7, augusti: 8, september: 9, oktober: 10, november: 11, december: 12,
};

/**
 * Parse a Swedish "D månad" caption date (e.g. "2 juli") into a sortable
 * month*100 + day number. Returns 0 for missing / unparseable dates so they
 * sort last. Year is implied (single-summer trip), so month+day is enough.
 */
export function dateKey(date?: string): number {
  if (!date) return 0;
  const m = /^(\d{1,2})\s+([a-zA-ZåäöÅÄÖ]+)/.exec(date.trim());
  if (!m) return 0;
  const month = SV_MONTHS[m[2].toLowerCase()] ?? 0;
  return month ? month * 100 + Number(m[1]) : 0;
}

/**
 * Pure: turn the glob result (path → url) plus optional captions into a sorted
 * list of photos. Newest first by caption date; file name (descending) is only
 * a tiebreaker within the same day, since photos from different phones don't
 * share a comparable IMG_#### sequence. Kept pure so it's unit-testable.
 */
export function buildPhotoList(
  entries: Record<string, string>,
  captions: Record<string, PhotoCaption>,
): Photo[] {
  return Object.entries(entries)
    .map(([path, src]) => {
      const filename = basename(path);
      const meta = captions[filename] ?? {};
      const alt =
        meta.caption ?? (meta.place ? `Foto från ${meta.place}` : "Foto från sommarresan");
      return { id: filename, filename, src, ...meta, alt } satisfies Photo;
    })
    .sort((a, b) => dateKey(b.date) - dateKey(a.date) || b.filename.localeCompare(a.filename));
}

export type PhotoGroup = {
  /** DOM-safe key derived from the shared date (or index for undated). */
  key: string;
  /** Swedish "D månad" caption date shared by every photo in the group. */
  date?: string;
  /**
   * Photos in display order, each carrying its index into the flat source
   * list — so the flat-indexed lightbox keeps navigating across group borders.
   */
  items: { photo: Photo; index: number }[];
};

/**
 * Split an already-sorted photo list into consecutive same-date groups. Relies
 * on buildPhotoList's date-first sort, so every photo from one day is adjacent
 * and becomes a single group. Pure, so it's unit-testable.
 */
export function groupPhotosByDate(photos: Photo[]): PhotoGroup[] {
  const groups: PhotoGroup[] = [];
  photos.forEach((photo, index) => {
    const prev = groups[groups.length - 1];
    if (prev && prev.date === photo.date) {
      prev.items.push({ photo, index });
    } else {
      const key = (photo.date ?? `odaterad-${index}`).replace(/\s+/g, "-");
      groups.push({ key, date: photo.date, items: [{ photo, index }] });
    }
  });
  return groups;
}

// Build-time discovery: drop an image into src/photos/ and it appears here.
const modules = import.meta.glob("../photos/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const tripPhotos: Photo[] = buildPhotoList(modules, photoCaptions);
