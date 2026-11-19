import fs from "node:fs";
import path from "node:path";

import {describe, expect, it} from "vitest";

import {DAILY_DIALOGUES, DIALOGUE_LEVEL_COUNTS, getDialoguesByLevel} from "@/data/dialogues";
import {isPlayableMp3} from "@/lib/audio/mp3-file";

describe("ترجمة zu klein في حوار إرجاع الملابس", () => {
  it("يميّز المقاس الأصغر من المطلوب عن الوصف المجرد بأنه صغير", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-13-einkaufen-kleidung");
    expect(dialogue?.turns[2]?.ar).toContain("هو أصغر من المطلوب");
    const item = dialogue?.questions[2].options.find((option) => option.correct);
    expect(item?.ar).toBe("إنه أصغر من اللازم.");
    expect(dialogue?.keyVocab.find((entry) => entry.de === "zu klein")?.ar).toBe("أصغر من اللازم");
  });
});

describe("ترجمة neben في مشتت حوار العطل", () => {
  it("لا يحذف معلومة أن المدينة بجانب السوق من ترجمة المشتت", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b1-11-panne");
    const option = dialogue?.questions[0].options.find((candidate) => candidate.text === "In der Stadt neben dem Markt");
    expect(option?.ar).toBe("في المدينة بجانب السوق");
  });
});

