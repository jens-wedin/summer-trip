import { trip } from "../data/trip";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-double border-ink mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="masthead text-2xl">Summer Trip 2026</p>
        <p className="kicker mt-2">
          {trip.byline} · {trip.dateline}
        </p>
        <p className="byline mt-4 text-muted">
          A private family edition · Printed on recycled pixels · No advertisements,
          ever.
        </p>
      </div>
    </footer>
  );
}
