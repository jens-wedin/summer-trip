# Dark Mode — Late Edition

**Status:** Approved
**Date:** 2026-05-03
**Project:** summer-trip

## Goal

Add a dark mode to the summer-trip app that preserves the newspaper aesthetic. Read like a paper held under lamplight — warm cocoa-brown paper, cream type, sepia accents preserved. Respect the user's system preference by default; allow manual override that persists across sessions.

## Non-Goals

- Photo duotone / re-treated photo style. Photos keep the existing sepia + halftone treatment.
- High-contrast mode.
- Per-page theme overrides.
- A third theme. Only `light` and `dark`.

## Direction

**Late Edition** — warm dark. Cream-on-cocoa rather than white-on-charcoal. Concretely:
- Paper shifts from `#f4efe4` (cream) to `#1c1812` (cocoa-brown).
- Ink shifts from `#1a1a1a` to `#f0e6d2` (cream).
- Sepia accents (rules, halftone, photo wash) stay warm — they shift hue but keep the "old paper" character.

## Architecture

Five pieces:

1. **Token layer** — semantic CSS custom properties on `:root[data-theme="…"]`, consumed by both `index.css` component classes and Tailwind utilities.
2. **Theme controller** — `src/lib/theme.ts`: resolve initial theme, apply, persist, subscribe to system changes.
3. **Pre-paint script** — inline `<script>` in `index.html` that sets `data-theme` before React mounts. Prevents the flash of light theme on a dark-preferring system.
4. **Toggle UI** — sun/moon icon button in `Masthead.tsx`.
5. **Map adapter** — `src/lib/mapColors.ts` + `useTheme()` consumed by the four Leaflet map components so polyline/marker colors swap with theme.

### Data flow

```
index.html pre-paint script
  → reads localStorage["theme"] or matchMedia
  → sets <html data-theme="…">

React mounts
  → useTheme() reads document.documentElement.dataset.theme
  → user toggles → setTheme() → updates DOM, localStorage
  → matchMedia listener updates only when no manual override stored
```

The DOM `data-theme` attribute is the single source of truth for which theme is active. CSS reads it via `:root[data-theme="…"]`, JS reads it via `document.documentElement.dataset.theme`.

## Token layer

Add to `src/index.css`, replacing the current `:root { color-scheme: light; … }` block:

```css
:root,
:root[data-theme="light"] {
  color-scheme: light;
  --color-paper:        #f4efe4;
  --color-paper-dark:   #e8e1d0;
  --color-ink:          #1a1a1a;
  --color-ink-soft:     #1f1c17;
  --color-deck:         #3a352e;
  --color-muted:        #5a5650;
  --color-rule:         #1a1a1a;
  --color-rule-soft:    rgba(26, 26, 26, 0.4);
  --color-accent:       #8b1a1a;
  --color-map-bg:       #ece4d2;
  --halftone-dot:       rgba(26, 26, 26, 0.55);
  --halftone-hi:        rgba(244, 239, 228, 0.35);
  --bg-dot-1:           rgba(26, 26, 26, 0.035);
  --bg-dot-2:           rgba(26, 26, 26, 0.025);
  --photo-tint:         #5a3a1a;
  --photo-tint-opacity: 0.35;
  --tile-filter:        grayscale(0.9) contrast(0.9) sepia(0.25) brightness(1.02);
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --color-paper:        #1c1812;
  --color-paper-dark:   #2a221a;
  --color-ink:          #f0e6d2;
  --color-ink-soft:     #e3d8be;
  --color-deck:         #c9bca0;
  --color-muted:        #8a8170;
  --color-rule:         #b8a888;
  --color-rule-soft:    rgba(184, 168, 136, 0.35);
  --color-accent:       #d97a5a;
  --color-map-bg:       #2a221a;
  --halftone-dot:       rgba(240, 230, 210, 0.45);
  --halftone-hi:        rgba(28, 24, 18, 0.35);
  --bg-dot-1:           rgba(240, 230, 210, 0.05);
  --bg-dot-2:           rgba(240, 230, 210, 0.035);
  --photo-tint:         #5a3a1a;
  --photo-tint-opacity: 0.55;
  --tile-filter:        grayscale(0.85) contrast(0.95) sepia(0.4) brightness(0.55);
}
```

