/**
 * a2-10 — الموضع والجرد وأجوبة المراجعة ومراجعها بين الدروس (جزء من تدقيق الدرس)
 * فُصل من a2-10.test.ts في الدفعة 102 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */
import { describe, expect, it } from "vitest";

import { lessonA210 } from "@/data/lessons/a2/a2-10";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { allTasks, task, taskIds } from "./fixtures";

describe("A2-10 lesson content audit", () => {
  it("preserves lesson identity and the existing order without claiming a duration or full mastery", () => {
    expect(lessonA210.id).toBe("a2-10");
    expect(lessonA210.unitId).toBe("a2-10");
    expect(lessonA210.level).toBe("A2");
    expect(lessonA210.order).toBe(1);
    expect("duration" in lessonA210).toBe(false);
    expect(lessonA210.summary).not.toMatch(/يغطي (?:جميع|كل)|covers all|Goethe|CEFR|اعتماد|إتقان|جاهزية|\b\d+\s*دقيقة/i);
    expect(LESSON_META.find((item) => item.id === "a2-10")).toMatchObject({
      id: "a2-10",
      unitId: "a2-10",
      level: "A2",
      order: 1,
      titleDe: "Lernen und Schule",
      titleAr: "المدرسة والتعلم",
    });
    expect(LESSON_META.find((item) => item.id === "a2-10")?.summary).not.toContain("كل الحالات");
    expect(lessonA210.einfuehrung.activateVocabulary).toEqual([
      { de: "der Kurs", ar: "الدورة أو المساق، بحسب السياق" },
      { de: "lernen", ar: "يتعلم أو يدرس" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "der Unterricht", ar: "التعليم أو الحصة الدراسية" },
      { de: "studieren", ar: "يدرس في الجامعة" },
    ]);

    expect(lessonA210.lernziele.map((item) => item.id)).toEqual([
      "z1",
      "z2",
      "z-reading",
      "z-listening",
      "z-writing",
    ]);
    expect(taskIds(lessonA210.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(taskIds(lessonA210.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(taskIds(lessonA210.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(taskIds(lessonA210.writing)).toEqual(["w1", "w2", "w3"]);
    expect(taskIds(lessonA210.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    expect(taskIds(lessonA210.listening.questions)).toEqual(["q1", "q2", "q3", "q4", "q5", "q6", "q7"]);
    expect(allTasks()).toHaveLength(36);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(36);
    expect(lessonA210.theory).toHaveLength(2);
    expect(lessonA210.theory.every((block) => block.examples.length >= 5)).toBe(true);
    expect(lessonA210.flashcards.map(({ id, de, ar, example, exampleAr, level }) => ({
      id,
      de,
      ar,
      example,
      exampleAr,
      level,
    }))).toEqual([
      { id: "fc1", de: "der Kurs", ar: "الدورة", example: "Der Kurs beginnt um neun.", exampleAr: "تبدأ الدورة في التاسعة.", level: "A2" },
      { id: "fc2", de: "die Prüfung", ar: "الامتحان", example: "Die Prüfung ist schwer.", exampleAr: "الامتحان صعب.", level: "A2" },
      { id: "fc3", de: "der Unterricht", ar: "التعليم/الحصة الدراسية", example: "Der Unterricht ist interessant.", exampleAr: "الحصة الدراسية ممتعة.", level: "A2" },
      { id: "fc4", de: "studieren", ar: "يدرس في الجامعة", example: "Ich will in Berlin studieren.", exampleAr: "أريد الدراسة الجامعية في برلين.", level: "A2" },
      { id: "fc5", de: "weil", ar: "لأنّ", example: "Ich lerne weiter, weil ich die Prüfung bestehen will.", exampleAr: "أواصل التعلم لأنني أريد اجتياز الامتحان.", level: "A2" },
      { id: "fc6", de: "wenn", ar: "إذا/عندما بحسب السياق", example: "Wenn ich Zeit habe, wiederhole ich Vokabeln.", exampleAr: "إذا توفر لديّ وقت، أراجع المفردات.", level: "A2" },
      { id: "fc7", de: "ob", ar: "ما إذا/هل في سؤال غير مباشر", example: "Ich weiß nicht, ob er kommt.", exampleAr: "لا أعرف ما إذا كان سيأتي.", level: "A2" },
      { id: "fc8", de: "bestehen", ar: "يجتاز", example: "Ich bestehe die Prüfung.", exampleAr: "أجتاز الامتحان.", level: "A2" },
      { id: "fc9", de: "die Anmeldung", ar: "التسجيل", example: "Die Anmeldung ist online.", exampleAr: "التسجيل إلكتروني.", level: "A2" },
      { id: "fc10", de: "der Termin", ar: "الموعد", example: "Ich habe einen Termin um zehn.", exampleAr: "لدي موعد في العاشرة.", level: "A2" },
      { id: "fc11", de: "lernen", ar: "يتعلّم / يدرس", example: "Ich lerne jeden Tag Deutsch.", exampleAr: "أتعلّم الألمانية كل يوم.", level: "A2" },
      { id: "fc12", de: "die Bibliothek", ar: "المكتبة", example: "Wir lernen heute in der Bibliothek.", exampleAr: "نتعلم اليوم في المكتبة.", level: "A2" },
    ]);
    expect(lessonA210.pronunciation.items).toHaveLength(6);
    expect(lessonA210.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA210.reading?.paragraphs).toHaveLength(4);
    expect(lessonA210.listening.items).toHaveLength(3);
    expect(lessonA210.mediation).toHaveLength(1);
    expect(lessonA210.interaction?.[0]?.rounds).toHaveLength(2);
  });

  it("keeps the three review answers and their cross-lesson references defensible", () => {
    const review = lessonA210.review ?? [];
    expect(review[0]).toMatchObject({
      id: "r1",
      instructionAr: "مراجعة من A1 (درس a1-01 — التعارف والتحيات): اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ Deutsch. (أتعلم)",
      options: ["lerne", "lernst", "lernt", "lernen"],
      correctIndex: 0,
      explanation: "مع ich: lerne (درس التعارف).",
    });
    expect(review[1]).toMatchObject({
      id: "r2",
      instructionAr: "مراجعة من A2 (درس a2-06 — الإعلام والأخبار): اختر الرابط الذي يقدّم مضمون الاعتقاد بوصفه خبراً:",
      questionDe: "Ich glaube, ___ das stimmt.",
      options: ["dass", "weil", "wenn", "ob"],
      correctIndex: 0,
      explanation: "في هذا السياق، يقدّم dass مضمون الاعتقاد: «أعتقد أن ذلك صحيح». أما weil فيقدّم سبباً، وwenn شرطاً أو زمناً، وob سؤالاً غير مباشر بنعم/لا.",
    });
    expect(review[2]).toMatchObject({
      id: "r3",
      instructionAr: "مراجعة من A1 (درس a1-02 — العائلة والأصدقاء): أكمل الملكية:",
      template: "Das ist ___ Bruder. (أخي)",
      blanks: [{ correct: "mein", options: ["mein", "meine", "meinen"] }],
      explanation: "Bruder اسم مذكر، والأداة الملكية هنا في حالة Nominativ بعد das ist: mein Bruder. (درس العائلة).",
    });
    expect(review.map((item) => item.instructionAr).join(" ")).toMatch(/a1-01/);
    expect(review.map((item) => item.instructionAr).join(" ")).toMatch(/a1-02/);
    expect(review.map((item) => item.instructionAr).join(" ")).toMatch(/a2-06/);
    for (const id of ["a1-01", "a1-02", "a2-06"]) {
      expect(LESSON_META.some((item) => item.id === id), `review reference ${id}`).toBe(true);
    }
    expect(evaluateExercise(task("r1"), "lerne").isCorrect).toBe(true);
    expect(evaluateExercise(task("r2"), "dass").isCorrect).toBe(true);
    expect(evaluateExercise(task("r3"), ["mein"]).isCorrect).toBe(true);
  });
});
