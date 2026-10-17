/**
 * ═══════════════════════════════════════════════════════════
 *  حارس بنك أسئلة الاختبارات (`src/data/tests/question-banks.ts`)
 *
 *  الدافع (تدقيق 2026-10-16): هذا أكبر ملف بيانات على المنصة (≈74KB) وكان
 *  **بلا أي اختبار**، وقياس المواضع كشف أن **171/171 إجابة صحيحة في الموضع
 *  الأول (100%)** — أي أن المتعلّم يُنهي اختبار المستوى/الأسبوعي باختيار
 *  الخيار الأول دائماً. والسبب مركّب: البنك مكتوب بالإجابة أولاً، ومحرّكان
 *  (level-test · weekly-test) لا يخلطان الخيارات (الخلط كان في محرّك واحد فقط).
 *
 *  الإصلاح طبقتان، وهذا الحارس يقيسهما:
 *   1) البيانات: `balanceTestBank` توزّع المواضع (الفحص 4 هنا).
 *   2) العرض: المحرّكات الثلاثة تستدعي `shuffleTestQuestions` (الفحص 5).
 *  ويُضاف فحص السلامة البنيوية (المعرّفات والخيارات والشرح) الذي كان غائباً.
 * ═══════════════════════════════════════════════════════════
 */
import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { TEST_BANK } from "@/data/tests/question-banks";

/** دليل ألماني في الشرح: كلمة من ثلاثة أحرف لاتينية على الأقل */
const GERMAN_EVIDENCE = /[A-Za-zÄÖÜäöüß]{3,}/;

/** بنك B2 كان 31 عنصراً لكل مستوى — الحدّ الأدنى المتوقّع */
const MIN_PER_LEVEL = 25;

