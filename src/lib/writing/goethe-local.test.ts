/**
 * اختبارات وحدة — المقيّم المحلي للكتابة بمعايير غوته
 */
import {describe, expect, it} from "vitest";

import {computeKnownWordRatio, evaluateWriting} from "@/lib/writing/goethe-local";
import {germanCorpus} from "@/lib/writing/__fixtures__/german-corpus";

describe("evaluateWriting — نص ممتاز", () => {
  const good = `Meiner Meinung nach ist das Thema sehr wichtig. Einerseits bringt es Vorteile, andererseits gibt es auch Nachteile. Zum Beispiel hilft es den Menschen im Alltag. Darüber hinaus spielt die Technik eine große Rolle. Zusammenfassend lässt sich sagen, dass wir eine gute Lösung finden müssen.`;
  it("يعطي درجة إجمالية", async () => {
    const r = await evaluateWriting(good, "Forumsbeitrag");
    expect(r.pct).toBeGreaterThanOrEqual(0);
    expect(r.pct).toBeLessThanOrEqual(100);
  });

  it("يحدد حكماً من الخيارات الأربعة", async () => {
    const r = await evaluateWriting(good, "Forumsbeitrag");
    expect(["Sehr gut", "Gut", "Bestanden", "Nicht bestanden"]).toContain(r.verdict);
  });

  it("يكتشف الروابط النصية", async () => {
    const r = await evaluateWriting(good, "Forumsbeitrag");
    expect(r.connectorsFound.length).toBeGreaterThanOrEqual(3);
  });

  it("يعطي المعايير الأربعة من 1 إلى 5", async () => {
    const r = await evaluateWriting(good, "Forumsbeitrag");
    expect(r.scores).toHaveLength(4);
    for (const s of r.scores) {
      expect(s.score).toBeGreaterThanOrEqual(1);
      expect(s.score).toBeLessThanOrEqual(5);
    }
  });
});

describe("evaluateWriting — رسالة رسمية", () => {
  it("تحية رسمية ترفع إنجاز المهمة", async () => {
    const withOpening = `Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil ich ein Problem habe. Mit freundlichen Grüßen`;
    const r = await evaluateWriting(withOpening, "formelle E-Mail");
    expect(r.scores[0].score).toBeGreaterThanOrEqual(2);
  });

  it("نص فارغ → حد أدنى", async () => {
    const r = await evaluateWriting("", "Forumsbeitrag");
    expect(r.words).toBe(0);
    expect(r.scores.every((s) => s.score >= 1)).toBe(true);
  });
});

describe("evaluateWriting — كشف الأخطاء الشائعة", () => {
  it("يرصد «das» بعد Komparativ", async () => {
    const r = await evaluateWriting("Ich bin besser das du denkst.", "Forumsbeitrag");
    expect(r.errors.some((e) => e.note.includes("Komparativ"))).toBe(true);
  });

  it("يرصد «ich haben»", async () => {
    const r = await evaluateWriting("Ich haben ein Auto.", "Forumsbeitrag");
    expect(r.errors.some((e) => e.note.includes("ich habe"))).toBe(true);
  });

  it("يرصد «mit der Auto»", async () => {
    const r = await evaluateWriting("Ich fahre mit der Auto.", "Forumsbeitrag");
    expect(r.errors.some((e) => e.wrong.includes("mit"))).toBe(true);
  });

  it("نص سليم → صفر أخطاء", async () => {
    const clean = "Ich habe ein Auto und fahre mit dem Auto zur Arbeit. Meiner Meinung nach ist das praktisch.";
    const r = await evaluateWriting(clean, "Forumsbeitrag");
    expect(r.errors).toHaveLength(0);
  });
});

describe("evaluateWriting — كولوكيشنات B2 ترفع المفردات", () => {
  it("وجود كولوكيشن يرفع معيار المفردات", async () => {
    const withKollo = "Die Technik spielt eine große Rolle. Man sollte Maßnahmen ergreifen und in Betracht ziehen, dass es eine Rolle spielt.";
    const r = await evaluateWriting(withKollo, "Erörterung");
    expect(r.scores[2].score).toBeGreaterThanOrEqual(3);
  });
});

describe("C-03 — الاختبار العدائي: كلمات وهمية لا تحصل على نجاح", () => {
  it("نص طويل من كلمات وهمية (81 كلمة) لا يحصل على Sehr gut", async () => {
    const gibberish = Array.from({ length: 81 }, (_, i) => `grumpl${i} blarx${i} quork${i}`).join(" ");
    const r = await evaluateWriting(gibberish, "Forumsbeitrag");
    // النسبة يجب ألا تصل 90 (Sehr gut) — بل تنخفض بشدة بفضل فحص الدلالة
    expect(r.pct).toBeLessThan(90);
  });

  it("نص طويل من كلمات وهمية لا يحصل على 85%+ (كان يحصل 85-95%)", async () => {
    const gibberish = Array.from({ length: 165 }, (_, i) => `flurp${i} zant${i} wibble${i}`).join(" ");
    const r = await evaluateWriting(gibberish, "Forumsbeitrag");
    expect(r.pct).toBeLessThan(85);
  });

  it("تكرار كلمة واحدة لا يرفع الحكم", async () => {
    const repeated = Array.from({ length: 60 }, () => "Deutsch").join(" ");
    const r = await evaluateWriting(repeated, "Forumsbeitrag");
    expect(r.pct).toBeLessThan(90);
  });
});