describe("مكتبة حوارات الحياة اليومية — 64 حواراً (تفوق Menschen)", () => {
  it("يصوغ دعوة الطعام في حوار الانتقال بجملة ألمانية مكتملة", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b1-15-wohnungswechsel");
    expect(dialogue?.turns.at(-1)?.de).toContain("Ich lade dich danach zum Essen ein.");
    const offer = dialogue?.questions[2].options.find((option) => option.correct);
    expect(offer?.text).toBe("Ihn zum Essen einzuladen");
    expect(offer?.ar).toBe("أن يدعوه إلى الطعام");
  });

  it("يترجم تراكيب العودة إلى المنزل في مشتتات الحوارات كاملةً", () => {
    const findOption = (text: string) => DAILY_DIALOGUES.flatMap((dialogue) => dialogue.questions)
      .flatMap((question) => question.options).find((option) => option.text === text);
    expect(findOption("Nach Hause fahren")?.ar).toBe("العودة إلى البيت بالسيارة");
    expect(findOption("Musik für sich zu Hause")?.ar).toBe("موسيقى لنفسه في البيت");
    expect(findOption("Sie fährt nach Hause und ruht sich erst einmal aus")?.ar)
      .toBe("ستعود إلى البيت وتستريح قليلاً أولاً");
  });

  it("تحتوي 64 حواراً: 16 في كل مستوى", () => {
    expect(DAILY_DIALOGUES.length).toBe(64);
    for (const lv of ["A1", "A2", "B1", "B2"] as const) {
      const expected = 16;
      expect(getDialoguesByLevel(lv).length).toBe(expected);
      expect(DIALOGUE_LEVEL_COUNTS[lv]).toBe(expected);
    }
  });

  it("يترجم خيارات الشكوى في حوار الفندق بحرف الجر المناسب", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b1-03-beschwerde");
    const options = dialogue?.questions[0].options;
    expect(options?.find((item) => item.text === "Über ein schmutziges Zimmer")?.ar).toBe("عن غرفة متسخة");
    expect(options?.find((item) => item.text === "Über das Essen im Restaurant")?.ar).toBe("عن الطعام في المطعم");
    expect(options?.find((item) => item.text === "Über die Parkplätze vor dem Haus")?.ar)
      .toBe("عن مواقف السيارات أمام المنزل");
  });

  it("يسأل سؤال الطعام في حوار المقهى بعربية طبيعية ويطابق طلب الكعكة", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-02-cafe");
    const question = dialogue?.questions.find((item) => item.de === "Was bestellt der Gast zu essen?");
    expect(question?.ar).toBe("ماذا يطلب الزبون ليأكله؟");
    expect(question?.options.find((option) => option.correct)?.text).toBe("Ein Stück Kuchen");
  });

  it("حوار شراء الملابس يطابق أسئلته نصّ الحوار ويصرّح بحدود مصدر الصوت", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-06-kleidung");
    expect(dialogue).toBeDefined();
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.audioNoteAr).toMatch(/مصدر ملفات الصوت.*غير موثّق/);
    expect(dialogue?.turns.map((turn) => turn.de).join(" ")).toContain("Größe M");
    expect(dialogue?.turns.map((turn) => turn.de).join(" ")).toContain("15 Euro");
    expect(dialogue?.turns.map((turn) => turn.de).join(" ")).toContain("Das passt. Ich nehme es!");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text).toBe("Größe M");
    expect(dialogue?.questions[1].options.find((option) => option.correct)?.text).toBe("15 Euro");
    expect(dialogue?.questions[2].options.find((option) => option.correct)?.text).toBe("Das passt. Ich nehme es!");
  });

  it("حوار مكتب السفر يصرّح بحدود مصدر ملفات MP3", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-05-reisebuero");
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.situation).toContain("السعر والتاريخ المذكوران مثالان لا عرض سفر حقيقي");
    expect(dialogue?.audioNoteAr).toContain("مصدرها غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لا أجزم بأنها تسجيلات بشرية أو مولّدة آلياً");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");
  });

  it("حوار السكن يصرّح بأنه خيالي وبحدود مصدر الصوت ويستخدم موعداً طبيعياً", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-04-wohnungssuche");
    expect(dialogue?.situation).toContain("حوار تدريبي خيالي");
    expect(dialogue?.situation).toContain("ليست عرضاً حقيقياً");
    expect(dialogue?.audioNoteAr).toContain("مصدرها غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");
    expect(dialogue?.turns[5].de).toContain("Passt es Ihnen morgen um 16 Uhr?");
    expect(dialogue?.keyVocab.find((item) => item.de === "warm / Warmmiete")?.ar).toContain("التكاليف المدرجة");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text).toBe("700 Euro warm");
  });

  it("ترجمة مشتت الحلوى في حوار المطعم تشمل الكعكة والقهوة كليهما", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-02-restaurant");
    const option = dialogue?.questions[1].options.find((item) => item.text === "Kuchen und Kaffee");
    expect(option?.ar).toBe("كعكة وقهوة");
  });

  it("حوار المطعم التدريبي يصرّح بحدود مصدر الصوت ولا يعمم إجراءات المطاعم", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-02-restaurant");
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.situation).toContain("حوار تدريبي خيالي");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لم يُتحقق مما إذا كانت بشرية أو مولّدة");
    expect(dialogue?.audioNoteAr).toContain("مطابقتها للنص أو جودة النطق");
    expect(dialogue?.turns.map((turn) => turn.de).join(" ")).toContain("Ich nehme das Schnitzel mit Pommes");
  });

  it("حوار البنك يوسم المحاكاة ولا يضيف شروطاً أو حدود ائتمان غير مذكورة", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-07-bank");
    expect(dialogue).toBeDefined();
    expect(dialogue?.situation).toContain("محاكاة افتراضية");
    expect(dialogue?.situation).toContain("لا قائمة متطلبات مصرفية عامة");
    expect(dialogue?.questions[1].de).toBe("Wonach fragt die Mitarbeiterin?");
    expect(dialogue?.questions[1].options.find((option) => option.correct)?.text).toBe("Nach dem Pass");
    expect(dialogue?.questions[2].options.find((option) => option.correct)?.text).toBe("Eine Kreditkarte");
    expect(dialogue?.questions[2].options.some((option) => option.text.includes("Limit"))).toBe(false);
  });

  it("حوار B2-09 يصف مشكلة التدفئة ولا يقرر استحقاقاً قانونياً", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-09-wohnungsvertrag");
    expect(dialogue?.title).toBe("مشكلة في تدفئة الشقة");
    expect(dialogue?.situation).toContain("محاكاة خيالية");
    expect(dialogue?.situation).toContain("لا يحدد الحوار وحده استحقاق تخفيض الإيجار");
    expect(dialogue?.turns[0].de).toContain("Ich möchte mit Ihnen über die Heizung sprechen.");
    expect(dialogue?.turns[1].ar).toContain("فني الصيانة");
    expect(dialogue?.turns[4].de).toContain("für meinen Fall prüfen lassen");
    expect(dialogue?.turns[5].ar).toContain("فني الصيانة");
    expect(dialogue?.keyVocab.find((item) => item.de === "der Handwerker")?.ar).toContain("فني الصيانة");
  });

  it("حوار نقل الشركة من الموارد المرتبطة يصرّح بأنه خيالي وبحدود الصوت", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-15-umzug-firma");
    expect(dialogue?.situation).toContain("محاكاة تدريبية خيالية");
    expect(dialogue?.audioNoteAr).toContain("الأدوار الستة مقاطع TTS مولّدة من النص الحالي");
    expect(dialogue?.audioNoteAr).toContain("وطابقها تفريغ ASR محلي");
    expect(dialogue?.audioNoteAr).toContain("لم يُجر استماع بشري أو تقييم");
    expect(dialogue?.turns[3].de).toContain("Die Installation findet am Wochenende statt.");
    expect(dialogue?.turns[3].ar).toContain("مزود الخدمة");
    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    for (let turn = 1; turn <= 6; turn++) {
      const file = path.join(audioDir, `b2-15-umzug-firma-${turn}.mp3`);
      expect(fs.existsSync(file), `b2-15-umzug-firma-${turn}.mp3`).toBe(true);
      expect(isPlayableMp3(file), `b2-15-umzug-firma-${turn}.mp3`).toBe(true);
    }
  });

  it("حوار B2-10 يصرّح بحدود TTS ويضم مقطعاً صالحاً لكل دور", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-10-international");
    expect(dialogue?.situation).toContain("محاكاة خيالية");
    expect(dialogue?.audioNoteAr).toContain("مولّدة آلياً (TTS) من سطوره الحالية");
    expect(dialogue?.audioNoteAr).toContain("قورنت بتفريغ ASR محلي");
    expect(dialogue?.audioNoteAr).toContain("لم يُجر تقييم سمعي");
    expect(dialogue?.turns).toHaveLength(6);

    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    const files = fs.readdirSync(audioDir)
      .filter((file) => file.startsWith("b2-10-international-") && file.endsWith(".mp3"))
      .sort();
    expect(files).toHaveLength(6);
    for (const file of files) expect(isPlayableMp3(path.join(audioDir, file)), file).toBe(true);
  });

  it("حوار اجتماع الفريق يصرّح بحدود ASR والمراجعة السمعية ويضم ستة ملفات قابلة للفك", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-02-teambesprechung");
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثق");
    expect(dialogue?.audioNoteAr).toContain("ASR محلي بتمريرين");
    expect(dialogue?.audioNoteAr).toContain("لم تُجرَ مراجعة سمعية بشرية");
    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    for (let turn = 1; turn <= 6; turn += 1) {
      const file = path.join(audioDir, `b2-02-teambesprechung-${turn}.mp3`);
      expect(fs.existsSync(file), file).toBe(true);
      expect(isPlayableMp3(file), file).toBe(true);
    }
  });

  it("حوار الإعلام B2-14 يصرّح بمصدر الصوت وحدود التفريغ", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-14-medien");
    expect(dialogue?.situation).toContain("حوار تدريبي متخيّل");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثق");
    expect(dialogue?.audioNoteAr).toContain("Falschinformationen");
    expect(dialogue?.audioNoteAr).toContain("falsche Informationen");
    expect(dialogue?.audioNoteAr).toContain("لم يُجر استماع بشري");
    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    for (let turn = 1; turn <= 6; turn += 1) {
      const file = path.join(audioDir, `b2-14-medien-${turn}.mp3`);
      expect(fs.existsSync(file), file).toBe(true);
      expect(isPlayableMp3(file), file).toBe(true);
    }
  });

  it("حوار المطار B2-13 يقيّد مصدر الصوت ويفصح عن فرق ASR القائم", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-13-flug");
    expect(dialogue?.situation).toContain("لا يضمن الإلغاء وحده تعويضاً");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثق للمقاطع 1–3 و5–6");
    expect(dialogue?.audioNoteAr).toContain("ASR المحلي");
    expect(dialogue?.audioNoteAr).toContain("Uhr");
    expect(dialogue?.audioNoteAr).toContain("لم يُجر استماع بشري");
    expect(dialogue?.audioNoteAr).toContain("لا يقرر استحقاق تعويض فعلي");
    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    for (let turn = 1; turn <= 6; turn += 1) {
      const file = path.join(audioDir, `b2-13-flug-${turn}.mp3`);
      expect(fs.existsSync(file), file).toBe(true);
      expect(isPlayableMp3(file), file).toBe(true);
    }
  });

  it("حوار B2-11 يوسم الأرقام الافتراضية ويضم ستة ملفات MP3 معروفة الحدود", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b2-11-verhandlung-kunde");
    expect(dialogue?.situation).toContain("خيالي");
    expect(dialogue?.situation).toContain("ليست عرضاً تجارياً");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3");
    expect(dialogue?.audioNoteAr).toContain("لا أجزم بأنها تسجيلات بشرية أو مولّدة آلياً");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");

    const audioDir = path.join(process.cwd(), "public", "audio", "dialogues-b2");
    const files = fs.readdirSync(audioDir)
      .filter((file) => file.startsWith("b2-11-verhandlung-kunde-") && file.endsWith(".mp3"))
      .sort();
    expect(files).toHaveLength(6);
    for (const file of files) expect(isPlayableMp3(path.join(audioDir, file)), file).toBe(true);
  });

  it("حوار المحطة الجديد يضم 6 جولات و3 أسئلة فهم", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-16-bahnhof");
    expect(dialogue).toMatchObject({ id: "a1-16-bahnhof", level: "A1", titleDe: "Am Bahnhof" });
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.questions).toHaveLength(3);
    expect(dialogue?.keyVocab.map((item) => item.de)).toContain("der Zug");
  });

  it("حوار الطبيب الافتراضي يصرّح بحدود مصدر MP3 ويحافظ على دور الطبيب", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a2-01-arzt");
    expect(dialogue?.turns).toHaveLength(6);
    expect(dialogue?.situation).toContain("حوار تدريبي افتراضي");
    expect(dialogue?.situation).toContain("لا تشخيص أو نصيحة طبية");
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات MP3 غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص أو جودة النطق");
    expect(dialogue?.turns[5]).toMatchObject({ speaker: "الطبيب", role: "a" });
  });

  it("كل حوار مكتمل: جولات + أسئلة + مفردات", () => {
    const ids = new Set<string>();
    for (const d of DAILY_DIALOGUES) {
      expect(ids.has(d.id)).toBe(false);
      ids.add(d.id);
      expect(d.turns.length).toBeGreaterThanOrEqual(5);
      expect(d.questions.length).toBeGreaterThanOrEqual(2);
      expect(d.keyVocab.length).toBeGreaterThanOrEqual(4);
      // جولات متناوبة a/b (لوضع «دورك»)
      const roles = d.turns.map((t) => t.role);
      expect(roles.includes("a") && roles.includes("b")).toBe(true);
      // كل جولة: ألمانية + عربية + متحدث
      for (const t of d.turns) {
        expect(t.de.trim()).toBeTruthy();
        expect(t.ar.trim()).toBeTruthy();
        expect(t.speaker.trim()).toBeTruthy();
      }
      // أسئلة بخيار صحيح واحد
      for (const q of d.questions) {
        const correct = q.options.filter((o) => o.correct).length;
        expect(correct).toBe(1);
        for (const opt of q.options) {
          expect(opt.explanation?.trim(), `حوار ${d.id}: خيار بلا شرح`).toBeTruthy();
        }
      }
    }
  });

  it("تغطي مواقف الطوارئ (Notfall) و B2 المتقدم", () => {
    const b2 = getDialoguesByLevel("B2");
    const b2Titles = b2.map((d) => d.title);
    expect(b2Titles.some((t) => t.includes("الطوارئ"))).toBe(true);
    expect(b2Titles.some((t) => t.includes("مفاوضة"))).toBe(true);
    expect(b2Titles.some((t) => t.includes("صراع"))).toBe(true);
    expect(b2Titles.some((t) => t.includes("جواز"))).toBe(true);
  });
});

