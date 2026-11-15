import {expect, test} from "@playwright/test";

/**
 * الجداول والبيانات الكبيرة — سلوك الشجرة الدلالية فعلياً.
 *
 * الجولة الثامنة أضافت لجدول الأفعال أسماً ورؤوس أعمدة/صفوف، ولقوائم النتائج
 * دلالة `ul/li`، وللعدّادات `role=status`. الاختبارات هنا تتحقّق من النتيجة كما
 * يراها المستخدم: الأدوار ظاهرة في شجرة الوصول، والتصفية تُعلَن، والصفوف مرتبطة
 * برؤوسها.
 */
test("جدول الأفعال الشاذة: اسم، رؤوس أعمدة، ورأس صف لكل صف", async ({page}) => {
  await page.goto("/verben");

  const table = page.getByRole("table", {name: /جدول الأفعال الشاذة/});
  await expect(table).toBeVisible();

  // 6 رؤوس أعمدة مسمّاة
  const colHeaders = table.getByRole("columnheader");
  await expect(colHeaders).toHaveCount(6);

  // كل صف بيانات له رأس صف (الفعل) — لا خلية عادية أولى
  const rowHeaders = table.getByRole("rowheader");
  const bodyRows = table.locator("tbody tr");
  await expect(bodyRows.first()).toBeVisible();
  const rowCount = await bodyRows.count();
  expect(await rowHeaders.count(), "كل صف له رأس صف").toBe(rowCount);
});

test("قاموس المفردات: عدّاد النتائج منطقة حيّة تتبع البحث", async ({page}) => {
  await page.goto("/glossar");

  const status = page.locator('[role="status"]').filter({hasText: /كلمة/});
  await expect(status).toBeVisible();
  const before = (await status.textContent()) ?? "";
  expect(before).toMatch(/\d+\s*كلمة/);

  // تصفية بنص لا يطابق أغلب الكلمات
  const search = page.getByLabel("البحث في القاموس");
  await search.fill("zzzz");

  await expect(status).toHaveText(/0 كلمة/);
  // حالة الفراغ صريحة أيضاً
  await expect(page.getByText("لا نتائج مطابقة.", {exact: false})).toBeVisible();
});

test("قاموس B2: قائمة النتائج دلالية، والموضوع زر مبدّل بحالة معلَنة", async ({page}) => {
  await page.goto("/wortschatz-b2");

  const group = page.getByRole("group", {name: "تصفية بالموضوع"});
  await expect(group).toBeVisible();

  const firstTopic = group.getByRole("button").first();
  await expect(firstTopic).toHaveAttribute("aria-pressed", "false");
  await firstTopic.click();
  await expect(firstTopic).toHaveAttribute("aria-pressed", "true");

  // القائمة دلالية: كل كلمة عنصر قائمة داخل قائمة واحدة
  const list = page.locator("main ul").filter({has: page.locator("li")}).first();
  const items = list.locator(":scope > li");
  expect(await items.count()).toBeGreaterThan(1);
  await expect(page.getByRole("listitem").first()).toBeVisible();
});

test("أعلى 500 كلمة: الفلاتر مجموعة مسماة، والعدّاد معلَن", async ({page}) => {
  await page.goto("/wortschatz-b2/top500");

  await expect(page.getByRole("group", {name: "تصفية بالموضوع"})).toBeVisible();
  await expect(page.getByRole("group", {name: "تصفية بأولوية المراجعة"})).toBeVisible();

  const status = page.locator('[role="status"]').filter({hasText: /كلمة وتعبير/});
  await expect(status).toBeVisible();
  const before = (await status.textContent()) || "";

  await page.getByLabel("ابحث في مفردات B2").fill("zzzz");
  await expect(status).not.toHaveText(before);
  await expect(page.getByText(/لا كلمات تطابق/)).toBeVisible();
});

test("جدول الدرس: منطقة تمرير قابلة للتركيز وتُمرَّر بالأسهم (WCAG 2.1.1)", async ({page}) => {
  // الجداول العريضة تفيض أفقياً على الشاشة الضيقة؛ بلا منطقة تركيز يبقى
  // العمود الأخير غير قابل للوصول لمن يستخدم لوحة المفاتيح فقط.
  await page.setViewportSize({width: 360, height: 800});
  await page.goto("/verben");

  const region = page.getByRole("region", {name: /جدول الأفعال الشاذة/});
  await expect(region).toBeVisible();
  await expect(region).toHaveAttribute("tabindex", "0");

  // المنطقة تفيض فعلاً في هذا العرض
  const overflows = await region.evaluate((el) => el.scrollWidth > el.clientWidth + 1);
  expect(overflows, "الجدول يجب أن يفيض أفقياً عند 360px").toBe(true);

  // التركيز ثم السهم الأيسر/الأيمن يمرّر المحتوى (RTL: الأيسر يزيد scrollLeft؟ لا —
  // نتحقّق من تغيّر القيمة فقط بأحد الاتجاهين)
  await region.focus();
  const before = await region.evaluate((el) => el.scrollLeft);
  await page.keyboard.press("ArrowLeft");
  await page.waitForTimeout(150);
  const afterLeft = await region.evaluate((el) => el.scrollLeft);
  if (afterLeft === before) {
    await page.keyboard.press("ArrowRight");
    await page.waitForTimeout(150);
  }
  const after = await region.evaluate((el) => el.scrollLeft);
  expect(after, "التمرير بالأسهم يجب أن يحرّك المحتوى").not.toBe(before);
});
