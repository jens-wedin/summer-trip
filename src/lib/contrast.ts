// WCAG relative-luminance + contrast helpers.
// Used to pick a readable text color (ink vs paper) over an arbitrary
// background swatch — e.g. the category-coloured filter switches on the
// Paris things-to-do map, where the active background is a per-category hue.

const INK = "#1a1a1a";
const PAPER = "#fdfaf3";

function channel(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

export function relativeLuminance(hex: string): number {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

/** Returns whichever of ink / paper has the higher contrast against `bg`. */
export function readableTextColor(bg: string): string {
  return contrastRatio(PAPER, bg) >= contrastRatio(INK, bg) ? PAPER : INK;
}
