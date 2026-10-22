import { describe, expect, it } from "vitest";

import { lessonB105 } from "@/data/lessons/b1/b1-05";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["hätte", "habe", "hatte", "haben"], key: "hätte" },
  r2: { options: ["الرياضة", "الصحة", "الغذاء", "النوم"], key: "الرياضة" },
  e1: { options: ["wäre ... gekommen", "hätte ... gekommen", "wäre ... gekommt", "habe ... gekommen"], key: "wäre ... gekommen" },
  e2: { options: ["hätte ... gelesen", "wäre ... gelesen", "hätte ... lesen", "würde ... gelesen"], key: "hätte ... gelesen" },
  e8: {
    options: ["أود قهوة (مهذب)", "كنت أملك قهوة", "أشرب قهوة الآن", "شربت قهوة أمس"],
    key: "أود قهوة (مهذب)",
  },
  e11: { options: ["sei", "sind", "seid", "bist"], key: "sei" },
  e12: { options: ["seien", "sind", "seid", "bist"], key: "seien" },
  m1: { options: ["wäre ... gegangen", "hätte ... gegangen", "wäre ... gegeht", "habe ... gegangen"], key: "wäre ... gegangen" },
  m2: { options: ["hätte ... gemacht", "wäre ... gemacht", "hätte ... machen", "hat ... gemacht"], key: "hätte ... gemacht" },
  q1: { options: ["mehr Sport", "weniger schlafen", "mehr essen", "weniger arbeiten"], key: "mehr Sport" },
  q2: {
    options: ["Wasser trinken und Bewegung", "nur Tabletten einnehmen", "viel Bettruhe zu Hause", "wenig essen und fast nichts trinken"],
    key: "Wasser trinken und Bewegung",
  },
  q3: {
    options: ["Ich hätte früher kommen sollen", "Ich bin wieder ganz gesund", "Ich gehe jetzt nach Hause", "Ich brauche heute Tabletten"],
    key: "Ich hätte früher kommen sollen",
  },
  q4: { options: ["schlechter Schlaf und Müdigkeit", "Kopfschmerzen nach dem Sport", "zu wenig Zeit für die Arbeit", "eine Erkältung seit gestern"], key: "schlechter Schlaf und Müdigkeit" },
  q5: { options: ["täglicher Spaziergang und feste Schlafzeiten", "lange Läufe und spätes Aufstehen", "neue Tabletten und weniger Bewegung", "mehr Kaffee und kurze Nächte"], key: "täglicher Spaziergang und feste Schlafzeiten" },
  q6: { options: ["wieder in die Praxis kommen", "sofort mit Sport aufhören", "nur noch Kaffee trinken", "einen Urlaub buchen"], key: "wieder in die Praxis kommen" },
};

const expectedTransformations: string[] = ["e7", "e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  w1: ["Ich hätte Sport gemacht", "Ich hätte Sport gemacht."],
  e13: [
    "Wenn ich geschlafen hätte, wäre ich nicht müde gewesen",
    "Wenn ich geschlafen hätte, wäre ich nicht müde gewesen.",
  ],
};

const expectedFillBlanksExtra: Record<string, { correct: string[]; options: string[][] }> = {};

const expectedErrorCorrectionsExtra: Record<
  string,
  { wrongWord: string; correctWord: string; options: string[] }
> = {
  e14: { wrongWord: "sind", correctWord: "seien", options: ["seien", "sind", "wären", "sein"] },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["Kopfschmerzen"], options: [["Kopfschmerzen", "Bauchschmerzen", "Halsschmerzen"]] },
  e6: {
    correct: ["wäre", "hätte", "wären"],
    options: [
      ["wäre", "hätte"],
      ["wäre", "hätte"],
      ["wären", "hätten"],
    ],
  },
  w2: {
    correct: ["wäre", "gekommen", "gehabt hätte", "hätte", "gelernt"],
    options: [
      ["wäre", "hätte", "würde"],
      ["gekommen", "gekommt", "gekomden"],
      ["gehabt hätte", "hatte gehabt", "gehabt habe"],
      ["hätte", "wäre", "würde"],
      ["gelernt", "gelernen", "lernte"],
    ],
  },
  m5: {
    correct: ["gewusst hätte", "wüsste"],
    options: [
      ["gewusst hätte", "weiß", "gewusst"],
      ["wüsste", "gewusst", "wissen"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "ich wäre", correctWord: "wäre ich", options: ["wäre ich", "ich wäre", "wäre ich gekommen", "ich gekommen wäre"] },
  e9: { wrongWord: "wüssten", correctWord: "wüsste", options: ["wüsste", "wüssten", "gewusst", "wissen"] },
  m4: { wrongWord: "hätte", correctWord: "wäre", options: ["wäre", "hätte", "würde", "sei"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Gesundheit", right: "الصحة" },
    { left: "die Prävention", right: "الوقاية" },
    { left: "die Bewegung", right: "الحركة" },
    { left: "fit", right: "لائق" },
  ],
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB105.review ?? []),
    ...lessonB105.practiceBank,
    ...lessonB105.miniTest,
    ...lessonB105.writing,
    ...lessonB105.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-05 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB105.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-05 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-05 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB105.id,
    taskId,
  };
}