/* ═══════════════════════════════════════════════════════════
   شروح الخيارات — مقاييس دفعة 52 (2026-10-16)
   قياس الحوارات بعد إضافة A1-16 وb2-16 وb1-16 وa2-16 (64 حواراً · 194 سؤالاً · 582 خياراً):
     · شروح الخيارات **الخاطئة** ملاحظات عربية موجزة («لا — قهوة أولاً.») — عُرف
       مقصود لا عيب (لا تُقتبس آلياً)، فلم تُعدّل.
     · شروح الخيارات **الصحيحة** عربية تشرح لماذا — والدليل الألماني هو نصّ
       الخيار نفسه (182/182: صفر خيار صحيح بلا دليل في الشرح ولا في نصّه).
   فيقفل هذا القسم القاعدتين المقاستين: دليل ألماني في الخيار الصحيح، ونصّ
   الجولات ألماني خالص، وأي اقتباس «» في شرح موجود حرفياً في جولات الحوار.
   ═══════════════════════════════════════════════════════════ */
describe("شروح الحوارات — دليل ألماني واقتباس أمين", () => {
  const GERMAN_EVIDENCE = /[A-Za-zÄÖÜäöüß]{3,}/;
  const ARABIC = /[\u0600-\u06FF]/;
  const SPAN = /«([^»]+)»/g;
  const normalize = (s: string) =>
    s
      .replace(/[„“”]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/\s+/g, " ")
      .replace(/[.\s]+$/, "")
      .trim();

  it("كل خيار صحيح: دليله الألماني في شرحه أو في نصّه (لا خيار يُصدَّق بلا دليل)", () => {
    const problems: string[] = [];
    for (const d of DAILY_DIALOGUES) {
      d.questions.forEach((q, i) => {
        q.options
          .filter((o) => o.correct)
          .forEach((o) => {
            const hasEvidence = GERMAN_EVIDENCE.test(o.explanation ?? "") || GERMAN_EVIDENCE.test(o.text);
            if (!hasEvidence) problems.push(`${d.id} سؤال ${i + 1}: «${o.text}» بلا دليل في الشرح ولا في النصّ`);
          });
      });
    }
    expect(problems).toEqual([]);
  });

  it("نصّ الجولات ألماني خالص وترجمته عربية", () => {
    const problems: string[] = [];
    for (const d of DAILY_DIALOGUES) {
      d.turns.forEach((t, i) => {
        if (ARABIC.test(t.de)) problems.push(`${d.id} جولة ${i + 1}: حرف عربي في النصّ الألماني`);
        if (!t.ar.trim()) problems.push(`${d.id} جولة ${i + 1}: ترجمة مفقودة`);
      });
    }
    expect(problems).toEqual([]);
  });

  it("كل اقتباس بين «» في شرح موجود حرفياً في جولات الحوار", () => {
    const problems: string[] = [];
    let spansChecked = 0;
    for (const d of DAILY_DIALOGUES) {
      const turns = normalize(d.turns.map((t) => t.de).join(" "));
      for (const q of d.questions) {
        for (const o of q.options) {
          for (const span of [...(o.explanation ?? "").matchAll(SPAN)].map((m) => normalize(m[1])).filter((s) => GERMAN_EVIDENCE.test(s))) {
            spansChecked += 1;
            if (!turns.includes(span)) problems.push(`${d.id}: «${span}» ليس في الجولات`);
          }
        }
      }
    }
    expect(problems).toEqual([]);
    expect(spansChecked).toBeGreaterThan(30); // حارس غير فارغ
  });
});

