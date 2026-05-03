import { Link } from "react-router-dom";
import { trip } from "../data/trip";

export function Itinerary() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-12">
      <div className="text-center py-6">
        <p className="kicker">Avdelning B · Reseplanen</p>
        <h2 className="headline text-4xl md:text-5xl mt-3">
          Ett program dag för dag
        </h2>
        <p className="deck text-lg max-w-2xl mx-auto mt-2">
          Fjorton dagar i rad, kartlagda, uppmätta och mestadels inom en dags körning från ett anständigt kafé.
        </p>
      </div>
      <hr className="double-rule my-4" />

      <ol className="divide-y divide-ink/40">
        {trip.days.map((d) => (
          <li key={d.id} className="py-6 grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-2">
              <p className="kicker">Dag {String(d.id).padStart(2, "0")}</p>
              <p className="masthead text-4xl mt-1 leading-none">
                {d.id < 10 ? `0${d.id}` : d.id}
              </p>
              <p className="byline mt-2">{d.date}</p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <p className="kicker text-muted">{d.kicker}</p>
              <h3 className="headline text-2xl md:text-3xl mt-1">
                <Link to={`/day/${d.id}`} className="hover:text-accent">
                  {d.title}
                </Link>
              </h3>
              <p className="body-prose mt-2 text-[16px]">
                {d.story[0].slice(0, 220)}
                {d.story[0].length > 220 ? "…" : ""}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:border-l md:border-ink/30 md:pl-5">
              <Stat label="Från" value={d.from.name} />
              <Stat label="Till" value={d.to.name} />
              <Stat
                label="Sträcka"
                value={d.drivingKm === 0 ? "—" : `${d.drivingKm} km`}
              />
              <Stat label="Tid" value={d.drivingDuration} />
              <Link
                to={`/day/${d.id}`}
                className="kicker ink-link inline-block mt-3"
              >
                Läs rapport →
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline gap-3 py-1 border-b border-ink/20">
      <span className="kicker text-muted">{label}</span>
      <span className="font-serif text-[15px]">{value}</span>
    </div>
  );
}
