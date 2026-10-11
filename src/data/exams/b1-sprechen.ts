/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — تحدث B1 (بنية شبيهة بـ Goethe-Zertifikat B1)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  المتعلم يتدرب وحده: جمل الشريك تُقرأ بصوت الجهاز، ثم تقارن إجابتك بالنموذج.
 *  Sprechen: 3 أجزاء · ~15 دقيقة
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "./a1-sprechen";

export const B1_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نخطط معاً",
    instructionAr:
      "أنت وزميلك تنظمان حفلة صغيرة لزميل يترك العمل. اتفقا على المكان، والموعد، والهدية، وقدّم اقتراحاً وبرر رأيك.",
    turns: [
      {
        partnerDe: "Wir sollten Thomas zum Abschied eine Überraschung organisieren. Hast du einen Vorschlag?",
        partnerAr: "يجب أن ننظم لتوماس مفاجأة وداع. هل لديك اقتراح؟",
        modelDe: "Ich schlage vor, wir laden ihn in ein Restaurant ein, weil er das Essen dort so mag.",
        modelAr: "أقترح أن ندعوه إلى مطعم، لأنه يحب الطعام هناك.",
      },
      {
        partnerDe: "Gute Idee. Aber das Restaurant ist ziemlich teuer. Was meinst du?",
        partnerAr: "فكرة جيدة. لكن المطعم غالٍ نوعاً ما. ما رأيك؟",
        modelDe: "Da hast du recht. Vielleicht können wir einen günstigeren Ort finden, obwohl das Essen dort nicht so gut ist.",
        modelAr: "معك حق. ربما نجد مكاناً أرخص، رغم أن الطعام هناك ليس بهذه الجودة.",
      },
      {
        partnerDe: "Und welches Geschenk wäre passend?",
        partnerAr: "وما الهدية المناسبة؟",
        modelDe: "Wie wäre es mit einem Buch? Dann hätte er etwas zum Lesen in der Freizeit.",
        modelAr: "ما رأيك بكتاب؟ عندها سيكون لديه شيء يقرؤه في وقت فراغه.",
      },
    ],
    checklistAr: [
      "قدّمت اقتراحاً واضحاً مع سبب (weil / denn)",
      "رددت على اعتراض الشريك بدل أن تكتفي بالموافقة",
      "استعملت جملة شرطية أو المضارع الثاني (würde / hätte) مرة واحدة على الأقل",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — نقدم معلومات ونقارن",
    instructionAr:
      "سيسألك شريكك عن عادات السفر عندك. قارن بين طريقتين للسفر، وقل أيهما تفضل ولماذا.",
    turns: [
      {
        partnerDe: "Reisen Sie lieber mit dem Zug oder mit dem Flugzeug?",
        partnerAr: "هل تسافر بالقطار أم بالطائرة؟",
        modelDe: "Ich reise lieber mit dem Zug, weil ich dabei die Landschaft sehen kann. Das Flugzeug ist zwar schneller, aber auch viel stressiger.",
        modelAr: "أفضّل السفر بالقطار، لأني أرى المناظر خلاله. الطائرة أسرع صحيح، لكنها أكثر توتراً.",
      },
      {
        partnerDe: "Und was war Ihre letzte Reise?",
        partnerAr: "وما كانت آخر رحلة لك؟",
        modelDe: "Letztes Jahr bin ich mit meiner Familie nach Italien gefahren. Wir haben viele Städte besucht.",
        modelAr: "السنة الماضية سافرت مع عائلتي إلى إيطاليا. زرنا مدناً كثيرة.",
      },
    ],
    checklistAr: [
      "قارنت بين شيئين باستعمال Komparativ (schneller، stressiger)",
      "استعملت Zwar … aber أو obwohl للتعبير عن الاعتراض",
      "تحدثت عن تجربة سابقة بالماضي (Perfekt)",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نعبّر عن رأيك في موضوع",
    instructionAr:
      "تحدث دقيقة ونصف تقريباً عن موضوع: هل يجب أن تكون دروس اللغات إلزامية في المدارس؟ ابدأ برأيك، ثم اذكر سببين، ثم اختم.",
    turns: [
      {
        partnerDe: "Sollten Fremdsprachen in der Schule Pflicht sein? Was denken Sie?",
        partnerAr: "هل يجب أن تكون اللغات الأجنبية إلزامية في المدرسة؟ ما رأيك؟",
        modelDe: "Meiner Meinung nach sollten sie Pflicht sein. Erstens öffnen Sprachen den Blick für andere Kulturen. Zweitens helfen sie später im Beruf, obwohl nicht jeder Sprachen braucht.",
        modelAr: "برأيي يجب أن تكون إلزامية. أولاً، تفتح اللغات الأفق على ثقافات أخرى. ثانياً، تساعد لاحقاً في العمل، رغم أن ليس كل شخص يحتاج اللغات.",
      },
    ],
    checklistAr: [
      "بدأت برأيك بعبارة مثل: Meiner Meinung nach …",
      "ذكرت سببين على الأقل (erstens / zweitens)",
      "أضفت اعتراضاً أو استثناءً (obwohl / zwar … aber)",
    ],
  },
];