/**
 * ═══ حراسة الإيجابيات الكاذبة (تدقيق 2026-10-15) ═══
 * الكوربوس = كل جملة ألمانية سليمة في دروس المنصة (4152 جملة: أمثلة النظرية،
 * نصوص القراءة، تصحيح الأخطاء، البطاقات، الاستماع، الإملاء، الترتيب، الفراغات).
 * القاعدة الذهبية: أي نمط في COMMON_RULES لا يجوز أن يُرصد في جملة سليمة — وإلا
 * خسر المتعلم نقطة Struktur على كتابة صحيحة.
 */
describe("الكوربوس — لا إيجابيات كاذبة في جمل سليمة", () => {
  it("لا قاعدة شائعة تُرصد في أي جملة من الدروس", async () => {
    const corpus = germanCorpus();
    const falsePositives: string[] = [];
    for (const sentence of corpus) {
      const result = await evaluateWriting(sentence.text);
      if (result.errors.length > 0) {
        falsePositives.push(`${sentence.source} | ${result.errors.map((e) => e.wrong).join(" + ")} | ${sentence.text.slice(0, 90)}`);
      }
    }
    expect(falsePositives).toEqual([]);
    // حجم الكوربوس نفسه محروس — انهياره يعني فقدان التغطية
    expect(corpus.length).toBeGreaterThan(3000);
  }, 120000);

  it("كل مثال خطأ مصمَّم لا يزال يُرصد (لا تراجع في التغطية)", async () => {
    const cases: { label: string; text: string }[] = [
      { label: "«dass» بعد صيغة مقارنة", text: "Ich bin besser dass du denkst." },
      { label: "«dass» بعد صيغة مقارنة", text: "Ich bin besser das du denkst." },
      { label: "أداة خاطئة", text: "Das Mann arbeitet hier." },
      { label: "أداة خاطئة", text: "Der Haus ist groß." },
      { label: "kein في موضع خاطئ", text: "Ich habe kein Schwester." },
      { label: "kein في موضع خاطئ", text: "Ich habe keinen Schwester gesehen." },
      { label: "حالة الجر بعد nach", text: "Nach die Prüfung fahren wir nach Hause." },
      { label: "حالة الجر بعد nach", text: "Ich gehe nach das Essen spazieren." },
      { label: "حالة الجر بعد mit", text: "Ich fahre mit der Auto." },
      { label: "حالة الجر بعد mit", text: "Er kommt mit die Schwester." },
      { label: "«zu... um» غير مكتملة", text: "Ich war zu spät um den Bus zu nehmen." },
      { label: "كتابة الأحرف الألمانية بدون umlaut", text: "Ich moechte fuer dich etwas kaufen." },
      { label: "الفعل ليس في المرتبة الثانية", text: "Danach ich zeige die Lösungen." },
      { label: "الفعل مبكّر في الجملة التابعة", text: "Ich bleibe zu Hause, weil ich bin krank." },
      { label: "seid بدل seit", text: "Ich lerne Deutsch seid zwei Jahren." },
      { label: "بداية الجملة بحرف صغير", text: "Ich gehe heute. morgen komme ich zurück." },
      { label: "اسم مكتوب بحرف صغير", text: "Ich habe ein auto." },
    ];
    const missed: string[] = [];
    for (const c of cases) {
      const result = await evaluateWriting(c.text);
      if (!result.errors.some((e) => e.wrong === c.label)) missed.push(`${c.label} | ${c.text}`);
    }
    expect(missed).toEqual([]);
  }, 60000);
});

describe("C-03 — قاموس الكلمات المعروفة يقرأ بنوك مفردات المنصة", () => {
  it("جملة من مفردات الدروس تُحسب معروفة", async () => {
    // قبل إصلاح 2026-10-15 كان بناء القاموس يفشل صامتاً (مصفوفة مسطّحة تُعامل ككائن
    // وحدات) فتُحسب 0.4 لهذه الجملة — أي عقوبة كاذبة على نص سليم.
    const r = await computeKnownWordRatio("Die Werkstatt repariert das Auto.");
    expect(r.knownRatio).toBeGreaterThan(0.7);
  });

  it("النص الوهمي يبقى غير معروف", async () => {
    const gibberish = Array.from({ length: 40 }, (_, i) => `grumpl${i} blarx${i}`).join(" ");
    const r = await computeKnownWordRatio(gibberish);
    expect(r.knownRatio).toBeLessThan(0.2);
  });
});
