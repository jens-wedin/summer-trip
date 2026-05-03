import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import {
  categoryLabels,
  parisListingColor,
  type ParisListing,
} from "../data/paris";
import { useTheme } from "../lib/useTheme";
import { mapColors } from "../lib/mapColors";

type Props = {
  listings: ParisListing[];
  height?: number;
};

type CategoryKey = ParisListing["category"];

function FitBounds({ listings }: { listings: (ParisListing & { coords: [number, number] })[] }) {
  const map = useMap();
  useEffect(() => {
    if (listings.length === 0) return;
    const lats = listings.map((s) => s.coords[0]);
    const lngs = listings.map((s) => s.coords[1]);
    map.fitBounds(
      [
        [Math.min(...lats), Math.min(...lngs)],
        [Math.max(...lats), Math.max(...lngs)],
      ],
      { padding: [50, 50] }
    );
  }, [map, listings]);
  return null;
}

export function ParisThingsMap({ listings, height = 540 }: Props) {
  const mappable = useMemo(
    () =>
      listings.filter(
        (l): l is ParisListing & { coords: [number, number] } => Array.isArray(l.coords)
      ),
    [listings]
  );

  const presentCategories = useMemo(() => {
    const set = new Set<CategoryKey>();
    mappable.forEach((l) => set.add(l.category));
    return (Object.keys(categoryLabels) as CategoryKey[]).filter((c) => set.has(c));
  }, [mappable]);

  const [activeCats, setActiveCats] = useState<Set<CategoryKey>>(
    () => new Set(presentCategories)
  );

  const visible = useMemo(
    () => mappable.filter((l) => activeCats.has(l.category)),
    [mappable, activeCats]
  );

  const toggle = (cat: CategoryKey) => {
    setActiveCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  const allOn = activeCats.size === presentCategories.length;

  const { theme } = useTheme();
  const colors = mapColors(theme);

  const unmappedCount = listings.length - mappable.length;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter listings by category"
        className="flex flex-wrap items-center gap-2 mb-3"
      >
        <span className="kicker text-muted mr-1">Filter:</span>
        <button
          type="button"
          onClick={() =>
            setActiveCats(allOn ? new Set() : new Set(presentCategories))
          }
          className="kicker px-3 py-1 border border-ink hover:bg-ink/5"
          aria-pressed={allOn}
        >
          {allOn ? "Clear all" : "Show all"}
        </button>
        {presentCategories.map((cat) => {
          const active = activeCats.has(cat);
          const meta = categoryLabels[cat];
          return (
            <button
              key={cat}
              type="button"
              role="switch"
              aria-checked={active}
              onClick={() => toggle(cat)}
              className={`kicker px-3 py-1 border border-ink transition-colors flex items-center gap-1.5 ${
                active ? "bg-ink text-paper" : "hover:bg-ink/5"
              }`}
              style={
                active
                  ? { backgroundColor: parisListingColor[theme][cat], color: "#fdfaf3", borderColor: parisListingColor[theme][cat] }
                  : undefined
              }
            >
              <span aria-hidden="true">{meta.emoji}</span>
              {meta.label}
            </button>
          );
        })}
      </div>
      <p className="byline mb-3">
        {visible.length} of {mappable.length} mapped
        {unmappedCount > 0 && (
          <span className="ml-2 italic text-muted">
            · {unmappedCount} listing{unmappedCount === 1 ? "" : "s"} without a fixed location
          </span>
        )}
      </p>
      <div className="border border-ink/80 bg-paperDark" style={{ height }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[48.8606, 2.3376]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {visible.map((l) => (
            <CircleMarker
              key={`${l.category}-${l.name}`}
              center={l.coords}
              radius={7}
              pathOptions={{
                color: colors.marker,
                weight: 1.5,
                fillColor: parisListingColor[theme][l.category],
                fillOpacity: 0.9,
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 12 }}>
                  {l.name}
                </span>
              </Tooltip>
              <Popup maxWidth={280}>
                <div style={{ fontFamily: "Lora, Georgia, serif" }}>
                  <p
                    style={{
                      fontFamily: "Inter, system-ui",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: 10,
                      fontWeight: 600,
                      color: parisListingColor[theme][l.category],
                      margin: 0,
                    }}
                  >
                    {categoryLabels[l.category].emoji} {categoryLabels[l.category].label}
                    {l.area ? ` · ${l.area}` : ""}
                  </p>
                  <p
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1.15,
                      margin: "4px 0 6px",
                    }}
                  >
                    {l.name}
                    {l.wishList && (
                      <span
                        style={{
                          fontFamily: "Inter, system-ui",
                          fontSize: 9,
                          letterSpacing: "0.18em",
                          fontWeight: 600,
                          marginLeft: 6,
                          color: "var(--color-accent)",
                          textTransform: "uppercase",
                        }}
                      >
                        Wish list
                      </span>
                    )}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.45 }}>
                    {l.note}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
          <FitBounds listings={visible.length > 0 ? visible : mappable} />
        </MapContainer>
      </div>
    </div>
  );
}
