/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — استماع A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · 15 عنصراً · 100 نقطة · الجزآن 1 و3 يُشغَّلان مرتين.
 *  الصوت كامل: 13 مقطعاً مسجّلاً في `public/audio/exam-a1/m3/`، ووالنطق الآلي في المتصفح احتياط معلَن عند غياب أي ملف.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const A1_MODEL3_HOEREN: ExamHoerenTeil[] = [
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
      "Ansage 1: Der Zug nach Wien fährt heute um neun Uhr von Gleis zwei. " +
      "Ansage 2: Die Stadtbibliothek öffnet am Samstag um zehn Uhr. " +
      "Ansage 3: Doktor Lang ist heute nicht in der Praxis. Sie ist am Freitag wieder offen. " +
      "Ansage 4: Das Schwimmbad ist am Montag geschlossen.",
    audioSegments: [
      "Ansage 1: Der Zug nach Wien fährt heute um neun Uhr von Gleis zwei. " +
        "Ansage 2: Die Stadtbibliothek öffnet am Samstag um zehn Uhr. " +
        "Ansage 3: Doktor Lang ist heute nicht in der Praxis. Sie ist am Freitag wieder offen. " +
        "Ansage 4: Das Schwimmbad ist am Montag geschlossen.",
    ],
    statements: [
      { id: "m3h1-s1", de: "Der Zug nach Wien fährt um neun Uhr.", ar: "قطار فيينا ينطلق الساعة التاسعة.", isTrue: true, whyAr: "قيل: fährt heute um neun Uhr von Gleis zwei." },
      { id: "m3h1-s2", de: "Die Bibliothek öffnet am Samstag um elf Uhr.", ar: "المكتبة تفتح السبت الساعة الحادية عشرة.", isTrue: false, whyAr: "قيل: öffnet am Samstag um zehn Uhr، أي العاشرة لا الحادية عشرة." },
      { id: "m3h1-s3", de: "Man kann heute zu Doktor Lang gehen.", ar: "يمكن اليوم الذهاب إلى الدكتور لانغ.", isTrue: false, whyAr: "قيل: Doktor Lang ist heute nicht in der Praxis، أي ليس موجوداً اليوم." },
      { id: "m3h1-s4", de: "Das Schwimmbad ist am Montag zu.", ar: "المسبح مغلق يوم الاثنين.", isTrue: true, whyAr: "قيل: am Montag geschlossen." },
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
      "Gespräch 1. Entschuldigung, wann fährt der nächste Bus ins Zentrum? In zehn Minuten, an Haltestelle zwei. " +
      "Gespräch 2. Hast du die Hausaufgaben? Nein, ich habe sie zu Hause vergessen. " +
      "Gespräch 3. Was kostet die Jacke? Dreißig Euro. Im Sommer kostet sie zwanzig. " +
      "Gespräch 4. Kommst du mit ins Kino? Heute nicht, ich muss arbeiten. Am Sonntag gern.",
    audioSegments: [
      "Entschuldigung, wann fährt der nächste Bus ins Zentrum?",
      "In zehn Minuten, an Haltestelle zwei.",
      "Hast du die Hausaufgaben?",
      "Nein, ich habe sie zu Hause vergessen.",
      "Was kostet die Jacke?",
      "Dreißig Euro. Im Sommer kostet sie zwanzig.",
      "Kommst du mit ins Kino?",
      "Heute nicht, ich muss arbeiten. Am Sonntag gern.",
    ],
    questions: [
      { id: "m3h2-q1", q: "Wann fährt der nächste Bus?", qAr: "متى تنطلق الحافلة التالية؟", options: ["In zehn Minuten", "In zwanzig Minuten", "Morgen früh"], correct: 0, whyAr: "قيل: In zehn Minuten, an Haltestelle zwei." },
      { id: "m3h2-q2", q: "Was hat die Frau vergessen?", qAr: "ماذا نسيت المرأة؟", options: ["Den Schlüssel", "Die Hausaufgaben", "Das Buch"], correct: 1, whyAr: "قالت: ich habe sie zu Hause vergessen — و«sie» تعود على die Hausaufgaben." },
      { id: "m3h2-q3", q: "Was kostet die Jacke jetzt?", qAr: "كم تكلف الجاكيت الآن؟", options: ["Zwanzig Euro", "Dreißig Euro", "Vierzig Euro"], correct: 1, whyAr: "قيل: Dreißig Euro. (العشرون في الصيف فقط)" },
      { id: "m3h2-q4", q: "Wann kommt die Frau ins Kino mit?", qAr: "متى ستأتي المرأة إلى السينما؟", options: ["Heute", "Am Sonntag", "Am Montag"], correct: 1, whyAr: "قالت: Heute nicht … Am Sonntag gern." },
    ],
  },

  /* ═══════════ Teil 3 — Anrufbeantworter: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Anrufbeantworter",
    titleAr: "الجزء 3 — رسالة على جهاز الرد الآلي",
    minutes: 5,
    points: 30,
    kind: "mcq",
    introAr: "تسمع رسالة من صديقة. أجب عن 4 أسئلة. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Hallo Omar, hier ist Lena. Am Samstag mache ich eine Party. " +
      "Sie beginnt um sieben Uhr bei mir zu Hause. Bitte bring einen Salat mit. " +
      "Ich wohne in der Blumenstraße acht. Ruf mich an, wenn du nicht kommen kannst.",
    audioSegments: [
      "Hallo Omar, hier ist Lena. Am Samstag mache ich eine Party. " +
        "Sie beginnt um sieben Uhr bei mir zu Hause. Bitte bring einen Salat mit. " +
        "Ich wohne in der Blumenstraße acht. Ruf mich an, wenn du nicht kommen kannst.",
    ],
    questions: [
      { id: "m3h3-q1", q: "Warum ruft Lena an?", qAr: "لماذا تتصل لينا؟", options: ["Um jemanden einzuladen", "Um sich zu entschuldigen", "Um nach dem Weg zu fragen"], correct: 0, whyAr: "قالت: Am Samstag mache ich eine Party — فهي تدعو." },
      { id: "m3h3-q2", q: "Wann beginnt die Party?", qAr: "متى تبدأ الحفلة؟", options: ["Um sechs Uhr", "Um sieben Uhr", "Um acht Uhr"], correct: 1, whyAr: "قالت: Sie beginnt um sieben Uhr." },
      { id: "m3h3-q3", q: "Was soll Omar mitbringen?", qAr: "ماذا يجب أن يُحضر عمر؟", options: ["Einen Kuchen", "Einen Salat", "Getränke"], correct: 1, whyAr: "قالت: Bitte bring einen Salat mit." },
      { id: "m3h3-q4", q: "Wo wohnt Lena?", qAr: "أين تسكن لينا؟", options: ["In der Blumenstraße acht", "In der Bahnhofstraße acht", "Bei Omar"], correct: 0, whyAr: "قالت: Ich wohne in der Blumenstraße acht." },
    ],
  },

  /* ═══════════ Teil 4 — Alltagsgespräche: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Alltag: Arbeiten und Reisen",
    titleAr: "الجزء 4 — حياة يومية: العمل والسفر",
    minutes: 4,
    points: 30,
    kind: "mcq",
    introAr: "تسمع حواراً وإعلاناً قصيراً. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch. Arbeitest du morgen im Büro? Nein, morgen arbeite ich zu Hause. Im Büro bin ich am Donnerstag. " +
      "Ansage. Liebe Fahrgäste, der Zug nach Bremen hat heute zwanzig Minuten Verspätung. " +
      "Er fährt um vierzehn Uhr dreißig.",
    audioSegments: [
      "Arbeitest du morgen im Büro?",
      "Nein, morgen arbeite ich zu Hause. Im Büro bin ich am Donnerstag.",
      "Liebe Fahrgäste, der Zug nach Bremen hat heute zwanzig Minuten Verspätung. Er fährt um vierzehn Uhr dreißig.",
    ],
    questions: [
      { id: "m3h4-q1", q: "Wo arbeitet die Frau morgen?", qAr: "أين تعمل المرأة غداً؟", options: ["Im Büro", "Zu Hause", "In Bremen"], correct: 1, whyAr: "قالت: morgen arbeite ich zu Hause." },
      { id: "m3h4-q2", q: "Wann ist sie im Büro?", qAr: "متى تكون في المكتب؟", options: ["Am Donnerstag", "Am Freitag", "Schon morgen früh"], correct: 0, whyAr: "قالت: Im Büro bin ich am Donnerstag." },
      { id: "m3h4-q3", q: "Wie viel Verspätung hat der Zug?", qAr: "كم تأخير القطار؟", options: ["Zehn Minuten", "Zwanzig Minuten", "Dreißig Minuten"], correct: 1, whyAr: "قيل: hat heute zwanzig Minuten Verspätung." },
    ],
  },
];
