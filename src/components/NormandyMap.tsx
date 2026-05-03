import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import {
  normandyThemeColor,
  normandyThemeLabel,
  normandyCategoryLabels,
  type NormandySite,
  type NormandySiteTheme,
} from "../data/normandy";
import { useTheme } from "../lib/useTheme";
import { mapColors } from "../lib/mapColors";

type Props = {
  sites: NormandySite[];
  height?: number;
};

function FitBounds({ sites }: { sites: NormandySite[] }) {
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

const filterTabs: { id: NormandySiteTheme | "all"; label: string }[] = [
  { id: "all", label: "Alla sektorer" },
  { id: "us", label: "USA" },
  { id: "uk", label: "Brittisk" },
  { id: "canadian", label: "Kanadensisk" },
  { id: "shared", label: "Museer & stad" },
];

export function NormandyMap({ sites, height = 540 }: Props) {
  const [filter, setFilter] = useState<NormandySiteTheme | "all">("all");
  const { theme } = useTheme();
  const colors = mapColors(theme);
  const visible = sites.filter((s) => filter === "all" || s.theme === filter);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtrera platser efter sektor"
        className="flex flex-wrap items-center gap-2 mb-3"
      >
        <span className="kicker text-muted mr-1">Filter:</span>
        {filterTabs.map((t) => {
          const active = filter === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(t.id)}
              className={`kicker px-3 py-1 border border-ink transition-colors ${
                active ? "bg-ink text-paper" : "hover:bg-ink/5"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1 byline mb-3">
        {(["us", "uk", "canadian", "shared"] as const).map((t) => (
          <span key={t}>
            <LegendDot color={normandyThemeColor[theme][t]} /> {normandyThemeLabel[t]}
          </span>
        ))}
      </div>
      <div className="border border-ink/80 bg-paperDark" style={{ height }}>
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={[49.35, -0.7]}
          zoom={9}
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
              radius={s.category === "beach" ? 10 : 8}
              pathOptions={{
                color: colors.marker,
                weight: 1.5,
                fillColor: normandyThemeColor[theme][s.theme],
                fillOpacity: 0.9,
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 12 }}>
                  {s.name}
                </span>
              </Tooltip>
              <Popup maxWidth={300}>
                <div style={{ fontFamily: "Lora, Georgia, serif" }}>
                  <p
                    style={{
                      fontFamily: "Inter, system-ui",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: 10,
                      fontWeight: 600,
                      color: normandyThemeColor[theme][s.theme],
                      margin: 0,
                    }}
                  >
                    {normandyThemeLabel[s.theme]} ·{" "}
                    {normandyCategoryLabels[s.category]}
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
                    {s.area} · {s.timeNeeded}
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
