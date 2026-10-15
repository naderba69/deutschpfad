/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — استماع A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · 15 عنصراً · 100 نقطة · الجزآن 1 و3 يُشغَّلان مرتين.
 *  النصوص تُقرأ صوتياً بنطق آلي (مقاطع هذا النموذج غير مسجّلة بعد — والمشغّل
 *  يعلن ذلك للمتعلم صراحةً ولا يستهلك محاولته في صمت).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const A1_MODEL2_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — kurze Ansagen: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurze Ansagen",
    titleAr: "الجزء 1 — إعلانات قصيرة",
    minutes: 4,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات قصيرة. لكل إعلان عبارة واحدة: حدّد Richtig أو Falsch. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Ansage 1: Der Zug nach Hamburg fährt heute um acht Uhr von Gleis vier. " +
      "Ansage 2: Die Bibliothek ist am Mittwoch geschlossen. Am Donnerstag ist sie wieder offen. " +
      "Ansage 3: Frau Klein bittet alle Patienten, im Wartezimmer zu warten. " +
      "Ansage 4: Die Bäckerei in der Marktstraße ist am Samstag bis sechzehn Uhr offen.",
    statements: [
      { id: "m2h1-s1", de: "Der Zug fährt um acht Uhr.", ar: "القطار ينطلق الساعة الثامنة.", isTrue: true, whyAr: "قيل: fährt heute um acht Uhr." },
      { id: "m2h1-s2", de: "Die Bibliothek ist am Donnerstag geschlossen.", ar: "المكتبة مغلقة يوم الخميس.", isTrue: false, whyAr: "المغلقة يوم الأربعاء، والخميس تعود للعمل." },
      { id: "m2h1-s3", de: "Die Patienten sollen im Wartezimmer warten.", ar: "على المرضى الانتظار في غرفة الانتظار.", isTrue: true, whyAr: "قيل: bittet alle Patienten, im Wartezimmer zu warten." },
      { id: "m2h1-s4", de: "Die Bäckerei ist am Samstag bis sechzehn Uhr offen.", ar: "المخبز مفتوح السبت حتى الرابعة عصراً.", isTrue: true, whyAr: "قيل: bis sechzehn Uhr offen." },
    ],
  },

  /* ═══════════ Teil 2 — kurze Gespräche: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Kurze Gespräche",
    titleAr: "الجزء 2 — حوارات قصيرة",
    minutes: 5,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات قصيرة. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch 1. Frau: Guten Tag, ich möchte eine Fahrkarte nach Bonn. Mann: Einfach oder hin und zurück? Frau: Nur einfach, bitte. " +
      "Gespräch 2. Mann: Wann öffnet die Apotheke? Frau: Um neun Uhr. Vorher ist sie zu. " +
      "Gespräch 3. Frau: Hast du am Freitag Zeit? Mann: Am Freitag arbeite ich. Am Samstag ist besser. " +
      "Gespräch 4. Mann: Wie viel kostet das Brot? Frau: Zwei Euro fünfzig.",
    questions: [
      { id: "m2h2-q1", q: "Was möchte die Frau?", qAr: "ماذا تريد المرأة؟", options: ["Eine Fahrkarte nach Bonn", "Eine Fahrkarte nach Berlin", "Ein Buch"], correct: 0, whyAr: "قالت: ich möchte eine Fahrkarte nach Bonn." },
      { id: "m2h2-q2", q: "Wann öffnet die Apotheke?", qAr: "متى تفتح الصيدلية؟", options: ["Um sieben Uhr", "Um neun Uhr", "Um elf Uhr"], correct: 1, whyAr: "قالت: Um neun Uhr." },
      { id: "m2h2-q3", q: "Wann hat der Mann Zeit?", qAr: "متى يكون لدى الرجل وقت؟", options: ["Am Freitag", "Am Samstag", "Am Sonntag"], correct: 1, whyAr: "قال: Am Samstag ist besser." },
      { id: "m2h2-q4", q: "Was kostet das Brot?", qAr: "كم يكلف الخبز؟", options: ["Zwei Euro fünfzig", "Fünf Euro zwanzig", "Zwölf Euro"], correct: 0, whyAr: "قالت: Zwei Euro fünfzig." },
    ],
  },

  /* ═══════════ Teil 3 — Ansage / Anrufbeantworter: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Anrufbeantworter",
    titleAr: "الجزء 3 — رسالة على جهاز الرد الآلي",
    minutes: 5,
    points: 30,
    kind: "mcq",
    introAr: "تسمع رسالة من عيادة طبيب. أجب عن 4 أسئلة. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Guten Tag, hier ist die Praxis Doktor Berger. Ihr Termin am Dienstag um neun Uhr muss leider verschoben werden. " +
      "Der neue Termin ist am Donnerstag um elf Uhr. Bitte bringen Sie Ihre Versichertenkarte mit. " +
      "Wenn Sie nicht kommen können, rufen Sie uns bitte bis Montag an. Vielen Dank.",
    questions: [
      { id: "m2h3-q1", q: "Warum ruft die Praxis an?", qAr: "لماذا تتصل العيادة؟", options: ["Um den Termin zu verschieben", "Um die Rechnung zu schicken", "Um die Öffnungszeiten zu erklären"], correct: 0, whyAr: "قيل: Ihr Termin muss leider verschoben werden." },
      { id: "m2h3-q2", q: "Wann ist der neue Termin?", qAr: "متى الموعد الجديد؟", options: ["Dienstag um neun Uhr", "Donnerstag um elf Uhr", "Montag um neun Uhr"], correct: 1, whyAr: "قيل: Der neue Termin ist am Donnerstag um elf Uhr." },
      { id: "m2h3-q3", q: "Was soll der Patient mitbringen?", qAr: "ماذا يجب أن يُحضر المريض؟", options: ["Die Versichertenkarte", "Einen Pass", "Ein Rezept"], correct: 0, whyAr: "قيل: Bitte bringen Sie Ihre Versichertenkarte mit." },
      { id: "m2h3-q4", q: "Bis wann soll man anrufen, wenn man nicht kommen kann?", qAr: "حتى متى يجب الاتصال إذا لم يستطع الحضور؟", options: ["Bis Montag", "Bis Dienstag", "Bis Donnerstag"], correct: 0, whyAr: "قيل: rufen Sie uns bitte bis Montag an." },
    ],
  },

  /* ═══════════ Teil 4 — Alltagsgespräche: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Alltag: Arbeiten und Fahren",
    titleAr: "الجزء 4 — حياة يومية: العمل والتنقل",
    minutes: 4,
    points: 30,
    kind: "mcq",
    introAr: "تسمع حواراً وإعلاناً قصيراً. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch. Frau: Hallo Nabil, arbeitest du am Samstag im Café? Mann: Nein, am Samstag arbeite ich nicht. " +
      "Ich arbeite nur von Montag bis Freitag. Am Wochenende lerne ich Deutsch. " +
      "Ansage. Liebe Fahrgäste, der Bus Nummer drei fährt heute nicht. Bitte nehmen Sie den Bus Nummer sieben. " +
      "Er hält an der gleichen Haltestelle.",
    questions: [
      { id: "m2h4-q1", q: "Wann arbeitet Nabil im Café?", qAr: "متى يعمل نبيل في المقهى؟", options: ["Von Montag bis Freitag", "Am Samstag", "Am Sonntag"], correct: 0, whyAr: "قال: Ich arbeite nur von Montag bis Freitag." },
      { id: "m2h4-q2", q: "Was macht Nabil am Wochenende?", qAr: "ماذا يفعل نبيل في عطلة نهاية الأسبوع؟", options: ["Er arbeitet im Café", "Er lernt Deutsch", "Er fährt nach Bonn"], correct: 1, whyAr: "قال: Am Wochenende lerne ich Deutsch." },
      { id: "m2h4-q3", q: "Welchen Bus soll man nehmen?", qAr: "أي حافلة يجب أن يستقل المرء؟", options: ["Bus Nummer drei", "Bus Nummer sieben", "Bus Nummer elf"], correct: 1, whyAr: "قيل: Bitte nehmen Sie den Bus Nummer sieben." },
    ],
  },
];
