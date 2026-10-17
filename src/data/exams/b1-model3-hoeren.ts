/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — استماع B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · 15 عنصراً · 100 نقطة · الجزآن 1 و3 يُشغَّلان مرتين.
 *  الصوت كامل: 19 مقطعاً مسجّلاً في `public/audio/exam-b1/m3/`، ووالنطق الآلي في المتصفح احتياط معلَن عند غياب أي ملف.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const B1_MODEL3_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — Ansagen: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Ansagen",
    titleAr: "الجزء 1 — إعلانات",
    minutes: 6,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات. لكل إعلان عبارة واحدة: حدّد Richtig أو Falsch. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Ansage 1: Wegen einer technischen Störung schließt die Stadtbibliothek heute bereits um sechzehn Uhr. Ausgeliehene Medien können Sie über den Automaten zurückgeben. " +
      "Ansage 2: Die Volkshochschule bietet ab Oktober einen kostenlosen Kurs zur Bewerbung an. Die Plätze sind begrenzt; eine Anmeldung im Internet ist verbindlich. " +
      "Ansage 3: Achtung, liebe Besucher: Die Sonderausstellung im Kunstmuseum ist bis Ende des Monats verlängert worden. " +
      "Ansage 4: Der Sportverein sucht Trainerinnen und Trainer für die Jugendmannschaften. Vorkenntnisse sind nicht zwingend, eine Schulung wird angeboten.",
    audioSegments: [
      "Ansage 1: Wegen einer technischen Störung schließt die Stadtbibliothek heute bereits um sechzehn Uhr. Ausgeliehene Medien können Sie über den Automaten zurückgeben. " +
        "Ansage 2: Die Volkshochschule bietet ab Oktober einen kostenlosen Kurs zur Bewerbung an. Die Plätze sind begrenzt; eine Anmeldung im Internet ist verbindlich. " +
        "Ansage 3: Achtung, liebe Besucher: Die Sonderausstellung im Kunstmuseum ist bis Ende des Monats verlängert worden. " +
        "Ansage 4: Der Sportverein sucht Trainerinnen und Trainer für die Jugendmannschaften. Vorkenntnisse sind nicht zwingend, eine Schulung wird angeboten.",
    ],
    statements: [
      { id: "m3h1-s1", de: "Die Bibliothek schließt heute früher als geplant.", ar: "المكتبة تُغلق اليوم أبكر من المعتاد.", isTrue: true, whyAr: "قيل: schließt heute bereits um sechzehn Uhr." },
      { id: "m3h1-s2", de: "Für den Bewerbungskurs muss man sich online anmelden.", ar: "يجب التسجيل إلكترونياً في دورة التقديم.", isTrue: true, whyAr: "قيل: eine Anmeldung im Internet ist verbindlich." },
      { id: "m3h1-s3", de: "Die Sonderausstellung endet früher als geplant.", ar: "المعرض الخاص ينتهي أبكر من المخطط.", isTrue: false, whyAr: "قيل: ist bis Ende des Monats verlängert worden — أي مُدَّ لا اختُصر." },
      { id: "m3h1-s4", de: "Für die Trainertätigkeit braucht man bereits Erfahrung.", ar: "للعمل كمدرب يجب أن تكون لديك خبرة مسبقة.", isTrue: false, whyAr: "قيل: Vorkenntnisse sind nicht zwingend." },
    ],
  },

  /* ═══════════ Teil 2 — Gespräche: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Gespräche",
    titleAr: "الجزء 2 — حوارات",
    minutes: 8,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText: [
      "Du wirkst gestresst. Liegt es an der Prüfung?",
      "Nicht nur. Ich habe zwei Wochen kaum geschlafen, weil ich neben der Arbeit noch einen Kurs besuche. Ich muss meine Zeit besser einteilen.",
      "Ich habe gehört, du willst deine Wohnung kündigen?",
      "Das war der Plan, aber die Mieten sind so gestiegen, dass ich bleibe und lieber mit dem Vermieter über die Heizung spreche.",
      "Wollen Sie wirklich mit dem Fahrrad zur Arbeit fahren, bei dem Wetter?",
      "Ich probiere es einen Monat lang. Wenn es mir zu gefährlich wird, nehme ich wieder die Bahn.",
      "Kannst du mir am Samstag beim Umzug helfen? Ich zahle dir auch etwas.",
      "Bezahlen musst du mich nicht. Ich helfe gern, aber erst ab Mittag, vorher habe ich einen Termin.",
    ].join(" "),
    audioSegments: [
      "Du wirkst gestresst. Liegt es an der Prüfung?",
      "Nicht nur. Ich habe zwei Wochen kaum geschlafen, weil ich neben der Arbeit noch einen Kurs besuche. Ich muss meine Zeit besser einteilen.",
      "Ich habe gehört, du willst deine Wohnung kündigen?",
      "Das war der Plan, aber die Mieten sind so gestiegen, dass ich bleibe und lieber mit dem Vermieter über die Heizung spreche.",
      "Wollen Sie wirklich mit dem Fahrrad zur Arbeit fahren, bei dem Wetter?",
      "Ich probiere es einen Monat lang. Wenn es mir zu gefährlich wird, nehme ich wieder die Bahn.",
      "Kannst du mir am Samstag beim Umzug helfen? Ich zahle dir auch etwas.",
      "Bezahlen musst du mich nicht. Ich helfe gern, aber erst ab Mittag, vorher habe ich einen Termin.",
    ],
    questions: [
      { id: "m3h2-q1", q: "Warum ist die Person gestresst?", qAr: "لماذا الشخص متوتر؟", options: ["Sie besucht einen Kurs neben der Arbeit", "Sie hat die Prüfung nicht bestanden", "Sie sucht eine neue Wohnung"], correct: 0, whyAr: "قال: weil ich neben der Arbeit noch einen Kurs besuche. Ich muss meine Zeit besser einteilen." },
      { id: "m3h2-q2", q: "Warum bleibt die Person in der Wohnung?", qAr: "لماذا يبقى الشخص في الشقة؟", options: ["Die Mieten sind gestiegen", "Der Vermieter hat gekündigt", "Die Heizung ist neu"], correct: 0, whyAr: "قال: die Mieten sind so gestiegen, dass ich bleibe." },
      { id: "m3h2-q3", q: "Was macht die Person, wenn das Radfahren zu gefährlich wird?", qAr: "ماذا سيفعل الشخص إن صار ركوب الدراجة خطراً؟", options: ["Sie nimmt wieder die Bahn", "Sie kauft ein eigenes Auto", "Sie fährt langsamer als früher"], correct: 0, whyAr: "قال: nehme ich wieder die Bahn." },
      { id: "m3h2-q4", q: "Wann kann die Person beim Umzug helfen?", qAr: "متى يستطيع الشخص المساعدة في الانتقال؟", options: ["Ab Mittag", "Den ganzen Samstag", "Am Abend"], correct: 0, whyAr: "قال: aber erst ab Mittag, vorher habe ich einen Termin." },
    ],
  },

  /* ═══════════ Teil 3 — Radiobeitrag: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Radiobeitrag",
    titleAr: "الجزء 3 — تقرير إذاعي",
    minutes: 8,
    points: 30,
    kind: "mcq",
    introAr: "تسمع تقريراً إذاعياً عن العمل التطوعي. أجب عن 4 أسئلة. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Moderatorin: Freiwilligenarbeit ist in vielen Städten gefragt. Herr Reuter koordiniert die Einsätze in unserer Region. " +
      "Herr Reuter: Wir haben im letzten Jahr dreihundert Freiwillige vermittelt, vor allem in der Kinderbetreuung und in der Pflege. " +
      "Am häufigsten scheitern Einsätze nicht am Engagement, sondern an der Zeit: Viele können nur am Wochenende helfen. " +
      "Deshalb bieten wir seit diesem Jahr auch kurze Einsätze von drei Stunden an. " +
      "Moderatorin: Und was wünschen Sie sich für die Zukunft? " +
      "Herr Reuter: Wir möchten mehr junge Leute gewinnen. An den Schulen fehlt oft die Information, nicht das Interesse.",
    // أربعة أدوار متبادلة (مذيعة/خبيرة) — وسم المتحدث يبقى في النص المعروض ولا يُنطق
    audioSegments: [
      "Freiwilligenarbeit ist in vielen Städten gefragt. Herr Reuter koordiniert die Einsätze in unserer Region.",
      "Wir haben im letzten Jahr dreihundert Freiwillige vermittelt, vor allem in der Kinderbetreuung und in der Pflege. Am häufigsten scheitern Einsätze nicht am Engagement, sondern an der Zeit: Viele können nur am Wochenende helfen. Deshalb bieten wir seit diesem Jahr auch kurze Einsätze von drei Stunden an.",
      "Und was wünschen Sie sich für die Zukunft?",
      "Wir möchten mehr junge Leute gewinnen. An den Schulen fehlt oft die Information, nicht das Interesse.",
    ],
    questions: [
      { id: "m3h3-q1", q: "In welchen Bereichen wurden die meisten Freiwilligen vermittelt?", qAr: "في أي مجالين جرى توظيف أغلب المتطوعين؟", options: ["Kinderbetreuung und Pflege", "Gartenarbeit und der Bau", "Sport und Musik für Jugendliche"], correct: 0, whyAr: "قيل: vor allem in der Kinderbetreuung und in der Pflege." },
      { id: "m3h3-q2", q: "Warum scheitern viele Einsätze?", qAr: "لماذا يفشل كثير من المهام التطوعية؟", options: ["Wegen fehlender Zeit im Beruf", "Wegen fehlenden Engagements", "Wegen zu geringer Bezahlung"], correct: 0, whyAr: "قيل: scheitern nicht am Engagement, sondern an der Zeit." },
      { id: "m3h3-q3", q: "Was bietet die Organisation neu an?", qAr: "ما الذي تقدّمه المنظمة حديثاً؟", options: ["Kurze Einsätze von drei Stunden", "Bezahlte Stellen in der Stadt", "Kurse für neue Pflegekräfte"], correct: 0, whyAr: "قيل: bieten wir seit diesem Jahr auch kurze Einsätze von drei Stunden an." },
      { id: "m3h3-q4", q: "Was wünscht sich Herr Reuter?", qAr: "ماذا يتمنى السيد روتر؟", options: ["Mehr junge Freiwillige", "Weniger Einsätze am Wochenende", "Mehr Geld für die Schulen"], correct: 0, whyAr: "قيل: Wir möchten mehr junge Leute gewinnen." },
    ],
  },

  /* ═══════════ Teil 4 — Beratung: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Beratung",
    titleAr: "الجزء 4 — مشورة",
    minutes: 6,
    points: 30,
    kind: "mcq",
    introAr: "تسمع مشاورة في مركز تعلّم. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText: [
      "Guten Tag, ich möchte mich für einen Deutschkurs anmelden, aber ich weiß nicht, welches Niveau passt.",
      "Wir machen zuerst einen kurzen Test, dann empfehlen wir Ihnen einen Kurs. Wichtig ist auch: Möchten Sie lieber vormittags oder abends lernen?",
      "Abends, denn ich arbeite bis sechzehn Uhr. Und ich brauche einen Kurs mit Prüfungsvorbereitung.",
      "Dann empfehle ich Ihnen B1 am Dienstag- und Donnerstagabend. Der Kurs dauert zwölf Wochen und endet mit einer Probeprüfung.",
      "Und was kostet das?",
      "Er kostet zweihundertvierzig Euro, Ratenzahlung ist möglich. Wenn Sie sich diese Woche anmelden, bekommen Sie das Kursbuch gratis.",
    ].join(" "),
    audioSegments: [
      "Guten Tag, ich möchte mich für einen Deutschkurs anmelden, aber ich weiß nicht, welches Niveau passt.",
      "Wir machen zuerst einen kurzen Test, dann empfehlen wir Ihnen einen Kurs. Wichtig ist auch: Möchten Sie lieber vormittags oder abends lernen?",
      "Abends, denn ich arbeite bis sechzehn Uhr. Und ich brauche einen Kurs mit Prüfungsvorbereitung.",
      "Dann empfehle ich Ihnen B1 am Dienstag- und Donnerstagabend. Der Kurs dauert zwölf Wochen und endet mit einer Probeprüfung.",
      "Und was kostet das?",
      "Er kostet zweihundertvierzig Euro, Ratenzahlung ist möglich. Wenn Sie sich diese Woche anmelden, bekommen Sie das Kursbuch gratis.",
    ],
    questions: [
      { id: "m3h4-q1", q: "Was macht die Beraterin zuerst?", qAr: "ماذا تفعل المستشارة أولاً؟", options: ["Einen kurzen Test", "Eine Anmeldung", "Eine Probeprüfung"], correct: 0, whyAr: "قالت: Wir machen zuerst einen kurzen Test." },
      { id: "m3h4-q2", q: "Warum möchte der Kunde abends lernen?", qAr: "لماذا يريد العميل الدراسة مساءً؟", options: ["Er arbeitet bis sechzehn Uhr", "Er hat morgens keinen Bus", "Der Kurs ist billiger"], correct: 0, whyAr: "قال: Abends, denn ich arbeite bis sechzehn Uhr." },
      { id: "m3h4-q3", q: "Was bekommt man bei Anmeldung in dieser Woche gratis?", qAr: "ماذا يحصل عليه المرء مجاناً عند التسجيل هذا الأسبوع؟", options: ["Das Kursbuch", "Den Test", "Eine Probeprüfung"], correct: 0, whyAr: "قالت: Wenn Sie sich diese Woche anmelden, bekommen Sie das Kursbuch gratis." },
    ],
  },
];
