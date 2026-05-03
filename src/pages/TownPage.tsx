import { Link, useParams } from "react-router-dom";
import { towns, townsById } from "../data/towns";
import { drinksByTownId } from "../data/drinks";
import { foodByTownId } from "../data/food";

export function TownPage() {
  const { id } = useParams<{ id: string }>();
  const town = id ? townsById[id] : undefined;

  if (!town) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="kicker">Page Not Found</p>
        <h2 className="headline text-3xl mt-3">No such town dispatch</h2>
        <Link to="/towns" className="kicker ink-link mt-4 inline-block">
          ← All towns
        </Link>
      </div>
    );
  }

  const idx = towns.findIndex((t) => t.id === town.id);
  const prev = idx > 0 ? towns[idx - 1] : null;
  const next = idx < towns.length - 1 ? towns[idx + 1] : null;
  const drinks = drinksByTownId[town.id] ?? [];
  const food = foodByTownId[town.id] ?? [];

  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">
          {town.flag} Section T · {town.country}
        </p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          {town.name}
        </h2>
        <p className="deck text-lg md:text-xl mt-3 max-w-2xl mx-auto">
          {town.tagline}
        </p>
        <p className="byline mt-3">{town.visitContext}</p>
      </header>

      {town.images && town.images.length > 0 && (
        <section className="py-6 border-b border-ink/40">
          <div className="newsprint-frame border border-ink">
            <img
              src={town.images[0].src}
              alt={town.images[0].caption}
              className="w-full h-72 md:h-[420px] object-cover block"
            />
          </div>
          <p className="byline italic mt-2">{town.images[0].caption}</p>
          {town.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              {town.images.slice(1).map((image) => (
                <figure key={image.src}>
                  <div className="newsprint-frame border border-ink">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-44 object-cover block"
                    />
                  </div>
                  <figcaption className="byline italic mt-1">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>
      )}

      {town.lodging && (
        <section className="border-b border-ink py-6 mt-2">
          <p className="kicker">🏨 Where We're Staying</p>
          <hr className="rule mt-2 mb-3" />
          <p className="font-serif font-bold text-lg">{town.lodging.name}</p>
          {town.lodging.note && (
            <p className="font-serif italic text-[15px] mt-1 text-muted">
              {town.lodging.note}
            </p>
          )}
          {town.lodging.url && (
            <p className="mt-2">
              <a
                href={town.lodging.url}
                target="_blank"
                rel="noopener noreferrer"
                className="kicker ink-link"
              >
                Visit website ↗
              </a>
            </p>
          )}
        </section>
      )}

      {/* History & Context */}
      <section className="py-8 border-b border-ink/40">
        <p className="kicker">🏛️ History & Context</p>
        <hr className="rule mt-2 mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {town.history.map((h) => (
            <li key={h.title} className="border-l-2 border-ink/40 pl-4">
              <p className="font-serif font-bold text-[16px]">{h.title}</p>
              <p className="font-serif text-[15px] mt-1">{h.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Points of Interest */}
      <section className="py-8 border-b border-ink/40">
        <p className="kicker">📍 Points of Interest</p>
        <hr className="rule mt-2 mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {town.pointsOfInterest.map((p) => (
            <li key={p.name} className="border-b border-ink/15 pb-3">
              <p className="font-serif font-bold text-[16px]">{p.name}</p>
              <p className="font-serif text-[15px] mt-1">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Tips */}
      <section className="py-8 border-b border-ink/40">
        <p className="kicker">💡 Local Tips</p>
        <hr className="rule mt-2 mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {town.tips.map((t) => (
            <li key={t.name} className="border-b border-ink/15 pb-2">
              <p className="font-serif font-bold text-[15px]">{t.name}</p>
              <p className="font-serif text-[14px] mt-1">{t.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Deep Dive */}
      <section className="py-10 border-b border-ink/40">
        <p className="kicker">🔎 History Deep Dive</p>
        <h3 className="headline text-3xl md:text-4xl mt-2">
          {town.deepDive.title}
        </h3>
        {town.deepDive.intro && (
          <p className="deck text-lg mt-3 max-w-3xl">{town.deepDive.intro}</p>
        )}
        <hr className="rule mt-4 mb-5" />
        <div className="space-y-7">
          {town.deepDive.chapters.map((c, i) => (
            <div key={c.title}>
              <p className="kicker text-accent">
                Chapter {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="headline text-2xl mt-1">{c.title.replace(/^\d+\.\s*/, "")}</h4>
              <div className="body-prose mt-3 space-y-2">
                {c.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        {town.deepDive.lookFor && (
          <blockquote className="mt-8 border-l-2 border-accent pl-5 max-w-3xl">
            <p className="kicker text-accent">🔎 Look for this</p>
            <p className="font-serif italic text-[16px] mt-2">
              {town.deepDive.lookFor}
            </p>
          </blockquote>
        )}
      </section>

      {food.length > 0 && (
        <section className="py-8 border-b border-ink/40">
          <p className="kicker">🍽️ Food & Must-Tries</p>
          <hr className="rule mt-2 mb-4" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {food.map((f) => (
              <li key={f.id}>
                <Link
                  to={`/food#${f.id}`}
                  className="block border border-ink p-4 hover:bg-ink/5"
                >
                  <p className="kicker text-accent">
                    {f.flag} {f.country}
                  </p>
                  <p className="font-serif italic text-[15px] mt-2">
                    {f.context}
                  </p>
                  <p className="kicker ink-link mt-3 inline-block">
                    Read the food guide →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {drinks.length > 0 && (
        <section className="py-8 border-b border-ink/40">
          <p className="kicker">🍺🍷 Drinks Trail</p>
          <hr className="rule mt-2 mb-4" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {drinks.map((d) => (
              <li key={d.id}>
                <Link
                  to={`/drinks#${d.id}`}
                  className="block border border-ink p-4 hover:bg-ink/5"
                >
                  <p className="kicker text-accent">
                    {d.flag} {d.region}
                  </p>
                  <p className="font-serif italic text-[15px] mt-2">
                    {d.subtitle}
                  </p>
                  <p className="kicker ink-link mt-3 inline-block">
                    Read the drinks guide →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Footer nav */}
      <nav className="mt-10 pt-6 border-t-[3px] border-double border-ink grid grid-cols-1 md:grid-cols-2 gap-4">
        {prev ? (
          <Link
            to={`/town/${prev.slug}`}
            className="block border border-ink p-5 hover:bg-ink/5"
          >
            <p className="kicker text-muted">← Previous town</p>
            <p className="masthead text-2xl mt-2">
              {prev.flag} {prev.name}
            </p>
            <p className="byline mt-1">{prev.visitContext}</p>
          </Link>
        ) : (
          <Link
            to="/towns"
            className="block border border-ink/40 p-5 hover:bg-ink/5 md:text-left"
          >
            <p className="kicker text-muted">Index</p>
            <p className="masthead text-2xl mt-2">All towns →</p>
          </Link>
        )}
        {next ? (
          <Link
            to={`/town/${next.slug}`}
            className="block border border-ink p-5 hover:bg-ink/5 md:text-right"
          >
            <p className="kicker text-muted">Next town →</p>
            <p className="masthead text-2xl mt-2">
              {next.flag} {next.name}
            </p>
            <p className="byline mt-1">{next.visitContext}</p>
          </Link>
        ) : (
          <Link
            to="/towns"
            className="block border border-ink/40 p-5 hover:bg-ink/5 md:text-right"
          >
            <p className="kicker text-muted">Index</p>
            <p className="masthead text-2xl mt-2">All towns →</p>
          </Link>
        )}
      </nav>
    </article>
  );
}

export function TownsIndex() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Section T · The Stops</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          Every Town, in Order
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Nine deep-dives into every place we sleep, visit, or pass through —
          history, sights, and the stories behind each stop.
        </p>
      </header>

      <ol className="divide-y divide-ink/40">
        {towns.map((t, i) => (
          <li key={t.id} className="py-6 grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-2">
              <p className="kicker">Stop {String(i + 1).padStart(2, "0")}</p>
              <p className="masthead text-4xl mt-1 leading-none">{t.flag}</p>
              <p className="byline mt-2">{t.country}</p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <p className="kicker text-muted">{t.visitContext}</p>
              <h3 className="headline text-2xl md:text-3xl mt-1">
                <Link to={`/town/${t.slug}`} className="hover:text-accent">
                  {t.name}
                </Link>
              </h3>
              <p className="font-serif italic text-[15px] mt-1 text-muted">
                {t.tagline}
              </p>
              <p className="font-serif text-[15px] mt-2">
                {t.deepDive.intro ?? t.history[0].body}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:border-l md:border-ink/30 md:pl-5">
              {t.lodging && (
                <>
                  <p className="kicker text-muted">Lodging</p>
                  <p className="font-serif text-[14px] mt-1">{t.lodging.name}</p>
                </>
              )}
              <Link
                to={`/town/${t.slug}`}
                className="kicker ink-link inline-block mt-3"
              >
                Read deep dive →
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
