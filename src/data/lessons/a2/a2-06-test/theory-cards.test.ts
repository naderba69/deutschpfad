/**
 * a2-06 — ادّعاءاتُ النظرية وتصنيفاتُها وأمثلةُها ونطقُها بـIPA وبطاقاتُها · الملاحظةُ الثقافية والوساطةُ وفروعُ التفاعل بلا ادّعاء دليلٍ في الكلام (جزء من تدقيق الدرس)
 * فُصل من a2-06.test.ts في الدفعة 105 (سقف الحجم: لا ملف فوق 600 سطر).
 * كتل `it` منقولة حرفياً؛ والثوابت والدوال المشتركة في `./fixtures.ts`.
 */

import { describe, expect, it } from "vitest";
import { lessonA206 } from "@/data/lessons/a2/a2-06";
import { task } from "./fixtures";
import { ids } from "./fixtures";

describe("A2-06 audited lesson", () => {
  it("checks theory claims, classifications, examples, pronunciation IPA, and all flashcards", () => {
    expect(ids(lessonA206.theory)).toEqual(["t1", "t2"]);
    expect(lessonA206.theory.map((block) => block.examples.length)).toEqual([6, 6]);
    expect(lessonA206.theory.map((block) => block.commonMistakes.length)).toEqual([3, 3]);
    for (const block of lessonA206.theory) {
      expect(block.explanationAr.length).toBeGreaterThanOrEqual(900);
      expect(block.explanationAr.length).toBeLessThanOrEqual(2800);
      expect(block.explanationAr.split(/\n\s*\n/).filter((paragraph) => paragraph.trim())).toHaveLength(3);
      expect(block.whyAr.length).toBeGreaterThanOrEqual(250);
      expect(block.comparisonWithArabic.length).toBeGreaterThanOrEqual(250);
      expect(block.relatedRuleComparison?.content.length).toBeGreaterThan(100);
      expect(block.examples.every((example) => example.de.trim() && example.ar.trim())).toBe(true);
      expect(
        block.commonMistakes.every(
          (mistake) =>
            mistake.wrong &&
            mistake.right &&
            mistake.whyAr.length > 60 &&
            typeof mistake.classification === "string" &&
            ["error", "contextual-alternative", "pedagogical-simplification"].includes(
              mistake.classification,
            ),
        ),
      ).toBe(true);
    }
    expect(lessonA206.theory[0].commonMistakes.map((mistake) => mistake.classification)).toEqual([
      "error",
      "error",
      "contextual-alternative",
    ]);
    expect(lessonA206.theory[0].commonMistakes[2].whyAr).toContain("ليست خطأً عاماً");
    expect(lessonA206.theory[0].explanationAr).toContain("من دون dass");
    expect(lessonA206.theory[0].explanationAr).toContain("ولا تؤكد أن المجيء وقع فعلاً");
    expect(lessonA206.theory[0].relatedRuleComparison?.content).toContain("ob");
    expect(lessonA206.theory[1].relatedRuleComparison?.content).toContain("denn");
    expect(lessonA206.theory[1].explanationAr).toContain("Nachfeld");
    expect(lessonA206.theory[0].table?.rows).toHaveLength(6);
    expect(lessonA206.theory[1].table?.rows).toHaveLength(7);

    expect(lessonA206.pronunciation.items.map((item) => item.de)).toEqual([
      "die Zeitung",
      "das Fernsehen",
      "die Nachricht",
      "die Werbung",
      "das Radio",
      "die Meinung",
    ]);
    expect(
      lessonA206.pronunciation.items.map((item) => item.note.match(/IPA(?: للاسم| شائع)?: \[([^\]]+)\]/)?.[1]),
    ).toEqual([
      "ˈt͡saɪ̯tʊŋ",
      "ˈfɛʁnˌzeːən",
      "ˈnaːxˌʁɪçt",
      "ˈvɛʁbʊŋ",
      "ˈʁaːdi̯o",
      "ˈmaɪ̯nʊŋ",
    ]);
    expect(lessonA206.pronunciation.items[2].note).toContain("[x]");
    expect(lessonA206.pronunciation.items[2].note).toContain("[ç]");
    expect(lessonA206.pronunciation.items[4].note).toContain("إقليمياً");
    expect(lessonA206.pronunciation.tip).toContain("IPA");
    expect(lessonA206.pronunciation.shadowing).toHaveLength(4);
    expect(lessonA206.pronunciation.shadowing?.[0].ar).toBe("أحب مشاهدة التلفاز.");
    expect(lessonA206.pronunciation.shadowing?.map((line) => line.de)).toEqual([
      "Ich sehe gern fern.",
      "Ich lese die Zeitung.",
      "Ich glaube, dass das stimmt.",
      "Die Nachrichten sind wichtig.",
    ]);

    expect(ids(lessonA206.flashcards)).toEqual(
      Array.from({ length: 12 }, (_, index) => `fc${index + 1}`).sort(),
    );
    expect(lessonA206.flashcards).toEqual([
      { id: "fc1", de: "das Fernsehen", ar: "التلفاز / وسيلة التلفزيون", example: "Ich finde, dass das Fernsehen manchmal zu viel Werbung zeigt.", exampleAr: "أرى أن التلفاز يعرض أحياناً إعلانات كثيرة.", level: "A2" },
      { id: "fc2", de: "die Zeitung", ar: "الصحيفة", example: "Ich lese die Zeitung gern.", exampleAr: "أحب قراءة الصحيفة.", level: "A2" },
      { id: "fc3", de: "das Internet", ar: "الإنترنت", example: "Ich finde, dass das Internet praktisch ist.", exampleAr: "أرى أن الإنترنت عملي.", level: "A2" },
      { id: "fc4", de: "die Nachrichten", ar: "الأخبار", example: "Ich glaube, dass die Nachrichten wichtig sind.", exampleAr: "أعتقد أن الأخبار مهمة.", level: "A2" },
      { id: "fc5", de: "die Werbung", ar: "الدعاية / الإعلان", example: "Im Fernsehen läuft Werbung.", exampleAr: "تُعرض إعلانات في التلفاز.", level: "A2" },
      { id: "fc6", de: "dass", ar: "أنّ / أداة ربط", example: "Ich glaube, dass es stimmt.", exampleAr: "أعتقد أن ذلك صحيح.", level: "A2" },
      { id: "fc7", de: "Ich finde / glaube / denke", ar: "أرى / أعتقد / أظن", example: "Ich finde, dass der Artikel interessant ist.", exampleAr: "أرى أن المقال مثير للاهتمام.", level: "A2" },
      { id: "fc8", de: "die Meinung", ar: "الرأي", example: "Einige Anwohner haben verschiedene Meinungen.", exampleAr: "لدى بعض السكان آراء مختلفة.", level: "A2" },
      { id: "fc9", de: "der Artikel", ar: "المقال", example: "Ich finde, dass der Artikel interessant ist.", exampleAr: "أرى أن المقال مثير للاهتمام.", level: "A2" },
      { id: "fc10", de: "die Redaktion", ar: "هيئة التحرير", example: "Die Redaktion prüft jede Nachricht.", exampleAr: "تراجع هيئة التحرير كل خبر.", level: "A2" },
      { id: "fc11", de: "der Fahrradweg", ar: "مسار الدراجات", example: "Einige Anwohner finden, dass der Fahrradweg sicher ist.", exampleAr: "يرى بعض السكان أن مسار الدراجات آمن.", level: "A2" },
      { id: "fc12", de: "herunterladen", ar: "ينزّل من الإنترنت", example: "Man kann die Zeitung kostenlos herunterladen.", exampleAr: "يمكن تنزيل الصحيفة مجاناً.", level: "A2" },
    ]);
  });

  it("checks the cultural note, mediation, and each optional interaction response without claiming speaking evidence", () => {
    expect(lessonA206.fehlerUndTipps?.mistakes.map((item) => item.classification)).toContain(
      "pedagogical-simplification",
    );
    expect(lessonA206.fehlerUndTipps?.culturalNote).toEqual({
      title: "الإعلام وتمويله — معلومة محدودة",
      content:
        "يذكر موقع ARD أن البرنامج المشترك لـARD يعتمد أساساً على مساهمة البث، وأن إيرادات الإعلان جزء صغير من ميزانيته؛ كما أن الإعلانات التلفزيونية على Das Erste وZDF مقيّدة زمنياً وتنظيمياً. لذلك لا نقول إن كل الإعلام العام بلا إعلانات، ولا نعمم عادات القراءة أو تفضيلات صحيفة بعينها على جميع الناس. تتغير التفاصيل التنظيمية، وهذا مثال سياقي لا وصف ثابت لكل وسيلة إعلام.",
    });
    expect(lessonA206.mediation).toEqual([
      {
        id: "med-a2-06-1",
        type: "summarize-de-to-ar",
        titleAr: "لخّص خبراً افتراضياً بالعربية لصديق",
        sourceDe:
          "Die Stadt baut einen neuen Park. Die Bauarbeiten beginnen im Mai und dauern ein Jahr. Im Park gibt es später viele Bäume und einen Spielplatz.",
        taskAr:
          "انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا ستبني المدينة؟ متى تبدأ الأعمال وكم تستغرق؟ وماذا يوجد في الحديقة؟",
        modelAnswerAr:
          "«تبني المدينة حديقة جديدة. تبدأ أعمال البناء في مايو وتستغرق سنة. وستكون في الحديقة أشجار كثيرة وملعب.»",
        keyPointsAr: [
          "نقل فكرة بناء حديقة جديدة",
          "ذكر موعد بدء الأعمال (مايو) ومدتها (سنة)",
          "ذكر الأشجار والملعب",
        ],
      },
    ]);
    expect(lessonA206.interaction).toHaveLength(1);
    const task = lessonA206.interaction?.[0];
    expect(task?.rounds).toHaveLength(3);
    for (const round of task?.rounds ?? []) {
      expect(round.options).toHaveLength(2);
      expect(round.options.every((option) => option.best)).toBe(true);
      expect(round.options.every((option) => option.de && option.ar && option.replyDe && option.replyAr)).toBe(true);
    }
    expect(task?.scenarioDe).toBe("Ein Freund fragt nach deiner Meinung zu sozialen Medien.");
    expect(task?.strategyAr).toContain("لا تمثل قياساً لأداء كلامي أو نطق فعلي");
    expect(lessonA206.lernziele.some((goal) => /sprechen|aussprechen|telefonieren/i.test(goal.de))).toBe(false);
  });
});
