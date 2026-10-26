import { describe, expect, it } from "vitest";

import { lessonB108 } from "@/data/lessons/b1/b1-08";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["wird", "werde", "wirst", "werden"], key: "wird" },
  r2: { options: ["wird", "wurde", "wirst", "werde"], key: "wird" },
  e1: { options: ["werde ... lernen", "werde ... lerne", "wird ... lernen", "werde ... gelernt"], key: "werde ... lernen" },
  e2: { options: ["weder ... noch", "nicht nur ... sondern auch", "entweder ... oder", "sowohl ... als auch"], key: "weder ... noch" },
  e8: {
    options: ["الذكاء الاصطناعي", "التقنية الحديثة", "الرقمنة", "التطور التكنولوجي"],
    key: "الذكاء الاصطناعي",
  },
  m1: { options: ["werden ... gestalten", "wird ... gestalten", "werdet ... gestalten", "werden ... gestaltet"], key: "werden ... gestalten" },
  m2: {
    options: ["Entweder ... oder", "Weder ... noch", "Nicht nur ... sondern auch", "Sowohl ... als auch"],
    key: "Entweder ... oder",
  },
  q1: {
    options: ["Sie könnten manche Aufgaben verändern.", "Sie werden alle Berufe abschaffen.", "Sie haben keinen Einfluss auf Aufgaben.", "Sie können nicht ausfallen."],
    key: "Sie könnten manche Aufgaben verändern.",
  },
  q2: {
    options: ["Ein Ausfall kann größere Folgen haben.", "Ein System kann nie ausfallen.", "Alle Aufgaben werden einfacher.", "Technik verändert keine Aufgaben."],
    key: "Ein Ausfall kann größere Folgen haben.",
  },
  q3: { options: ["Die Kamera ist schlecht", "Das Handy ist kaputt", "Es ist zu alt", "Er hat es verloren"], key: "Die Kamera ist schlecht" },
  q4: { options: ["den Zugriff auf Standort und Kontakte", "die Speicherung von Fotos vollständig", "die Weitergabe der Daten an Firmen", "die Benachrichtigungen für die App"], key: "den Zugriff auf Standort und Kontakte" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["arbeite"], options: [["arbeite", "arbeitest", "arbeitet"]] },
  e6: {
    correct: ["Entweder", "oder", "sowohl", "als auch"],
    options: [
      ["Entweder", "Weder", "Sowohl"],
      ["oder", "noch", "als auch"],
      ["sowohl", "weder", "entweder"],
      ["als auch", "noch", "oder"],
    ],
  },
  e11: { correct: ["Einerseits"], options: [["Einerseits", "Entweder", "Weder"]] },
  m5: {
    correct: ["sowohl", "als auch", "weder", "noch"],
    options: [
      ["sowohl", "weder", "entweder"],
      ["als auch", "noch", "oder"],
      ["weder", "sowohl", "entweder"],
      ["noch", "als auch", "oder"],
    ],
  },
  w2: {
    correct: ["nicht nur", "sondern auch", "weder", "noch"],
    options: [
      ["nicht nur", "weder", "entweder"],
      ["sondern auch", "noch", "oder"],
      ["weder", "nicht nur", "entweder"],
      ["noch", "sondern auch", "oder"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "wird", correctWord: "werde", options: ["werde", "wird", "wirst", "werden"] },
  e9: { wrongWord: "entweder", correctWord: "weder", options: ["weder", "entweder", "sowohl", "nicht nur"] },
  e14: {
    wrongWord: "du wirst",
    correctWord: "wirst du",
    options: ["wirst du", "du wirst", "wirst du sein", "du werdest"],
  },
  m4: { wrongWord: "lerne", correctWord: "lernen", options: ["lernen", "lerne", "gelernt", "lernst"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "nicht nur... sondern auch", right: "ليس فقط بل أيضاً" },
    { left: "sowohl... als auch", right: "كلاهما" },
    { left: "weder... noch", right: "لا... ولا" },
    { left: "entweder... oder", right: "إما... أو" },
  ],
  e12: [
    { left: "nicht nur … sondern auch", right: "ليس فقط … بل أيضاً" },
    { left: "weder … noch", right: "لا … ولا" },
    { left: "entweder … oder", right: "إما … أو" },
    { left: "je … desto", right: "كلما … كلما" },
  ],
};

const expectedTransformations: string[] = ["e7", "e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Ich werde morgen Deutsch lernen"],
  e13: ["Ich werde morgen Deutsch lernen", "Ich werde morgen Deutsch lernen."],
  w1: ["Ich werde morgen Deutsch lernen", "Ich werde morgen Deutsch lernen."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["werde", "Ich", "morgen", "lernen", "Deutsch", "."],
    correctSentence: "Ich werde morgen Deutsch lernen.",
  },
  m3: {
    tokens: ["du", "mehr", "Je", "desto", "übst", "wirst", "besser", "du", ","],
    correctSentence: "Je mehr du übst, desto besser wirst du.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB108.review ?? []),
    ...lessonB108.practiceBank,
    ...lessonB108.miniTest,
    ...lessonB108.writing,
    ...lessonB108.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-08 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB108.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-08 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-08 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB108.id,
    taskId,
  };
}

