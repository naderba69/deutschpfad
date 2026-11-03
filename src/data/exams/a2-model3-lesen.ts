/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — قراءة A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · 14 عنصراً · 100 نقطة (25 لكل جزء) · ~30 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const A2_MODEL3_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — Mitteilungen: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Mitteilungen",
    titleAr: "الجزء 1 — رسائل",
    minutes: 7,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل الثلاث. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Hallo Tim, ich habe am Freitag einen Arzttermin und kann meine Schicht nicht machen. Könntest du tauschen? Ich übernehme dann deine Samstagsschicht. Grüße, Alina\n" +
      "(b) Sehr geehrte Familie Omar, ab dem ersten Oktober steigen die Nebenkosten um 30 Euro monatlich. Der Grund sind höhere Heizkosten.\n" +
      "(c) Liebe Mitglieder, das Training am Mittwoch findet diesmal in der Halle zwei statt, weil die große Halle renoviert wird. Bitte bringt Hallenschuhe mit.",
    questions: [
      { id: "m3l1-q1", q: "Warum schreibt Alina?", qAr: "لماذا تكتب ألينا؟", options: ["Sie möchte die Schicht tauschen", "Sie sucht einen Arzt für ihren Sohn", "Sie hat am Samstag frei"], correct: 0, whyAr: "في (a): kann meine Schicht nicht machen. Könntest du tauschen?" },
      { id: "m3l1-q2", q: "Warum steigen die Nebenkosten?", qAr: "لماذا ترتفع المصاريف الإضافية؟", options: ["Wegen höherer Heizkosten", "Wegen neuer Möbel", "Wegen der Reinigung"], correct: 0, whyAr: "في (b): Der Grund sind höhere Heizkosten." },
      { id: "m3l1-q3", q: "Wo ist das Training am Mittwoch?", qAr: "أين التدريب يوم الأربعاء؟", options: ["In der großen Halle", "In der Halle zwei", "Draußen"], correct: 1, whyAr: "في (c): findet diesmal in der Halle zwei statt." },
    ],
  },

  /* ═══════════ Teil 2 — Anzeige: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Anzeige",
    titleAr: "الجزء 2 — إعلان",
    minutes: 7,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Sprachcafé im Kulturhaus — jeden Donnerstag ab 19 Uhr\n" +
      "Sie möchten Deutsch sprechen und neue Leute kennenlernen? Bei uns sprechen Sie ohne Kursbuch, nur über Themen des Alltags.\n" +
      "Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig. Getränke kosten 2 Euro.\n" +
      "Das Café ist im ersten Stock; der Aufzug ist ab 18 Uhr außer Betrieb.\n" +
      "An Feiertagen findet das Sprachcafé nicht statt.",
    statements: [
      { id: "m3l2-s1", de: "Man muss sich für das Sprachcafé anmelden.", ar: "يجب التسجيل في مقهى اللغة.", isTrue: false, whyAr: "قيل: eine Anmeldung ist nicht nötig." },
      { id: "m3l2-s2", de: "Der Besuch kostet nichts.", ar: "الحضور بلا مقابل.", isTrue: true, whyAr: "قيل: Die Teilnahme ist kostenlos." },
      { id: "m3l2-s3", de: "Man kann ab 18 Uhr den Aufzug benutzen.", ar: "يمكن استخدام المصعد بعد الساعة 18.", isTrue: false, whyAr: "قيل: der Aufzug ist ab 18 Uhr außer Betrieb." },
      { id: "m3l2-s4", de: "An Feiertagen gibt es kein Sprachcafé.", ar: "في الأعياد لا يوجد مقهى اللغة.", isTrue: true, whyAr: "قيل: An Feiertagen findet das Sprachcafé nicht statt." },
    ],
  },

  /* ═══════════ Teil 3 — Bericht: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Bericht",
    titleAr: "الجزء 3 — تقرير",
    minutes: 8,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ التقرير وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Mein erster Monat in der neuen Firma — Bericht von Karim B.\n" +
      "Ich arbeite seit vier Wochen als Lagermitarbeiter. Am Anfang war alles neu: die Wege, die Kollegen, sogar die Kaffeemaschine. " +
      "Meine Kollegin Melanie hat mir in der ersten Woche alles gezeigt. Das hat mir sehr geholfen. " +
      "Am schwierigsten war der frühe Beginn um sechs Uhr; jetzt stehe ich um halb fünf auf und es geht besser. " +
      "Am besten gefällt mir, dass wir im Team zusammen planen, wer welche Aufgabe macht. " +
      "Im nächsten Monat mache ich einen Kurs für den Staplerführerschein; dann darf ich auch die schweren Paletten fahren.",
    questions: [
      { id: "m3l3-q1", q: "Wie lange arbeitet Karim in der Firma?", qAr: "كم مضى على عمل كريم في الشركة؟", options: ["Vier Wochen", "Sechs Monate", "Einen Monat im Lager zwei"], correct: 0, whyAr: "قال: Ich arbeite seit vier Wochen als Lagermitarbeiter." },
      { id: "m3l3-q2", q: "Was war am schwierigsten?", qAr: "ما كان الأصعب؟", options: ["Der frühe Arbeitsbeginn", "Die Kollegen", "Die Kaffeemaschine"], correct: 0, whyAr: "قال: Am schwierigsten war der frühe Beginn um sechs Uhr." },
      { id: "m3l3-q3", q: "Was macht Karim im nächsten Monat?", qAr: "ما سيفعله كريم الشهر القادم؟", options: ["Einen Kurs für den Staplerführerschein", "Urlaub im Ausland mit der Familie", "Er wechselt die Firma im nächsten Monat"], correct: 0, whyAr: "قال: mache ich einen Kurs für den Staplerführerschein." },
    ],
  },

  /* ═══════════ Teil 4 — Aushänge: richtig / falsch ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Aushänge",
    titleAr: "الجزء 4 — لوحات إعلانية",
    minutes: 8,
    points: 25,
    kind: "rf",
    introAr: "اقرأ لوحات الإعلانات. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Fitnessstudio Aktiv — Neue Öffnungszeiten\n" +
      "Montag bis Freitag von 7 bis 22 Uhr, am Wochenende von 9 bis 18 Uhr.\n" +
      "Kurse: Yoga am Dienstag und Donnerstag; Rückenfit am Mittwoch.\n" +
      "Das Schwimmbad im Haus ist bis Ende März geschlossen (Reparatur).\n" +
      "Für Mitglieder ist der Parkplatz kostenlos, Gäste zahlen 3 Euro pro Besuch.\n" +
      "Bitte Handtücher mitbringen; wir leihen keine mehr aus.",
    statements: [
      { id: "m3b4-s1", de: "Am Wochenende öffnet das Studio um neun Uhr.", ar: "في عطلة نهاية الأسبوع يفتح النادي الساعة التاسعة.", isTrue: true, whyAr: "قيل: am Wochenende von 9 bis 18 Uhr." },
      { id: "m3b4-s2", de: "Der Yogakurs ist am Mittwoch.", ar: "درس اليوغا يوم الأربعاء.", isTrue: false, whyAr: "قيل: Yoga am Dienstag und Donnerstag، والأربعاء لـ Rückenfit." },
      { id: "m3b4-s3", de: "Man kann jetzt im Haus schwimmen.", ar: "يمكن السباحة في المبنى الآن.", isTrue: false, whyAr: "قيل: Das Schwimmbad ist bis Ende März geschlossen." },
      { id: "m3b4-s4", de: "Mitglieder parken kostenlos.", ar: "الأعضاء يوقفون سياراتهم مجاناً.", isTrue: true, whyAr: "قيل: Für Mitglieder ist der Parkplatz kostenlos." },
    ],
  },
];
