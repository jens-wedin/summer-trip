# Responsive audit: summer-trip (8 key routes)

- **Date:** 2026-05-05
- **Audited:** build (vite preview, v1.0.0 — commit 53566c2)
- **Routes:** `/`, `/itinerary`, `/day/1`, `/map`, `/towns`, `/paris`, `/normandy`, `/weather`
- **Breakpoints:** 320, 360, 768, 1024, 1440
- **Method:** Chromium via Playwright (40 measurements: 8 routes × 5 breakpoints), checking horizontal overflow, body font size, touch-target dimensions, and runtime axe-core (WCAG 2.0/2.1/2.2 A+AA)
- **Real devices:** none — this audit is emulator-only. **Recommendation:** spot-check the block-merge findings on at least one real iOS phone (iPhone SE / 13 mini for the 320 / 360 class) and one real Android (Pixel 5 / Galaxy A53) before marking these closed.
- **Linear:** none (skipped)
- **Raw data:** [qa-reports/responsive-audit-2026-05-05.json](../qa-reports/responsive-audit-2026-05-05.json)
- **Screenshots:** [qa-reports/responsive-screenshots/](../qa-reports/responsive-screenshots/) (40 files: `<route>-<bp>.png`)

## Summary

- **5 block-merge findings** — every audited route breaks at 320 / 360
- **1 high-priority finding** — Paris page has a color-contrast axe failure at all desktop breakpoints
- **2 cleanup themes** — many small touch targets across mobile, plus 56 axe `incomplete` items needing manual review

The desktop story is healthy (1024 / 1440 are clean except for one Paris contrast issue). The mobile story is not — there are layout and tap-target failures that affect every route, and they all trace back to two shared chrome components (`Masthead`, `ThemeToggle`).

---

## ✅ Resolution — 2026-06-21

All five block-merge findings are fixed and verified by a clean re-run of
`e2e/responsive-audit.spec.ts` (`--workers=1`, production build):
**0 horizontal overflow and 0 axe violations across all 40 route × breakpoint
measurements.** Body font stays 17 px everywhere.

| # | Fix | Files |
|---|-----|-------|
| **B1** | Masthead title is now fluid `clamp(2rem, 10.5vw, 6rem)` (fits 320, caps at the original 96 px) with `break-words`. A residual ~2 px overflow from Leaflet's *transformed overlay-pane SVG* on `/` — not caught by clipping the map wrapper (a headless-Chromium quirk) — is contained with `overflow-x-clip` on the FrontPage `<article>` (horizontal-only; map popups + vertical scroll unaffected). | `components/Masthead.tsx`, `pages/FrontPage.tsx` |
| **B2** | Each nav link now has a 44 × 44 hit area (`inline-flex items-center min-h-[44px] px-2`). | `components/Masthead.tsx` |
| **B3** | The real cause was flex squeezing, not size: `ThemeToggle` gets `shrink-0` (+ a true 44 px box), and "Pris · Ett leende" is hidden below `sm:` to relieve the mobile top row. | `components/ThemeToggle.tsx`, `components/Masthead.tsx` |
| **B4** | The scrollable region was the charging-table `overflow-x-auto` wrapper. Made keyboard-focusable with an accessible name (`tabIndex={0}`, `role="region"`, `aria-label`, focus-visible ring). | `pages/DayPage.tsx` |
| **B5** | The contrast node was **not** a `ParisPage` token — it was the active filter switch in `ParisThingsMap`, hardcoding white `#fdfaf3` on the category colour (`#a06a30` café = 4.38:1). Fixed by darkening light `cafes` → `#94612b` and choosing the switch text via a new `readableTextColor()` helper. The helper also fixes the **dark-theme** switches (white on light pastels, 2.2–2.9:1) that this light-only audit never exercised. | `lib/contrast.ts` (+ `contrast.test.ts`), `data/paris.ts`, `components/ParisThingsMap.tsx` |

**Beyond the block-merge list:**

