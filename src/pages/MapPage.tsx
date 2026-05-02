import { Link } from "react-router-dom";
import { trip } from "../data/trip";
import { RouteMap } from "../components/RouteMap";

export function MapPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <div className="text-center py-6">
        <p className="kicker">Section C · Cartography</p>
        <h2 className="headline text-4xl md:text-5xl mt-3">
          The Route, in Full
        </h2>
        <p className="deck text-lg max-w-2xl mx-auto mt-2">
          A continental loop through {trip.countries.length} countries —{" "}
          {trip.countries.join(", ")}.
        </p>
      </div>

      <hr className="rule my-4" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9">
          <RouteMap days={trip.days} height={620} />
          <p className="byline italic mt-2">
            Map tiles: OpenStreetMap contributors. Route line is indicative; actual
            roadways may diverge.
          </p>
        </div>
        <aside className="lg:col-span-3">
          <p className="kicker">Stops on the Tour</p>
          <hr className="rule mt-2 mb-3" />
          <ol className="space-y-2">
            {trip.days.map((d) => (
              <li
                key={d.id}
                className="flex items-baseline gap-3 border-b border-ink/20 pb-2"
              >
                <span className="kicker text-muted w-6">
                  {String(d.id).padStart(2, "0")}
                </span>
                <Link
                  to={`/day/${d.id}`}
                  className="font-serif text-[15px] ink-link"
                >
                  {d.from.id === d.to.id
                    ? d.to.name
                    : `${d.from.name} → ${d.to.name}`}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </article>
  );
}
