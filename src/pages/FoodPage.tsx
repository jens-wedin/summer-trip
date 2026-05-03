import { Link } from "react-router-dom";
import {
  foodStops,
  oneDrinkPerCountry,
  foodHeroImage,
  type FoodItem,
  type FoodStop,
} from "../data/food";

export function FoodPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <header className="text-center py-10 border-b-[3px] border-double border-ink">
        <p className="kicker">Section F · Food & Beverages</p>
        <h2 className="headline text-4xl md:text-6xl mt-3 leading-[1.05]">
          🍽️ Must-Tries Along the Route
        </h2>
        <p className="deck text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Country by country, in travel order. Cinnamon buns, fish rolls, frites,
          camembert, croissants — and what to drink with them.
        </p>
        <p className="byline mt-3">Sweden → Denmark → Germany → Belgium → France</p>
      </header>

      {/* Hero image */}
      <figure className="mt-6">
        <div className="newsprint-frame border border-ink">
          <img
            src={foodHeroImage.src}
            alt={foodHeroImage.caption}
            className="w-full h-72 md:h-[480px] object-cover block"
          />
        </div>
        <figcaption className="byline italic mt-2">
          {foodHeroImage.caption}
        </figcaption>
      </figure>

      {/* TOC */}
      <nav aria-label="Food stops" className="border-b border-ink py-4">
        <p className="kicker text-center mb-3">Country by Country</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {foodStops.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="kicker ink-link">
                {s.flag} {s.country}
              </a>
            </li>
          ))}
          <li>
            <a href="#one-drink" className="kicker ink-link">
              🍺 One Drink Per Country
            </a>
          </li>
        </ul>
      </nav>

      {foodStops.map((stop) => (
        <FoodStopSection key={stop.id} stop={stop} />
      ))}

      {/* One drink per country summary */}
      <section id="one-drink" className="py-10 scroll-mt-24">
        <p className="kicker">Section F · The Drinks Summary</p>
        <h3 className="headline text-3xl md:text-5xl mt-2">
          🍺 One Drink Per Country
        </h3>
        <p className="deck text-lg mt-3 max-w-3xl">
          The single thing to order if you only have one chance.
        </p>
        <hr className="rule mt-4 mb-5" />
        <div className="overflow-x-auto">
          <table className="w-full text-left font-serif text-[15px] border-collapse">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="kicker py-3 pr-4">Country</th>
                <th className="kicker py-3">The one to order</th>
              </tr>
            </thead>
            <tbody>
              {oneDrinkPerCountry.map((row) => (
                <tr key={row.country + row.drink} className="border-b border-ink/20">
                  <td className="py-3 pr-4 font-bold">
                    {row.flag} {row.country}
                  </td>
                  <td className="py-3">{row.drink}</td>
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
        <Link to="/drinks" className="kicker ink-link">
          🍺🍷 Beer & Wine Trail
        </Link>
        <Link to="/towns" className="kicker ink-link">
          Towns Index →
        </Link>
      </nav>
    </article>
  );
}

function FoodStopSection({ stop }: { stop: FoodStop }) {
  return (
    <section id={stop.id} className="py-10 border-b border-ink/40 scroll-mt-24">
      <p className="kicker">
        {stop.flag} Section F · {stop.country}
      </p>
      <h3 className="headline text-3xl md:text-5xl mt-2">{stop.country}</h3>
      <p className="byline mt-1">{stop.context}</p>
      {stop.intro && (
        <p className="deck text-lg mt-3 max-w-3xl">{stop.intro}</p>
      )}
      <hr className="rule mt-4 mb-5" />

      {stop.image && (
        <figure className="mb-6">
          <div className="newsprint-frame border border-ink">
            <img
              src={stop.image.src}
              alt={stop.image.caption}
              className="w-full h-64 md:h-80 object-cover block"
            />
          </div>
          <figcaption className="byline italic mt-2">
            {stop.image.caption}
          </figcaption>
        </figure>
      )}

      {stop.subsections.map((sub) => (
        <div key={sub.title} className="mt-2 mb-6">
          <p className="kicker">{sub.title}</p>
          {sub.intro && (
            <p className="font-serif italic text-[15px] mt-1 text-muted max-w-3xl">
              {sub.intro}
            </p>
          )}
          <hr className="rule mt-2 mb-3" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {sub.items.map((item) => (
              <FoodCard key={item.name} item={item} />
            ))}
          </ul>
        </div>
      ))}

      {stop.drinks && stop.drinks.length > 0 && (
        <div className="mt-8">
          <p className="kicker">🍺 Drinks</p>
          <hr className="rule mt-2 mb-3" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {stop.drinks.map((d) => (
              <FoodCard key={d.name} item={d} />
            ))}
          </ul>
        </div>
      )}

      {stop.tip && (
        <div className="mt-6 border-2 border-rule bg-paperDark/40 p-4">
          <p className="kicker text-accent">💡 {stop.tip.title}</p>
          <p className="font-serif text-[15px] mt-2">{stop.tip.body}</p>
        </div>
      )}
    </section>
  );
}

function FoodCard({ item }: { item: FoodItem }) {
  return (
    <li className="border-b border-ink/15 pb-3">
      <p className="font-serif font-bold text-[16px]">
        {item.name}
        {item.signature && (
          <span className="kicker text-accent ml-2">⭐ Signature</span>
        )}
      </p>
      <p className="font-serif text-[15px] mt-1">{item.body}</p>
    </li>
  );
}
