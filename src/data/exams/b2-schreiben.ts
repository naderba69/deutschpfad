/**
 * ═══════════════════════════════════════════════════════════
 *  بنك الكتابة — Goethe-Zertifikat B2 (الصيغة الرسمية)
 *  Schreiben: مهمتان · 75 دقيقة · 100 نقطة
 *   Teil 1: Forumsbeitrag (≥ 150 كلمة) — التعليق على مشاركة
 *   Teil 2: رسالة رسمية (≥ 100 كلمة) — في سياق مهني/خدمي
 *  التقييم بالمعايير الرسمية: Erfüllung / Kohärenz / Wortschatz / Struktur
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const B2_SCHREIBEN: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Forumsbeitrag",
    titleAr: "الجزء 1 — مشاركة في منتدى",
    minutes: 45,
    points: 50,
    aufgabeDe:
      "In einem Internetforum lesen Sie folgenden Beitrag: „Ich würde gern neben dem Studium arbeiten, aber ich habe Angst, dass meine Noten darunter leiden. Hat jemand Erfahrungen damit? Wie schafft man die Balance?“ Schreiben Sie einen Beitrag (mindestens 150 Wörter): Äußern Sie Ihre Meinung, berichten Sie von eigenen Erfahrungen oder Beispielen, geben Sie Ratschläge und nennen Sie die Vorteile und Nachteile.",
    aufgabeAr:
      "في منتدى إنترنت تقرأ المشاركة التالية: «أود العمل بجانب الدراسة، لكنني أخشى أن تتأثر درجاتي. هل لدى أحد تجارب مع ذلك؟ كيف يوفق المرء بينهما؟» اكتب مشاركة (150 كلمة على الأقل): أبدِ رأيك، تحدث عن تجاربك أو أمثلة، قدم نصائح، واذكر الإيجابيات والسلبيات.",
    minWords: 150,
    requires: [
      { de: "Meinung äußern und begründen", ar: "إبداء الرأي وتبريره" },
      { de: "Eigene Erfahrung oder Beispiel", ar: "تجربة شخصية أو مثال" },
      { de: "Ratschläge geben", ar: "تقديم نصائح" },
      { de: "Vor- und Nachteile nennen", ar: "ذكر الإيجابيات والسلبيات" },
    ],
    struktur: [
      "الافتتاح: أشر إلى أنك قرأت المشاركة (Ich habe den Beitrag gelesen und möchte dazu Stellung nehmen.)",
      "رأيك + تعليل: Meiner Meinung nach… / Ich bin der Ansicht, dass…",
      "تجربة أو مثال واقعي: Bei mir war es so, dass… / Ein Beispiel aus meinem Umfeld…",
      "النصائح: Ich empfehle… / Man sollte… / Wichtig ist, dass…",
      "الخاتمة: Zusammenfassend lässt sich sagen…",
    ],
    redemittel: [
      "Ich habe den Beitrag gelesen und möchte dazu meine Meinung sagen.",
      "Meiner Meinung nach hängt es von der eigenen Organisation ab.",
      "Aus eigener Erfahrung kann ich sagen, dass…",
      "Ein großer Vorteil ist, dass man finanzielle Unabhängigkeit gewinnt.",
      "Der Nachteil besteht darin, dass die Konzentration auf das Studium leidet.",
      "Ich empfehle, sich einen festen Wochenplan zu machen.",
      "Wichtig ist, dass man sich Pausen gönnt und nicht alles perfekt machen will.",
      "Zusammenfassend lässt sich sagen, dass ein Nebenjob möglich ist, wenn man seine Zeit gut plant.",
    ],
  },
  {
    teil: 2,
    title: "Teil 2 — Formelle E-Mail",
    titleAr: "الجزء 2 — رسالة رسمية",
    minutes: 30,
    points: 50,
    aufgabeDe:
      "Sie haben vor zwei Wochen einen Laptop im Online-Shop „Technikwelt“ bestellt. Er ist beschädigt angekommen. Schreiben Sie eine formelle E-Mail an den Kundenservice (mindestens 100 Wörter): Beschreiben Sie das Problem, nennen Sie Bestellnummer und Datum, fordern Sie eine Lösung (Ersatz oder Erstattung) und setzen Sie eine angemessene Frist.",
    aufgabeAr:
      "طلبت قبل أسبوعين حاسوباً محمولاً من المتجر الإلكتروني «Technikwelt»، ووصل تالفاً. اكتب بريداً رسمياً لخدمة العملاء (100 كلمة على الأقل): صف المشكلة، اذكر رقم الطلب والتاريخ، طالب بحل (استبدال أو استرداد)، وحدد مهلة مناسبة.",
    minWords: 100,
    requires: [
      { de: "Problem beschreiben", ar: "وصف المشكلة" },
      { de: "Bestellnummer und Datum nennen", ar: "ذكر رقم الطلب والتاريخ" },
      { de: "Eine Lösung fordern", ar: "المطالبة بحل" },
      { de: "Eine Frist setzen", ar: "تحديد مهلة" },
    ],
    struktur: [
      "Betreff واضح: Beschwerde über beschädigte Lieferung – Bestellnummer 123456",
      "التحية: Sehr geehrte Damen und Herren,",
      "السبب: Ich schreibe Ihnen, weil… / Mit großem Bedauern muss ich Ihnen mitteilen, dass…",
      "التفاصيل: Bestellnummer, Bestelldatum, Art des Schadens",
      "الطلب: Ich fordere Sie auf… / Ich bitte Sie um… (Ersatz oder Erstattung)",
      "المهلة: Ich erwarte Ihre Antwort bis zum…",
      "الخاتمة: Mit freundlichen Grüßen",
    ],
    redemittel: [
      "Sehr geehrte Damen und Herren,",
      "Ich schreibe Ihnen, weil ich mit einer Bestellung unzufrieden bin.",
      "Am 3. August habe ich den Laptop mit der Bestellnummer 123456 bestellt.",
      "Leider kam das Gerät mit einem beschädigten Bildschirm an.",
      "Ich bitte Sie, mir entweder ein Ersatzgerät zu schicken oder den Kaufbetrag zu erstatten.",
      "Ich erwarte Ihre Antwort bis zum 30. August.",
      "Sollte ich keine Rückmeldung erhalten, sehe ich mich gezwungen, rechtliche Schritte einzuleiten.",
      "Mit freundlichen Grüßen",
      "Vorname Nachname",
    ],
  },
];