describe("مراجعة حوارات A1 الجزء الأول — اتساق الإجابات والترجمة", () => {
  it("لا يضيف تفصيلاً غير مذكور إلى جواب طلب الكعك", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-02-cafe");
    expect(dialogue?.questions[3].de).toBe("Was bestellt der Gast zu essen?");
    expect(dialogue?.questions[3].options.find((option) => option.correct)).toMatchObject({
      text: "Ein Stück Kuchen",
      ar: "قطعة كعك",
    });
  });

  it("يجعل مشتتات سؤال الأشقاء خاطئة بوضوح ويطابق ترجمتها", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-04-familie");
    expect(dialogue?.questions[0].ar).toBe("كم عدد الإخوة والأخوات لدى باول؟");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text)
      .toBe("Einen Bruder und eine Schwester");
    expect(dialogue?.questions[0].options.find((option) => option.text === "Zwei Schwestern und ein Bruder"))
      .toMatchObject({ ar: "أختان وأخ", correct: false });
    expect(dialogue?.questions[0].options.find((option) => option.text === "Zwei Brüder und zwei Schwestern"))
      .toMatchObject({ ar: "أخوان وأختان", correct: false });
    expect(dialogue?.questions[0].options.some((option) => option.text === "Nur einen älteren Bruder"))
      .toBe(false);
    expect(dialogue?.questions[2].options.find((option) => option.text === "Drei Brüder"))
      .toMatchObject({ ar: "ثلاثة إخوة", correct: false });
    expect(dialogue?.questions[1].options.find((option) => option.text === "Köchin")?.ar)
      .toBe("طباخة");
  });

  it("يطابق صيغة التأنيث العربية مع كلمة الحافلة", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-05-uhrzeit");
    expect(dialogue?.turns[2].ar).toBe("شكراً! ومتى تنطلق الحافلة؟");
  });
});

