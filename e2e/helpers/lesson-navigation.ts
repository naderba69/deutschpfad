import { expect, type Page } from "@playwright/test";

/** Advance the stepwise lesson to a named section, checking each transition. */
export async function navigateLessonToSection(page: Page, sectionTitle: string): Promise<void> {
  const heading = page.locator("#lesson-step-content h2").first();

  for (let step = 0; step < 20; step++) {
    await expect(heading).toBeVisible();
    const currentTitle = (await heading.innerText()).trim();
    if (currentTitle.includes(sectionTitle)) return;

    const nextButton = page.getByRole("button", { name: /^التالي:/ }).last();
    await expect(nextButton, `لا يمكن الانتقال إلى «${sectionTitle}» من «${currentTitle}»`).toBeEnabled();
    await nextButton.click();
    await expect(heading).not.toHaveText(currentTitle, { timeout: 5000 });
  }

  throw new Error(`لم يظهر القسم «${sectionTitle}» بعد 20 انتقالاً`);
}
