/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — استماع A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · 15 عنصراً · 100 نقطة · الجزآن 1 و3 يُشغَّلان مرتين.
 *  نصّ هذا النموذج يُقرأ بنطق آلي (المشغّل يعلن ذلك) حتى تُنتَج مقاطعه.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const A2_MODEL3_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — Ansagen: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Ansagen",
    titleAr: "الجزء 1 — إعلانات",
    minutes: 5,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات. لكل إعلان عبارة واحدة: حدّد Richtig أو Falsch. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Ansage 1: Der ICE nach München fährt heute außerplanmäßig von Gleis elf statt von Gleis neun. " +
      "Ansage 2: Wegen Bauarbeiten ist die Straße vor dem Rathaus bis Freitag gesperrt. Bitte benutzen Sie die Umleitung. " +
      "Ansage 3: Das Stadtmuseum ist am ersten Montag im Monat kostenlos. " +
      "Ansage 4: Die Praxis Doktor Ahmed schließt heute schon um fünfzehn Uhr. Notfälle bitte über die Klinik am Park.",
    audioSegments: [
      "Ansage 1: Der ICE nach München fährt heute außerplanmäßig von Gleis elf statt von Gleis neun. " +
        "Ansage 2: Wegen Bauarbeiten ist die Straße vor dem Rathaus bis Freitag gesperrt. Bitte benutzen Sie die Umleitung. " +
        "Ansage 3: Das Stadtmuseum ist am ersten Montag im Monat kostenlos. " +
        "Ansage 4: Die Praxis Doktor Ahmed schließt heute schon um fünfzehn Uhr. Notfälle bitte über die Klinik am Park.",
    ],
    statements: [
      { id: "m3h1-s1", de: "Der Zug nach München fährt von Gleis neun.", ar: "قطار ميونخ ينطلق من الرصيف التاسع.", isTrue: false, whyAr: "قيل: von Gleis elf statt von Gleis neun." },
      { id: "m3h1-s2", de: "Die Straße vor dem Rathaus ist bis Freitag gesperrt.", ar: "الشارع أمام البلدية مغلق حتى الجمعة.", isTrue: true, whyAr: "قيل: bis Freitag gesperrt." },
      { id: "m3h1-s3", de: "Der Eintritt ins Stadtmuseum ist immer kostenlos.", ar: "الدخول إلى متحف المدينة مجاني دائماً.", isTrue: false, whyAr: "قيل: am ersten Montag im Monat kostenlos، أي في الاثنين الأول فقط." },
      { id: "m3h1-s4", de: "Die Praxis bleibt heute länger offen als sonst.", ar: "العيادة تبقى اليوم مفتوحة أكثر من المعتاد.", isTrue: false, whyAr: "قيل: schließt heute schon um fünfzehn Uhr — أي تُغلق أبكر." },
    ],
  },

  /* ═══════════ Teil 2 — Gespräche: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Gespräche",
    titleAr: "الجزء 2 — حوارات",
    minutes: 6,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText: [
      "Sag mal, wann fährst du dieses Jahr in Urlaub?",
      "Ende Juli, aber nur zwei Wochen. Danach habe ich noch eine Woche frei.",
      "Guten Tag, ich möchte diese Jacke umtauschen. Sie ist zu klein.",
      "Natürlich. Haben Sie den Kassenbon dabei? Ohne Bon können wir leider nur eine Gutschrift machen.",
      "Könnten Sie am Sonntag bitte nicht so früh staubsaugen? Mein Sohn schläft bis neun.",
      "Das habe ich nicht gewusst. Entschuldigung, dann warte ich bis zehn Uhr.",
      "Weißt du schon, wann der neue Deutschkurs beginnt?",
      "Ja, ab dem zwölften März, immer dienstags und donnerstags von achtzehn bis zwanzig Uhr.",
    ].join(" "),
    audioSegments: [
      "Sag mal, wann fährst du dieses Jahr in Urlaub?",
      "Ende Juli, aber nur zwei Wochen. Danach habe ich noch eine Woche frei.",
      "Guten Tag, ich möchte diese Jacke umtauschen. Sie ist zu klein.",
      "Natürlich. Haben Sie den Kassenbon dabei? Ohne Bon können wir leider nur eine Gutschrift machen.",
      "Könnten Sie am Sonntag bitte nicht so früh staubsaugen? Mein Sohn schläft bis neun.",
      "Das habe ich nicht gewusst. Entschuldigung, dann warte ich bis zehn Uhr.",
      "Weißt du schon, wann der neue Deutschkurs beginnt?",
      "Ja, ab dem zwölften März, immer dienstags und donnerstags von achtzehn bis zwanzig Uhr.",
    ],
    questions: [
      { id: "m3h2-q1", q: "Wie lange hat der Mann Urlaub?", qAr: "كم مدة عطلة الرجل؟", options: ["Zwei Wochen", "Drei Wochen", "Eine Woche"], correct: 0, whyAr: "قال: nur zwei Wochen." },
      { id: "m3h2-q2", q: "Was braucht die Kundin zum Umtausch?", qAr: "ماذا تحتاج الزبونة للاستبدال؟", options: ["Den Kassenbon", "Eine Gutschrift", "Eine neue Jacke"], correct: 0, whyAr: "قيل: Haben Sie den Kassenbon dabei? وبدونها تُقبل Gutschrift فقط — المطلوب إذن البون." },
      { id: "m3h2-q3", q: "Warum bittet der Nachbar um Ruhe?", qAr: "لماذا يطلب الجار الهدوء؟", options: ["Sein Sohn schläft noch", "Er arbeitet am Sonntag", "Er ist krank"], correct: 0, whyAr: "قال: Mein Sohn schläft bis neun." },
      { id: "m3h2-q4", q: "An welchen Tagen ist der Deutschkurs?", qAr: "في أي أيام درس الألمانية؟", options: ["Montag und Mittwoch", "Dienstag und Donnerstag", "Freitag und Samstag"], correct: 1, whyAr: "قيل: dienstags und donnerstags von achtzehn bis zwanzig Uhr." },
    ],
  },

  /* ═══════════ Teil 3 — Radio und Telefon: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Radio und Telefon",
    titleAr: "الجزء 3 — راديو وهاتف",
    minutes: 6,
    points: 30,
    kind: "mcq",
    introAr: "تسمع نشرة مرور ورسالة هاتفية من مدرسة لغات. أجب عن 4 أسئلة. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Verkehrsmeldung: Auf der A3 Richtung Frankfurt gibt es zwischen der Ausfahrt Waldau und dem Kreuz Ost einen Stau von acht Kilometern. " +
      "Ortskundige sollten über die Bundesstraße acht fahren. " +
      "Anrufbeantworter: Guten Tag, hier ist die Sprachschule Lingua. Ihr Kurs A2 am Montag fällt leider aus. " +
      "Der Kurs beginnt wieder am Mittwoch um achtzehn Uhr in Raum drei. Bitte bringen Sie Ihr neues Kursbuch mit. " +
      "Für Fragen rufen Sie uns bitte zwischen neun und zwölf Uhr an.",
    audioSegments: [
      "Verkehrsmeldung: Auf der A3 Richtung Frankfurt gibt es zwischen der Ausfahrt Waldau und dem Kreuz Ost einen Stau von acht Kilometern. Ortskundige sollten über die Bundesstraße acht fahren.",
      "Anrufbeantworter: Guten Tag, hier ist die Sprachschule Lingua. Ihr Kurs A2 am Montag fällt leider aus. Der Kurs beginnt wieder am Mittwoch um achtzehn Uhr in Raum drei. Bitte bringen Sie Ihr neues Kursbuch mit. Für Fragen rufen Sie uns bitte zwischen neun und zwölf Uhr an.",
    ],
    questions: [
      { id: "m3h3-q1", q: "Wie lang ist der Stau?", qAr: "كم طول الازدحام؟", options: ["Acht Kilometer", "Achtzehn Kilometer", "Drei Kilometer"], correct: 0, whyAr: "قيل: einen Stau von acht Kilometern." },
      { id: "m3h3-q2", q: "Wann fällt der Kurs aus?", qAr: "متى يُلغى الدرس؟", options: ["Am Montag", "Am Mittwoch", "Am Freitag"], correct: 0, whyAr: "قيل: Ihr Kurs A2 am Montag fällt leider aus." },
      { id: "m3h3-q3", q: "Wann beginnt der Kurs wieder?", qAr: "متى يبدأ الدرس من جديد؟", options: ["Mittwoch um achtzehn Uhr", "Montag um zwanzig Uhr", "Donnerstag um neun Uhr"], correct: 0, whyAr: "قيل: beginnt wieder am Mittwoch um achtzehn Uhr in Raum drei." },
      { id: "m3h3-q4", q: "Was soll man mitbringen?", qAr: "ماذا يجب أن يُحضر المرء؟", options: ["Das neue Kursbuch", "Den Kassenbon", "Die Lesernummer"], correct: 0, whyAr: "قيل: Bitte bringen Sie Ihr neues Kursbuch mit." },
    ],
  },

  /* ═══════════ Teil 4 — Gespräch im Büro: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Gespräch im Büro",
    titleAr: "الجزء 4 — حوار في المكتب",
    minutes: 5,
    points: 30,
    kind: "mcq",
    introAr: "تسمع حواراً في المكتب وإعلاناً داخلياً. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText: [
      "Frau Berger, die Besprechung am Donnerstag muss leider verschoben werden.",
      "Kein Problem. Wäre Dienstag um zehn Uhr besser? Da ist der große Raum frei.",
      "Dienstag passt mir gut. Ich schreibe allen eine E-Mail.",
      "Liebe Kolleginnen und Kollegen, ab nächster Woche gilt im zweiten Stock eine neue Regel: Bitte benutzen Sie den Aufzug nur für schwere Sachen. Treppensteigen ist gesünder und der Aufzug ist oft überlastet.",
    ].join(" "),
    audioSegments: [
      "Frau Berger, die Besprechung am Donnerstag muss leider verschoben werden.",
      "Kein Problem. Wäre Dienstag um zehn Uhr besser? Da ist der große Raum frei.",
      "Dienstag passt mir gut. Ich schreibe allen eine E-Mail.",
      "Liebe Kolleginnen und Kollegen, ab nächster Woche gilt im zweiten Stock eine neue Regel: Bitte benutzen Sie den Aufzug nur für schwere Sachen. Treppensteigen ist gesünder und der Aufzug ist oft überlastet.",
    ],
    questions: [
      { id: "m3h4-q1", q: "Warum sprechen die Kollegen?", qAr: "لماذا يتحدث الزميلان؟", options: ["Sie verschieben eine Besprechung", "Sie planen einen Urlaub", "Sie suchen einen Raum"], correct: 0, whyAr: "قيل: die Besprechung am Donnerstag muss leider verschoben werden." },
      { id: "m3h4-q2", q: "Wann ist die neue Besprechung?", qAr: "متى الاجتماع الجديد؟", options: ["Donnerstag um zehn Uhr", "Dienstag um zehn Uhr", "Dienstag um zwölf Uhr"], correct: 1, whyAr: "قيل: Wäre Dienstag um zehn Uhr besser? Da ist der große Raum frei." },
      { id: "m3h4-q3", q: "Wofür soll man den Aufzug benutzen?", qAr: "لماذا يُستخدم المصعد؟", options: ["Nur für schwere Sachen", "Für alle Wege", "Nur morgens"], correct: 0, whyAr: "قيل: benutzen Sie den Aufzug nur für schwere Sachen." },
    ],
  },
];
