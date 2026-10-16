/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — استماع B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · 15 عنصراً · 100 نقطة (20/20/30/30) · الجزآن 1 و3 مرتين.
 *  المستوى: جمل مركّبة، Konjunktiv II، Passiv، روابط (obwohl · deshalb · damit).
 *  الصوت: نطق آلي معلَن (مقاطع هذا النموذج غير مسجّلة بعد).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const B1_MODEL2_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — Ansagen im Betrieb: richtig / falsch ═══════════ */
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
      "Ansage 1: Die Weiterbildung „Präsentieren auf Deutsch“ findet ab November jeden zweiten Donnerstag statt. " +
      "Ansage 2: Weil die Kantine renoviert wird, gibt es ab Montag nur kalte Speisen im Foyer. " +
      "Ansage 3: Die Bewerbungsfrist für das Praktikum wurde bis zum 15. März verlängert. " +
      "Ansage 4: Der Fahrradkeller wird am Wochenende gereinigt; bitte stellen Sie Ihre Fahrräder bis Freitagabend ins Erdgeschoss.",
    audioSegments: [
      "Ansage 1: Die Weiterbildung „Präsentieren auf Deutsch“ findet ab November jeden zweiten Donnerstag statt. " +
        "Ansage 2: Weil die Kantine renoviert wird, gibt es ab Montag nur kalte Speisen im Foyer. " +
        "Ansage 3: Die Bewerbungsfrist für das Praktikum wurde bis zum 15. März verlängert. " +
        "Ansage 4: Der Fahrradkeller wird am Wochenende gereinigt; bitte stellen Sie Ihre Fahrräder bis Freitagabend ins Erdgeschoss.",
    ],
    statements: [
      { id: "m2c1-s1", de: "Die Weiterbildung findet jede Woche statt.", ar: "الدورة التدريبية تُقام كل أسبوع.", isTrue: false, whyAr: "قيل: jeden zweiten Donnerstag، أي كل أسبوعين." },
      { id: "m2c1-s2", de: "Die Kantine ist ab Montag geschlossen.", ar: "المقصف مغلق من الاثنين.", isTrue: false, whyAr: "قيل: Weil die Kantine renoviert wird، لا تقدّم إلا أطباقاً باردة في الرواق." },
      { id: "m2c1-s3", de: "Man kann sich länger um das Praktikum bewerben.", ar: "يمكن التقدم للتدريب لمدة أطول.", isTrue: true, whyAr: "قيل: wurde bis zum 15. März verlängert — مُدّد الموعد." },
      { id: "m2c1-s4", de: "Die Fahrräder sollen bis Freitagabend weggebracht werden.", ar: "يجب نقل الدراجات قبل مساء الجمعة.", isTrue: true, whyAr: "قيل: bitte stellen Sie Ihre Fahrräder bis Freitagabend ins Erdgeschoss." },
    ],
  },

  /* ═══════════ Teil 2 — Gespräche am Arbeitsplatz: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Gespräche",
    titleAr: "الجزء 2 — حوارات",
    minutes: 8,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch 1. Frau: Nimmst du an der Fortbildung teil? Mann: Eigentlich schon, aber ich müsste dafür zwei Kunden verschieben. " +
      "Gespräch 2. Mann: Warum hat Frau Klein gekündigt? Frau: Sie hat eine Stelle bekommen, die näher an ihrem Wohnort liegt. " +
      "Gespräch 3. Frau: Können wir die Präsentation auf Donnerstag legen? Mann: Donnerstag ist schlecht, da ist die Geschäftsleitung außer Haus. " +
      "Gespräch 4. Mann: Musst du wirklich am Samstag arbeiten? Frau: Nur bis zwölf, und ich bekomme dafür einen freien Tag.",
    audioSegments: [
      "Nimmst du an der Fortbildung teil?",
      "Eigentlich schon, aber ich müsste dafür zwei Kunden verschieben.",
      "Warum hat Frau Klein gekündigt?",
      "Sie hat eine Stelle bekommen, die näher an ihrem Wohnort liegt.",
      "Können wir die Präsentation auf Donnerstag legen?",
      "Donnerstag ist schlecht, da ist die Geschäftsleitung außer Haus.",
      "Musst du wirklich am Samstag arbeiten?",
      "Nur bis zwölf, und ich bekomme dafür einen freien Tag.",
    ],
    questions: [
      { id: "m2c2-q1", q: "Was ist das Problem des Mannes?", qAr: "ما مشكلة الرجل؟", options: ["Er müsste Kunden verschieben", "Er hat kein Interesse", "Die Fortbildung ist zu teuer"], correct: 0, whyAr: "قال: müsste ich dafür zwei Kunden verschieben." },
      { id: "m2c2-q2", q: "Warum hat Frau Klein gekündigt?", qAr: "لماذا استقالت السيدة كلاين؟", options: ["Wegen der Arbeitszeit", "Weil die neue Stelle näher ist", "Weil sie mehr Geld bekommt"], correct: 1, whyAr: "قيل: eine Stelle … die näher an ihrem Wohnort liegt." },
      { id: "m2c2-q3", q: "Warum passt Donnerstag nicht?", qAr: "لماذا لا يناسب الخميس؟", options: ["Die Geschäftsleitung ist außer Haus", "Der Raum ist besetzt", "Ein Kollege fehlt"], correct: 0, whyAr: "قال: da ist die Geschäftsleitung außer Haus." },
      { id: "m2c2-q4", q: "Was bekommt die Frau für die Samstagsarbeit?", qAr: "ماذا تحصل عليه المرأة مقابل عمل السبت؟", options: ["Einen freien Tag", "Mehr Urlaubstage", "Eine Prämie"], correct: 0, whyAr: "قالت: und ich bekomme dafür einen freien Tag." },
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
    introAr: "تسمع تقريراً إذاعياً. أجب عن 4 أسئلة. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Immer mehr Städte wollen Innenstädte autofrei machen. In Freiburg wurde ein Versuch durchgeführt: An drei Samstagen durften nur Busse, Fahrräder " +
      "und Taxis in die Altstadt fahren. Die Geschäfte hatten zunächst Angst vor Umsatzverlusten, doch die Bilanz war überraschend positiv — " +
      "viele Besucher blieben länger und gaben mehr Geld aus als früher. Kritiker wenden ein, dass ältere Menschen und Menschen mit Behinderung " +
      "auf das Auto angewiesen sind. Die Stadt will deshalb künftig mehr Shuttlebusse anbieten und Parkplätze am Stadtrand ausbauen.",
    audioSegments: [
      "Immer mehr Städte wollen Innenstädte autofrei machen. In Freiburg wurde ein Versuch durchgeführt: An drei Samstagen durften nur Busse, Fahrräder " +
        "und Taxis in die Altstadt fahren. Die Geschäfte hatten zunächst Angst vor Umsatzverlusten, doch die Bilanz war überraschend positiv — " +
        "viele Besucher blieben länger und gaben mehr Geld aus als früher. Kritiker wenden ein, dass ältere Menschen und Menschen mit Behinderung " +
        "auf das Auto angewiesen sind. Die Stadt will deshalb künftig mehr Shuttlebusse anbieten und Parkplätze am Stadtrand ausbauen.",
    ],
    questions: [
      { id: "m2c3-q1", q: "Was wurde in Freiburg getestet?", qAr: "ماذا اختُبر في فرايبورغ؟", options: ["Autofreie Altstadt an Samstagen", "Neue Buslinien am Sonntag", "Höhere Parkgebühren"], correct: 0, whyAr: "قيل: An drei Samstagen durften nur Busse, Fahrräder und Taxis in die Altstadt fahren." },
      { id: "m2c3-q2", q: "Wie war das Ergebnis für die Geschäfte?", qAr: "كيف كانت النتيجة على المتاجر؟", options: ["Besser als erwartet", "Wie erwartet schlecht", "Ohne Veränderung"], correct: 0, whyAr: "قيل: die Bilanz war überraschend positiv." },
      { id: "m2c3-q3", q: "Was kritisieren Gegner?", qAr: "ما الذي ينتقده المعارضون؟", options: ["Ältere Menschen sind auf das Auto angewiesen", "Die Busse sind zu teuer", "Die Innenstadt ist zu laut"], correct: 0, whyAr: "قيل: ältere Menschen … sind auf das Auto angewiesen." },
      { id: "m2c3-q4", q: "Wie will die Stadt reagieren?", qAr: "كيف سترد المدينة؟", options: ["Mehr Shuttlebusse und Parkplätze am Rand", "Den Versuch sofort beenden", "Die Altstadt für alle sperren"], correct: 0, whyAr: "قيل: mehr Shuttlebusse anbieten und Parkplätze am Stadtrand ausbauen." },
    ],
  },

  /* ═══════════ Teil 4 — Beratungsgespräch: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Beratung",
    titleAr: "الجزء 4 — استشارة",
    minutes: 6,
    points: 30,
    kind: "mcq",
    introAr: "تسمع حواراً في مركز استشارات. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Beraterin: Sie interessieren sich für eine Umschulung zur Pflegekraft. Welchen Abschluss haben Sie? " +
      "Teilnehmer: Ich habe eine Ausbildung als Koch, aber ich arbeite seit zwei Jahren im Lager. " +
      "Beraterin: Dann könnten Sie mit einer Teilzeitausbildung beginnen — das dauert drei Jahre statt zwei. " +
      "Teilnehmer: Bekomme ich in dieser Zeit finanzielle Unterstützung? Beraterin: Ja, wenn Ihr Einkommen niedrig genug ist. " +
      "Bitte bringen Sie zum nächsten Termin Ihre Zeugnisse und die letzten drei Gehaltsabrechnungen mit.",
    audioSegments: [
      "Sie interessieren sich für eine Umschulung zur Pflegekraft. Welchen Abschluss haben Sie?",
      "Ich habe eine Ausbildung als Koch, aber ich arbeite seit zwei Jahren im Lager.",
      "Dann könnten Sie mit einer Teilzeitausbildung beginnen — das dauert drei Jahre statt zwei.",
      "Bekomme ich in dieser Zeit finanzielle Unterstützung?",
      "Ja, wenn Ihr Einkommen niedrig genug ist. Bitte bringen Sie zum nächsten Termin Ihre Zeugnisse und die letzten drei Gehaltsabrechnungen mit.",
    ],
    questions: [
      { id: "m2c4-q1", q: "Welche Ausbildung hat der Teilnehmer?", qAr: "ما مؤهل المشارك؟", options: ["Koch", "Pflegekraft", "Lagerleiter"], correct: 0, whyAr: "قال: Ich habe eine Ausbildung als Koch." },
      { id: "m2c4-q2", q: "Was schlägt die Beraterin vor?", qAr: "ماذا تقترح المستشارة؟", options: ["Eine Teilzeitausbildung", "Einen Sprachkurs", "Eine Vollzeitstelle"], correct: 0, whyAr: "قالت: könnten Sie mit einer Teilzeitausbildung beginnen." },
      { id: "m2c4-q3", q: "Was soll er zum nächsten Termin mitbringen?", qAr: "ماذا يجب أن يُحضر في الموعد القادم؟", options: ["Zeugnisse und Gehaltsabrechnungen", "Einen Arbeitsvertrag und ein Foto", "Nur den Ausweis"], correct: 0, whyAr: "قالت: Ihre Zeugnisse und die letzten drei Gehaltsabrechnungen." },
    ],
  },
];