describe("مراجعة حوارات A1 الجزء الثاني — مطابقة الأسئلة والترجمة", () => {
  const expectOptionSet = (
    actual: Array<{text: string; ar: string; correct: boolean}> | undefined,
    expected: Array<{text: string; ar: string; correct: boolean}>,
  ) => {
    expect(actual).toHaveLength(expected.length);
    expect(actual?.map(({text, ar, correct}) => ({text, ar, correct})))
      .toEqual(expect.arrayContaining(expected));
  };
  it("يثبت مقاس القميص وسعره ومعنى ملاءمته", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-06-kleidung");
    expect(dialogue?.questions[0].de).toBe("Welche Größe möchte der Kunde?");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text).toBe("Größe M");
    expect(dialogue?.turns[1].ar).toBe("نعم، أبحث عن تيشيرت.");
    expect(dialogue?.turns[4].de).toContain("Es kostet 15 Euro");
    expect(dialogue?.keyVocab.find((item) => item.de === "das T-Shirt")?.ar).toBe("التيشيرت");
    expect(dialogue?.turns[5].ar).toBe("يناسبني. سآخذه!");
    expect(dialogue?.keyVocab.find((item) => item.de === "Das passt")?.ar).toBe("يناسبني");
  });

  it("يحافظ على عدد الغرف ويصرح بأن المطبخ خارج العدد", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-07-wohnung");
    expect(dialogue?.turns[3].ar).toContain("والمطبخ خارج هذا العدد");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text).toBe("Zwei Zimmer");
    expect(dialogue?.questions[0].options.find((option) => option.text === "Drei Zimmer")?.correct).toBe(false);
    expect(dialogue?.questions[0].options.find((option) => option.text === "Vier Zimmer")?.correct).toBe(false);
    expect(dialogue?.questions[1].options.find((option) => option.correct)?.text).toBe("Im Stadtzentrum");
    expect(dialogue?.questions[1].options.find((option) => option.text === "Am Stadtrand")?.ar).toBe("في ضواحي المدينة");
    expect(dialogue?.questions[2].options.find((option) => option.text === "Ich weiß es nicht."))
      .toMatchObject({ ar: "لا أعرف.", correct: false });
  });

  it("يطابق تهنئة عيد الميلاد ويومه ووقت الحفلة وما سيحضره الضيف", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-08-einladung");
    expect(dialogue?.turns[1].de).toContain("Herzlichen Glückwunsch zum Geburtstag!");
    expect(dialogue?.turns[1].ar).toContain("كل عام وأنت بخير");
    expect(dialogue?.keyVocab.find((item) => item.de === "Herzlichen Glückwunsch zum Geburtstag!")?.ar)
      .toBe("كل عام وأنت بخير!");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text).toBe("Am Samstag");
    expect(dialogue?.turns[4].ar).toContain("السابعة مساءً");
    expect(dialogue?.turns[4].ar).toContain("هل ستحضر شيئاً معك؟");
    expect(dialogue?.turns[5].ar).toBe("سأحضر معي كعكة!");
    expect(dialogue?.questions[1].options.find((option) => option.correct)?.text).toBe("Einen Kuchen");
  });

  it("يسأل عن المكان المذكور لا عن نية غير مصرّح بها، ويطابق إرشادات الطريق", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-09-wegbeschreibung");
    expect(dialogue?.questions[0].de).toBe("Nach welchem Ort fragt die Person?");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.text).toBe("Nach dem Bahnhof");
    expect(dialogue?.turns[5].ar).toBe("العفو!");
    expect(dialogue?.keyVocab.find((item) => item.de === "Gern geschehen!")?.ar).toBe("العفو!");
    expect(dialogue?.questions[2].options.find((option) => option.correct)).toMatchObject({
      text: "Geradeaus, dann rechts",
      ar: "مستقيماً ثم يميناً",
    });
    expect(dialogue?.questions[2].options.filter((option) => !option.correct).map((option) => option.text))
      .toEqual(["Geradeaus, dann links", "Rechts, dann geradeaus"]);
  });

  it("لا يضيف وصف مطعم سريع، ويطابق طلب الطعام وترجمة الإضافات", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-10-essen-bestellen");
    expect(dialogue?.situation).toBe("في مطعم تطلب وجبة");
    expect(dialogue?.turns[0].ar).toBe("مرحباً! ماذا تودّ أن تطلب؟");
    expect(dialogue?.turns[2].ar).toBe("بالجبن أم بالسلامي؟");
    expect(dialogue?.questions[0].options.find((option) => option.correct)?.ar).toBe("بيتزا وكولا");
    expect(dialogue?.questions[0].options.find((option) => option.text === "Einen Salat mit Brot")?.ar)
      .toBe("سلطة مع خبز");
    expect(dialogue?.questions[1].de).toBe("Wie viel kostet das?");
    expect(dialogue?.questions[1].ar).toBe("كم يكلف هذا؟");
    expect(dialogue?.questions[1].options.find((option) => option.correct)?.text).toBe("9 Euro");
  });

  it("يثبت مقابلات أيام الأسبوع في بدائل سؤال عيد الميلاد", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-08-einladung");
    expectOptionSet(dialogue?.questions[0].options, [
      {text: "Am Sonntag", ar: "يوم الأحد", correct: false},
      {text: "Am Montag", ar: "يوم الاثنين", correct: false},
      {text: "Am Samstag", ar: "يوم السبت", correct: true},
    ]);
  });

  it("يثبت ترجمات بدائل ما قد يحضره الضيف", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-08-einladung");
    expectOptionSet(dialogue?.questions[1].options, [
      {text: "Einen Kuchen", ar: "كعكة", correct: true},
      {text: "Blumen", ar: "زهوراً", correct: false},
      {text: "Ein Geschenk", ar: "هدية", correct: false},
    ]);
  });

  it("يثبت مقابلات بدائل من لديه عيد الميلاد", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-08-einladung");
    expectOptionSet(dialogue?.questions[2].options, [
      {text: "Der Gast", ar: "الضيف", correct: false},
      {text: "Der Freund", ar: "الصديق", correct: true},
      {text: "Die Mutter", ar: "الأم", correct: false},
    ]);
  });

  it("يثبت ترجمات الأماكن في بدائل سؤال الطريق", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-09-wegbeschreibung");
    expectOptionSet(dialogue?.questions[0].options, [
      {text: "Nach dem Bahnhof", ar: "عن المحطة", correct: true},
      {text: "Nach dem Supermarkt", ar: "عن السوبرماركت", correct: false},
      {text: "Nach dem Krankenhaus", ar: "عن المستشفى", correct: false},
    ]);
  });

  it("يثبت مقابلات بدائل مدة الوصول ووسيلة النقل", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-09-wegbeschreibung");
    expectOptionSet(dialogue?.questions[1].options, [
      {text: "Zehn Minuten mit dem Auto", ar: "عشر دقائق بالسيارة", correct: false},
      {text: "Fünf Minuten zu Fuß", ar: "خمس دقائق مشياً", correct: true},
      {text: "Dreißig Minuten", ar: "ثلاثون دقيقة", correct: false},
    ]);
  });

  it("يثبت ترجمة بدائل طلب الوجبة في المطعم", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-10-essen-bestellen");
    expectOptionSet(dialogue?.questions[0].options, [
      {text: "Nur eine kleine Pizza", ar: "بيتزا صغيرة فقط", correct: false},
      {text: "Eine Pizza und eine Cola", ar: "بيتزا وكولا", correct: true},
      {text: "Einen Salat mit Brot", ar: "سلطة مع خبز", correct: false},
    ]);
  });

  it("يثبت مطابقة سؤال مكوّن البيتزا وخياراته وترجماتها", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-10-essen-bestellen");
    expect(dialogue?.questions[2].de).toBe("Was möchte der Kunde auf der Pizza?");
    expect(dialogue?.questions[2].ar).toBe("ماذا يريد الزبون على البيتزا؟");
    expectOptionSet(dialogue?.questions[2].options, [
      {text: "Käse", ar: "الجبن", correct: true},
      {text: "Salami", ar: "السلامي", correct: false},
      {text: "Pilze", ar: "الفطر", correct: false},
    ]);
  });

  it("يثبت مبالغ خيارات سؤال الحساب", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-10-essen-bestellen");
    expectOptionSet(dialogue?.questions[1].options, [
      {text: "5 Euro", ar: "5 يورو", correct: false},
      {text: "12 Euro", ar: "12 يورو", correct: false},
      {text: "9 Euro", ar: "9 يورو", correct: true},
    ]);
  });

  it("يثبت عدد الغرف وترجمة البدائل العددية", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-07-wohnung");
    expectOptionSet(dialogue?.questions[0].options, [
      {text: "Drei Zimmer", ar: "ثلاث غرف", correct: false},
      {text: "Zwei Zimmer", ar: "غرفتان", correct: true},
      {text: "Vier Zimmer", ar: "أربع غرف", correct: false},
    ]);
  });

  it("يثبت فرق الاتجاه والترتيب في بدائل إرشاد الطريق", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "a1-09-wegbeschreibung");
    expectOptionSet(dialogue?.questions[2].options, [
      {text: "Geradeaus, dann links", ar: "مستقيماً ثم يساراً", correct: false},
      {text: "Rechts, dann geradeaus", ar: "يميناً ثم مستقيماً", correct: false},
      {text: "Geradeaus, dann rechts", ar: "مستقيماً ثم يميناً", correct: true},
    ]);
  });

  it("يفحص بنية جميع الحوارات الخمسة وكل سؤال وخيار وشرح ومفردة مفتاحية", () => {
    const ids = [
      "a1-06-kleidung",
      "a1-07-wohnung",
      "a1-08-einladung",
      "a1-09-wegbeschreibung",
      "a1-10-essen-bestellen",
    ];
    const dialogues = ids.map((id) => DAILY_DIALOGUES.find((item) => item.id === id));

    expect(dialogues.every(Boolean)).toBe(true);
    expect(dialogues.map((dialogue) => dialogue!.turns.length)).toEqual([6, 6, 6, 6, 6]);
    expect(dialogues.map((dialogue) => dialogue!.questions.length)).toEqual([3, 3, 3, 3, 3]);
    expect(dialogues.map((dialogue) => dialogue!.keyVocab.length)).toEqual([5, 6, 5, 5, 5]);

    for (const dialogue of dialogues) {
      expect(dialogue!.title.trim()).not.toBe("");
      expect(dialogue!.titleDe.trim()).not.toBe("");
      expect(dialogue!.situation.trim()).not.toBe("");
      for (const turn of dialogue!.turns) {
        expect(turn.de.trim()).not.toBe("");
        expect(turn.ar.trim()).not.toBe("");
        expect(turn.speaker.trim()).not.toBe("");
      }
      for (const question of dialogue!.questions) {
        expect(question.de.trim()).not.toBe("");
        expect(question.ar.trim()).not.toBe("");
        expect(question.options).toHaveLength(3);
        expect(question.options.filter((option) => option.correct)).toHaveLength(1);
        for (const option of question.options) {
          expect(option.text.trim()).not.toBe("");
          expect(option.ar.trim()).not.toBe("");
          expect(option.explanation).toEqual(expect.any(String));
          expect(option.explanation?.trim()).not.toBe("");
        }
      }
      for (const item of dialogue!.keyVocab) {
        expect(item.de.trim()).not.toBe("");
        expect(item.ar.trim()).not.toBe("");
      }
    }
  });
});
