import { Link } from "react-router-dom";
import { trip } from "../data/trip";
import { RouteMap } from "../components/RouteMap";
import { towns } from "../data/towns";
import { normandySites } from "../data/normandy";
import { parisHistoricSites } from "../data/paris";
import { drinksUnmissables } from "../data/drinks";

export function FrontPage() {
  const lead = trip.days[0];
  const headlineDays = [
    trip.days[5], // Day 6 — Bayeux Shuttle Tour
    trip.days[7], // Day 8 — Into Paris
    trip.days[10], // Day 11 — Waterloo
  ];
  const minor = [trip.days[2], trip.days[3], trip.days[12]];

  return (
    <article className="max-w-6xl mx-auto px-6 pb-12">
      <div className="text-center pt-6 pb-3">
        <p className="kicker">Sommarbilresenumret · Specialbilaga</p>
        <h2 className="headline text-4xl md:text-6xl mt-4 mb-3">{trip.title}</h2>
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
          <p className="kicker">Ovan vikningen · Dag ett</p>
          <h3 className="headline text-3xl md:text-5xl mt-2 mb-3 leading-[1.05]">
            <Link to={`/day/${lead.id}`} className="hover:text-accent">
              {lead.title}
            </Link>
          </h3>
          <p className="deck text-lg mb-4">
            Expeditionen beger sig från huvudstaden under högt lufttryck och
            ännu högre förhoppningar; ett långt första etapp av design.
          </p>
          <div className="newsprint-frame border border-ink">
            <img
              src={lead.images[0].src}
              alt={lead.images[0].caption ?? ""}
              className="w-full h-72 md:h-96 object-cover block"
            />
          </div>
          <p className="byline mt-2 italic">
            {lead.images[0].caption}
            {lead.images[0].credit && ` — ${lead.images[0].credit}`}
          </p>
          <div className="body-prose mt-5 columns-1 md:columns-2 gap-8">
            <p className="drop-cap">{lead.story[0]}</p>
            {lead.story.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-5">
            <Link to={`/day/${lead.id}`} className="kicker ink-link">
              Fortsätt läsa Dag ett →
            </Link>
          </p>
        </section>

        {/* Right rail */}
        <aside className="lg:col-span-5 space-y-8">
          <div>
            <p className="kicker mb-2">I siffror</p>
            <hr className="rule mb-3" />
            <dl className="grid grid-cols-2 gap-y-3">
              <Stat label="Dagar på vägen" value={String(trip.totalDays)} />
              <Stat label="Total sträcka i km" value={trip.totalKm.toLocaleString()} />
              <Stat label="Länder vi passerar" value={String(trip.countries.length)} />
              <Stat label="Färjeöverfarter" value="1" />
              <Stat label="Broar vi korsar" value="4" />
              <Stat label="Städer fördjupade" value={String(towns.length)} />
              <Stat label="Historiska platser på karta" value={String(normandySites.length + parisHistoricSites.length)} />
              <Stat label="Nätter i Bayeux + Paris" value="6" />
            </dl>
          </div>

          <div>
            <p className="kicker mb-2">Rutten i korthet</p>
            <hr className="rule mb-3" />
            <RouteMap days={trip.days} height={300} />
            <p className="byline mt-2 italic">
              En kontinental sluten rutt: {trip.countries.join(", ")}.
            </p>
          </div>

          <div>
            <p className="kicker mb-2">Rubrikdagar</p>
            <hr className="rule mb-3" />
            <ul className="space-y-3">
              {headlineDays.map((d) => (
                <li key={d.id}>
                  <Link to={`/day/${d.id}`} className="block group">
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

      {/* Sections grid */}
      <section>
        <p className="kicker text-center">Avdelningar i detta nummer</p>
        <h3 className="headline text-center text-3xl mt-2 mb-6">
          Läs efter tema
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SectionCard
            to="/normandy"
            kicker="Avdelning N · Dag 5–7"
            title="Den längsta dagen"
            body={`D-Day, Atlantvallen, luftlandsättningarna och Bayeuxbasen — ${normandySites.length} platser på karta + shuttle-tur i korthet.`}
          />
          <SectionCard
            to="/paris"
            kicker="Avdelning P · Dag 8–10"
            title="En stad av kejsardöme och minne"
            body={`Napoleon och ockupationen, ${parisHistoricSites.length} historiska platser, en 2-dagarsplan och Elsa Billgrens saker att göra.`}
          />
          <SectionCard
            to="/towns"
            kicker={`Avdelning T · ${towns.length} stopp`}
            title="Varje stad, i ordning"
            body="Fördjupningar i varje plats vi sover, besöker eller passerar — historia, sevärdheter och historien bakom varje stopp."
          />
          <SectionCard
            to="/food"
            kicker="Avdelning F · 5 länder"
            title="Måsten längs vägen"
            body="Från kanelbulle till camembert till croissant — matguide land för land med en dryck att minnas per land."
          />
          <SectionCard
            to="/drinks"
            kicker="Avdelning D · Vägen"
            title="Öl & vin"
            body={`Kölsch, trappistöl, normansk calvados, naturvin i Paris — och de ${drinksUnmissables.length} oumbärliga stoppen längs vägen.`}
          />
          <SectionCard
            to="/weather"
            kicker="Avdelning W · Aktuell prognos"
            title="Vädret"
            body="Dag för dag-prognos från Open-Meteo när inom räckvidd. Klimatnormalvärden som reserv för datum längre bort."
          />
        </div>
      </section>

      <hr className="double-rule my-10" />

      {/* Quick utility links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <UtilityLink to="/itinerary" kicker="Planen" label="Hela reseplanen" />
        <UtilityLink to="/map" kicker="Geografin" label="Reskartan" />
        <UtilityLink to="/checklist" kicker="Väskan" label="Packlista" />
        <UtilityLink to="/weather" kicker="Himlen" label="Väderprognos" />
      </section>

      <hr className="double-rule my-10" />

      <section>
        <p className="kicker text-center">Även i detta nummer</p>
        <h3 className="headline text-center text-3xl mt-2 mb-6">
          Brev från vägen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-ink/40">
          {minor.map((d) => (
            <Link key={d.id} to={`/day/${d.id}`} className="md:px-4 group">
              <div className="newsprint-frame border border-ink mb-3">
                <img
                  src={d.images[0].src}
                  alt={d.images[0].caption ?? ""}
                  className="w-full h-44 object-cover block"
                />
              </div>
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

function SectionCard({
  to,
  kicker,
  title,
  body,
}: {
  to: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="block border border-ink p-5 hover:bg-ink/5 transition-colors h-full"
    >
      <p className="kicker text-accent">{kicker}</p>
      <p className="masthead text-2xl mt-2">{title}</p>
      <p className="font-serif text-[14px] mt-2">{body}</p>
      <p className="kicker ink-link mt-3 inline-block">Öppna avdelning →</p>
    </Link>
  );
}

function UtilityLink({
  to,
  kicker,
  label,
}: {
  to: string;
  kicker: string;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="block border border-ink/40 p-4 text-center hover:bg-ink/5 transition-colors"
    >
      <p className="kicker text-muted">{kicker}</p>
      <p className="masthead text-xl mt-2">{label} →</p>
    </Link>
  );
}