Update every literal in `index.css` to reference these vars, including:
- `body` background + dot pattern → `var(--color-paper)`, `var(--bg-dot-1)`, `var(--bg-dot-2)`
- `.deck`, `.kicker`, `.byline`, `.body-prose`, `.pull-quote`, `.drop-cap` → `var(--color-deck)` / `var(--color-ink)` / `var(--color-muted)` / `var(--color-ink-soft)`
- `.rule`, `.rule-thin`, `.double-rule` → `var(--color-rule)` / `var(--color-rule-soft)`
- `.newsprint-frame` background, `::before` (halftone), `::after` (sepia wash) → vars
- `.brand-emoji` keeps its filter unchanged (it's a per-glyph effect, not theme-bound)
- `.leaflet-container` background → `var(--color-map-bg)`
- `.leaflet-tile-pane` filter → `var(--tile-filter)`
- `.leaflet-control-attribution` background → `rgba` derived from paper, OK to hardcode an alpha-on-paper value per theme inside its own selector

Update `tailwind.config.js` to point semantic colors at the vars:

```js
colors: {
  ink:       "var(--color-ink)",
  paper:     "var(--color-paper)",
  paperDark: "var(--color-paper-dark)",
  rule:      "var(--color-rule)",
  accent:    "var(--color-accent)",
  muted:     "var(--color-muted)",
}
```

The `bg-amber-*` / `text-amber-*` classes currently used in components (4 occurrences) get migrated to semantic tokens (`bg-paperDark`, `text-accent`, `border-rule`) as part of the same change.

## Theme controller — `src/lib/theme.ts`

```ts
export type Theme = "light" | "dark";
const STORAGE_KEY = "theme";
const EVENT = "themechange";

export function getStoredTheme(): Theme | null {
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "light" || v === "dark" ? v : null;
}

export function getSystemTheme(): Theme {
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new CustomEvent(EVENT, { detail: theme }));
}

export function setTheme(theme: Theme): void {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function clearStoredTheme(): void {
  localStorage.removeItem(STORAGE_KEY);
  applyTheme(getSystemTheme());
}
```

React hook — `src/lib/useTheme.ts`:

```ts
export function useTheme(): {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};
```

The hook:
- Initializes from `document.documentElement.dataset.theme` (set pre-paint).
- Subscribes to the `themechange` window event dispatched by `applyTheme()` so multiple `useTheme()` consumers stay in sync.
- Subscribes to `matchMedia("(prefers-color-scheme: dark)")` and calls `applyTheme(getSystemTheme())` only when `getStoredTheme()` is null (no manual override).
- `toggle()` calls `setTheme(theme === "dark" ? "light" : "dark")`.

## Pre-paint script — `index.html`

Inline `<script>` in `<head>`, before any other script:

```html
<script>
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var theme = stored
        || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
    } catch (e) {
      document.documentElement.dataset.theme = "light";
    }
  })();
</script>
```

Six effective lines. Runs synchronously, so the very first paint uses the correct theme.

## Toggle UI

Add a `<ThemeToggle />` component (`src/components/ThemeToggle.tsx`) and place it inside `Masthead.tsx` at the right edge of the masthead row.

- Renders a `<button>` with a Lucide `Sun` icon when `theme === "dark"` (click → switch to light) and `Moon` when `theme === "light"`.
- `aria-label` reflects the action: `"Switch to dark mode"` / `"Switch to light mode"`.
- `aria-pressed={theme === "dark"}`.
- Visible focus ring using `outline: 2px solid var(--color-ink); outline-offset: 2px`.
- Hit area ≥ 40×40 px.
- Sits in the masthead so it's reachable from every route without a separate nav.

## Map adapter — `src/lib/mapColors.ts`

```ts
export type MapPalette = {
  route: string;         // primary polyline color (driving route)
  routeAlt: string;      // secondary polyline (e.g. walking, ferry)
  marker: string;        // marker fill
  markerStroke: string;  // marker outline
  label: string;         // tooltip / label text
  labelBg: string;       // tooltip / label background
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
```

Each of the four map components (`RouteMap`, `ParisMap`, `ParisThingsMap`, `NormandyMap`) calls `useTheme()` and passes `mapColors(theme)` into its Leaflet props. Tile filter remains CSS-driven via `--tile-filter`.

## Tests

`src/lib/theme.test.ts`:
- `getInitialTheme()` returns stored value when present.
- `getInitialTheme()` falls back to system when storage empty.
- `applyTheme("dark")` sets `data-theme="dark"` on the document element.
- `setTheme("light")` writes to localStorage and applies.
- `clearStoredTheme()` removes the entry and reverts to system.

`src/components/ThemeToggle.test.tsx`:
- Renders Sun icon when `data-theme="dark"`; Moon when `light`.
- Click flips the theme on the document and in localStorage.
- `aria-label` updates after toggle.
- Reachable via Tab; Enter and Space activate.

`src/App.test.tsx` smoke test:
- Render with `data-theme="dark"` set; assert `getComputedStyle(document.body).backgroundColor` matches the dark paper color.
- Render with `data-theme="light"`; assert it matches the light paper color.

## Risks / open questions

- **Map tile readability in dark.** OpenStreetMap tiles aren't designed for dark filtering. The proposed `grayscale(0.85) sepia(0.4) brightness(0.55)` is a starting point — may need tuning during implementation if labels become unreadable.
- **Halftone visibility.** The cream-on-cocoa dot pattern (`--halftone-dot` at `rgba(240,230,210,0.45)`) needs visual verification on the cocoa background. If it's too noisy, drop opacity to `0.30`.
- **Accent color in dark.** Light theme uses `#8b1a1a` (deep red). On cocoa it reads dark and muddy, so dark theme uses `#d97a5a` (terracotta). Verify against actual UI before locking in.

## Migration order

1. Tokens in `index.css` + `tailwind.config.js` (light theme only — verify nothing visually changed).
2. `theme.ts` + `useTheme.ts` + tests.
3. Pre-paint script + dark theme tokens.
4. `ThemeToggle` in masthead + tests.
5. `mapColors.ts` + map components.
6. Migrate residual `bg-amber-*` / hardcoded utilities to semantic tokens.
7. Visual QA pass in both themes across all routes.

Each step is independently shippable; the app stays in light mode and works normally until step 3 lands.