- Checklist toggle enlarged 16 × 16 → 24 × 24 (clears WCAG 2.2 AA SC 2.5.8) and given a focus-visible ring (`components/Checklist.tsx`).
- The audit spec now captures axe node `target` / `html` / `failureSummary` (the appendix's recommendation) — this is how B4 and B5 were pinpointed without guesswork.

**Still open (C1 cleanup, non-gating — all WCAG-compliant):** inline prose / section-anchor links flagged on the height axis only (compliant via the 2.5.8 spacing exception), and the third-party Leaflet zoom (30 × 30) and attribution controls. The real-device pass in the next steps below is still recommended.

## Block-merge

### B1 — Horizontal overflow at 320 + 360 on every route

| Where | Breakpoints | Evidence |
|-------|-------------|----------|
| `src/components/Masthead.tsx:24-26` (the `<h1 class="masthead text-[64px]">Sommarresan 2026</h1>` title) | 320, 360 | `document.documentElement.scrollWidth = 431` on every audited route at both 320 and 360. Same value across 16 measurements points to a single shared overflowing element. |

**Why it happens.** The masthead title is rendered at a fixed `text-[64px]` until `md:` (768), so at 320 / 360 the words "Sommarresan 2026" plus the container's `px-6` padding push the document scroll width to ~431 px. Everything else inside the `max-w-6xl mx-auto` container stays under width — only the title escapes.

**Recommended fix.** Step the title down at small viewports, e.g. `text-[40px] sm:text-[52px] md:text-[96px]` (or `clamp()`), so the line fits inside the viewport at 320. Verify by re-running the audit and checking that `scrollWidth ≤ window.innerWidth + 1` at 320 and 360. While you're in there, consider `break-words` / `hyphens-auto` on the `<h1>` as a belt-and-braces guard.

### B2 — Masthead nav links 19 px tall on mobile

| Where | Breakpoints | Evidence |
|-------|-------------|----------|
| `src/components/Masthead.tsx:48-58` (the `<nav>` `<Link>` items) | 320, 360 | All 10 nav links measure ~80–108 × 19 px. Under WCAG 2.2 AA "Target Size (Minimum)" (24 × 24, SC 2.5.8) on the height axis; well under iOS HIG (44 × 44). |

**Why it happens.** The links are `text-[12px] kicker` with no per-item vertical padding. The parent `<nav>` has `py-3` (12 px top/bottom), but that only pads the nav as a whole — it doesn't grow each item's hit-rect.

**Recommended fix.** Add `py-2 -my-2` (or similar) to each `<Link>` so the visual position stays the same but the hit-rect grows to ≥ 24 px tall. Or restyle the mobile nav as a hamburger / off-canvas drawer (probably the better long-term answer given there are 10 destinations).

### B3 — ThemeToggle button compresses below WCAG 2.5.8 at narrow viewports

| Where | Breakpoints | Evidence |
|-------|-------------|----------|
| `src/components/ThemeToggle.tsx:11` (`className="… w-10 h-10 …"`) | 320, 360 | Measured 24 × 40 at 320 and 28 × 40 at 360. The button is declared 40 × 40 but is being squeezed by the flex-row siblings ("Pris · Ett leende") in the masthead's top kicker bar. At 24 px wide it fails WCAG 2.2 AA SC 2.5.8 (24 × 24); at 28 px it's borderline. Both fail iOS HIG. |

**Recommended fix.** In the masthead's top row (`Masthead.tsx:11-15`) the `<span class="flex items-center gap-3">Pris · Ett leende <ThemeToggle/></span>` doesn't constrain its children. Either (a) hide the "Pris · Ett leende" text below `sm:` (`<span class="hidden sm:inline">…</span>`), (b) give `ThemeToggle` a `shrink-0` so it never compresses, or (c) move the toggle out of the kicker row at mobile. The fastest fix is `shrink-0` on the toggle root.

### B4 — `scrollable-region-focusable` on `/day/1` at 320 / 360 (axe serious)

| Where | Breakpoints | Evidence |
|-------|-------------|----------|
| Some day-page descendant (likely the photo gallery's column container or a Leaflet route highlight) | 320, 360 | axe rule `scrollable-region-focusable` — 1 node, impact serious. WCAG 2.1 SC 2.1.1 (Keyboard). |

**Why it matters.** A scrollable element without `tabindex="0"` cannot be reached by keyboard users to scroll it. At desktop the same content fits without scrolling, which is why this only fires on mobile.

**Recommended fix.** Find the offending element and either (a) make its content fit so it doesn't need to scroll, or (b) add `tabindex="0"` and a visible focus style. To identify: add `--include-tags=wcag2a` to the next axe run with `--reporter=html`, or open `/day/1` at 320 px in DevTools and search for `overflow: auto/scroll` rules on visible nodes.

### B5 — Color contrast failure on `/paris` at 768 / 1024 / 1440 (axe serious)

| Where | Breakpoints | Evidence |
|-------|-------------|----------|
| One node on the Paris page | 768, 1024, 1440 | axe rule `color-contrast`, 1 node, impact serious. Same node across all three desktop sizes — pure styling, not layout-dependent. |

**Why it matters.** Fails WCAG 2.0 / 2.1 SC 1.4.3 (Contrast (Minimum)). One foreground/background pairing on the Paris page does not meet 4.5:1 (or 3:1 for large text).

**Recommended fix.** Re-run the audit with the rule report saved to `qa-reports/` to see the exact selector and the measured ratio (the current spec stores rule id + node count but not the offending node). Then adjust the offending color in [src/index.css](../src/index.css) or wherever the Paris page colors are tokenized. (This was likely missed when light tokens were introduced — gate 7 of `/test-my-code` saw `incomplete` results here, not a hard failure, because the site's contrast was previously borderline.)

## High-priority

None beyond B5 (which is severity-bumped to block-merge because it's a serious axe violation, per the audit checklist's "a11y critical/serious" rule).

## Cleanup

### C1 — 439 small touch targets across the 16 mobile measurements

After de-duplicating the chrome (the 10 nav links + 1 theme toggle appear on every page), the remaining small targets are inline body links — e.g. on `/paris` (41 small targets at 320), the 5–8 reading and "see also" links inside body prose are 12 × 19 px tall. WCAG 2.2 AA SC 2.5.8 has a "spacing exception" that excuses inline-text links if they have ≥ 24 px between targets, so most of these are technically compliant — but they're cramped on phones.

**Recommended fix.** Optional. If you want phone usability beyond WCAG, consider raising body link line-height (`leading-relaxed` on `.body-prose`) and adding `py-1` to standalone CTA-style links (the "Fortsätt läsa Dag ett →" pattern).

### C2 — 56 axe `incomplete` results (manual review)

Across the 40 measurements, axe could not auto-determine pass/fail for:

- `color-contrast` × 31 — typically text over image / gradient / partially-transparent surfaces.
- `link-in-text-block` × 25 — in-prose links relying on color alone to be distinguishable.

These are the same items flagged in the most recent gate 7 report ([qa-reports/i18n-window-2026-05-04.md](../qa-reports/i18n-window-2026-05-04.md)). Spot-check candidates:

- The newsprint kicker/byline color over `bg-paper` — easy contrast picker check.
- The `.ink-link` style and any in-prose `<a>` — confirm an underline is applied rather than relying on accent color alone.

## A11y per breakpoint

| Breakpoint | axe violations (serious) | axe incomplete | Notes |
|------------|--------------------------|----------------|-------|
| 320 | 1 (`scrollable-region-focusable` on `/day/1`) | 11 | Most overflow + tap-target issues live here. |
| 360 | 1 (same as 320) | 11 | Same chrome issues at slightly less overflow. |
| 768 | 1 (`color-contrast` on `/paris`) | 11 | Layout fits; only the Paris contrast issue. |
| 1024 | 1 (same as 768) | 12 | Clean. |
| 1440 | 1 (same as 768) | 11 | Clean. |
| **Total** | **5 violations across 5 unique cases** | **56** | All violations are serious-impact. |

Body font size is 17 px at every breakpoint (≥ 16 px minimum) — passes.

## Recommended next steps

1. **Block before deploy** — fix B1, B2, B3 (all in `Masthead.tsx` + `ThemeToggle.tsx`). One PR, ~30 minutes of work, unblocks every mobile route.
2. **Block before deploy** — investigate B4 on `/day/1` and B5 on `/paris`. Both are serious-impact axe violations and both narrow to a single offending node.
3. **Real-device pass** — once the four chrome fixes are in, spot-check `/`, `/itinerary`, `/day/1`, `/paris` on one iOS phone and one Android. Look for the things axe and viewport emulation can't catch: dynamic-text scaling, address-bar height, real touch ergonomics.
4. **Re-run this audit** — `npx playwright test e2e/responsive-audit.spec.ts --workers=1` regenerates the JSON + screenshots. Targets to clear: 0 horizontal overflow at 320/360, 0 sub-24×24 chrome targets, 0 serious axe violations.
5. **Cleanup later** — C1 (body link spacing) and C2 (axe incomplete spot-check) can be a separate "responsive polish" ticket; not gating.

## Appendix — methodology notes

- The audit JSON stores `axeViolations` as `{id, impact, nodeCount, help}` — node selectors and the offending HTML are not currently captured. To get those, set `AxeBuilder` results to keep `.nodes[].target` and `.nodes[].html`. Worth doing before the next run if you want to fix B5 without re-investigating manually.
- Touch-target detection only flagged elements with width OR height < 44. WCAG 2.2 AA's true threshold is 24 × 24, so some flagged items pass WCAG and only fail iOS HIG. Both the body and the report use 44 px as the bar because phones are touch devices and HIG is the operational target.
- The audit ran against `vite preview` at port 4173 (production build of v1.0.0). Dev mode (`npm run dev`) may show different behaviour due to Tailwind JIT and HMR overlays — always audit production builds.
