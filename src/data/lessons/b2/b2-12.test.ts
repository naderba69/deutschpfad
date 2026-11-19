import { describe, expect, it } from "vitest";

import { lessonB212 } from "@/data/lessons/b2/b2-12";
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
  e1: { options: ["bekäme", "bekomme", "bekommen", "bekommen würde"], key: "bekäme" },
  e2: { options: ["würde", "will", "werde", "bin"], key: "würde" },
  e3: { options: ["wurden", "wurde", "werden", "worden"], key: "wurden" },
  e8: { options: ["القائد/المدير", "القوة", "الشركة الكبيرة", "العمل فقط"], key: "القائد/المدير" },
  e9: { options: ["Damit", "Weil", "Obwohl", "Wenn"], key: "Damit" },
  m1: { options: ["würden", "werden", "wollen", "sind"], key: "würden" },
  m2: { options: ["wurden", "wurde", "werden", "worden"], key: "wurden" },
  q1: { options: ["die Leistungen", "die Weiterbildung", "die Firma", "das Projekt"], key: "die Leistungen" },
  q2: { options: ["die Firma", "Karim selbst", "die Beraterin", "niemand"], key: "die Firma" },
  q3: { options: ["Erfahrung sammeln und Verantwortung übernehmen", "Mehr Urlaub nehmen und sich lange ausruhen", "Die Firma wechseln und ganz neu anfangen", "Weniger arbeiten und früher nach Hause gehen"], key: "Erfahrung sammeln und Verantwortung übernehmen" },
  q4: { options: ["die Weiterbildung", "mehr Urlaub", "eine neue Firma", "weniger Arbeit"], key: "die Weiterbildung" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["hätte"], options: [["hätte", "habe", "hatte"]] },
  e5: {
    correct: ["sagen", "sollten"],
    options: [
      ["sagen", "sagt", "gesagt"],
      ["sollten", "sollen", "solltest"],
    ],
  },
  e6: {
    correct: ["geprüft", "geleitet"],
    options: [
      ["geprüft", "prüfen", "geprüft werden"],
      ["geleitet", "leiten", "geleitete"],
    ],
  },
  e11: { correct: ["Wenn"], options: [["Wenn", "Weil", "Damit"]] },
  m5: { correct: ["gemacht"], options: [["gemacht", "machen", "mache"]] },
  w2: {
    correct: ["wurden", "wurden"],
    options: [
      ["wurden", "wurde", "werden"],
      ["wurden", "wurde", "worden"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e7: {
    wrongWord: "abgeschlossen haben",
    correctWord: "abgeschlossen worden",
    options: ["abgeschlossen worden", "abgeschlossen haben", "abgeschlossen gewesen", "abgeschlossen sein"],
  },
  m4: {
    wrongWord: "anerkannt haben",
    correctWord: "anerkannt worden",
    options: ["anerkannt worden", "anerkannt haben", "anerkannt gewesen", "anerkannt sein"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e4: [
    { left: "die Beförderung", right: "الترقية" },
    { left: "die Weiterbildung", right: "التدريب المستمر" },
    { left: "die Verantwortung", right: "المسؤولية" },
    { left: "der Lebenslauf", right: "السيرة الذاتية" },
  ],
};

const expectedTransformations: string[] = ["e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e13: ["Die Leistungen wurden von der Geschäftsführung anerkannt.", "Die Leistungen wurden von der Geschäftsführung anerkannt"],
  w1: ["Ich würde gern in Ihrem Team arbeiten.", "Ich würde gern in Ihrem Team arbeiten"],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e10: {
    tokens: ["Wenn", "ich", "die", "Beförderung", "bekäme", ",", "würde", "ich", "mehr", "Verantwortung", "übernehmen", "."],
    correctSentence: "Wenn ich die Beförderung bekäme, würde ich mehr Verantwortung übernehmen.",
  },
  e12: {
    tokens: ["Die", "Projekte", "wurden", "erfolgreich", "abgeschlossen", "."],
    correctSentence: "Die Projekte wurden erfolgreich abgeschlossen.",
  },
  m3: {
    tokens: ["Ich", "würde", "gern", "in", "Ihrem", "Team", "arbeiten", "."],
    correctSentence: "Ich würde gern in Ihrem Team arbeiten.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB212.review ?? []),
    ...lessonB212.practiceBank,
    ...lessonB212.miniTest,
    ...lessonB212.writing,
    ...(lessonB212.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-12 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB212.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-12 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-12 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB212.id,
    taskId,
  };
}

describe("B2-12 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB212).toMatchObject({
      id: "b2-12",
      unitId: "b2-12",
      level: "B2",
      order: 1,
      titleDe: "Karriereentwicklung",
      titleAr: "المهن المتقدمة",
    });
    expect("duration" in lessonB212).toBe(false);
    expect(lessonB212.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-12");
    expect(meta).toMatchObject({ id: "b2-12", unitId: "b2-12", level: "B2", order: 1, estimatedMinutes: 70 });
    expect(meta?.summary).toBe(lessonB212.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB212.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e5", "m1", "w1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e3", "e6", "e7", "m2", "w2"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e4", "e8", "w3"]);
    expect(goal("z5").evidence?.exerciseIds).toEqual(["e9", "e10", "e11", "e12"]);
    for (const item of lessonB212.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB212.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB212.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-12", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-12", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-12", "l3", "q4", true)).toBe("listening-transcript:b2-12:l3:q4");
    const transcriptIds = lessonB212.lernziele.flatMap(
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
    expect(byType("dictation"), "إملاء").toEqual(["e14", "w3"]);
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

  it("corrects the passive perfect mistakes in the direction the lesson teaches", () => {
    const e7 = task("e7");
    const m4 = task("m4");
    for (const exercise of [e7, m4]) {
      if (exercise.type !== "error-correction") throw new Error(`${exercise.id} is not error-correction`);
      expect(exercise.correctWord, `${exercise.id} worden`).toContain("worden");
      expect(exercise.wrongWord, `${exercise.id} haben خطأ`).toContain("haben");
      expect(exercise.wrongSentence, `${exercise.id} مجهول`).toContain("wurden");
    }
  });

  it("keeps the conditional bank inside the career-hypothetical set", () => {
    const e1 = task("e1");
    if (e1.type !== "multiple-choice") throw new Error("e1 is not multiple-choice");
    expect(e1.options[e1.correctIndex], "bekäme").toBe("bekäme");
    const e2 = task("e2");
    if (e2.type !== "multiple-choice") throw new Error("e2 is not multiple-choice");
    expect(e2.options[e2.correctIndex], "würde").toBe("würde");
    const e10 = task("e10");
    if (e10.type !== "word-ordering") throw new Error("e10 is not word-ordering");
    expect(e10.tokens[0], "Wenn تفتح الجملة الشرطية").toBe("Wenn");
    expect(e10.tokens[e10.tokens.indexOf(",") + 1], "würde بعد الفاصلة").toBe("würde");
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

  it("keeps dictation inside the career vocabulary the lesson teaches", () => {
    const e14 = task("e14");
    if (e14.type !== "dictation") throw new Error("e14 is not dictation");
    expect(e14.audioText).toBe("Ich würde gern mehr Verantwortung übernehmen.");
    expect(e14.audioText, "würde gern").toMatch(/würde gern/);
    expect(e14.errorType).toBe("spelling");

    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText).toBe("Die Beförderung zur Führungskraft ist ein wichtiger Schritt.");
    expect(w3.audioText, "Beförderung").toMatch(/Beförderung/);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB212.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB212.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB212.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB212.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps both theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB212.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB212.theory) {
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
    const theoryText = JSON.stringify(lessonB212.theory);
    for (const marker of ["würde", "bekäme", "könnte", "sollte", "möchte", "werden", "Partizip II", "worden", "sich lassen"]) {
      expect(theoryText, `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB212.flashcards;
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
      lessonB212.reading?.paragraphs,
      lessonB212.reading?.glossary,
      lessonB212.theory,
      lessonB212.practiceBank,
      lessonB212.miniTest,
      lessonB212.writing,
      lessonB212.listening,
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
    const reading = lessonB212.reading;
    expect(reading?.id).toBe("read-b2-12");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Der Weg zur Führungskraft");
    expect(reading?.titleAr).toBe("الطريق إلى منصب القيادة");
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
      "die folgende fallgeschichte ist erfunden",
      "sie wurde mit immer mehr aufgaben betraut",
      "ihre leistungen wurden von der geschäftsführung anerkannt",
      "wenn sie die beförderung bekäme",
      "würde sie eine weiterbildung machen",
      "die aufgaben werden ihr von der geschäftsführung übertragen",
      "in der beispiel-firma werden beförderungen nach klaren kriterien vergeben",
      "die leistungen müssen dokumentiert werden",
      "wer nur auf die beförderung wartet",
      "entwicklungspläne für alle mitarbeiter zu erstellen",
      "da das team klein ist, können die beteiligten",
      "so entsteht aus einer stelle",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    expect(text).not.toContain("dreißig sekunden");
    expect(reading!.paragraphsAr[0]).toContain("افتراضية");

    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["fallgeschichte ist erfunden", "die beförderung", "weiterbildung", "bekäme", "würde", "wurden", "die leistungen"]) {
      expect(readingText, `رابط متقدّم مفقود: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB212.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Meiner Ansicht nach ja, denn so können Entwicklungspläne erstellt werden. Wenn Ziele offen besprochen werden, können beide Seiten profitieren.",
      "Man könnte Leistungen dokumentieren und eine Weiterbildung machen. So werden die Chancen auf eine Beförderung deutlich erhöht.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB212.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-12-1");
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
    expect(mediation?.sourceDe).toContain("Fiktiver Fall, keine Studie");
    expect(mediation?.sourceDe).not.toContain("Studien zeigen");
    expect(mediation?.taskAr).toContain("الحالة الافتراضية");
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-12");
    expect(meta?.titleAr).toBe(lessonB212.titleAr);
    expect(meta?.titleDe).toBe(lessonB212.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z4"), lessonB212.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB212.id, [goalEvent("z4", "e4")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB212.id, [
        goalEvent("z4", "e4"),
        goalEvent("z4", "e8"),
        goalEvent("z4", "w3"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB212.id, [
        goalEvent("z4", "e4"),
        goalEvent("z4", "e8"),
        goalEvent("z4", "w3", false),
      ]),
    ).toBe("pending");
  });
});
