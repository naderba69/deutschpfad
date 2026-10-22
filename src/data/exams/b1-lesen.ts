/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — قراءة B1 (بنية شبيهة بـ Goethe-Zertifikat B1)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · ~65 دقيقة · 14 عنصراً
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const B1_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — Kurztexte: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurze Mitteilungen",
    titleAr: "الجزء 1 — رسائل قصيرة",
    minutes: 12,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل الثلاث. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Liebe Kollegen, da die Heizung im Büro seit gestern ausgefallen ist, arbeiten wir heute im Konferenzraum. Die Techniker kommen morgen früh. Anna\n" +
      "(b) Sehr geehrte Frau Berger, leider muss ich unseren Termin absagen, weil mein Sohn im Krankenhaus liegt. Ich melde mich, sobald ich wieder Zeit habe. Dr. Kraus\n" +
      "(c) Hallo Tom, ich hätte gern deine Meinung zu meinem Bewerbungsschreiben. Könntest du es bis Mittwoch durchlesen? Ich wäre dir sehr dankbar. Mila",
    questions: [
      {
        id: "b1l1-q1",
        q: "Warum arbeiten die Kollegen heute im Konferenzraum?",
        qAr: "لماذا يعمل الزملاء اليوم في قاعة الاجتماعات؟",
        options: ["Weil das ganze Büro umgebaut wird", "Weil die Heizung im Büro ausgefallen ist", "Weil der Chef es so wollte und es allen sagte"],
        correct: 1,
        whyAr: "في (a): da die Heizung im Büro seit gestern ausgefallen ist.",
      },
      {
        id: "b1l1-q2",
        q: "Warum muss Dr. Kraus den Termin absagen?",
        qAr: "لماذا يضطر د. كراوس إلى إلغاء الموعد؟",
        options: ["Er ist selbst krank.", "Sein Sohn liegt im Krankenhaus.", "Er hat einen anderen Termin."],
        correct: 1,
        whyAr: "في (b): weil mein Sohn im Krankenhaus liegt.",
      },
      {
        id: "b1l1-q3",
        q: "Was möchte Mila von Tom?",
        qAr: "ماذا تريد ميلا من توم؟",
        options: ["Dass er ihr Geld leiht", "Dass er ihren Brief liest", "Dass er sie abholt"],
        correct: 1,
        whyAr: "في (c): Könntest du es bis Mittwoch durchlesen؟ أي قراءة رسالة التقديم.",
      },
    ],
  },

  /* ═══════════ Teil 2 — Zeitungsartikel: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Zeitungsartikel",
    titleAr: "الجزء 2 — مقال صحفي",
    minutes: 15,
    points: 25,
    kind: "rf",
    introAr: "اقرأ المقال. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Gemeinschaftsgärten werden in deutschen Großstädten immer beliebter. Auf brachliegenden Flächen bauen Nachbarn gemeinsam Gemüse und Kräuter an. " +
      "Viele Teilnehmer sagen, dass sie dort zum ersten Mal Menschen aus anderen Kulturen kennengelernt haben. " +
      "Die Stadtverwaltung unterstützt die Projekte zwar finanziell, verlangt aber, dass die Gärten für alle Bewohner zugänglich bleiben. " +
      "Ein Nachteil ist, dass die Ernte oft klein ausfällt, weil die Erde auf den früheren Industriegeländen stark belastet sein kann. " +
      "Deshalb werden viele Gärten mit Hochbeeten angelegt, die mit neuer Erde gefüllt sind.",
    statements: [
      { id: "b1l2-s1", de: "Die Gärten werden immer beliebter.", ar: "الحدائق تزداد شعبية.", isTrue: true, whyAr: "قيل: werden immer beliebter." },
      { id: "b1l2-s2", de: "Die Stadt verbietet, dass Fremde mitmachen.", ar: "المدينة تمنع مشاركة الغرباء.", isTrue: false, whyAr: "قيل: die Gärten für alle Bewohner zugänglich bleiben، أي متاحة لكل السكان." },
      { id: "b1l2-s3", de: "Die Ernte ist manchmal wegen der Erde gering.", ar: "المحصول قليل أحياناً بسبب التربة.", isTrue: true, whyAr: "قيل: die Ernte oft klein ausfällt, weil die Erde ... belastet sein kann." },
      { id: "b1l2-s4", de: "Viele Gärten benutzen Hochbeete mit neuer Erde.", ar: "كثير من الحدائق تستعمل أحواضاً مرتفعة بتربة جديدة.", isTrue: true, whyAr: "قيل: viele Gärten mit Hochbeeten angelegt, die mit neuer Erde gefüllt sind." },
    ],
  },

  /* ═══════════ Teil 3 — Ratgeber: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Ratgeber",
    titleAr: "الجزء 3 — نص إرشادي",
    minutes: 18,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص الإرشادي وأجب عن 3 أسئلة باختيار الخيار الصحيح.",
    text:
      "Wer im Ausland arbeiten möchte, sollte sich frühzeitig über die Anerkennung seines Berufsabschlusses informieren. " +
      "Diese Anerkennung ist nicht überall gleich geregelt, und das Verfahren kann mehrere Monate dauern. " +
      "Es lohnt sich deshalb, schon vor der Ausreise alle Unterlagen zu übersetzen und beglaubigen zu lassen. " +
      "Außerdem verlangen viele Arbeitgeber mindestens ein Sprachniveau B1, auch wenn die Stelle selbst eher einfach ist.",
    questions: [
      {
        id: "b1l3-q1",
        q: "Was sollte man vor der Abreise tun?",
        qAr: "ماذا يجب أن يفعل المرء قبل السفر؟",
        options: ["Eine Wohnung kaufen oder mieten", "Sich über die Anerkennung informieren", "Die Arbeit sofort beginnen"],
        correct: 1,
        whyAr: "قيل: sollte sich frühzeitig über die Anerkennung ... informieren.",
      },
      {
        id: "b1l3-q2",
        q: "Warum ist das Verfahren schwierig?",
        qAr: "لماذا الإجراء صعب؟",
        options: ["Es kostet sehr viel Geld und sehr viel Zeit.", "Es ist nicht überall gleich und dauert lange.", "Man braucht dafür einen Anwalt."],
        correct: 1,
        whyAr: "قيل: ist nicht überall gleich geregelt، وقد يستمر عدة أشهر.",
      },
      {
        id: "b1l3-q3",
        q: "Was verlangen viele Arbeitgeber, auch bei einfachen Stellen?",
        qAr: "ماذا يطلب كثير من أصحاب العمل حتى في الوظائف البسيطة؟",
        options: ["Ein Sprachniveau B1", "Einen Führerschein", "Zehn Jahre Erfahrung"],
        correct: 0,
        whyAr: "قيل: mindestens ein Sprachniveau B1.",
      },
    ],
  },

  /* ═══════════ Teil 4 — Meinungstexte: richtig / falsch ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Leserbriefe",
    titleAr: "الجزء 4 — رسائل القراء",
    minutes: 20,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الرسالتين. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Leserbrief von Jonas: Ich finde, Schulen sollten mehr Zeit für Sport einplanen. Wer sich bewegt, kann sich besser konzentrieren. Außerdem ist der Sportunterricht bei uns zu oft ausgefallen, weil die Lehrer fehlten.\n" +
      "Leserbrief von Greta: Ich verstehe den Wunsch, aber mehr Sport bedeutet weniger Zeit für Sprachen und Mathematik. Die Schüler brauchen beides. Ich würde eher die Pausen verlängern.",
    statements: [
      { id: "b1l4-s1", de: "Jonas meint, Sport hilft beim Lernen.", ar: "جوناس يرى أن الرياضة تساعد على التعلّم.", isTrue: true, whyAr: "قال: Wer sich bewegt, kann sich besser konzentrieren." },
      { id: "b1l4-s2", de: "Jonas findet, der Sportunterricht fällt zu oft aus.", ar: "جوناس يرى أن حصص الرياضة تُلغى كثيراً.", isTrue: true, whyAr: "قال: ist der Sportunterricht zu oft ausgefallen." },
      { id: "b1l4-s3", de: "Greta möchte mehr Zeit für Sport.", ar: "غريتا تريد وقتاً أكبر للرياضة.", isTrue: false, whyAr: "قالت: mehr Sport bedeutet weniger Zeit für Sprachen und Mathematik." },
      { id: "b1l4-s4", de: "Greta schlägt längere Pausen vor.", ar: "غريتا تقترح فسحات أطول.", isTrue: true, whyAr: "قالت: Ich würde eher die Pausen verlängern." },
    ],
  },
];
