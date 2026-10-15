/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — استماع A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · 15 عنصراً · 100 نقطة · الجزآن 1 و3 يُشغَّلان مرتين.
 *  المستوى: جمل مركّبة بسيطة، Perfekt، أفعال مساعدة، جمل تابعة بـ weil/dass/wenn.
 *  الصوت: نطق آلي معلَن (مقاطع هذا النموذج غير مسجّلة بعد).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const A2_MODEL2_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — Ansagen im Alltag: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Ansagen",
    titleAr: "الجزء 1 — إعلانات",
    minutes: 5,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات قصيرة. لكل إعلان عبارة واحدة: حدّد Richtig أو Falsch. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Ansage 1: Der Kurs für Anfänger beginnt am Montag um neun Uhr im Raum zwei. " +
      "Ansage 2: Wegen einer Reparatur bleibt das Schwimmbad bis Freitag geschlossen. " +
      "Ansage 3: Der Schnellzug nach Wien hat heute zwanzig Minuten Verspätung. " +
      "Ansage 4: Die Praxis Doktor Wolf ist am Mittwochnachmittag geschlossen und am Donnerstag wieder geöffnet.",
    statements: [
      { id: "m2a1-s1", de: "Der Kurs beginnt am Montag.", ar: "الدورة تبدأ يوم الاثنين.", isTrue: true, whyAr: "قيل: Der Kurs beginnt am Montag um neun Uhr." },
      { id: "m2a1-s2", de: "Das Schwimmbad ist am Donnerstag geöffnet.", ar: "المسبح مفتوح يوم الخميس.", isTrue: false, whyAr: "قيل: bleibt bis Freitag geschlossen، أي إنه مغلق حتى الجمعة." },
      { id: "m2a1-s3", de: "Der Zug fährt pünktlich.", ar: "القطار ينطلق في وقته.", isTrue: false, whyAr: "قيل: zwanzig Minuten Verspätung — هناك تأخير." },
      { id: "m2a1-s4", de: "Die Praxis ist am Donnerstag wieder geöffnet.", ar: "العيادة تعود للعمل يوم الخميس.", isTrue: true, whyAr: "قيل: am Donnerstag wieder geöffnet." },
    ],
  },

  /* ═══════════ Teil 2 — Gespräche unterwegs: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Gespräche",
    titleAr: "الجزء 2 — حوارات",
    minutes: 6,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات قصيرة. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch 1. Frau: Können wir das Treffen auf Donnerstag verschieben? Mann: Donnerstag habe ich leider einen Termin. Wie wäre es am Freitag? " +
      "Gespräch 2. Mann: Wie bist du heute zur Arbeit gekommen? Frau: Mit dem Fahrrad, weil der Bus zu voll war. " +
      "Gespräch 3. Frau: Hast du schon für die Prüfung gelernt? Mann: Nur wenig. Ich lerne lieber morgens, nicht abends. " +
      "Gespräch 4. Mann: Warum ist die Heizung aus? Frau: Der Hausmeister hat sie gestern repariert, aber heute funktioniert sie wieder nicht.",
    questions: [
      { id: "m2a2-q1", q: "Wann treffen sich die beiden?", qAr: "متى يلتقي الاثنان؟", options: ["Am Donnerstag", "Am Freitag", "Am Montag"], correct: 1, whyAr: "قال: Donnerstag habe ich einen Termin. Wie wäre es am Freitag?" },
      { id: "m2a2-q2", q: "Warum ist die Frau mit dem Fahrrad gefahren?", qAr: "لماذا ركبت المرأة الدراجة؟", options: ["Weil das Wetter schön war", "Weil der Bus zu voll war", "Weil ihr Auto kaputt ist"], correct: 1, whyAr: "قالت: weil der Bus zu voll war." },
      { id: "m2a2-q3", q: "Wann lernt der Mann lieber?", qAr: "متى يفضّل الرجل الدراسة؟", options: ["Morgens", "Abends", "Nachts"], correct: 0, whyAr: "قال: Ich lerne lieber morgens, nicht abends." },
      { id: "m2a2-q4", q: "Was ist mit der Heizung?", qAr: "ما مشكلة التدفئة؟", options: ["Sie funktioniert wieder nicht", "Sie ist neu", "Sie ist zu warm"], correct: 0, whyAr: "قالت: heute funktioniert sie wieder nicht." },
    ],
  },

  /* ═══════════ Teil 3 — Radiobeitrag / Anruf: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Radio und Telefon",
    titleAr: "الجزء 3 — راديو وهاتف",
    minutes: 6,
    points: 30,
    kind: "mcq",
    introAr: "تسمع مقطعاً من الراديو ورسالة هاتفية. أجب عن 4 أسئلة. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Sie hören das Stadtradio. Wegen der Bauarbeiten in der Goethestraße fährt die Linie vier seit Montag eine andere Route. " +
      "Die Haltestelle Marktplatz wird nicht angefahren. Fahrgäste können die Haltestelle Rathaus benutzen, sie liegt fünf Minuten zu Fuß entfernt. " +
      "Die Bauarbeiten dauern bis Ende Oktober. " +
      "Anruf: Guten Tag, hier ist Familie Weber. Wir haben Ihr Inserat für die Wohnung gelesen. Ist die Wohnung noch frei? Bitte rufen Sie uns bis achtzehn Uhr an.",
    questions: [
      { id: "m2a3-q1", q: "Warum fährt die Linie vier anders?", qAr: "لماذا تسير الحافلة رقم 4 في مسار آخر؟", options: ["Wegen Bauarbeiten", "Wegen eines Unfalls", "Wegen eines Festes"], correct: 0, whyAr: "قيل: Wegen der Bauarbeiten in der Goethestraße." },
      { id: "m2a3-q2", q: "Welche Haltestelle können die Fahrgäste benutzen?", qAr: "أي موقف يمكن للركاب استخدامه؟", options: ["Marktplatz", "Rathaus", "Goethestraße"], correct: 1, whyAr: "قيل: können die Haltestelle Rathaus benutzen، وMarktplatz لا يُخدَم." },
      { id: "m2a3-q3", q: "Wie lange dauern die Bauarbeiten?", qAr: "كم تستمر أشغال البناء؟", options: ["Bis Ende Oktober", "Bis Ende September", "Eine Woche"], correct: 0, whyAr: "قيل: dauern bis Ende Oktober." },
      { id: "m2a3-q4", q: "Warum ruft Familie Weber an?", qAr: "لماذا تتصل عائلة فيبر؟", options: ["Um sich für die Wohnung zu interessieren", "Um sich zu beschweren", "Um einen Termin beim Arzt zu machen"], correct: 0, whyAr: "قالت: Ist die Wohnung noch frei?" },
    ],
  },

  /* ═══════════ Teil 4 — Längeres Gespräch: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Gespräch im Büro",
    titleAr: "الجزء 4 — حوار في المكتب",
    minutes: 5,
    points: 30,
    kind: "mcq",
    introAr: "تسمع حواراً أطول. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Frau Berg: Herr Novak, könnten Sie nächste Woche die Schulung übernehmen? Herr Novak: Nächste Woche habe ich Urlaub, aber in der Woche danach ist es möglich. " +
      "Frau Berg: Gut, dann plane ich Sie für Dienstag ein. Die Teilnehmer kommen aus der Produktion. " +
      "Herr Novak: Soll ich die Unterlagen vorbereiten? Frau Berg: Ja, bitte schicken Sie mir die Folien bis Freitag. " +
      "Herr Novak: Dann reserviere ich auch einen Raum mit Beamer.",
    questions: [
      { id: "m2a4-q1", q: "Warum kann Herr Novak nächste Woche nicht?", qAr: "لماذا لا يستطيع السيد نوفاك الأسبوع القادم؟", options: ["Er hat Urlaub", "Er ist krank", "Er hat eine Schulung"], correct: 0, whyAr: "قال: Nächste Woche habe ich Urlaub." },
      { id: "m2a4-q2", q: "Bis wann soll er die Folien schicken?", qAr: "حتى متى يجب أن يرسل الشرائح؟", options: ["Bis Dienstag", "Bis Freitag", "Bis Montag"], correct: 1, whyAr: "قالت: schicken Sie mir die Folien bis Freitag." },
      { id: "m2a4-q3", q: "Was reserviert Herr Novak zusätzlich?", qAr: "ماذا يحجز السيد نوفاك إضافةً؟", options: ["Einen Raum mit Beamer", "Einen Tisch im Restaurant", "Ein Taxi"], correct: 0, whyAr: "قال: reserviere ich auch einen Raum mit Beamer." },
    ],
  },
];
