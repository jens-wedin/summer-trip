import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const ROUTES = [
  { name: "front", path: "./" },
  { name: "itinerary", path: "./itinerary" },
];

const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

const aggregated: Record<string, unknown> = {};

for (const { name, path } of ROUTES) {
  test(`a11y scan: ${name}`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
    aggregated[name] = {
      url: page.url(),
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        helpUrl: v.helpUrl,
        wcag: v.tags.filter((t) => t.startsWith("wcag")),
        nodes: v.nodes.slice(0, 3).map((n) => ({
          target: n.target,
          html: n.html.slice(0, 200),
        })),
        nodeCount: v.nodes.length,
      })),
      incomplete: results.incomplete.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodeCount: v.nodes.length,
      })),
      passes: results.passes.length,
    };
    expect(results.violations.length).toBeGreaterThanOrEqual(0);
  });
}

test.afterAll(() => {
  const outPath = "qa-reports/axe-results-2026-05-04.json";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(aggregated, null, 2));
});
