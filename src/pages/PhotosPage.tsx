import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { tripPhotos, groupPhotosByDate } from "../lib/photos";
import { trip } from "../data/trip";
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

// "onsdag 1 juli" / "1 juli" → "1 juli" — a shared key to line photo dates up
// with the authoritative trip days (which prefix the weekday).
function dayMonthKey(s: string): string {
  const m = /(\d{1,2})\s+([a-zA-ZåäöÅÄÖ]+)/.exec(s);
  return m ? `${m[1]} ${m[2].toLowerCase()}` : "";
}

// Date → the day's route, straight from the trip data: "1 juli" →
// "Paris → Roermond"; a day that starts and ends in the same town → "Paris".
const routeByDate: Record<string, string> = Object.fromEntries(
  trip.days.map((d) => [
    dayMonthKey(d.date),
    d.from.name === d.to.name ? d.from.name : `${d.from.name} → ${d.to.name}`,
  ]),
);

const photoGroups = groupPhotosByDate(tripPhotos);

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
        photoGroups.map((group) => {
          const route = group.date ? routeByDate[group.date] : undefined;
          const count = group.items.length;
          const unit = count === 1 ? "bild" : "bilder";
          const visibleHeading = route ? `${group.date} · ${route}` : group.date ?? "Odaterat";
          // Screen-reader name: spell out the route arrow and fold in the count.
          const srRoute = route
            ? `${group.date}, ${route.replace(/ → /g, " till ")}`
            : group.date ?? "Odaterade bilder";
          const headingId = `grupp-${group.key}`;

          return (
            <section
              key={group.key}
              aria-labelledby={headingId}
              className="mt-10 first:mt-8 scroll-mt-4"
            >
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-2 mb-3">
                <h3
                  id={headingId}
                  aria-label={`${srRoute}, ${count} ${unit}`}
                  className="headline text-2xl md:text-3xl leading-tight"
                >
                  <span aria-hidden="true">{visibleHeading}</span>
                </h3>
                <span aria-hidden="true" className="byline whitespace-nowrap">
                  {count} {unit}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[200px] grid-flow-dense">
                {group.items.map(({ photo, index }, j) => (
                  <button
                    key={photo.id}
                    ref={(el) => {
                      tileRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`Visa stort: ${photo.alt}`}
                    className={`group relative block overflow-hidden border border-ink bg-paperDark focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${bentoSpan(j)}`}
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
              </div>
            </section>
          );
        })
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
