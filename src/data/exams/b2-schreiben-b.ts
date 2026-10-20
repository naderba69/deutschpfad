/**
 * ═══════════════════════════════════════════════════════════
 *  بنك الكتابة — الطقم الثاني (B2-Set B) — Goethe-Zertifikat B2
 *  Schreiben: مهمتان · 75 دقيقة · 100 نقطة (الصيغة الرسمية نفسها)
 *   Teil 1: Forumsbeitrag (≥ 150 كلمة) — التعليق على مشاركة في منتدى
 *   Teil 2: رسالة رسمية (≥ 100 كلمة) — في سياق خدمي
 *
 *  لماذا طقم ثانٍ؟ كانت القراءة والاستماع بثلاثة أطقم كاملة بينما الكتابة
 *  والتحدث بطقم واحد — فمن يُعيد الامتحان يستهلك النصّين نفسهما ويحفظهما.
 *  الدرجة الرسمية والحدود الزمنية ونقاط المعايير لم تتغيّر: التغيير في **المواد**
 *  لا في التقييم. الموضوعان: العمل التطوعي (Ehrenamt) وشكوى على دورة لغة،
 *  وكلاهما من نمط المواد الرسمية المتكرّر في الامتحان.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamSchreibaufgabe } from "@/types/exam";

export const B2_SCHREIBEN_B: ExamSchreibaufgabe[] = [
  {
    teil: 1,
    title: "Teil 1 — Forumsbeitrag",
    titleAr: "الجزء 1 — مشاركة في منتدى",
    minutes: 45,
    points: 50,
    aufgabeDe:
      "In einem Internetforum lesen Sie folgenden Beitrag: „Seit drei Monaten arbeite ich samstags ehrenamtlich in einem Tierheim. Meine Freunde sagen, ich verschwende meine Freizeit, andere finden mein Engagement großartig. Lohnt sich ehrenamtliche Arbeit überhaupt?“ Schreiben Sie einen Beitrag (mindestens 150 Wörter): Äußern Sie Ihre Meinung, berichten Sie von eigenen Erfahrungen oder Beispielen, geben Sie Ratschläge und nennen Sie die Vorteile und Nachteile.",
    aufgabeAr:
      "في منتدى إنترنت تقرأ المشاركة التالية: «منذ ثلاثة أشهر أعمل صباح كل سبت تطوّعاً في مأوًى للحيوانات. أصدقائي يقولون إنني أهدر وقت فراغي، وآخرون يرون فيّ التزامي شيئاً رائعاً. هل يستحقّ العمل التطوعي العناء فعلاً؟» اكتب مشاركة (150 كلمة على الأقل): أبدِ رأيك، تحدث عن تجاربك أو أمثلة، قدم نصائح، واذكر الإيجابيات والسلبيات.",
    minWords: 150,
    requires: [
      { de: "Meinung äußern und begründen", ar: "إبداء الرأي وتبريره" },
      { de: "Eigene Erfahrung oder Beispiel", ar: "تجربة شخصية أو مثال" },
      { de: "Ratschläge geben", ar: "تقديم نصائح" },
      { de: "Vor- und Nachteile nennen", ar: "ذكر الإيجابيات والسلبيات" },
    ],
    struktur: [
      "الافتتاح: أشر إلى المشاركة التي قرأتها (Ich habe den Beitrag gelesen und finde das Thema wichtig.)",
      "رأيك + تعليل: Meiner Meinung nach… / Ich bin überzeugt, dass…",
      "تجربة أو مثال: Bei mir war es so, dass… / Eine Freundin von mir…",
      "النصائح: Ich würde empfehlen… / Man sollte darauf achten, dass…",
      "الإيجابيات والسلبيات ثم الخاتمة: Einerseits… andererseits… / Zusammenfassend…",
    ],
    redemittel: [
      "Ich habe den Beitrag gelesen und möchte meine Erfahrung teilen.",
      "Meiner Meinung nach ist ehrenamtliche Arbeit keine verschwendete Zeit.",
      "Aus eigener Erfahrung kann ich sagen, dass man dabei viel lernt.",
      "Bei mir war es so, dass ich durch die Arbeit im Verein neue Kontakte gefunden habe.",
      "Ein großer Vorteil ist, dass man etwas Sinnvolles für andere tut.",
      "Der Nachteil besteht darin, dass man weniger Zeit für sich selbst hat.",
      "Ich würde empfehlen, mit wenigen Stunden pro Monat anzufangen.",
      "Wichtig ist, dass die Aufgabe zu den eigenen Interessen passt.",
      "Zusammenfassend lässt sich sagen, dass sich Engagement lohnt, wenn man seine Grenzen kennt.",
    ],
  },
  {
    teil: 2,
    title: "Teil 2 — Formelle E-Mail",
    titleAr: "الجزء 2 — رسالة رسمية",
    minutes: 30,
    points: 50,
    aufgabeDe:
      "Sie haben an der Sprachschule „LinguaPlus“ einen Abendkurs B2 gebucht (Kursnummer B2-17, gebucht am 12. Mai). Der Kurs wurde zweimal kurzfristig verschoben, und der Kursraum ist so klein, dass nicht alle einen Platz finden. Schreiben Sie eine formelle E-Mail an die Schulleitung (mindestens 100 Wörter): Beschreiben Sie das Problem, nennen Sie Kursnummer und Buchungsdatum, fordern Sie eine Lösung (Gruppenwechsel, Erstattung oder Nachholtermin) und setzen Sie eine angemessene Frist.",
    aufgabeAr:
      "حجزت في مدرسة اللغات «LinguaPlus» دورة مسائية بمستوى B2 (رقم الدورة B2-17، والحجز بتاريخ 12 مايو). أُجّلت الدورة مرتين في وقت متأخر، وقاعة الدرس صغيرة لدرجة أنّ بعض الطلاب لا يجدون مقعداً. اكتب بريداً رسمياً لإدارة المدرسة (100 كلمة على الأقل): صف المشكلة، اذكر رقم الدورة وتاريخ الحجز، طالب بحل (تغيير المجموعة أو استرداد المبلغ أو موعد تعويضي)، وحدد مهلة مناسبة.",
    minWords: 100,
    requires: [
      { de: "Problem beschreiben", ar: "وصف المشكلة" },
      { de: "Kursnummer und Buchungsdatum nennen", ar: "ذكر رقم الدورة وتاريخ الحجز" },
      { de: "Eine Lösung fordern", ar: "المطالبة بحل" },
      { de: "Eine Frist setzen", ar: "تحديد مهلة" },
    ],
    struktur: [
      "Betreff واضح: Beschwerde über den Abendkurs B2-17 – Bitte um Lösung",
      "التحية: Sehr geehrte Damen und Herren,",
      "السبب: Ich schreibe Ihnen, weil ich mit dem gebuchten Kurs unzufrieden bin.",
      "التفاصيل: Kursnummer, Buchungsdatum, wie oft verschoben, Problem mit dem Raum",
      "الطلب: Ich bitte Sie um einen Gruppenwechsel / um Erstattung / um einen Nachholtermin.",
      "المهلة: Ich erwarte Ihre Rückmeldung bis zum…",
      "الخاتمة: Mit freundlichen Grüßen + الاسم",
    ],
    redemittel: [
      "Sehr geehrte Damen und Herren,",
      "Ich schreibe Ihnen, weil ich mit meinem Abendkurs leider nicht zufrieden bin.",
      "Am 12. Mai habe ich den Kurs mit der Nummer B2-17 gebucht.",
      "Der Kurs wurde bereits zweimal kurzfristig verschoben.",
      "Außerdem ist der Kursraum so klein, dass mehrere Teilnehmer stehen müssen.",
      "Ich bitte Sie daher, mir einen Wechsel in eine andere Gruppe anzubieten.",
      "Alternativ erwarte ich eine Erstattung der Kursgebühr.",
      "Ich erwarte Ihre Rückmeldung bis zum 30. Juni.",
      "Andernfalls sehe ich mich gezwungen, die Kursgebühr zurückzufordern.",
      "Mit freundlichen Grüßen",
      "Vorname Nachname",
    ],
  },
];
