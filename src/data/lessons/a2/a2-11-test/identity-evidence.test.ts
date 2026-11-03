/**
 * a2-11 — الهوية والجرد ومراجعتُه بين الدروس واشتقاقُ حالات الأهداف من الأداءات نفسها (جزء من تدقيق الدرس)
 * فُصل من a2-11.test.ts في الدفعة 104 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";
import { goal } from "./fixtures";
import { goalEvent } from "./fixtures";

describe("A2-11 lesson content audit", () => {
  it("preserves lesson identity/order and limits goals to evidenced performances", () => {
    expect(lessonA211).toMatchObject({
      id: "a2-11",
      unitId: "a2-11",
      level: "A2",
      order: 1,
      titleDe: "Dienstleistungen",
      titleAr: "الخدمات والمعاملات",
    });
    expect("duration" in lessonA211).toBe(false);
    expect(lessonA211.summary).not.toMatch(/\b\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|يغطي جميع/i);
    const lessonMeta = LESSON_META.find((item) => item.id === "a2-11");
    expect(lessonMeta).toMatchObject({
      id: "a2-11",
      unitId: "a2-11",
      level: "A2",
      order: 1,
      titleDe: "Dienstleistungen",
      titleAr: "الخدمات والمعاملات",
      summary: lessonA211.summary,
      keyWords: ["die Post", "der Friseur", "reparieren", "sich freuen", "sich ärgern", "sich anmelden", "sich beeilen", "sich beschweren"],
    });
    expect(lessonMeta && "duration" in lessonMeta).toBe(false);
    expect(lessonMeta?.summary).not.toMatch(/الاستمارات الرسمية|كل النماذج/);

    expect(lessonA211.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1")).toMatchObject({
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4", "q5", "q6", "q7"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4", "listening:l4:q5", "listening:l4:q6", "listening:l4:q7"],
        completion: "all-correct",
      },
    });
    expect(goal("z1").ar).toContain("يسجل النظام صحة الإجابة لا تشغيل الصوت");
    expect(goal("z1").evidence?.labelAr).toMatch(/تفريغ.*مخفياً|كشف التفريغ/);
    expect(goal("z1").evidence?.labelAr).toMatch(/فتح المقطع وحده ليس دليلاً/);

    expect(goal("z2").evidence).toEqual({
      exerciseIds: ["e1", "e6", "w2"],
      taskIds: ["practice:a2-11:e1", "practice:a2-11:e6", "writing:a2-11:w2"],
      labelAr: "أجب صحيحاً عن e1 وe6 في التدريب (ويظهر e1 أيضاً ضمن أول أربعة تمارين في مسار التدفق)، ثم اختر الضمائر المناسبة لفراغات w2؛ هذه مهام اختيار موجّه لا كتابة حرة.",
      completion: "all-correct",
    });
    expect(lessonA211.practiceBank.slice(0, 4).map(({ id }) => id)).toEqual(["e1", "e2", "e3", "e4"]);
    expect(lessonA211.practiceBank[5]?.id).toBe("e6");

    expect(goal("z3").evidence).toEqual({
      exerciseIds: ["w4"],
      taskIds: ["writing:a2-11:w4"],
      labelAr: "اكتب العبارة المحددة في w4؛ لا يُحتسب اختيار ردّ مكتوب في محاكاة التفاعل أداءً شفهياً.",
      completion: "all-correct",
    });
    expect(goal("z3").de).toMatch(/schriftlich/);
    expect(goal("z3").ar).toMatch(/لا يقيس محادثة حرة/);

    expect(goal("z4").evidence).toEqual({
      exerciseIds: ["e11", "w5"],
      taskIds: ["practice:a2-11:e11", "writing:a2-11:w5"],
      labelAr: "أنجز مطابقة الحقول في e11 عند ظهوره في إحدى جلسات التدريب العشوائية، ثم اكتب البيانات التدريبية المعطاة في حقول w5؛ عرض النموذج وحده لا يثبت الأداء.",
      completion: "all-correct",
    });
    expect(lessonA211.practiceBank.findIndex(({ id }) => id === "e11")).toBeGreaterThanOrEqual(4);
    expect(lessonA211.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat()).not.toContain("med-a2-11-1");
    expect(lessonA211.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat()).not.toContain("int-a2-11-1");
    expect(lessonA211.lernziele.map(({ evidence }) => evidence?.exerciseIds ?? []).flat()).not.toContain("p1");
  });

  it("has a unique, complete inventory of every assessed task", () => {
    expect((lessonA211.review ?? []).map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    expect(lessonA211.practiceBank.map(({ id }) => id)).toEqual(Array.from({ length: 14 }, (_, i) => `e${i + 1}`));
    expect(lessonA211.miniTest.map(({ id }) => id)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(lessonA211.writing.map(({ id }) => id)).toEqual(["w1", "w2", "w3", "w4", "w5"]);
    expect(lessonA211.listening.questions.map(({ id }) => id)).toEqual(["q1", "q2", "q3", "q4", "q5", "q6", "q7"]);
    expect(allTasks()).toHaveLength(34);
    expect(new Set(allTasks().map(({ id }) => id)).size).toBe(34);
    expect(lessonA211.theory).toHaveLength(2);
    expect(lessonA211.pronunciation.items).toHaveLength(6);
    expect(lessonA211.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA211.flashcards).toHaveLength(15);
    expect(lessonA211.mediation).toHaveLength(1);
    expect(lessonA211.interaction?.[0]?.rounds).toHaveLength(2);
  });

  it("reviews each cross-lesson item in context and validates its key", () => {
    expect(lessonA211.review).toEqual([
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "مراجعة من A2 (درس a2-07 — البنك والمال): اختر الضمير الصحيح:",
        questionDe: "Ich sehe ___. (أنتَ)",
        options: ["dich", "dir", "mich", "mir"],
        correctIndex: 0,
        explanation: "في معنى الرؤية هنا، يأخذ sehen مكمّلاً في Akkusativ: dich. لا تطابق تسمية الحالة الألمانية الإعراب العربي حرفياً.",
        errorType: "case",
        optionExplanations: [
          undefined,
          "«dir» في Dativ؛ و«sehen» يأخذ مفعولاً في Akkusativ ⇒ «Ich sehe dich».",
          "«mich» ضمير المتكلم؛ والمقصود هنا «أنتَ» ⇒ «dich».",
          "«mir» Dativ للمتكلم؛ فالخطأ في الحالة وفي الشخص معاً. ",
        ],
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر المعنى الأنسب في هذا السياق:",
        questionDe: "Ich gehe zur Post. Was bedeutet „zur Post“ hier?",
        questionAr: "إلى أين أذهب؟",
        options: ["إلى مكتب البريد", "إلى البنك", "إلى المحطة", "إلى الصيدلية"],
        correctIndex: 0,
        explanation: "zur Post هنا = إلى مكتب البريد؛ وقد تعني die Post خدمة البريد أيضاً بحسب السياق.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "البنك «die Bank»: «Ich gehe zur Bank» لا «zur Post».",
          "المحطة «der Bahnhof»: «Ich gehe zum Bahnhof».",
          "الصيدلية «die Apotheke»: «Ich gehe zur Apotheke». ",
        ],
      },
      {
        id: "r3",
        type: "fill-blank",
        instructionAr: "مراجعة من A1 (درس a1-03 — الطعام والشراب): أكمل طلب كوب واحد:",
        template: "Ich möchte ___ Tee. (كوب واحد)",
        blanks: [{ correct: "einen", options: ["einen", "ein", "eine"] }],
        explanation: "في هذا السياق المقصود حصة واحدة: `einen Tee`؛ الاسم مذكر ومفعول `möchten` هنا في Akkusativ. ويمكن استعمال `Tee` بلا أداة في سياق آخر عند الحديث عن الشاي كمادة عامة (مراجعة A1-03).",
        errorType: "case",
      },
    ]);
    for (const id of ["a2-07", "a1-11", "a1-03"]) {
      expect(LESSON_META.some((item) => item.id === id), `review references ${id}`).toBe(true);
    }
    expect(evaluateExercise(task("r1"), "dich").isCorrect).toBe(true);
    expect(evaluateExercise(task("r2"), "إلى مكتب البريد").isCorrect).toBe(true);
    expect(evaluateExercise(task("r3"), ["einen"]).isCorrect).toBe(true);
    expect(evaluateExercise(task("r3"), ["Tee"]).isCorrect).toBe(false);
  });

  it("derives all-correct goal states only from the exact lesson/task performances", () => {
    const idsByGoal: Record<string, string[]> = {
      z1: ["q1", "q2", "q3", "q4", "q5", "q6", "q7"],
      z2: ["e1", "e6", "w2"],
      z3: ["w4"],
      z4: ["e11", "w5"],
    };
    for (const [goalId, exerciseIds] of Object.entries(idsByGoal)) {
      const allCorrect = exerciseIds.map((exerciseId) => goalEvent(goalId, exerciseId));
      expect(getGoalEvidenceStatus(goal(goalId), lessonA211.id, allCorrect), `${goalId} all correct`).toBe("evidenced");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA211.id, allCorrect.slice(0, -1)),
        `${goalId} missing an item`,
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA211.id, [...allCorrect.slice(0, -1), goalEvent(goalId, exerciseIds[exerciseIds.length - 1]!, false)]),
        `${goalId} last item wrong`,
      ).toBe("pending");
      expect(
        getGoalEvidenceStatus(goal(goalId), lessonA211.id, allCorrect.map((event) => ({ ...event, lessonId: "a2-10" } as AnalyticsEvent))),
        `${goalId} wrong lesson`,
      ).toBe("pending");
    }

    const transcriptTaskId = getListeningQuestionTaskId("a2-11", "l1", "q1", true);
    expect(
      getGoalEvidenceStatus(goal("z1"), lessonA211.id, [goalEvent("z1", "q1", true, transcriptTaskId)]),
    ).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonA211.id, [goalEvent("z2", "e1", true, "practice:a2-11:e11")])).toBe(
      "pending",
    );
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonA211.id, [goalEvent("z3", "w4", true, "interaction-round:int-a2-11-1")]),
    ).toBe("pending");

    const z2Events = [
      goalEvent("z2", "e1", true, "practice:a2-11:e1"),
      goalEvent("z2", "e6"),
      goalEvent("z2", "w2"),
    ];
    expect(getGoalEvidenceStatus(goal("z2"), lessonA211.id, z2Events)).toBe("evidenced");
  });
});
