import { describe, expect, it } from "vitest";

import { lessonB213 } from "@/data/lessons/b2/b2-13";
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
  e1: { options: ["ent", "ver", "be", "an"], key: "ent" },
  e2: { options: ["der", "die", "das", "den"], key: "der" },
  e3: { options: ["Obwohl", "Trotzdem", "Deshalb", "Damit"], key: "Obwohl" },
  e8: { options: ["قابل للتتبع والفهم", "قابل للطباعة على الورق", "غير مفهوم للقارئ", "سريع جداً في التنفيذ"], key: "قابل للتتبع والفهم" },
  e9: { options: ["Einerseits ... andererseits", "Weil ... deshalb ... darum", "Obwohl ... trotzdem ... dennoch", "Damit ... dass ... sodass"], key: "Einerseits ... andererseits" },
  m1: { options: ["Verfügbarkeit", "Verfügbarung", "Verfügbaren", "Verfügbare"], key: "Verfügbarkeit" },
  m2: { options: ["Trotzdem", "Obwohl", "Weil", "Damit"], key: "Trotzdem" },
  q1: { options: ["nur einfache Anfragen", "alle Entscheidungen", "die Weiterbildung", "die Personalplanung"], key: "nur einfache Anfragen" },
  q2: { options: ["nur so lange wie nötig", "für immer", "zehn Jahre lang", "bis zum Jahresende"], key: "nur so lange wie nötig" },
  q3: { options: ["die Auswertung prüfen", "die Daten löschen", "den Vertrag lesen", "die Kurse bezahlen"], key: "die Auswertung prüfen" },
  q4: { options: ["immer ein Mensch", "das System allein", "niemand", "die Softwarefirma"], key: "immer ein Mensch" },
};

const expectedFillBlanks: Record<string, { correct: string[]; options: string[][] }> = {
  r3: { correct: ["hätte"], options: [["hätte", "habe", "hatte"]] },
  e5: {
    correct: ["Digitalisierung", "Verfügbarkeit"],
    options: [
      ["Digitalisierung", "Digitalisieren", "Digital"],
      ["Verfügbarkeit", "Verfügbar", "Verfügung"],
    ],
  },
  e11: { correct: ["Dennoch"], options: [["Dennoch", "Obwohl", "Weil"]] },
  m5: {
    correct: ["Automatisierung", "Sicherheit"],
    options: [
      ["Automatisierung", "Automatisieren", "Automat"],
      ["Sicherheit", "Sicherkeit", "Sichern"],
    ],
  },
  w2: {
    correct: ["Obwohl", "Trotzdem"],
    options: [
      ["Obwohl", "Trotzdem", "Weil"],
      ["Trotzdem", "Obwohl", "Damit"],
    ],
  },
};

const expectedErrorCorrections: Record<string, { wrongWord: string; correctWord: string; options: string[] }> = {
  e6: { wrongWord: "Trotzdem", correctWord: "Obwohl", options: ["Obwohl", "Trotzdem", "Weil", "Damit"] },
  e7: { wrongWord: "sondern", correctWord: "aber", options: ["aber", "sondern", "denn", "deshalb"] },
  m4: {
    wrongWord: "verschlüsseln",
    correctWord: "verschlüsselt",
    options: ["verschlüsselt", "verschlüsseln", "verschlüsselnd", "verschlüsselte"],
  },
};

const expectedMatching: Record<string, { left: string; right: string }[]> = {
  e4: [
    { left: "die Digitalisierung", right: "الرقمنة" },
    { left: "der Datenschutz", right: "حماية البيانات" },
    { left: "die Cybersicherheit", right: "الأمن السيبراني" },
    { left: "die Automatisierung", right: "الأتمتة" },
  ],
};

const expectedTransformations: string[] = ["e13", "w1"];

const expectedTransformationAnswers: Record<string, string[]> = {
  e13: [
    "Obwohl das System schnell ist, prüft eine Fachkraft jede Antwort.",
    "Obwohl das System schnell ist, prüft eine Fachkraft jede Antwort",
  ],
  w1: ["die Digitalisierung", "Die Digitalisierung", "die Digitalisierung."],
};

