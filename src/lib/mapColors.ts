import type { Theme } from "./theme";

export type MapPalette = {
  route: string;
  routeAlt: string;
  marker: string;
  markerStroke: string;
  label: string;
  labelBg: string;
};

export function mapColors(theme: Theme): MapPalette {
  return theme === "dark"
    ? {
        route:        "#d97a5a",
        routeAlt:     "#b8a888",
        marker:       "#f0e6d2",
        markerStroke: "#1c1812",
        label:        "#f0e6d2",
        labelBg:      "rgba(28, 24, 18, 0.9)",
      }
    : {
        route:        "#8b1a1a",
        routeAlt:     "#5a5650",
        marker:       "#1a1a1a",
        markerStroke: "#f4efe4",
        label:        "#1a1a1a",
        labelBg:      "rgba(244, 239, 228, 0.9)",
      };
}
