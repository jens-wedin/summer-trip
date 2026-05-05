import { test, expect } from "@playwright/test";

test.describe("i18n smoke — Swedish translation window", () => {
  test("front page renders Swedish copy without console errors", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => {
      consoleErrors.push(`pageerror: ${err.message}`);
    });

    await page.goto("./");

    await expect(
      page.getByText("Sommarbilresenumret · Specialbilaga"),
    ).toBeVisible();
    await expect(page.getByText("Dagar på vägen")).toBeVisible();
    await expect(page.getByText("Länder vi passerar")).toBeVisible();

    expect(consoleErrors, consoleErrors.join("\n")).toEqual([]);
  });

  test("itinerary route renders Swedish copy", async ({ page }) => {
    await page.goto("./itinerary");
    await expect(page).toHaveURL(/\/itinerary$/);
    const html = (await page.content()).toLowerCase();
    expect(html).toMatch(/dag|resa|expedition|färd|sträcka|kilometer|km/);
  });
});
