import { Link } from "react-router-dom";
import {
  parisHistoricSites,
  parisSections,
  parisTwoDayItinerary,
  parisThingsToDo,
  categoryLabels,
  parisHeroImage,
  parisSitesMapImage,
  type HistoricSiteTheme,
  type ParisListing,
} from "../data/paris";
import { ParisMap } from "../components/ParisMap";
import { ParisThingsMap } from "../components/ParisThingsMap";

const themeBadge: Record<HistoricSiteTheme, { label: string; cls: string }> = {
  napoleon: { label: "Napoleon", cls: "text-accent" },
  wwii: { label: "Andra världskriget", cls: "text-ink" },
  both: { label: "Båda epoker", cls: "text-muted" },
};

export function ParisPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Avdelning P · Paris i historien</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          En stad av kejsardöme och minne
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          En fältguide till Napoleons kejserliga huvudstad och till staden under
          tysk ockupation, 1940–1944. Gå kartan. Stå där det hände.
        </p>
        <p className="byline mt-3">
          Dag 8–10 · söndag 28 juni – tisdag 30 juni 2026
        </p>
      </header>

      {/* Hero image */}
      <figure className="mt-6">
        <div className="newsprint-frame border border-ink">
          <img
            src={parisHeroImage.src}
            alt={parisHeroImage.caption}
            className="w-full h-72 md:h-[480px] object-cover block"
          />
        </div>
        <figcaption className="byline italic mt-2">
          {parisHeroImage.caption}
        </figcaption>
      </figure>

      {/* Table of contents */}
      <nav aria-label="Paris sections" className="border-b border-ink py-4">
        <p className="kicker text-center mb-3">I denna avdelning</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {parisSections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="kicker ink-link">
                {s.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#sites-map" className="kicker ink-link">
              Platskarta
            </a>
          </li>
          <li>
            <a href="#two-day" className="kicker ink-link">
              2-dagarsplan
            </a>
          </li>
          <li>
            <a href="#things-to-do" className="kicker ink-link">
              Saker att göra
            </a>
          </li>
        </ul>
      </nav>

      {/* Narrative sections */}
      {parisSections.map((s, i) => (
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

      {/* Sites + Map */}
      <section id="sites-map" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Avdelning P · Platser &amp; karta</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Där det hände — på kartan
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Använd filtret för att fokusera på Napoleontidens monument eller platser från andra världskriget. Klicka på en markör för varför, adressen och hur lång tid att räkna med.
        </p>
        <hr className="rule mt-4 mb-5" />
        <figure className="mb-6">
          <div className="newsprint-frame border border-ink">
            <img
              src={parisSitesMapImage.src}
              alt={parisSitesMapImage.caption}
              className="w-full h-64 md:h-80 object-cover block"
            />
          </div>
          <figcaption className="byline italic mt-2">
            {parisSitesMapImage.caption}
          </figcaption>
        </figure>
        <ParisMap sites={parisHistoricSites} height={520} />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {parisHistoricSites.map((s) => (
            <li
              key={s.id}
              className="border border-ink p-5 bg-paper/40 flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className={`kicker ${themeBadge[s.theme].cls}`}>
                  {themeBadge[s.theme].label}
                </span>
                <span className="byline">{s.arrondissement}</span>
              </div>
              <h4 className="headline text-xl mt-2">{s.name}</h4>
              <p className="byline mt-1">{s.address}</p>
              <p className="font-serif text-[15px] mt-3 flex-1">{s.why}</p>
              <p className="byline italic mt-3 text-muted">
                Tid att räkna med: {s.timeNeeded}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 2-day itinerary */}
      <section id="two-day" className="py-10 border-b border-ink/40 scroll-mt-24">
        <p className="kicker">Avdelning P · Planen</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          En föreslagen 2-dagarsplan
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          En dag för Napoleon, en för kriget. Båda gångbara; bekväma skor obligatoriska.
        </p>
        <hr className="rule mt-4 mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {parisTwoDayItinerary.map((day) => (
            <div key={day.day} className="border border-ink p-6">
              <p className="kicker">{day.day}</p>
              <h4 className="masthead text-3xl mt-1">{day.theme}</h4>
              <hr className="rule mt-3 mb-4" />
              <ol className="space-y-4">
                {day.stops.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="kicker text-muted shrink-0 w-20 pt-1">
                      {s.time}
                    </span>
                    <div>
                      <p className="font-serif font-bold text-[16px]">{s.what}</p>
                      {s.note && (
                        <p className="font-serif italic text-[14px] mt-1 text-muted">
                          {s.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Things to do */}
      <section id="things-to-do" className="py-10 scroll-mt-24">
        <p className="kicker">Avdelning P · Bortom historien</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          Saker att göra, äta och köpa
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          Utvalt från Elsa Billgrens Parisguide för ELLE Sverige — stadsdelar,
          museer, mat, shopping och dolda pärlor.
        </p>
        <hr className="rule mt-4 mb-6" />

        <ParisThingsMap listings={parisThingsToDo} height={520} />

        <hr className="rule mt-8 mb-6" />

        <div className="space-y-10">
          {(Object.keys(categoryLabels) as ParisListing["category"][]).map((cat) => {
            const items = parisThingsToDo.filter((t) => t.category === cat);
            if (items.length === 0) return null;
            const meta = categoryLabels[cat];
            return (
              <div key={cat}>
                <p className="kicker">
                  <span className="mr-2">{meta.emoji}</span>
                  {meta.label}
                </p>
                <hr className="rule mt-2 mb-4" />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {items.map((t) => (
                    <li key={t.name} className="border-b border-ink/15 pb-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-serif font-bold text-[16px]">
                          {t.name}
                          {t.area && (
                            <span className="byline ml-2">· {t.area}</span>
                          )}
                        </p>
                        {t.wishList && (
                          <span className="kicker text-accent">Önskelista</span>
                        )}
                      </div>
                      <p className="font-serif text-[15px] mt-1">{t.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer link back to days */}
      <nav className="mt-12 pt-6 border-t-[3px] border-double border-ink flex flex-col md:flex-row items-center justify-between gap-3">
        <Link to="/day/8" className="kicker ink-link">
          ← Dag 8: In i Paris
        </Link>
        <Link to="/itinerary" className="kicker ink-link">
          Hela reseplanen
        </Link>
        <Link to="/day/11" className="kicker ink-link">
          Dag 11: Slagfält och Ruhr →
        </Link>
      </nav>
    </article>
  );
}
