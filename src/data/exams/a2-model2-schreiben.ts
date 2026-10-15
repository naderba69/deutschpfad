/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — كتابة A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~30 دقيقة · الحد الأدنى 40 و60 كلمة (مستوى A2).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const A2_MODEL2_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Nachricht an die Nachbarin",
    titleAr: "الجزء 1 — رسالة إلى الجارة",
    minutes: 12,
    points: 50,
    aufgabeDe:
      "Ihre Nachbarin Frau Sommer hat Ihnen geholfen, als Sie krank waren. Schreiben Sie ihr eine Nachricht: Bedanken Sie sich, sagen Sie, wie es Ihnen jetzt geht, und laden Sie sie zum Kaffee ein.",
    aufgabeAr:
      "جارتك السيدة سومر ساعدتك حين كنت مريضاً. اكتب لها رسالة: اشكرها، وقل كيف حالك الآن، وادعُها إلى فنجان قهوة.",
    minWords: 40,
    requires: [
      { de: "Danken", ar: "الشكر" },
      { de: "Über die Gesundheit berichten", ar: "الإخبار عن الحال الصحية" },
      { de: "Eine Einladung aussprechen", ar: "توجيه دعوة" },
    ],
    struktur: ["Anrede (Liebe Frau Sommer,)", "Dank mit Grund", "Wie es Ihnen jetzt geht", "Einladung mit Vorschlag", "Gruß"],
    redemittel: ["Liebe Frau Sommer,", "Vielen Dank für Ihre Hilfe.", "Mir geht es wieder besser.", "Hätten Sie am Sonntag Zeit für einen Kaffee?", "Viele Grüße"],
  },
  {
    teil: 2,
    title: "Teil 2 — E-Mail an den Kursleiter",
    titleAr: "الجزء 2 — بريد إلكتروني إلى مدير الدورة",
    minutes: 18,
    points: 50,
    aufgabeDe:
      "Sie besuchen einen Deutschkurs, aber nächste Woche können Sie an zwei Tagen nicht kommen, weil Sie arbeiten müssen. Schreiben Sie Ihrem Kursleiter Herrn Bach: Informieren Sie ihn, erklären Sie den Grund und fragen Sie nach den Hausaufgaben.",
    aufgabeAr:
      "أنت تتابع دورة ألمانية، لكن الأسبوع القادم لن تستطيع الحضور يومين بسبب العمل. اكتب إلى مدير الدورة السيد باخ: أخبره، واشرح السبب، واسأل عن الواجبات المنزلية.",
    minWords: 60,
    requires: [
      { de: "Informieren, dass Sie fehlen", ar: "إعلامه بالغياب" },
      { de: "Den Grund nennen", ar: "ذكر السبب" },
      { de: "Nach den Hausaufgaben fragen", ar: "السؤال عن الواجبات" },
    ],
    struktur: ["Anrede (Sehr geehrter Herr Bach,)", "Information über die Abwesenheit", "Grund", "Frage nach den Aufgaben", "Gruß (Mit freundlichen Grüßen)"],
    redemittel: ["Sehr geehrter Herr Bach,", "ich kann nächste Woche am Montag und Dienstag nicht kommen.", "Ich muss arbeiten.", "Könnten Sie mir bitte die Hausaufgaben schicken?", "Mit freundlichen Grüßen"],
  },
];
