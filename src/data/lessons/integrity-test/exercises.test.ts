/**
 * integrity — سلامةُ تمارين الفراغات (عددُ الفراغات يساوي عددَ الأجوبة، وعلامةُ الثلاث شرطات، والإجابةُ ضمن الخيارات، ولا تكرار) · وسلامةُ الاختيار من متعدد (نطاقُ correctIndex ولا خيارات مكرّرة) · وتمارينُ ترتيب الكلمات (الرموزُ تُكوّن الجملة الصحيحة بالضبط) · وتمارينُ تصحيح الخطأ (المفتاحُ حرفيّ ضمن الخيارات، ولا مشتّت يُقيَّم صحيحاً)
 * فُصل من integrity.test.ts في الدفعة 111 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `describe` منقولة حرفياً بإعدادها الداخلي؛ والمشتركات في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { NO_ERROR_OPTION } from "@/lib/lesson/error-correction-highlight";
import { evaluateErrorCorrection } from "@/lib/lesson/exercise-engine";
import { LESSONS } from "@/data/lessons";
import type { Exercise } from "@/types/lesson";
import { allExercises } from "./fixtures";

describe("سلامة تمارين الفراغات", () => {
  const fillBlanks = allExercises().filter(
    (e): e is { key: string; ex: Extract<Exercise, { type: "fill-blank" }> } =>
      e.ex.type === "fill-blank",
  );

  it("يجد تمارين fill-blank فعلاً (حماية من فحص فارغ)", () => {
    expect(fillBlanks.length).toBeGreaterThan(50);
  });

  it("عدد فراغات القالب يساوي عدد الإجابات (العطل W)", () => {
    const bad = fillBlanks
      .filter(({ ex }) => ex.template.split("___").length - 1 !== ex.blanks.length)
      .map(({ key, ex }) => `${key}: ${ex.template.split("___").length - 1} فراغ / ${ex.blanks.length} إجابة`);
    expect(bad).toEqual([]);
  });

  it("علامة الفراغ ثلاث شرطات دائماً — لا __ ولا ____", () => {
    const bad = fillBlanks
      .filter(({ ex }) => /(?<!_)__(?!_)|____/.test(ex.template))
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });

  it("الإجابة الصحيحة موجودة ضمن الخيارات", () => {
    const bad = fillBlanks
      .flatMap(({ key, ex }) =>
        ex.blanks
          .map((b, i) => (b.options && !b.options.includes(b.correct) ? `${key}#${i}` : null))
          .filter(Boolean),
      );
    expect(bad).toEqual([]);
  });

  it("لا خيارات مكرّرة داخل الفراغ الواحد (العطل B)", () => {
    const bad = fillBlanks.flatMap(({ key, ex }) =>
      ex.blanks
        .map((b, i) => (b.options && new Set(b.options).size !== b.options.length ? `${key}#${i}` : null))
        .filter(Boolean),
    );
    expect(bad).toEqual([]);
  });
});

describe("سلامة تمارين الاختيار من متعدد", () => {
  const mcqs = allExercises().filter(
    (e): e is { key: string; ex: Extract<Exercise, { type: "multiple-choice" }> } => e.ex.type === "multiple-choice",
  );

  it("يجد تمارين mcq فعلاً (حماية من فحص فارغ)", () => {
    expect(mcqs.length).toBeGreaterThan(100);
  });

  it("correctIndex ضمن نطاق الخيارات", () => {
    const bad = mcqs
      .filter(({ ex }) => ex.correctIndex < 0 || ex.correctIndex >= ex.options.length)
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });

  it("لا خيارات مكرّرة داخل السؤال الواحد (العطل B)", () => {
    const bad = mcqs
      .filter(({ ex }) => new Set(ex.options).size !== ex.options.length)
      .map(({ key }) => key);
    expect(bad).toEqual([]);
  });
});

describe("تمارين ترتيب الكلمات", () => {
  it("الرموز تُكوّن الجملة الصحيحة بالضبط (العطل A)", () => {
    // يحاكي evaluateOrdering: الحروف المفردة تُوصل بلا مسافة، وغيرها بمسافة.
    const norm = (s: string) =>
      s.toLowerCase().trim().replace(/[.,!?;:«»„“”()"'،؟؛]/g, " ").replace(/\s+/g, " ").trim();
    let checked = 0;
    const broken: string[] = [];
    for (const lesson of LESSONS) {
      for (const key of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[key] ?? []) as Exercise[]) {
          if (ex.type !== "word-ordering") continue;
          checked++;
          const tokens = ex.tokens ?? [];
          const isLetter = tokens.length > 1 && tokens.every((x) => x.trim().length === 1);
          const cut = (s: string) =>
            (isLetter ? norm(s).replace(/\s+/g, "").split("") : norm(s).split(" "))
              .filter(Boolean)
              .sort()
              .join(" ");
          if (cut(tokens.join(isLetter ? "" : " ")) !== cut(ex.correctSentence ?? ""))
            broken.push(
              `${lesson.id}:${ex.id} tokens=${JSON.stringify(tokens)} correct=${JSON.stringify(ex.correctSentence)}`,
            );
        }
      }
    }
    expect(checked).toBeGreaterThan(90);
    expect(broken, `تمارين ترتيب غير قابلة للحل:\n${broken.join("\n")}`).toEqual([]);
  });

});

describe("تمارين تصحيح الخطأ", () => {
  it("المفتاح موجود حرفياً ضمن الخيارات", () => {
    const broken: string[] = [];
    let checked = 0;
    for (const { key, ex } of allExercises()) {
      if (ex.type !== "error-correction") continue;
      checked++;
      if (!ex.options.includes(ex.correctWord)) {
        broken.push(
          `${key} — correctWord ${JSON.stringify(ex.correctWord)} ليس ضمن ${JSON.stringify(ex.options)}`,
        );
      }
    }
    expect(checked).toBeGreaterThan(130);
    expect(broken, `مفاتيح غير قابلة للاختيار:\n${broken.join("\n")}`).toEqual([]);
  });

  it("لا خيار مكرّر ولا مشتّت يُقيَّم صحيحاً", () => {
    const broken: string[] = [];
    for (const { key, ex } of allExercises()) {
      if (ex.type !== "error-correction") continue;
      // في البند الخادع يستبدل العارض المفتاحَ بخيار «لا خطأ»
      const expected = ex.isAlreadyCorrect ? NO_ERROR_OPTION : ex.correctWord;
      const shown = ex.isAlreadyCorrect
        ? [...ex.options.filter((o) => o !== ex.correctWord), NO_ERROR_OPTION]
        : ex.options;
      const seen = new Set<string>();
      for (const option of shown) {
        if (seen.has(option)) broken.push(`${key} — خيار مكرّر ${JSON.stringify(option)}`);
        seen.add(option);
      }
      // كل مشتّت يجب أن يُقيَّم خاطئاً فعلياً عبر المحرّك الحقيقي
      for (const option of shown) {
        if (option === expected) continue;
        if (evaluateErrorCorrection(ex, option).isCorrect) {
          broken.push(`${key} — المشتّت ${JSON.stringify(option)} يُقبل كإجابة صحيحة`);
        }
      }
      if (!evaluateErrorCorrection(ex, expected).isCorrect) {
        broken.push(`${key} — المفتاح نفسه يُرفض`);
      }
      // بند غير مُعلَّم isAlreadyCorrect لكن «تصحيحه» = «خطؤه»: بند خادع
      // فقد علمه، فيصير غير قابل للحل (المتعلّم يُصحّح ما ليس خطأً).
      if (!ex.isAlreadyCorrect && ex.wrongWord.trim() === ex.correctWord.trim()) {
        broken.push(`${key} — wrongWord = correctWord بلا isAlreadyCorrect`);
      }
    }
    expect(broken, `خلل في تمارين التصحيح:\n${broken.join("\n")}`).toEqual([]);
  });

});
