/**
 * اختبارات وحدة — المقيّم المحلي للكتابة بمعايير غوته
 */
import {describe, expect, it} from "vitest";

import {evaluateWriting} from "@/lib/writing/goethe-local";

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
