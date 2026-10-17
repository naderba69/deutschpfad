import { describe, expect, it } from "vitest";

import { lessonB202 } from "@/data/lessons/b2/b2-02";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["wird", "wurde", "ist", "war"], key: "wird" },
  r2: { options: ["wurde", "wird", "ist", "war"], key: "wurde" },
  e1: { options: ["ist", "wird", "kann", "wurde"], key: "ist" },
  e2: { options: ["kann", "ist", "wird", "wurde"], key: "kann" },
  e8: { options: ["الدورة الاقتصادية", "الأسهم في البورصة", "المبيعات السنوية", "الاستثمار المباشر"], key: "الدورة الاقتصادية" },
  e14: { options: ["الانتعاش", "الركود", "التضخم", "الميزانية"], key: "الانتعاش" },
  m1: { options: ["ist", "wird", "hat", "wurde"], key: "ist" },
  m2: { options: ["sich", "mich", "dich", "uns"], key: "sich" },
  q1: { options: ["der Umsatz", "die Preise", "die Steuern", "die Löhne"], key: "der Umsatz" },
  q2: {
    options: ["das Problem der Inflation", "das Problem des Verkehrs", "das Problem der Schule", "das Problem des Wetters"],
    key: "das Problem der Inflation",
  },
  q3: { options: ["der Vertrag", "der Brief", "die Rechnung", "der Bericht"], key: "der Vertrag" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["kann"], options: [["kann", "könnte", "konnte"]] },
  e6: {
    correct: ["bar", "sich"],
    options: [
      ["bar", "lich", "sam"],
      ["sich", "mich", "dich"],
    ],
  },
  e13: {
    correct: ["ist", "sind"],
    options: [
      ["ist", "wird", "hat"],
      ["sind", "ist", "werden"],
    ],
  },
  m5: {
    correct: ["bar", "sich"],
    options: [
      ["bar", "lich", "sam"],
      ["sich", "mich", "dich"],
    ],
  },
  w2: {
    correct: ["ist", "wird", "kann"],
    options: [
      ["ist", "wird", "kann"],
      ["ist", "wird", "kann"],
      ["ist", "wird", "kann"],
    ],
  },
  w4: {
    correct: ["muss", "kann"],
    options: [
      ["muss", "kann", "könnte", "soll"],
      ["kann", "muss", "müsste", "darf"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "öffnen", correctWord: "geöffnet", options: ["geöffnet", "öffnen", "worden", "wird"] },
  e9: { wrongWord: "öffnenbar", correctWord: "öffenbar", options: ["öffenbar", "öffnenbar", "öffnbar", "geöffnetbar"] },
  e11: {
    wrongWord: "gesenkt",
    correctWord: "gesenkt werden",
    options: ["gesenkt werden", "gesenkt", "werden senken", "senken werden"],
  },
  m4: { wrongWord: "geöffnen", correctWord: "geöffnet", options: ["geöffnet", "geöffnen", "worden", "offen"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Wirtschaft", right: "الاقتصاد" },
    { left: "der Umsatz", right: "المبيعات" },
    { left: "die Inflation", right: "التضخم" },
    { left: "die Aktien", right: "الأسهم" },
  ],
};

const expectedTransformations: string[] = ["e7", "e12", "w1", "w3"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Das Problem lässt sich lösen", "Das Problem lässt sich lösen."],
  e12: [
    "Der Haushalt muss bis Dezember beschlossen werden",
    "Der Haushalt muss bis Dezember beschlossen werden.",
  ],
  w1: ["Die Tür ist geöffnet", "Die Tür ist geöffnet."],
  w3: ["Der Preis kann verhandelt werden."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: { tokens: ["ist", "Die", "Tür", "geöffnet", "."], correctSentence: "Die Tür ist geöffnet." },
  m3: {
    tokens: ["geliefert", "kann", "werden", "Die", "Ware", "."],
    correctSentence: "Die Ware kann geliefert werden.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB202.review ?? []),
    ...lessonB202.practiceBank,
    ...lessonB202.miniTest,
    ...lessonB202.writing,
    ...(lessonB202.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-02 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB202.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-02 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-02 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB202.id,
    taskId,
  };
}

describe("B2-02 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB202).toMatchObject({
      id: "b2-02",
      unitId: "b2-02",
      level: "B2",
      order: 1,
      titleDe: "Wirtschaft und Finanzen",
      titleAr: "الاقتصاد والمالية",
    });
    expect("duration" in lessonB202).toBe(false);
    expect(lessonB202.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-02");
    expect(meta).toMatchObject({ id: "b2-02", unitId: "b2-02", level: "B2", order: 1, estimatedMinutes: 65 });
    expect(meta?.summary).toBe(lessonB202.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB202.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e5", "w1", "w2", "m1", "m4"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e2", "e6", "e7", "e9", "w3", "w4", "m2", "m3", "m5"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e3", "e8"]);
    for (const item of lessonB202.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    const goalsText = JSON.stringify(lessonB202.lernziele);
    expect(goalsText).not.toMatch(/Goethe|CEFR/);
    expect(goalsText).not.toMatch(/عروض|Vortrag|Präsentation/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB202.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-02", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-02", "l2", "q3", false)).toBe("listening:l2:q3");
    expect(getListeningQuestionTaskId("b2-02", "l2", "q3", true)).toBe("listening-transcript:b2-02:l2:q3");
    expect(goal("z1").evidence?.taskIds).toEqual(["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"]);
    const transcriptIds = lessonB202.lernziele.flatMap(
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
    expect(byType("dictation"), "إملاء").toEqual(["e10"]);
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
    const e5 = task("e5");
    if (e5.type !== "error-correction") throw new Error("e5 is not error-correction");
    expect(e5.wrongSentence).toBe("Die Tür ist öffnen.");
  });

  it("keeps the modal-passive items demanding the full PII + werden block", () => {
    const e11 = task("e11");
    if (e11.type !== "error-correction") throw new Error("e11 is not error-correction");
    expect(e11.correctWord, "e11 يجب أن يضيف werden").toContain("werden");
    expect(e11.wrongSentence, "e11 ينقصه werden").not.toContain("werden");
    const e12 = task("e12");
    if (e12.type !== "transformation") throw new Error("e12 is not transformation");
    for (const answer of e12.acceptedAnswers ?? []) {
      expect(answer, `e12 ${answer}`).toMatch(/muss .+ werden/);
    }
    expect(evaluateExercise(e12, "Man muss den Haushalt bis Dezember beschließen.").isCorrect).toBe(false);
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

  it("keeps dictation audio in the passive perfect the lesson teaches", () => {
    const exercise = task("e10");
    if (exercise.type !== "dictation") throw new Error("e10 is not dictation");
    expect(exercise.audioText).toBe("Der Vertrag ist unterschrieben worden.");
    expect(exercise.audioText, "عملية منتهية + worden").toMatch(/worden/);
    expect(exercise.errorType).toBe("spelling");
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB202.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB202.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB202.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB202.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps the two theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB202.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB202.theory) {
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
    const theoryText = JSON.stringify(lessonB202.theory);
    for (const marker of ["wird geöffnet", "ist geöffnet", "lässt sich", "-bar", "ist zu lösen", "worden"]) {
      expect(theoryText, `علامة مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("does not present correct passive sentences as mistakes, and spells -bar adjectives per the dictionary", () => {
    const t1 = lessonB202.theory.find((block) => block.id === "t1");
    const wrongs = (t1?.commonMistakes ?? []).map((mistake) => mistake.wrong);
    expect(wrongs).not.toContain("Die Tür ist geöffnet worden. (عملية بدل حالة)");
    const { mediation: _mediation, ...rest } = lessonB202;
    const text = JSON.stringify(rest);
    expect(text).not.toMatch(/öffnbar(?!")/);
    expect(text).not.toMatch(/\d+\s*%|99%|رابع أكبر/);
    expect(text).not.toMatch(/Goethe|Prüfungsteil|نسبة النجاح|mock|امتحان B2/);
  });

  it("keeps the economic register honest in the mediation task", () => {
    const mediation = lessonB202.mediation?.[0];
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect(mediation?.sourceDe).toContain("2,5 Prozent");
    expect(mediation?.keyPointsAr?.length ?? 0).toBeGreaterThanOrEqual(3);
    const otherMediations = (lessonB202.mediation ?? []).slice(1).map((item) => item.type);
    expect(otherMediations).toEqual([]);
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB202.flashcards;
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
      lessonB202.reading?.paragraphs,
      lessonB202.reading?.glossary,
      lessonB202.theory,
      lessonB202.practiceBank,
      lessonB202.miniTest,
      lessonB202.writing,
      lessonB202.listening,
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
    const reading = lessonB202.reading;
    expect(reading?.id).toBe("read-b2-02");
    expect(reading?.textType).toBe("bericht");
    expect(reading?.titleDe).toBe("Ein vorsichtiger Herbst: Der Bericht der Notenbank");
    expect(reading?.titleAr).toBe("خريف حذر: تقرير البنك المركزي");
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
      "die konjunktur habe sich in den letzten monaten langsam erholt",
      "die zinsen sind seit dem frühjahr nicht verändert worden",
      "können im kommenden jahr gesenkt werden",
      "muss aber bis zum ende des jahres getroffen werden",
      "bei den investitionen lässt sich dagegen kein klares bild erkennen",
      "der haushalt soll im dezember verabschiedet werden",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading);
    for (const marker of ["worden", "lässt sich", "gefüllt", "überprüfbar", "Aufschwung", "Schulden"]) {
      expect(readingText, `بنية مفقودة في القراءة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best reply as one complete sentence", () => {
    const rounds = lessonB202.interaction?.[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Während die Globalisierung den Handel und den Austausch fördert, vergrößert sie gleichzeitig die Ungleichheit zwischen Ländern.",
      "Meiner Ansicht nach brauchen wir faire Handelsregeln und Investitionen in Bildung. Je mehr Chancengleichheit, desto gerechter die Globalisierung.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
      expect(round.options.every((option) => (option.de.match(/[.!?]$/) ?? []).length <= 1)).toBe(true);
    }
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-02");
    expect(meta?.titleAr).toBe(lessonB202.titleAr);
    expect(meta?.titleDe).toBe(lessonB202.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z2"), lessonB202.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z2"), lessonB202.id, [goalEvent("z2", "e1")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB202.id, [
        goalEvent("z2", "e1"),
        goalEvent("z2", "e5"),
        goalEvent("z2", "w1"),
        goalEvent("z2", "w2"),
        goalEvent("z2", "m1"),
        goalEvent("z2", "m4"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z2"), lessonB202.id, [
        goalEvent("z2", "e1"),
        goalEvent("z2", "e5"),
        goalEvent("z2", "w1"),
        goalEvent("z2", "w2"),
        goalEvent("z2", "m1"),
        goalEvent("z2", "m4", false),
      ]),
    ).toBe("pending");
  });
});
