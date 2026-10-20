/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — تحدث A1 (بنية شبيهة بـ Start Deutsch 1)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  المتعلم يتدرب وحده: الجمل الألمانية للشريك تُقرأ بصوت الجهاز،
 *  وعباراتك النموذجية تظهر بعد أن تحاول بنفسك.
 *  Sprechen: 3 أجزاء · ~15 دقيقة
 * ═══════════════════════════════════════════════════════════
 */

export interface A1SpeakingTurn {
  /** ما يقوله الشريك (يُقرأ بصوت الجهاز) */
  partnerDe: string;
  partnerAr: string;
  /** عبارة نموذجية للمتعلم (تظهر بعد المحاولة) */
  modelDe: string;
  modelAr: string;
}

export interface A1SpeakingPart {
  teil: 1 | 2 | 3;
  titleAr: string;
  instructionAr: string;
  turns: A1SpeakingTurn[];
  /** قائمة فحص ذاتية بعد الانتهاء من الجزء */
  checklistAr: string[];
}

export const A1_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نخطط معاً",
    instructionAr:
      "أنت وصديقك تريدان فعل شيء معاً يوم السبت. اقترح نشاطاً، واسأل عن الوقت، ثم اتفقا على الساعة والمكان.",
    turns: [
      {
        partnerDe: "Hast du am Samstag Zeit?",
        partnerAr: "هل لديك وقت يوم السبت؟",
        modelDe: "Ja, ich habe Zeit. Wollen wir ins Kino gehen?",
        modelAr: "نعم، لدي وقت. هل نذهب إلى السينما؟",
      },
      {
        partnerDe: "Gute Idee! Um wie viel Uhr?",
        partnerAr: "فكرة جيدة! الساعة كم؟",
        modelDe: "Wie wäre es um sechs Uhr?",
        modelAr: "ما رأيك الساعة السادسة؟",
      },
      {
        partnerDe: "Um sechs passt gut. Wo treffen wir uns?",
        partnerAr: "الساعة السادسة مناسبة. أين نلتقي؟",
        modelDe: "Treffen wir uns vor dem Kino?",
        modelAr: "هل نلتقي أمام السينما؟",
      },
    ],
    checklistAr: [
      "اقترحت نشاطاً بعبارة مثل: Wollen wir …?",
      "سألت عن الوقت أو ذكرت ساعة محددة",
      "اتفقت على مكان ووقت واضحين",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — نتبادل المعلومات",
    instructionAr: "سيسألك شريكك عن نفسك. أجب بجملة كاملة عن كل سؤال.",
    turns: [
      {
        partnerDe: "Wie heißen Sie?",
        partnerAr: "ما اسمك؟",
        modelDe: "Ich heiße Karim.",
        modelAr: "اسمي كريم.",
      },
      {
        partnerDe: "Woher kommen Sie?",
        partnerAr: "من أين أنت؟",
        modelDe: "Ich komme aus Tunesien.",
        modelAr: "أنا من تونس.",
      },
      {
        partnerDe: "Wo wohnen Sie jetzt?",
        partnerAr: "أين تسكن الآن؟",
        modelDe: "Ich wohne in Berlin.",
        modelAr: "أسكن في برلين.",
      },
      {
        partnerDe: "Was machen Sie in Ihrer Freizeit?",
        partnerAr: "ماذا تفعل في وقت فراغك؟",
        modelDe: "Ich spiele gern Fußball.",
        modelAr: "ألعب كرة القدم بسرور.",
      },
    ],
    checklistAr: [
      "أجبت بجملة كاملة عن كل سؤال",
      "استعملت ich + الفعل في الشكل الصحيح (heiße، komme، wohne، spiele)",
      "لم تكتفِ بكلمة واحدة",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نتحدث عن نفسنا",
    instructionAr:
      "تحدث لمدة دقيقة تقريباً عن موضوع: يومك العادي. اذكر متى تستيقظ، وماذا تفعل بعد الظهر، وماذا تحب.",
    turns: [
      {
        partnerDe: "Erzählen Sie mir etwas über Ihren Tag.",
        partnerAr: "احكِ لي شيئاً عن يومك.",
        modelDe: "Ich stehe um sieben Uhr auf. Am Nachmittag lerne ich Deutsch. Abends sehe ich gern fern.",
        modelAr: "أستيقظ في السابعة. بعد الظهر أتعلم الألمانية. مساءً أحب مشاهدة التلفاز.",
      },
    ],
    checklistAr: [
      "ذكرت ساعة الاستيقاظ (um … Uhr)",
      "تحدثت عن فترة من اليوم (am Nachmittag / abends)",
      "قلت ما تحب بعبارة مثل: ich … gern",
    ],
  },
];
