/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — تحدث A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Sprechen: 3 أجزاء · ~15 دقيقة · مستوى A2 (جمل مركّبة وسبب واضح).
 * ═══════════════════════════════════════════════════════════
 */
import type { A1SpeakingPart } from "@/data/exams/a1-sprechen";

export const A2_MODEL2_SPRECHEN: A1SpeakingPart[] = [
  {
    teil: 1,
    titleAr: "الجزء 1 — نتحدث عن أنفسنا (العمل واليوم)",
    instructionAr:
      "يعرّف كل منكما بنفسه: الاسم، المدينة، العمل أو الدراسة، ثم صف يومك المعتاد في 3–4 جمل مع ذكر الساعة.",
    turns: [
      {
        partnerDe: "Erzähl mir bitte von deinem Tag. Wann stehst du auf?",
        partnerAr: "حدّثني عن يومك. متى تستيقظ؟",
        modelDe: "Ich stehe um sechs Uhr auf und frühstücke um halb sieben.",
        modelAr: "أستيقظ الساعة السادسة وأفطر في السادسة والنصف.",
      },
      {
        partnerDe: "Und was machst du danach?",
        partnerAr: "وماذا تفعل بعد ذلك؟",
        modelDe: "Danach fahre ich mit dem Bus zur Arbeit. Die Fahrt dauert dreißig Minuten.",
        modelAr: "بعد ذلك أذهب بالحافلة إلى العمل. تستغرق الرحلة ثلاثين دقيقة.",
      },
      {
        partnerDe: "Arbeitest du auch am Wochenende?",
        partnerAr: "هل تعمل في عطلة نهاية الأسبوع أيضاً؟",
        modelDe: "Nein, am Wochenende habe ich frei. Ich besuche meine Familie oder lerne Deutsch.",
        modelAr: "لا، في نهاية الأسبوع أنا متفرغ. أزور عائلتي أو أدرس الألمانية.",
      },
    ],
    checklistAr: [
      "ذكرت ثلاث ساعات محددة على الأقل (um … Uhr)",
      "ربطت الجمل بـ danach / zuerst / dann",
      "تحدثت بجمل كاملة لا بكلمات مفردة",
    ],
  },
  {
    teil: 2,
    titleAr: "الجزء 2 — أسئلة عن صور (السكن والسفر)",
    instructionAr:
      "يصف شريكك صورة ويسألك. أجب بجملتين على الأقل لكل سؤال، ثم اسأل سؤالاً مضاداً.",
    turns: [
      {
        partnerDe: "Auf dem Bild sehe ich ein Haus mit Garten. Wohnst du auch in einem Haus?",
        partnerAr: "في الصورة أرى بيتاً بحديقة. هل تسكن في بيت أيضاً؟",
        modelDe: "Nein, ich wohne in einer Wohnung im dritten Stock. Sie hat drei Zimmer und einen Balkon.",
        modelAr: "لا، أسكن في شقة في الطابق الثالث. فيها ثلاث غرف وشرفة.",
      },
      {
        partnerDe: "Wie kommst du zur Arbeit?",
        partnerAr: "كيف تذهب إلى العمل؟",
        modelDe: "Ich nehme die U-Bahn, weil sie schneller als der Bus ist. Und du?",
        modelAr: "أستقل المترو لأنه أسرع من الحافلة. وأنت؟",
      },
      {
        partnerDe: "Fährst du gern in den Urlaub?",
        partnerAr: "هل تسافر في العطلة بسرور؟",
        modelDe: "Ja, sehr gern. Letztes Jahr war ich in Berlin und habe viele Museen besucht.",
        modelAr: "نعم، بكل سرور. السنة الماضية كنت في برلين وزرت متاحف عديدة.",
      },
    ],
    checklistAr: [
      "أجبت بجملتين على الأقل عن كل سؤال",
      "استخدمت مقارنة (schneller als …)",
      "سألت سؤالاً مضاداً عن شريكك",
    ],
  },
  {
    teil: 3,
    titleAr: "الجزء 3 — نخطط معاً (حدث في المدرسة أو العمل)",
    instructionAr:
      "أنت وشريكك تنظّمان فعالية صغيرة (حفل شاي أو رحلة قصيرة). اقترح، ووافق أو اعترض بسبب واضح، ثم وزّع المهام.",
    turns: [
      {
        partnerDe: "Wir möchten ein Sommerfest machen. Was schlägst du vor?",
        partnerAr: "نريد إقامة حفل صيفي. ماذا تقترح؟",
        modelDe: "Ich schlage Samstagnachmittag vor, weil dann alle Zeit haben.",
        modelAr: "أقترح بعد ظهر السبت، لأن الجميع متفرغون حينها.",
      },
      {
        partnerDe: "Und wo feiern wir?",
        partnerAr: "وأين نحتفل؟",
        modelDe: "Im Hof der Schule. Es gibt dort Tische und Schatten.",
        modelAr: "في ساحة المدرسة. هناك طاولات وظل.",
      },
      {
        partnerDe: "Wer kauft das Essen und die Getränke?",
        partnerAr: "من يشتري الأكل والمشروبات؟",
        modelDe: "Das kann ich machen, aber ich brauche deine Hilfe beim Transport.",
        modelAr: "يمكنني فعل ذلك، لكنني أحتاج مساعدتك في النقل.",
      },
    ],
    checklistAr: [
      "قدّمت اقتراحاً مع سبب (weil …)",
      "وافقت أو اعترضت بأدب ثم اقترحت بديلاً",
      "قسّمت المهام بوضوح (Ich mache … / Kannst du …?)",
    ],
  },
];
