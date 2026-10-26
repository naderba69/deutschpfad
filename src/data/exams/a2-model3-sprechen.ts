/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — تحدث A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  المتعلم يتدرب وحده: جمل الشريك تُقرأ بصوت الجهاز، والعبارة النموذجية تظهر
 *  بعد المحاولة. Sprechen: 3 أجزاء · ~15 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";

export const A2_MODEL3_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نتحدث عن أنفسنا (الوقت الحر والرياضة)",
    instructionAr:
      "يطرح عليك شريكك أسئلة عن وقتك الحر. أجب بجمل كاملة، ثم اسأله سؤالاً واحداً على الأقل.",
    turns: [
      {
        partnerDe: "Was machst du in deiner Freizeit?",
        partnerAr: "ماذا تفعل في وقت فراغك؟",
        modelDe: "In meiner Freizeit spiele ich Fußball und lese viel.",
        modelAr: "في وقت فراغي ألعب كرة القدم وأقرأ كثيراً.",
      },
      {
        partnerDe: "Machst du auch Sport im Verein?",
        partnerAr: "هل تمارس الرياضة في نادٍ أيضاً؟",
        modelDe: "Nein, ich spiele mit Freunden auf dem Platz. Und du?",
        modelAr: "لا، ألعب مع أصدقاء في الملعب. وأنت؟",
      },
      {
        partnerDe: "Wie oft hast du Zeit für Sport?",
        partnerAr: "كم مرة لديك وقت للرياضة؟",
        modelDe: "Zweimal pro Woche, meistens am Abend nach der Arbeit.",
        modelAr: "مرتين في الأسبوع، غالباً في المساء بعد العمل.",
      },
    ],
    checklistAr: [
      "أجبت بجمل كاملة عن وقت الفراغ",
      "ذكرت تكراراً واضحاً (zweimal pro Woche)",
      "سألت شريكك سؤالاً مضاداً",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — أسئلة عن صور (التسوق والمدينة)",
    instructionAr:
      "يصف شريكك صورة ويسألك. أجب بجمل كاملة، ثم اسأل أنت سؤالاً واحداً على الأقل.",
    turns: [
      {
        partnerDe: "Auf dem Bild sehe ich einen Wochenmarkt. Kaufst du gern dort ein?",
        partnerAr: "في الصورة أرى سوقاً أسبوعياً. هل تحب التسوق هناك؟",
        modelDe: "Ja, gern. Das Obst ist frischer und oft billiger als im Supermarkt.",
        modelAr: "نعم، بكل سرور. الفواكه هناك أطزج وغالباً أرخص من السوق.",
      },
      {
        partnerDe: "Wie kommst du zum Markt?",
        partnerAr: "كيف تصل إلى السوق؟",
        modelDe: "Ich fahre mit dem Fahrrad, das dauert nur zehn Minuten. Und du?",
        modelAr: "أذهب بالدراجة، والأمر يستغرق عشر دقائق فقط. وأنت؟",
      },
      {
        partnerDe: "Kaufst du auch im Internet ein?",
        partnerAr: "هل تتسوق عبر الإنترنت أيضاً؟",
        modelDe: "Manchmal, aber Kleidung probiere ich lieber im Geschäft an.",
        modelAr: "أحياناً، لكن الملابس أفضّل تجربتها في المتجر.",
      },
    ],
    checklistAr: [
      "أجبت بجمل كاملة عن التسوق",
      "استخدمت مقارنة (frischer … als / billiger als)",
      "سألت شريكك سؤالاً مضاداً",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نخطط معاً (هدية وداع للزميل)",
    instructionAr:
      "مع زميلك تريد أن تجمعا مالاً لهدية مشتركة. اقترح فكرة وحدّد سعراً، ثم اتفقا على موعد وطريقة الجمع.",
    turns: [
      {
        partnerDe: "Was schenken wir Ahmad zum Abschied?",
        partnerAr: "ماذا نُهدي أحمد في وداعه؟",
        modelDe: "Wollen wir ihm ein Buch über Kochen schenken?",
        modelAr: "هل نهديه كتاباً عن الطبخ؟",
      },
      {
        partnerDe: "Und wie viel soll jeder geben?",
        partnerAr: "وكم يدفع كل واحد؟",
        modelDe: "Ich denke, fünf Euro pro Person sind genug.",
        modelAr: "أعتقد أن خمسة يورو للشخص كافية.",
      },
      {
        partnerDe: "Wann sammeln wir das Geld?",
        partnerAr: "متى نجمع المال؟",
        modelDe: "Bis Donnerstag, dann bestelle ich das Buch. Einverstanden?",
        modelAr: "حتى الخميس، ثم أطلب الكتاب. موافق؟",
      },
    ],
    checklistAr: [
      "اقترحت فكرة هدية بعبارة مثل: Wollen wir …?",
      "حدّدت سعراً واضحاً",
      "اتفقت على موعد وطريقة الجمع",
    ],
  },
];
