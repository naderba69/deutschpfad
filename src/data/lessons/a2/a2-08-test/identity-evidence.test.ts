/**
 * a2-08 — موضعُ الدرس والجردُ والقراءةُ المُراجعة والنطاقُ المُعلن · وربطُ كل هدفٍ بمهمةٍ صحيحة قابلة للقياس في سياق الواجهة الفعلي (جزء من تدقيق الدرس)
 * فُصل من a2-08.test.ts في الدفعة 108 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA208 } from "@/data/lessons/a2/a2-08";
import { LESSON_META } from "@/data/lessons/meta";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import { allTasks } from "./fixtures";
import { task } from "./fixtures";
import { ids } from "./fixtures";
import { goalEvent } from "./fixtures";
import { expectedEvidence } from "./fixtures";

describe("A2-08 reviewed lesson", () => {
  it("keeps the lesson position, inventory, reviewed reading, and stated scope", () => {
    expect(lessonA208.id).toBe("a2-08");
    expect(lessonA208.unitId).toBe("a2-08");
    expect(lessonA208.level).toBe("A2");
    expect(lessonA208.order).toBe(1);
    expect(LESSON_META.find((item) => item.id === "a2-08")).toMatchObject({
      id: "a2-08",
      unitId: "a2-08",
      order: 1,
      titleDe: "Mobil sein",
    });
    expect(lessonA208.lernziele.map((goal) => goal.id)).toEqual([
      "z1",
      "z-reading",
      "z2",
      "z3",
      "z4",
      "z-travel",
      "z-writing",
    ]);
    expect(ids(lessonA208.review ?? [])).toEqual(["r1", "r2", "r3"]);
    expect(ids(lessonA208.practiceBank)).toEqual(
      Array.from({ length: 14 }, (_, index) => `e${index + 1}`).sort(),
    );
    expect(ids(lessonA208.miniTest)).toEqual(["m1", "m2", "m3", "m4", "m5"]);
    expect(ids(lessonA208.writing)).toEqual(["w1", "w2", "w3", "w4"]);
    expect(ids(lessonA208.reading?.questions ?? [])).toEqual(["rq1", "rq2", "rq3", "rq4", "rq5"]);
    expect(ids(lessonA208.listening.questions)).toEqual(["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"]);
    expect(allTasks()).toHaveLength(40);
    expect(new Set(allTasks().map((item) => item.id)).size).toBe(40);
    expect("duration" in lessonA208).toBe(false);
    expect(lessonA208.summary).not.toMatch(/Goethe|CEFR|اعتماد|جاهزية|إتقان|\b\d+\s*دقيقة/i);
    expect(lessonA208.einfuehrung.contextAr).toContain("خيالية");

    const reading = lessonA208.reading;
    if (!reading) throw new Error("A2-08 reading is required");
    expect(reading.id).toBe("read-a2-08");
    expect(reading.textType).toBe("erzaehlung");
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(4);
    expect(reading.questions.every((question) => question.paragraph !== undefined)).toBe(true);
    expect(reading.paragraphs).toEqual([
      "Jana und Karim fahren am Samstag ans Meer. Sie möchten früh am Strand sein. Im Internet vergleichen sie zwei Fahrpläne. Der Zug fährt um acht Uhr ab und ist schneller als der Bus. Die Fahrkarte für den Zug kostet in diesem Beispiel fünf Euro mehr als die Fahrkarte für den Bus. Alle Fahrzeiten und Preise in der Geschichte sind erfunden.",
      "Sie kaufen die Fahrkarten für die Hinfahrt am Automaten. Ihre Reise beginnt am Hauptbahnhof und dauert zweieinhalb Stunden. In Bremen müssen sie einmal umsteigen. Jana prüft die Gleisnummer, und Karim kauft einen Snack. Dann fährt der Zug weiter.",
      "Der Zug kommt pünktlich an. Das Wetter ist besser als in der Stadt, und das Wasser ist warm. Am Abend möchten sie zurückfahren. Aber die Zugfahrkarten für die Rückfahrt sind ausverkauft. Deshalb nehmen sie den letzten Bus zurück.",
      "Karim fotografiert die Wellen am Strand. Jana schwimmt im Wasser. Sie sprechen über die Reise. Jana findet die Zugfahrt bequemer, weil sie unterwegs lesen konnte. Karim sagt: „Der Bus ist günstiger, aber langsamer.“ Bei ihrer nächsten Reise wollen sie die Fahrpläne wieder vergleichen. Dann entscheiden sie gemeinsam.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "يذهب يانا وكريم يوم السبت إلى البحر. يريدان الوصول مبكراً إلى الشاطئ. يقارنان جدولَي رحلات على الإنترنت. ينطلق القطار في الثامنة وهو أسرع من الحافلة. في هذا المثال، تزيد كلفة تذكرة القطار خمسة يورو على تذكرة الحافلة. جميع مواعيد الرحلات والأسعار في القصة خيالية.",
      "يشتريان تذكرتَي الذهاب من آلة البيع. تبدأ رحلتهما في المحطة الرئيسية وتستغرق ساعتين ونصفاً. عليهما تبديل القطار مرة واحدة في بريمن. تتحقق يانا من رقم المسار/الرصيف، ويشتري كريم وجبة خفيفة. ثم يواصل القطار طريقه.",
      "يصل القطار في موعده. الطقس أفضل مما هو في المدينة، والماء دافئ. يريدان العودة مساءً، لكن تذاكر القطار لرحلة العودة نفدت. لذلك يستقلان آخر حافلة للعودة.",
      "يصوّر كريم الأمواج على الشاطئ، وتسبح يانا في الماء. يتحدثان عن الرحلة. ترى يانا أن رحلة القطار كانت أكثر راحة لأنها استطاعت القراءة في الطريق. يقول كريم إن الحافلة أقل كلفة، لكنها أبطأ. في رحلتهما القادمة يريدان مقارنة جدولي الرحلات من جديد، ثم يقرران معاً.",
    ]);
    expect(reading.glossary.map((item) => item.de)).toEqual([
      "der Fahrplan",
      "die Fahrkarte",
      "umsteigen",
      "der Hauptbahnhof",
      "die Gleisnummer",
      "pünktlich",
      "ausverkauft",
      "zurückfahren",
    ]);
    expect(reading.redemittel).toHaveLength(4);
    expect(reading.discussionAr).toContain("خيالي");
  });

  it("maps every goal to a correct, assessable task in the actual UI context", () => {
    const validTaskIds = new Set<string>();
    for (const exercise of lessonA208.practiceBank) {
      validTaskIds.add(`practice:${lessonA208.id}:${exercise.id}`);
    }
    // The practice flow reveals only the first min(4, practiceBank.length) tasks.
    for (const exercise of lessonA208.practiceBank.slice(0, Math.min(4, lessonA208.practiceBank.length))) {
      validTaskIds.add(`practice:${lessonA208.id}:${exercise.id}`);
    }
    for (const exercise of lessonA208.miniTest) {
      validTaskIds.add(`mini-test:${lessonA208.id}:${exercise.id}`);
    }
    // The mini-test filters for multiple-choice and the progressive reveal shows at most the first three.
    for (const exercise of lessonA208.miniTest
      .filter((item) => item.type === "multiple-choice")
      .slice(0, 3)) {
      validTaskIds.add(`flow-mini-test:${lessonA208.id}:${exercise.id}`);
    }
    for (const exercise of lessonA208.writing) {
      validTaskIds.add(`writing:${lessonA208.id}:${exercise.id}`);
    }
    for (const question of lessonA208.reading?.questions ?? []) {
      validTaskIds.add(`reading:${lessonA208.reading?.id}:${question.id}`);
    }
    for (const question of lessonA208.listening.questions) {
      validTaskIds.add(
        getListeningQuestionTaskId(lessonA208.id, question.itemId, question.id, false),
      );
    }

    for (const goal of lessonA208.lernziele) {
      const evidence = goal.evidence;
      const expected = expectedEvidence[goal.id as keyof typeof expectedEvidence];
      expect(evidence, `${goal.id} must have performance evidence`).toBeDefined();
      if (!evidence) throw new Error(`${goal.id} must have performance evidence`);
      const exerciseIds = evidence.exerciseIds ?? [];
      const taskIds = evidence.taskIds ?? [];
      expect(evidence.completion).toBe("all-correct");
      expect(evidence.labelAr.trim().length).toBeGreaterThan(30);
      expect(exerciseIds).toEqual(expected.exerciseIds);
      expect(taskIds).toEqual(expected.taskIds);
      expect(new Set(exerciseIds).size).toBe(exerciseIds.length);
      expect(new Set(taskIds).size).toBe(taskIds.length);
      for (const taskId of taskIds) {
        expect(validTaskIds.has(taskId), `${goal.id}: ${taskId}`).toBe(true);
        const parts = taskId.split(":");
        const exerciseId = parts[parts.length - 1];
        expect(exerciseIds).toContain(exerciseId);
      }
      for (const exerciseId of exerciseIds) {
        expect(taskIds.some((taskId) => taskId.endsWith(`:${exerciseId}`))).toBe(true);
      }
      expect(taskIds.join(" ")).not.toMatch(/flow-listening|listening-transcript/);
    }

    for (const question of lessonA208.listening.questions) {
      expect(
        getListeningQuestionTaskId(lessonA208.id, question.itemId, question.id, false),
      ).toBe(`listening:${question.itemId}:${question.id}`);
      expect(
        getListeningQuestionTaskId(lessonA208.id, question.itemId, question.id, true),
      ).toBe(`listening-transcript:${lessonA208.id}:${question.itemId}:${question.id}`);
    }
    expect(validTaskIds.has("flow-mini-test:a2-08:m1")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-08:m2")).toBe(true);
    expect(validTaskIds.has("flow-mini-test:a2-08:m3")).toBe(false);

    for (const goal of lessonA208.lernziele) {
      const exerciseIds = goal.evidence?.exerciseIds ?? [];
      expect(getGoalEvidenceStatus(goal, lessonA208.id, [])).toBe("pending");
      expect(
        getGoalEvidenceStatus(
          goal,
          lessonA208.id,
          exerciseIds.map((exerciseId) => goalEvent(goal.id, exerciseId, true)),
        ),
      ).toBe("evidenced");
    }
    const transitGoal = lessonA208.lernziele.find((goal) => goal.id === "z1");
    if (!transitGoal) throw new Error("A2-08 z1 is required");
    const transitEvidenceWithoutQ1 = ["e11", "e14", "q2", "q4", "q5", "q6", "q7", "q8", "q9"].map((exerciseId) =>
      goalEvent("z1", exerciseId, true),
    );
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", true, "listening-transcript:a2-08:l1:q1"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", true),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", true, undefined, "a2-07"),
      ]),
    ).toBe("pending");
    expect(
      getGoalEvidenceStatus(transitGoal, lessonA208.id, [
        ...transitEvidenceWithoutQ1,
        goalEvent("z1", "q1", false),
      ]),
    ).toBe("pending");
  });
});
