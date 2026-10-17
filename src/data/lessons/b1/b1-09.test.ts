import { describe, expect, it } from "vitest";

import { lessonB109 } from "@/data/lessons/b1/b1-09";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["meinem", "meinen", "mein", "meine"], key: "meinem" },
  r2: { options: ["النادي", "الشركة", "المدرسة", "المستشفى"], key: "النادي" },
  e1: { options: ["stellen", "geben", "sagen", "nehmen"], key: "stellen" },
  e2: { options: ["Studenten", "Student", "Studentes", "Studentin"], key: "Studenten" },
  e8: {
    options: ["يُبلغ خبراً", "يقول وداعاً", "يأخذ قراراً", "يقدم مساعدة"],
    key: "يُبلغ خبراً",
  },
  e11: { options: ["auf", "für", "an", "über"], key: "auf" },
  m1: { options: ["treffen", "stellen", "sagen", "machen"], key: "treffen" },
  m2: { options: ["Kunden", "Kunde", "Kundes", "Kundem"], key: "Kunden" },
  m6: { options: ["am", "an den", "auf dem", "für den"], key: "am" },
  q1: { options: ["Erfahrung", "Geld", "Bücher", "Freunde"], key: "Erfahrung" },
  q2: {
    options: ["mit dem Kollegen", "mit dem Chef", "mit dem Kunden", "allein"],
    key: "mit dem Kollegen",
  },
  q3: {
    options: ["eine Entscheidung", "eine schwierige Frage", "einen kleinen Fehler", "eine lange Pause"],
    key: "eine Entscheidung",
  },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["Lehrers"], options: [["Lehrers", "Lehrer", "Lehreren"]] },
  e6: {
    correct: ["Kunden", "Herrn"],
    options: [
      ["Kunden", "Kunde", "Kundes"],
      ["Herrn", "Herr", "Herrs"],
    ],
  },
  e12: {
    correct: ["am", "für"],
    options: [
      ["am", "an das", "für das"],
      ["für", "über", "an"],
    ],
  },
  m5: {
    correct: ["Sagen", "Abschied"],
    options: [
      ["Sagen", "Stellen", "Treffen"],
      ["Abschied", "Entscheidung", "Hilfe"],
    ],
  },
  w2: {
    correct: ["stellen", "treffen", "sagen"],
    options: [
      ["stellen", "treffen", "sagen"],
      ["stellen", "treffen", "sagen"],
      ["stellen", "treffen", "sagen"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "Student", correctWord: "Studenten", options: ["Studenten", "Student", "Studentes", "Studentn"] },
  e9: { wrongWord: "Kollege", correctWord: "Kollegen", options: ["Kollegen", "Kollege", "Kolleges", "Kollegn"] },
  e13: { wrongWord: "über", correctWord: "für", options: ["für", "über", "auf", "an"] },
  m4: { wrongWord: "Journalist", correctWord: "Journalisten", options: ["Journalisten", "Journalist", "Journalistes", "Journalistin"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "das Ehrenamt", right: "العمل التطوعي" },
    { left: "der Verein", right: "الجمعية" },
    { left: "die Spende", right: "التبرع" },
    { left: "das Mitglied", right: "العضو" },
  ],
};

const expectedTransformations: string[] = ["e7", "e14", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Ich stelle eine Frage", "Ich stelle eine Frage."],
  e14: [
    "Der Chef trifft morgen eine Entscheidung",
    "Der Chef trifft morgen eine Entscheidung.",
    "Morgen trifft der Chef eine Entscheidung",
    "Morgen trifft der Chef eine Entscheidung.",
  ],
  w1: ["eine Frage stellen", "Ich stelle eine Frage"],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: { tokens: ["Frage", "eine", "stellen", "Darf", "ich", "?"], correctSentence: "Darf ich eine Frage stellen?" },
  m3: {
    tokens: ["Er", "traf", "Entscheidung", "eine", "wichtige", "."],
    correctSentence: "Er traf eine wichtige Entscheidung.",
  },
};

const expectedNDeclensionForms: Record<string, { form: string; exerciseId: string }> = {
  e6: { form: "Herrn", exerciseId: "e6" },
  e7: { form: "Kunden", exerciseId: "e6" },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB109.review ?? []),
    ...lessonB109.practiceBank,
    ...lessonB109.miniTest,
    ...lessonB109.writing,
    ...lessonB109.listening.questions,
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B1-09 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB109.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B1-09 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B1-09 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB109.id,
    taskId,
  };
}

