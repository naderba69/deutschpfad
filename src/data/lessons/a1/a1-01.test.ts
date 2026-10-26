import {describe, expect, it} from "vitest";

import {lessonA101} from "./a1-01";

const lesson = lessonA101;
const JSON_TEXT = JSON.stringify(lesson);

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) ids.add(`practice:${lesson.id}:${task.id}`);
  for (const task of lesson.miniTest) ids.add(`mini-test:${lesson.id}:${task.id}`);
  for (const task of lesson.writing) ids.add(`writing:${lesson.id}:${task.id}`);
  if (lesson.reading) {
    for (const task of lesson.reading.questions) ids.add(`reading:${lesson.reading.id}:${task.id}`);
  }
  return ids;
}

describe("A1-01 — التعارف والتحيات", () => {
  it("لا تظهر نسبة إحصائية غير مسندة عن الأفعال المنتظمة", () => {
    expect(JSON_TEXT).not.toMatch(/90%/);
  });

  it("تنطيق w وGuten Tag يطابق الدروس السابقة (w = ڤ، والـ g النهائية تُهمس)", () => {
    const wie = lesson.pronunciation.items.find((item) => item.de === "wie");
    const woher = lesson.pronunciation.items.find((item) => item.de === "woher");
    const guten = lesson.pronunciation.items.find((item) => item.de === "Guten Tag");
    expect(wie?.note).toContain("الحرف w");
    expect(woher?.note.startsWith("ڤ")).toBe(true);
    expect(guten?.note).toContain("غوتن تاك");
  });

  it("لا تُكتب أسئلة W كأنها سبعة فقط، لأن الدرس يعرض أدوات أكثر", () => {
    expect(JSON_TEXT).not.toMatch(/حروف W السبعة/);
  });

  it("يتضمن مراجعة تراكمية قصيرة لما سبق تعلّمه في A1-00", () => {
    expect(lesson.review).toHaveLength(3);
    expect(lesson.review?.map((task) => task.id)).toEqual(["r1", "r2", "r3"]);
    expect(lesson.review?.every((task) => task.instructionAr.includes("a1-00"))).toBe(true);
    expect(lesson.review?.[0]).toMatchObject({ type: "multiple-choice", correctIndex: 0 });
    expect(lesson.review?.[1]).toMatchObject({ type: "fill-blank", blanks: [{ correct: "ü" }] });
    expect(lesson.review?.[2]).toMatchObject({ type: "multiple-choice", options: ["Zeit", "Ziet", "Zeid", "Zeitt"] });
  });

  it("يربط هدف sein وheißen بتمرين تصريف heißen فعلاً، ويصل الدرس بما سبقه", () => {
    const goal = lesson.lernziele.find((item) => item.id === "z3");
    expect(goal?.evidence?.exerciseIds).toContain("e16");
    const conjugation = lesson.practiceBank.find((task) => task.id === "e16");
    expect(conjugation).toMatchObject({
      type: "multiple-choice",
      questionDe: "Wie ___ du?",
      options: ["heißt", "heiße", "heißen", "hießt"],
      correctIndex: 0,
    });
    expect(lesson.einfuehrung.connectionToPreviousAr).toContain("A1-00");
    expect(lesson.einfuehrung.connectionToPreviousAr).not.toContain("لا توجد معرفة سابقة");
    expect(JSON_TEXT).toContain("beginnt");
    expect(JSON_TEXT).toContain("begann، begonnen");
    expect(JSON_TEXT).not.toContain("يتحوّل e إلى i");
    expect(JSON_TEXT).not.toContain("منتظم: der Kurs beginnt");
    expect(JSON_TEXT).not.toContain("مع مدّ الحرف أحياناً");
  });

  it("كل هدف مرتبط بمهام موجودة فعلاً ويحمل وصف أداء", () => {
    const known = knownTaskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references missing ${id}`).toBe(true);
      }
      expect(goal.evidence?.labelAr.length ?? 0).toBeGreaterThan(20);
    }
  });

  it("هدف du/Sie مرتبط بتمرين يميز السياقين ويطابقهما بالتصريف", () => {
    const goal = lesson.lernziele.find((item) => item.id === "z9");
    const e29 = lesson.practiceBank.find((task) => task.id === "e29");
    expect(goal?.evidence?.exerciseIds).toEqual(["e29"]);
    expect(e29?.type).toBe("matching");
    if (e29?.type === "matching") {
      expect(e29.pairs).toEqual([
        { left: "Im Gespräch mit einem Freund (غير رسمي)", right: "Wie heißt du?" },
        { left: "Bei einem formellen Termin (رسمي)", right: "Wie heißen Sie?" },
      ]);
    }
  });

  it("تتجنب القواعد الاجتماعية المطلقة وتضبط مهام التصحيح مع إبقاء e20 في الجزء التالي", () => {
    expect(JSON_TEXT).toContain("تختلف الأعراف");
    expect(JSON_TEXT).not.toContain("يُفهم قلة احترام");
    for (const task of lesson.practiceBank) {
      if (task.type === "error-correction") {
        expect(task.instructionAr).not.toContain("لا خطأ");
      }
    }
    for (const id of ["e20", "e21", "e22", "e23", "e24", "e25", "e26", "e27", "e28"]) {
      expect(lesson.practiceBank.some((task) => task.id === id), `${id} belongs to A1-01b`).toBe(false);
    }
    for (const id of ["m3", "m4", "m5"]) {
      expect(lesson.miniTest.some((task) => task.id === id), `${id} belongs to A1-01b`).toBe(false);
    }
  });

  it("إرشاد نبرة سؤال W لا يطلب رفع الصوت، والنطق ليس مضموناً بتكرار ثابت", () => {
    const question = lesson.pronunciation.shadowing?.find((item) => item.de === "Wie heißt du?");
    expect(question?.tip).toContain("هابطة");
    expect(question?.tip).not.toContain("ارفع نبرة");
    expect(lesson.pronunciation.tip).not.toContain("يمنع العادات الخاطئة");
  });

  it("صيغة المهنة بلا أداة نموذج شائع لا حظر مطلق للأداة", () => {
    expect(JSON_TEXT).toContain("Ich bin Student");
    expect(JSON_TEXT).toContain("ein guter Student");
    expect(JSON_TEXT).not.toContain("لا نقول ein Student");
  });

  it("تعليمات الكتابة تحدد نطاق الإجابة وتطابق الخيارات المتاحة", () => {
    const origin = lesson.writing.find((task) => task.id === "w1");
    expect(origin?.type).toBe("transformation");
    if (origin?.type === "transformation") {
      expect(origin.instructionAr).toContain("من تونس");
      expect(origin.prompt).toContain("Tunesien أو Tunis");
      expect(origin.acceptedAnswers.every((answer) => /Tunesien|Tunis/.test(answer))).toBe(true);
    }

    const pronouns = lesson.writing.find((task) => task.id === "w3");
    expect(pronouns?.type).toBe("fill-blank");
    if (pronouns?.type === "fill-blank") {
      expect(pronouns.instructionAr).not.toContain("sie");
      expect(pronouns.blanks.every((blank) => blank.options !== undefined && blank.options.includes(blank.correct))).toBe(true);
    }
  });

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة ضمن المدى", () => {
    for (const task of [...lesson.practiceBank, ...lesson.miniTest, ...(lesson.review ?? [])]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