describe("بنك أسئلة الاختبارات — سلامة بنيوية", () => {
  it("المعرّفات فريدة، وكل مستوى وكل مهارة ممثَّلان", () => {
    const ids = TEST_BANK.map((q) => q.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(duplicates).toEqual([]);

    for (const level of ["A1", "A2", "B1", "B2"] as const) {
      const count = TEST_BANK.filter((q) => q.level === level).length;
      expect(count, `${level}: عدد العناصر`).toBeGreaterThanOrEqual(MIN_PER_LEVEL);
    }
    for (const skill of ["grammatik", "wortschatz", "lesen", "hören", "schreiben"] as const) {
      expect(TEST_BANK.some((q) => q.skill === skill), `مهارة غائبة: ${skill}`).toBe(true);
    }
  });

  it("كل سؤال اختيار: خيارات سليمة وفهرس داخل الحدود وشرح بدليل ألماني", () => {
    /* تصنيف الحقول بحسب النوع (خطأ قاعدة أول مرة، لا عيب بيانات):
       · اختيار مباشر (correctIndex) → شرح بدليل ألماني.
       · قطعة قراءة/استماع → الشرح في أسئلتها الفرعية لا في جذرها.
       · كتابة → تُقاس بمطالبتها وسلّمها وإجابة نموذجية ونقاط، لا بشرح. */
    const problems: string[] = [];
    for (const q of TEST_BANK) {
      const isPassage = (q.questions ?? []).length > 0;
      if (typeof q.correctIndex === "number") {
        const options = q.options ?? [];
        if (options.length < 2) problems.push(`${q.id}: أقل من خيارين`);
        if (options.some((o) => o.trim().length === 0)) problems.push(`${q.id}: خيار فارغ`);
        const normalized = options.map((o) => o.trim().toLowerCase());
        if (new Set(normalized).size !== normalized.length) problems.push(`${q.id}: خيار مكرّر`);
        if (q.correctIndex < 0 || q.correctIndex >= options.length) problems.push(`${q.id}: فهرس خارج الحدود`);
      }
      if (q.kind === "writing") {
        if (!q.prompt || q.prompt.trim().length === 0) problems.push(`${q.id}: نصّ المهمة مفقود`);
        if (!q.promptAr || q.promptAr.trim().length === 0) problems.push(`${q.id}: شرح المهمة بالعربية مفقود`);
        if (!q.rubric || q.rubric.trim().length === 0) problems.push(`${q.id}: سلّم التصحيح مفقود`);
        if (!q.sampleAnswer || !GERMAN_EVIDENCE.test(q.sampleAnswer)) problems.push(`${q.id}: إجابة نموذجية بلا نصّ ألماني`);
        if (typeof q.points !== "number" || q.points <= 0) problems.push(`${q.id}: نقاط المهمة غير صالحة`);
        continue;
      }
      if (isPassage) continue;
      if (!q.explanation || q.explanation.trim().length === 0) problems.push(`${q.id}: شرح مفقود`);
      else if (!GERMAN_EVIDENCE.test(q.explanation)) problems.push(`${q.id}: شرح بلا دليل ألماني «${q.explanation}»`);
    }
    expect(problems).toEqual([]);
  });

  it("كل قطعة قراءة/استماع: نصّ عربي مقابل وأسئلة فرعية سليمة + سقّاطة شروح بلا دليل", () => {
    const problems: string[] = [];
    /* صفر صارم — بعد تصفير السقّاطة في الدفعة 52: كان 66 شرحاً فرعياً في القطع
       لا يقتبس كلمة ألمانية (مثل «لأنها تريد السفر.» مقابل النصّ «weil sie reisen
       möchte»)، فأُثريت الـ66 كلها بمقتبس حرفي من القطع. لم يبقَ سقف يُخفيه:
       أي شرح فرعي جديد بلا دليل ألماني يُسقط الحارس فوراً. */
    const subWithoutGerman: string[] = [];
    for (const q of TEST_BANK) {
      if (!q.questions || q.questions.length === 0) continue;
      if (!q.text || q.text.trim().length === 0) problems.push(`${q.id}: نصّ ألماني مفقود`);
      if (!q.textAr || q.textAr.trim().length === 0) problems.push(`${q.id}: ترجمة النصّ مفقودة`);
      q.questions.forEach((sub, i) => {
        const at = `${q.id} سؤال ${i + 1}`;
        if (!sub.qAr || sub.qAr.trim().length === 0) problems.push(`${at}: صيغة السؤال بالعربية مفقودة`);
        if (sub.options.length < 2) problems.push(`${at}: أقل من خيارين`);
        if (sub.options.some((o) => o.trim().length === 0)) problems.push(`${at}: خيار فارغ`);
        const normalized = sub.options.map((o) => o.trim().toLowerCase());
        if (new Set(normalized).size !== normalized.length) problems.push(`${at}: خيار مكرّر`);
        if (typeof sub.correct !== "number" || sub.correct < 0 || sub.correct >= sub.options.length) {
          problems.push(`${at}: فهرس صحيح خارج الحدود`);
        }
        if (!sub.explanation || sub.explanation.trim().length === 0) {
          problems.push(`${at}: شرح فرعي مفقود`);
        } else if (!GERMAN_EVIDENCE.test(sub.explanation)) {
          subWithoutGerman.push(at);
        }
      });
    }
    expect(problems).toEqual([]);
    expect(
      subWithoutGerman,
      `شروح فرعية بلا دليل ألماني: ${subWithoutGerman.slice(0, 8).join(" · ")}`,
    ).toEqual([]);
  });
});

describe("بنك أسئلة الاختبارات — توزيع مواضع الإجابة الصحيحة", () => {
  /** كل الإجابات المصحَّحة في البنك (اختيار مباشر + أسئلة فرعية) */
  function allCorrectPositions(): number[] {
    const out: number[] = [];
    for (const q of TEST_BANK) {
      if (typeof q.correctIndex === "number") out.push(q.correctIndex);
      for (const sub of q.questions ?? []) out.push(sub.correct);
    }
    return out;
  }

  it("المواضع الأربعة كلها مستعملة ولا يهيمن موضع واحد (كان 100% في الأول)", () => {
    const positions = allCorrectPositions();
    expect(positions.length).toBeGreaterThan(150); // حارس غير فارغ
    for (const pos of [0, 1, 2, 3]) {
      expect(positions.filter((p) => p === pos).length, `الموضع ${pos} غير مستعمل`).toBeGreaterThan(0);
    }
    const share = (pos: number) => (100 * positions.filter((p) => p === pos).length) / positions.length;
    for (const pos of [0, 1, 2, 3]) {
      expect(share(pos), `حصة الموضع ${pos}`).toBeLessThanOrEqual(35);
    }
  });

  it("لا مجموعة (مستوى + مهارة) كل إجاباتها في الموضع نفسه", () => {
    const problems: string[] = [];
    const groups = new Map<string, number[]>();
    for (const q of TEST_BANK) {
      const key = `${q.level}·${q.skill}`;
      const list = groups.get(key) ?? [];
      if (typeof q.correctIndex === "number") list.push(q.correctIndex);
      for (const sub of q.questions ?? []) list.push(sub.correct);
      groups.set(key, list);
    }
    for (const [key, positions] of groups) {
      if (positions.length < 4) continue; // المجموعات الصغيرة لا تُحكم
      const distinct = new Set(positions);
      if (distinct.size < 2) problems.push(`${key}: ${positions.length} إجابة كلها في الموضع ${positions[0]}`);
    }
    expect(problems).toEqual([]);
  });
});

describe("بنك أسئلة الاختبارات — المحرّكات تخلط الخيارات", () => {
  /**
   * فحص مصدري (لا يمكن فحصه وقت التشغيل لأن الخلط يعتمد على العشوائية):
   * أي محرّك يعرض أسئلة البنك ويصحّح بالفهرس **يجب** أن يخلط الخيارات —
   * وإلا عادت ثغرة «اختر الخيار الأول دائماً».
   */
  const ENGINES = [
    "src/components/tests/level-test.tsx",
    "src/components/tests/weekly-test.tsx",
    "src/components/tests/placement-diagnostic.tsx",
  ];

  it("كل محرّك يستورد shuffleTestQuestions ويستدعيها", () => {
    const problems: string[] = [];
    for (const rel of ENGINES) {
      const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
      if (!src.includes("shuffleTestQuestions")) problems.push(`${rel}: لا يستورد/يستدعي shuffleTestQuestions`);
      if (!/shuffleTestQuestions\s*\(/.test(src)) problems.push(`${rel}: استيراد بلا استدعاء`);
    }
    expect(problems).toEqual([]);
  });

  it("البنك المُستهلك هو المُوازَن — والنسخة الخام للتدقيق فقط", () => {
    const rel = "src/data/tests/question-banks.ts";
    const src = fs.readFileSync(path.join(process.cwd(), rel), "utf8");
    expect(src).toContain("balanceTestBank(RAW_TEST_BANK)");
    const exports = src.match(/export const \w+/g) ?? [];
    expect(exports).toEqual(["export const RAW_TEST_BANK", "export const TEST_BANK"]);

    /**
     * نيّة القاعدة الأصلية: **لا يستهلك مكوّنٌ نسخة غير موازَنة**. صيغتها الأولى
     * منعت التصدير منعاً باتاً، فصارت تمنع أيضاً التدقيق المقيس — لأن أي قياس
     * سطحي (طول الخيار، موضع الإجابة) على النسخة المُوازَنة يقيس إعادة الترتيب لا
     * ما كُتب. ففُتح التصدير للحرّاس وحدها، وبقي المنع على كل ملف إنتاجي.
     */
    const offenders: string[] = [];
    const stack = ["src"];
    while (stack.length) {
      const dir = stack.pop() as string;
      for (const entry of fs.readdirSync(path.join(process.cwd(), dir), { withFileTypes: true })) {
        const rel2 = path.join(dir, entry.name);
        if (entry.isDirectory()) stack.push(rel2);
        else if (/\.tsx?$/.test(entry.name) && !entry.name.endsWith(".test.ts")) {
          const body = fs.readFileSync(path.join(process.cwd(), rel2), "utf8");
          if (/RAW_TEST_BANK/.test(body) && !rel2.endsWith("src/data/tests/question-banks.ts")) {
            offenders.push(rel2);
          }
        }
      }
    }
    expect(offenders, `ملفات إنتاجية تستهلك النسخة الخام: ${offenders.join(" · ")}`).toEqual([]);
  });
});
