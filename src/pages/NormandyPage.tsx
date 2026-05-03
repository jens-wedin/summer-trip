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
  meet: { label: "Möte", cls: "bg-ink text-paper" },
  guided: { label: "Guidad", cls: "border border-ink" },
  "drive-by": { label: "Förbiresa", cls: "border border-ink/60 text-muted" },
  lunch: { label: "Lunch", cls: "border border-rule text-accent" },
  return: { label: "Återresa", cls: "bg-ink text-paper" },
} as const;

export function NormandyPage() {
  const { theme } = useTheme();
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Avdelning N · Normandie</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          Den längsta dagen
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          En fältguide till D-Day och slaget om Normandie — för våra tre
          nätter med bas i Bayeux, den normandiska stad som klarade sig igenom kriget intakt.
        </p>
        <p className="byline mt-3">
          Dag 5–7 · tor 25 – lör 27 juni 2026
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
        <p className="kicker text-accent">⚠️ Viktigt — Bayeuxtapeten stängd</p>
        <p className="font-serif text-[15px] mt-2">
          Bayeuxtapetens museum stängde den 1 september 2025 för en stor
          renovering och öppnar inte igen förrän oktober 2027. Tapeten kommer{" "}
          <strong>inte</strong> att visas under vårt besök i juli 2026. Den kan
          bli utlånad till British Museum i London under denna period. Planera
          den lediga dagen kring katedralen, Mémorial Musée, krigskyrkogården
          och gamla stan i stället.
        </p>
      </div>

      {/* TOC */}
      <nav aria-label="Normandy sections" className="border-b border-ink py-4">
        <p className="kicker text-center mb-3">I denna avdelning</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {normandySections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="kicker ink-link">
                {s.title}
              </a>
            </li>
          ))}
          <li><a href="#timeline" className="kicker ink-link">Tidslinje</a></li>
          <li><a href="#command" className="kicker ink-link">Befälsstruktur</a></li>
          <li><a href="#sites-map" className="kicker ink-link">Platskarta</a></li>
          <li><a href="#bayeux" className="kicker ink-link">Bayeuxbasen</a></li>
          <li><a href="#shuttle" className="kicker ink-link">Shuttle-tur</a></li>
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
        <p className="kicker">Avdelning N · Kort tidslinje</p>
        <h3 className="headline text-3xl md:text-4xl mt-2">Från invasion till V-E-dagen</h3>
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
        <p className="kicker">Avdelning N · Generalerna</p>
        <h3 className="headline text-3xl md:text-4xl mt-2">Vem befälde vad</h3>
        <hr className="rule mt-4 mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="kicker text-accent">Allierat befäl (6 juni 1944)</p>
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
            <p className="kicker">Tyskt befäl — var de befann sig</p>
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
          <p className="kicker">Tyska enheter som försvarade Normandie den 6 juni</p>
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
        <p className="kicker">Avdelning N · Platser &amp; karta</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Där det hände — på kartan
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Filtrera efter sektor. Klicka på en markör för varför, området och hur lång tid att räkna med. Stränderna är större punkter.
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
                Tid att räkna med: {s.timeNeeded}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Bayeux base */}
      <section id="bayeux" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Avdelning N · Vår bas</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Bayeux — Tre nätter
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Den första franska stad som befriades efter D-Day (7 juni 1944) — och
          mirakulöst skonad från bombning. Det medeltida centret, korsvirkehusen
          och den romansk-gotiska katedralen är i princip intakta.
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
          <BayeuxDay day="tor 25 jun" plan="Anländer från Honfleur · utforskar gamla stan · katedralen · middag" />
          <BayeuxDay day="fre 26 jun" plan="Bayeux Shuttle Tour — upphämtning 08:45 · ref 260476 · tillbaka ~17:15" highlight />
          <BayeuxDay day="lör 27 jun" plan="Ledig dag — Mémorial Musée · krigskyrkogården · gamla stan · aperitif" />
        </div>

        <p className="kicker">🍽️ Var man äter</p>
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
                  <p className="byline italic mt-1 text-muted">Stängt: {r.closed}</p>
                )}
              </li>
            ))}
        </ul>

        <p className="kicker mt-8">☕ Kaféer &amp; snacks</p>
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
        <p className="kicker">Avdelning N · Fredagens tur</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Bayeux Shuttle — brittisk &amp; amerikansk D-Day-upplevelse
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Bokad för fredag 26 juni 2026. Tio etapper längs Gold- och Omahasektorerna, ~8,5 timmar, engelska endast, max 8 passagerare.
        </p>
        <hr className="rule mt-4 mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-ink p-5">
            <p className="kicker">I korthet</p>
            <hr className="rule mt-2 mb-3" />
            <dl className="space-y-2 text-[14px] font-serif">
              <DetailRow label="Datum" value={bayeuxShuttle.date} />
              <DetailRow label="Bokningsnr" value={bayeuxShuttle.ref} />
              <DetailRow label="Avgång" value={bayeuxShuttle.departure} />
              <DetailRow label="Varaktighet" value={bayeuxShuttle.duration} />
              <DetailRow label="Passagerare" value={String(bayeuxShuttle.passengers)} />
              <DetailRow label="Totalt pris" value={bayeuxShuttle.totalPrice} />
              <DetailRow label="Gruppstorlek" value={bayeuxShuttle.groupSize} />
              <DetailRow label="Språk" value={bayeuxShuttle.language} />
              <DetailRow label="Sektor" value={bayeuxShuttle.sector} />
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
            <p className="kicker">Praktiska upplysningar</p>
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

        <p className="kicker">De 10 etapperna</p>
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
          ← Dag 4: Till den normandiska kusten
        </Link>
        <Link to="/itinerary" className="kicker ink-link">
          Hela reseplanen
        </Link>
        <Link to="/paris" className="kicker ink-link">
          Avdelning P: Paris i historien →
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
