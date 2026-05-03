import { Link } from "react-router-dom";
import {
  drinkStops,
  drinksQuickReference,
  drinksUnmissables,
  type Brewery,
  type DrinkStop,
} from "../data/drinks";

const calloutStyle = {
  tradition: { kicker: "Tradition", cls: "border-amber-700 bg-amber-50/40 text-amber-900" },
  tip: { kicker: "Tip", cls: "border-ink/40 bg-paper/40" },
  must: { kicker: "Must Try", cls: "border-accent bg-accent/5" },
} as const;

export function DrinksPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Section D · Beer & Wine</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          🍺 The Drinks Trail 🍷
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Two weeks across some of Europe's most distinctive and protected drinking
          cultures — Kölsch, the bolleke, Trappist ales, Norman cider and calvados,
          and Paris natural wine. What to drink, what to order by name, and where.
        </p>
      </header>

      {/* TOC */}
      <nav aria-label="Drink stops" className="border-b border-ink py-4">
        <p className="kicker text-center mb-3">Stop by Stop</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {drinkStops.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="kicker ink-link">
                {s.flag} {s.region}
              </a>
            </li>
          ))}
          <li><a href="#unmissables" className="kicker ink-link">🏆 Unmissables</a></li>
          <li><a href="#quick-ref" className="kicker ink-link">Quick Reference</a></li>
        </ul>
      </nav>

      {/* The Five Unmissables */}
      <section
        id="unmissables"
        className="py-10 border-b border-ink/40 scroll-mt-24"
      >
        <p className="kicker">Section D · The Five</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          🏆 The Five Unmissables on This Route
        </h3>
        <hr className="rule mt-4 mb-5" />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {drinksUnmissables.map((u) => (
            <li key={u.rank} className="border border-ink p-5 flex flex-col">
              <span className="masthead text-5xl text-accent leading-none">
                {String(u.rank).padStart(2, "0")}
              </span>
              <h4 className="headline text-lg mt-3">{u.title}</h4>
              <p className="byline mt-1">{u.where}</p>
              <p className="font-serif text-[14px] mt-3 flex-1">{u.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Stops */}
      {drinkStops.map((stop) => (
        <DrinkStopSection key={stop.id} stop={stop} />
      ))}

      {/* Quick reference */}
      <section
        id="quick-ref"
        className="py-10 scroll-mt-24"
      >
        <p className="kicker">Section D · Cheat Sheet</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          What to Order Where
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Pocket-sized — keep this open at the bar. Phrasebook included.
        </p>
        <hr className="rule mt-4 mb-5" />
        <div className="overflow-x-auto">
          <table className="w-full text-left font-serif text-[15px] border-collapse">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="kicker py-3 pr-4">Stop</th>
                <th className="kicker py-3 pr-4">Order this</th>
                <th className="kicker py-3">Say this</th>
              </tr>
            </thead>
            <tbody>
              {drinksQuickReference.map((row) => (
                <tr key={row.stop} className="border-b border-ink/20">
                  <td className="py-3 pr-4 font-bold">{row.stop}</td>
                  <td className="py-3 pr-4">{row.order}</td>
                  <td className="py-3 italic">{row.phrase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer nav */}
      <nav className="mt-12 pt-6 border-t-[3px] border-double border-ink flex flex-col md:flex-row items-center justify-between gap-3">
        <Link to="/itinerary" className="kicker ink-link">
          ← Full Itinerary
        </Link>
        <Link to="/towns" className="kicker ink-link">
          Towns Index
        </Link>
        <Link to="/paris" className="kicker ink-link">
          Section P: Paris in History →
        </Link>
      </nav>
    </article>
  );
}

function DrinkStopSection({ stop }: { stop: DrinkStop }) {
  return (
    <section
      id={stop.id}
      className="py-10 border-b border-ink/40 scroll-mt-24"
    >
      <p className="kicker">{stop.flag} Section D · {stop.region}</p>
      <h3 className="headline text-3xl md:text-5xl mt-2">{stop.region}</h3>
      <p className="deck text-lg mt-3 max-w-3xl">{stop.subtitle}</p>
      <hr className="rule mt-4 mb-5" />

      {stop.beer && stop.beer.length > 0 && (
        <SubBlock title="🍺 Beer" body={stop.beer} />
      )}

      {stop.beerVenues && stop.beerVenues.length > 0 && (
        <VenueGrid title="Beer venues & breweries" venues={stop.beerVenues} />
      )}

      {stop.cider && stop.cider.length > 0 && (
        <SubBlock title="🍏 Cider, Calvados & Pommeau" body={stop.cider} />
      )}

      {stop.styles && stop.styles.length > 0 && (
        <div className="mt-6">
          <p className="kicker">Styles & what to order</p>
          <hr className="rule mt-2 mb-3" />
          <div className="overflow-x-auto">
            <table className="w-full text-left font-serif text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-ink">
                  <th className="kicker py-2 pr-3">Style</th>
                  <th className="kicker py-2 pr-3">ABV</th>
                  <th className="kicker py-2 pr-3">About</th>
                  <th className="kicker py-2">Order this</th>
                </tr>
              </thead>
              <tbody>
                {stop.styles.map((s) => (
                  <tr key={s.style} className="border-b border-ink/15">
                    <td className="py-2 pr-3 font-bold">{s.style}</td>
                    <td className="py-2 pr-3 text-muted">{s.abv ?? "—"}</td>
                    <td className="py-2 pr-3">{s.about}</td>
                    <td className="py-2 italic">{s.order}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {stop.ciderProducers && stop.ciderProducers.length > 0 && (
        <VenueGrid title="Cider producers & route" venues={stop.ciderProducers} />
      )}

      {stop.wine && stop.wine.length > 0 && (
        <SubBlock title="🍷 Wine" body={stop.wine} />
      )}

      {stop.wineVenues && stop.wineVenues.length > 0 && (
        <VenueGrid title="Wine bars & merchants" venues={stop.wineVenues} />
      )}

      {stop.callouts && stop.callouts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {stop.callouts.map((c, i) => {
            const style = calloutStyle[c.kind];
            return (
              <div key={i} className={`border-2 p-4 ${style.cls}`}>
                <p className="kicker">
                  {c.kind === "tradition" && "🍻 "}
                  {c.kind === "must" && "⭐ "}
                  {style.kicker} · {c.title}
                </p>
                <p className="font-serif text-[15px] mt-2">{c.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function SubBlock({ title, body }: { title: string; body: string[] }) {
  return (
    <div className="mt-2">
      <p className="kicker">{title}</p>
      <hr className="rule mt-2 mb-3" />
      <div className="body-prose space-y-2">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function VenueGrid({
  title,
  venues,
}: {
  title: string;
  venues: Brewery[];
}) {
  return (
    <div className="mt-6">
      <p className="kicker">{title}</p>
      <hr className="rule mt-2 mb-3" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {venues.map((v) => (
          <li key={v.name} className="border-b border-ink/15 pb-3">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-serif font-bold text-[15px]">
                {v.name}
                {v.pilgrimage && (
                  <span className="kicker text-accent ml-2">⭐ Pilgrimage</span>
                )}
              </p>
              {v.address && <span className="byline">{v.address}</span>}
            </div>
            <p className="font-serif text-[14px] mt-1">{v.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
