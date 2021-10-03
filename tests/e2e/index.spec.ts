import { test, expect, Page } from "@playwright/test";
import { getUrl } from "./playwright.config";

const setup = async (page: Page) => {
  const valueOneInput = page.locator("#valueOne");
  const valueTwoInput = page.locator("#valueTwo");
  const addBtn = page.locator("button#add");
  const results = page.locator("#results");
  const multiplyBtn = page.locator("button#multiply");
  return { valueOneInput, valueTwoInput, addBtn, results, multiplyBtn };
};

test.describe("Default tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(getUrl());
  });

  test("title", async ({ page }) => {
    await expect(page).toHaveTitle("XMPLR E2E test fixture");
  });

  test("add", async ({ page }) => {
    const { valueOneInput, valueTwoInput, addBtn, results } = await setup(page);
    await valueOneInput?.type("3");
    await valueTwoInput?.type("4");
    await addBtn?.click();
    expect(await results.innerHTML()).toBe("7");
  });

  test("multiply", async ({ page }) => {
    const { valueOneInput, valueTwoInput, multiplyBtn, results } = await setup(
      page
    );
    await valueOneInput?.type("3");
    await valueTwoInput?.type("4");
    await multiplyBtn?.click();
    expect(await results.innerHTML()).toBe("12");
  });
});
