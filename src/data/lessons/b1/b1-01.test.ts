import { describe, expect, it } from "vitest";

import { lessonB101 } from "@/data/lessons/b1/b1-01";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["meinem", "meinen", "mein", "meine"], key: "meinem" },
  r2: { options: ["weil", "dass", "obwohl", "ob"], key: "weil" },
  e1: { options: ["des", "der", "dem", "den"], key: "des" },
  e2: { options: ["der", "den", "dem", "dessen"], key: "der" },
  e8: { options: ["لمن؟", "ماذا؟", "أين؟", "متى؟"], key: "لمن؟" },
  m1: { options: ["des", "der", "dem", "den"], key: "des" },
  m2: { options: ["die", "der", "das", "den"], key: "die" },
  q1: { options: ["Informatik", "Medizin", "Germanistik", "Jura"], key: "Informatik" },
  q2: { options: ["in München", "in Berlin", "in Hamburg", "in Köln"], key: "in München" },
  q3: { options: ["sechs Jahre", "vier Jahre", "fünf Jahre", "sieben Jahre"], key: "sechs Jahre" },
  q4: {
    options: [
      "Die Kosten sind niedrig, nur der Semesterbeitrag.",
      "Die Kosten sind sehr hoch.",
      "Das Studium ist ganz ohne jeden Beitrag.",
      "Man zahlt die Kosten nur in Berlin.",
    ],
    key: "Die Kosten sind niedrig, nur der Semesterbeitrag.",
  },
  q5: { options: ["Sie ist erleichtert, kennt das Ergebnis aber noch nicht.", "Sie ist sehr enttäuscht, weil sie die Prüfung nicht bestanden hat.", "Sie ist krank und wartet auf den nächsten Prüfungstermin.", "Sie ist nervös, denn sie hat die Prüfung noch nicht gemacht."], key: "Sie ist erleichtert, kennt das Ergebnis aber noch nicht." },
  q6: { options: ["Einen kurzen Text schreiben", "Zwei Stunden lang Deutsch lernen", "Fünf Sätze zum Dativ schreiben", "Eine Geschichte für Lena schreiben"], key: "Einen kurzen Text schreiben" },
  q7: { options: ["Mit ihrer Nachbarin", "Mit ihrer Lehrerin", "Allein zu Hause", "Mit Lena am Telefon"], key: "Mit ihrer Nachbarin" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: {
    correct: ["Lehrer"],
    options: [["Lehrer", "Student", "Koch"]],
  },
  e6: {
    correct: ["das", "die"],
    options: [
      ["das", "der", "dem"],
      ["die", "der", "das"],
    ],
  },
  m5: {
    correct: ["dem", "das"],
    options: [
      ["dem", "den", "der"],
      ["das", "der", "die"],
    ],
  },
  e14: {
    correct: ["des Lehrers", "der Studenten"],
    options: [
      ["des Lehrers", "des Lehrer", "dem Lehrer", "der Lehrer"],
      ["der Studenten", "des Studenten", "den Studenten", "die Studenten"],
    ],
  },
  w2: {
    correct: ["des", "der", "der"],
    options: [
      ["des", "der", "dem"],
      ["des", "der", "dem"],
      ["des", "der", "den"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "den Regen", correctWord: "des Regens", options: ["des Regens", "des Regen", "der Regen", "die Regen"] },
  m4: { wrongWord: "das Wetter", correctWord: "des Wetters", options: ["des Wetters", "den Wetter", "der Wetter", "das Wetters"] },
  e15: { wrongWord: "der", correctWord: "dem", options: ["dem", "der", "den", "dessen"] },
};

const expectedTransformations: string[] = ["e7", "e9", "e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e13: ["Das ist die Frau, die Deutsch unterrichtet", "Das ist die Frau, die Deutsch unterrichtet."],
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "das Studium", right: "الدراسة الجامعية" },
    { left: "die Ausbildung", right: "التدريب المهني" },
    { left: "das Fach", right: "التخصص" },
    { left: "das Stipendium", right: "المنحة" },
  ],
  e12: [
    { left: "das Gymnasium", right: "مدرسة ثانوية تؤدي إلى الأبيتور" },
    { left: "das Abitur", right: "شهادة تؤهل للدراسة الجامعية" },
    { left: "die Grundschule", right: "المرحلة الابتدائية الأولى" },
    { left: "der Bachelor", right: "أول شهادة جامعية (عادةً ثلاث سنوات)" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB101.review ?? []),
    ...lessonB101.practiceBank,
    ...lessonB101.miniTest,
    ...lessonB101.writing,
    ...lessonB101.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-01 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB101.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-01 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-01 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB101.id,
    taskId,
  };
}

