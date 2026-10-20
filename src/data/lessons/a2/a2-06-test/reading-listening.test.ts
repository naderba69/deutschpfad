/**
 * a2-06 — نصُّ القراءة الكامل وترجمتُه المصطفّة ومسردُه ومفاتيحُه الأربعة · أسطرُ الاستماع وترجماتُها ومعرّفاتُها قبل النصّ المكتوب (جزء من تدقيق الدرس)
 * فُصل من a2-06.test.ts في الدفعة 105 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA206 } from "@/data/lessons/a2/a2-06";
import { task } from "./fixtures";

describe("A2-06 audited lesson", () => {
  it("checks the full reading text, aligned Arabic, glossary, four keys, and learner-facing details", () => {
    const reading = lessonA206.reading;
    if (!reading) throw new Error("A2-06 must keep its reading");
    expect(reading.id).toBe("read-a2-06");
    expect(reading.titleDe).toBe("Nachrichten aus dem Viertel");
    expect(reading.titleAr).toContain("نص تعليمي متخيّل");
    expect(reading.textType).toBe("artikel");
    expect(reading.paragraphs).toEqual([
      "Die kleine Zeitung „Unser Viertel“ erscheint jeden Freitag. Sie berichtet über neue Geschäfte, Veranstaltungen und Menschen aus der Stadt. Die Redakteurin Leyla sagt, dass viele Bewohner gern kurze Nachrichten über ihre Nachbarn lesen.",
      "In dieser Woche gibt es einen Bericht über einen neuen Fahrradweg. Einige Anwohner finden, dass der Weg sicher ist. Andere glauben, dass noch mehr Lampen nötig sind. Die Stadt möchte die Meinungen sammeln und später eine Entscheidung treffen.",
      "Leyla schreibt auch über ein Sommerfest am Samstag. Es beginnt um vier Uhr im Park; alle Familien sind willkommen. Die Zeitung kann man im Café lesen oder kostenlos auf der Internetseite herunterladen.",
      "Viele Menschen aus dem Viertel besuchen Veranstaltungen. Sie schreiben der Redaktion darüber und schicken einige Fotos. Dazu schreiben sie kurze Sätze über ihre Eindrücke. Leyla prüft jede Nachricht. Danach erscheint die Nachricht in der Zeitung. So finden auch Menschen ohne soziale Medien wichtige Informationen aus dem Viertel. Für die Zukunft plant die Zeitung außerdem eine Seite mit Tipps für Familien und Jugendliche.",
    ]);
    expect(reading.paragraphsAr).toEqual([
      "تصدر الصحيفة الصغيرة «حيّنا» كل يوم جمعة. وتنشر أخباراً عن المتاجر الجديدة والفعاليات والأشخاص في المدينة. تقول المحررة ليلى إن كثيراً من السكان يحبون قراءة أخبار قصيرة عن جيرانهم.",
      "يوجد هذا الأسبوع تقرير عن مسار جديد للدراجات. يرى بعض سكان المنطقة أن المسار آمن. ويعتقد آخرون أن هناك حاجة إلى مزيد من المصابيح. تريد المدينة جمع الآراء ثم اتخاذ قرار لاحقاً.",
      "وتكتب ليلى أيضاً عن مهرجان صيفي يوم السبت. يبدأ في الساعة الرابعة في الحديقة، وكل العائلات مرحب بها. ويمكن قراءة الصحيفة في المقهى أو تنزيلها مجاناً من الموقع الإلكتروني.",
      "يزور كثير من سكان الحي فعاليات. ويكتبون إلى هيئة التحرير عنها ويرسلون بعض الصور. ويضيفون جملاً قصيرة عن انطباعاتهم. تراجع ليلى كل خبر، ثم يظهر الخبر في الصحيفة. وهكذا يجد أشخاص لا يستخدمون وسائل التواصل معلومات مهمة عن الحي. وتخطط الصحيفة أيضاً لصفحة فيها نصائح للعائلات والشباب في المستقبل.",
    ]);
    expect(reading.paragraphs).toHaveLength(4);
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    expect(reading.paragraphs.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphsAr.every((paragraph) => paragraph.trim().length > 0)).toBe(true);
    expect(reading.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(150);
    expect(reading.glossary.map((entry) => entry.de)).toEqual([
      "erscheinen",
      "die Redakteurin",
      "der Bewohner",
      "der Anwohner",
      "der Fahrradweg",
      "nötig",
      "die Veranstaltung",
      "die Redaktion",
      "herunterladen",
      "der Eindruck",
    ]);
    const article = reading.paragraphs.join(" ").toLocaleLowerCase("de");
    for (const entry of reading.glossary) {
      expect(entry.ar.trim(), entry.de).not.toBe("");
      expect(entry.noteAr?.trim().length, entry.de).toBeGreaterThan(15);
      const head = entry.de.replace(/^(der|die|das)\s+/i, "").split(/[\s,(/]/)[0];
      const stem = head.slice(0, Math.max(4, head.length - 3)).toLocaleLowerCase("de");
      expect(article, entry.de).toContain(stem);
    }
    expect(reading.questions.map((question) => [question.id, question.paragraph])).toEqual([
      ["rq1", 1],
      ["rq2", 2],
      ["rq3", 3],
      ["rq4", 4],
    ]);
    expect(reading.questions.find((question) => question.id === "rq2")).toMatchObject({
      paragraph: 2,
      questionDe: "Wie finden einige Anwohner den neuen Fahrradweg?",
      correctIndex: 0,
    });
    expect(reading.questions.find((question) => question.id === "rq3")?.questionDe).toBe(
      "Wie kann man die Zeitung online bekommen?",
    );
    expect(reading.questions.find((question) => question.id === "rq4")?.questionDe).toBe(
      "Was macht Leyla zuerst mit jeder Nachricht?",
    );
    for (const question of reading.questions) {
      expect(question.options).toHaveLength(4);
      expect(question.questionAr?.trim().length).toBeGreaterThan(0);
      expect(question.explanation.trim().length).toBeGreaterThanOrEqual(20);
      expect(question.paragraph).toBeGreaterThanOrEqual(1);
      expect(question.paragraph).toBeLessThanOrEqual(reading.paragraphs.length);
      const answer = question.options[question.correctIndex];
      if (answer.length > 45) expect(reading.paragraphs.join(" ")).not.toContain(answer);
    }
    expect(reading.redemittel).toEqual([
      { de: "Die Zeitung berichtet über …", ar: "تنشر الصحيفة أخباراً عن …" },
      { de: "Einige Anwohner finden, dass …", ar: "يرى بعض سكان المنطقة أن …" },
      { de: "Die Stadt möchte die Meinungen sammeln.", ar: "تريد المدينة جمع الآراء." },
      {
        de: "Man kann die Zeitung kostenlos herunterladen.",
        ar: "يمكن تنزيل الصحيفة مجاناً.",
      },
    ]);
    expect(reading.discussionAr?.length).toBeGreaterThanOrEqual(40);
    expect(reading.discussionAr).toContain("لا يُصحح آلياً");
    expect(reading.discussionAr).toContain("خبراً محلياً متخيلاً");
  });

  it("checks every listening line and translation, question key, and pre-transcript task identifier", () => {
    expect(lessonA206.listening.items.map((item) => [item.id, item.title, item.lines.length])).toEqual([
      ["l1", "آراء عن وسائل الإعلام", 7],
      ["l2", "اختيارات للقراءة", 4],
    ]);
    const expectedLines = [
      [
        "l1",
        [
          ["Mona", "Ich sehe jeden Tag fern. Ich finde, dass die Serien gut sind.", "أشاهد التلفاز كل يوم. أرى أن المسلسلات جيدة."],
          ["Karim", "Ich denke, dass im Fernsehen zu viel Werbung läuft.", "أظن أن في التلفاز إعلانات كثيرة جداً."],
          ["Mona", "Ja, aber ich lese auch die Zeitung.", "نعم، لكنني أقرأ الصحيفة أيضاً."],
          ["Karim", "Ich lese lieber Nachrichten im Internet. Ich finde, dass das Internet praktisch ist.", "أفضل قراءة الأخبار على الإنترنت. وأرى أن الإنترنت عملي."],
          ["Mona", "Das kann ich verstehen. Im Internet finde ich oft schnell Informationen.", "أتفهم ذلك. وغالباً ما أجد معلومات بسرعة على الإنترنت."],
          ["Karim", "Und soziale Medien? Ich glaube, dass sie viel Zeit kosten.", "وماذا عن وسائل التواصل؟ أعتقد أنها تستهلك وقتاً كثيراً."],
          ["Mona", "Ja, aber dort findet man auch nützliche Informationen.", "نعم، لكن المرء يجد فيها أيضاً معلومات مفيدة."],
        ],
      ],
      [
        "l2",
        [
          ["Lehrer", "Was liest du gern, Anna?", "ماذا تحبين أن تقرئي يا آنا؟"],
          ["Anna", "Ich lese gern die Zeitung. Ich finde, dass die Artikel interessant sind.", "أحب قراءة الصحيفة. وأرى أن المقالات ممتعة."],
          ["Lehrer", "Und du, Sami?", "وأنت يا سامي؟"],
          ["Sami", "Ich lese Nachrichten im Internet. Ich finde, dass das praktisch ist.", "أقرأ الأخبار على الإنترنت. وأجد ذلك عملياً."],
        ],
      ],
    ] as const;
    expect(
      lessonA206.listening.items.map((item) => [
        item.id,
        item.lines.map((line) => [line.speaker, line.de, line.ar]),
      ]),
    ).toEqual(expectedLines);
    expect(
      lessonA206.listening.items.every((item) =>
        item.lines.every((line) => line.speaker.trim() && line.de.trim() && line.ar.trim()),
      ),
    ).toBe(true);
    expect(lessonA206.listening.questions.map((question) => [question.id, question.itemId])).toEqual([
      ["q1", "l1"],
      ["q2", "l1"],
      ["q3", "l2"],
    ]);
    expect(lessonA206.listening.questions.find((question) => question.id === "q2")?.questionDe).toBe(
      "Wo liest Karim lieber Nachrichten?",
    );
    expect(
      lessonA206.lernziele.find((goal) => goal.id === "z4")?.evidence?.taskIds,
    ).not.toContain("listening-transcript:a2-06:l1:q1");
    expect(lessonA206.lernziele.find((goal) => goal.id === "z4")?.ar).toContain(
      "قبل كشف التفريغ",
    );
  });
});
