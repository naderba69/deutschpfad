/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — تحدث A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  المتعلم يتدرب وحده: جمل الشريك تُقرأ بصوت الجهاز، والعبارة النموذجية تظهر
 *  بعد المحاولة. Sprechen: 3 أجزاء · ~15 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";

export const A1_MODEL2_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نخطط لرحلة يوم الأحد",
    instructionAr:
      "أنت وصديقك تريدان القيام برحلة قصيرة يوم الأحد. اقترح مكاناً، واسأل عن وسيلة النقل، ثم اتفقا على الساعة.",
    turns: [
      {
        partnerDe: "Was machen wir am Sonntag?",
        partnerAr: "ماذا نفعل يوم الأحد؟",
        modelDe: "Wollen wir nach Köln fahren?",
        modelAr: "هل نسافر إلى كولونيا؟",
      },
      {
        partnerDe: "Gute Idee! Fahren wir mit dem Zug?",
        partnerAr: "فكرة جيدة! هل نسافر بالقطار؟",
        modelDe: "Ja, gern mit dem Zug. Er ist schnell.",
        modelAr: "نعم، بالقطار من فضلك. إنه سريع.",
      },
      {
        partnerDe: "Und wann treffen wir uns?",
        partnerAr: "ومتى نلتقي؟",
        modelDe: "Um neun Uhr am Bahnhof, passt das?",
        modelAr: "الساعة التاسعة في المحطة، هل يناسبك؟",
      },
    ],
    checklistAr: [
      "اقترحت مكاناً بعبارة مثل: Wollen wir …?",
      "ذكرت وسيلة نقل مناسبة",
      "اتفقت على ساعة ومكان واضحين",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — أسئلة عن صور (البيت والأكل)",
    instructionAr:
      "يصف شريكك صورة ويسألك. أجب بجمل كاملة، ثم اسأل أنت سؤالاً واحداً على الأقل.",
    turns: [
      {
        partnerDe: "Auf dem Bild sehe ich eine Küche. Kochst du gern?",
        partnerAr: "في الصورة أرى مطبخاً. هل تحب الطبخ؟",
        modelDe: "Ja, ich koche gern. Ich mache oft Salat und Reis.",
        modelAr: "نعم، أحب الطبخ. أعدّ غالباً السلطة والأرز.",
      },
      {
        partnerDe: "Was trinkst du zum Frühstück?",
        partnerAr: "ماذا تشرب في الفطور؟",
        modelDe: "Ich trinke Tee mit Milch. Und du?",
        modelAr: "أشرب الشاي بالحليب. وأنت؟",
      },
      {
        partnerDe: "Wer kocht in deiner Familie?",
        partnerAr: "من يطبخ في عائلتك؟",
        modelDe: "Meine Mutter kocht, aber am Wochenende koche ich.",
        modelAr: "أمي تطبخ، لكنني أطبخ في عطلة نهاية الأسبوع.",
      },
    ],
    checklistAr: [
      "أجبت بجمل كاملة (لا بكلمة واحدة)",
      "سألت سؤالاً مضاداً (Und du?)",
      "استخدمت مفردات الأكل والشرب",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — طلبات مهذبة",
    instructionAr:
      "يطلب منك شريكك طلبات. استخدم صيغة مهذبة (Können Sie…? / Könnten Sie…?) ثم اطلب أنت طلباً واحداً.",
    turns: [
      {
        partnerDe: "Ich habe kein Wasser. Was kann ich machen?",
        partnerAr: "ليس لديّ ماء. ماذا أفعل؟",
        modelDe: "Können Sie mir bitte ein Glas Wasser geben?",
        modelAr: "هل يمكن أن تعطيني كأس ماء من فضلك؟",
      },
      {
        partnerDe: "Der Koffer ist sehr schwer.",
        partnerAr: "الحقيبة ثقيلة جداً.",
        modelDe: "Kann ich Ihnen helfen? Ich trage den Koffer.",
        modelAr: "هل أساعدك؟ سأحمل الحقيبة.",
      },
      {
        partnerDe: "Ich finde den Bahnhof nicht.",
        partnerAr: "لا أجد المحطة.",
        modelDe: "Könnten Sie mir bitte den Weg zeigen?",
        modelAr: "هل يمكن أن تدلّني على الطريق من فضلك؟",
      },
    ],
    checklistAr: [
      "استخدمت صيغة مهذبة (bitte / Könnten Sie …?)",
      "قدّمت عرض مساعدة بعبارة مثل: Kann ich Ihnen helfen?",
      "نطقت الجملة كاملة بلا توقف طويل",
    ],
  },
];
