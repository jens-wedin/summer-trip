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

/**
 * Pure: turn the glob result (path → url) plus optional captions into a sorted
 * list of photos. Newest first (descending file name — iPhone IMG_#### numbers
 * increase over time). Kept pure so it can be unit-tested without Vite.
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
    .sort((a, b) => b.filename.localeCompare(a.filename));
}

// Build-time discovery: drop an image into src/photos/ and it appears here.
const modules = import.meta.glob("../photos/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const tripPhotos: Photo[] = buildPhotoList(modules, photoCaptions);
