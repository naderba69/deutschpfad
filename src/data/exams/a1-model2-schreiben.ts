/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — كتابة A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~20 دقيقة · الحد الأدنى 20 و30 كلمة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const A1_MODEL2_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Einladung an eine Freundin",
    titleAr: "الجزء 1 — دعوة إلى صديقة",
    minutes: 8,
    points: 50,
    aufgabeDe:
      "Ihre Freundin Nadia hat Geburtstag. Schreiben Sie ihr eine Nachricht: Gratulieren Sie, sagen Sie, dass Sie kommen, und fragen Sie, was Sie mitbringen sollen.",
    aufgabeAr:
      "صديقتك نادية عيد ميلادها. اكتب لها رسالة: بارك لها، وقل إنك ستأتي، واسأل عمّا يجب أن تحضر معك.",
    minWords: 20,
    requires: [
      { de: "Gratulieren", ar: "التهنئة" },
      { de: "Sagen, dass Sie kommen", ar: "قول إنك ستأتي" },
      { de: "Fragen, was Sie mitbringen sollen", ar: "السؤال عمّا تحضره" },
    ],
    struktur: ["Anrede (Liebe Nadia,)", "Gratulation", "Zusage", "Frage und Gruß (Bis Samstag!)"],
    redemittel: ["Liebe Nadia,", "Herzlichen Glückwunsch zum Geburtstag!", "Ich komme gern.", "Was soll ich mitbringen?", "Bis Samstag!"],
  },
  {
    teil: 2,
    title: "Teil 2 — Verspätung entschuldigen",
    titleAr: "الجزء 2 — اعتذار عن التأخر",
    minutes: 12,
    points: 50,
    aufgabeDe:
      "Sie haben mit Ihrer Lehrerin Frau Neumann um 17 Uhr einen Termin, aber Ihr Bus kommt später. Schreiben Sie Frau Neumann eine Nachricht: Entschuldigen Sie sich, sagen Sie den Grund und schlagen Sie eine neue Uhrzeit vor.",
    aufgabeAr:
      "لديك موعد مع معلمتك السيدة نويمان الساعة 17، لكن حافلتك ستتأخر. اكتب لها رسالة: اعتذر، واذكر السبب، واقترح ساعة جديدة.",
    minWords: 30,
    requires: [
      { de: "Sich entschuldigen", ar: "الاعتذار" },
      { de: "Den Grund nennen", ar: "ذكر السبب" },
      { de: "Eine neue Uhrzeit vorschlagen", ar: "اقتراح ساعة جديدة" },
    ],
    struktur: ["Anrede (Guten Tag Frau Neumann,)", "Entschuldigung", "Grund in einem Satz", "Neue Uhrzeit", "Gruß (Viele Grüße)"],
    redemittel: ["Guten Tag Frau Neumann,", "Es tut mir sehr leid.", "Mein Bus kommt später.", "Geht es um 17:30 Uhr?", "Viele Grüße"],
  },
];
