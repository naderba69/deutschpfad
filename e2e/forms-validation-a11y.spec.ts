import {expect, test} from "@playwright/test";

/**
 * محاكي الاستمارات — رسائل التحقّق.
 *
 * قبل الجولة السابعة كان زر الإرسال معطّلاً حتى تكتمل الحقول، فمحاولة الإرسال
 * تُتجاهل بصمت: المتعلّم لا يعرف أي حقل ناقص، وقارئ الشاشة لا يُعلَن له شيء
 * (WCAG 3.3.1 / 4.1.3). هذه الاختبارات تحمي السلوك الجديد: إعلان النقص،
 * وصف لكل حقل، نقل التركيز إلى أول حقل ناقص، وإعلان النجاح عند الاكتمال.
 */
test("الاستمارة: الإرسال الناقص يعلن الحقول ويصفها وينقل التركيز", async ({page}) => {
  await page.goto("/forms");

  const submit = page.getByRole("button", {name: /إرسال النموذج/}).first();
  await expect(submit).toBeEnabled();
  await submit.click();

  // 1) رسالة إعلانية جامعة
  const alert = page.getByRole("alert").first();
  await expect(alert).toBeVisible();
  await expect(alert).toContainText(/حقول فارغة|حقل/);

  // 2) كل حقل ناقص صار غير صالح وله وصف موجود
  const firstInvalid = page.locator('[aria-invalid="true"]').first();
  await expect(firstInvalid).toBeVisible();
  const describedBy = await firstInvalid.getAttribute("aria-describedby");
  expect(describedBy, "الحقل غير الصالح يجب أن يشير إلى نص يشرح السبب").toBeTruthy();
  await expect(page.locator(`#${describedBy}`)).toContainText("مطلوب");

  // 3) التركيز انتقل إلى أول حقل ناقص (لا يبقى على الزر)
  await expect(firstInvalid).toBeFocused();

  // 4) لا أخطاء JavaScript
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.waitForTimeout(200);
  expect(errors).toEqual([]);
});

test("الاستمارة: الاكتمال يعرض تأكيداً معلَناً (role=status)", async ({page}) => {
  await page.goto("/forms");

  // املأ حقول أول استمارة فقط (الأولى في الصفحة)
  const firstCard = page.locator("[data-practice]").first();
  const fields = firstCard.locator("input, select");
  const n = await fields.count();

  for (let i = 0; i < n; i++) {
    const f = fields.nth(i);
    const tag = await f.evaluate((el) => el.tagName);
    if (tag === "SELECT") {
      const options = await f.locator("option").count();
      if (options > 1) await f.selectOption({index: 1});
    } else {
      // القيم حسب نوع الحقل — الحقول ليست كلها نصية (date/number/tel)
      const type = await f.getAttribute("type");
      if (type === "date") await f.fill("1995-04-12");
      else if (type === "number") await f.fill("10115");
      else if (type === "tel") await f.fill("0301234567");
      else await f.fill("نادر");
    }
  }

  await firstCard.locator("xpath=ancestor::div[contains(@class,'space-y-4')][1]").getByRole("button", {name: /إرسال النموذج/}).click();

  const status = page.getByRole("status").first();
  await expect(status).toBeVisible();
  await expect(status).toContainText(/بنجاح|أُرسل/);
});
