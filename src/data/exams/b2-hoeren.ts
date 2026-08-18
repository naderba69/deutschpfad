/**
 * ═══════════════════════════════════════════════════════════
 *  بنك الاستماع — Goethe-Zertifikat B2 (الصيغة الرسمية 2019+)
 *  Hören: 4 أجزاء · ~40 دقيقة · 30 سؤالاً · 100 نقطة
 *   Teil 1: 5 حوارات قصيرة + عبارات Richtig/Falsch
 *   Teil 2: مقابلة إذاعية + 5 اختيار
 *   Teil 3: 7 إعلانات + مطابقة (Zuordnung)
 *   Teil 4: حديث طويل + 8 اختيار
 *  تُقرأ النصوص صوتياً عبر TTS (de-DE) في المحرك.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const B2_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — حوارات قصيرة + R/F (~9 دقائق، 10 نقاط) ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurze Gespräche",
    titleAr: "الجزء 1 — حوارات قصيرة",
    minutes: 9,
    points: 10,
    kind: "rf",
    introAr:
      "تسمع 5 حوارات قصيرة من الحياة اليومية (تُقرأ صوتياً). لكل حوار عبارتان: حدّد Richtig أو Falsch. «Richtig» تعني أن العبارة تطابق ما سمعت — انتبه: الكلمة نفسها لا تكفي، المهم المعنى!",
    audioText:
      "Gespräch 1. Frau: Hallo Herr Weber, ich habe Ihre Nachricht bekommen. Sie wollten den Termin verschieben? Mann: Ja, leider muss ich morgen nach München. Geht es am Donnerstag um zehn? Frau: Am Donnerstag habe ich eine Besprechung. Was ist mit Freitag? Mann: Freitag passt, um elf Uhr? Frau: Gut, Freitag um elf. — Gespräch 2. Frau: Hast du schon die neue Wohnung gefunden? Mann: Ja, endlich! Eine Dreizimmerwohnung mit Balkon. Frau: Und die Miete? Mann: 850 Euro warm. Das ist mehr als ich geplant hatte, aber die Lage ist super. — Gespräch 3. Mann: Ich möchte gern ein Konto eröffnen. Frau: Sehr gern. Benötigen Sie auch eine Kreditkarte? Mann: Nein, nur ein Girokonto. Und ich hätte gern Online-Banking. Frau: Das ist kostenlos. Sie müssen nur den Vertrag unterschreiben. — Gespräch 4. Frau: Der Zug nach Hamburg hat leider zwanzig Minuten Verspätung. Mann: Oh nein, ich muss um zwölf im Büro sein. Gibt es einen früheren Anschluss? Frau: Der nächste Zug fährt in zehn Minuten, aber Sie müssen in Hannover umsteigen. — Gespräch 5. Mann: Ich habe gestern ein neues Smartphone gekauft, aber die Kamera funktioniert nicht. Frau: Dann bringen Sie es am besten zurück. Innerhalb von zwei Wochen können Sie es umtauschen. Mann: Und wenn ich mein Geld zurück möchte? Frau: Das ist auch möglich, Sie bekommen den vollen Betrag.",
    statements: [
      { id: "h1-s1", de: "Herr Weber will den Termin verschieben.", ar: "السيد فيبر يريد تأجيل الموعد.", isTrue: true, whyAr: "قال: leider muss ich morgen nach München — يريد تغيير الموعد." },
      { id: "h1-s2", de: "Der neue Termin ist am Donnerstag um elf Uhr.", ar: "الموعد الجديد الخميس الحادية عشرة.", isTrue: false, whyAr: "الخميس عندها اجتماع — الاتفاق كان الجمعة الحادية عشرة." },
      { id: "h1-s3", de: "Die Wohnung hat drei Zimmer und einen Balkon.", ar: "الشقة بثلاث غرف وشرفة.", isTrue: true, whyAr: "قال: Dreizimmerwohnung mit Balkon." },
      { id: "h1-s4", de: "Die Miete ist billiger als geplant.", ar: "الإيجار أرخص مما خطط له.", isTrue: false, whyAr: "قال: mehr als ich geplant hatte — أغلى مما خطط." },
      { id: "h1-s5", de: "Der Mann möchte nur ein Girokonto eröffnen.", ar: "الرجل يريد فتح حساب جارٍ فقط.", isTrue: true, whyAr: "قال: Nein, nur ein Girokonto. (رفض بطاقة الائتمان)" },
      { id: "h1-s6", de: "Online-Banking kostet eine monatliche Gebühr.", ar: "الخدمات المصرفية عبر الإنترنت برسوم شهرية.", isTrue: false, whyAr: "قالت: Das ist kostenlos — مجاني." },
      { id: "h1-s7", de: "Der Zug hat zwanzig Minuten Verspätung.", ar: "القطار متأخر عشرين دقيقة.", isTrue: true, whyAr: "قالت: leider zwanzig Minuten Verspätung." },
      { id: "h1-s8", de: "Der nächste Zug fährt direkt nach Hamburg ohne Umsteigen.", ar: "القطار التالي يذهب مباشرة إلى هامبورغ دون تغيير.", isTrue: false, whyAr: "قالت: Sie müssen in Hannover umsteigen — يجب التغيير." },
      { id: "h1-s9", de: "Das Smartphone kann innerhalb von zwei Wochen umgetauscht werden.", ar: "يمكن استبدال الهاتف خلال أسبوعين.", isTrue: true, whyAr: "قالت: Innerhalb von zwei Wochen können Sie es umtauschen." },
      { id: "h1-s10", de: "Eine Rückgabe des Geldes ist nicht möglich.", ar: "استرداد المال غير ممكن.", isTrue: false, whyAr: "قالت: Sie bekommen den vollen Betrag — يمكن استرداد المبلغ كاملاً." },
    ],
  },

  /* ═══════════ Teil 2 — مقابلة إذاعية + 5 MCQ (~8 دقائق، 5 نقاط) ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Interview im Radio",
    titleAr: "الجزء 2 — مقابلة إذاعية",
    minutes: 8,
    points: 5,
    kind: "mcq",
    introAr:
      "تسمع مقابلة إذاعية مع خبيرة تربوية عن «التعلم الرقمي في المدارس». اختر الإجابة الصحيحة لكل سؤال.",
    audioText:
      "Moderatorin: Herzlich willkommen bei „Bildung heute“. Heute ist Frau Dr. Kern bei uns, Expertin für digitale Bildung. Frau Dr. Kern, viele Schulen haben inzwischen Tablets eingeführt. Ist das ein Erfolg?\n\nDr. Kern: Grundsätzlich ja, aber mit Einschränkungen. Tablets allein verbessern das Lernen nicht. Entscheidend ist, wie die Lehrkräfte sie einsetzen. Eine Studie aus Bayern zeigt: In Klassen, in denen die Lehrer gezielt geschult wurden, stieg die Motivation deutlich. Wo das nicht passierte, blieb der Effekt aus.\n\nModeratorin: Kritiker sagen, Kinder würden zu viel Zeit vor dem Bildschirm verbringen.\n\nDr. Kern: Das ist ein berechtigter Punkt. Deshalb empfehlen wir klare Regeln: maximal zwei Stunden Bildschirmzeit pro Schultag und regelmäßige Pausen ohne Geräte. Außerdem sollte das Tablet nicht das einzige Medium sein – Bücher und Hefte bleiben wichtig.\n\nModeratorin: Was wünschen Sie sich von der Politik?\n\nDr. Kern: Zwei Dinge: Erstens flächendeckende Fortbildungen für Lehrkräfte, zweitens eine bessere technische Ausstattung. Viele Schulen haben nicht einmal stabiles WLAN. Ohne diese Grundlagen bleibt digitale Bildung ein Zufall.",
    questions: [
      { id: "h2-q1", q: "Wovon hängt der Erfolg der Tablets ab?", qAr: "على ماذا يعتمد نجاح الأجهزة اللوحية؟", options: ["Von der Marke des Tablets", "Von der Schulung der Lehrkräfte", "Von der Anzahl der Geräte", "Von der Unterstützung der Eltern"], correct: 1, whyAr: "قالت: Entscheidend ist, wie die Lehrkräfte sie einsetzen." },
      { id: "h2-q2", q: "Was zeigt die Studie aus Bayern?", qAr: "ماذا تُظهر الدراسة البافارية؟", options: ["Tablets senken die Motivation.", "Motivation steigt nur bei geschulten Lehrern.", "Alle Schüler lernen besser mit Tablets.", "Die Lehrer lehnen Tablets ab."], correct: 1, whyAr: "قالت: في الفصول التي دُرّب فيها المعلمون بشكل مستهدف ارتفع الدافع بوضوح." },
      { id: "h2-q3", q: "Welche Regel empfiehlt Dr. Kern?", qAr: "أي قاعدة توصي بها الدكتورة كيرن؟", options: ["Keine Bildschirmzeit in der Schule", "Maximal zwei Stunden Bildschirmzeit pro Schultag", "Tablets auch in den Pausen nutzen", "Nur Bücher im Unterricht"], correct: 1, whyAr: "قالت: maximal zwei Stunden Bildschirmzeit pro Schultag und regelmäßige Pausen." },
      { id: "h2-q4", q: "Was wünscht sich Dr. Kern von der Politik?", qAr: "ماذا تتمنى من السياسة؟", options: ["Mehr Tablets kaufen", "Fortbildungen und bessere Ausstattung", "Weniger Digitalisierung", "Tablets verbieten"], correct: 1, whyAr: "قالت: flächendeckende Fortbildungen und bessere technische Ausstattung." },
      { id: "h2-q5", q: "Was fehlt an vielen Schulen?", qAr: "ما الذي ينقص في مدارس كثيرة؟", options: ["Stabiles WLAN", "Genug Strom", "Lehrkräfte", "Klassenzimmer"], correct: 0, whyAr: "قالت: Viele Schulen haben nicht einmal stabiles WLAN." },
    ],
  },

  /* ═══════════ Teil 3 — 7 إعلانات + Zuordnung (~8 دقائق، 7 نقاط) ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Ansagen zuordnen",
    titleAr: "الجزء 3 — مطابقة الإعلانات",
    minutes: 8,
    points: 7,
    kind: "zuordnung",
    introAr:
      "تسمع 7 إعلانات قصيرة (في محطة، متجر، مركز...). ما سياق كل إعلان؟ اختر الفئة المناسبة لكل إعلان (تُقرأ كلها صوتياً بالتسلسل).",
    audioText:
      "Ansage 1: Achtung, die Abfahrt des Zuges nach Köln verzögert sich um fünfzehn Minuten. Der Zug fährt heute von Gleis sieben ab. Wir bitten um Entschuldigung. — Ansage 2: Liebe Kundinnen und Kunden, heute bis zwanzig Uhr erhalten Sie auf alle Lebensmittel zwanzig Prozent Rabatt. An der Kasse zeigen Sie bitte Ihre Kundenkarte. — Ansage 3: Bitte beachten Sie: Der Aufzug ist wegen Wartungsarbeiten bis Freitag außer Betrieb. Bitte benutzen Sie die Treppe. — Ansage 4: Wer sein Auto hier parkt, braucht eine Parkscheibe. Die Parkdauer ist auf zwei Stunden begrenzt. Kontrollen finden täglich statt. — Ansage 5: Die Stadtbücherei bleibt am Donnerstag wegen einer internen Veranstaltung geschlossen. Ausgeliehene Medien können Sie am Freitag zurückgeben. — Ansage 6: Für die Veranstaltung am Samstag sind noch wenige Karten erhältlich. Sie können sie online oder an der Abendkasse kaufen. Beginn ist um neunzehn Uhr. — Ansage 7: Unser Schwimmbad hat ab Montag wieder geöffnet. Neue Öffnungszeiten: täglich von sieben bis zweiundzwanzig Uhr. Kinder unter sechs Jahren haben freien Eintritt.",
    categories: [
      { id: "z1", de: "Im Zug / am Bahnhof", ar: "في القطار/المحطة" },
      { id: "z2", de: "Im Supermarkt", ar: "في المتجر" },
      { id: "z3", de: "In einem Wohnhaus", ar: "في مبنى سكني" },
      { id: "z4", de: "Auf der Straße / Parkplatz", ar: "في الشارع/موقف السيارات" },
      { id: "z5", de: "In der Bücherei", ar: "في المكتبة" },
      { id: "z6", de: "Beim Theater / Konzert", ar: "في المسرح/الحفل" },
      { id: "z7", de: "Im Schwimmbad", ar: "في المسبح" },
    ],
    allowRepeat: false,
    items: [
      { id: "h3-1", de: "Zug nach Köln, Gleis sieben, Verspätung.", categoryId: "z1" },
      { id: "h3-2", de: "Zwanzig Prozent Rabatt auf Lebensmittel mit Kundenkarte.", categoryId: "z2" },
      { id: "h3-3", de: "Aufzug außer Betrieb wegen Wartungsarbeiten.", categoryId: "z3" },
      { id: "h3-4", de: "Parkscheibe nötig, zwei Stunden Höchstparkdauer.", categoryId: "z4" },
      { id: "h3-5", de: "Am Donnerstag geschlossen, Rückgabe am Freitag.", categoryId: "z5" },
      { id: "h3-6", de: "Karten für Samstag, Beginn um neunzehn Uhr.", categoryId: "z6" },
      { id: "h3-7", de: "Wieder geöffnet ab Montag, Kinder frei.", categoryId: "z7" },
    ],
  },

  /* ═══════════ Teil 4 — حديث طويل + 8 MCQ (~10 دقائق، 8 نقاط) ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Vortrag mit Fragen",
    titleAr: "الجزء 4 — حديث مع أسئلة",
    minutes: 10,
    points: 8,
    kind: "mcq",
    introAr:
      "تسمع حديثاً طويلاً في محاضرة عن «الاقتصاد الدائري». أجب عن الأسئلة الثمانية (استمع جيداً للتفاصيل والأرقام).",
    audioText:
      "Meine Damen und Herren, ich spreche heute über die Kreislaufwirtschaft – ein Modell, das unseren Umgang mit Ressourcen grundlegend verändern soll. Das traditionelle System ist linear: Wir produzieren, wir nutzen, wir werfen weg. Die Kreislaufwirtschaft dagegen will Produkte und Materialien so lange wie möglich im Kreislauf halten.\n\nWarum ist das nötig? Die Zahlen sind beeindruckend: In Europa produzieren wir pro Kopf etwa fünf Tonnen Abfall pro Jahr. Nur rund zwölf Prozent davon werden tatsächlich recycelt. Der Rest landet in Verbrennungsanlagen oder auf Deponien. Gleichzeitig steigt der Verbrauch von Rohstoffen weltweit weiter.\n\nEin zentrales Prinzip ist das sogenannte Ecodesign: Produkte werden von Anfang an so konstruiert, dass sie reparierbar sind und aus recycelbaren Materialien bestehen. Die EU hat 2024 eine Richtlinie verabschiedet, die Hersteller verpflichtet, Ersatzteile sieben Jahre lang zu liefern. Das verlängert die Lebensdauer von Geräten deutlich.\n\nAber es gibt auch Kritik. Kleine Unternehmen klagen über hohe Kosten, weil sie ihre Produktionslinien umstellen müssen. Verbraucherschützer fordern zudem mehr Transparenz: Wie lange hält ein Produkt wirklich? Manche Hersteller geben freiwillig eine Mindestlebensdauer an, aber das ist noch keine Pflicht.\n\nWas können wir als Verbraucher tun? Drei konkrete Schritte: Erstens, langlebige Produkte kaufen und auf Gütesiegel achten. Zweitens, reparieren statt ersetzen – viele Reparaturcafés bieten kostenlose Hilfe an. Und drittens, weniger kaufen: Der nachhaltigste Konsum ist der, den wir vermeiden. Vielen Dank für Ihre Aufmerksamkeit.",
    questions: [
      { id: "h4-q1", q: "Was kennzeichnet das lineare System?", qAr: "ما الذي يميز النظام الخطي؟", options: ["Produkte werden recycelt.", "Produzieren, nutzen, wegwerfen", "Ressourcen bleiben im Kreislauf", "Produkte werden repariert"], correct: 1, whyAr: "قال: Wir produzieren, wir nutzen, wir werfen weg." },
      { id: "h4-q2", q: "Wie viel Abfall produziert jeder Europäer pro Jahr?", qAr: "كم نفايات ينتج كل أوروبي سنوياً؟", options: ["Zwei Tonnen", "Fünf Tonnen", "Zwölf Tonnen", "Sieben Tonnen"], correct: 1, whyAr: "قال: pro Kopf etwa fünf Tonnen Abfall pro Jahr." },
      { id: "h4-q3", q: "Wie viel Abfall wird in Europa recycelt?", qAr: "كم تُعاد تدويره من النفايات في أوروبا؟", options: ["Über fünfzig Prozent", "Etwa zwölf Prozent", "Dreißig Prozent", "Fünfundachtzig Prozent"], correct: 1, whyAr: "قال: nur rund zwölf Prozent werden tatsächlich recycelt." },
      { id: "h4-q4", q: "Was bedeutet Ecodesign?", qAr: "ماذا يعني التصميم البيئي؟", options: ["Produkte sind billiger herzustellen", "Produkte sind reparierbar und recycelbar konstruiert", "Produkte werden nur online verkauft", "Produkte haben mehr Funktionen"], correct: 1, whyAr: "قال: Produkte werden so konstruiert, dass sie reparierbar sind und aus recycelbaren Materialien bestehen." },
      { id: "h4-q5", q: "Was verpflichtet die EU-Richtlinie von 2024?", qAr: "ما الذي تُلزم به توجيهات الاتحاد الأوروبي لعام 2024؟", options: ["Ersatzteile sieben Jahre liefern", "Produkte billiger zu machen", "Recycling für alle Pflicht", "Elektrogeräte zu verbieten"], correct: 0, whyAr: "قال: die Hersteller verpflichtet, Ersatzteile sieben Jahre lang zu liefern." },
      { id: "h4-q6", q: "Worüber klagen kleine Unternehmen?", qAr: "بماذا تشكو الشركات الصغيرة؟", options: ["Zu wenig Kunden", "Hohe Kosten für die Umstellung", "Zu viel Recycling", "Fehlende Ersatzteile"], correct: 1, whyAr: "قال: kleine Unternehmen klagen über hohe Kosten, weil sie ihre Produktionslinien umstellen müssen." },
      { id: "h4-q7", q: "Was fordern Verbraucherschützer?", qAr: "ماذا يطالب حماة المستهلك؟", options: ["Mehr Werbung", "Mehr Transparenz über die Lebensdauer", "Billigere Produkte", "Weniger Gütesiegel"], correct: 1, whyAr: "قال: Verbraucherschützer fordern mehr Transparenz: Wie lange hält ein Produkt wirklich?" },
      { id: "h4-q8", q: "Was ist laut Redner der nachhaltigste Konsum?", qAr: "ما هو الاستهلاك الأكثر استدامة حسب المتحدث؟", options: ["Der, den wir vermeiden", "Der mit Gütesiegeln", "Der im Internet", "Der mit Rabatten"], correct: 0, whyAr: "قال في الخاتمة: Der nachhaltigste Konsum ist der, den wir vermeiden." },
    ],
  },
];
