/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — كتابة B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~30 دقيقة · الحد الأدنى 80 كلمة لكل مهمة (مستوى B1).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const B1_MODEL2_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — E-Mail an den Kursanbieter",
    titleAr: "الجزء 1 — بريد إلكتروني إلى مزوّد الدورة",
    minutes: 15,
    points: 50,
    aufgabeDe:
      "Sie haben einen Online-Deutschkurs gebucht, aber die Tonqualität ist bei den Live-Stunden schlecht, und die Aufnahmen werden nicht hochgeladen. " +
      "Schreiben Sie eine E-Mail an die Sprachschule Lingua: Beschreiben Sie das Problem, sagen Sie, was Sie erwarten, und fragen Sie nach einer Lösung oder Rückerstattung.",
    aufgabeAr:
      "حجزت دورة ألمانية عبر الإنترنت، لكن جودة الصوت في الحصص المباشرة سيئة، والتسجيلات لا تُرفع." +
      "اكتب بريداً إلكترونياً إلى مدرسة اللغات «لينغوا»: صف المشكلة، واذكر ما تتوقعه، واسأل عن حل أو إعادة المبلغ.",
    minWords: 80,
    requires: [
      { de: "Das Problem beschreiben", ar: "وصف المشكلة" },
      { de: "Erwartungen nennen", ar: "ذكر التوقعات" },
      { de: "Nach einer Lösung fragen", ar: "السؤال عن حل" },
      { de: "Höfliche Form wahren", ar: "الحفاظ على الصيغة المهذبة" },
    ],
    struktur: [
      "Anrede (Sehr geehrte Damen und Herren,)",
      "Grund der E-Mail (Kursnummer nennen)",
      "Problem im Detail",
      "Forderung / Erwartung",
      "Frage und Gruß",
    ],
    redemittel: [
      "Sehr geehrte Damen und Herren,",
      "ich habe am 5. Mai den Kurs B1 online gebucht.",
      "Leider ist die Tonqualität so schlecht, dass …",
      "Ich erwarte, dass …",
      "Könnten Sie mir bitte mitteilen, ob …?",
      "Mit freundlichen Grüßen",
    ],
  },
  {
    teil: 2,
    title: "Teil 2 — Meinung im Forum",
    titleAr: "الجزء 2 — رأي في منتدى",
    minutes: 15,
    points: 50,
    aufgabeDe:
      "In einem Forum diskutiert man: „Sollen Arbeitgeber das Homeoffice vorschreiben?“ Schreiben Sie einen Beitrag: Nennen Sie Ihre Meinung mit zwei Gründen, " +
      "gehen Sie auf ein Gegenargument ein und beenden Sie mit einem Fazit.",
    aufgabeAr:
      "في منتدى يُناقش السؤال: «هل يجب أن تفرض جهات العمل نظام العمل من المنزل؟» اكتب مشاركة: اذكر رأيك بسببين، وتناول حجة مخالفة، واختم بخلاصة.",
    minWords: 80,
    requires: [
      { de: "Eigene Meinung nennen", ar: "ذكر رأي شخصي" },
      { de: "Zwei Gründe anführen", ar: "سوق سببان" },
      { de: "Auf ein Gegenargument eingehen", ar: "تناول حجة معارضة" },
      { de: "Ein Fazit ziehen", ar: "الخروج بخلاصة" },
    ],
    struktur: ["Einleitung (Thema)", "Meinung + zwei Gründe", "Gegenargument und Erwiderung", "Fazit (Zusammenfassend …)"],
    redemittel: [
      "Meiner Meinung nach …",
      "Erstens … zweitens …",
      "Man könnte einwenden, dass …",
      "Allerdings …",
      "Zusammenfassend lässt sich sagen, dass …",
    ],
  },
];
