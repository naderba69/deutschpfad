/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — كتابة B1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Schreiben: مهمتان · ~30 دقيقة · الحد الأدنى 80 كلمة لكل مهمة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const B1_MODEL3_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — E-Mail an die Kursleitung",
    titleAr: "الجزء 1 — بريد إلكتروني إلى إدارة الدورة",
    minutes: 15,
    points: 50,
    aufgabeDe:
      "Sie besuchen einen Deutschkurs B1. Die Kursleitung hat die Uhrzeit geändert, aber Sie können abends nicht mehr kommen. Schreiben Sie eine E-Mail an die Kursleitung: Erklären Sie Ihre Situation, schlagen Sie eine Lösung vor und fragen Sie, ob ein Wechsel möglich ist.",
    aufgabeAr:
      "تحضر دورة ألمانية B1. غيّرت إدارة الدورة التوقيت، لكنك لم تعد تستطيع الحضور مساءً. اكتب بريداً إلكترونياً إلى الإدارة: اشرح وضعك، واقترح حلاً، واسأل إن كان التبديل ممكناً.",
    minWords: 80,
    requires: [
      { de: "Die Situation erklären", ar: "شرح الوضع" },
      { de: "Einen Vorschlag machen", ar: "تقديم اقتراح" },
      { de: "Nach einem Wechsel fragen", ar: "السؤال عن التبديل" },
    ],
    struktur: ["Anrede (Sehr geehrte Frau …)", "Grund des Schreibens", "Situation mit Nebensätzen", "Vorschlag", "Höfliche Frage", "Gruß"],
    redemittel: [
      "Sehr geehrte Frau Neumann,",
      "ich schreibe Ihnen, weil sich mein Arbeitsplan geändert hat.",
      "Leider kann ich den Abendkurs nicht mehr besuchen.",
      "Wäre es möglich, in den Kurs am Samstagmorgen zu wechseln?",
      "Ich würde mich über eine kurze Antwort freuen.",
      "Mit freundlichen Grüßen",
    ],
  },
  {
    teil: 2,
    title: "Teil 2 — Meinung im Forum",
    titleAr: "الجزء 2 — رأي في منتدى",
    minutes: 15,
    points: 50,
    aufgabeDe:
      "In einem Forum diskutiert man über das Thema: „Soll man Kleidung online kaufen oder lieber im Geschäft?“ Schreiben Sie einen Beitrag: Nennen Sie Ihre Meinung, geben Sie ein Beispiel aus Ihrem Alltag und gehen Sie auf einen Vorteil der anderen Seite ein.",
    aufgabeAr:
      "في منتدى يُناقش الموضوع: «هل نشتري الملابس عبر الإنترنت أم من المتجر؟». اكتب مشاركة: اذكر رأيك، وأعطِ مثالاً من حياتك اليومية، وتناول ميزة من الجانب الآخر.",
    minWords: 80,
    requires: [
      { de: "Die eigene Meinung nennen", ar: "ذكر الرأي الشخصي" },
      { de: "Ein Beispiel geben", ar: "إعطاء مثال" },
      { de: "Auf die andere Seite eingehen", ar: "التناول من الجانب الآخر" },
    ],
    struktur: ["Einleitung mit Thema", "Eigene Meinung", "Beispiel", "Gegenargument mit Einschränkung", "Fazit"],
    redemittel: [
      "Meiner Meinung nach …",
      "Ich kaufe Kleidung lieber im Geschäft, weil …",
      "Letztes Jahr habe ich …",
      "Natürlich hat das Online-Shopping auch Vorteile: …",
      "Trotzdem finde ich, dass …",
      "Zusammenfassend würde ich sagen, dass …",
    ],
  },
];
