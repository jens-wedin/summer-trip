import { test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

type Breakpoint = { name: string; width: number; height: number; isMobile: boolean };
type Route = { name: string; path: string };

const BREAKPOINTS: Breakpoint[] = [
  { name: "320", width: 320, height: 720, isMobile: true },
  { name: "360", width: 360, height: 800, isMobile: true },
  { name: "768", width: 768, height: 1024, isMobile: false },
  { name: "1024", width: 1024, height: 768, isMobile: false },
  { name: "1440", width: 1440, height: 900, isMobile: false },
];

const ROUTES: Route[] = [
  { name: "front", path: "./" },
  { name: "itinerary", path: "./itinerary" },
  { name: "day-1", path: "./day/1" },
  { name: "map", path: "./map" },
  { name: "towns", path: "./towns" },
  { name: "paris", path: "./paris" },
  { name: "normandy", path: "./normandy" },
  { name: "weather", path: "./weather" },
];

const A11Y_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

type Finding = {
  route: string;
  breakpoint: string;
  width: number;
  horizontalOverflow: boolean;
  scrollWidth: number;
  bodyFontSizePx: number;
  smallTouchTargets: { tag: string; text: string; w: number; h: number }[];
  axeViolations: {
    id: string;
    impact: string | null | undefined;
    nodeCount: number;
    help: string;
    nodes: { target: string[]; html: string; failureSummary?: string }[];
  }[];
  axeIncomplete: { id: string; nodeCount: number }[];
};

const findings: Finding[] = [];

for (const route of ROUTES) {
  for (const bp of BREAKPOINTS) {
    test(`${route.name} @ ${bp.name}`, async ({ browser }) => {
      const ctx = await browser.newContext({
        viewport: { width: bp.width, height: bp.height },
        deviceScaleFactor: 1,
        hasTouch: bp.isMobile,
      });
      const page = await ctx.newPage();
      await page.goto(route.path);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(400);

      const screenshotPath = `qa-reports/responsive-screenshots/${route.name}-${bp.name}.png`;
      mkdirSync(dirname(screenshotPath), { recursive: true });
      await page.screenshot({ path: screenshotPath, fullPage: false });

      const layout = await page.evaluate(() => {
        const docEl = document.documentElement;
        const overflow = docEl.scrollWidth > window.innerWidth + 1;
        const bodyFs = parseFloat(
          getComputedStyle(document.body).fontSize || "0",
        );
        const targets: {
          tag: string;
          text: string;
          w: number;
          h: number;
        }[] = [];
        const interactive = document.querySelectorAll<HTMLElement>(
          'a, button, [role="button"], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        interactive.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) return;
          if (r.width < 44 || r.height < 44) {
            const text = (el.innerText || (el as HTMLInputElement).value || el.getAttribute("aria-label") || el.tagName).slice(0, 60);
            targets.push({
              tag: el.tagName.toLowerCase(),
              text: text.replace(/\s+/g, " ").trim(),
              w: Math.round(r.width),
              h: Math.round(r.height),
            });
          }
        });
        return {
          horizontalOverflow: overflow,
          scrollWidth: docEl.scrollWidth,
          bodyFontSizePx: bodyFs,
          smallTouchTargets: targets,
        };
      });

      const axe = await new AxeBuilder({ page }).withTags(A11Y_TAGS).analyze();

      findings.push({
        route: route.name,
        breakpoint: bp.name,
        width: bp.width,
        horizontalOverflow: layout.horizontalOverflow,
        scrollWidth: layout.scrollWidth,
        bodyFontSizePx: layout.bodyFontSizePx,
        smallTouchTargets: bp.isMobile ? layout.smallTouchTargets : [],
        axeViolations: axe.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodeCount: v.nodes.length,
          help: v.help,
          nodes: v.nodes.slice(0, 5).map((n) => ({
            target: n.target.map((t) => String(t)),
            html: n.html.slice(0, 220),
            failureSummary: n.failureSummary,
          })),
        })),
        axeIncomplete: axe.incomplete.map((v) => ({
          id: v.id,
          nodeCount: v.nodes.length,
        })),
      });

      await ctx.close();
    });
  }
}

test.afterAll(() => {
  const out = "qa-reports/responsive-audit-2026-05-05.json";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), findings }, null, 2));
});
