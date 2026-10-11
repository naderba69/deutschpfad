/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — كتابة B1 (بنية شبيهة بـ Goethe-Zertifikat B1)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~30 دقيقة
 *   Teil 1: رسالة رسمية/شبه رسمية تطلب فيها توضيحاً وتقترح حلاً (≥ 80 كلمة)
 *   Teil 2: رأي على منتدى حول موضوع اجتماعي مع سبب ومثال (≥ 80 كلمة)
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const B1_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Beschwerde an die Hausverwaltung",
    titleAr: "الجزء 1 — شكوى إلى إدارة العمارة",
    minutes: 15,
    points: 50,
    aufgabeDe:
      "In Ihrer Wohnung funktioniert die Heizung seit einer Woche nicht richtig. Schreiben Sie an die Hausverwaltung: Beschreiben Sie das Problem, nennen Sie die Folgen für Sie und bitten Sie um einen Termin für eine Reparatur.",
    aufgabeAr:
      "التدفئة في شقتك لا تعمل بشكل صحيح منذ أسبوع. اكتب إلى إدارة العمارة: صف المشكلة، واذكر نتائجها عليك، واطلب موعداً للإصلاح.",
    minWords: 80,
    requires: [
      { de: "Das Problem genau beschreiben", ar: "وصف المشكلة بدقة" },
      { de: "Die Folgen für sich nennen", ar: "ذكر النتائج عليك" },
      { de: "Um einen Reparaturtermin bitten", ar: "طلب موعد للإصلاح" },
    ],
    struktur: ["Anrede", "Anlass und Problem", "Folgen (weil … / deshalb …)", "Bitte um einen Termin", "Gruß"],
    redemittel: ["Ich möchte mich über … beschweren.", "Seit einer Woche …", "Deshalb bitte ich Sie um …", "Ich wäre Ihnen dankbar, wenn …"],
  },
  {
    teil: 2,
    title: "Teil 2 — Meinung im Forum",
    titleAr: "الجزء 2 — رأي في منتدى",
    minutes: 15,
    points: 50,
    aufgabeDe:
      "Im Forum wird diskutiert: Sollten Städte kostenlosen öffentlichen Nahverkehr anbieten? Schreiben Sie Ihre Meinung. Nennen Sie mindestens einen Grund und ein Beispiel.",
    aufgabeAr:
      "يدور نقاش في المنتدى: هل يجب أن تقدم المدن النقل العام المجاني؟ اكتب رأيك. اذكر سبباً واحداً على الأقل ومثالاً.",
    minWords: 80,
    requires: [
      { de: "Die eigene Meinung klar äußern", ar: "التعبير عن رأيك بوضوح" },
      { de: "Mindestens einen Grund nennen", ar: "ذكر سبب واحد على الأقل" },
      { de: "Ein Beispiel geben", ar: "إعطاء مثال" },
    ],
    struktur: ["Meinung", "Grund (weil / denn)", "Beispiel", "Gegenargument (obwohl / zwar … aber)", "Fazit"],
    redemittel: ["Meiner Meinung nach …", "Ein wichtiger Grund ist, dass …", "Zum Beispiel …", "Zwar … , aber …", "Zusammenfassend …"],
  },
];
