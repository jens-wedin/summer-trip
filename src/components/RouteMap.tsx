import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import type { LatLng, Day } from "../types";
import { useTheme } from "../lib/useTheme";
import { mapColors } from "../lib/mapColors";

type Props = {
  days: Day[];
  highlightDayId?: number;
  height?: number;
};

function FitBounds({ points }: { points: LatLng[] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    const lats = points.map((p) => p[0]);
    const lngs = points.map((p) => p[1]);
    map.fitBounds(
      [
        [Math.min(...lats), Math.min(...lngs)],
        [Math.max(...lats), Math.max(...lngs)],
      ],
      { padding: [40, 40] }
    );
  }, [map, points]);
  return null;
}

export function RouteMap({ days, highlightDayId, height = 460 }: Props) {
  const route = useMemo(() => {
    const pts: LatLng[] = [];
    days.forEach((d, i) => {
      if (i === 0) pts.push(d.from.coords);
      d.waypoints?.forEach((w) => pts.push(w.coords));
      pts.push(d.to.coords);
    });
    return pts;
  }, [days]);

  const stops = useMemo(() => {
    const seen = new Map<string, { coords: LatLng; name: string; dayId: number }>();
    days.forEach((d) => {
      if (!seen.has(d.from.id))
        seen.set(d.from.id, { coords: d.from.coords, name: d.from.name, dayId: d.id });
      if (!seen.has(d.to.id))
        seen.set(d.to.id, { coords: d.to.coords, name: d.to.name, dayId: d.id });
    });
    return Array.from(seen.values());
  }, [days]);

  const { theme } = useTheme();
  const colors = mapColors(theme);

  return (
    <div
      className="border border-ink/80 bg-paperDark"
      style={{ height }}
    >
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[54.5, 10]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline
          positions={route}
          pathOptions={{
            color: colors.route,
            weight: 2.5,
            opacity: 0.85,
            dashArray: "1 6",
            lineCap: "round",
          }}
        />
        {stops.map((s) => {
          const isHighlight = s.dayId === highlightDayId;
          return (
            <CircleMarker
              key={s.name}
              center={s.coords}
              radius={isHighlight ? 9 : 5}
              pathOptions={{
                color: colors.marker,
                weight: 1.5,
                fillColor: isHighlight ? colors.route : colors.markerStroke,
                fillOpacity: 1,
              }}
            >
              <Tooltip
                direction="top"
                offset={[0, -6]}
                opacity={1}
                permanent={isHighlight}
              >
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: 12 }}>
                  {s.name}
                </span>
              </Tooltip>
            </CircleMarker>
          );
        })}
        <FitBounds points={route} />
      </MapContainer>
    </div>
  );
}
