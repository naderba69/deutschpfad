import { expect, type Page } from "@playwright/test";

import { seedLessonCompletions } from "./session-gate";

/**
 * Advance the stepwise lesson to a named section, checking each transition.
 * البوابة تمنع المرور إلى مرحلة جديدة قبل حل تمارين السابقة، فنكتب إنجازات الدرس
 * أولاً (الاختبار يهتم بعرض القسم المطلوب، لا بحل التمارين).
 */
export async function navigateLessonToSection(page: Page, sectionTitle: string): Promise<void> {
  const lessonId = new URL(page.url()).pathname.split("/").filter(Boolean).pop() ?? "";
  if (lessonId) await seedLessonCompletions(page, lessonId);
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
