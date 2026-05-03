import { Link } from "react-router-dom";
import {
  normandySections,
  normandySites,
  normandyTimeline,
  dDayCommandStructure,
  germanCommanders,
  germanDefendingUnits,
  bayeuxRestaurants,
  bayeuxShuttle,
  normandyThemeColor,
  normandyThemeLabel,
  normandyCategoryLabels,
  normandyHeroImage,
  bayeuxBaseImage,
} from "../data/normandy";
import { NormandyMap } from "../components/NormandyMap";
import { useTheme } from "../lib/useTheme";

const stageBadge = {
  meet: { label: "Meet", cls: "bg-ink text-paper" },
  guided: { label: "Guided", cls: "border border-ink" },
  "drive-by": { label: "Drive-by", cls: "border border-ink/60 text-muted" },
  lunch: { label: "Lunch", cls: "border border-rule text-accent" },
  return: { label: "Return", cls: "bg-ink text-paper" },
} as const;

export function NormandyPage() {
  const { theme } = useTheme();
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Section N · Normandy</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          The Longest Day
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          A field guide to D-Day and the Battle of Normandy — for our three
          nights based in Bayeux, the Norman city that survived the war intact.
        </p>
        <p className="byline mt-3">
          Days 5–7 · Thu 25 – Sat 27 June, 2026
        </p>
      </header>

      {/* Hero image */}
      <figure className="mt-6">
        <div className="newsprint-frame border border-ink">
          <img
            src={normandyHeroImage.src}
            alt={normandyHeroImage.caption}
            className="w-full h-72 md:h-[480px] object-cover block"
          />
        </div>
        <figcaption className="byline italic mt-2">
          {normandyHeroImage.caption}
        </figcaption>
      </figure>

      {/* Tapestry warning */}
      <div className="my-6 border-2 border-rule bg-paperDark/40 p-5">
        <p className="kicker text-accent">⚠️ Important — Bayeux Tapestry Closed</p>
        <p className="font-serif text-[15px] mt-2">
          The Bayeux Tapestry Museum closed on September 1, 2025 for major
          renovation and will not reopen until October 2027. The Tapestry will{" "}
          <strong>not</strong> be on display during our July 2026 visit. It may
          be loaned to the British Museum in London during this period. Plan the
          free day around the cathedral, the Mémorial Musée, the war cemetery,
          and the old town instead.
        </p>
      </div>

      {/* TOC */}
      <nav aria-label="Normandy sections" className="border-b border-ink py-4">
        <p className="kicker text-center mb-3">In This Section</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {normandySections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="kicker ink-link">
                {s.title}
              </a>
            </li>
          ))}
          <li><a href="#timeline" className="kicker ink-link">Timeline</a></li>
          <li><a href="#command" className="kicker ink-link">Command Structure</a></li>
          <li><a href="#sites-map" className="kicker ink-link">Sites Map</a></li>
          <li><a href="#bayeux" className="kicker ink-link">Bayeux Base</a></li>
          <li><a href="#shuttle" className="kicker ink-link">Shuttle Tour</a></li>
        </ul>
      </nav>

      {/* Narrative sections */}
      {normandySections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="py-10 border-b border-ink/40 scroll-mt-24"
        >
          <p className="kicker">{s.kicker}</p>
          <h3 className="headline text-3xl md:text-5xl mt-2">{s.title}</h3>
          {s.lead && (
            <p className="deck text-lg md:text-xl mt-3 max-w-3xl">{s.lead}</p>
          )}
          <hr className="rule mt-4 mb-5" />
          {s.image && (
            <figure className="mb-6">
              <div className="newsprint-frame border border-ink">
                <img
                  src={s.image.src}
                  alt={s.image.caption}
                  className="w-full h-64 md:h-96 object-cover block"
                />
              </div>
              <figcaption className="byline italic mt-2">
                {s.image.caption}
              </figcaption>
            </figure>
          )}
          <div className="body-prose grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
            {s.body.map((p, idx) => (
              <p
                key={idx}
                className={idx === 0 && i === 0 ? "drop-cap md:col-span-2" : ""}
              >
                {p}
              </p>
            ))}
          </div>
          {s.pullQuote && (
            <blockquote className="pull-quote mt-6 border-l-2 border-ink pl-5 max-w-3xl">
              &ldquo;{s.pullQuote}&rdquo;
              {s.pullQuoteAttribution && (
                <footer className="byline italic mt-2">
                  — {s.pullQuoteAttribution}
                </footer>
              )}
            </blockquote>
          )}
        </section>
      ))}

      {/* Timeline */}
      <section id="timeline" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Section N · Quick Timeline</p>
        <h3 className="headline text-3xl md:text-4xl mt-2">From Invasion to V-E Day</h3>
        <hr className="rule mt-4 mb-5" />
        <ol className="space-y-3">
          {normandyTimeline.map((t) => (
            <li key={t.date + t.event} className="grid grid-cols-12 gap-3 border-b border-ink/15 pb-3">
              <span className="col-span-12 md:col-span-3 kicker">{t.date}</span>
              <span className="col-span-12 md:col-span-9 font-serif text-[15px]">{t.event}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Command structure */}
      <section id="command" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Section N · The Generals</p>
        <h3 className="headline text-3xl md:text-4xl mt-2">Who Commanded What</h3>
        <hr className="rule mt-4 mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="kicker text-accent">Allied Command (June 6, 1944)</p>
            <hr className="rule mt-2 mb-3" />
            <ul className="space-y-2">
              {dDayCommandStructure.map((c) => (
                <li key={c.role + c.name} className="border-b border-ink/15 pb-2">
                  <p className="kicker text-muted">{c.role}</p>
                  <p className="font-serif text-[15px]">
                    {c.name}
                    {c.note && <span className="byline ml-2">· {c.note}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker">German Command — Where They Were</p>
            <hr className="rule mt-2 mb-3" />
            <ul className="space-y-3">
              {germanCommanders.map((g) => (
                <li key={g.name} className="border-b border-ink/15 pb-2">
                  <p className="font-serif font-bold text-[15px]">{g.name}</p>
                  <p className="byline">{g.role}</p>
                  <p className="font-serif italic text-[14px] mt-1">{g.whereOnDDay}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <p className="kicker">German Units Defending Normandy on June 6</p>
          <hr className="rule mt-2 mb-4" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {germanDefendingUnits.map((u) => (
              <li key={u.unit} className="border-b border-ink/15 pb-2">
                <p className="font-serif font-bold text-[15px]">{u.unit}</p>
                <p className="byline">{u.sector}</p>
                <p className="font-serif italic text-[14px] mt-1">{u.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sites + Map */}
      <section id="sites-map" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Section N · Sites & Map</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Where It Happened — On the Map
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Filter by sector. Click any marker for the why, the area, and how
          long to budget. Beaches are larger dots.
        </p>
        <hr className="rule mt-4 mb-5" />
        <NormandyMap sites={normandySites} height={540} />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {normandySites.map((s) => (
            <li key={s.id} className="border border-ink p-5 bg-paper/40 flex flex-col">
              <div className="flex items-baseline justify-between gap-3">
                <span
                  className="kicker"
                  style={{ color: normandyThemeColor[theme][s.theme] }}
                >
                  {normandyThemeLabel[s.theme]}
                </span>
                <span className="byline">{normandyCategoryLabels[s.category]}</span>
              </div>
              <h4 className="headline text-xl mt-2">{s.name}</h4>
              <p className="byline mt-1">{s.area}</p>
              <p className="font-serif text-[15px] mt-3 flex-1">{s.why}</p>
              <p className="byline italic mt-3 text-muted">
                Time needed: {s.timeNeeded}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Bayeux base */}
      <section id="bayeux" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Section N · Our Base</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Bayeux — Three Nights
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          The first French city liberated after D-Day (June 7, 1944) — and
          miraculously spared from bombing. The medieval centre, half-timbered
          houses, and Romanesque-Gothic cathedral are essentially intact.
        </p>
        <hr className="rule mt-4 mb-5" />

        <figure className="mb-8">
          <div className="newsprint-frame border border-ink">
            <img
              src={bayeuxBaseImage.src}
              alt={bayeuxBaseImage.caption}
              className="w-full h-64 md:h-96 object-cover block"
            />
          </div>
          <figcaption className="byline italic mt-2">
            {bayeuxBaseImage.caption}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <BayeuxDay day="Thu 25 Jun" plan="Arrive from Honfleur · explore old town · cathedral · dinner" />
          <BayeuxDay day="Fri 26 Jun" plan="Bayeux Shuttle Tour — pickup 8:45 AM · ref 260476 · back ~17:15" highlight />
          <BayeuxDay day="Sat 27 Jun" plan="Free day — Mémorial Musée · War Cemetery · old town · aperitif" />
        </div>

        <p className="kicker">🍽️ Where to Eat</p>
        <hr className="rule mt-2 mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {bayeuxRestaurants
            .filter((r) => r.category === "restaurant")
            .map((r) => (
              <li key={r.name} className="border-b border-ink/15 pb-3">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-serif font-bold text-[16px]">
                    {r.name}
                    {r.bib && <span className="kicker text-accent ml-2">Bib Gourmand</span>}
                  </p>
                  {r.rating && <span className="byline">{r.rating}</span>}
                </div>
                <p className="font-serif text-[15px] mt-1">{r.note}</p>
                {r.closed && (
                  <p className="byline italic mt-1 text-muted">Closed: {r.closed}</p>
                )}
              </li>
            ))}
        </ul>

        <p className="kicker mt-8">☕ Cafés & Snacks</p>
        <hr className="rule mt-2 mb-4" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {bayeuxRestaurants
            .filter((r) => r.category === "cafe")
            .map((r) => (
              <li key={r.name} className="border-b border-ink/15 pb-2">
                <p className="font-serif font-bold text-[15px]">{r.name}</p>
                <p className="font-serif text-[14px] mt-1">{r.note}</p>
              </li>
            ))}
        </ul>
      </section>

      {/* Shuttle Tour */}
      <section id="shuttle" className="py-10 scroll-mt-24">
        <p className="kicker">Section N · Friday's Tour</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Bayeux Shuttle — British &amp; American D-Day Experience
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Booked for Friday 26 June 2026. Ten stages along Gold and Omaha
          sectors, ~8.5 hours, English only, max 8 passengers.
        </p>
        <hr className="rule mt-4 mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-ink p-5">
            <p className="kicker">At a glance</p>
            <hr className="rule mt-2 mb-3" />
            <dl className="space-y-2 text-[14px] font-serif">
              <DetailRow label="Date" value={bayeuxShuttle.date} />
              <DetailRow label="Booking ref" value={bayeuxShuttle.ref} />
              <DetailRow label="Departure" value={bayeuxShuttle.departure} />
              <DetailRow label="Duration" value={bayeuxShuttle.duration} />
              <DetailRow label="Passengers" value={String(bayeuxShuttle.passengers)} />
              <DetailRow label="Total price" value={bayeuxShuttle.totalPrice} />
              <DetailRow label="Group size" value={bayeuxShuttle.groupSize} />
              <DetailRow label="Language" value={bayeuxShuttle.language} />
              <DetailRow label="Sector" value={bayeuxShuttle.sector} />
            </dl>
            <p className="mt-3">
              <a
                href={bayeuxShuttle.contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="kicker ink-link"
              >
                bayeuxshuttle.com ↗
              </a>
              <span className="byline ml-3">
                {bayeuxShuttle.contact.phone} · {bayeuxShuttle.contact.email}
              </span>
            </p>
          </div>
          <div className="border border-ink p-5">
            <p className="kicker">Practical notes</p>
            <hr className="rule mt-2 mb-3" />
            <ul className="space-y-2 list-disc list-inside font-serif text-[14px]">
              {bayeuxShuttle.practical.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="font-serif italic text-[13px] mt-3 text-muted">
              {bayeuxShuttle.cancellation}
            </p>
          </div>
        </div>

        <p className="kicker">The 10 Stages</p>
        <hr className="rule mt-2 mb-4" />
        <ol className="space-y-3">
          {bayeuxShuttle.stops.map((s) => (
            <li key={s.stage} className="border border-ink/40 p-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="masthead text-2xl">
                  {String(s.stage).padStart(2, "0")}
                </span>
                <span
                  className={`kicker px-2 py-0.5 ${stageBadge[s.type].cls}`}
                >
                  {stageBadge[s.type].label}
                </span>
                {s.time && <span className="byline">{s.time}</span>}
                <h4 className="headline text-xl ml-auto md:ml-0">{s.title}</h4>
              </div>
              <p className="byline mt-1">{s.location}</p>
              <p className="font-serif text-[15px] mt-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer nav */}
      <nav className="mt-12 pt-6 border-t-[3px] border-double border-ink flex flex-col md:flex-row items-center justify-between gap-3">
        <Link to="/day/4" className="kicker ink-link">
          ← Day 4: To the Norman Coast
        </Link>
        <Link to="/itinerary" className="kicker ink-link">
          Full Itinerary
        </Link>
        <Link to="/paris" className="kicker ink-link">
          Section P: Paris in History →
        </Link>
      </nav>
    </article>
  );
}

function BayeuxDay({
  day,
  plan,
  highlight,
}: {
  day: string;
  plan: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-4 border ${
        highlight ? "border-ink bg-ink/5" : "border-ink/40"
      }`}
    >
      <p className="kicker">{day}</p>
      <p className="font-serif text-[15px] mt-2">{plan}</p>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 border-b border-ink/15 pb-1.5">
      <dt className="kicker text-muted shrink-0 w-28">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
