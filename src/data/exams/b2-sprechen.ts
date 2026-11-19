/**
 * ═══════════════════════════════════════════════════════════
 *  بنك التحدث — Goethe-Zertifikat B2 (الصيغة الرسمية 2019+)
 *  Sprechen: زوجي · ~15 دقيقة (تحضير 15 دقيقة)
 *   Teil 1: Vortrag (~4 دقائق) — موضوع من اثنين + أسئلة متابعة
 *   Teil 2: Diskussion (~5 دقائق) — قضية خلافية بحجج Pro/Kontra
 *  التقييم: Aussprache / Wortschatz / Flüssigkeit / Interaktion
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSprechen } from "@/types/exam";

export const B2_SPRECHEN: ExamSprechen = {
  vorbereitungMinutes: 15,
  teil1Minutes: 4,
  teil2Minutes: 5,
  vortrag: [
    {
      id: "v1",
      topicDe: "Sollte man im Studium ein Auslandssemester machen?",
      topicAr: "هل ينبغي قضاء فصل دراسي في الخارج أثناء الدراسة؟",
      leitfragen: [
        "Welche Vorteile hat ein Auslandssemester?",
        "Welche Schwierigkeiten können auftreten?",
        "Was muss man vor der Entscheidung beachten?",
      ],
      modelAr:
        "التوجيه: ابدأ بتعريف بالظاهرة، ثم فوائد، ثم صعوبات، ثم ما يجب الانتباه له، وخاتمة برأي واضح.\n" +
        "المقدمة: «Immer mehr Studierende verbringen ein Semester im Ausland, und viele fragen sich, ob sich dieser Aufwand wirklich lohnt.»\n" +
        "الفوائد: «Ein Auslandssemester verbessert die Sprachkenntnisse und öffnet den Blick für andere Kulturen.»\n" +
        "الوضع الحالي: «Wer im Ausland studiert, wird selbstständiger und knüpft Kontakte, die später im Beruf nützlich sind.»\n" +
        "الصعوبات: «Schwierig sind vor allem die Finanzierung, die Anerkennung der Kurse und die Trennung von Familie und Freunden.»\n" +
        "ما يجب الانتباه له: «Deshalb sollte man früh planen, Stipendien beantragen und die Prüfungsordnung vorher klären.»\n" +
        "الخاتمة: «Meiner Meinung nach lohnt sich ein Auslandssemester, wenn man gut vorbereitet ist und realistische Ziele hat.»",
    },
    {
      id: "v2",
      topicDe: "Ernährung: Fast Food oder selbst kochen?",
      topicAr: "التغذية: الوجبات السريعة أم الطبخ الذاتي؟",
      leitfragen: [
        "Wie sieht die Esskultur heute aus?",
        "Welche Folgen hat häufiger Fast-Food-Konsum?",
        "Wie kann man sich gesünder ernähren, ohne viel Zeit zu verlieren?",
      ],
      modelAr:
        "التوجيه: قسّم العرض: وضع الغذاء اليوم ← الأسباب ← النتائج ← حلول عملية ← خاتمة برأي.\n" +
        "المقدمة: «Fast Food gehört für viele zum Alltag, weil es schnell, günstig und überall verfügbar ist.»\n" +
        "الوضع الحالي: «Gleichzeitig kochen immer weniger Menschen selbst, und Fertiggerichte ersetzen oft eine frische Mahlzeit.»\n" +
        "النتائج: «Die Folgen sind bekannt: mehr Übergewicht, höhere Kosten für das Gesundheitssystem und der Verlust von Kochkultur.»\n" +
        "الحلول: «Doch gesunde Ernährung muss nicht zeitaufwendig sein: Mit Planung und einfachen Rezepten gelingt ein Essen in zwanzig Minuten.»\n" +
        "نصيحة عملية: «Wer am Wochenende für die ganze Woche vorkocht, spart Zeit, Geld und greift seltener zum Lieferservice.»\n" +
        "الخاتمة: «Ich finde, Fast Food darf eine Ausnahme sein – aber Kochen sollte wieder Normalität werden.»",
    },
    {
      id: "v3",
      topicDe: "Mobiles Arbeiten: Freiheit oder Belastung?",
      topicAr: "العمل المتنقل: حرية أم عبء؟",
      leitfragen: [
        "Welche Berufe ermöglichen mobiles Arbeiten?",
        "Welche Vorteile sehen Sie für Arbeitnehmer und Arbeitgeber?",
        "Welche Gefahren birgt die ständige Erreichbarkeit?",
      ],
      modelAr:
        "التوجيه: اعرض المزايا ثم المخاطر، واذكر قواعد عملية، وانتهِ بحكم متوازن.\n" +
        "المقدمة: «Mobiles Arbeiten ist aus vielen Berufen nicht mehr wegzudenken, doch die Meinungen dazu gehen weit auseinander.»\n" +
        "المزايا: «Für Beschäftigte bedeutet es weniger Pendeln und mehr Zeitsouveränität, für Arbeitgeber eine größere Reichweite bei der Personalsuche.»\n" +
        "المخاطر: «Zur Belastung wird es, wenn die Grenze zwischen Arbeit und Freizeit verschwindet und man ständig erreichbar sein soll.»\n" +
        "قواعد عملية: «Sinnvoll sind klare Regeln: feste Kernzeiten, ein eigener Arbeitsplatz und das Recht, nach Feierabend nicht zu antworten.»\n" +
        "نقطة حاسمة: «Entscheidend ist, dass Beschäftigte selbst wählen können, ob sie im Büro oder zu Hause arbeiten.»\n" +
        "الخاتمة: «Mobiles Arbeiten ist also dann Freiheit, wenn es freiwillig bleibt und klare Grenzen hat.»",
    },
    {
      id: "v4",
      topicDe: "Sollte Plastik im Alltag verboten werden?",
      topicAr: "هل يجب منع البلاستيك في الحياة اليومية؟",
      leitfragen: [
        "Wo begegnet uns Plastik täglich?",
        "Welche Folgen hat Plastikmüll für die Umwelt?",
        "Welche Alternativen gibt es, und sind sie realistisch?",
      ],
      modelAr:
        "التوجيه: عرّف المشكلة، ثم أين يظهر البلاستيك، ثم النتائج البيئية، ثم البدائل ومدى واقعيتها، وخاتمة بموقف.\n" +
        "المقدمة: «Plastik begegnet uns täglich – in Verpackungen, in Kleidung und sogar in Kosmetik.»\n" +
        "لماذا نستعمله: «Viele Produkte sind praktisch und hygienisch, aber ihrer kurzen Nutzung steht ein jahrzehntelanger Zerfall gegenüber.»\n" +
        "النتائج البيئية: «Jedes Jahr gelangen Millionen Tonnen Plastik in die Meere, wo sie Tiere gefährden und über die Nahrungskette zurückkehren.»\n" +
        "البدائل: «Mehrwegflaschen, unverpackte Ware und biologisch abbaubare Materialien sind gute Ansätze, aber nicht überall gleich leistungsfähig.»\n" +
        "ما ينبغي فعله: «Deshalb braucht es Verbote für Einwegplastik und gleichzeitig Förderung für praktikable Alternativen.»\n" +
        "الخاتمة: «Ich bin dafür, Einwegplastik schrittweise zu verbieten und die Forschung an Ersatzstoffen zu unterstützen.»",
    },
  ],
  diskussion: [
    {
      id: "d1",
      themaDe: "Sollen Prüfungen an Schulen abgeschafft werden?",
      themaAr: "هل يجب إلغاء الامتحانات في المدارس؟",
      positionAr: "اتخذ موقفاً واضحاً (مؤيد أو معارض) وبرره بأمثلة، ثم رد على حجج شريكك.",
      pro: [
        "Prüfungen erzeugen Stress und Angst.",
        "Sie messen nur einen Moment, nicht das ganze Jahr.",
        "Alternative Bewertungsformen (Projekte, Portfolios) sind fairer.",
      ],
      kontra: [
        "Prüfungen motivieren zum Lernen und Wiederholen.",
        "Sie geben objektives Feedback über den Leistungsstand.",
        "Ohne Prüfungen fehlt der Vergleichsmaßstab für Bewerbungen.",
      ],
      modelAr:
        "التوجيه: ابدأ بموقفك في جملة واحدة، ثم حجتان داعمتان، ثم اعترف بحجة الخصم وردّ عليها، ثم خاتمة.\n" +
        "الموقف: «Ich bin gegen eine völlige Abschaffung von Prüfungen, aber für eine gründliche Reform.»\n" +
        "حجة أولى: «Zum einen zeigen Prüfungen, ob grundlegende Inhalte wirklich verstanden wurden.»\n" +
        "حجة ثانية: «Zum anderen braucht der Arbeitsmarkt einen vergleichbaren Maßstab für Bewerbungen.»\n" +
        "الاعتراف والرد: «Natürlich erzeugen Prüfungen Stress, deshalb sollten Projekte und Portfolios stärker in die Note einfließen.»\n" +
        "الخاتمة: «Mit mehr Gewicht auf Projekten und mündlichen Leistungen wären Prüfungen fairer und trotzdem aussagekräftig.»",
    },
    {
      id: "d2",
      themaDe: "Homeoffice: Soll es zur Pflicht werden?",
      themaAr: "العمل عن بُعد: هل يجب أن يصبح إلزامياً؟",
      positionAr: "حدد موقفك وبرره، ثم ناقش حجج الطرف الآخر بأدب.",
      pro: [
        "Weniger Pendelverkehr spart Zeit und schont die Umwelt.",
        "Mehr Flexibilität erhöht die Zufriedenheit der Mitarbeiter.",
        "Viele Aufgaben lassen sich digital genauso gut erledigen.",
      ],
      kontra: [
        "Soziale Kontakte im Büro gehen verloren.",
        "Die Trennung zwischen Arbeit und Freizeit verschwimmt.",
        "Nicht alle Berufe sind für Homeoffice geeignet – das schafft Ungleichheit.",
      ],
      modelAr:
        "التوجيه: حدد موقفك بوضوح، ثم حجتان، ثم اعترف بالحالة التي يستحيل فيها العمل عن بُعد، ثم خاتمة بحل وسط.\n" +
        "الموقف: «Ich bin dagegen, Homeoffice zur Pflicht zu machen, aber für einen Rechtsanspruch darauf.»\n" +
        "حجة أولى: «Zum einen spart mobiles Arbeiten Zeit und schont die Umwelt, weil das Pendeln entfällt.»\n" +
        "حجة ثانية: «Zum anderen erhöhen flexible Modelle die Zufriedenheit und helfen, Fachkräfte zu gewinnen.»\n" +
        "الاعتراف والرد: «Manche Tätigkeiten brauchen jedoch Präsenz und Teamarbeit, deshalb kann Homeoffice nicht für alle gelten.»\n" +
        "الخاتمة: «Am besten wäre ein gesetzlicher Anspruch mit klaren betrieblichen Regeln, aber ohne Zwang.»",
    },
    {
      id: "d3",
      themaDe: "Sollte Social Media für Jugendliche unter 16 verboten werden?",
      themaAr: "هل يجب حظر وسائل التواصل لمن هم دون 16 عاماً؟",
      positionAr: "أبدِ رأيك بحجج قوية، وكن مستعداً للرد على الاعتراضات.",
      pro: [
        "Jugendliche werden vor Mobbing und Druck geschützt.",
        "Die Konzentration und der Schlaf verbessern sich.",
        "Die Gehirnentwicklung profitiert von weniger Bildschirmzeit.",
      ],
      kontra: [
        "Ein Verbot ist schwer zu kontrollieren.",
        "Soziale Medien sind wichtig für Freundschaften und Information.",
        "Besser wäre Aufklärung statt Verbot.",
      ],
      modelAr:
        "التوجيه: أبدِ موقفك، ثم حجتان، ثم اعترف بخطورة المخاطر واقترح بديلاً عن الحظر، ثم خاتمة.\n" +
        "الموقف: «Ich halte ein Verbot sozialer Medien für Jugendliche unter sechzehn nicht für den richtigen Weg.»\n" +
        "حجة أولى: «Zum einen lässt sich das Alter kaum kontrollieren, weil viele Kinder einfach ein älteres Geburtsdatum angeben.»\n" +
        "حجة ثانية: «Zum anderen nutzen Jugendliche soziale Medien für Information, Freundschaften und Austausch – ein Verbot würde sie ins Abseits stellen.»\n" +
        "الاعتراف والرد: «Natürlich sind die Risiken ernst, aber wirksamer als ein Verbot sind Aufklärung, Medienkompetenz und klare Regeln zu Hause und in der Schule.»\n" +
        "الخاتمة: «Ich bin daher für bessere Einstellungen und Zeitlimits in den Plattformen statt für ein Verbot.»",
    },
    {
      id: "d4",
      themaDe: "Soll der öffentliche Nahverkehr kostenlos sein?",
      themaAr: "هل يجب أن تكون وسائل النقل العام مجانية؟",
      positionAr: "خذ موقفاً واضحاً وادعمه بأمثلة واقعية، ثم تفاعل مع شريكك.",
      pro: [
        "Weniger Autos bedeuten weniger Verkehr und bessere Luft.",
        "Mobilität wird für alle bezahlbar – auch für Geringverdiener.",
        "Die Fahrgastzahlen würden deutlich steigen.",
      ],
      kontra: [
        "Die Kosten muss der Staat über Steuern finanzieren.",
        "Ohne Ticketkontrolle kann es zu Vandalismus kommen.",
        "In ländlichen Gebieten hilft ein kostenloser Bus kaum.",
      ],
      modelAr:
        "التوجيه: خذ موقفاً واضحاً، ثم حجتان، ثم اعترف بمشكلة التمويل وردّ عليها، ثم خاتمة تراعي الفرق بين المدينة والريف.\n" +
        "الموقف: «Ich befürworte einen kostenlosen Nahverkehr in großen Städten, sofern die Qualität stimmt.»\n" +
        "حجة أولى: «Zum einen sinken Verkehr und Abgase, wenn mehr Menschen Busse und Bahnen nutzen.»\n" +
        "حجة ثانية: «Zum anderen wird Mobilität für Geringverdiener bezahlbar, und die Fahrgastzahlen steigen deutlich.»\n" +
        "الاعتراف والرد: «Kritiker verweisen zu Recht auf die Kosten, doch eine Finanzierung über Parkgebühren und eine City-Maut wäre gerecht.»\n" +
        "الخاتمة: «In ländlichen Regionen brauche ich zuerst bessere Verbindungen – ein Gratisbus, der nicht fährt, hilft niemandem.»",
    },
  ],
};
