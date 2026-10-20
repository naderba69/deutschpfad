/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — كتابة A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~30 دقيقة · الحد الأدنى 40 و60 كلمة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const A2_MODEL3_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Nachricht an die Kollegin",
    titleAr: "الجزء 1 — رسالة إلى الزميلة",
    minutes: 12,
    points: 50,
    aufgabeDe:
      "Sie können am Freitag nicht zur Arbeit kommen, weil Sie zu einer Untersuchung ins Krankenhaus müssen. Schreiben Sie Ihrer Kollegin Frau Sommer: Sagen Sie, dass Sie nicht kommen können, nennen Sie den Grund und fragen Sie, ob sie Ihre Aufgaben übernehmen kann.",
    aufgabeAr:
      "لا تستطيع الحضور إلى العمل يوم الجمعة لأن عليك الذهاب إلى المستشفى لإجراء فحص. اكتب رسالة إلى زميلتك السيدة زومر: أخبرها أنك لن تحضر، واذكر السبب، واسألها إن كانت تستطيع تولّي مهامك.",
    minWords: 40,
    requires: [
      { de: "Informieren, dass Sie nicht kommen", ar: "إبلاغ أنها لن تحضر" },
      { de: "Den Grund nennen", ar: "ذكر السبب" },
      { de: "Um Hilfe bei den Aufgaben bitten", ar: "طلب المساعدة في المهام" },
    ],
    struktur: ["Anrede (Hallo Frau Sommer,)", "Information", "Grund mit weil", "Bitte um Hilfe", "Gruß"],
    redemittel: ["Hallo Frau Sommer,", "leider kann ich am Freitag nicht kommen.", "Ich muss ins Krankenhaus zur Untersuchung.", "Könnten Sie meine Aufgaben übernehmen?", "Vielen Dank im Voraus.", "Viele Grüße"],
  },
  {
    teil: 2,
    title: "Teil 2 — E-Mail an die Sprachschule",
    titleAr: "الجزء 2 — بريد إلكتروني إلى مدرسة اللغات",
    minutes: 18,
    points: 50,
    aufgabeDe:
      "Sie besuchen einen Deutschkurs A2, aber die Uhrzeit passt nicht mehr zu Ihrem Arbeitsplan. Schreiben Sie eine E-Mail an die Sprachschule: Erklären Sie Ihr Problem, fragen Sie nach einem anderen Kurs und bitten Sie um eine Antwort bis Freitag.",
    aufgabeAr:
      "تحضر دورة ألمانية A2، لكن التوقيت لم يعد مناسباً لخطة عملك. اكتب بريداً إلكترونياً إلى مدرسة اللغات: اشرح مشكلتك، واسأل عن دورة أخرى، واطلب ردّاً حتى يوم الجمعة.",
    minWords: 60,
    requires: [
      { de: "Das Problem erklären", ar: "شرح المشكلة" },
      { de: "Nach einem anderen Kurs fragen", ar: "السؤال عن دورة أخرى" },
      { de: "Um Antwort bitten", ar: "طلب الردّ" },
    ],
    struktur: ["Anrede (Sehr geehrte Damen und Herren,)", "Problem", "Frage nach Alternativen", "Bitte um Antwort bis Freitag", "Gruß (Mit freundlichen Grüßen)"],
    redemittel: ["Sehr geehrte Damen und Herren,", "Ich besuche den Kurs A2 am Dienstagabend.", "Leider passt die Uhrzeit nicht mehr.", "Gibt es einen Kurs am Samstagmorgen?", "Ich freue mich auf Ihre Antwort.", "Mit freundlichen Grüßen"],
  },
];
