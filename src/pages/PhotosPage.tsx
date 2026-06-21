import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { tripPhotos } from "../lib/photos";
import { Lightbox } from "../components/Lightbox";

// Deterministic bento rhythm: a few tiles span larger so the grid looks
// composed at any count (grid-flow-dense backfills the gaps).
function bentoSpan(i: number): string {
  const m = i % 7;
  if (m === 0) return "col-span-2 row-span-2";
  if (m === 3) return "col-span-2";
  if (m === 5) return "row-span-2";
  return "";
}

export function PhotosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const close = () => {
    const i = openIndex;
    setOpenIndex(null);
    // Restore focus to the tile that opened the lightbox.
    if (i != null) requestAnimationFrame(() => tileRefs.current[i]?.focus());
  };

  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Avdelning B · Bilder</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          Resealbumet
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Ögonblick längs vägen, de senaste först. Klicka på ett foto för att se
          det i fullstorlek.
        </p>
        <p className="byline mt-3">
          {tripPhotos.length} {tripPhotos.length === 1 ? "bild" : "bilder"} hittills
        </p>
      </header>

      {tripPhotos.length === 0 ? (
        <div className="py-16 text-center">
          <p className="kicker text-muted">Inga bilder ännu</p>
          <p className="font-serif text-[15px] mt-3 max-w-md mx-auto">
            Lägg foton i <code>src/photos/</code> så dyker de upp här efter nästa
            publicering.
          </p>
        </div>
      ) : (
        <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
          {tripPhotos.map((photo, i) => (
            <button
              key={photo.id}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Visa stort: ${photo.alt}`}
              className={`group relative block overflow-hidden border border-ink bg-paperDark focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${bentoSpan(i)}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {photo.caption && (
                <span className="absolute inset-x-0 bottom-0 bg-ink/70 text-paper font-serif text-[13px] px-2 py-1 text-left opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {photo.caption}
                </span>
              )}
            </button>
          ))}
        </section>
      )}

      {openIndex !== null && (
        <Lightbox
          photos={tripPhotos}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      )}

      <nav className="mt-12 pt-6 border-t-[3px] border-double border-ink flex flex-col md:flex-row items-center justify-between gap-3">
        <Link to="/itinerary" className="kicker ink-link">
          ← Hela reseplanen
        </Link>
        <Link to="/" className="kicker ink-link">
          Förstasidan
        </Link>
        <Link to="/map" className="kicker ink-link">
          Reskartan →
        </Link>
      </nav>
    </article>
  );
}
