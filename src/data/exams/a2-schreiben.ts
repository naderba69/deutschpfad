/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — كتابة A2 (بنية شبيهة بـ Goethe-Zertifikat A2)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~30 دقيقة
 *   Teil 1: رسالة إلى صديق تشرح سبب تأخرك وتقترح موعداً جديداً (≥ 30 كلمة)
 *   Teil 2: رسالة رسمية إلى مكتب تطلب فيها معلومات (≥ 40 كلمة)
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const A2_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Nachricht an einen Freund",
    titleAr: "الجزء 1 — رسالة إلى صديق",
    minutes: 12,
    points: 50,
    aufgabeDe:
      "Sie haben sich mit Ihrem Freund Max für 14 Uhr im Park verabredet, aber Sie kommen zu spät. Schreiben Sie ihm eine E-Mail: Entschuldigen Sie sich, erklären Sie den Grund und schlagen Sie eine neue Zeit vor.",
    aufgabeAr:
      "اتفقت مع صديقك ماكس على الساعة 14 في الحديقة، لكنك ستتأخر. اكتب له بريداً إلكترونياً: اعتذر، واشرح السبب، واقترح وقتاً جديداً.",
    minWords: 30,
    requires: [
      { de: "Sich entschuldigen", ar: "الاعتذار" },
      { de: "Den Grund erklären", ar: "شرح السبب" },
      { de: "Eine neue Zeit vorschlagen", ar: "اقتراح وقت جديد" },
    ],
    struktur: ["Anrede (Lieber Max,)", "Entschuldigung", "Grund (weil …)", "Neuer Vorschlag", "Gruß"],
    redemittel: ["Es tut mir leid, dass …", "Ich komme leider später, weil …", "Hast du um … Zeit?", "Viele Grüße"],
  },
  {
    teil: 2,
    title: "Teil 2 — Anfrage an eine Bibliothek",
    titleAr: "الجزء 2 — استفسار إلى مكتبة",
    minutes: 18,
    points: 50,
    aufgabeDe:
      "Sie möchten in der Stadtbibliothek einen Deutschkurs besuchen. Schreiben Sie eine E-Mail an die Bibliothek und fragen Sie nach: den Kurszeiten, den Kosten und ob man sich anmelden muss.",
    aufgabeAr:
      "تريد حضور دورة لغة ألمانية في المكتبة العامة. اكتب بريداً إلى المكتبة تسأل فيه عن: مواعيد الدورة، والتكاليف، وهل يجب التسجيل مسبقاً.",
    minWords: 40,
    requires: [
      { de: "Nach den Kurszeiten fragen", ar: "السؤال عن المواعيد" },
      { de: "Nach den Kosten fragen", ar: "السؤال عن التكاليف" },
      { de: "Nach der Anmeldung fragen", ar: "السؤال عن التسجيل" },
    ],
    struktur: ["Anrede (Sehr geehrte Damen und Herren,)", "Anlass", "Drei Fragen", "Dank und Gruß"],
    redemittel: ["Ich interessiere mich für …", "Könnten Sie mir bitte sagen, …?", "Muss ich mich vorher anmelden?", "Mit freundlichen Grüßen"],
  },
];
