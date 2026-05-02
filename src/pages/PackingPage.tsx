import { packingChecklist } from "../data/trip";
import { Checklist } from "../components/Checklist";

export function PackingPage() {
  return (
    <article className="max-w-6xl mx-auto px-6 pb-16">
      <div className="text-center py-6">
        <p className="kicker">Section D · Provisions</p>
        <h2 className="headline text-4xl md:text-5xl mt-3">
          The Master Packing Manifest
        </h2>
        <p className="deck text-lg max-w-2xl mx-auto mt-2">
          What goes into the wagon, and what stays behind. Tick as you load.
        </p>
      </div>

      <hr className="double-rule my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {packingChecklist.map((section) => (
          <Checklist
            key={section.section}
            title={section.section}
            initial={section.items}
            storageKey={`packing-${section.section}`}
          />
        ))}
      </div>

      <p className="byline text-center mt-10 italic">
        Items are saved to your browser; no cloud, no fuss.
      </p>
    </article>
  );
}
