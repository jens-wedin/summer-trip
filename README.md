# The Wedin Tribune — Summer Roadtrip 2026

A small React app for planning and remembering a 14-day Stockholm → Paris → Stockholm roadtrip.
Designed to read like a paper newspaper: serif headlines, double rules, drop caps, and a faint
newsprint texture.

## What's inside

- **Front Page** — masthead, lead story, by-the-numbers, route map, "inside this issue" rail.
- **Itinerary** — every day, distance, lodging, and a teaser.
- **Day pages** (`/day/1` … `/day/14`) — story columns with drop cap, photo gallery, route map
  highlighting the day, lodging, and a per-day checklist.
- **Route Map** — the full continental loop on Leaflet/OpenStreetMap, restyled to fit the paper aesthetic.
- **Packing** — sectioned packing manifest, persisted in `localStorage`.

All trip content lives in [`src/data/trip.ts`](src/data/trip.ts) — synthetic for now, easily replaced.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS (paper palette, serif typography)
- React Router
- React-Leaflet + OpenStreetMap tiles

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

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
