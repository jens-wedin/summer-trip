import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import type { HistoricSite, HistoricSiteTheme } from "../data/paris";
import { useTheme } from "../lib/useTheme";
import { mapColors } from "../lib/mapColors";

type Props = {
  sites: HistoricSite[];
  height?: number;
  filter?: HistoricSiteTheme | "all";
};

const themeColor: Record<HistoricSiteTheme, string> = {
  napoleon: "#8b1a1a", // imperial red
  wwii: "#1a1a1a", // ink
  both: "#5a3a1a", // sepia / both
};

const themeLabel: Record<HistoricSiteTheme, string> = {
  napoleon: "Napoleon",
  wwii: "WWII",
  both: "Both eras",
};

function FitBounds({ sites }: { sites: HistoricSite[] }) {
  const map = useMap();
  useEffect(() => {
    if (sites.length === 0) return;
    const lats = sites.map((s) => s.coords[0]);
    const lngs = sites.map((s) => s.coords[1]);
    map.fitBounds(
      [
        [Math.min(...lats), Math.min(...lngs)],
        [Math.max(...lats), Math.max(...lngs)],
      ],
      { padding: [50, 50] }
    );
  }, [map, sites]);
  return null;
}

export function ParisMap({ sites, height = 520 }: Props) {
  const [filter, setFilter] = useState<HistoricSiteTheme | "all">("all");
  const { theme } = useTheme();
  const colors = mapColors(theme);
  const visible = sites.filter((s) => filter === "all" || s.theme === filter || s.theme === "both");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter sites by era"
        className="flex flex-wrap items-center gap-2 mb-3"
      >
        <span className="kicker text-muted mr-1">Filter:</span>
        {(["all", "napoleon", "wwii"] as const).map((t) => {
          const active = filter === t;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(t)}
              className={`kicker px-3 py-1 border border-ink transition-colors ${
                active ? "bg-ink text-paper" : "hover:bg-ink/5"
              }`}
            >
              {t === "all" ? "All sites" : t === "napoleon" ? "Napoleon" : "WWII"}
            </button>
          );
        })}
        <span className="byline ml-auto">
          <LegendDot color={themeColor.napoleon} /> Napoleon ·{" "}
          <LegendDot color={themeColor.wwii} /> WWII ·{" "}
          <LegendDot color={themeColor.both} /> Both
        </span>
      </div>
      <div className="border border-ink/80 bg-paperDark" style={{ height }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[48.8566, 2.3522]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {visible.map((s) => (
            <CircleMarker
              key={s.id}
              center={s.coords}
              radius={8}
              pathOptions={{
                color: colors.marker,
                weight: 1.5,
                fillColor: themeColor[s.theme],
                fillOpacity: 0.9,
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 12 }}>
                  {s.name}
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
                      color: themeColor[s.theme],
                      margin: 0,
                    }}
                  >
                    {themeLabel[s.theme]} · {s.arrondissement}
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
                    {s.name}
                  </p>
                  <p style={{ margin: "0 0 6px", fontSize: 13, lineHeight: 1.45 }}>
                    {s.why}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, system-ui",
                      fontSize: 11,
                      color: "var(--color-muted)",
                      margin: 0,
                    }}
                  >
                    {s.address} · {s.timeNeeded}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          ))}
          <FitBounds sites={visible} />
        </MapContainer>
      </div>
    </div>
  );
}

function LegendDot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        marginRight: 4,
        verticalAlign: "middle",
        border: "1px solid var(--color-rule)",
      }}
    />
  );
}
