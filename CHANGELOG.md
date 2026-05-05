# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
