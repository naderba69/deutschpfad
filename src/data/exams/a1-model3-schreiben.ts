/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — كتابة A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~20 دقيقة · الحد الأدنى 20 و30 كلمة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const A1_MODEL3_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Einladung zum Ausflug",
    titleAr: "الجزء 1 — دعوة إلى رحلة",
    minutes: 8,
    points: 50,
    aufgabeDe:
      "Sie möchten am Samstag einen Ausflug machen. Schreiben Sie Ihrem Freund Tarek eine Nachricht: Laden Sie ihn ein, sagen Sie, wohin Sie fahren, und fragen Sie, ob er Zeit hat.",
    aufgabeAr:
      "تريد القيام برحلة يوم السبت. اكتب رسالة إلى صديقك طارق: ادعُه، وقل إلى أين ستسافران، واسأله إن كان لديه وقت.",
    minWords: 20,
    requires: [
      { de: "Einladen", ar: "الدعوة" },
      { de: "Das Ziel nennen", ar: "ذكر الوجهة" },
      { de: "Nach der Zeit fragen", ar: "السؤال عن الوقت" },
    ],
    struktur: ["Anrede (Hallo Tarek,)", "Einladung", "Ziel und Uhrzeit", "Frage und Gruß (Bis Samstag!)"],
    redemittel: ["Hallo Tarek,", "Hast du am Samstag Zeit?", "Wir fahren nach Hamburg.", "Der Bus fährt um neun Uhr.", "Schreib mir bitte.", "Viele Grüße"],
  },
  {
    teil: 2,
    title: "Teil 2 — Beim Kurs entschuldigen",
    titleAr: "الجزء 2 — اعتذار عن درس",
    minutes: 12,
    points: 50,
    aufgabeDe:
      "Sie können morgen nicht zum Deutschkurs kommen, weil Sie zum Arzt müssen. Schreiben Sie Ihrer Lehrerin Frau Weber eine Nachricht: Entschuldigen Sie sich, sagen Sie den Grund und fragen Sie nach den Hausaufgaben.",
    aufgabeAr:
      "لا تستطيع غداً الحضور إلى درس الألمانية لأن عليك الذهاب إلى الطبيب. اكتب رسالة إلى معلمتك السيدة فيبر: اعتذر، واذكر السبب، واسأل عن الواجبات.",
    minWords: 30,
    requires: [
      { de: "Sich entschuldigen", ar: "الاعتذار" },
      { de: "Den Grund nennen", ar: "ذكر السبب" },
      { de: "Nach den Hausaufgaben fragen", ar: "السؤال عن الواجبات" },
    ],
    struktur: ["Anrede (Guten Tag Frau Weber,)", "Entschuldigung", "Grund mit weil", "Frage", "Gruß (Mit freundlichen Grüßen)"],
    redemittel: ["Guten Tag Frau Weber,", "Leider kann ich morgen nicht kommen.", "Ich muss zum Arzt.", "Was sind die Hausaufgaben?", "Vielen Dank.", "Mit freundlichen Grüßen"],
  },
];
