import { Link, useParams } from "react-router-dom";
import { trip } from "../data/trip";
import { RouteMap } from "../components/RouteMap";
import { Checklist } from "../components/Checklist";
import type { Lodging } from "../types";
import { townsForDay } from "../data/towns";

const PARIS_DAY_IDS = new Set([8, 9, 10]);
const NORMANDY_DAY_IDS = new Set([5, 6, 7]);

export function DayPage() {
  const { id } = useParams<{ id: string }>();
  const dayId = Number(id);
  const day = trip.days.find((d) => d.id === dayId);

  if (!day) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="kicker">Sidan hittades inte</p>
        <h2 className="headline text-3xl mt-3">Ingen sådan rapport</h2>
        <Link to="/itinerary" className="kicker ink-link mt-4 inline-block">
          ← Tillbaka till reseplanen
        </Link>
      </div>
    );
  }

  const prev = trip.days.find((d) => d.id === dayId - 1);
  const next = trip.days.find((d) => d.id === dayId + 1);
  const restDay = day.from.id === day.to.id;
  const dayTowns = townsForDay(day.id);

  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <nav className="flex items-center justify-between py-3 border-b border-ink">
        {prev ? (
          <Link to={`/day/${prev.id}`} className="kicker ink-link">
            ← Dag {prev.id}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <Link to="/itinerary" className="kicker">
          Reseplanen
        </Link>
        {next ? (
          <Link to={`/day/${next.id}`} className="kicker ink-link">
            Dag {next.id}: {next.title} →
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
          {restDay ? " · En dag utan bilkörning" : ` → ${day.to.name}`}
          {day.drivingKm > 0 && ` · ${day.drivingKm} km · ${day.drivingDuration}`}
        </p>
        <p className="byline mt-3">{day.date}</p>
        {day.driveNote && (
          <p className="byline italic mt-1 text-muted">{day.driveNote}</p>
        )}
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
        <main className="lg:col-span-8 lg:border-r lg:border-ink lg:pr-10">
          <div className="newsprint-frame border border-ink">
            <img
              src={day.images[0].src}
              alt={day.images[0].caption ?? ""}
              className="w-full h-72 md:h-[420px] object-cover block"
            />
          </div>
          <p className="byline italic mt-2">
            {day.images[0].caption}
            {day.images[0].credit && ` — ${day.images[0].credit}`}
          </p>

          <div className="body-prose mt-6">
            <p className="drop-cap">{day.story[0]}</p>
            {day.pullQuote && (
              <blockquote className="pull-quote my-6 border-l-2 border-ink pl-5">
                &ldquo;{day.pullQuote}&rdquo;
              </blockquote>
            )}
            {day.story.slice(1).map((p, i) => (
              <p key={i} className="mt-4">
                {p}
              </p>
            ))}
          </div>

          {PARIS_DAY_IDS.has(day.id) && (
            <Link
              to="/paris"
              className="block mt-8 border border-ink p-5 hover:bg-ink/5 transition-colors"
            >
              <p className="kicker text-accent">Avdelning P · Paris i historien</p>
              <p className="masthead text-2xl mt-2">
                Napoleon, ockupationen, befrielsen
              </p>
              <p className="font-serif text-[15px] mt-2">
                En fältguide till stadens två stora historiska lager — med
                en karta över varje plats, en 2-dagarsplan och Elsa Billgrens
                att-göra-lista. →
              </p>
            </Link>
          )}

          {dayTowns.length > 0 && (
            <section className="mt-10">
              <p className="kicker">Stadsfördjupningar</p>
              <hr className="rule mt-2 mb-4" />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dayTowns.map((t) => (
                  <li key={t.id}>
                    <Link
                      to={`/town/${t.slug}`}
                      className="block border border-ink p-4 hover:bg-ink/5"
                    >
                      <p className="kicker text-muted">
                        {t.flag} {t.country}
                      </p>
                      <p className="masthead text-2xl mt-1">{t.name}</p>
                      <p className="font-serif italic text-[14px] mt-1 text-muted">
                        {t.tagline}
                      </p>
                      <p className="kicker ink-link mt-3 inline-block">
                        Läs fördjupning →
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {NORMANDY_DAY_IDS.has(day.id) && (
            <Link
              to="/normandy"
              className="block mt-8 border border-ink p-5 hover:bg-ink/5 transition-colors"
            >
              <p className="kicker text-accent">Avdelning N · Normandie</p>
              <p className="masthead text-2xl mt-2">
                Den längsta dagen — D-Day &amp; slaget om Normandie
              </p>
              <p className="font-serif text-[15px] mt-2">
                Tyska försvar, luftlandsättningarna, de fem stränderna, Omaha
                i detalj, vägen till Paris — plus Bayeuxbasen, shuttle-turens
                etapper och en interaktiv platskarta filtrerad per sektor. →
              </p>
            </Link>
          )}

          {day.enRouteStops && day.enRouteStops.length > 0 && (
            <section className="mt-10">
              <p className="kicker">Längs vägen</p>
              <hr className="rule mt-2 mb-4" />
              <ul className="space-y-3">
                {day.enRouteStops.map((s) => (
                  <li key={s.name} className="border-b border-ink/15 pb-3">
                    <p className="font-serif font-bold text-[15px]">{s.name}</p>
                    <p className="font-serif text-[15px] mt-1">{s.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {day.resources && day.resources.length > 0 && (
            <section className="mt-10">
              <p className="kicker">Resurser &amp; länkar</p>
              <hr className="rule mt-2 mb-4" />
              <ul className="space-y-2">
                {day.resources.map((r) => (
                  <li key={r.url} className="border-b border-ink/15 pb-2">
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif font-bold text-[15px] ink-link"
                    >
                      {r.title} ↗
                    </a>
                    {r.note && (
                      <p className="font-serif italic text-[14px] mt-1 text-muted">
                        {r.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {day.charging && (day.charging.stops.length > 0 || day.charging.note) && (
            <section className="mt-10">
              <p className="kicker">⚡ Laddningsplan</p>
              <hr className="rule mt-2 mb-4" />
              {day.charging.note && (
                <p className="font-serif italic text-[15px] mb-3">
                  {day.charging.note}
                </p>
              )}
              {day.charging.stops.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-serif text-[14px] border-collapse">
                    <thead>
                      <tr className="border-b border-ink">
                        <th className="kicker py-2 pr-3">Stopp</th>
                        <th className="kicker py-2 pr-3">In</th>
                        <th className="kicker py-2 pr-3">Ut</th>
                        <th className="kicker py-2 pr-3">Tid</th>
                        <th className="kicker py-2 pr-3">Kostnad</th>
                        <th className="kicker py-2">Till nästa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.charging.stops.map((s, i) => (
                        <tr key={i} className="border-b border-ink/15">
                          <td className="py-2 pr-3">
                            <span className="font-bold">{s.name}</span>
                            {s.country && (
                              <span className="text-muted"> · {s.country}</span>
                            )}
                          </td>
                          <td className="py-2 pr-3">{s.socIn ?? "—"}</td>
                          <td className="py-2 pr-3">{s.socOut ?? "—"}</td>
                          <td className="py-2 pr-3">{s.duration ?? "—"}</td>
                          <td className="py-2 pr-3">{s.cost ?? "—"}</td>
                          <td className="py-2">{s.legToNext ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {day.images.length > 1 && (
            <section className="mt-10">
              <p className="kicker">Ur fotografens väska</p>
              <hr className="rule mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {day.images.slice(1).map((img, i) => (
                  <figure key={i}>
                    <div className="newsprint-frame border border-ink">
                      <img
                        src={img.src}
                        alt={img.caption ?? ""}
                        className="w-full h-56 object-cover block"
                      />
                    </div>
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
            <p className="kicker">Rutten</p>
            <hr className="rule mt-2 mb-3" />
            <RouteMap days={trip.days} highlightDayId={day.id} height={260} />
            <dl className="grid grid-cols-2 gap-y-2 mt-3">
              <Stat label="Från" value={day.from.name} />
              <Stat label="Till" value={day.to.name} />
              <Stat
                label="Sträcka"
                value={day.drivingKm === 0 ? "—" : `${day.drivingKm} km`}
              />
              <Stat label="Tid" value={day.drivingDuration} />
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

          {day.lodging && <LodgingCard lodging={day.lodging} />}

          <Checklist
            initial={day.checklist}
            storageKey={`day-${day.id}-checklist`}
            title="Dagens checklista"
          />
        </aside>
      </div>

      <nav
        aria-label="Day navigation"
        className="mt-12 pt-6 border-t-[3px] border-double border-ink grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {prev ? (
          <Link
            to={`/day/${prev.id}`}
            className="block border border-ink p-5 hover:bg-ink/5 transition-colors"
          >
            <p className="kicker text-muted">← Föregående rapport</p>
            <p className="masthead text-2xl mt-2">Dag {prev.id}</p>
            <p className="font-serif text-lg mt-1">{prev.title}</p>
            <p className="byline mt-1">{prev.date}</p>
          </Link>
        ) : (
          <div className="border border-ink/20 p-5 text-muted">
            <p className="kicker">Resans start</p>
            <p className="font-serif text-[15px] mt-2">
              Ingen tidigare rapport — detta är Dag 1.
            </p>
          </div>
        )}
        {next ? (
          <Link
            to={`/day/${next.id}`}
            className="block border border-ink p-5 hover:bg-ink/5 transition-colors md:text-right"
          >
            <p className="kicker text-muted">Nästa rapport →</p>
            <p className="masthead text-2xl mt-2">Dag {next.id}</p>
            <p className="font-serif text-lg mt-1">{next.title}</p>
            <p className="byline mt-1">{next.date}</p>
          </Link>
        ) : (
          <div className="border border-ink/20 p-5 text-muted md:text-right">
            <p className="kicker">Resans slut</p>
            <p className="font-serif text-[15px] mt-2">
              Hemma igen. Inga fler rapporter.
            </p>
          </div>
        )}
      </nav>
    </article>
  );
}

function LodgingCard({ lodging }: { lodging: Lodging }) {
  const statusBadge = {
    booked: { label: "✓ Bokat", cls: "text-green-800" },
    pending: { label: "⏳ Väntar", cls: "text-accent" },
    "not-booked": { label: "✗ Ej bokat", cls: "text-red-800" },
    home: { label: "🏠 Hem", cls: "text-ink" },
  } as const;
  const badge = lodging.status ? statusBadge[lodging.status] : null;

  return (
    <section>
      <div className="flex items-baseline justify-between gap-3">
        <p className="kicker">Boende</p>
        {badge && <span className={`kicker ${badge.cls}`}>{badge.label}</span>}
      </div>
      <hr className="rule mt-2 mb-3" />
      <p className="font-serif text-lg font-bold">{lodging.name}</p>
      {lodging.address && (
        <p className="byline mt-1">{lodging.address}</p>
      )}
      {lodging.url && (
        <p className="mt-1">
          <a
            href={lodging.url}
            target="_blank"
            rel="noopener noreferrer"
            className="kicker ink-link"
          >
            Besök webbplats ↗
          </a>
        </p>
      )}
      {lodging.description && (
        <p className="font-serif italic text-[14px] mt-2 text-muted">
          {lodging.description}
        </p>
      )}
      <dl className="mt-3 space-y-2">
        {lodging.dates && <DetailRow label="Datum" value={lodging.dates} />}
        {lodging.room && <DetailRow label="Rum" value={lodging.room} />}
        {lodging.parking && <DetailRow label="Parkering" value={lodging.parking} />}
        {lodging.price && <DetailRow label="Pris" value={lodging.price} />}
        {lodging.payment && <DetailRow label="Betalning" value={lodging.payment} />}
        {lodging.bookedVia && <DetailRow label="Bokad via" value={lodging.bookedVia} />}
      </dl>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 text-[14px] font-serif border-b border-ink/15 pb-1.5">
      <dt className="kicker text-muted shrink-0 w-20">{label}</dt>
      <dd>{value}</dd>
    </div>
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
