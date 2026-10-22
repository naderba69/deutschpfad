import { describe, expect, it } from "vitest";

import { lessonB208 } from "@/data/lessons/b2/b2-08";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["dich", "mir", "mich", "sich"], key: "mich" },
  r2: { options: ["ein", "einen", "einem", "eine"], key: "einen" },
  e1: { options: ["für", "auf", "an", "über"], key: "für" },
  e2: { options: ["auf", "für", "von", "um"], key: "auf" },
  e8: { options: ["التبادل", "الزيارة", "الرحلة", "الاجتماع"], key: "التبادل" },
  e14: { options: ["تعوّدت على المناخ", "تخلّت عن المناخ", "سئمت المناخ", "انتقلت من المناخ"], key: "تعوّدت على المناخ" },
  m1: { options: ["für", "auf", "von", "um"], key: "für" },
  m2: { options: ["von", "für", "auf", "an"], key: "von" },
  q1: { options: ["von einem Job in Deutschland", "von einem Haus mit Garten", "von einer Reise nach Spanien", "von einem Auto mit vier Türen"], key: "von einem Job in Deutschland" },
  q2: { options: ["auf einen Austausch", "auf eine lange Reise", "auf eine große Party", "auf ein neues Buch"], key: "auf einen Austausch" },
  q3: {
    options: ["daran, dass man anfragt", "daran, dass man isst", "daran, dass man schläft", "daran, dass man arbeitet"],
    key: "daran, dass man anfragt",
  },
  q4: { options: ["Zeit und offene Fragen", "eine schnelle Entscheidung", "eine gemeinsame Sprache allein", "gleiche Familienfeste"], key: "Zeit und offene Fragen" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["habe"], options: [["habe", "hat", "hätte"]] },
  e6: {
    correct: ["über", "von", "an"],
    options: [
      ["über", "von", "um"],
      ["über", "von", "um"],
      ["über", "von", "an"],
    ],
  },
  e12: {
    correct: ["darauf", "Dafür"],
    options: [
      ["darauf", "worauf", "daran"],
      ["Dafür", "Wofür", "Daran"],
    ],
  },
  m5: {
    correct: ["um", "über"],
    options: [
      ["um", "für", "auf"],
      ["über", "von", "an"],
    ],
  },
  w2: {
    correct: ["für", "auf", "von"],
    options: [
      ["für", "auf", "von"],
      ["für", "auf", "von"],
      ["für", "auf", "von"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "auf", correctWord: "für", options: ["für", "auf", "an", "von"] },
  e9: { wrongWord: "mit", correctWord: "auf", options: ["auf", "zu", "von", "bei"] },
  e11: { wrongWord: "für", correctWord: "um", options: ["um", "für", "auf", "von"] },
  m4: { wrongWord: "für", correctWord: "auf", options: ["auf", "für", "von", "an"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "sich interessieren", right: "für" },
    { left: "warten", right: "auf" },
    { left: "träumen", right: "von" },
    { left: "sich kümmern", right: "um" },
  ],
};

const expectedTransformations: string[] = ["e7", "e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Ich gewöhne mich langsam daran", "Ich gewöhne mich daran"],
  e13: [
    "für die Sprache",
    "für die Sprache.",
    "Ich interessiere mich für die Sprache.",
    "ich interessiere mich für die sprache.",
  ],
  w1: ["Ich interessiere mich für die deutsche Kultur", "Ich interessiere mich für deutsche Kultur"],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: { tokens: ["interessiere", "mich", "Ich", "Musik", "für", "."], correctSentence: "Ich interessiere mich für Musik." },
  m3: { tokens: ["auf", "Ich", "freue", "mich", "Urlaub", "den", "."], correctSentence: "Ich freue mich auf den Urlaub." },
};

const prepositionOf: Record<string, string> = {
  "sich interessieren": "für",
  warten: "auf",
  "sich kümmern": "um",
  träumen: "von",
  "sich freuen": "auf",
  "abhängen": "von",
  "sich gewöhnen": "an",
  "diskutieren": "über",
  "denken": "an",
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB208.review ?? []),
    ...lessonB208.practiceBank,
    ...lessonB208.miniTest,
    ...lessonB208.writing,
    ...(lessonB208.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-08 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB208.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-08 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-08 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB208.id,
    taskId,
  };
}

