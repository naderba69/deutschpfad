import { describe, expect, it } from "vitest";

import { lessonB206 } from "@/data/lessons/b2/b2-06";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["studieren", "studiere", "studiert", "studiert haben"], key: "studieren" },
  r2: { options: ["treffen", "stellen", "sagen", "machen"], key: "treffen" },
  e1: { options: ["Verbesserung", "Verbessern", "Besserung", "Verbesser"], key: "Verbesserung" },
  e2: { options: ["Beim Lesen lernt man.", "Man liest und lernt.", "Das Lesen man lernt.", "Lesen ist lernen."], key: "Beim Lesen lernt man." },
  e8: { options: ["التعاون", "الاجتماع", "الشراكة", "العمل المشترك فقط"], key: "التعاون" },
  "e13-konn": {
    options: ["erhöhte die Firma die Preise", "die Firma erhöhte die Preise", "die Firma die Preise erhöhte", "erhöhte die Preise die Firma zu"],
    key: "erhöhte die Firma die Preise",
  },
  m1: { options: ["Verhandlung", "Verhandeln", "Handlung", "Verhandelt"], key: "Verhandlung" },
  m2: { options: ["Beim Schreiben übt man.", "Man schreibt und übt.", "Das Schreiben man übt.", "Schreiben ist üben."], key: "Beim Schreiben übt man." },
  q1: { options: ["die Verbesserung der Qualifikationen", "die Entscheidung", "die Bewerbung", "die Arbeit"], key: "die Verbesserung der Qualifikationen" },
  q2: { options: ["nach der Probezeit", "sofort", "nie", "im nächsten Jahr"], key: "nach der Probezeit" },
  q3: { options: ["die Flexibilität", "das Büro", "die Kollegen", "der Urlaub"], key: "die Flexibilität" },
  q4: {
    options: ["die Trennung von Arbeit und Freizeit", "das Sparen von Zeit", "die Videokonferenzen am Morgen", "die Gleitzeit"],
    key: "die Trennung von Arbeit und Freizeit",
  },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["hätte"], options: [["hätte", "habe", "hatte"]] },
  e6: {
    correct: ["Nachdenken", "Verbesserung", "Schreiben"],
    options: [
      ["Nachdenken", "Nachdenk", "Denken"],
      ["Verbesserung", "Verbessern", "Besserung"],
      ["Schreiben", "Schreiber", "Schreibung"],
    ],
  },
  e11: {
    correct: ["von", "flexible"],
    options: [
      ["von", "aus", "mit", "bei"],
      ["flexible", "flexiblen", "flexibles", "flexibler"],
    ],
  },
  "e14-konn": {
    correct: ["Da", "denn", "dass"],
    options: [
      ["Da", "Denn", "Deshalb"],
      ["denn", "und", "deshalb"],
      ["dass", "denn", "deshalb"],
    ],
  },
  m5: {
    correct: ["Verbesserung", "Lesen", "Arbeit"],
    options: [
      ["Verbesserung", "Verbessern", "Besserung"],
      ["Lesen", "Leser", "Lesung"],
      ["Arbeit", "Arbeiten", "Arbeiter"],
    ],
  },
  w2: {
    correct: ["Verbesserung", "Arbeit", "Schreiben"],
    options: [
      ["Verbesserung", "Verbesser", "Besserung"],
      ["Arbeit", "Arbeiten", "Arbeiter"],
      ["Schreiben", "Schreiber", "Schreibung"],
    ],
  },
  w4: {
    correct: ["Arbeiten", "Konzentration"],
    options: [
      ["Arbeiten", "Arbeit", "Arbeiter"],
      ["Konzentration", "Konzentrieren", "Konzentrat"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "lesen", correctWord: "Lesen", options: ["Lesen", "lesen", "Lesens", "lesens"] },
  e9: {
    wrongWord: "des Bedingungen",
    correctWord: "der Bedingungen",
    options: ["der Bedingungen", "des Bedingungen", "die Bedingungen", "den Bedingungen"],
  },
  "e15-konn": {
    wrongWord: "ich bleibe",
    correctWord: "bleibe ich",
    options: ["bleibe ich", "ich bleibe", "ich bin bleiben", "bleiben ich"],
  },
  m4: { wrongWord: "arbeiten", correctWord: "Arbeiten", options: ["Arbeiten", "arbeiten", "Arbeitens", "gearbeitet"] },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Karriere", right: "المسار المهني" },
    { left: "die Führungskraft", right: "القائد" },
    { left: "verhandeln", right: "يتفاوض" },
    { left: "die Probezeit", right: "فترة التجربة" },
  ],
};

