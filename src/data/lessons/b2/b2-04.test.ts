import { describe, expect, it } from "vitest";

import { lessonB204 } from "@/data/lessons/b2/b2-04";
import { LESSON_META } from "@/data/lessons/meta";
import { evaluateExercise } from "@/lib/lesson/exercise-engine";
import { getGoalEvidenceStatus } from "@/lib/lesson/goal-evidence";
import { getListeningQuestionTaskId } from "@/lib/lesson/listening-evidence";
import type { AnalyticsEvent } from "@/types/analytics";
import type { Exercise } from "@/types/lesson";

const lessonMetaList = LESSON_META;

const expectedMultipleChoice: Record<string, { options: string[]; key: string }> = {
  r1: { options: ["gutes", "gute", "guten", "guter"], key: "gutes" },
  r2: { options: ["der", "den", "dem", "dessen"], key: "der" },
  e1: { options: ["spielende", "gespielte", "spielend", "spielt"], key: "spielende" },
  e2: { options: ["geschriebene", "schreibende", "geschrieben", "schreibt"], key: "geschriebene" },
  e8: { options: ["المقال", "الكتاب", "المجلة", "الخبر"], key: "المقال" },
  e14: { options: ["نفدت نسخه من السوق", "مترجماً إلى لغة أخرى", "مختصراً في صفحات قليلة", "ممنوعاً من البيع"], key: "نفدت نسخه من السوق" },
  m1: { options: ["lesende", "gelesene", "lesend", "liest"], key: "lesende" },
  m2: { options: ["übersetzte", "übersetzende", "übersetzt", "übersetzen"], key: "übersetzte" },
  q1: { options: ["fertig", "lang", "kurz", "schlecht"], key: "fertig" },
  q2: { options: ["seine Herkunft", "seinen Beruf", "seinen Freund", "seine Stadt"], key: "seine Herkunft" },
  q3: { options: ["sehr emotional", "sehr langweilig", "sehr kurz", "sehr lustig"], key: "sehr emotional" },
  q4: { options: ["drei Jahre", "drei Monate", "ein Jahr", "fünf Jahre"], key: "drei Jahre" },
  q5: { options: ["Am Donnerstag um 18 Uhr", "Am Mittwoch um 18 Uhr", "Am Donnerstag um 16 Uhr", "Am Freitag um 20 Uhr"], key: "Am Donnerstag um 18 Uhr" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["gelesen"], options: [["gelesen", "gelest", "lesen"]] },
  e6: {
    correct: ["kochende", "gekochte"],
    options: [
      ["kochende", "gekochte"],
      ["kochende", "gekochte"],
    ],
  },
  e13: {
    correct: ["zu treffende", "zu lösende"],
    options: [
      ["zu treffende", "treffende", "getroffene"],
      ["zu lösende", "lösende", "gelöste"],
    ],
  },
  m5: {
    correct: ["weinende", "verlorene"],
    options: [
      ["weinende", "geweinte"],
      ["verlierende", "verlorene"],
    ],
  },
  w2: {
    correct: ["spielende", "geschriebene", "lesende", "geöffnete"],
    options: [
      ["spielende", "gespielte"],
      ["schreibende", "geschriebene"],
      ["lesende", "gelesene"],
      ["öffnende", "geöffnete"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e5: { wrongWord: "spielend", correctWord: "spielende", options: ["spielende", "spielend", "gespielte", "spielt"] },
  e9: { wrongWord: "lesend", correctWord: "lesende", options: ["lesende", "lesend", "gelesene", "liest"] },
  e11: {
    wrongWord: "gelesen Autor",
    correctWord: "gelesene Autor",
    options: ["gelesene Autor", "gelesen Autor", "gelesende Autor", "gelesener Autor"],
  },
  m4: {
    wrongWord: "geschrieben",
    correctWord: "geschriebene",
    options: ["geschriebene", "geschrieben", "schreibende", "schreibt"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e3: [
    { left: "die Literatur", right: "الأدب" },
    { left: "der Roman", right: "الرواية" },
    { left: "das Gedicht", right: "القصيدة" },
    { left: "der Autor", right: "الكاتب" },
  ],
};

const expectedTransformations: string[] = ["e7", "e12", "w1", "w3"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e7: ["der arbeitende Mann", "der arbeitende Mann."],
  e12: ["Der viel lesende Mann ist mein Lehrer", "Der viel lesende Mann ist mein Lehrer."],
  w1: ["das spielende Kind", "das spielende Kind."],
  w3: ["der geschriebene Brief", "Der geschriebene Brief"],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e4: {
    tokens: ["Das", "Kind", "ist", "spielende", "glücklich", "."],
    correctSentence: "Das spielende Kind ist glücklich.",
  },
  m3: {
    tokens: ["Das", "Museum", "ist", "geöffnete", "neu", "beeindruckend", "."],
    correctSentence: "Das neu geöffnete Museum ist beeindruckend.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB204.review ?? []),
    ...lessonB204.practiceBank,
    ...lessonB204.miniTest,
    ...lessonB204.writing,
    ...(lessonB204.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-04 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB204.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-04 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-04 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB204.id,
    taskId,
  };
}

describe("B2-04 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB204).toMatchObject({
      id: "b2-04",
      unitId: "b2-04",
      level: "B2",
      order: 1,
      titleDe: "Literatur und Medien",
      titleAr: "الأدب والإعلام المتقدم",
    });
    expect("duration" in lessonB204).toBe(false);
    expect(lessonB204.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-04");
    expect(meta).toMatchObject({ id: "b2-04", unitId: "b2-04", level: "B2", order: 1, estimatedMinutes: 55 });
    expect(meta?.summary).toBe(lessonB204.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB204.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4", "q5"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e6", "m1", "m2", "w1", "w2"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e7", "w3"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e5", "e9", "m4"]);
    for (const item of lessonB204.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    const goalsText = JSON.stringify(lessonB204.lernziele);
    expect(goalsText).not.toMatch(/Goethe|CEFR/);
    expect(goalsText).not.toMatch(/عروض|Vortrag|Präsentation/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB204.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-04", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-04", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-04", "l3", "q5", false)).toBe("listening:l3:q5");
    expect(getListeningQuestionTaskId("b2-04", "l1", "q4", true)).toBe("listening-transcript:b2-04:l1:q4");
    expect(goal("z1").evidence?.taskIds).toEqual([
      "listening:l1:q1",
      "listening:l2:q2",
      "listening:l2:q3",
      "listening:l1:q4",
      "listening:l3:q5",
    ]);
    const transcriptIds = lessonB204.lernziele.flatMap(
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

  it("makes every participle mistake a missing adjective ending, not a wrong participle", () => {
    for (const [id, expected] of Object.entries(expectedErrorCorrections)) {
      const exercise = task(id);
      if (exercise.type !== "error-correction") throw new Error(`${id} is not error-correction`);
      const fixed = exercise.wrongSentence.replace(expected.wrongWord, expected.correctWord);
      expect(fixed, `${id} الجملة لم تتغيّر`).not.toBe(exercise.wrongSentence);
      expect(evaluateExercise(exercise, expected.wrongWord).isCorrect, `${id} يقبل الخطأ`).toBe(false);
    }
    const e5 = task("e5");
    const e9 = task("e9");
    const m4 = task("m4");
    for (const exercise of [e5, e9, m4]) {
      if (exercise.type !== "error-correction") throw new Error(`${exercise.id} is not error-correction`);
      expect(exercise.correctWord, `${exercise.id} نهاية الصفة`).toMatch(/(e|en)$/);
      expect(exercise.correctWord.length, `${exercise.id} طول`).toBeGreaterThan(exercise.wrongWord.length);
    }
    const e11 = task("e11");
    if (e11.type !== "error-correction") throw new Error("e11 is not error-correction");
    expect(e11.wrongWord, "e11 الكلمة المسبوقة بالصفة").toContain(" ");
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

  it("demands a real Partizip in every transformation, never a relative clause", () => {
    for (const id of expectedTransformations) {
      const exercise = task(id);
      if (exercise.type !== "transformation") throw new Error(`${id} is not transformation`);
      for (const answer of exercise.acceptedAnswers ?? []) {
        expect(answer, `${id} ${answer}`).toMatch(/end[e]?|en[e]?|t[e]?$/);
        expect(answer, `${id} لا جملة موصولة`).not.toMatch(/\b(der|die|das),?\s+(der|die|das)\b/);
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

  it("keeps dictation in the participle register the lesson teaches", () => {
    const exercise = task("e10");
    if (exercise.type !== "dictation") throw new Error("e10 is not dictation");
    expect(exercise.audioText).toBe("Der viel gelesene Autor kommt morgen.");
    expect(exercise.audioText, "Partizip II قبل الاسم").toMatch(/(gelesene|geschriebene|übersetzte)/);
    expect(exercise.errorType).toBe("spelling");
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB204.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB204.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB204.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB204.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps the two theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB204.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB204.theory) {
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
    const theoryText = JSON.stringify(lessonB204.theory);
    for (const marker of ["spielende", "geschriebene", "kochende", "gekochte", "zu lösende", "zu treffende"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB204.flashcards;
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
      lessonB204.reading?.paragraphs,
      lessonB204.reading?.glossary,
      lessonB204.theory,
      lessonB204.practiceBank,
      lessonB204.miniTest,
      lessonB204.writing,
      lessonB204.listening,
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
    const reading = lessonB204.reading;
    expect(reading?.id).toBe("read-b2-04");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Die spät entdeckte Erzählerin");
    expect(reading?.titleAr).toBe("الكاتبة التي اكتُشفت متأخّرةً");
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
      "ein vor drei jahren erschienener roman",
      "die inzwischen vergriffene erstausgabe",
      "ein zwischen zwei sprachen zerrissener erzähler",
      "die immer wieder auftauchende frage",
      "die zu entschlüsselnden zusammenhänge",
      "die von vielen kritikern gerühmte sprache",
      "das viel gelobte buch",
      "die in viele sprachen übersetzte erzählung",
      "die spät entdeckte erzählerin",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    const readingText = JSON.stringify(reading);
    for (const marker of ["erschienener", "vergriffene", "zerrissener", "auftauchende", "zu entschlüsselnden", "übersetzte"]) {
      expect(readingText, `صفة مشتقة مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best reply as one complete sentence", () => {
    const rounds = lessonB204.interaction?.[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Obwohl die Handlung langsam beginnt, entwickelt sich der Roman zu einem tiefgründigen Werk über Identität und Heimat.",
      "Die Art, wie der Autor die innere Welt der Figuren beschreibt. Gleichzeitig schafft er eine kritische Reflexion über die Gesellschaft.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-04");
    expect(meta?.titleAr).toBe(lessonB204.titleAr);
    expect(meta?.titleDe).toBe(lessonB204.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z4"), lessonB204.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB204.id, [goalEvent("z4", "e5")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB204.id, [
        goalEvent("z4", "e5"),
        goalEvent("z4", "e9"),
        goalEvent("z4", "m4"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB204.id, [
        goalEvent("z4", "e5"),
        goalEvent("z4", "e9"),
        goalEvent("z4", "m4", false),
      ]),
    ).toBe("pending");
  });
});
