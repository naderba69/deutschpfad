/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — تحدث A2 (بنية شبيهة بـ Goethe-Zertifikat A2)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  المتعلم يتدرب وحده: جمل الشريك تُقرأ بصوت الجهاز، ثم تقارن إجابتك بالنموذج.
 *  Sprechen: 3 أجزاء · ~15 دقيقة
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "./a1-sprechen";

export const A2_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نخطط معاً",
    instructionAr:
      "أنت وصديقك تريدان تنظيم رحلة قصيرة. اقترح مكاناً، واسأل عن الموعد، واتفقا على وسيلة النقل.",
    turns: [
      {
        partnerDe: "Wir sollten am Wochenende etwas zusammen unternehmen. Hast du eine Idee?",
        partnerAr: "يجب أن نقوم بشيء معاً في عطلة نهاية الأسبوع. هل لديك فكرة؟",
        modelDe: "Ich schlage vor, wir fahren ans Meer. Das Wetter soll gut sein.",
        modelAr: "أقترح أن نذهب إلى البحر. يُقال إن الطقس سيكون جميلاً.",
      },
      {
        partnerDe: "Gute Idee! Wie kommen wir dorthin?",
        partnerAr: "فكرة جيدة! كيف نصل إلى هناك؟",
        modelDe: "Wir können mit dem Zug fahren. Das ist schneller als mit dem Bus.",
        modelAr: "يمكننا أن نسافر بالقطار. هذا أسرع من الحافلة.",
      },
      {
        partnerDe: "Und wann treffen wir uns am Bahnhof?",
        partnerAr: "ومتى نلتقي في المحطة؟",
        modelDe: "Hast du um acht Uhr Zeit? Dann kaufen wir die Tickets vorher.",
        modelAr: "هل لديك وقت في الثامنة؟ عندها نشتري التذاكر قبل ذلك.",
      },
    ],
    checklistAr: [
      "اقترحت فكرة بعبارة مثل: Ich schlage vor, …",
      "سألت عن الوسيلة أو ذكرت وسيلة محددة (mit dem Zug / Bus)",
      "اتفقت على وقت ومكان واضحين",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — نتحدث عن الماضي",
    instructionAr: "سيسألك شريكك عن تجربة سابقة. أجب بجمل تستعمل الماضي (Perfekt).",
    turns: [
      {
        partnerDe: "Was hast du letztes Wochenende gemacht?",
        partnerAr: "ماذا فعلت في عطلة نهاية الأسبوع الماضي؟",
        modelDe: "Ich habe meine Familie besucht und wir haben zusammen gekocht.",
        modelAr: "زرت عائلتي، وطبخنا معاً.",
      },
      {
        partnerDe: "Bist du gestern ins Kino gegangen?",
        partnerAr: "هل ذهبت إلى السينما أمس؟",
        modelDe: "Nein, ich bin nicht gegangen. Ich bin zu Hause geblieben.",
        modelAr: "لا، لم أذهب. بقيت في البيت.",
      },
      {
        partnerDe: "Warst du schon einmal in Spanien?",
        partnerAr: "هل سبق أن زرت إسبانيا؟",
        modelDe: "Ja, ich war letztes Jahr in Madrid. Es war sehr schön.",
        modelAr: "نعم، كنت في مدريد السنة الماضية. كانت جميلة جداً.",
      },
    ],
    checklistAr: [
      "استعملت haben أو sein مع الفعل في صيغة Partizip II",
      "أجبت بجملة كاملة لا بكلمة واحدة",
      "وضعت الفعل المساعد في المكان الصحيح (المؤخرة في الجملة الثانية)",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نعبّر عن رأيك",
    instructionAr:
      "تحدث دقيقة تقريباً عن موضوع: هل تفضل العمل من البيت أم من المكتب؟ اذكر رأيك وسببه، وقل ما تحب وما لا تحب.",
    turns: [
      {
        partnerDe: "Arbeiten Sie lieber im Büro oder zu Hause? Warum?",
        partnerAr: "هل تفضل العمل في المكتب أم في البيت؟ لماذا؟",
        modelDe: "Ich arbeite lieber im Büro, weil ich dort meine Kollegen treffe. Zu Hause ist es oft zu ruhig für mich.",
        modelAr: "أفضّل العمل في المكتب، لأني ألتقي زملائي هناك. في البيت يكون الهدوء أحياناً أكثر من اللازم بالنسبة لي.",
      },
    ],
    checklistAr: [
      "عبّرت عن رأيك بعبارة مثل: Ich finde … / Ich arbeite lieber …",
      "ذكرت سبباً بـ weil أو denn",
      "تحدثت لمدة كافية (ثلاث جمل على الأقل)",
    ],
  },
];
