/**
 * a2-11 — الوساطةُ والتفاعل منفصلين عن الأدلة الموضوعية · البطاقات · القراءة الثنائية اللغة ومسردُها · الملاحظة الثقافية المرتبطة بالنصّ القانوني (جزء من تدقيق الدرس)
 * فُصل من a2-11.test.ts في الدفعة 104 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA211 } from "@/data/lessons/a2/a2-11";
import { goal } from "./fixtures";

describe("A2-11 lesson content audit", () => {
  it("keeps mediation self-check and interaction choices separate from objective evidence", () => {
    expect(lessonA211.mediation).toEqual([
      {
        id: "med-a2-11-1",
        type: "relay-instructions",
        titleAr: "اشرح تعليمات نموذج تسجيل افتراضي بالعربية",
        sourceDe: "Anmeldung: Bitte tragen Sie hier Ihren Namen, Ihre Adresse und Ihre Telefonnummer ein. Unterschreiben Sie unten.",
        taskAr: "اشرح في هذا المثال المحدد البيانات التي يطلبها النموذج وموضع التوقيع؛ لا تعمم هذه الحقول على كل استمارة.",
        modelAnswerAr: "«في هذا النموذج، اكتب اسمك وعنوانك ورقم هاتفك، ثم وقّع في الأسفل.»",
        keyPointsAr: ["في هذا المثال: الاسم والعنوان ورقم الهاتف", "ذكر أن التوقيع في الأسفل"],
      },
    ]);
    const interaction = lessonA211.interaction?.[0];
    expect(interaction).toMatchObject({
      id: "int-a2-11-1",
      scenarioAr: "في محاكاة نصية لمكتب خدمة العملاء — اختر رداً على شكوى.",
      scenarioDe: "Im Kundenservice — eine höfliche Beschwerde.",
      strategyAr: "لاحظ كيف تُصاغ الشكوى بوضوح وتهذيب؛ يقتصر هذا النشاط على اختيار رد مكتوب، ولا يقيّم كلاماً حراً.",
    });
    expect(interaction?.rounds).toEqual([
      {
        speakerDe: "Guten Tag, wie kann ich Ihnen helfen?",
        speakerAr: "طاب يومك، كيف يمكنني مساعدتكم؟",
        options: [
          {
            de: "Ich habe vor einer Woche etwas bestellt, aber es ist noch nicht angekommen.",
            ar: "طلبت شيئاً قبل أسبوع ولم يصل بعد.",
            best: true,
            replyDe: "Das tut mir leid. Können Sie mir bitte die Bestellnummer nennen?",
            replyAr: "آسف. هل يمكنكم ذكر رقم الطلب لي من فضلكم؟",
          },
          {
            de: "Ihr Laden ist schrecklich und alles ist kaputt!",
            ar: "متجركم فظيع وكل شيء معطل!",
            best: false,
            replyDe: "Bitte schildern Sie das Problem sachlich, damit wir Ihnen helfen können.",
            replyAr: "من فضلك اشرح المشكلة بهدوء ووضوح كي نتمكن من مساعدتكم.",
          },
        ],
      },
      {
        speakerDe: "Können Sie mir bitte die Bestellnummer nennen?",
        speakerAr: "هل يمكنكم ذكر رقم الطلب لي من فضلكم؟",
        options: [
          {
            de: "Ja, die Nummer ist 12345. Können Sie bitte den Lieferstatus prüfen?",
            ar: "نعم، الرقم 12345. هل يمكنكم التحقق من حالة التوصيل؟",
            best: true,
            replyDe: "Ich prüfe das sofort. Laut aktuellem Status kommt die Lieferung voraussichtlich morgen.",
            replyAr: "سأتحقق الآن. بحسب الحالة الحالية، من المتوقع أن تصل الشحنة غداً.",
          },
          {
            de: "Die Nummer? Das geht Sie nichts an!",
            ar: "رقم الطلب؟ هذا لا يعنيكم!",
            best: false,
            replyDe: "Ohne die Bestellnummer kann ich den Status hier gerade nicht prüfen.",
            replyAr: "من دون رقم الطلب لا أستطيع التحقق من الحالة هنا في الوقت الحالي.",
          },
        ],
      },
    ]);
    for (const round of interaction?.rounds ?? []) {
      expect(round.options.filter(({ best }) => best)).toHaveLength(1);
      expect(round.options.every(({ de, ar, replyDe, replyAr }) => de && ar && replyDe && replyAr)).toBe(true);
    }
    expect(goal("z3").evidence?.exerciseIds).not.toContain("int-a2-11-1");
    expect(goal("z4").evidence?.exerciseIds).not.toContain("med-a2-11-1");
  });

  it("checks all flashcards, their examples, translations, and grammatical forms", () => {
    expect(lessonA211.flashcards.map(({ id, de, ar, example, exampleAr, level }) => ({ id, de, ar, example, exampleAr, level }))).toEqual([
      { id: "fc1", de: "die Post", ar: "خدمة البريد/مكتب البريد بحسب السياق", example: "Die Post ist in der Stadt.", exampleAr: "مكتب البريد في المدينة.", level: "A2" },
      { id: "fc2", de: "der Friseur", ar: "الحلاق", example: "Ich gehe zum Friseur.", exampleAr: "أذهب إلى الحلاق.", level: "A2" },
      { id: "fc3", de: "reparieren", ar: "يصلح", example: "Er repariert das Handy.", exampleAr: "يصلح الهاتف.", level: "A2" },
      { id: "fc4", de: "sich freuen", ar: "يكون مسروراً/يتطلع بحسب السياق", example: "Ich freue mich!", exampleAr: "أنا مسرور!", level: "A2" },
      { id: "fc5", de: "sich ärgern", ar: "ينزعج/يغضب", example: "Er ärgert sich.", exampleAr: "هو منزعج.", level: "A2" },
      { id: "fc6", de: "sich anmelden", ar: "يسجّل/يلتحق بحسب السياق", example: "Ich muss mich anmelden.", exampleAr: "يجب أن أسجل.", level: "A2" },
      { id: "fc7", de: "sich beeilen", ar: "يستعجل", example: "Beeil dich!", exampleAr: "استعجل!", level: "A2" },
      { id: "fc8", de: "sich beschweren", ar: "يشتكي/يقدّم شكوى", example: "Ich möchte mich beschweren.", exampleAr: "أود أن أشتكي.", level: "A2" },
      { id: "fc9", de: "das Formular", ar: "الاستمارة", example: "Das Formular ist lang.", exampleAr: "الاستمارة طويلة.", level: "A2" },
      { id: "fc10", de: "ausfüllen", ar: "يملأ (استمارة)", example: "Ich fülle das Formular aus.", exampleAr: "أملأ الاستمارة.", level: "A2" },
      { id: "fc11", de: "die Anmeldung", ar: "التسجيل/الانتساب بحسب السياق", example: "Die Anmeldung ist jetzt abgeschlossen.", exampleAr: "اكتمل التسجيل الآن.", level: "A2" },
      { id: "fc12", de: "unterschreiben", ar: "يوقّع", example: "Unterschreiben Sie hier.", exampleAr: "تفضّلوا بالتوقيع هنا (صيغة رسمية).", level: "A2" },
      { id: "fc13", de: "die Bank", ar: "البنك", example: "Die Bank ist neben der Post.", exampleAr: "البنك بجانب مكتب البريد.", level: "A2" },
      { id: "fc14", de: "das Geschäft", ar: "المتجر", example: "Das Geschäft ist geöffnet.", exampleAr: "المتجر مفتوح.", level: "A2" },
      { id: "fc15", de: "bezahlen", ar: "يدفع", example: "Ich bezahle an der Kasse.", exampleAr: "أدفع عند الصندوق.", level: "A2" },
    ]);
  });

  /**
   * حارس نصّ القراءة الجديد (المرحلة 5): يمنع أن يُحذف النصّ أو تُفقد
   * ترجمته أو تنفصل مفرداته عن سياقه، ويضمن أن البطاقات التي كانت بلا
   * مرساة (die Bank · das Geschäft · bezahlen) لها الآن موضعٌ في النصّ.
   */
  it("checks the new bilingual reading, glossary anchors, questions, and Redemittel", () => {
    const reading = lessonA211.reading;
    expect(reading).toBeDefined();
    expect(reading?.id).toBe("read-a2-11");
    expect(reading?.textType).toBe("erzaehlung");
    expect(reading?.titleDe).toBe("Ein Tag voller Erledigungen");
    expect(reading?.titleAr).toBe("يوم مليء بالمشاوير");
    expect(reading?.paragraphs).toHaveLength(4);
    expect(reading?.paragraphsAr).toHaveLength(4);
    const text = reading!.paragraphs.join(" ").toLowerCase();
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    expect(wordCount).toBeGreaterThanOrEqual(150);

    expect(reading?.glossary.length).toBeGreaterThanOrEqual(8);
    for (const item of reading!.glossary) {
      const head = item.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLowerCase();
      expect(text.includes(stem), `${item.de} ليست في النصّ`).toBe(true);
      expect(item.ar.trim().length).toBeGreaterThan(1);
    }

    expect(reading?.questions.map(({ id }) => id)).toEqual(["rq1", "rq2", "rq3", "rq4"]);
    for (const question of reading!.questions) {
      expect(question.options.length).toBeGreaterThanOrEqual(3);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
      expect(question.explanation.trim().length).toBeGreaterThan(20);
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph! <= reading!.paragraphs.length).toBe(true);
      const answer = question.options[question.correctIndex];
      expect(text.includes(answer.toLowerCase()) && answer.length > 45, `${question.id} منسوخ حرفياً`).toBe(false);
    }

    expect(reading?.redemittel?.length).toBeGreaterThanOrEqual(4);
    expect(reading?.discussionAr?.trim().length).toBeGreaterThanOrEqual(40);

    for (const anchor of ["bank", "geschäft", "bezahlen"]) {
      expect(text.includes(anchor), `مرساة مفقودة: ${anchor}`).toBe(true);
    }
  });

  it("keeps the cultural/legal note narrow and linked to the direct statute", () => {
    const note = lessonA211.fehlerUndTipps.culturalNote;
    expect(note.title).toBe("تنبيه: أمثلة سياقية ونموذج تدريبي افتراضي");
    expect(note.content).toContain("سؤال البريد في المراجعة");
    expect(note.content).toContain("أمثلة تدريبية");
    expect(note.content).toContain("Anmeldung` هنا تعني تسجيلاً عاماً ولا تعني بذاتها تسجيل عنوان السكن");
    expect(note.content).toContain("مهلة الأسبوعين بالانتقال إلى مسكن والتسجيل لدى سلطة التسجيل");
    expect(note.content).toContain("https://www.gesetze-im-internet.de/bmg/__17.html");
    expect(note.content).not.toMatch(/تفرض كل استمارة|يجب في كل خدمة|كل التسجيلات/);
  });
});