const expectedWordOrder: Record<string, { tokens: string[]; correctSentence: string }> = {
  e10: {
    tokens: ["Obwohl", "das", "System", "schnell", "ist", ",", "prüft", "eine", "Fachkraft", "jede", "Antwort", "."],
    correctSentence: "Obwohl das System schnell ist, prüft eine Fachkraft jede Antwort.",
  },
  e12: {
    tokens: ["Trotzdem", "kaufen", "viele", "Firmen", "die", "Software", "."],
    correctSentence: "Trotzdem kaufen viele Firmen die Software.",
  },
  m3: {
    tokens: ["Zwar", "ist", "es", "teuer", ",", "aber", "wir", "kaufen", "es", "."],
    correctSentence: "Zwar ist es teuer, aber wir kaufen es.",
  },
};

function allTasks(): Exercise[] {
  return [
    ...(lessonB213.review ?? []),
    ...lessonB213.practiceBank,
    ...lessonB213.miniTest,
    ...lessonB213.writing,
    ...(lessonB213.listening.questions as Exercise[]),
  ];
}

function task(id: string): Exercise {
  const value = allTasks().find((item) => item.id === id);
  if (!value) throw new Error(`B2-13 task ${id} is missing`);
  return value;
}

function goal(id: string) {
  const value = lessonB213.lernziele.find((candidate) => candidate.id === id);
  if (!value) throw new Error(`B2-13 goal ${id} is missing`);
  return value;
}

function goalEvent(goalId: string, exerciseId: string, correct = true): AnalyticsEvent {
  const taskId = goal(goalId).evidence?.taskIds?.find((candidate) => candidate.endsWith(`:${exerciseId}`));
  if (!taskId) throw new Error(`B2-13 ${goalId} has no taskId for ${exerciseId}`);
  return {
    type: "exercise-result",
    ts: 1,
    exerciseId,
    exerciseType: task(exerciseId).type,
    correct,
    points: correct ? 10 : 0,
    lessonId: lessonB213.id,
    taskId,
  };
}

