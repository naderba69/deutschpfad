/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — قراءة A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · 12 عنصراً · 100 نقطة (25 لكل جزء) · ~25 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const A1_MODEL2_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — kurze Mitteilungen: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurze Mitteilungen",
    titleAr: "الجزء 1 — رسائل قصيرة",
    minutes: 6,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل القصيرة. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Hallo Sara, ich warte vor der Bibliothek. Kommst du um vier? Aylin\n" +
      "(b) Achtung: Der Aufzug ist heute kaputt. Bitte nehmen Sie die Treppe.\n" +
      "(c) Guten Morgen Frau Roth, Ihr Paket ist im Haus Nummer fünf. Sie können es ab neun Uhr abholen.",
    questions: [
      { id: "m2l1-q1", q: "Wo wartet Aylin?", qAr: "أين تنتظر أيلين؟", options: ["Vor der Bibliothek", "Im Café", "Zu Hause"], correct: 0, whyAr: "في (a): ich warte vor der Bibliothek." },
      { id: "m2l1-q2", q: "Was ist kaputt?", qAr: "ما المعطّل؟", options: ["Die Treppe", "Der Aufzug", "Die Tür"], correct: 1, whyAr: "في (b): Der Aufzug ist heute kaputt." },
      { id: "m2l1-q3", q: "Wo ist das Paket?", qAr: "أين الطرد؟", options: ["Im Haus Nummer fünf", "In der Bibliothek", "Bei Sara"], correct: 0, whyAr: "في (c): Ihr Paket ist im Haus Nummer fünf." },
    ],
  },

  /* ═══════════ Teil 2 — Anzeige: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Anzeige",
    titleAr: "الجزء 2 — إعلان",
    minutes: 6,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Sprachschule Lingua — Neue Kurse ab September\n" +
      "Deutsch A1: Montag und Mittwoch von 18 bis 20 Uhr.\n" +
      "Preis: 120 Euro für drei Monate.\n" +
      "Anmeldung im Büro oder per E-Mail.\n" +
      "Das Kursbuch ist im Preis nicht enthalten.",
    statements: [
      { id: "m2l2-s1", de: "Die Kurse beginnen im September.", ar: "الدورات تبدأ في سبتمبر.", isTrue: true, whyAr: "قيل: Neue Kurse ab September." },
      { id: "m2l2-s2", de: "Der Deutschkurs ist am Dienstag.", ar: "درس الألمانية يوم الثلاثاء.", isTrue: false, whyAr: "قيل: Montag und Mittwoch." },
      { id: "m2l2-s3", de: "Man kann sich per E-Mail anmelden.", ar: "يمكن التسجيل بالبريد الإلكتروني.", isTrue: true, whyAr: "قيل: Anmeldung im Büro oder per E-Mail." },
      { id: "m2l2-s4", de: "Das Kursbuch kostet nichts.", ar: "كتاب الدورة مجاني.", isTrue: false, whyAr: "قيل: Das Kursbuch ist im Preis nicht enthalten، أي غير مشمول." },
    ],
  },

  /* ═══════════ Teil 3 — kurzer Text über eine Person: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Kurzer Text",
    titleAr: "الجزء 3 — نص قصير",
    minutes: 7,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Ich heiße Yara und wohne in Kassel. Ich arbeite in einem Supermarkt. " +
      "Ich beginne um sieben Uhr und arbeite bis fünfzehn Uhr. Nach der Arbeit gehe ich schwimmen. " +
      "Am Sonntag besuche ich meine Familie in Frankfurt. Mein Bruder wohnt dort mit seinen zwei Kindern.",
    questions: [
      { id: "m2l3-q1", q: "Wo arbeitet Yara?", qAr: "أين تعمل يارا؟", options: ["In einem Supermarkt", "In einer Schule", "In Frankfurt"], correct: 0, whyAr: "قالت: Ich arbeite in einem Supermarkt." },
      { id: "m2l3-q2", q: "Wann beginnt Yara?", qAr: "متى تبدأ يارا عملها؟", options: ["Um sieben Uhr", "Um fünfzehn Uhr", "Um neun Uhr"], correct: 0, whyAr: "قالت: Ich beginne um sieben Uhr." },
      { id: "m2l3-q3", q: "Was macht Yara am Sonntag?", qAr: "ماذا تفعل يارا يوم الأحد؟", options: ["Sie arbeitet", "Sie geht schwimmen", "Sie besucht ihre Familie"], correct: 2, whyAr: "قالت: Am Sonntag besuche ich meine Familie." },
    ],
  },

  /* ═══════════ Teil 4 — Nachricht im Alltag: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Alltagsnachricht",
    titleAr: "الجزء 4 — رسالة من الحياة اليومية",
    minutes: 6,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسالة وأجب عن السؤالين. اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "Hallo Ahmed, morgen fahre ich nach Köln. Mein Zug fährt um acht Uhr. " +
      "Kannst du mich zum Bahnhof bringen? Ich warte um sieben Uhr vor deiner Tür. Viele Grüße, Jamal",
    questions: [
      { id: "m2l4-q1", q: "Wohin fährt Jamal?", qAr: "إلى أين يسافر جمال؟", options: ["Nach Köln", "Nach Kassel", "Nach Frankfurt"], correct: 0, whyAr: "قال: morgen fahre ich nach Köln." },
      { id: "m2l4-q2", q: "Wo wartet Jamal?", qAr: "أين ينتظر جمال؟", options: ["Vor dem Bahnhof", "Vor der Tür von Ahmed", "Im Zug"], correct: 1, whyAr: "قال: Ich warte um sieben Uhr vor deiner Tür." },
    ],
  },
];
