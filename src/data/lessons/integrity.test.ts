/**
 * حرّاس سلامة المحتوى — يمنعون عودة أعطال اكتُشفت في تدقيق 2026-08.
 *
 * كل اختبار هنا يقابل عطلاً حقيقياً وصل إلى المتعلّم:
 *  - W: عدد فراغات القالب (___) لا يساوي عدد الإجابات ⇒ قوائم منسدلة
 *       تُعرض أمام الجملة الخطأ، وجُمل بلا حقل إدخال إطلاقاً.
 *  - علامة الفراغ الناقصة (__ بدل ___) ⇒ لا يُقسَّم القالب أصلاً.
 *  - B: خيارات مكرّرة داخل السؤال الواحد.
 *  - ترتيب الفهرس: التنقّل «السابق/التالي» يتبع ترتيب المصفوفة.
 */

import { describe, expect, it } from "vitest";

import { buildHighlightSegments } from "@/lib/lesson/error-correction-highlight";
import { evaluateErrorCorrection } from "@/lib/lesson/exercise-engine";
import { LESSONS } from "@/data/lessons";
import { LESSON_META } from "@/data/lessons/meta";
import type { Exercise } from "@/types/lesson";

/** كل التمارين في كل الدروس، مع معرّف يسهل تتبّعه */
function allExercises(): { key: string; ex: Exercise }[] {
  const out: { key: string; ex: Exercise }[] = [];
  for (const lesson of LESSONS) {
    // lesson.writing نوعه WritingExercise، وهو مجموعة جزئية من Exercise
    // (transformation | dictation | fill-blank | ordering) فيدخل الفحوص بأمان.
    // يبقى lesson.listening خارجها لأن ListeningQuestion نوع مستقل.
    const buckets: (Exercise[] | undefined)[] = [
      lesson.practiceBank,
      lesson.miniTest,
      lesson.review,
      lesson.writing,
    ];
    for (const bucket of buckets) {
      for (const ex of bucket ?? []) out.push({ key: `${lesson.id}:${ex.id}`, ex });
    }
  }
  return out;
}

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
      const seen = new Set<string>();
      for (const option of ex.options) {
        if (seen.has(option)) broken.push(`${key} — خيار مكرّر ${JSON.stringify(option)}`);
        seen.add(option);
      }
      // كل مشتّت يجب أن يُقيَّم خاطئاً فعلياً عبر المحرّك الحقيقي
      for (const option of ex.options) {
        if (option === ex.correctWord) continue;
        if (evaluateErrorCorrection(ex, option).isCorrect) {
          broken.push(`${key} — المشتّت ${JSON.stringify(option)} يُقبل كإجابة صحيحة`);
        }
      }
      if (!evaluateErrorCorrection(ex, ex.correctWord).isCorrect) {
        broken.push(`${key} — المفتاح نفسه يُرفض`);
      }
    }
    expect(broken, `خلل في تمارين التصحيح:\n${broken.join("\n")}`).toEqual([]);
  });

});

describe("ترتيب فهرس الدروس", () => {
  it("مرتّب حسب المستوى ثم الوحدة ثم ترتيب الدرس (التنقّل يعتمد موضع المصفوفة)", () => {
    const rank = { A1: 0, A2: 1, B1: 2, B2: 3 } as const;
    const keys = LESSON_META.map((l) => [rank[l.level], l.unitId, l.order] as const);
    const sorted = [...keys].sort(
      (a, b) => a[0] - b[0] || a[1].localeCompare(b[1]) || a[2] - b[2],
    );
    expect(keys).toEqual(sorted);
  });

  it("كل درس في الفهرس له ملف محتوى فعلي", () => {
    const ids = new Set(LESSONS.map((l) => l.id));
    const missing = LESSON_META.filter((m) => !ids.has(m.id)).map((m) => m.id);
    expect(missing).toEqual([]);
  });
});