describe("B2-13 lesson content audit", () => {
  it("keeps identity, unit placement, and mirrors the summary into meta", () => {
    expect(lessonB213).toMatchObject({
      id: "b2-13",
      unitId: "b2-13",
      level: "B2",
      order: 1,
      titleDe: "Technologie und KI",
      titleAr: "التكنولوجيا والذكاء الاصطناعي",
    });
    expect("duration" in lessonB213).toBe(false);
    expect(lessonB213.summary).not.toMatch(/Goethe|CEFR|معتمد|إتقان عام/i);

    const meta = lessonMetaList.find((item) => item.id === "b2-13");
    expect(meta).toMatchObject({ id: "b2-13", unitId: "b2-13", level: "B2", order: 1, estimatedMinutes: 70 });
    expect(meta?.summary).toBe(lessonB213.summary);
  });

  it("uses only evaluable performances as goals, each all-correct", () => {
    expect(lessonB213.lernziele.map(({ id }) => id)).toEqual(["z1", "z2", "z3", "z4", "z5"]);
    expect(goal("z1").evidence?.exerciseIds).toEqual(["q1", "q2", "q3", "q4"]);
    expect(goal("z2").evidence?.exerciseIds).toEqual(["e1", "e2", "e5", "m1", "w1"]);
    expect(goal("z3").evidence?.exerciseIds).toEqual(["e3", "e6", "e7", "m2", "w2"]);
    expect(goal("z4").evidence?.exerciseIds).toEqual(["e4", "e8", "w3"]);
    expect(goal("z5").evidence?.exerciseIds).toEqual(["e9", "e10", "e11", "e12"]);
    for (const item of lessonB213.lernziele) {
      expect(item.evidence?.completion, `${item.id} completion`).toBe("all-correct");
      for (const exerciseId of item.evidence?.exerciseIds ?? []) {
        expect(() => task(exerciseId), `${item.id}:${exerciseId}`).not.toThrow();
      }
    }
    expect(JSON.stringify(lessonB213.lernziele)).not.toMatch(/Goethe|CEFR/);
  });

  it("requires every evidence taskId to end with a mapped exercise ID", () => {
    for (const item of lessonB213.lernziele) {
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
    expect(getListeningQuestionTaskId("b2-13", "l1", "q1", false)).toBe("listening:l1:q1");
    expect(getListeningQuestionTaskId("b2-13", "l2", "q2", false)).toBe("listening:l2:q2");
    expect(getListeningQuestionTaskId("b2-13", "l3", "q4", true)).toBe("listening-transcript:b2-13:l3:q4");
    const transcriptIds = lessonB213.lernziele.flatMap(
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

  it("corrects the concessive mistakes in the direction the lesson teaches", () => {
    const e6 = task("e6");
    if (e6.type !== "error-correction") throw new Error("e6 is not error-correction");
    expect(e6.wrongWord, "trotzdem ظرف لا ثانوية").toBe("Trotzdem");
    expect(e6.correctWord, "obwohl تُدخل ثانوية").toBe("Obwohl");
    expect(e6.wrongSentence, "الفعل في النهاية بعد الأداة الخاطئة").toMatch(/Trotzdem .* ist,/);

    const e7 = task("e7");
    if (e7.type !== "error-correction") throw new Error("e7 is not error-correction");
    expect(e7.wrongWord, "sondern بعد نفي فقط").toBe("sondern");
    expect(e7.correctWord, "الاستدراك مع zwar بـaber").toBe("aber");
  });

  it("keeps the derivational bank inside the technical derivation set", () => {
    const e1 = task("e1");
    if (e1.type !== "multiple-choice") throw new Error("e1 is not multiple-choice");
    expect(e1.options[e1.correctIndex], "ent- يفكّ التشفير").toBe("ent");
    expect(e1.questionDe, "الفعل المقصود").toContain("schlüsseln");

    const e2 = task("e2");
    if (e2.type !== "multiple-choice") throw new Error("e2 is not multiple-choice");
    expect(e2.options[e2.correctIndex], "جنس المركّب من جزئه الأخير").toBe("der");
    expect(e2.questionDe, "المركّب").toContain("Datenschutz");

    const m1 = task("m1");
    if (m1.type !== "multiple-choice") throw new Error("m1 is not multiple-choice");
    expect(m1.options[m1.correctIndex], "-bar ← -keit").toBe("Verfügbarkeit");
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

  it("keeps dictation inside the technology vocabulary the lesson teaches", () => {
    const e14 = task("e14");
    if (e14.type !== "dictation") throw new Error("e14 is not dictation");
    expect(e14.audioText).toBe("Zwar bietet KI Chancen, aber sie birgt auch Risiken.");
    expect(e14.audioText, "zwar ... aber").toMatch(/^Zwar .*, aber /);
    expect(e14.errorType).toBe("spelling");

    const w3 = task("w3");
    if (w3.type !== "dictation") throw new Error("w3 is not dictation");
    expect(w3.audioText).toBe("Die Daten werden verschlüsselt gespeichert.");
    expect(w3.audioText, "verschlüsselt").toMatch(/verschlüsselt/);
  });

  it("keeps the practice bank at fourteen items across at least five types", () => {
    const bank = lessonB213.practiceBank;
    expect(bank.length).toBeGreaterThanOrEqual(14);
    const types = new Set(bank.map(({ type }) => type));
    expect(types.size).toBeGreaterThanOrEqual(5);
    const ids = bank.map(({ id }) => id);
    expect(new Set(ids).size, "معرّفات مكرّرة").toBe(ids.length);
    for (const item of bank) {
      expect(item.explanation?.trim().length ?? 0, `${item.id} شرح`).toBeGreaterThan(5);
    }
    const miniIds = new Set(lessonB213.miniTest.map(({ id }) => id));
    const reviewIds = new Set((lessonB213.review ?? []).map(({ id }) => id));
    for (const item of bank) {
      expect(miniIds.has(item.id), `${item.id} مكرّر في المصغّر`).toBe(false);
      expect(reviewIds.has(item.id), `${item.id} مكرّر في المراجعة`).toBe(false);
    }
    const writingIds = lessonB213.writing.map(({ id }) => id);
    expect(new Set([...ids, ...miniIds, ...reviewIds, ...writingIds]).size, "معرّفات مكرّرة بين الأقسام").toBe(
      ids.length + miniIds.size + reviewIds.size + writingIds.length,
    );
  });

  it("keeps both theory blocks at six examples, three explained mistakes, and a related rule", () => {
    expect(lessonB213.theory.map(({ id }) => id)).toEqual(["t1", "t2"]);
    for (const block of lessonB213.theory) {
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
    const theoryText = JSON.stringify(lessonB213.theory);
    for (const marker of ["ver-", "ent-", "er-", "be-", "-ung", "-keit", "komposit", "obwohl", "trotzdem", "dennoch", "zwar", "aber", "einerseits"]) {
      expect(theoryText.toLowerCase(), `بنية مفقودة: ${marker}`).toContain(marker);
    }
  });

  it("checks the flashcards: count, unique German headwords, and teaching anchors", () => {
    const cards = lessonB213.flashcards;
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
      lessonB213.reading?.paragraphs,
      lessonB213.reading?.glossary,
      lessonB213.theory,
      lessonB213.practiceBank,
      lessonB213.miniTest,
      lessonB213.writing,
      lessonB213.listening,
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
    const reading = lessonB213.reading;
    expect(reading?.id).toBe("read-b2-13");
    expect(reading?.textType).toBe("artikel");
    expect(reading?.titleDe).toBe("Wenn Maschinen mitdenken — Chancen und Grenzen der KI");
    expect(reading?.titleAr).toBe("حين تفكر الآلات معنا — فرص الذكاء الاصطناعي وحدوده");
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
      "die folgende darstellung ist ein erfundenes fallbeispiel",
      "die automatisierung übernimmt einfache anfragen",
      "obwohl das system die antwortzeit verkürzt",
      "die ergebnisse nachvollziehbar sein müssen",
      "zwar erzeugt das system vorschläge",
      "alle personenbezogenen daten werden verschlüsselt",
      "dennoch wendet eine betriebsrätin ein",
      "einerseits erleichtert die digitalisierung die arbeit",
      "entscheidungen mit folgen für menschen trifft weiterhin eine person",
      "obgleich die cybersicherheit dadurch nicht automatisch besser wird",
      "wer nur auf die geschwindigkeit schaut",
    ]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }

    expect(reading!.paragraphsAr[0]).toContain("افتراضية");
    const readingText = JSON.stringify(reading).toLowerCase();
    for (const marker of ["fallbeispiel", "automatisierung", "datenschutz", "verschlüsselt", "obwohl", "dennoch", "zwar", "cybersicherheit"]) {
      expect(readingText, `مصطلح مفقود: ${marker}`).toContain(marker);
    }
  });

  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB213.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Zwar kann ein KI-System einfache Fragen schnell beantworten, aber jede Antwort sollte von einer Fachkraft geprüft werden. So bleiben Geschwindigkeit und Kontrolle verbunden.",
      "Man könnte klare Regeln einführen: Entscheidungen mit Folgen für Menschen trifft eine Person, und die Ergebnisse müssen nachvollziehbar dokumentiert werden.",
    ]);
    for (const round of rounds) {
      expect(round.options.filter((option) => option.best)).toHaveLength(1);
    }
  });

  it("keeps the mediation task pointing at a real source text", () => {
    const mediation = lessonB213.mediation?.[0];
    expect(mediation?.id).toBe("med-b2-13-1");
    expect(mediation?.type).toBe("summarize-de-to-ar");
    expect((mediation?.sourceDe ?? "").trim().length, "نصّ المصدر").toBeGreaterThan(100);
    expect(mediation?.sourceDe).toContain("Fiktiver Fall, keine Studie");
    expect(mediation?.sourceDe).not.toContain("Studien zeigen");
    expect(mediation?.taskAr).toContain("الحالة الافتراضية");
  });

  it("keeps the meta row aligned with the lesson title", () => {
    const meta = lessonMetaList.find((candidate) => candidate.id === "b2-13");
    expect(meta?.titleAr).toBe(lessonB213.titleAr);
    expect(meta?.titleDe).toBe(lessonB213.titleDe);
  });

  it("counts only correct, mapped exercise results toward goals", () => {
    expect(getGoalEvidenceStatus(goal("z4"), lessonB213.id, [])).toBe("pending");
    expect(getGoalEvidenceStatus(goal("z4"), lessonB213.id, [goalEvent("z4", "e4")])).toBe("pending");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB213.id, [
        goalEvent("z4", "e4"),
        goalEvent("z4", "e8"),
        goalEvent("z4", "w3"),
      ]),
    ).toBe("evidenced");
    expect(
      getGoalEvidenceStatus(goal("z4"), lessonB213.id, [
        goalEvent("z4", "e4"),
        goalEvent("z4", "e8"),
        goalEvent("z4", "w3", false),
      ]),
    ).toBe("pending");
  });
});
