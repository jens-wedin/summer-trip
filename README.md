# The Wedin Tribune — Summer Roadtrip 2026

A small React app for planning and remembering a 14-day Stockholm → Paris → Stockholm
roadtrip (21 Jun – 4 Jul 2026). Designed to read like a paper newspaper: serif headlines,
double rules, drop caps, and a faint newsprint texture.

Live at **https://jens-wedin.github.io/summer-trip/**.

## What's inside

- **Front Page** — masthead, lead story, by-the-numbers, route map, "inside this issue" rail.
- **Itinerary** — every day, distance, lodging, and a teaser.
- **Day pages** (`/day/1` … `/day/14`) — story columns with drop cap, photo gallery, route map
  highlighting the day, lodging, and a per-day checklist.
- **Route Map** — the full continental loop on Leaflet / OpenStreetMap, restyled to fit the paper aesthetic.
- **Towns** — Malmö, Lund, Stemmen, Gent, Bayeux, Honfleur, Roermond, Lübeck, Waterloo.
- **Paris** — history, museums, WWII / Napoleon-era sites, neighbourhoods, cafes, restaurants, hotels.
- **Normandy** — D-Day sites by sector, Bayeux base, restaurants, shuttle and timeline.
- **Food & Drinks** — a curated regional eat-and-drink list along the route.
- **Weather** — a 14-day forecast for every stop, powered by Open-Meteo.
- **Packing** — sectioned packing manifest, persisted in `localStorage`.
- **Photos** (`/photos`) — "Resealbumet", a bento-style gallery of trip photos with an
  accessible full-screen lightbox (keyboard + Esc/arrows). Auto-discovered from `src/photos/`.

The default UI language is Swedish.

All trip content lives under [`src/data/`](src/data/) (`trip.ts`, `paris.ts`, `normandy.ts`,
`towns.ts`, `food.ts`, `drinks.ts`, `weather.ts`) — easily edited.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS (paper palette, serif typography, semantic CSS-variable tokens for theming)
- React Router (basename driven by `import.meta.env.BASE_URL` for the `/summer-trip/` deploy)
- React-Leaflet + OpenStreetMap tiles
- Light + Late-Edition dark theme via `data-theme` + a no-flash pre-paint script

## Running it

```bash
npm install
npm run dev      # http://localhost:5173/summer-trip/
npm run build
npm run preview  # http://localhost:4173/summer-trip/
```

## Testing & QA

```bash
npm run test                   # vitest unit tests (jsdom + RTL)
npx playwright test            # Playwright e2e (i18n smoke + axe-core a11y scan)
npx tsc -b                     # typecheck
npm run lint                   # eslint
```

The full QA gate (typecheck → lint → unit → build → e2e → runtime a11y → audit) runs via the
`/manfred-dev:test-my-code` skill and writes a report to `qa-reports/`.

## Deploy

Pushes to `main` deploy automatically to GitHub Pages via the workflow in
[`.github/workflows/`](.github/workflows/). The first deploy self-enables Pages on the repo.

## Editing trip content

Open `src/data/trip.ts` and edit the `trip` object. Each day has:

- `title`, `kicker`, `date`
- `from` / `to` / optional `waypoints` (lat/lng)
- `drivingKm`, `drivingDuration`
- `lodging`
- `story` — array of paragraphs (the first gets a drop cap)
- `pullQuote` — optional
- `images` — `{ src, caption?, credit? }[]`
- `checklist` — `{ id, label, done }[]`

Replace the `picsum.photos` URLs with your own as photos come in.

The packing checklist is in the same file under `packingChecklist`.

## Adding photos during the trip

Drop image files (`.jpg` / `.jpeg` / `.png`) into [`src/photos/`](src/photos/), then
commit and push. A Vite build-time glob auto-discovers them, so no code edits are needed
per photo — the GitHub Pages build picks them up and they appear on the **Foton** page,
newest first.

To caption a photo (optional), add a line to [`src/data/photoCaptions.ts`](src/data/photoCaptions.ts)
keyed by file name:

```ts
"IMG_0648.jpeg": { caption: "Fika på Vandalorum", place: "Värnamo", date: "21 juni" },
```

Captions are optional — photos render fine without an entry.
