import {describe, expect, it} from "vitest";

import {DAILY_DIALOGUES} from "@/data/dialogues";
import {DIALOGUES} from "@/data/supplemental/dialogues";

describe("ترجمة سياقات العمل في الحوارات", () => {
  it("يحفظ معنى العمل في المكتب والبقاء في البيت كخيارين مختلفين", () => {
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "b1-01-meinung");
    const options = dialogue?.questions.find(({ de }) => de === "Was ist vielleicht die beste Lösung?")?.options;

    expect(options?.find(({ text }) => text === "Nur im Büro arbeiten")?.ar).toBe("العمل في المكتب فقط");
    expect(options?.find(({ text }) => text === "Nur zu Hause bleiben")?.ar).toBe("البقاء في البيت فقط");
  });

  it("يطابق التأنيث في سبب الانتقال وخياراته", () => {
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "b1-15-wohnungswechsel");
    const options = dialogue?.questions.find(({ de }) => de === "Warum zieht die Person um?")?.options;

    expect(options?.find(({ text }) => text.startsWith("Sie braucht"))?.ar).toBe("تحتاج إلى مكتب خاص للعمل");
    expect(options?.find(({ text }) => text.startsWith("Sie will"))?.ar).toBe("تريد السكن أقرب كثيراً إلى البحر");
    expect(options?.find(({ text }) => text.startsWith("Sie hat"))?.ar).toBe("لديها للأسف خلاف مع الجيران");
  });

  it("ينقل قيد كفاية الراتب ونسبة العمل إليه، ويطابق ضمير صاحبة العمل", () => {
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "b2-03-konflikt");
    const options = dialogue?.questions.flatMap(({ options: items }) => items) ?? [];

    expect(options.find(({ text }) => text === "Das Gehalt ist zu niedrig für die Arbeit")?.ar)
      .toBe("الراتب منخفض جداً قياساً إلى العمل");
    expect(options.find(({ text }) => text === "Es wirkte, als wäre ihre Arbeit nichts wert")?.ar)
      .toBe("بدا وكأن عملها بلا قيمة");
  });

  it("يترجم الخبرة بإدارة المشاريع لا بتقديمها", () => {
    const dialogue = DIALOGUES.find(({ id }) => id === "dl-bewerbung");
    const answer = dialogue?.nodes.n1.choices.find(({ id }) => id === "c1");

    expect(answer?.de).toContain("viele Projekte geleitet");
    expect(answer?.ar).toBe("عملت ثلاث سنوات مبرمجاً وأدرت مشاريع كثيرة.");
  });
});
