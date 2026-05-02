import { Link, useParams } from "react-router-dom";
import { trip } from "../data/trip";
import { RouteMap } from "../components/RouteMap";
import { Checklist } from "../components/Checklist";

export function DayPage() {
  const { id } = useParams<{ id: string }>();
  const dayId = Number(id);
  const day = trip.days.find((d) => d.id === dayId);

  if (!day) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="kicker">Page Not Found</p>
        <h2 className="headline text-3xl mt-3">No such dispatch</h2>
        <Link to="/itinerary" className="kicker ink-link mt-4 inline-block">
          ← Back to itinerary
        </Link>
      </div>
    );
  }

  const prev = trip.days.find((d) => d.id === dayId - 1);
  const next = trip.days.find((d) => d.id === dayId + 1);
  const restDay = day.from.id === day.to.id;

  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <nav className="flex items-center justify-between py-3 border-b border-ink">
        {prev ? (
          <Link to={`/day/${prev.id}`} className="kicker ink-link">
            ← Day {prev.id}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link to="/itinerary" className="kicker">
          The Itinerary
        </Link>
        {next ? (
          <Link to={`/day/${next.id}`} className="kicker ink-link">
            Day {next.id}: {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <header className="text-center py-8 border-b border-ink">
        <p className="kicker">{day.kicker}</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          {day.title}
        </h2>
        <p className="deck text-lg md:text-xl mt-3 max-w-2xl mx-auto">
          {day.from.name}
          {restDay ? " · A non-driving day" : ` → ${day.to.name}`}
          {day.drivingKm > 0 && ` · ${day.drivingKm} km · ${day.drivingDuration}`}
        </p>
        <p className="byline mt-3">{day.date}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
        <main className="lg:col-span-8 lg:border-r lg:border-ink lg:pr-10">
          <img
            src={day.images[0].src}
            alt={day.images[0].caption ?? ""}
            className="w-full h-72 md:h-[420px] object-cover border border-ink"
          />
          <p className="byline italic mt-2">
            {day.images[0].caption}
            {day.images[0].credit && ` — ${day.images[0].credit}`}
          </p>

          <div className="body-prose mt-6">
            <p className="drop-cap">{day.story[0]}</p>
            {day.pullQuote && (
              <blockquote className="pull-quote my-6 border-l-2 border-ink pl-5">
                “{day.pullQuote}”
              </blockquote>
            )}
            {day.story.slice(1).map((p, i) => (
              <p key={i} className="mt-4">
                {p}
              </p>
            ))}
          </div>

          {day.images.length > 1 && (
            <section className="mt-8">
              <p className="kicker">From the Photographer's Bag</p>
              <hr className="rule mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {day.images.slice(1).map((img, i) => (
                  <figure key={i}>
                    <img
                      src={img.src}
                      alt={img.caption ?? ""}
                      className="w-full h-56 object-cover border border-ink"
                    />
                    <figcaption className="byline italic mt-1">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="lg:col-span-4 space-y-8">
          <section>
            <p className="kicker">The Route</p>
            <hr className="rule mt-2 mb-3" />
            <RouteMap days={trip.days} highlightDayId={day.id} height={260} />
            <dl className="grid grid-cols-2 gap-y-2 mt-3">
              <Stat label="From" value={day.from.name} />
              <Stat label="To" value={day.to.name} />
              <Stat
                label="Distance"
                value={day.drivingKm === 0 ? "—" : `${day.drivingKm} km`}
              />
              <Stat label="Time" value={day.drivingDuration} />
            </dl>
            {day.waypoints && day.waypoints.length > 0 && (
              <div className="mt-3">
                <p className="kicker text-muted">Via</p>
                <p className="font-serif text-[15px]">
                  {day.waypoints.map((w) => w.name).join(" · ")}
                </p>
              </div>
            )}
          </section>

          {day.lodging && (
            <section>
              <p className="kicker">Lodging</p>
              <hr className="rule mt-2 mb-3" />
              <p className="font-serif text-lg">{day.lodging.name}</p>
              {day.lodging.address && (
                <p className="byline mt-1">{day.lodging.address}</p>
              )}
            </section>
          )}

          <Checklist
            initial={day.checklist}
            storageKey={`day-${day.id}-checklist`}
            title="Day's Checklist"
          />
        </aside>
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-ink/20 pb-2">
      <dt className="kicker text-muted">{label}</dt>
      <dd className="font-serif text-[15px] mt-1">{value}</dd>
    </div>
  );
}
