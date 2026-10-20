/**
 * a1-04 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-04.ts في الدفعة 89 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    { id: "z1", de: "Ich kann wichtige Raumwörter verstehen und zuordnen.", ar: "أن أتعرف أسماء الغرف الأساسية وأطابق كل اسم بمعناه.", evidence: { exerciseIds: ["e3"], labelAr: "صِل أسماء الغرف بمعانيها في تمرين المطابقة.", completion: "any-correct" } },
    { id: "z2", de: "Ich kann meine Wohnung beschreiben.", ar: "أن أصف منزلي بجمل بسيطة (Das Zimmer ist groß).", evidence: { exerciseIds: ["w1"], labelAr: "اختر اسماً وصفةً من الكلمات المعطاة، ثم كوّن جملة قصيرة تصف المكان.", completion: "any-correct" } },
    { id: "z3", de: "Ich kann sagen, wo etwas ist: im, in der, auf dem.", ar: "أن أحدد مكان الأشياء بحروف الجر المكانية مع Dativ.", evidence: { exerciseIds: ["w2"], labelAr: "أكمل جمل المكان الثلاث باستعمال im وin der وauf dem.", completion: "any-correct" } },
    { id: "z4", de: "Ich kann fragen: Wo wohnst du? und mit Ich wohne in ... antworten.", ar: "أن أسأل: أين تسكن؟ وأجيب بجملة بسيطة عن مكان سكني.", evidence: { exerciseIds: ["w4"], labelAr: "اكتب سؤالاً عن مكان السكن ثم أجب عنه.", completion: "any-correct" } },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "قل: «الكتاب على الطاولة». الآن لاحظ في العربية: «على» لا تغيّر شيئاً في الكلمة التي بعدها. في الألمانية، حرف الجر المكاني يغيّر أداة الاسم! خمّن: هل نقول auf der Tisch أم auf dem Tisch؟",
    motivatingQuestionDe: "Wo ist das Buch?",
    contextAr:
      "ندخل بيتاً ألمانياً اليوم: نتعلم أسماء الغرف، ثم نكتشف «ظاهرة Dativ» — الحالة التي يطلبها حرفا الجر in وauf عندما نسأل «أين؟».",
    contextDe: "Willkommen in meiner Wohnung!",
    connectionToPreviousAr: "تعلمنا النصب (Akkusativ) بعد الأكل. اليوم حالة جديدة: الجر (Dativ) بعد حروف المكان. ترتيب الحالات: Nominativ → Akkusativ → Dativ.",
    activateVocabulary: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "das Zimmer", ar: "الغرفة" },
      { de: "die Küche", ar: "المطبخ" },
      { de: "wohnen", ar: "يسكن" },
      { de: "das Bett", ar: "السرير" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-03 — الأداة غير المحددة في المفعول به): اختر الصيغة الصحيحة.",
      questionDe: "Ich möchte ___ Apfel.",
      questionAr: "أريد تفاحة.",
      options: ["einen", "einem", "ein", "eine"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «einem» صيغة Dativ؛ و«möchte» يطلب مفعولاً به منصوباً: «einen Apfel».", "لا — «ein» صيغة الرفع؛ والمنصوب المذكر «einen Apfel».", "لا — «eine» للمؤنث؛ و«Apfel» مذكر: «Ich möchte einen Apfel»."],
      explanation: "المذكر في حالة المفعول به: einen Apfel.",
      errorType: "case",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-03 — haben مع الجوع والعطش): أكمل الجملة.",
      template: "Ich ___ Hunger.",
      blanks: [{ correct: "habe", options: ["habe", "bin", "hat", "ist"] }],
      explanation: "مع ich نقول: Ich habe Hunger.",
      errorType: "conjugation",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-02 — الأدوات الملكية mein وmeine): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Das ist meine Bett.",
      wrongWord: "meine",
      correctWord: "mein",
      options: ["mein", "meine", "meinen", "meiner"],
      explanation: "Bett كلمة محايدة (das)، فيكون mein.",
      errorType: "gender",
    },
  ];
