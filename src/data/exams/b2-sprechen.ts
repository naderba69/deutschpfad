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
    },
  ],
};
