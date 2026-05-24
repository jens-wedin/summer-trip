import { useMemo } from "react";
import {
  CircleMarker,
  MapContainer,
  Polygon,
  Polyline,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import type { Stop } from "../types";
import { useTheme } from "../lib/useTheme";
import { nightPolygon, sunAltitude, sunState, terminator } from "../lib/sun";

type Props = {
  date: Date;
  stops: Stop[];
  height?: number;
};

export function SunMap({ date, stops, height = 520 }: Props) {
  const { theme } = useTheme();
  const state = useMemo(() => sunState(date), [date]);
  const night = useMemo(() => nightPolygon(date, 2), [date]);
  const termLine = useMemo(() => terminator(date, 2), [date]);

  const nightFill =
    theme === "dark" ? "rgba(8, 6, 4, 0.62)" : "rgba(20, 18, 14, 0.45)";
  const sunFill = theme === "dark" ? "#f6c453" : "#d4a017";
  const sunStroke = theme === "dark" ? "#1c1812" : "#1a1a1a";
  const terminatorStroke =
    theme === "dark" ? "#d97a5a" : "#8b1a1a";

  return (
    <div className="border border-ink/80 bg-paperDark" style={{ height }}>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[20, state.subsolarLng]}
        zoom={2}
        minZoom={2}
        maxZoom={6}
        worldCopyJump={false}
        scrollWheelZoom={false}
        maxBounds={[
          [-85, -180],
          [85, 180],
        ]}
        maxBoundsViscosity={1}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap
        />

        <Polygon
          positions={night}
          pathOptions={{
            color: terminatorStroke,
            weight: 0,
            fillColor: nightFill,
            fillOpacity: 1,
            interactive: false,
          }}
        />
        <Polyline
          positions={termLine}
          pathOptions={{
            color: terminatorStroke,
            weight: 1.5,
            opacity: 0.9,
            dashArray: "2 4",
            interactive: false,
          }}
        />

        {/* Subsolar point — the spot where the sun is straight overhead. */}
        <CircleMarker
          center={[state.subsolarLat, state.subsolarLng]}
          radius={16}
          pathOptions={{
            color: sunStroke,
            weight: 1.5,
            fillColor: sunFill,
            fillOpacity: 0.95,
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} permanent>
            <span style={{ fontFamily: "Playfair Display, serif", fontSize: 12 }}>
              Solens zenit
            </span>
          </Tooltip>
        </CircleMarker>

        {stops.map((s) => {
          const alt = sunAltitude(s.coords[0], s.coords[1], date);
          const lit = alt >= 0;
          return (
            <CircleMarker
              key={s.id}
              center={s.coords}
              radius={5}
              pathOptions={{
                color: sunStroke,
                weight: 1.5,
                fillColor: lit ? sunFill : "#2a261e",
                fillOpacity: 1,
              }}
            >
              <Tooltip direction="top" offset={[0, -6]}>
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 12 }}>
                  {s.name} · {alt >= 0 ? `+${alt.toFixed(0)}°` : `${alt.toFixed(0)}°`}
                </span>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
