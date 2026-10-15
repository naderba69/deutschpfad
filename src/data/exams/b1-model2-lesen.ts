/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — قراءة B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · 14 عنصراً · 100 نقطة (25 لكل جزء) · ~65 دقيقة.
 *  البنية المتبعة في B1: mcq(3) · rf(4) · mcq(3) · rf(4).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const B1_MODEL2_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — Mitteilungen im Betrieb: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Mitteilungen",
    titleAr: "الجزء 1 — رسائل",
    minutes: 12,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل القصيرة. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Liebe Kolleginnen und Kollegen, wegen der Umstellung auf ein neues System bleibt das Lager am Donnerstag geschlossen. " +
      "Sendungen können erst ab Freitag wieder bearbeitet werden. Die Geschäftsleitung\n" +
      "(b) Achtung an alle Teilnehmer des Sprachkurses: Der Kursraum hat sich geändert. Wir treffen uns ab nächster Woche in Raum 204 statt 108.\n" +
      "(c) Sehr geehrter Herr Demir, Ihre Bewerbung ist eingegangen. Da wir viele Bewerbungen erhalten haben, kann das Gespräch erst in der zweiten Aprilwoche stattfinden.",
    questions: [
      { id: "m2d1-q1", q: "Warum bleibt das Lager geschlossen?", qAr: "لماذا يبقى المخزن مغلقاً؟", options: ["Wegen eines neuen Systems", "Wegen eines Feiertags", "Wegen einer Kontrolle"], correct: 0, whyAr: "في (a): wegen der Umstellung auf ein neues System." },
      { id: "m2d1-q2", q: "Was ändert sich für die Kursteilnehmer?", qAr: "ما الذي يتغير للمشاركين في الدورة؟", options: ["Der Kursraum", "Die Kurszeit", "Der Kursleiter"], correct: 0, whyAr: "في (b): Der Kursraum hat sich geändert … Raum 204 statt 108." },
      { id: "m2d1-q3", q: "Was erfährt Herr Demir?", qAr: "ماذا يعرف السيد دمير؟", options: ["Das Gespräch kommt später", "Er hat die Stelle", "Seine Bewerbung fehlt"], correct: 0, whyAr: "في (c): kann das Gespräch erst in der zweiten Aprilwoche stattfinden." },
    ],
  },

  /* ═══════════ Teil 2 — Sachtext: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Sachtext",
    titleAr: "الجزء 2 — نص معلوماتي",
    minutes: 15,
    points: 25,
    kind: "rf",
    introAr: "اقرأ النص. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Reparatur statt Neukauf — ein Trend in deutschen Werkstätten\n" +
      "Immer mehr Menschen lassen Elektrogeräte reparieren, statt neue zu kaufen. In einer Umfrage des Umweltbundesamts gaben 68 Prozent der Befragten an, " +
      "dass ihnen die Haltbarkeit eines Geräts wichtiger ist als der Preis. Besonders beliebt sind Reparaturcafés: Dort helfen Freiwillige kostenlos, " +
      "Kaffeemaschinen, Radios oder Staubsauger wieder zum Laufen zu bringen. Wer selbst nichts reparieren kann, bringt das Gerät einfach mit. " +
      "Allerdings lohnt sich die Reparatur nicht immer: Bei sehr alten Geräten fehlen oft Ersatzteile, und die Hersteller verlangen dafür hohe Preise. " +
      "Deshalb fordert der Verbraucherverband, dass Ersatzteile mindestens zehn Jahre verfügbar sein müssen. " +
      "Für viele Haushalte ist der wichtigste Grund für die Reparatur übrigens nicht der Umweltschutz, sondern das gesparte Geld.",
    statements: [
      { id: "m2d2-s1", de: "Für die Befragten ist Haltbarkeit wichtiger als der Preis.", ar: "لدى المستطلَعين أن المتانة أهم من السعر.", isTrue: true, whyAr: "قيل: dass ihnen die Haltbarkeit … wichtiger ist als der Preis." },
      { id: "m2d2-s2", de: "In Reparaturcafés muss man für die Hilfe bezahlen.", ar: "في مقاهي التصليح يجب الدفع مقابل المساعدة.", isTrue: false, whyAr: "قيل: helfen Freiwillige kostenlos — بلا مقابل." },
      { id: "m2d2-s3", de: "Bei sehr alten Geräten gibt es manchmal keine Ersatzteile.", ar: "في الأجهزة القديمة جداً لا تتوفر قطع غيار أحياناً.", isTrue: true, whyAr: "قيل: Bei sehr alten Geräten fehlen oft Ersatzteile." },
      { id: "m2d2-s4", de: "Der wichtigste Grund für die Reparatur ist der Umweltschutz.", ar: "أهم سبب للتصليح هو حماية البيئة.", isTrue: false, whyAr: "قيل: nicht der Umweltschutz, sondern das gesparte Geld." },
    ],
  },

  /* ═══════════ Teil 3 — Bericht: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Bericht",
    titleAr: "الجزء 3 — تقرير",
    minutes: 18,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "„Ich habe meinen Beruf gewechselt — mit 42“\n" +
      "Zwölf Jahre lang war Sandro K. Lagerleiter in einem Möbelhaus. Als die Firma umstrukturierte, verlor er seine Stelle. " +
      "Statt sofort eine ähnliche Arbeit zu suchen, nutzte er die Zeit für eine Umschulung zum Altenpfleger. " +
      "„Am Anfang war ich unsicher, weil ich in der Schule nie gut war“, erzählt er. „Aber im Kurs haben wir viel praktisch geübt, und das liegt mir.“ " +
      "Finanziell war das erste Jahr schwer: Er lebte von Ersparnissen und einem Zuschuss der Arbeitsagentur. " +
      "Heute arbeitet er in einem Pflegeheim und verdient weniger als früher, „aber ich gehe morgens gern zur Arbeit — das war vorher nicht so“. " +
      "Sein Rat an andere: erst Praktika machen, dann entscheiden. Rund ein Drittel seiner Klasse hat den Kurs abgebrochen, weil sie sich die Arbeit anders vorgestellt hatten.",
    questions: [
      { id: "m2d3-q1", q: "Warum begann Sandro die Umschulung?", qAr: "لماذا بدأ ساندرو إعادة التأهيل المهني؟", options: ["Er verlor seine Stelle bei einer Umstrukturierung", "Sein Gehalt war zu niedrig", "Er wollte mehr Freizeit"], correct: 0, whyAr: "قيل: Als die Firma umstrukturierte, verlor er seine Stelle." },
      { id: "m2d3-q2", q: "Wie beschreibt er den Kurs?", qAr: "كيف يصف الدورة؟", options: ["Viel praktische Übung", "Zu viel Theorie", "Zu schnell"], correct: 0, whyAr: "قال: im Kurs haben wir viel praktisch geübt, und das liegt mir." },
      { id: "m2d3-q3", q: "Wie verdient er heute?", qAr: "كيف وضعه المالي اليوم؟", options: ["Weniger als früher", "Mehr als früher", "Genauso viel"], correct: 0, whyAr: "قيل: verdient weniger als früher." },
    ],
  },

  /* ═══════════ Teil 4 — Leserbrief: richtig / falsch ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Leserbrief",
    titleAr: "الجزء 4 — رسالة قارئ",
    minutes: 20,
    points: 25,
    kind: "rf",
    introAr: "اقرأ رسالة القارئ. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Leserbrief von Amelie R.: Handyverbot in der Schule\n" +
      "Ich bin Lehrerin an einer Gesamtschule und halte wenig von einem totalen Handyverbot. Seit wir in den Pausen Handys erlauben, " +
      "ist es draußen ruhiger geworden, weil die Schülerinnen und Schüler ihre Musik hören statt zu diskutieren. " +
      "Im Unterricht sammeln wir die Geräte in einer Box — das funktioniert gut, wenn die Regel konsequent gilt. " +
      "Ein Verbot löst außerdem das eigentliche Problem nicht: Wir müssten vielmehr zeigen, wie man Informationen prüft und wie man mit Bildern verantwortlich umgeht. " +
      "Wer Handys einfach verbietet, verschiebt die Diskussion auf später — und die Eltern tragen dann die Diskussion allein.",
    statements: [
      { id: "m2d4-s1", de: "Amelie R. ist für ein totales Handyverbot.", ar: "أميلي مع منع كامل للهاتف.", isTrue: false, whyAr: "قالت: halte wenig von einem totalen Handyverbot." },
      { id: "m2d4-s2", de: "In den Pausen sind die Handys erlaubt.", ar: "في الاستراحات يُسمح بالهاتف.", isTrue: true, whyAr: "قيل: Seit wir in den Pausen Handys erlauben." },
      { id: "m2d4-s3", de: "Im Unterricht werden die Geräte gesammelt.", ar: "في الحصص تُجمع الأجهزة.", isTrue: true, whyAr: "قيل: sammeln wir die Geräte in einer Box." },
      { id: "m2d4-s4", de: "Sie findet, ein Verbot löst das Problem vollständig.", ar: "ترى أن المنع يحل المشكلة تماماً.", isTrue: false, whyAr: "قالت: Ein Verbot löst außerdem das eigentliche Problem nicht." },
    ],
  },
];