describe("B1-05 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB105).toMatchObject({
      id: "b1-05",
      unitId: "b1-05",
      level: "B1",
      order: 1,
      titleDe: "Gesundheit und Prävention",
      titleAr: "الصحة والوقاية",
    });
    expect("duration" in lessonB105).toBe(false);
    expect(lessonB105.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = LESSON_META.find((item) => item.id === "b1-05");
    expect(meta).toMatchObject({ id: "b1-05", unitId: "b1-05", level: "B1", order: 1, summary: lessonB105.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, with no speaking or summary claims", () => {
    expect(lessonB105.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4", "q5", "q6"]);
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4", "listening:l3:q5", "listening:l3:q6"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "m2", "w1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e4", "e5", "m3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e11", "e12"]);
    expect(JSON.stringify(lessonB105.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|Artikel/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB105.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
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
    const fills = { ...expectedFillBlanks, ...expectedFillBlanksExtra };
    expect(byType("fill-blank").filter((id) => id in fills), "فراغات مغطّاة").toEqual(byType("fill-blank"));
    const corrections = { ...expectedErrorCorrections, ...expectedErrorCorrectionsExtra };
    expect(byType("error-correction").filter((id) => id in corrections), "تصحيحات مغطّاة").toEqual(
      byType("error-correction"),
    );
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(
      byType("matching"),
    );
    const transformations = byType("transformation");
    expect(transformations.filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      transformations,
    );
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
    }
  });

  it("checks the new error-correction key against the engine", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrectionsExtra)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} wrong`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correct`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(evaluateExercise(exercise, expected.correctWord).isCorrect, `${id} answer`).toBe(true);
    }
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB105.reading;
    expect(reading?.id).toBe("read-b1-05");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Zu viel Arbeit, zu wenig Schlaf");
    expect(reading?.titleAr).toBe("عمل كثير ونوم قليل");
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

    for (const anchor of ["bericht", "schlaf", "pausen"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
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

  it("checks error-correction: one wrong span, a correct option, and rejected distractors", () => {
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

  it("removes the false 'لا خطأ' promise from error-correction instructions", () => {
    for (const id of ["e5", "e9", "m4"]) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.instructionAr, `${id} instruction`).not.toContain("لا خطأ");
    }
  });

  it("checks the transformation keys for hätte + Partizip II", () => {
    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    expect(evaluateExercise(e7, "Ich hätte früher Deutsch gelernt.").isCorrect).toBe(true);
    expect(evaluateExercise(e7, "Ich lerne früher Deutsch.").isCorrect).toBe(false);

    const w1 = task("w1");
    if (w1.type !== "transformation") throw new Error("w1 is not transformation");
    expect(evaluateExercise(w1, "Ich hätte Sport gemacht.").isCorrect).toBe(true);
    expect(evaluateExercise(w1, "Ich würde Sport machen.").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    const e4 = task("e4");
    if (e4.type !== "word-ordering") throw new Error("e4 is not word-ordering");
    expect(
      evaluateExercise(e4, ["Wenn", "ich", "Zeit", "gehabt", "hätte", ",", "wäre", "ich", "gekommen", "."]).isCorrect,
    ).toBe(true);
    expect(evaluateExercise(e4, [...e4.tokens]).isCorrect).toBe(false);

    const m3 = task("m3");
    if (m3.type !== "word-ordering") throw new Error("m3 is not word-ordering");
    expect(
      evaluateExercise(m3, ["Wenn", "ich", "Sport", "gemacht", "hätte", ",", "wäre", "ich", "früher", "fit", "geworden", "."])
        .isCorrect,
    ).toBe(true);
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

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b1-05", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b1-05", "l2", "q3", true)).toBe("listening-transcript:b1-05:l2:q3");
    expect(lessonB105.listening.questions.map(({ id, itemId }) => `${itemId}:${id}`)).toEqual([
      "l1:q1",
      "l2:q2",
      "l2:q3",
      "l3:q4",
      "l3:q5",
      "l3:q6",
    ]);
  });

  it("keeps the culture note sourced and removes unsupported claims", () => {
    const text = JSON.stringify(lessonB105);
    expect(text).toContain("DWDS");
    expect(text).toContain("Check-up 35");
    expect(text).not.toMatch(/Fitnessstudio|في المطعم!|ندم المهاجر|تسيطر على لغة الصحافة|هذا ما يفعله الصحفيون/);
    expect(text).not.toMatch(/الألمان يمارسون الرياضة كثيراً/);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z1"), lessonB105.id, [])).toBe("pending");
    const z1Events = [goalEvent("z1", "q1"), goalEvent("z1", "q2"), goalEvent("z1", "q3"), goalEvent("z1", "q4"), goalEvent("z1", "q5"), goalEvent("z1", "q6")];
    expect(getGoalEvidenceStatus(goal("z1"), lessonB105.id, z1Events)).toBe("evidenced");
    expect(getGoalEvidenceStatus(goal("z1"), lessonB105.id, z1Events.slice(0, 2))).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB105.id, [goalEvent("z2", "e1", false)])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB105.id, [goalEvent("z2", "e1"), goalEvent("z2", "m2"), goalEvent("z2", "w1")]),
    ).toBe("evidenced");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB105.id, [goalEvent("z4", "e11")])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB105.id, [goalEvent("z4", "e11"), goalEvent("z4", "e12")])).toBe(
      "evidenced",
    );
  });
});
