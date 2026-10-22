import { describe, expect, it } from "vitest";

import { lessonB203 } from "@/data/lessons/b2/b2-03";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["der", "den", "dem", "dessen"], key: "der" },
  r2: { options: ["das", "der", "die", "dem"], key: "das" },
  e1: { options: ["auf den", "den auf", "auf dem", "auf der"], key: "auf den" },
  e2: { options: ["was", "das", "wo", "der"], key: "was" },
  e8: { options: ["الشاهد", "المحامي", "القاضي", "المتهم"], key: "الشاهد" },
  e14: { options: ["شرط في عقد", "مهلة قانونية", "مستند رسمي", "حكم قضائي"], key: "شرط في عقد" },
  m1: { options: ["mit dem", "mit den", "auf den", "über den"], key: "mit dem" },
  m2: { options: ["wo", "was", "womit", "wofür"], key: "wo" },
  q1: { options: ["die Kündigungsfrist", "den Preis", "die Lieferung", "die Unterschrift"], key: "die Kündigungsfrist" },
  q2: { options: ["der Zeuge", "der Anwalt", "der Richter", "die Polizei"], key: "der Zeuge" },
  q3: { options: ["dem Gericht", "dem Parlament", "dem Rathaus", "dem Verein"], key: "dem Gericht" },
  q4: { options: ["Der Händler muss die Versandkosten übernehmen", "Noor muss die Versandkosten selbst übernehmen", "Die Bank muss die Versandkosten übernehmen", "Der Hersteller trägt alle Gerichtskosten"], key: "Der Händler muss die Versandkosten übernehmen" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["wird"], options: [["wird", "ist", "hat"]] },
  e6: {
    correct: ["wo", "was", "wofür"],
    options: [
      ["wo", "was", "wofür"],
      ["wo", "was", "wofür"],
      ["wo", "was", "wofür"],
    ],
  },
  e13: {
    correct: ["ist", "lässt"],
    options: [
      ["ist", "wird", "hat"],
      ["lässt", "wird", "hat"],
    ],
  },
  m5: {
    correct: ["wofür", "wo"],
    options: [
      ["wofür", "wo", "was"],
      ["wofür", "wo", "was"],
    ],
  },
  w2: {
    correct: ["was", "wo", "auf den", "mit dem"],
    options: [
      ["was", "wo", "auf den"],
      ["was", "wo", "mit dem"],
      ["was", "wo", "auf den"],
      ["was", "wo", "mit dem"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: {
    wrongWord: "den ich warte auf",
    correctWord: "auf den ich warte",
    options: ["auf den ich warte", "den ich warte auf", "auf dem ich warte", "ich auf den warte"],
  },
  e9: { wrongWord: "das", correctWord: "was", options: ["was", "das", "wo", "der"] },
  e11: {
    wrongWord: "das sich alle halten müssen",
    correctWord: "an das sich alle halten müssen",
    options: [
      "an das sich alle halten müssen",
      "das sich alle halten müssen",
      "an dem sich alle halten müssen",
      "das alle sich halten an",
    ],
  },
  m4: {
    wrongWord: "das ich denke an",
    correctWord: "an das ich denke",
    options: ["an das ich denke", "das ich denke an", "an dem ich denke", "ich an das denke"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "das Recht", right: "الحق/القانون" },
    { left: "das Gesetz", right: "القانون" },
    { left: "der Vertrag", right: "العقد" },
    { left: "das Gericht", right: "المحكمة" },
  ],
};

const expectedTransformations: string[] = ["e7", "e12", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Das Land, wo ich lebe", "Das Land, wo ich lebe."],
  e12: ["Das Gesetz, auf das ich mich berufe", "Das Gesetz, auf das ich mich berufe."],
  w1: ["Der Mann, auf den ich warte", "Der Mann, auf den ich warte."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Der", "Mann", ",", "auf", "den", "ich", "warte", ",", "ist", "mein", "Anwalt", "."],
    correctSentence: "Der Mann, auf den ich warte, ist mein Anwalt.",
  },
  m3: {
    tokens: ["Alles", ",", "was", "du", "sagst", ",", "ist", "wichtig", "."],
    correctSentence: "Alles, was du sagst, ist wichtig.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB203.review ?? []),
    ...lessonB203.practiceBank,
    ...lessonB203.miniTest,
    ...lessonB203.writing,
    ...(lessonB203.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-03 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB203.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-03 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-03 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB203.id,
    taskId,
  };
}

describe("B2-03 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB203).toMatchObject({
      id: "b2-03",
      unitId: "b2-03",
      level: "B2",
      order: 1,
      titleDe: "Recht und Alltag",
      titleAr: "القانون والحياة اليومية",
    });
    expect("duration" in lessonB203).toBe(false);
    expect(lessonB203.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-03");
    expect(meta).toMatchObject({ id: "b2-03", unitId: "b2-03", level: "B2", order: 1, estimatedMinutes: 55 });
    expect(meta?.summary).toBe(lessonB203.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB203.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e4", "e5", "m1", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e2", "e7", "e9", "m2", "m3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e3", "e8"]);
    for (const item of lessonB203.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    const goalsText = JSON.stringify(lessonB203.lernziele);
    expect(goalsText).not.toMatch(/Goethe|CEFR/);
    expect(goalsText).not.toMatch(/عروض|Vortrag|Präsentation/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB203.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-03", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-03", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-03", "l2", "q3", true)).toBe("listening-transcript:b2-03:l2:q3");
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l3:q4"]);
    const transcriptIds = lessonB203.lernziele.flatMap(
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
    expect(
      byType("error-correction").filter((id) => id in expectedErrorCorrections),
      "تصحيحات مغطّاة",
    ).toEqual(byType("error-correction"));
    expect(byType("matching").filter((id) => id in expectedMatching), "مطابقات مغطّاة").toEqual(
      byType("matching"),
    );
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

  it("makes every error-correction sentence genuinely wrong and its fix a real change", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      const fixed = exercise.wrongSentence.replace(expected.wrongWord, expected.correctWord);
      expect(fixed, `${id} الجملة لم تتغيّر`).not.toBe(exercise.wrongSentence);
      expect(evaluateExercise(exercise, expected.wrongWord).isCorrect, `${id} يقبل الخطأ`).toBe(false);
    }
  });

  it("keeps every prepositional relative clause with the preposition before the pronoun", () => {
    for (const id of ["e5", "e11", "m4"]) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      expect(exercise.correctWord, `${id} حرف الجر`).toMatch(/^(auf|an|mit|über|für)\s/);
      expect(exercise.wrongSentence.endsWith(exercise.wrongWord), `${id} الخطأ في النهاية`).toBe(false);
    }
    for (const id of ["e1", "m1"]) {
      const exercise = task(id);
      if (exercise.type !== "multiple-choice") throw new Error(`${id} is not multiple-choice`);
      expect(exercise.options[exercise.correctIndex], `${id} key`).toMatch(
        /^(auf|an|mit|über|für)\s+(den|dem|das|der|die)$/,
      );
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

  it("keeps dictation sentences carrying the lesson's structures", () => {
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText).toBe("Ich weiß nicht, wofür er sich interessiert.");
    expect(e10.audioText, "ظرف حرفي").toMatch(/wofür/);
    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText, "نسبية مكانية").toMatch(/wo /);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB203.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB203.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB203.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB203.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps the two theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB203.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB203.theory) {
      expect(block.examples.length, `${block.id} examples`).toBeGreaterThanOrEqual(6);
      expect(block.commonMistakes.length, `${block.id} mistakes`).toBeGreaterThanOrEqual(3);
      expect(block.relatedRuleComparison?.title.trim().length, `${block.id} related rule`).toBeGreaterThan(3);
      expect(block.relatedRuleComparison?.content.trim().length, `${block.id} related content`).toBeGreaterThan(60);
      expect(block.explanationAr.length, `${block.id} explanation`).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length, `${block.id} explanation سقف`).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split("\n\n").length, `${block.id} paragraphs`).toBeGreaterThanOrEqual(2);
      for (const mistake of block.commonMistakes) {
        expect(mistake.whyAr.trim().length, `${block.id} ${mistake.wrong}`).toBeGreaterThanOrEqual(60);
      }
    }
    const theoryText = JSON.stringify(lessonB203.theory);
    for (const marker of ["auf den", "mit dem", "wofür", "was", "wo", "lässt sich", "ist zu", "-bar"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("removes the cross-reference to a lesson that does not teach prepositional verbs, and exam claims", () => {
    const text = JSON.stringify(lessonB203);
    expect(text).not.toContain("درس b1-09");
    expect(text).not.toMatch(/اختبار B2|اختبار الB2|جوهر اختبار/);
    expect(text).not.toMatch(/\d+\s*%/);
    expect(text).not.toContain("Ruhezeiten sind gesetzlich geschützt");
    expect(text).not.toMatch(/Goethe|Prüfungsteil|نسبة النجاح|mock/);
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB203.flashcards;
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
      lessonB203.reading?.paragraphs,
      lessonB203.reading?.glossary,
      lessonB203.theory,
      lessonB203.practiceBank,
      lessonB203.miniTest,
      lessonB203.writing,
      lessonB203.listening,
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
    const reading = lessonB203.reading;
    expect(reading?.id).toBe("read-b2-03");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Der Streit um die Nebenkosten");
    expect(reading?.titleAr).toBe("النزاع حول التكاليف الإضافية");
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
      "der streit dreht sich um die nebenkosten",
      "eine klausel, mit der die jährliche abrechnung geregelt wird",
      "alles, was der vertrag nicht ausdrücklich nennt",
      "das gericht, vor dem der fall verhandelt wird",
      "die regelung lasse sich in der praxis kaum überprüfen",
      "das gesetz, an das sich alle halten müssten",
      "ein urteil wird im herbst erwartet",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading);
    for (const marker of ["wo solche", "wofür", "überprüfbar", "ist zu", "lässt sich", "Nebenkosten"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best reply as one complete sentence", () => {
    const rounds = lessonB203.interaction?.[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.length).toBeGreaterThanOrEqual(2);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      const best = round.options.find((option) => option.best)?.de ?? "";
      expect(best.length, "جملة قصيرة جداً").toBeGreaterThan(40);
    }
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-03");
    expect(meta?.titleAr).toBe(lessonB203.titleAr);
    expect(meta?.titleDe).toBe(lessonB203.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z3"), lessonB203.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z3"), lessonB203.id, [goalEvent("z3", "e2")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB203.id, [
        goalEvent("z3", "e2"),
        goalEvent("z3", "e7"),
        goalEvent("z3", "e9"),
        goalEvent("z3", "m2"),
        goalEvent("z3", "m3"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z3"), lessonB203.id, [
        goalEvent("z3", "e2"),
        goalEvent("z3", "e7"),
        goalEvent("z3", "e9", false),
        goalEvent("z3", "m2"),
        goalEvent("z3", "m3"),
      ]),
    ).toBe("pending");
  });
});