const expectedTransformations: string[] = ["e7", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["Durch die Verbesserung der Situation arbeiten wir besser.", "Durch die Verbesserung der Situation arbeiten wir besser"],
  w1: ["das Lesen", "das Lesen."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: { tokens: ["Beim", "lernt", "Lesen", "man", "."], correctSentence: "Beim Lesen lernt man." },
  e12: { tokens: ["Im", "Homeoffice", "spart", "man", "viel", "Zeit", "."], correctSentence: "Im Homeoffice spart man viel Zeit." },
  "e16-konn": {
    tokens: ["Da", "die", "Kosten", "steigen", ",", "müssen", "wir", "sparen", "."],
    correctSentence: "Da die Kosten steigen, müssen wir sparen.",
  },
  m3: { tokens: ["Nachdenken", "braucht", "man", "Zum", "Ruhe", "."], correctSentence: "Zum Nachdenken braucht man Ruhe." },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB206.review ?? []),
    ...lessonB206.practiceBank,
    ...lessonB206.miniTest,
    ...lessonB206.writing,
    ...(lessonB206.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-06 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB206.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-06 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-06 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB206.id,
    taskId,
  };
}

describe("B2-06 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB206).toMatchObject({
      id: "b2-06",
      unitId: "b2-06",
      level: "B2",
      order: 1,
      titleDe: "Beruf und Karriere",
      titleAr: "المسار المهني",
    });
    expect("duration" in lessonB206).toBe(false);
    expect(lessonB206.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-06");
    expect(meta).toMatchObject({ id: "b2-06", unitId: "b2-06", level: "B2", order: 1, estimatedMinutes: 75 });
    expect(meta?.summary).toBe(lessonB206.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB206.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e5", "e6", "m5", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e2", "e4", "m2", "m3", "w3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e11", "e12", "w4"]);
    expect(goal("z5").evidence?.exerciseIds).toEqual(["e13-konn", "e14-konn", "e15-konn", "e16-konn"]);
    for (const item of lessonB206.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB206.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB206.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-06", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-06", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-06", "l3", "q4", true)).toBe("listening-transcript:b2-06:l3:q4");
    const transcriptIds = lessonB206.lernziele.flatMap(
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

  it("corrects the nominalisation mistakes in the direction the lesson teaches", () => {
    const e5 = task("e5");
    const m4 = task("m4");
    for (const exercise of [e5, m4]) {
      if (exercise.type !== "error-correction") throw new Error(`${exercise.id} is not error-correction`);
      expect(exercise.correctWord, `${exercise.id} اسم بحرف كبير`).toMatch(/^[A-ZÄÖÜ]/);
      expect(exercise.correctWord.toLowerCase(), `${exercise.id} نفس الكلمة`).toBe(exercise.wrongWord.toLowerCase());
      expect(exercise.wrongSentence, `${exercise.id} بعد حرف الجر`).toMatch(/Beim [a-zäöü]/);
    }
    const e9 = task("e9");
    if (e9.type !== "error-correction") throw new Error("e9 is not error-correction");
    expect(e9.wrongWord.split(" ")[0], "المضاف إليه: des خطأ").toBe("des");
    expect(e9.correctWord.split(" ")[0], "المضاف إليه الصحيح: der").toBe("der");
  });

  it("keeps the connector bank inside the causal/consecutive set and never double-marks", () => {
    const e14 = task("e14-konn");
    if (e14.type !== "fill-blank") throw new Error("e14-konn is not fill-blank");
    expect(e14.blanks.map(({ correct }) => correct), "سبب · متساوٍ · نتيجة").toEqual(["Da", "denn", "dass"]);
    const e15 = task("e15-konn");
    if (e15.type !== "error-correction") throw new Error("e15-konn is not error-correction");
    const fixed = e15.wrongSentence.replace(e15.wrongWord, e15.correctWord);
    expect(fixed, "النتيجة بعد deshalb: الفعل ثانياً").toBe("Es regnet, deshalb bleibe ich zu Hause.");
    expect(e15.correctWord).toMatch(/^bleibe\s/);
    expect(fixed, "لا جمع بين سبب ونتيجة").not.toMatch(/weil|da /i);
    const e16 = task("e16-konn");
    if (e16.type !== "word-ordering") throw new Error("e16-konn is not word-ordering");
    expect(e16.tokens.slice(0, 2), "da تفتح الجملة الثانوية").toEqual(["Da", "die"]);
    expect(e16.tokens[e16.tokens.indexOf(",") + 1], "الفعل الرئيسي بعد الفاصلة").toBe("müssen");
  });

  it("checks the accepted answers of every transformation", () => {
    for (const [id, accepted] of Object.entries(expectedTransformationAnswers)) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      expect(exercise.acceptedAnswers, `${id} accepted`).toEqual(accepted);
      for (const answer of accepted) {
        expect(evaluateExercise(exercise, answer).isCorrect, `${id}: ${answer}`).toBe(true);
      }
      expect(evaluateExercise(exercise, "משהו אחר לגמרי").isCorrect, `${id} مفتوح`).toBe(false);
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

  it("keeps dictation inside the nominalisation the lesson teaches", () => {
    const e10 = task("e10");
    if (e10.type !== "dictation") throw new Error("e10 is not dictation");
    expect(e10.audioText).toBe("Die Entscheidung für einen Beruf ist schwer.");
    expect(e10.audioText, "اسم مشتقّ").toMatch(/Entscheidung/);
    expect(e10.errorType).toBe("spelling");

    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText).toBe("Beim Lesen erweitert man den Wortschatz.");
    expect(w3.audioText, "beim + مصدر").toMatch(/^Beim \w+/);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB206.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB206.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB206.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB206.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps both theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB206.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB206.theory) {
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
    const theoryText = JSON.stringify(lessonB206.theory);
    for (const marker of ["beim Lesen", "zum Nachdenken", "die Verbesserung", "weil", "da", "denn", "deshalb", "sodass", "zumal"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB206.flashcards;
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
      lessonB206.reading?.paragraphs,
      lessonB206.reading?.glossary,
      lessonB206.theory,
      lessonB206.practiceBank,
      lessonB206.miniTest,
      lessonB206.writing,
      lessonB206.listening,
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
    const reading = lessonB206.reading;
    expect(reading?.id).toBe("read-b2-06");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Der Weg zur Stelle, die wirklich passt");
    expect(reading?.titleAr).toBe("الطريق إلى الوظيفة التي تناسب فعلاً");
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
      "beim bewerben entscheiden oft nur dreißig sekunden",
      "da die zahl der bewerbungen steigt",
      "was darin steht, wird inzwischen von einer software geprüft",
      "deshalb bereiten sich erfolgreiche bewerber",
      "beim wechsel in ein neues team",
      "zumal die regeln oft nirgends geschrieben stehen",
      "eine gründliche einarbeitung die übernahme erleichtert",
      "homeoffice und gleitzeit haben die bedingungen verändert",
      "sodass die arbeitszeit zweitrangig erscheint",
      "wer immer erreichbar ist, hat nie feierabend",
      "die erreichbarkeit muss begrenzt werden, denn ohne klare grenzen",
      "zumal in kleinen firmen können diese regeln nur gemeinsam ausgehandelt werden",
      "deshalb gehört zum nachdenken über die karriere",
      "so entsteht aus einer stelle",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["beim bewerben", "das anschreiben", "einarbeitung", "zumal", "denn", "deshalb", "sodass", "die übernahme"]) {
      expect(readingText, `رابط متقدّم مفقود: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB206.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Meiner Ansicht nach profitieren sowohl Arbeitnehmer als auch Arbeitgeber. Während die Mitarbeiter mehr Flexibilität gewinnen, steigt oft auch die Motivation und damit die Produktivität.",
      "Man könnte Kernzeiten festlegen, in denen alle erreichbar sind, und den Rest flexibel gestalten. So bleibt beides gewährleistet.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB206.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-06-1");
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-06");
    expect(meta?.titleAr).toBe(lessonB206.titleAr);
    expect(meta?.titleDe).toBe(lessonB206.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z4"), lessonB206.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB206.id, [goalEvent("z4", "e11")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB206.id, [
        goalEvent("z4", "e11"),
        goalEvent("z4", "e12"),
        goalEvent("z4", "w4"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB206.id, [
        goalEvent("z4", "e11"),
        goalEvent("z4", "e12"),
        goalEvent("z4", "w4", false),
      ]),
    ).toBe("pending");
  });
});
