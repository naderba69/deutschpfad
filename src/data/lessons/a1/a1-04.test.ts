import {describe, expect, it} from "vitest";

import {A1_DIALOGUES_2} from "@/data/dialogues/a1/part2";
import { A1_VOCAB } from "@/data/vocabulary/a1";
import {lessonA104} from "./a1-04";

const lesson = lessonA104;

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) {
    ids.add(task.id);
    ids.add(`practice:${lesson.id}:${task.id}`);
  }
  for (const task of lesson.miniTest) {
    ids.add(task.id);
    ids.add(`mini-test:${lesson.id}:${task.id}`);
  }
  for (const task of lesson.writing) {
    ids.add(task.id);
    ids.add(`writing:${lesson.id}:${task.id}`);
  }
  if (lesson.reading) {
    for (const task of lesson.reading.questions) {
      ids.add(task.id);
      ids.add(`reading:${lesson.reading.id}:${task.id}`);
    }
  }
  for (const item of lesson.listening.items) {
    for (const question of lesson.listening.questions) {
      if (question.itemId === item.id) {
        ids.add(question.id);
        ids.add(`listening:${item.id}:${question.id}`);
      }
    }
  }
  return ids;
}

describe("A1-04 — السكن والمنزل", () => {
  it("يحرس ترجمة وأجناس مفردات الأثاث والأبواب والنوافذ", () => {
    const entries = A1_VOCAB["a1-04"];
    const expected = [
      ["der Tisch", "الطاولة", "der"],
      ["der Stuhl", "الكرسي", "der"],
      ["das Sofa", "الأريكة", "das"],
      ["das Bett", "السرير", "das"],
      ["der Schrank", "الخزانة", "der"],
      ["die Lampe", "المصباح", "die"],
      ["das Fenster", "النافذة", "das"],
      ["die Tür", "الباب", "die"],
      ["die Wand", "الجدار", "die"],
    ];
    for (const [de, ar, gender] of expected) {
      const entry = entries.find((item) => item.de === de);
      expect(entry?.ar, de).toBe(ar);
      expect(entry?.g, de).toBe(gender);
    }
    const localPrepositions = entries.find((item) => item.de === "im / in der / auf dem");
    expect(localPrepositions?.ar).toContain("im = in dem");
    expect(localPrepositions?.ar).toContain("للمؤنث في Dativ");
    expect(localPrepositions?.ar).toContain("عند وصف الموقع");
  });

  it("المورد الحواري المرتبط لا يخلط بين الغرف والمطبخ الإضافي", () => {
    const dialogue = A1_DIALOGUES_2.find((item) => item.id === "a1-07-wohnung");
    expect(dialogue).toBeDefined();
    const answer = dialogue?.turns.find((turn) => turn.de.startsWith("Zwei Zimmer:"));
    expect(answer?.de).toContain("Die Küche ist extra.");
    const question = dialogue?.questions.find((item) => item.de === "Wie viele Zimmer hat die Wohnung?");
    expect(question?.options.filter((option) => option.correct).map((option) => option.text)).toEqual(["Zwei Zimmer"]);
  });

  it("تصوغ تمييز Wohnung/Haus وصفياً من دون تعميم ثقافي غير مسند", () => {
    const section = lesson.theory?.find((item) => item.id === "t1");
    expect(section?.explanationAr).toContain("تمييزات لغوية مهمّة في هذا الحقل.");
    const example = section?.examples?.find((item) => item.de === "Ich suche eine Wohnung, kein Haus.");
    expect(example?.ar).toContain("تمييز بين نوعَي السكن");
  });

  it("تترجم Wohnung في هدف الوحدة إلى شقة لا إلى منزل أعم", () => {
    expect(lesson.lernziele.find((goal) => goal.id === "z2")?.ar).toContain("أصف شقتي");
  });

  it("تحافظ عناوين مشاهد الاستماع على موضوعها وتفصح عن صوت المتصفح الآلي", () => {
    for (const item of lesson.listening.items) {
      expect(item.title, item.id).not.toMatch(/المتصفح|اصطناعي/);
    }
    for (const id of ["l1", "l2"]) {
      const item = lesson.listening.items.find((candidate) => candidate.id === id);
      expect(item?.audioNoteAr, `${id} disclosure`).toContain("صوت المتصفح الآلي (TTS)");
      expect(item?.audioNoteAr, `${id} disclosure`).toContain("ليست تسجيلاً بشرياً");
      expect(item?.audioNoteAr, `${id} disclosure`).toContain("يختلف الصوت حسب الجهاز");
    }
  });

  it("تعرّف تعليمات الإملاء المتعلم بأن النطق آلي", () => {
    const dictations = [...lesson.practiceBank, ...lesson.writing].filter((task) => task.type === "dictation");
    expect(dictations).toHaveLength(2);
    for (const task of dictations) {
      expect(task.instructionAr).toContain("النطق الآلي في المتصفح");
    }
  });

  it("كل هدف مرتبط بمهام موجودة فعلاً ويحمل وصف أداء", () => {
    const known = knownTaskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.exerciseIds ?? []) {
        expect(known.has(id), `${goal.id} references missing exercise ${id}`).toBe(true);
      }
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references missing ${id}`).toBe(true);
      }
    }
  });

  it("تميّز ترجمة unter المكانية والمبنى السكني عن موضع الجارة", () => {
    const reading = lesson.reading;
    expect(reading).toBeDefined();
    if (!reading) throw new Error("A1-04 reading is required");
    expect(reading.paragraphs[2]).toContain("Der Kühlschrank steht neben dem Fenster");
    expect(reading.paragraphsAr[2]).toContain("الثلّاجة بجانب النافذة");
    expect(reading.paragraphs[2]).toContain("Unter dem Bett habe ich meine Koffer");
    expect(reading.paragraphsAr[2]).toContain("وتحت السرير حقائبي");
    expect(reading.paragraphs[4]).toContain("Frau Berger wohnt unter mir");
    expect(reading.paragraphsAr[4]).toContain("السيّدة بيرغر تسكن في الطابق الذي أسكن فوقه");
  });

  it("ترجمة القراءة محاذية للفقرات وسؤال r5 له إجابة واحدة منصوص عليها", () => {
    const reading = lesson.reading;
    expect(reading).toBeDefined();
    if (!reading) throw new Error("A1-04 reading is required");
    expect(reading.paragraphs).toHaveLength(5);
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    const question = reading.questions.find((candidate) => candidate.id === "r5");
    expect(question?.questionDe).toBe("Was hängt an der Wand?");
    expect(question?.options[question.correctIndex]).toBe("Ein Bild aus Tunesien");
    expect(question?.paragraph).toBe(1);
    expect(reading.paragraphs[1]).toContain("An der Wand hängt ein Bild aus Tunesien.");
    expect(reading.paragraphsAr[1]).toContain("وعلى الجدار صورة معلّقة من تونس.");
  });

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة ضمن المدى", () => {
    const readingQuestions = lesson.reading?.questions ?? [];
    for (const task of [...lesson.practiceBank, ...lesson.miniTest, ...readingQuestions, ...lesson.listening.questions]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});

describe("حراسة groß وklein وneu في وصف الشقة", () => {
  it("يطابق حجم الغرفة والمطبخ وحداثة الموقد مع المقصود في الرسالة", () => {
    const reading = lesson.reading;
    expect(reading).toBeDefined();
    if (!reading) throw new Error("A1-04 reading is required");
    expect(reading.paragraphs[0]).toContain("nicht sehr groß");
    expect(reading.paragraphsAr[0]).toContain("ليست كبيرة جداً");
    expect(reading.paragraphs[2]).toContain("sehr klein, aber praktisch");
    expect(reading.paragraphsAr[2]).toContain("المطبخ صغير جداً لكنّه عمليّ");
    expect(reading.paragraphs[2]).toContain("der Herd ist ziemlich neu");
    expect(reading.paragraphsAr[2]).toContain("الموقد جديد نسبياً");
    expect(JSON.stringify(lesson)).toContain("Ja, die Küche ist groß und modern.");
    expect(JSON.stringify(lesson)).toContain("نعم، المطبخ كبير وحديث.");
  });
});
