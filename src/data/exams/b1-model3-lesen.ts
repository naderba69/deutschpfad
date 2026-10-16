/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — قراءة B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · 14 عنصراً · 100 نقطة (25 لكل جزء) · ~65 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const B1_MODEL3_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — Mitteilungen: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Mitteilungen",
    titleAr: "الجزء 1 — رسائل",
    minutes: 12,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل الثلاث. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Liebe Kolleginnen und Kollegen, ab Montag wird der Eingang B renoviert. Bitte benutzen Sie den Haupteingang; die Stempeluhren stehen dann auch dort. Der Zugang zur Tiefgarage bleibt offen. — Die Geschäftsleitung\n" +
      "(b) Sehr geehrter Herr Yilmaz, Ihre Versicherung erhöht zum Jahreswechsel die Beiträge für den Zusatzschutz um vier Prozent. Ein Sonderkündigungsrecht gilt bis zum dreißigsten November; Ihre Police passt sich sonst automatisch an.\n" +
      "(c) Hallo Meryem, ich habe unseren Termin mit dem Steuerberater auf Donnerstag verschoben. Bitte bring die Rechnungen vom ersten Quartal mit — die Kontoauszüge schicke ich vorher per Post.",
    questions: [
      { id: "m3l1-q1", q: "Was ändert sich ab Montag?", qAr: "ما الذي سيتغير من الاثنين؟", options: ["Der Eingang B wird renoviert", "Die Tiefgarage ist geschlossen", "Die Firma wechselt die Lage"], correct: 0, whyAr: "في (a): ab Montag wird der Eingang B renoviert." },
      { id: "m3l1-q2", q: "Was passiert, wenn Herr Yilmaz nicht kündigt?", qAr: "ماذا يحدث إن لم يُنهِ السيد يلماز العقد؟", options: ["Die Police passt sich automatisch an", "Der Vertrag endet im November", "Die Beiträge sinken"], correct: 0, whyAr: "في (b): Ihre Police passt sich sonst automatisch an." },
      { id: "m3l1-q3", q: "Was soll Meryem zum Termin mitbringen?", qAr: "ماذا يجب أن تُحضر مريم إلى الموعد؟", options: ["Die Rechnungen des ersten Quartals", "Die Kontoauszüge", "Den Terminkalender"], correct: 0, whyAr: "في (c): Bitte bring die Rechnungen vom ersten Quartal mit — والكشوف تُرسَل بالبريد مقدماً." },
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
      "Schlaf und Leistung\n" +
      "Wer regelmäßig weniger als sechs Stunden schläft, reagiert langsamer — das zeigen zahlreiche Studien. " +
      "Interessant ist jedoch, dass nicht allein die Dauer zählt: Entscheidend ist auch, ob der Schlaf unterbrochen wird. " +
      "Zwei Nächte mit vier Stunden sind für den Körper weniger schädlich als vier Nächte mit sechs Stunden, " +
      "wenn man dabei jede Stunde aufwacht. " +
      "Viele Menschen versuchen, fehlenden Schlaf am Wochenende nachzuholen. Das funktioniert nur zum Teil: " +
      "Die Konzentration erholt sich meist schneller als die innere Uhr, die durch spätes Aufstehen weiter verschoben wird. " +
      "Fachleute raten deshalb, an freien Tagen höchstens eine Stunde länger zu schlafen und stattdessen tagsüber einen kurzen Schlaf von zwanzig Minuten einzulegen.",
    statements: [
      { id: "m3l2-s1", de: "Nur die Schlafdauer beeinflusst die Reaktionsgeschwindigkeit.", ar: "مدة النوم وحدها تؤثر على سرعة رد الفعل.", isTrue: false, whyAr: "قيل: nicht allein die Dauer zählt — بل أيضاً انقطاع النوم." },
      { id: "m3l2-s2", de: "Unterbrochener Schlaf kann schädlicher sein als kurzer Schlaf.", ar: "النوم المتقطّع قد يكون أضرّ من النوم القصير.", isTrue: true, whyAr: "قيل: Zwei Nächte mit vier Stunden sind weniger schädlich als vier Nächte mit sechs Stunden, wenn man jede Stunde aufwacht." },
      { id: "m3l2-s3", de: "Ausschlafen am Wochenende löst das Problem vollständig.", ar: "النوم الطويل في نهاية الأسبوع يحل المشكلة تماماً.", isTrue: false, whyAr: "قيل: Das funktioniert nur zum Teil." },
      { id: "m3l2-s4", de: "Fachleute empfehlen einen kurzen Schlaf am Tag.", ar: "يوصي الخبراء بنوم قصير في النهار.", isTrue: true, whyAr: "قيل: tagsüber einen kurzen Schlaf von zwanzig Minuten einzulegen." },
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
    introAr: "اقرأ التقرير وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Ein Jahr im Ausland — Erfahrungen einer Austauschstudentin\n" +
      "Als ich mich für das Austauschjahr bewarb, dachte ich vor allem an die Sprache. Tatsächlich habe ich in den ersten Wochen mehr über mich selbst gelernt als über Grammatik: " +
      "Wer plötzlich allein einkaufen, Anträge ausfüllen und Streit schlichten muss, wird schnell selbstständiger. " +
      "Am schwierigsten war nicht das Studium, sondern der Alltag — bis ich begriff, dass Hilfe zu suchen kein Zeichen von Schwäche ist. " +
      "Meine Gastfamilie hat mir gezeigt, wie man Feste feiert; meine Kommilitonen haben mir erklärt, wie man Kurse wählt. " +
      "Heute würde ich empfehlen, schon vor der Abreise ein Netzwerk aufzubauen: Wer weiß, wen er im Notfall anrufen kann, verliert seltener die Nerven. " +
      "Rückblickend war das Jahr auch teuer; ohne Stipendium hätte ich es nicht geschafft.",
    questions: [
      { id: "m3l3-q1", q: "Was hat die Studentin in den ersten Wochen vor allem gelernt?", qAr: "ماذا تعلّمت الطالبة في الأسابيع الأولى أساساً؟", options: ["Über sich selbst", "Grammatik", "Wie man Anträge ausfüllt"], correct: 0, whyAr: "قالت: habe ich in den ersten Wochen mehr über mich selbst gelernt als über Grammatik." },
      { id: "m3l3-q2", q: "Was war am schwierigsten?", qAr: "ما كان الأصعب؟", options: ["Der Alltag", "Das Studium", "Die Feste der Gastfamilie"], correct: 0, whyAr: "قالت: Am schwierigsten war nicht das Studium, sondern der Alltag." },
      { id: "m3l3-q3", q: "Was empfiehlt sie heute?", qAr: "بماذا توصي اليوم؟", options: ["Vor der Abreise ein Netzwerk aufzubauen", "Ohne Stipendium zu fahren", "Kurse erst im Ausland zu wählen"], correct: 0, whyAr: "قالت: würde ich empfehlen, schon vor der Abreise ein Netzwerk aufzubauen." },
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
      "Leserbrief von Jonas P.: Tempo 30 in der Innenstadt\n" +
      "Ich fahre seit zwanzig Jahren jeden Morgen mit dem Auto zur Arbeit und halte die Diskussion über Tempo 30 für übertrieben. " +
      "Man verspricht weniger Unfälle, doch die Zahlen aus anderen Städten sind nicht eindeutig. " +
      "Was wirklich hilft, sind meiner Meinung nach klare Regeln an Schulen und gut beleuchtete Überwege. " +
      "Außerdem müsste der öffentliche Verkehr früher fahren: Wer um fünf Uhr anfängt, steht heute ohne Bus da. " +
      "Ein Tempolimit bestraft dagegen die, die aufs Auto angewiesen sind, ohne den Verkehr zu verringern. " +
      "Ich bin nicht grundsätzlich dagegen, aber ich möchte zuerst Messungen sehen, statt Versprechen zu glauben.",
    statements: [
      { id: "m3b4-s1", de: "Jonas fährt seit zwanzig Jahren mit dem Auto zur Arbeit.", ar: "يوناس يذهب بالسيارة إلى العمل منذ عشرين سنة.", isTrue: true, whyAr: "قال: Ich fahre seit zwanzig Jahren jeden Morgen mit dem Auto zur Arbeit." },
      { id: "m3b4-s2", de: "Er hält die Zahlen aus anderen Städten für eindeutig.", ar: "يرى أن أرقام المدن الأخرى واضحة قاطعة.", isTrue: false, whyAr: "قال: die Zahlen aus anderen Städten sind nicht eindeutig." },
      { id: "m3b4-s3", de: "Er will, dass Busse früher fahren.", ar: "يريد أن تعمل الحافلات في وقت أبكر.", isTrue: true, whyAr: "قال: müsste der öffentliche Verkehr früher fahren." },
      { id: "m3b4-s4", de: "Er lehnt Tempo 30 grundsätzlich ab.", ar: "يرفض حدّ السرعة 30 رفضاً مبدئياً.", isTrue: false, whyAr: "قال: Ich bin nicht grundsätzlich dagegen, aber ich möchte zuerst Messungen sehen." },
    ],
  },
];
