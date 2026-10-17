/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — كتابة A1 (بنية شبيهة بـ Start Deutsch 1)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~20 دقيقة
 *   Teil 1: رسالة قصيرة إلى صديق (≥ 20 كلمة)
 *   Teil 2: بطاقة/رسالة قصيرة تعتذر وتقترح موعداً (≥ 30 كلمة)
 *  التقييم بالمعايير الأربعة نفسها، بمستوى A1 (انظر EXAM_WRITING_RUBRIC).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const A1_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Nachricht an einen Freund",
    titleAr: "الجزء 1 — رسالة إلى صديق",
    minutes: 8,
    points: 50,
    aufgabeDe:
      "Ihr Freund Tim möchte am Samstag ins Kino gehen. Schreiben Sie ihm eine Nachricht: Sagen Sie, ob Sie Zeit haben. Nennen Sie eine Uhrzeit und schlagen Sie einen Film vor.",
    aufgabeAr:
      "صديقك تيم يريد الذهاب إلى السينما يوم السبت. اكتب له رسالة: قل هل لديك وقت، واذكر ساعة، واقترح فيلماً.",
    minWords: 20,
    requires: [
      { de: "Ob Sie Zeit haben", ar: "هل لديك وقت" },
      { de: "Eine Uhrzeit nennen", ar: "ذكر ساعة" },
      { de: "Einen Film vorschlagen", ar: "اقتراح فيلم" },
    ],
    struktur: ["Anrede (Hallo Tim,)", "Antwort: ja oder nein, mit Grund", "Uhrzeit und Vorschlag", "Gruß (Bis bald, …)"],
    redemittel: ["Hallo Tim,", "Ich habe am Samstag Zeit.", "Wie wäre es um … Uhr?", "Ich schlage … vor.", "Bis bald!"],
  },
  {
    teil: 2,
    title: "Teil 2 — Entschuldigung und neuer Termin",
    titleAr: "الجزء 2 — اعتذار وموعد جديد",
    minutes: 12,
    points: 50,
    aufgabeDe:
      "Sie haben am Dienstag um 10 Uhr einen Termin bei Frau Schulz, aber Sie können nicht kommen. Schreiben Sie Frau Schulz eine kurze Nachricht: Entschuldigen Sie sich, erklären Sie kurz den Grund und schlagen Sie einen neuen Termin vor.",
    aufgabeAr:
      "لديك موعد مع السيدة شولتس يوم الثلاثاء الساعة 10، لكنك لا تستطيع الحضور. اكتب لها رسالة قصيرة: اعتذر، واشرح السبب بإيجاز، واقترح موعداً جديداً.",
    minWords: 30,
    requires: [
      { de: "Sich entschuldigen", ar: "الاعتذار" },
      { de: "Einen kurzen Grund nennen", ar: "ذكر سبب قصير" },
      { de: "Einen neuen Termin vorschlagen", ar: "اقتراح موعد جديد" },
    ],
    struktur: ["Anrede (Sehr geehrte Frau Schulz,)", "Entschuldigung", "Grund in einem Satz", "Neuer Vorschlag", "Gruß (Mit freundlichen Grüßen)"],
    redemittel: ["Es tut mir leid.", "Ich kann leider nicht kommen, weil …", "Hätten Sie am … Zeit?", "Mit freundlichen Grüßen"],
  },
];