describe("B1-08 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB108).toMatchObject({
      id: "b1-08",
      unitId: "b1-08",
      level: "B1",
      order: 1,
      titleDe: "Technik und Digitales",
      titleAr: "التقنية والرقمنة",
    });
    expect("duration" in lessonB108).toBe(false);
    expect(lessonB108.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|الخريطة الكاملة/i);

    const meta = LESSON_META.find((item) => item.id === "b1-08");
    expect(meta).toMatchObject({ id: "b1-08", unitId: "b1-08", level: "B1", order: 1, summary: lessonB108.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB108.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e2", "e6", "e9", "m2", "m5", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e1", "e4", "e5", "e7", "m1", "m4", "w1"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["q2", "e11"]);
    for (const item of lessonB108.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
    }
    expect(JSON.stringify(lessonB108.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|أتقن|أتحدث/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB108.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    const listeningIds = lessonB108.listening.questions.map(({ id }) => id).sort();
    const evidenceIds = lessonB108.lernziele
      .flatMap((item) => item.evidence?.exerciseIds ?? [])
      .filter((id) => id.startsWith("q"))
      .sort();
    expect(evidenceIds).toEqual(listeningIds);
    expect(
      lessonB108.listening.questions.map(({ id, itemId }) =>
        getListeningQuestionTaskId("b1-08", itemId, id, false),
      ),
    ).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"]);
    expect(getListeningQuestionTaskId("b1-08", "l1", "q1", true)).toBe("listening-transcript:b1-08:l1:q1");
  });

  it("labels the l1 technology discussion as fictional opinion rather than evidence", () => {
    const item = lessonB108.listening.items.find(({ id }) => id === "l1");
    expect(item?.title).toContain("خيالي");
    expect(item?.audioNoteAr).toContain("ليست توقعات موثقة");
    expect(item?.lines[1]?.de).toContain("Vielleicht");
    expect(item?.lines[4]?.de).toContain("desto größere Folgen kann ein Ausfall haben");
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
    expect(byType("fill-blank").filter((id) => id in expectedFillBlanks), "فراغات مغطّاة").toEqual(
      byType("fill-blank"),
    );
    expect(
      byType("error-correction").filter((id) => id in expectedErrorCorrections),
      "تصحيحات مغطّاة",
    ).toEqual(byType("error-correction"));
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(
      byType("matching"),
    );
    const transformations = byType("transformation");
    expect(transformations.filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      transformations,
    );
    const wordOrder = byType("word-ordering");
    expect(wordOrder.filter((id) => id in expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(wordOrder);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, expected] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expected.key);
      for (const [index, option] of exercise.options.entries()) {
        const result = evaluateExercise(exercise, option);
        expect(result.isCorrect, `${id}: ${option}`).toBe(index === exercise.correctIndex);
      }
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      for (const [index, options] of expected.options.entries()) {
        for (const option of options) {
          const selected = expected.correct.map((value, position) => (position === index ? option : value));
          expect(evaluateExercise(exercise, selected).isCorrect, `${id} ${index} ${option}`).toBe(
            option === expected.correct[index],
          );
        }
      }
    }
  });

  it("checks error-correction: one wrong span, a correct option, and rejected distractors", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.wrongWord, `${id} wrong`).toBe(expected.wrongWord);
      expect(exercise.correctWord, `${id} correct`).toBe(expected.correctWord);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options, `${id} contains key`).toContain(expected.correctWord);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
  });

  it("offers a correct word among the error-correction options (the no-error option is added by the interface)", () => {
    for (const exercise of allTasks()) {
      if (exercise.type !== "error-correction" || exercise.isAlreadyCorrect) continue;
      expect(exercise.options, `${exercise.id}`).toContain(exercise.correctWord);
    }
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

  it("requires morgen in the Futur I transformation", () => {
    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    expect(e7.acceptedAnswers).toContain("Ich werde morgen Deutsch lernen");
    expect(evaluateExercise(e7, "Ich werde Deutsch lernen").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    for (const [id, expected] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(expected.tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(expected.correctSentence);
      expect(evaluateExercise(exercise, expected.correctSentence.split(/(?<=[.,])\s*|\s+/).filter(Boolean)).isCorrect).toBe(
        true,
      );
      const swapped = [...expected.tokens].reverse();
      expect(evaluateExercise(exercise, swapped).isCorrect, `${id} معكوس`).toBe(false);
    }
  });

  it("checks matching keys and rejects one swapped pair", () => {
    for (const [id, pairs] of Object.entries(expectedMatching)) {
      const exercise = task(id);
      if (exercise.type !== "matching") throw new Error(`${id} is not matching`);
      expect(exercise.pairs.map(({ left, right }) => ({ left, right })), `${id} pairs`).toEqual(pairs);
      expect(evaluateExercise(exercise, pairs).isCorrect, `${id} صحيح`).toBe(true);
      const [first, second, ...rest] = pairs;
      expect(
        evaluateExercise(exercise, [{ ...first, right: second.right }, { ...second, right: first.right }, ...rest]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("uses the corrected weder-noch rule in e9", () => {
    const e9 = task("e9");
    expect(e9.explanation).toContain("weder ... noch");
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB108.reading;
    expect(reading?.id).toBe("read-b1-08");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Arbeiten wir bald nur noch mit Computern?");
    expect(reading?.titleAr).toBe("هل سنعمل قريباً بالحواسيب فقط؟");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);
    expect(text).toContain("ausdrücklich ein erfundenes beispiel");
    expect(text).toContain("keine vorhersage von fachleuten und kein ergebnis einer studie");
    expect(text).not.toMatch(/hamburg|sina kaya|dr\. bauer|die meisten fachleute|seit zwei jahren/);

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

    for (const anchor of ["digitalisierung", "programm", "weiterbildung"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("uses IPA for the pronunciation notes instead of misleading Arabic sound spellings", () => {
    const items = lessonB108.pronunciation.items;
    expect(items.find(({ de }) => de === "digital")?.note).toContain("وليس k");
    expect(items.find(({ de }) => de === "die Intelligenz")?.note).toContain("g يظل [ɡ]");
    expect(items.find(({ de }) => de === "die Technik")?.note).toContain("[ˈtɛçnɪk]");
    expect(items.find(({ de }) => de === "die Zukunft")?.note).toContain("[ˈtsuːkʊnft]");
    expect(items.every(({ note }) => !/تيشنيك|ديكيتال|إنتِليكِنتس|تسووكونفت/.test(note ?? ""))).toBe(true);
  });

  it("limits the culture note to the dated GDPR fact", () => {
    const note = lessonB108.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("DSGVO");
    expect(note).toContain("25 مايو 2018");
    expect(note).not.toContain("2022");
    expect(note).not.toMatch(/بالـفاكس|الورقية|متأخرة عن أهدافها/);
    expect(note).not.toContain("مقدسة");
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z2"), lessonB108.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB108.id, [goalEvent("z2", "e2")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB108.id, [
        goalEvent("z2", "e2"),
        goalEvent("z2", "e6"),
        goalEvent("z2", "e9"),
        goalEvent("z2", "m2"),
        goalEvent("z2", "m5"),
        goalEvent("z2", "w2"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB108.id, [
        goalEvent("z2", "e2"),
        goalEvent("z2", "e6", false),
        goalEvent("z2", "e9"),
        goalEvent("z2", "m2"),
        goalEvent("z2", "m5"),
        goalEvent("z2", "w2"),
      ]),
    ).toBe("pending");
  });
});
