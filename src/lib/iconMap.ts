import {
  AlertTriangle,
  Apple,
  Beer,
  Bed,
  Binoculars,
  Cake,
  Calendar,
  Camera,
  Car,
  Castle,
  Check,
  Church,
  Coffee,
  Coins,
  Compass,
  Cookie,
  Croissant,
  Drumstick,
  Fish,
  Flag,
  Hammer,
  Hourglass,
  Hotel,
  House,
  Landmark,
  Leaf,
  Lightbulb,
  MapPin,
  Map as MapIcon,
  Martini,
  Mountain,
  Pizza,
  Plug,
  Search,
  Shield,
  ShoppingBag,
  Snowflake,
  Star,
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudSnow,
  CloudFog,
  Thermometer,
  Ticket,
  Train,
  Trophy,
  Utensils,
  Wine,
  X,
  type IconNode,
} from "lucide";

// Each Lucide IconNode is a tuple-array of [tagName, attributes, children?].
// We render to inline SVG markup so the DOM walker can drop it in directly.

export const emojiToIcon: Record<string, IconNode> = {
  // Food & drink
  "🍺": Beer,
  "🍷": Wine,
  "🍽️": Utensils,
  "🍽": Utensils,
  "🥐": Croissant,
  "🥖": Croissant, // bread fallback
  "🍰": Cake,
  "☕": Coffee,
  "🥞": Cookie,
  "🍪": Cookie,
  "🥤": Martini,
  "🍸": Martini,
  "🥩": Drumstick,
  "🍗": Drumstick,
  "🐂": Drumstick,
  "🐟": Fish,
  "🍣": Fish,
  "🍕": Pizza,
  "🍏": Apple,
  "🍎": Apple,
  "🍐": Apple,

  // Buildings & places
  "🏨": Hotel,
  "🏛️": Landmark,
  "🏛": Landmark,
  "⛪": Church,
  "🏰": Castle,
  "🏠": House,
  "🏞️": Mountain,
  "🏞": Mountain,
  "🌿": Leaf,
  "🌳": Leaf,

  // Travel
  "🚂": Train,
  "🚗": Car,
  "🅿️": MapPin, // parking — use MapPin as proxy
  "🅿": MapPin,
  "🗺️": MapIcon,
  "🗺": MapIcon,
  "📍": MapPin,
  "🧭": Compass,

  // Status / UI
  "⚡": Plug,
  "⏳": Hourglass,
  "⭐": Star,
  "✅": Check,
  "❌": X,
  "⚠️": AlertTriangle,
  "⚠": AlertTriangle,
  "💡": Lightbulb,
  "🔎": Search,
  "🔍": Search,
  "📅": Calendar,
  "💰": Coins,
  "🎟️": Ticket,
  "🎟": Ticket,
  "🏆": Trophy,
  "🛏️": Bed,
  "🛏": Bed,
  "🛍️": ShoppingBag,
  "🛍": ShoppingBag,
  "📷": Camera,
  "🎯": Binoculars,

  // Military / history (route-specific)
  "🪖": Shield,
  "⚔️": Hammer,

  // Weather
  "☀️": Sun,
  "☀": Sun,
  "🌤️": CloudSun,
  "🌤": CloudSun,
  "⛅": CloudSun,
  "☁️": Cloud,
  "☁": Cloud,
  "🌧️": CloudRain,
  "🌧": CloudRain,
  "🌦️": CloudDrizzle,
  "🌦": CloudDrizzle,
  "🌨️": CloudSnow,
  "🌨": CloudSnow,
  "❄️": Snowflake,
  "❄": Snowflake,
  "⛈️": CloudLightning,
  "⛈": CloudLightning,
  "🌫️": CloudFog,
  "🌫": CloudFog,
  "🌡️": Thermometer,
  "🌡": Thermometer,

  // Ceremonial / decorative — used in section kickers
  "🍻": Beer,
  "🧀": Cookie,
  "🍴": Utensils,
  "🌶️": Leaf,
  "🚩": Flag,
};

const SVG_NS = "http://www.w3.org/2000/svg";

export function lucideToSvgElement(icon: IconNode, sizeEm = 1): SVGElement {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("width", `${sizeEm}em`);
  svg.setAttribute("height", `${sizeEm}em`);
  svg.style.display = "inline-block";
  svg.style.verticalAlign = "-0.15em";
  svg.style.flexShrink = "0";

  for (const [tag, attrs] of icon) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs ?? {})) {
      el.setAttribute(k, String(v));
    }
    svg.appendChild(el);
  }
  return svg;
}