describe("B2-08 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB208).toMatchObject({
      id: "b2-08",
      unitId: "b2-08",
      level: "B2",
      order: 1,
      titleDe: "Sprachen und Kulturen",
      titleAr: "اللغات والتبادل الثقافي",
    });
    expect("duration" in lessonB208).toBe(false);
    expect(lessonB208.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-08");
    expect(meta).toMatchObject({ id: "b2-08", unitId: "b2-08", level: "B2", order: 1, estimatedMinutes: 55 });
    expect(meta?.summary).toBe(lessonB208.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB208.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e3", "e5", "e6", "e9", "m1", "m2", "m4", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["q3", "e7"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["w1", "w2"]);
    for (const item of lessonB208.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB208.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB208.lernziele) {
      const evidence = item.evidence;
      if (!evidence) throw new Error(`${item.id} has no evidence`);
      expect(evidence.taskIds?.length, `${item.id} taskIds`).toBe(evidence.exerciseIds?.length);
      for (const taskId of evidence.taskIds ?? []) {
        const exerciseId = taskId.split(":").pop() ?? "";
        expect(evidence.exerciseIds, `${taskId} غير مُقابل`).toContain(exerciseId);
      }
    }
  });

  it("maps listening evidence to transcript-free task IDs only", () => {
    expect(getListeningQuestionTaskId("b2-08", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-08", "l1", "q2", false)).toBe("listening:l1:q2");
    expect(getListeningQuestionTaskId("b2-08", "l3", "q4", false)).toBe("listening:l3:q4");
    expect(getListeningQuestionTaskId("b2-08", "l2", "q3", true)).toBe("listening-transcript:b2-08:l2:q3");
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"]);
    const transcriptIds = lessonB208.lernziele.flatMap(
      (item) => item.evidence?.taskIds?.filter((taskId) => taskId.startsWith("listening-transcript:")) ?? [],
    );
    expect(transcriptIds, "كشف النصّ لا يُحتسب أداءً").toEqual([]);
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
    expect(byType("error-correction").filter((id) => id in expectedErrorCorrections), "تصحيحات مغطّاة").toEqual(
      byType("error-correction"),
    );
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(byType("matching"));
    expect(byType("transformation").filter((id) => expectedTransformations.includes(id)), "تحويلات مغطّاة").toEqual(
      byType("transformation"),
    );
    expect(byType("word-ordering").filter((id) => id in expectedWordOrder), "ترتيب كلمات مغطّى").toEqual(
      byType("word-ordering"),
    );
    expect(byType("dictation"), "إملاء").toEqual(["e10", "w3"]);
  });

  it("audits every multiple-choice key and distractor set", () => {
    for (const [id, expected] of Object.entries(expectedMultipleChoice)) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options, `${id} options`).toEqual(expected.options);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toBe(expected.key);
      for (const [index, option] of exercise.options.entries()) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id}: ${option}`).toBe(
          index === exercise.correctIndex,
        );
      }
    }
  });

  it("checks every fill-blank key and tests each alternative against the engine", () => {
    for (const [id, expected] of Object.entries(expectedFillBlanks)) {
      const exercise = task(id);
      if (exercise.type !== "fill-blank") throw new Error(`${id} is not fill-blank`);
      expect(exercise.blanks.map(({ correct }) => correct), `${id} keys`).toEqual(expected.correct);
      expect(exercise.blanks.map(({ options }) => options), `${id} options`).toEqual(expected.options);
      expect((exercise.template.match(/___/g) ?? []).length, `${id} blank markers`).toBe(expected.correct.length);
      expect(exercise.template, `${id} markers`).not.toMatch(/_{4,}/);
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
      expect(exercise.wrongSentence, `${id} contains wrongWord`).toContain(expected.wrongWord);
      for (const option of exercise.options) {
        expect(evaluateExercise(exercise, option).isCorrect, `${id} ${option}`).toBe(
          option === expected.correctWord,
        );
      }
    }
  });

  it("corrects only the preposition, never the case or the verb", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      const fixed = exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord);
      expect(fixed, `${id} الجملة تتغيّر`).not.toBe(exercise.wrongSentence);
      expect(fixed.split(/\s+/).length, `${id} نفس عدد الكلمات`).toBe(exercise.wrongSentence.split(/\s+/).length);
      expect(expected.wrongWord, `${id} كلمة واحدة`).toMatch(/^[A-Za-zäöüß]+$/);
    }
    const e5 = task("e5");
    const e9 = task("e9");
    const m4 = task("m4");
    for (const [exercise, expectedFix] of [
      [e5, "Ich interessiere mich für Musik."],
      [e9, "Ich freue mich auf den Urlaub."],
      [m4, "Ich warte auf dich."],
    ] as const) {
      if (exercise.type !== "error-correction") throw new Error(`${exercise.id} is not error-correction`);
      expect(exercise.wrongSentence.replace(exercise.wrongWord, exercise.correctWord), exercise.id).toBe(expectedFix);
    }
  });

  it("keeps the fixed-preposition table consistent with the exercises", () => {
    const e3 = task("e3");
    if (e3.type !== "matching") throw new Error("e3 is not matching");
    for (const pair of e3.pairs) {
      expect(prepositionOf[pair.left], `الفعل ${pair.left} غير معروف`).toBe(pair.right);
    }
    const e1 = task("e1");
    const e2 = task("e2");
    const m1 = task("m1");
    const m2 = task("m2");
    const keys = [e1, e2, m1, m2].map((exercise) => {
      if (exercise.type !== "multiple-choice") throw new Error(`${exercise.id} is not multiple-choice`);
      return exercise.options[exercise.correctIndex];
    });
    expect(keys, "مفاتيح حروف الجر").toEqual(["für", "auf", "für", "von"]);
    expect(new Set(keys).size, "تنويع الحروف").toBeGreaterThan(1);
  });

  it("keeps the pronominal adverb pair (wo- question, da- answer) aligned", () => {
    const e12 = task("e12");
    if (e12.type !== "fill-blank") throw new Error("e12 is not fill-blank");
    const [answer, questionAnswer] = e12.blanks;
    expect(answer.correct, "الجواب يأخذ da-").toMatch(/^[Dd]a(r|ran|für|von|mit|bei)/);
    expect(questionAnswer.correct, "الربط يأخذ da-").toMatch(/^Da/);
    expect(answer.options, "wo- في المشتّتات").toContain("worauf");
    const e7 = task("e7");
    if (e7.type !== "transformation") throw new Error("e7 is not transformation");
    for (const accepted of e7.acceptedAnswers ?? []) {
      expect(accepted, "الجواب المرتبط").toMatch(/daran/);
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
      expect(evaluateExercise(exercise, "لا إجابة صحيحة").isCorrect, `${id} مفتوح`).toBe(false);
    }
  });

  it("keeps every word-ordering item solvable with exactly the tokens of its sentence", () => {
    for (const [id, expected] of Object.entries(expectedWordOrder)) {
      const exercise = task(id);
      if (exercise.type !== "word-ordering") throw new Error(`${id} is not word-ordering`);
      expect(exercise.tokens, `${id} tokens`).toEqual(expected.tokens);
      expect(exercise.correctSentence, `${id} sentence`).toBe(expected.correctSentence);
      const fromSentence = expected.correctSentence.match(/[^\s,.]+|[,.]/g) ?? [];
      expect([...exercise.tokens].sort(), `${id} مجمّع التوكنات`).toEqual([...fromSentence].sort());
      expect(evaluateExercise(exercise, fromSentence).isCorrect, `${id} بالترتيب`).toBe(true);
      expect(evaluateExercise(exercise, [...fromSentence].reverse()).isCorrect, `${id} معكوس`).toBe(false);
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
        evaluateExercise(exercise, [
          { ...first, right: second.right },
          { ...second, right: first.right },
          ...rest,
        ]).isCorrect,
        `${id} مبادل`,
      ).toBe(false);
    }
  });

  it("keeps dictation inside the fixed-preposition register the lesson teaches", () => {
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText).toBe("Die Kommunikation hängt von der Sprache ab.");
    expect(e10.audioText, "أداة abhängen von").toMatch(/hängt von .+ ab/);
    expect(e10.errorType).toBe("spelling");

    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText).toBe("Ich freue mich auf den Besuch.");
    expect(w3.audioText, "sich freuen auf").toMatch(/freue mich auf/);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB208.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB208.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB208.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB208.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps both theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB208.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB208.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      expect(block.whyAr?.trim().length ?? 0, `${block.id} whyAr`).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic?.trim().length ?? 0, `${block.id} مقارنة`).toBeGreaterThanOrEqual(250);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB208.theory);
    for (const marker of ["sich interessieren", "warten auf", "träumen von", "sich kümmern um", "sich freuen auf", "sich freuen über", "Worauf", "Darauf", "doch", "eben"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB208.flashcards;
    expect(cards.length).toBeGreaterThanOrEqual(12);
    const seen = new Set<string>();
    for (const card of cards) {
      expect(seen.has(card.de.toLowerCase()), `بطاقة مكرّرة «${card.de}»`).toBe(false);
      seen.add(card.de.toLowerCase());
      expect(card.ar.trim().length, `${card.id} معنى`).toBeGreaterThan(1);
      expect((card.example ?? "").trim().length, `${card.id} مثال`).toBeGreaterThan(5);
      expect(card.level, `${card.id} level`).toBe("B2");
    }
    const corpus = JSON.stringify([
      lessonB208.reading?.paragraphs,
      lessonB208.reading?.glossary,
      lessonB208.theory,
      lessonB208.practiceBank,
      lessonB208.miniTest,
      lessonB208.writing,
      lessonB208.listening,
    ]).toLowerCase();
    for (const card of cards) {
      const words = card.de
        .replace(/^(der|die|das|sich)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLowerCase());
      const anchored = words.length
        ? words.some((word) => corpus.includes(word.slice(0, Math.max(4, word.length - 3))))
        : true;
      expect(anchored, `بطاقة بلا مرساة ${card.de}`).toBe(true);
    }
  });

  it("keeps the reading text, glossary, comprehension questions, and discourse anchors intact", () => {
    const reading = lessonB208.reading;
    expect(reading?.id).toBe("read-b2-08");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Zwei Semester, die alles verändert haben");
    expect(reading?.titleAr).toBe("فصلان دراسيان غيّرا كل شيء");
    expect(reading?.paragraphs).toHaveLength(6);
    expect(reading?.paragraphsAr).toHaveLength(6);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    expect(text.split(/\s+/).filter(Boolean).length, "كلمات القراءة").toBeGreaterThanOrEqual(320);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const words = item.de
        .replace(/^(der|die|das|sich)\s+/i, "")
        .split(/[^A-Za-zäöüßÄÖÜ]+/)
        .filter((word) => word.length >= 4)
        .map((word) => word.toLowerCase());
      const found = words.some((word) => text.includes(word.slice(0, Math.max(4, word.length - 3))));
      expect(found, `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
      expect(item.noteAr?.trim().length ?? 0, `${item.de} ملاحظة`).toBeGreaterThan(5);
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

    for (const anchor of [
      "als lena sich für einen austausch in tunis bewarb, interessierte sie sich vor allem für die sprache",
      "sie wollte arabisch lernen und warten nicht, bis ein kurs",
      "frag doch einfach mal nach, die leute hier freuen sich über fragen",
      "erst als sie selbst etwas kochte und dazu einlud",
      "über die wochen gewöhnte sie sich an rhythmen",
      "sie erinnerte sich an das, was ihre großmutter über geduld gesagt hatte",
      "und sie ärgerte sich darüber",
      "wovon das nachdenken über eine fremde ordnung abhängt, lehrt niemand",
      "sie fragte nach dingen, die man in deutschland nicht fragt",
      "worauf wartest du in deinem leben",
      "das ist ja interessant, aber wer fragt denn eigentlich die seite, die hier fehlt",
      "sie merkte, dass sie sich an eine regel gewöhnen musste",
      "sie freut sich über jede antwort",
      "heute arbeitet lena in einem übersetzungsbüro",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["sich kümmern", "abhängen", "gewöhnen", "interessieren", "worauf", "darauf", "respekt", "reibung"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB208.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Es tut mir leid. In meiner Kultur ist zehn Minuten Verspätung normal. Ich wusste nicht, dass es hier so streng ist. Ich werde mich anpassen.",
      "Ich verspreche, ab jetzt fünf Minuten früher zu kommen. Vielleicht könnt ihr mir bei dringenden Fällen etwas Toleranz geben.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB208.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-08-1");
    expect(mediation?.type).toBe("relay-instructions");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(50);
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-08");
    expect(meta?.titleAr).toBe(lessonB208.titleAr);
    expect(meta?.titleDe).toBe(lessonB208.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z4"), lessonB208.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB208.id, [goalEvent("z4", "w1")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB208.id, [goalEvent("z4", "w1"), goalEvent("z4", "w2")]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB208.id, [goalEvent("z4", "w1"), goalEvent("z4", "w2", false)]),
    ).toBe("pending");
  });
});