describe("B1-01 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB101).toMatchObject({
      id: "b1-01",
      unitId: "b1-01",
      level: "B1",
      order: 1,
      titleDe: "Ausbildung und Studium",
      titleAr: "التعليم والدراسة",
    });
    expect("duration" in lessonB101).toBe(false);
    expect(lessonB101.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = LESSON_META.find((item) => item.id === "b1-01");
    expect(meta).toMatchObject({ id: "b1-01", unitId: "b1-01", level: "B1", order: 1, summary: lessonB101.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("limits goals to evidenced performances and avoids readiness or certification claims", () => {
    expect(lessonB101.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q4", "q5", "q6", "q7"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e5", "w1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e4", "e6", "m5"]);
    expect(goal("z4").evidence).toMatchObject({ exerciseIds: ["e12"], taskIds: ["practice:b1-01:e12"], completion: "all-correct" });
    expect(JSON.stringify(lessonB101.lernziele)).not.toMatch(/Goethe|CEFR|bereit|Ich kann über das Bildungssystem in meinem Land sprechen/);

    const mapped = lessonB101.lernziele.flatMap(({ evidence }) => evidence?.exerciseIds ?? []);
    for (const forbidden of ["int-b1-01-1", "med-b1-01-1", "p1"]) {
      expect(mapped).not.toContain(forbidden);
    }
    expect(lessonB101.practiceBank.findIndex(({ id }) => id === "e12")).toBeGreaterThanOrEqual(4);
  });

  it("requires every evidence taskId to end with its exercise ID and to point at a real task", () => {
    for (const item of lessonB101.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const exerciseId of evidence.exerciseIds) {
        expect(
          allTasks().some(({ id }) => id === exerciseId),
          `${item.id} ${exerciseId} is a real task`,
        ).toBe(true);
      }
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").at(-1) ?? "";
        expect(evidence.exerciseIds, `${taskId} maps to a goal exercise`).toContain(exerciseId);
      }
    }
  });

  it("enumerates every auditable task type so no new task escapes the guard", () => {
    const byType = (type: Exercise["type"]) =>
      allTasks()
        .filter((item) => item.type === type)
        .map(({ id }) => id)
        .sort();
    expect(byType("multiple-choice").filter((id) => id in expectedMultipleChoice), "MCQ مغطّاة").toEqual(
      byType("multiple-choice"),
    );
    expect(byType("fill-blank").filter((id) => id in expectedFillBlanks), "فراغات مغطّاة").toEqual(byType("fill-blank"));
    expect(
      byType("error-correction").filter((id) => id in expectedErrorCorrections),
      "تصحيحات مغطّاة",
    ).toEqual(byType("error-correction"));
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(byType("matching"));
    const transformations = byType("transformation");
    const covered = transformations.filter((id) => expectedTransformations.includes(id));
    expect(covered, "تحويلات مغطّاة").toEqual(transformations);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, value] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(value.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(value.key);
      expect(new Set(exercise.options).size, `${id} unique`).toBe(exercise.options.length);
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correct).isCorrect, `${id} all keys`).toBe(true);
      exercise.blanks.forEach((blank, index) => {
        for (const option of blank.options ?? []) {
          const answers = [...expected.correct];
          answers[index] = option;
          expect(evaluateExercise(exercise, answers).isCorrect, `${id} blank ${index + 1}: ${option}`).toBe(
            option === expected.correct[index],
          );
        }
      });
    }
  });

  it("checks error-correction spans and options; the sentences have one unambiguous error", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongSentence.includes(exercise.wrongWord), `${id} span`).toBe(true);
      expect(exercise.wrongWord, `${id} span`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correction`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correctWord).isCorrect, `${id} correct`).toBe(true);
      for (const option of expected.options.filter((item) => item !== expected.correctWord)) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} distractor ${option}`).toBe(false);
      }
    }
  });

  it("treats von + Dativ as a register alternative, not an error, in e9", () => {
    const e9 = task("e9");
    if (e9.type !== "transformation") throw new Error("e9 is not transformation");
    expect(e9.acceptedAnswers).toContain("Das ist das Buch des Lehrers.");
    expect(evaluateExercise(e9, "Das ist das Buch des Lehrers.").isCorrect).toBe(true);
    expect(evaluateExercise(e9, "Das ist das Buch von dem Lehrer.").isCorrect).toBe(false);
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs, `${id} pairs`).toEqual(pairs);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} correct pairs`).toBe(true);
      const swapped = [{ ...pairs[0], right: pairs[1].right }, { ...pairs[1], right: pairs[0].right }, ...pairs.slice(2)];
      expect(evaluateExercise(exercise, swapped).isCorrect, `${id} swapped`).toBe(false);
    }
  });

  it("checks the accepted answers of every new transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "Das ist die Frau, die unterrichtet Deutsch.").isCorrect, `${id} خطأ`).toBe(false);
    }
  });

  it("checks word-order and transformation answers", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(e4.tokens).toEqual(["Der", "Mann", ",", "der", "dort", "steht", ",", "ist", "mein", "Lehrer", "."]);
    expect(evaluateExercise(e4, [...e4.tokens]).isCorrect).toBe(true);

    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    expect(evaluateExercise(e7, "Der Mann, der mir hilft, ist nett.").isCorrect).toBe(true);
    expect(evaluateExercise(e7, "Der Mann, den mir hilft, ist nett.").isCorrect).toBe(false);
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB101.reading;
    expect(reading?.id).toBe("read-b1-01");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Zwei Wege nach der Schule");
    expect(reading?.titleAr).toBe("طريقان بعد المدرسة");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const head = item.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(text.includes(stem), `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
    }

    expect(reading?.questions.map(({ id }) => id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    for (const question of reading!.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      const answer = question.options[question.correctIndex];
      expect(text.includes(answer.toLowerCase()) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(false);
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);

    for (const anchor of ["ausbildung", "studium", "bewerbung"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b1-01", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b1-01", "l1", "q1", true)).toBe("listening-transcript:b1-01:l1:q1");
    expect(lessonB101.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`)).toEqual([
      "l1:q1",
      "l1:q2",
      "l2:q3",
      "l1:q4",
      "l3:q5",
      "l3:q6",
      "l3:q7",
    ]);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z2"), lessonB101.id, [])).toBe("pending");
    const z2Events = [goalEvent("z2", "e1"), goalEvent("z2", "e5"), goalEvent("z2", "w1")];
    expect(getGoalEvidenceStatus(goal("z2"), lessonB101.id, z2Events)).toBe("evidenced");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB101.id, z2Events.slice(0, 2))).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB101.id, [goalEvent("z4", "e12", false)])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB101.id, [goalEvent("z4", "e12")])).toBe("evidenced");
  });
});