describe("B1-09 lesson content audit", () => {
  it("keeps identity and order, has no duration, and mirrors the summary into meta", () => {
    expect(lessonB109).toMatchObject({
      id: "b1-09",
      unitId: "b1-09",
      level: "B1",
      order: 1,
      titleDe: "Soziales Engagement",
      titleAr: "العمل التطوعي والاجتماعي",
    });
    expect("duration" in lessonB109).toBe(false);
    expect(lessonB109.summary).not.toMatch(/\d+\s*دقيقة|Goethe|CEFR|معتمد|إتقان عام|الخريطة الكاملة/i);

    const meta = LESSON_META.find((item) => item.id === "b1-09");
    expect(meta).toMatchObject({ id: "b1-09", unitId: "b1-09", level: "B1", order: 1, summary: lessonB109.summary });
    expect(meta && "duration" in meta).toBe(false);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB109.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e4", "e7", "m1", "m3", "m5", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e2", "e5", "e6", "e9", "m2", "m4", "w3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e3", "e8"]);
    expect(goal("z5").evidence?.exerciseIds).toEqual(["e11", "e12", "e13", "m6"]);
    for (const item of lessonB109.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB109.lernziele)).not.toMatch(/Goethe|CEFR|sprechen|zusammenfassen|أتقن|أتحدث/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB109.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    const listeningIds = lessonB109.listening.questions.map(({ id }) => id).sort();
    const evidenceIds = lessonB109.lernziele
      .flatMap((item) => item.evidence?.exerciseIds ?? [])
      .filter((id) => id.startsWith("q"))
      .sort();
    expect(evidenceIds).toEqual(listeningIds);
    expect(
      lessonB109.listening.questions.map(({ id, itemId }) =>
        getListeningQuestionTaskId("b1-09", itemId, id, false),
      ),
    ).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"]);
    expect(getListeningQuestionTaskId("b1-09", "l1", "q1", true)).toBe("listening-transcript:b1-09:l1:q1");
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

  it("requires the nominal-verb link in the e14 transformation", () => {
    const e14 = task("e14");
    if (e14.type !== "transformation") throw new Error("e14 is not transformation");
    expect(e14.acceptedAnswers?.some((answer) => answer.includes("eine Entscheidung"))).toBe(true);
    expect(evaluateExercise(e14, "Der Chef entscheidet morgen.").isCorrect).toBe(false);
  });

  it("checks word-order answers against the sentence in order", () => {
    for (const [id, expected] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(expected.tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(expected.correctSentence);
      const inOrder = expected.correctSentence.split(" ");
      expect(evaluateExercise(exercise, inOrder).isCorrect, `${id} بالترتيب`).toBe(true);
      const swapped = [...inOrder].reverse();
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

  it("keeps the n-declension endings on the nouns that need them", () => {
    const e6 = task("e6");
    if (e6.type !== "fill-blank") throw new Error("e6 is not fill-blank");
    expect(e6.blanks.map(({ correct }) => correct)).toEqual(["Kunden", "Herrn"]);
    for (const [id, { form, exerciseId }] of Object.entries(expectedNDeclensionForms)) {
      const exercise = task(exerciseId);
      if (exercise.type !== "fill-blank") throw new Error(`${exerciseId} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id}`).toContain(form);
    }
    expect(evaluateExercise(e6, ["Kunde", "Herr"]).isCorrect).toBe(false);
    expect(evaluateExercise(e6, ["Kunden", "Herrn"]).isCorrect).toBe(true);
  });

  it("keeps the fixed-preposition rule for teilnehmen, warten, and sich interessieren", () => {
    const m6 = task("m6");
    if (m6.type !== "multiple-choice") throw new Error("m6 is not multiple-choice");
    expect(m6.options[m6.correctIndex]).toBe("am");
    expect(m6.explanation).toMatch(/Dativ/);

    const e11 = task("e11");
    if (e11.type !== "multiple-choice") throw new Error("e11 is not multiple-choice");
    expect(e11.options[e11.correctIndex]).toBe("auf");
    expect(e11.explanation).toContain("warten auf");

    const e13 = task("e13");
    if (e13.type !== "error-correction") throw new Error("e13 is not error-correction");
    expect(e13.correctWord).toBe("für");
    expect(e13.explanation).toContain("sich interessieren für");
  });

  it("checks the review block, the theory anchors, and the flashcards", () => {
    expect(lessonB109.review?.map(({ id }) => id)).toEqual(["r1", "r2", "r3"]);
    expect(lessonB109.theory.map(({ id }) => id)).toEqual(["t1", "t2", "t3"]);
    for (const block of lessonB109.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }

    const theoryText = JSON.stringify(lessonB109.theory);
    for (const rule of ["eine Frage stellen", "n-Deklination", "warten auf", "sich erinnern an"]) {
      expect(theoryText, `قاعدة مفقودة: ${rule}`).toContain(rule);
    }

    const cards = lessonB109.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
    }
    const corpus = JSON.stringify([
      lessonB109.reading?.paragraphs,
      lessonB109.reading?.glossary,
      lessonB109.theory,
      lessonB109.practiceBank,
      lessonB109.miniTest,
      lessonB109.writing,
      lessonB109.listening,
    ]).toLowerCase();
    for (const card of cards) {
      const head = card.de.replace(/^(der|die|das|sich)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(corpus.includes(stem), `بطاقة بلا مرساة ${card.de}`).toBe(true);
    }
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB109.reading;
    expect(reading?.id).toBe("read-b1-09");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Eine Stunde pro Woche für andere");
    expect(reading?.titleAr).toBe("ساعة واحدة في الأسبوع للآخرين");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(250);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const head = item.de.replace(/^(der|die|das|sich)\s+/i, "").split(/[\s,(/]/)[0];
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
      expect(reading!.paragraphs.join(" ").includes(answer) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(
        false,
      );
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);

    for (const anchor of ["ehrenamtlich", "freiwillige", "einarbeitung", "erinnerung"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("keeps the culture note to a sourced survey statistic", () => {
    const note = lessonB109.fehlerUndTipps.culturalNote.content;
    expect(note).toContain("39.7%");
    expect(note).toContain("Freiwilligensurvey 2019");
    expect(note).not.toContain("600");
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z5"), lessonB109.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z5"), lessonB109.id, [goalEvent("z5", "e11")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z5"), lessonB109.id, [
        goalEvent("z5", "e11"),
        goalEvent("z5", "e12"),
        goalEvent("z5", "e13"),
        goalEvent("z5", "m6"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z5"), lessonB109.id, [
        goalEvent("z5", "e11"),
        goalEvent("z5", "e12", false),
        goalEvent("z5", "e13"),
        goalEvent("z5", "m6"),
      ]),
    ).toBe("pending");
  });
});