describe("كتل الشرح النظري", () => {
  const blocks = LESSONS.flatMap((l) =>
    (l.theory ?? []).map((t) => ({ key: `${l.id}:${t.id}`, t })),
  );

  it("لا تتكرر المقارنة بالعربية حرفياً بين كتلتين", () => {
    const seen = new Map<string, string[]>();
    for (const { key, t } of blocks) {
      const v = (t.comparisonWithArabic ?? "").trim();
      if (!v) continue;
      seen.set(v, [...(seen.get(v) ?? []), key]);
    }
    const dups = [...seen.entries()].filter(([, k]) => k.length > 1).map(([v, k]) => `${k.join(", ")} :: ${v.slice(0, 50)}`);
    expect(dups).toEqual([]);
  });

  it("لا يتكرر تريك الحفظ حرفياً بين كتلتين", () => {
    const seen = new Map<string, string[]>();
    for (const { key, t } of blocks) {
      const v = (t.eselsbruecke ?? "").trim();
      if (!v) continue;
      seen.set(v, [...(seen.get(v) ?? []), key]);
    }
    const dups = [...seen.entries()].filter(([, k]) => k.length > 1).map(([v, k]) => `${k.join(", ")} :: ${v.slice(0, 50)}`);
    expect(dups).toEqual([]);
  });

  it("كل كتلة تحمل مثالين على الأقل وخطأً شائعاً واحداً", () => {
    expect(blocks.length).toBeGreaterThan(80);
    const thin = blocks
      .filter(({ t }) => (t.examples?.length ?? 0) < 2 || (t.commonMistakes?.length ?? 0) < 1)
      .map(({ key }) => key);
    expect(thin).toEqual([]);
  });

  it("أعمدة الجدول تطابق عدد الخلايا في كل صف", () => {
    const broken: string[] = [];
    for (const { key, t } of blocks) {
      if (!t.table) continue;
      for (const r of t.table.rows) {
        if (r.cells.length !== t.table.columns.length - 1) broken.push(`${key} (${r.label})`);
      }
    }
    expect(broken).toEqual([]);
  });

  it("لا يوجد عنوان ألماني عام مثل Erweiterung", () => {
    const placeholders = ["erweiterung", "vertiefung", "teil 2", "extra"];
    const generic = blocks
      .filter(({ t }) => placeholders.includes((t.titleDe ?? "").trim().toLowerCase()))
      .map(({ key }) => key);
    expect(generic).toEqual([]);
  });

  it("كل بند تصحيح خطأ يُبرز موضع الخطأ فعلياً في الجملة", () => {
    const unhighlighted: string[] = [];
    for (const lesson of LESSONS) {
      for (const group of ["practiceBank", "miniTest", "review"] as const) {
        for (const ex of (lesson[group] ?? []) as Exercise[]) {
          if (ex.type !== "error-correction") continue;
          const segments = buildHighlightSegments(ex.wrongSentence, ex.wrongWord);
          // الجملة يجب أن تبقى سليمة حرفياً بعد التقسيم
          expect(segments.map((s) => s.text).join("")).toBe(ex.wrongSentence);
          if (!segments.some((s) => s.isTarget)) {
            unhighlighted.push(`${lesson.id}:${ex.id} wrongWord="${ex.wrongWord}"`);
          }
        }
      }
    }
    // b2-10:e10-punct بند «(صحيحة!)» زائف — مسجَّل ضمن العطب O ويُعالَج مع محتواه
    expect(unhighlighted).toEqual(['b2-10:e10-punct wrongWord="، (صحيحة!)"']);
  });

  it("لا ينسخ الاختبار القصير بنداً من بنك التدريب حرفياً", () => {
    const norm = (s: string) =>
      s.toLowerCase().replace(/\s+/g, " ").replace(/[.,!?;:«»„""()"'،؟؛]/g, "").trim();
    /** الجملة الجوهرية التي يراها الطالب — بغض النظر عن نوع التمرين */
    const core = (ex: Exercise): string => {
      const e = ex as unknown as Record<string, unknown>;
      for (const k of [
        "questionDe",
        "correctSentence",
        "template",
        "wrongSentence",
        "sentenceDe",
        "targetSentence",
        "statementDe",
      ]) {
        const v = e[k];
        if (typeof v === "string" && v.trim()) return norm(v);
      }
      return "";
    };
    /** الإجابة الصحيحة — تمنع الإنذار الكاذب حين يتشارك بندان تعليمة عامة
     *  مثل «Welcher Satz ist korrekt?» بخيارات مختلفة تماماً */
    const answer = (ex: Exercise): string => {
      const e = ex as unknown as Record<string, unknown>;
      if (typeof e.correctIndex === "number" && Array.isArray(e.options))
        return norm((e.options as string[])[e.correctIndex] ?? "");
      if (Array.isArray(e.blanks))
        return (e.blanks as { correct: string }[]).map((b) => norm(b.correct)).join("|");
      if (typeof e.correctWord === "string") return norm(e.correctWord);
      if (typeof e.correctSentence === "string") return norm(e.correctSentence);
      return "";
    };
    const copied: string[] = [];
    for (const lesson of LESSONS) {
      const bank = new Map<string, string>();
      for (const ex of lesson.practiceBank ?? []) {
        const c = core(ex);
        if (c.length < 8) continue;
        const k = `${c}##${answer(ex)}`;
        if (!bank.has(k)) bank.set(k, ex.id);
      }
      for (const ex of lesson.miniTest ?? []) {
        const c = core(ex);
        if (c.length < 8) continue;
        const src = bank.get(`${c}##${answer(ex)}`);
        if (src) copied.push(`${lesson.id}: ${ex.id} ينسخ ${src} («${c}»)`);
      }
    }
    expect(copied).toEqual([]);
  });

  it("العنوان الألماني لكل كتلة غير مكرر داخل الدرس نفسه", () => {
    const dupes: string[] = [];
    for (const lesson of LESSONS) {
      const seen = new Map<string, string>();
      for (const t of lesson.theory ?? []) {
        const title = (t.titleDe ?? "").trim();
        if (!title) continue;
        const prev = seen.get(title);
        if (prev) dupes.push(`${lesson.id}: ${prev} ↔ ${t.id} («${title}»)`);
        else seen.set(title, t.id);
      }
    }
    expect(dupes).toEqual([]);
  });
});
