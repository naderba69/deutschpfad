import { expect, test } from "@playwright/test";

/** الدفعة 130 — المراجعة اليدوية من الأبجدية السابقة تظهر فعلياً في الدرس. */
test("A1-01 يعرض المراجعة التراكمية من درس الأبجدية A1-00", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await page.getByRole("button", { name: "عرض الكل" }).click();
  await expect(page.getByText("Welche Buchstabenkombination klingt wie „sch“?")).toBeVisible({ timeout: 15_000 });
  const review = page.getByRole("region", { name: "مراجعة تراكمية (Interleaving)" });
  await expect(review.getByRole("combobox", { name: "الفراغ 1" })).toBeVisible({ timeout: 15_000 });
  await expect(page.getByText("tter (Plural von Mutter)")).toBeVisible({ timeout: 15_000 });
  await expect(page.getByText("Welche Schreibung ist richtig?")).toBeVisible({ timeout: 15_000 });
});
