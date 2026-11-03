/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — تحدث A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  المتعلم يتدرب وحده: جمل الشريك تُقرأ بصوت الجهاز، والعبارة النموذجية تظهر
 *  بعد المحاولة. Sprechen: 3 أجزاء · ~15 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";

export const A1_MODEL3_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نخطط لعشاء مشترك",
    instructionAr:
      "أنت وصديقتك تريدان الطبخ معاً مساء الجمعة. اقترح طبقة، واسأل عمّا تحضره من مكوّنات، ثم اتفقا على الساعة.",
    turns: [
      {
        partnerDe: "Wollen wir am Freitag zusammen kochen?",
        partnerAr: "هل نطبخ معاً يوم الجمعة؟",
        modelDe: "Ja, gern! Kochen wir Nudeln mit Gemüse?",
        modelAr: "نعم، بكل سرور! هل نطبخ معكرونة بالخضار؟",
      },
      {
        partnerDe: "Gut. Was brauchen wir dafür?",
        partnerAr: "جيد. ماذا نحتاج لذلك؟",
        modelDe: "Wir brauchen Tomaten, Zwiebeln und Öl.",
        modelAr: "نحتاج طماطم وبصلاً وزيتاً.",
      },
      {
        partnerDe: "Und wann beginnst du?",
        partnerAr: "ومتى تبدأ؟",
        modelDe: "Ich komme um sechs Uhr zu dir. Passt das?",
        modelAr: "سآتي إليك الساعة السادسة. هل يناسبك؟",
      },
    ],
    checklistAr: [
      "اقترحت طبقة بعبارة مثل: Kochen wir …?",
      "ذكرت مكوّنات مناسبة",
      "اتفقت على ساعة واضحة",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — أسئلة عن صور (اللباس والطقس)",
    instructionAr:
      "يصف شريكك صورة ويسألك. أجب بجمل كاملة، ثم اسأل أنت سؤالاً واحداً على الأقل.",
    turns: [
      {
        partnerDe: "Auf dem Bild sehe ich einen Park. Es ist kalt. Was trägst du im Winter?",
        partnerAr: "في الصورة أرى حديقة. الجو بارد. ماذا تلبس في الشتاء؟",
        modelDe: "Im Winter trage ich eine Jacke und einen Schal.",
        modelAr: "في الشتاء ألبس جاكيت ووشاحاً.",
      },
      {
        partnerDe: "Und was machst du bei Regen?",
        partnerAr: "وماذا تفعل عند المطر؟",
        modelDe: "Bei Regen nehme ich einen Regenschirm mit. Und du?",
        modelAr: "عند المطر آخذ مظلة. وأنت؟",
      },
      {
        partnerDe: "Regnet es bei dir oft?",
        partnerAr: "هل تمطر عندك كثيراً؟",
        modelDe: "Nein, bei uns regnet es wenig. Im Sommer ist es sehr heiß.",
        modelAr: "لا، عندنا تمطر قليلاً. في الصيف يكون الجو حاراً جداً.",
      },
    ],
    checklistAr: [
      "أجبت بجمل كاملة (لا بكلمة واحدة)",
      "سألت سؤالاً مضاداً (Und du?)",
      "استخدمت مفردات الطقس واللباس",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — طلبات في الصف",
    instructionAr:
      "يطلب منك شريكك طلبات في الصف. استخدم صيغة مهذبة (Können Sie…? / Könnten Sie…?) ثم اطلب أنت طلباً واحداً.",
    turns: [
      {
        partnerDe: "Der Lehrer spricht sehr schnell.",
        partnerAr: "المعلم يتحدث بسرعة كبيرة.",
        modelDe: "Könnten Sie das bitte wiederholen?",
        modelAr: "هل يمكن أن تعيد ذلك من فضلك؟",
      },
      {
        partnerDe: "Ich verstehe dieses Wort nicht.",
        partnerAr: "لا أفهم هذه الكلمة.",
        modelDe: "Können Sie mir das Wort bitte erklären?",
        modelAr: "هل يمكن أن تشرح لي الكلمة من فضلك؟",
      },
      {
        partnerDe: "Ich habe keinen Stift.",
        partnerAr: "ليس لديّ قلم.",
        modelDe: "Kann ich Ihnen meinen Stift leihen?",
        modelAr: "هل أُعيرك قلمي؟",
      },
    ],
    checklistAr: [
      "استخدمت صيغة مهذبة (bitte / Könnten Sie …?)",
      "قدّمت عرض مساعدة بعبارة مثل: Kann ich Ihnen …?",
      "نطقت الجملة كاملة بلا توقف طويل",
    ],
  },
];
