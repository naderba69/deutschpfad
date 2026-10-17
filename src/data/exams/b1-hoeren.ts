/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — استماع B1 (بنية شبيهة بـ Goethe-Zertifikat B1)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · ~40 دقيقة · 15 عنصراً
 *  الجزآن 1 و3 يُشغَّلان مرتين، والباقي مرة واحدة.
 *  الصوت: 14 مقطعاً مسجّلاً في `public/audio/exam-b1/` (الجذر)،
 *  والنطق الآلي في المتصفح احتياط معلَن عند غياب أي ملف.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const B1_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — Durchsagen: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Durchsagen im Betrieb",
    titleAr: "الجزء 1 — إعلانات داخل الشركة",
    minutes: 6,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات داخلية. لكل إعلان عبارة: حدّد Richtig أو Falsch. يُشغَّل الجزء مرتين.",
    allowRepeat: true,
    audioText:
      "Durchsage 1: Wegen der Wartungsarbeiten ist der Aufzug bis Freitag außer Betrieb. Bitte benutzen Sie die Treppe. " +
      "Durchsage 2: Die Betriebsversammlung, die für Donnerstag geplant war, findet nun eine Woche später statt. " +
      "Durchsage 3: Wer an dem Sprachkurs teilnehmen möchte, sollte sich bis Ende des Monats bei der Personalabteilung melden. " +
      "Durchsage 4: Der Parkplatz hinter dem Gebäude wird im Sommer neu asphaltiert, deshalb dürfen Autos dort nicht parken.",
    statements: [
      { id: "b1h1-s1", de: "Der Aufzug funktioniert wieder ab Freitag.", ar: "المصعد يعمل مجدداً ابتداءً من الجمعة.", isTrue: false, whyAr: "قيل: bis Freitag außer Betrieb، أي يعمل من السبت لا من الجمعة." },
      { id: "b1h1-s2", de: "Die Betriebsversammlung findet am Donnerstag statt.", ar: "اجتماع الموظفين يُعقد يوم الخميس.", isTrue: false, whyAr: "قيل: findet nun eine Woche später statt، أي تأجل أسبوعاً." },
      { id: "b1h1-s3", de: "Man muss sich bei der Personalabteilung anmelden.", ar: "يجب التسجيل لدى قسم شؤون الموظفين.", isTrue: true, whyAr: "قيل: sollte sich bei der Personalabteilung melden." },
      { id: "b1h1-s4", de: "Auf dem Parkplatz darf man im Sommer parken.", ar: "يُسمح بالوقوف في المواقف صيفاً.", isTrue: false, whyAr: "قيل: deshalb dürfen Autos dort nicht parken." },
    ],
  },

  /* ═══════════ Teil 2 — Gespräche: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Gespräche über Pläne",
    titleAr: "الجزء 2 — حوارات حول الخطط",
    minutes: 8,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch 1. Frau: Wenn ich mehr Zeit hätte, würde ich einen Sprachkurs machen. Mann: Warum machst du es dann nicht? " +
      "Gespräch 2. Mann: Hast du gehört? Der Chef geht im Herbst in Rente. Frau: Ja, deshalb sollen wir die Projekte bis dahin abschließen. " +
      "Gespräch 3. Frau: Ich habe mich für die Stelle beworben, obwohl ich noch keine Erfahrung habe. Mann: Das ist mutig! " +
      "Gespräch 4. Mann: Das Hotel wurde letztes Jahr renoviert, deshalb sind die Zimmer jetzt viel moderner. Frau: Das klingt gut.",
    questions: [
      {
        id: "b1h2-q1",
        q: "Was würde die Frau machen, wenn sie mehr Zeit hätte?",
        qAr: "ماذا كانت ستفعل المرأة لو كان لديها وقت أكثر؟",
        options: ["Einen Sprachkurs besuchen", "In Urlaub fahren und ausruhen", "Ein neues Auto kaufen"],
        correct: 0,
        whyAr: "قالت: würde ich einen Sprachkurs machen، وهي جملة شرطية بالـ Konjunktiv II.",
      },
      {
        id: "b1h2-q2",
        q: "Warum sollen die Projekte bis Herbst abgeschlossen werden?",
        qAr: "لماذا يجب إنهاء المشاريع قبل الخريف؟",
        options: ["Weil der Chef in Rente geht", "Weil ein Kunde kommt", "Weil das Büro umzieht"],
        correct: 0,
        whyAr: "قيل: deshalb sollen wir die Projekte bis dahin abschließen بسبب تقاعد المدير.",
      },
      {
        id: "b1h2-q3",
        q: "Was sagt der Mann über die Bewerbung der Frau?",
        qAr: "ماذا يقول الرجل عن تقديم المرأة على الوظيفة؟",
        options: ["Es war ein Fehler.", "Es ist mutig.", "Es ist zu spät."],
        correct: 1,
        whyAr: "قال: Das ist mutig!",
      },
      {
        id: "b1h2-q4",
        q: "Warum sind die Zimmer im Hotel moderner?",
        qAr: "لماذا الغرف في الفندق أكثر حداثة؟",
        options: ["Weil das Hotel neu gebaut wurde", "Weil das Hotel renoviert wurde", "Weil es mehr Gäste gibt"],
        correct: 1,
        whyAr: "قيل: Das Hotel wurde letztes Jahr renoviert.",
      },
    ],
  },

  /* ═══════════ Teil 3 — Radiobeitrag / Nachricht: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Radiobeitrag",
    titleAr: "الجزء 3 — تقرير إذاعي",
    minutes: 8,
    points: 30,
    kind: "mcq",
    introAr: "تسمع تقريراً إذاعياً عن الدراجات في المدينة. أجب عن 4 أسئلة. يُشغَّل الجزء مرتين.",
    allowRepeat: true,
    audioText:
      "Immer mehr Menschen in der Stadt fahren mit dem Fahrrad zur Arbeit. Laut einer Umfrage hat sich die Zahl in den letzten drei Jahren verdoppelt. " +
      "Die Stadt will deshalb neue Radwege bauen, obwohl die Kosten hoch sind. " +
      "Kritiker sagen, dass viele Straßen dafür zu eng seien. Ein Verkehrsexperte meint dagegen, dass sich die Investition langfristig lohnt, weil weniger Autos weniger Staus bedeuten.",
    questions: [
      {
        id: "b1h3-q1",
        q: "Was hat sich in den letzten drei Jahren verändert?",
        qAr: "ماذا تغيّر خلال السنوات الثلاث الأخيرة؟",
        options: ["Die Zahl der Radfahrer hat sich verdoppelt.", "Die Zahl der Autos ist deutlich gesunken.", "Die Radwege wurden überall neu gebaut."],
        correct: 0,
        whyAr: "قيل: hat sich die Zahl in den letzten drei Jahren verdoppelt.",
      },
      {
        id: "b1h3-q2",
        q: "Welches Problem gibt es beim Bau neuer Radwege?",
        qAr: "ما المشكلة في بناء مسارات الدراجات الجديدة؟",
        options: ["Die Kosten sind hoch.", "Niemand will Rad fahren.", "Es gibt zu viele Experten."],
        correct: 0,
        whyAr: "قيل: obwohl die Kosten hoch sind.",
      },
      {
        id: "b1h3-q3",
        q: "Was sagen die Kritiker?",
        qAr: "ماذا يقول المنتقدون؟",
        options: ["Die Straßen sind zu eng.", "Die Radwege sind zu lang.", "Die Autos sind zu teuer."],
        correct: 0,
        whyAr: "قيل: viele Straßen dafür zu eng seien.",
      },
      {
        id: "b1h3-q4",
        q: "Warum lohnt sich die Investition nach Meinung des Experten?",
        qAr: "لماذا تستحق الاستثمار حسب رأي الخبير؟",
        options: ["Weil weniger Autos weniger Staus bedeuten", "Weil die Stadt damit Geld verdient", "Weil die Radwege schön und sicher sind"],
        correct: 0,
        whyAr: "قيل: weil weniger Autos weniger Staus bedeuten.",
      },
    ],
  },

  /* ═══════════ Teil 4 — Interview: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Interview",
    titleAr: "الجزء 4 — مقابلة",
    minutes: 6,
    points: 30,
    kind: "mcq",
    introAr: "تسمع مقابلة قصيرة مع مدرّب لغات. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Reporterin: Herr Kaya, warum lernen so viele Erwachsene heute eine neue Sprache? " +
      "Herr Kaya: Viele brauchen sie für den Beruf. Außerdem ist es wichtig, dass man sich im Alltag verständigen kann, ohne jemanden um Hilfe bitten zu müssen. " +
      "Reporterin: Und was raten Sie Anfängern? " +
      "Herr Kaya: Sie sollten jeden Tag ein paar Minuten sprechen, auch wenn sie Fehler machen. Wer nur Grammatik lernt, spricht später oft zu wenig.",
    questions: [
      {
        id: "b1h4-q1",
        q: "Warum lernen viele Erwachsene eine Sprache?",
        qAr: "لماذا يتعلم كثير من البالغين لغة جديدة؟",
        options: ["Für den Beruf und den Alltag", "Nur für Reisen", "Für die Schule der Kinder"],
        correct: 0,
        whyAr: "قال: für den Beruf، وأيضاً ليتدبّر أمره في الحياة اليومية.",
      },
      {
        id: "b1h4-q2",
        q: "Was rät Herr Kaya den Anfängern?",
        qAr: "ماذا ينصح السيد كايا المبتدئين؟",
        options: ["Nur Grammatik und Vokabeln zu lernen", "Jeden Tag zu sprechen, auch mit Fehlern", "Keine Fehler zu machen und langsam zu lernen"],
        correct: 1,
        whyAr: "قال: jeden Tag ein paar Minuten sprechen، auch wenn sie Fehler machen.",
      },
      {
        id: "b1h4-q3",
        q: "Was passiert, wenn man nur Grammatik lernt?",
        qAr: "ماذا يحدث إذا تعلم المرء القواعد فقط؟",
        options: ["Man spricht später oft zu wenig.", "Man vergisst die Grammatik sofort.", "Man findet schneller einen Job."],
        correct: 0,
        whyAr: "قال: spricht später oft zu wenig.",
      },
    ],
  },
];
