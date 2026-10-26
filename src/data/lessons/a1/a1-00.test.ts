import {describe, expect, it} from "vitest";

import {lessonA100} from "./a1-00";

const lesson = lessonA100;
const JSON_TEXT = JSON.stringify(lesson);

function practiceIds(): string[] {
  return lesson.practiceBank.map((task) => `practice:${lesson.id}:${task.id}`);
}

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) ids.add(`practice:${lesson.id}:${task.id}`);
  for (const task of lesson.miniTest) ids.add(`mini-test:${lesson.id}:${task.id}`);
  for (const task of lesson.writing) ids.add(`writing:${lesson.id}:${task.id}`);
  for (const task of lesson.review ?? []) ids.add(`review:${lesson.id}:${task.id}`);
  if (lesson.reading) {
    for (const task of lesson.reading.questions) ids.add(`reading:${lesson.reading.id}:${task.id}`);
  }
  return ids;
}

describe("A1-00 — الأبجدية والنطق", () => {
  it("نص القراءة يذكر الرقم صفراً بالكلمة، لا قيمة برمجية فارغة", () => {
    const dialog = lesson.reading?.paragraphs.join(" ") ?? "";
    expect(dialog).not.toMatch(/undefined/);
    expect(dialog).toContain("null, drei, vier, eins, sieben, neun");
  });

  it("تمرين الحروف المعلمة e5 تعليمته تطابق خياراته (ü وu) ولا يحوي كلمة زائدة", () => {
    const e5 = lesson.practiceBank.find((task) => task.id === "e5");
    expect(e5?.type).toBe("fill-blank");
    expect(e5?.instructionAr).toContain("ü أو u");
    if (e5?.type === "fill-blank") {
      expect(e5.template).not.toMatch(/Bär/);
      expect(e5.blanks.every((blank) => blank.options?.includes(blank.correct))).toBe(true);
    }
  });

  it("تمرين ترتيب e10 تعليمته تذكر الحروف الأربعة نفسها", () => {
    const e10 = lesson.practiceBank.find((task) => task.id === "e10");
    expect(e10?.type).toBe("word-ordering");
    if (e10?.type === "word-ordering") {
      expect([...e10.tokens].sort().join("")).toBe([...e10.correctSentence].sort().join(""));
      expect(e10.instructionAr).toContain("Z, e, i, t");
    }
  });

  it("تمرين m4 يملأ الفراغ بـ«كيف» (wie) لا «نحن»", () => {
    const m4 = lesson.miniTest.find((task) => task.id === "m4");
    expect(m4?.type).toBe("fill-blank");
    if (m4?.type === "fill-blank") {
      expect(m4.template).toContain("w___ (كيف)");
      expect(m4.template).not.toContain("(نحن)");
    }
  });

  it("لا تظهر ادعاءات امتحان Goethe أو وعود بتمارين لاحقة أو قراءة كل كلمة بلا استثناء", () => {
    expect(JSON_TEXT).not.toMatch(/امتحان Goethe/);
    expect(JSON_TEXT).not.toMatch(/ستتعلم أشهرها/);
    expect(JSON_TEXT).not.toMatch(/معلّمك الافتراضي/);
    expect(JSON_TEXT).not.toMatch(/يقرأ أيّ كلمة ألمانية لم يرَها قطّ/);
    expect(JSON_TEXT).not.toMatch(/يقرأ غداً كلمةً لم يرَها قطّ نطقاً صحيحاً/);
  });

  it("يميز وصف ich-Laut الصوتي عن الشين العربية التقريبية", () => {
    expect(JSON_TEXT).toContain("ich-Laut [ç]");
    expect(JSON_TEXT).toContain("لا يطابق الشين العربية");
  });

  it("يفرق بين ie الطويلة وdiphthongs، ويعرض pf كتتابع صامتين", () => {
    const t2 = lesson.theory.find((section) => section.id === "t2");
    expect(t2?.explanationAr).toContain("وليس صوتاً مزدوجاً");
    expect(t2?.explanationAr).toContain("تتابع صامتين [pf]");
    expect(t2?.explanationAr).toContain("يختلف النطق إقليمياً");
  });

  it("سؤال Straße يحدد المعيار الإملائي والسياق ولا يطلب خياراً غير موجود", () => {
    const e6 = lesson.practiceBank.find((task) => task.id === "e6");
    expect(e6?.type).toBe("error-correction");
    if (e6?.type === "error-correction") {
      expect(e6.instructionAr).toContain("في ألمانيا");
      expect(e6.wrongSentence).toContain("Leipzig");
      expect(e6.options).toContain("Straße");
      expect(e6.instructionAr).not.toContain("لا خطأ");
    }
  });

  it("تعليمات الإملاء تصف ما يسمعه المتعلم فعلاً ولا توحي بتهجئة حرفية للصوت", () => {
    const e8 = lesson.practiceBank.find((task) => task.id === "e8");
    expect(e8?.type).toBe("dictation");
    expect(e8?.instructionAr).toContain("الكلمة كاملة");
    expect(e8?.instructionAr).not.toContain("حرفاً حرفاً");
    const goal = lesson.lernziele.find((item) => item.id === "z4");
    expect(goal?.ar).toContain("بعد سماعها");
    expect(goal?.evidence?.labelAr).toContain("كلمة كاملة");
  });

  it("تطابق الأسماء الألمانية للحروف تقريبها العربي في حوار التهجئة", () => {
    const samiLine = lesson.listening.items[0]?.lines.find((line) => line.speaker === "Sami" && line.de.includes("S-A-M-I"));
    expect(samiLine?.ar).toContain("إس-آه-إم-إي");
    expect(samiLine?.ar).not.toContain("آي");
    const strasseLine = lesson.listening.items[1]?.lines.find((line) => line.speaker === "Mona" && line.de.includes("Eszett"));
    expect(strasseLine?.de).toContain("Eszett");
    expect(strasseLine?.de).not.toContain("ß");
  });

  it("يعرض أسماء الحروف لا يخلطها بأصواتها داخل الكلمات", () => {
    const alphabetTable = lesson.theory.find((section) => section.id === "t1")?.table;
    expect(alphabetTable?.title).toContain("أسماء الحروف");
    expect(JSON_TEXT).toContain("A a");
    expect(JSON_TEXT).toContain("Vau");
    expect(JSON_TEXT).toContain("Zett");
    expect(JSON_TEXT).toContain("Eszett");
    expect(JSON_TEXT).toContain("لا يقابله صوت عربي مطابق");
  });

  it("يتجنب تعميمات النطق التي تخالف أمثلة الدرس وحدود الاختلاف الفردي", () => {
    expect(JSON_TEXT).toContain("lesen وSonne");
    expect(JSON_TEXT).toContain("Wasser وist");
    expect(JSON_TEXT).toContain("تختلف الصعوبة باختلاف لغة المتعلم وخبرته");
    expect(JSON_TEXT).toContain("Vater وVogel وviel وvier");
    expect(JSON_TEXT).toContain("Video وVase");
    expect(JSON_TEXT).not.toContain("العربية لا تبدأ كلمةً بساكنين");
    expect(JSON_TEXT).not.toContain("S بين حرفين علة يُنطق Z");
    expect(JSON_TEXT).not.toContain("الأصل يحدّد النطق");
    expect(JSON_TEXT).not.toContain("الألمان يتهجّون أسماءهم في الهاتف والبنك والمكتب كل يوم");
  });

  it("قاعدة ch لا تُعرض بوصفها «شيناً» بعد e أو i فقط في جواب الحوار", () => {
    const round = lesson.interaction?.[0]?.rounds[0];
    const best = round?.options.find((option) => option.best);
    expect(best?.de).toContain("ach-Laut [x]");
    expect(best?.de).toContain("ich-Laut [ç]");
    expect(best?.ar).toContain("لا يطابق الثاني الشين العربية");
  });

  it("لا يعمم طريقة واحدة على قراءة أرقام الهاتف ولا على أفعال المعرفة", () => {
    const phone = lesson.reading?.glossary.find((item) => item.de === "die Telefonnummer");
    const kennen = lesson.reading?.glossary.find((item) => item.de === "kennen");
    expect(phone?.noteAr).toContain("فرادى أو في مجموعات");
    expect(kennen?.noteAr).toContain("في كل السياقات");
  });

  it("يحصر سؤال Straße في الإملاء الألماني بألمانيا ويقرّ بأن Strasse معيارية في سويسرا", () => {
    const m2 = lesson.miniTest.find((task) => task.id === "m2");
    expect(m2?.type).toBe("multiple-choice");
    if (m2?.type === "multiple-choice") {
      expect(m2.instructionAr).toContain("في ألمانيا");
      expect(m2.questionDe).toContain("in Deutschland");
      expect(m2.optionExplanations?.[1]).toContain("معيارية في سويسرا");
      expect(m2.options[m2.correctIndex]).toBe("die Straße");
    }
  });

  it("لا يزعم أن التعلم العربي يضمن سهولة صوتية أو أن قواعد الدرس شاملة", () => {
    expect(JSON_TEXT).not.toMatch(/الأذن العربية مهيّأة/);
    expect(JSON_TEXT).not.toMatch(/أسهل ما في هذا الدرس/);
    expect(JSON_TEXT).not.toContain("Eszett = S-Z");
    expect(JSON_TEXT).not.toContain("تغطّي أغلب ما يقرؤه المبتدئ");
    expect(JSON_TEXT).toContain("لا نفترض أن هذا أسهل أو أصعب لمتعلم بعينه");
  });

  it("يفصل بين أمثلة التهجئة التقليدية والجدول الحالي، ويعرض حدود تقييم النطق", () => {
    const redemittel = lesson.reading?.redemittel?.find((item) => item.de.startsWith("A wie Anton"));
    expect(redemittel?.ar).toContain("أمثلة تقليدية");
    expect(redemittel?.ar).toContain("DIN 5009");
    const m2 = lesson.miniTest.find((task) => task.id === "m2");
    expect(m2?.type).toBe("multiple-choice");
    if (m2?.type === "multiple-choice") expect(m2.optionExplanations?.[2]).not.toContain("قديمة");
    expect(lesson.summary).toContain("لا تقيس هذه الأنشطة دقة نطق المتعلم");
  });

  it("يوضح أن أسماء التهجئة في الحوار تقليدية، ويوفق تعليمة w1 مع الاسم المقبول", () => {
    const r2 = lesson.reading?.questions.find((question) => question.id === "r2");
    expect(r2?.explanation).toContain("تقليدي");
    expect(r2?.explanation).toContain("DIN 5009");
    const w1 = lesson.writing.find((task) => task.id === "w1");
    expect(w1?.instructionDe).toContain("Sami");
    expect(w1?.instructionAr).toContain("Sami");
  });

  it("هدف الحروف المعلمة له دليل كتابي مستقل على ö عبر schön/schon", () => {
    const e16 = lesson.practiceBank.find((task) => task.id === "e16");
    expect(e16?.type).toBe("fill-blank");
    if (e16?.type === "fill-blank") {
      expect(e16.template).toContain("sch___n");
      expect(e16.blanks[0]?.correct).toBe("ö");
      expect(e16.blanks[0]?.options).toEqual(["ö", "o"]);
    }
    expect(lesson.lernziele.find((goal) => goal.id === "z2")?.evidence?.exerciseIds).toContain("e16");
  });

  it("أنماط z3 الموسعة وأهداف z4 مرتبطة بما تختبره فعلاً", () => {
    const e15 = lesson.practiceBank.find((task) => task.id === "e15");
    expect(e15?.type).toBe("matching");
    if (e15?.type === "matching") {
      expect(e15.pairs.map(({ left }) => left)).toEqual(expect.arrayContaining(["äu", "sp-", "st-"]));
    }
    expect(lesson.lernziele.find((goal) => goal.id === "z3")?.evidence?.exerciseIds).toContain("e12");
    expect(lesson.lernziele.find((goal) => goal.id === "z4")?.evidence?.exerciseIds).toEqual(["e8"]);
  });

  it("كل هدف مرتبط بمهام موجودة فعلاً ويحمل وصف أداء", () => {
    const known = knownTaskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references missing ${id}`).toBe(true);
      }
      expect(goal.evidence?.labelAr.length ?? 0).toBeGreaterThan(20);
    }
  });

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة تقع ضمن المدى", () => {
    for (const task of [...lesson.practiceBank, ...lesson.miniTest]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
    expect(practiceIds().length).toBeGreaterThan(0);
  });
});
