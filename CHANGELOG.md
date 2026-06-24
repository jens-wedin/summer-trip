# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Photo gallery (`/photos`, "Resealbumet")** — a bento-style grid of trip
  photos with an accessible full-screen lightbox (focus-trapped, Esc to close,
  ←/→ to navigate, focus restored on close), plus a **Foton** entry in the
  masthead nav. Photos are auto-discovered from `src/photos/` via a Vite
  build-time glob (drop a file in, commit, push — no code edits per photo) and
  shown newest-first. Optional per-photo captions/date/place live in
  `src/data/photoCaptions.ts`. A new `src/lib/photos.ts` helper (with unit
  tests) builds and sorts the list; the responsive-audit spec now also covers
  the `/photos` route.

### Changed
- **Day 1 itinerary** — recorded the real stops: lunch + Supercharging in
  Jönköping (A6) and an afternoon fika at Vandalorum in Värnamo, with a new
  story passage on Piet Oudolf's garden and Renzo Piano's barns, plus resource
  links to the museum. Added actual timings (departed 09:30, reached Malmö
  18:28) and corrected the waypoint order (Jönköping before Vandalorum) so the
  route map no longer zig-zags south of Värnamo. Also recorded the Malmö
  evening: the stay at the MJ's boutique hotel and a (generous) tapas dinner at
  Vibliotek by the canal, with a resource link.
- **Day 2 itinerary** — rewrote the story to the real day: breakfast at MJ's,
  the Öresund crossing, yarn from Hjelholts Uldspinderi (family wool mill on
  Funen, est. 1878), lunch at the Wendorff bakery in Odense, and a late dinner
  at Landgut Stemmen (salad, Wiener schnitzel, currywurst). Enriched the
  en-route stops (dropped Kronborg, which was skipped), added a restaurant
  description to the lodging, and added Hjelholt + Wendorff resource links.
- **Day 3 itinerary** — rewrote the story to the real day: a long drive from
  Stemmen to Gent across three countries (Germany, Netherlands, Belgium) with a
  quick salad lunch while charging, then Gent — check-in at the Jam Hotel (Sara
  stayed in with a headache), burgers at Tush on Hoogpoort, and an evening walk
  through the medieval centre (Sint-Niklaaskerk, Gravensteen, Graslei/Korenlei).
  Replaced the speculative Düsseldorf/Maastricht en-route stops with the actual
  route.
- **Day 4 itinerary** — rewrote the story to the real day: out of Gent and west
  to the Channel coast, a beach-and-bunkers walk at Bray-Dunes (near Dunkerque),
  the chalk cliffs of Cap Blanc-Nez above the beach at Escalles, a far-too-large
  pinsa lunch, then the soaring Pont de Normandie into Honfleur — dinner at
  L'Absinthe, an evening stroll through the old port, and chess back at the hotel
  by its "honesty bar". Updated the waypoints (Bray-Dunes, Escalles) and replaced
  the speculative en-route stops; noted the L'Absinthe restaurant + honesty bar
  in the lodging.
- **Trip photos** — added 46 more photos (102 total), optimized to ~2000px/q80,
  and captioned all of them (caption + date + place) from EXIF time/GPS and
  image content.

### Fixed
- **Responsive & accessibility (mobile)** — resolved all five block-merge
  findings from the 2026-05-05 responsive audit:
  - Masthead title no longer overflows at 320/360 — now fluid
    `clamp(2rem, 10.5vw, 6rem)`; a residual ~2px Leaflet overlay-SVG overflow on
    the front page is contained with `overflow-x-clip`.
  - Masthead nav links now have a 44×44 touch target; the `ThemeToggle` no
    longer compresses (`shrink-0`) and is a full 44px.
  - The day-page charging table is now a keyboard-focusable region with an
    accessible name.
  - The Paris things-to-do filter switches meet WCAG 1.4.3 contrast in both
    light and dark themes (auto-picked text colour + darkened café swatch).
  - Bonus: checklist toggle enlarged 16→24px (WCAG 2.5.8) with a focus ring.
  Re-audit: **0 horizontal overflow and 0 axe violations** across all 40
  route×breakpoint measurements.

### Added
- `src/lib/contrast.ts` — WCAG relative-luminance / contrast helpers
  (`readableTextColor`) with unit tests.
- The responsive-audit spec now records axe node selectors / HTML / failure
  summaries, so contrast and scrollable-region findings can be triaged without
  re-investigation.

## [1.0.0] - 2026-05-05

First public cut of *The Wedin Tribune* — a Stockholm → Paris → Stockholm
roadtrip planner styled like a paper newspaper, deployed to GitHub Pages.

### Added
- **Trip itinerary** — 14-day Stockholm → Paris → Stockholm route (21 Jun –
  4 Jul 2026), with day pages, photo galleries, lodging, and per-day checklists
  driven from `src/data/trip.ts`.
- **Travel content sections** — dedicated pages for Paris (history, food, museums,
  WWII / Napoleon-era sites), Normandy (D-Day sites, Bayeux base, timeline),
  towns along the route (Malmö, Lund, Helsingborg, Stemmen, Gent, Bayeux,
  Honfleur, Recklinghausen, Lübeck, Waterloo), packing checklist, food, drinks,
  and a 14-day weather forecast page powered by Open-Meteo.
- **Route map** — full continental loop on Leaflet / OpenStreetMap with
  per-day highlighting, restyled to fit the newsprint aesthetic.
- **Late Edition theme system** — semantic CSS-variable tokens, light + dark
  variants per content category, `data-theme` pre-paint script to avoid flash,
  `ThemeToggle` button in the masthead, and `useTheme` hook driving Leaflet
  polyline / marker colors via `mapColors`.
- **Swedish localization** — site chrome, trip metadata, all day pages, all
  travel content (Paris, Normandy, towns, food, drinks, weather), enum labels,
  and map UI translated to Swedish. Swedish is now the default language.
- **GitHub Pages deploy** — automatic deploy to
  `https://jens-wedin.github.io/summer-trip/` on every push to `main`,
  with self-enabling Pages on first run.
- **QA gate scaffolding** — Vitest + React Testing Library for unit tests,
  Playwright + axe-core for E2E and runtime accessibility scans, with reports
  written to `qa-reports/`.

### Changed
- Migrated theme colors from hardcoded amber utilities to semantic CSS-variable
  tokens, enabling light / dark mode switching.
- Replaced the original synthetic itinerary with the real 21 Jun – 4 Jul route.
- Swapped Helsingborg for Lund on days 13–14 and added Lund lodging info.

### Fixed
- Removed redundant synchronous `setState` calls inside `WeatherPage`'s
  `useEffect`, clearing a `react-hooks/set-state-in-effect` lint error.
- Restored the *Wish list* badge accent color after the token migration.
- Stubbed `localStorage` in tests to work around a Node 25 conflict.

[Unreleased]: https://github.com/jens-wedin/summer-trip/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/jens-wedin/summer-trip/releases/tag/v1.0.0
