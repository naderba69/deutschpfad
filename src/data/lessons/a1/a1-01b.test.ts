import {describe, expect, it} from "vitest";

import {lessonA101, lessonA101b} from "./a1-01";

const lesson = lessonA101b;
const SERIALIZED = JSON.stringify(lesson);

function taskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) ids.add(`practice:${lesson.id}:${task.id}`);
  for (const task of lesson.miniTest) ids.add(`mini-test:${lesson.id}:${task.id}`);
  for (const task of lesson.writing) ids.add(`writing:${lesson.id}:${task.id}`);
  if (lesson.reading) {
    for (const task of lesson.reading.questions) ids.add(`reading:${lesson.reading.id}:${task.id}`);
  }
  return ids;
}

describe("A1-01b — أسئلة W وتصريف الأفعال المنتظمة", () => {
  it("يبقي حدود A1-01b منفصلة عن الجزء الأول ويحتوي التمارين المنتقاة فقط", () => {
    expect(lesson.id).toBe("a1-01b");
    expect(lesson.practiceBank.map((task) => task.id)).toEqual([
      "e8", "e11", "e12", "e13", "e14", "e20", "e21", "e22", "e23", "e24", "e25", "e26", "e27", "e28",
    ]);
    expect(lesson.miniTest.map((task) => task.id)).toEqual(["m3", "m4", "m5"]);
    expect(lesson.writing.map((task) => task.id)).toEqual(["w2"]);
    expect(lesson.theory.map((block) => block.id)).toEqual(["t2", "t3"]);
  });

  it("يحتفظ بمراجعة تراكمية من الدرس السابق A1-00", () => {
    expect(lesson.review).toEqual(lessonA101.review);
    expect(lesson.review).toHaveLength(3);
    expect(lesson.review?.every((task) => task.instructionAr.includes("a1-00"))).toBe(true);
  });

  it("كل هدف له دليل يشير إلى مهمة موجودة في هذا الجزء", () => {
    const known = taskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references ${id}`).toBe(true);
      }
      expect(goal.evidence?.labelAr.length ?? 0).toBeGreaterThan(20);
    }
  });

  it("شرح V2 يحدد الجملة الرئيسية ويميز السؤال المباشر من الفرعي", () => {
    const theory = lesson.theory.find((block) => block.id === "t2");
    expect(theory?.explanationAr).toContain("الجملة الرئيسية");
    expect(theory?.explanationAr).toContain("الجملة الفرعية");
    expect(theory?.explanationAr).toContain("Wie alt");
    expect(theory?.table?.rows.map((row) => row.label)).toContain("wohin");
    expect(theory?.commonMistakes?.[0]?.whyAr).toContain("جملة فرعية");
  });

  it("يعرض تصريف الأفعال المنتظمة دون تعميمات ثقافية أو وعود امتحانية", () => {
    const theory = lesson.theory.find((block) => block.id === "t3");
    expect(theory?.explanationAr).toContain("mixen ← du mixt");
    expect(theory?.whyAr).toContain("arbeitest");
    expect(theory?.comparisonWithArabic).not.toContain("العربية أعقد");
    expect(theory?.whyAr).not.toContain("يُخفّض تقييمك");
    expect(theory?.commonMistakes).toHaveLength(4);
  });

  it("يمنع التباس الفاعل في e20 ويجعل تعليمات e27 وm5 متوافقة مع الخيارات", () => {
    const e20 = lesson.practiceBank.find((task) => task.id === "e20");
    expect(e20?.type).toBe("fill-blank");
    if (e20?.type === "fill-blank") expect(e20.template).toContain("Lena");

    const e27 = lesson.practiceBank.find((task) => task.id === "e27");
    const m5 = lesson.miniTest.find((task) => task.id === "m5");
    for (const task of [e27, m5]) {
      expect(task?.type).toBe("error-correction");
      if (task?.type === "error-correction") {
        expect(task.instructionAr).not.toContain("لا خطأ");
        expect(task.options).toContain(task.correctWord);
      }
    }
  });

  it("فقرات القراءة وترجماتها متوازية ومؤشرات الأسئلة ضمن مدى الفقرات", () => {
    expect(lesson.reading?.paragraphs).toHaveLength(4);
    expect(lesson.reading?.paragraphsAr).toHaveLength(4);
    for (const question of lesson.reading?.questions ?? []) {
      expect(question.paragraph).toBeDefined();
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(lesson.reading?.paragraphs.length ?? 0);
    }
    expect(lesson.reading?.paragraphsAr[0]).toContain("وهي تريد الدراسة هنا");
    expect(lesson.reading?.paragraphsAr[3]).toContain("أتعلّم الألمانية كثيراً");
  });

  it("أجوبة القراءة وتفسيرات المشتتات تتفق مع نص القراءة الحالي", () => {
    const reading = lesson.reading;
    expect(reading?.questions).toHaveLength(4);
    for (const question of reading?.questions ?? []) {
      expect(question.options[question.correctIndex]).toBeTruthy();
      expect(question.optionExplanations).toHaveLength(question.options.length);
    }
    const rq3 = reading?.questions.find((question) => question.id === "rq3");
    expect(rq3?.options[rq3.correctIndex]).toBe("Er arbeitet in einem Café");
    expect(rq3?.optionExplanations?.[0]).toContain("ميلان");
    const rq4 = reading?.questions.find((question) => question.id === "rq4");
    expect(rq4?.explanation).toContain("ثلاثة أصدقاء");
  });

  it("لا يصف beginnen بأنه منتظم على إطلاقه، ويشرح صيغة الحاضر والماضي", () => {
    const item = lesson.reading?.glossary.find((entry) => entry.de === "beginnen");
    expect(item?.noteAr).toContain("er beginnt");
    expect(item?.noteAr).toContain("begann");
    expect(item?.noteAr).not.toContain("فعل منتظم");
    expect(SERIALIZED).not.toContain("فعل منتظم: ich beginne");
  });

  it("بطاقة die Frage مثالها بالحاضر، لا بزمن لم يدرسه هذا الجزء", () => {
    const card = lesson.flashcards.find((item) => item.id === "fc27");
    expect(card?.example).toBe("Ich stelle viele Fragen.");
    expect(card?.example).not.toContain("habe");
  });

  it("خيارات الاختيار من متعدد فريدة والإجابة الصحيحة ضمن الخيارات", () => {
    for (const task of [...lesson.practiceBank, ...lesson.miniTest, ...(lesson.reading?.questions ?? [])]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
