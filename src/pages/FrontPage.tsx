import { Link } from "react-router-dom";
import { trip } from "../data/trip";
import { RouteMap } from "../components/RouteMap";

export function FrontPage() {
  const lead = trip.days[0];
  const featured = [trip.days[2], trip.days[8], trip.days[10]];
  const minor = [trip.days[4], trip.days[6], trip.days[12]];

  return (
    <article className="max-w-6xl mx-auto px-6 pb-12">
      <div className="text-center pt-6 pb-3">
        <p className="kicker">The Summer Roadtrip Issue · Special Pull-out</p>
        <h2 className="headline text-4xl md:text-6xl mt-4 mb-3">
          {trip.title}
        </h2>
        <p className="deck text-lg md:text-2xl max-w-3xl mx-auto">
          {trip.subtitle}
        </p>
        <p className="byline mt-3">
          {trip.byline} · {trip.dateline}
        </p>
      </div>

      <hr className="rule my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lead column */}
        <section className="lg:col-span-7 lg:border-r lg:border-ink lg:pr-8">
          <p className="kicker">Above the Fold · Day One</p>
          <h3 className="headline text-3xl md:text-5xl mt-2 mb-3 leading-[1.05]">
            <Link to={`/day/${lead.id}`} className="hover:text-accent">
              {lead.title}
            </Link>
          </h3>
          <p className="deck text-lg mb-4">
            The expedition pushes off from the capital under high pressure and
            higher hopes; a short first leg by design.
          </p>
          <img
            src={lead.images[0].src}
            alt={lead.images[0].caption ?? ""}
            className="w-full h-72 md:h-96 object-cover border border-ink"
          />
          <p className="byline mt-2 italic">
            {lead.images[0].caption} {lead.images[0].credit && `— ${lead.images[0].credit}`}
          </p>
          <div className="body-prose mt-5 columns-1 md:columns-2 gap-8">
            <p className="drop-cap">{lead.story[0]}</p>
            {lead.story.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-5">
            <Link to={`/day/${lead.id}`} className="kicker ink-link">
              Continue reading Day One →
            </Link>
          </p>
        </section>

        {/* Right rail */}
        <aside className="lg:col-span-5 space-y-8">
          <div>
            <p className="kicker mb-2">By the Numbers</p>
            <hr className="rule mb-3" />
            <dl className="grid grid-cols-2 gap-y-3">
              <Stat label="Days on the road" value={String(trip.totalDays)} />
              <Stat label="Total kilometres" value={trip.totalKm.toLocaleString()} />
              <Stat label="Countries traversed" value={String(trip.countries.length)} />
              <Stat label="Ferry crossings" value="2" />
              <Stat label="Capital cities" value="5" />
              <Stat label="Cathedrals planned" value="6" />
            </dl>
          </div>

          <div>
            <p className="kicker mb-2">The Route, in Brief</p>
            <hr className="rule mb-3" />
            <RouteMap days={trip.days} height={300} />
            <p className="byline mt-2 italic">
              A continental loop: {trip.countries.join(", ")}.
            </p>
          </div>

          <div>
            <p className="kicker mb-2">Inside This Issue</p>
            <hr className="rule mb-3" />
            <ul className="space-y-3">
              {featured.map((d) => (
                <li key={d.id}>
                  <Link
                    to={`/day/${d.id}`}
                    className="block group"
                  >
                    <p className="kicker text-muted">{d.kicker}</p>
                    <p className="headline text-xl group-hover:text-accent">
                      {d.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <hr className="double-rule my-10" />

      <section>
        <p className="kicker text-center">Also in This Edition</p>
        <h3 className="headline text-center text-3xl mt-2 mb-6">
          Dispatches from the Road
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-ink/40">
          {minor.map((d) => (
            <Link
              key={d.id}
              to={`/day/${d.id}`}
              className="md:px-4 group"
            >
              <img
                src={d.images[0].src}
                alt={d.images[0].caption ?? ""}
                className="w-full h-44 object-cover border border-ink mb-3"
              />
              <p className="kicker">{d.kicker}</p>
              <p className="headline text-xl mt-1 mb-2 group-hover:text-accent">
                {d.title}
              </p>
              <p className="body-prose text-[15px]">
                {d.story[0].slice(0, 140)}…
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-ink/30 pb-2">
      <dt className="kicker text-muted">{label}</dt>
      <dd className="masthead text-3xl mt-1">{value}</dd>
    </div>
  );
}
