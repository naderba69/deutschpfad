import type { ErrorTypeCode } from "@/types/lesson";

/**
 * ═══════════════════════════════════════════════════════════
 *  المرجع النحوي الشامل (Grammatik-Referenz) — كل قواعد A1→B2
 *  منظم حسب المستوى والفئة، كل قاعدة: شرح + لماذا + أمثلة + تريك
 *  + ربط بنوع الخطأ (لتغذية قاموس الأخطاء — المرحلة 12)
 * ═══════════════════════════════════════════════════════════
 */

export type GrammarCategory =
  | "verbs" | "nouns" | "articles" | "pronouns" | "adjectives"
  | "cases" | "prepositions" | "sentences" | "tenses" | "passive"
  | "modal" | "connectives" | "negation" | "word-order" | "particles";

export interface GrammarTopic {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  category: GrammarCategory;
  titleAr: string;
  titleDe: string;
  /** شرح مختصر واضح */
  summary: string;
  /** لماذا؟ المنطق */
  why?: string;
  examples: { de: string; ar: string }[];
  eselsbruecke?: string;
  /** نوع الخطأ المرتبط (لربط قاموس الأخطاء بالمرجع — اقتراح 1) */
  mistakeLink?: ErrorTypeCode;
}

export const GRAMMAR_REFERENCE: GrammarTopic[] = [
  /* ═══════════ A1 ═══════════ */
  {
    id: "a1-sein", level: "A1", category: "verbs",
    titleAr: "الفعل sein (يكون)", titleDe: "Das Verb sein",
    summary: "أهم فعل ألماني: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind. تصريفه شاذ ويُحفظ.",
    why: "العربية الجملة الاسمية بلا فعل («أنا من تونس»)، لكن الألمانية تتطلب فعلاً دائماً.",
    examples: [
      { de: "Ich bin aus Tunesien.", ar: "أنا من تونس." },
      { de: "Wir sind Studenten.", ar: "نحن طلاب." },
    ],
    eselsbruecke: "سلم العائلة: بِن-بِست-إست، زِند-زايْت-زِند.",
    mistakeLink: "conjugation",
  },
  {
    id: "a1-haben", level: "A1", category: "verbs",
    titleAr: "الفعل haben (يملك)", titleDe: "Das Verb haben",
    summary: "للملكية والجوع/العطش: ich habe, du hast, er hat, wir haben, ihr habt, sie haben.",
    why: "«عندي جوع» = Ich habe Hunger — الجوع اسم يُملَك.",
    examples: [
      { de: "Ich habe Hunger.", ar: "أنا جائع." },
      { de: "Hast du einen Bruder?", ar: "هل لديك أخ؟" },
    ],
    eselsbruecke: "سلم: هابه-هاست-هات، هابن-هابت-هابن.",
    mistakeLink: "conjugation",
  },
  {
    id: "a1-articles", level: "A1", category: "articles",
    titleAr: "أدوات التعريف والتنكير", titleDe: "der/die/das + ein/eine",
    summary: "كل اسم له جنس: der (مذكر), die (مؤنث), das (محايد). التنكير: ein (مذكر/محايد), eine (مؤنث). الجمع: die دائماً.",
    why: "الجنس يؤثر على كل شيء لاحقاً: الصفة، الضمير، الحالات.",
    examples: [
      { de: "der Apfel / ein Apfel", ar: "التفاحة / تفاحة" },
      { de: "die Milch / eine Milch", ar: "الحليب / حليب" },
    ],
    eselsbruecke: "ألوان: der=أزرق، die=أحمر، das=أخضر. احفظ الجنس مع الكلمة.",
    mistakeLink: "article",
  },
  {
    id: "a1-akkusativ", level: "A1", category: "cases",
    titleAr: "حالة النصب (Akkusativ)", titleDe: "Der Akkusativ",
    summary: "المفعول به المباشر: المذكر فقط يتغير der→den وein→einen. المؤنث والمحايد والجمع لا يتغيرون.",
    why: "علامة إعراب تميز الفاعل من المفعول — المذكر وحده يغيّر قبعته.",
    examples: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة." },
      { de: "Ich trinke die Milch.", ar: "أشرب الحليب." },
    ],
    eselsbruecke: "«den للنصب عند الرجال فقط» — der→den, ein→einen.",
    mistakeLink: "case",
  },
  {
    id: "a1-dativ-ort", level: "A1", category: "prepositions",
    titleAr: "حروف الجر المكانية (wo? + Dativ)", titleDe: "in, auf, an + Dativ",
    summary: "للسؤال أين؟ (wo?): in/auf/an/unter + Dativ: der→dem, die→der, das→dem. الاختصارات: im (in+dem), am (an+dem).",
    why: "السكون Dativ — wo? يسأل عن مكان ثابت.",
    examples: [
      { de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
      { de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
    ],
    eselsbruecke: "«السكون Dativ، الحركة Akkusativ» — و«im = إم» مثل العربية.",
    mistakeLink: "preposition",
  },
  {
    id: "a1-trennbare", level: "A1", category: "verbs",
    titleAr: "الأفعال المنفصلة", titleDe: "Trennbare Verben",
    summary: "فعل ببادئة (auf, an, ein, fern...) — في المضارع: الفعل يتصرف في المركز الثاني والبادئة تذهب للنهاية: Ich stehe um 7 auf.",
    why: "الجملة الألمانية «إطار»: الفعل يفتح والبادئة تغلق في النهاية.",
    examples: [
      { de: "Ich stehe um sieben auf.", ar: "أستيقظ في السابعة." },
      { de: "Wir sehen abends fern.", ar: "نشاهد التلفاز مساءً." },
    ],
    eselsbruecke: "«البادئة ذيل الكلب: يهز في النهاية» — ich stehe ... auf.",
    mistakeLink: "word-order",
  },
  {
    id: "a1-imperativ", level: "A1", category: "verbs",
    titleAr: "صيغة الأمر", titleDe: "Der Imperativ",
    summary: "ثلاث صور: du (جذر الفعل: Komm!), ihr (تصريفهم: Kommt!), Sie (الفعل + Sie: Kommen Sie!).",
    why: "درجة القرب: مع الصديق تختصر، مع الحضرة تعكس.",
    examples: [
      { de: "Komm bitte!", ar: "تعال من فضلك!" },
      { de: "Kommen Sie bitte herein!", ar: "تفضلوا بالدخول!" },
    ],
    eselsbruecke: "«أمر du = اقطع التاء»: kommst → Komm!",
    mistakeLink: "grammar",
  },
  {
    id: "a1-negation", level: "A1", category: "negation",
    titleAr: "النفي: nicht و kein", titleDe: "Negation: nicht/kein",
    summary: "nicht ينفي الفعل والصفة (Ich arbeite nicht). kein ينفي الاسم المنكر (Ich habe keinen Bruder). kein يتصرف مثل ein.",
    why: "الفرق: نفي الفعل مقابل نفي الوجود — kein ≈ لا يوجد.",
    examples: [
      { de: "Ich habe kein Geld.", ar: "ليس لدي مال." },
      { de: "Das ist nicht teuer.", ar: "هذا ليس غالياً." },
    ],
    eselsbruecke: "«kein = كَين (لا شيء)» — انفي الاسم بـ kein، والفعل بـ nicht.",
    mistakeLink: "negation",
  },
  {
    id: "a1-wfragen", level: "A1", category: "sentences",
    titleAr: "أسئلة W + ترتيب V2", titleDe: "W-Fragen und V2",
    summary: "كلمات السؤال تبدأ بـ W: wer, was, wo, woher, wohin, wann, warum, wie. القاعدة: W + فعل + فاعل.",
    why: "الفعل دائماً في المركز الثاني — حتى بعد كلمة السؤال.",
    examples: [
      { de: "Woher kommst du?", ar: "من أين أنت؟" },
      { de: "Wie heißt du?", ar: "ما اسمك؟" },
    ],
    eselsbruecke: "«W تليها الفعل مباشرة»: W + Verb + Subjekt.",
    mistakeLink: "word-order",
  },
  {
    id: "a1-plural", level: "A1", category: "nouns",
    titleAr: "جمع الأسماء", titleDe: "Der Plural",
    summary: "أنماط الجمع: -e (Tische), -en/-n (Bananen), -er مع Umlaut (Bücher), Umlaut فقط (Äpfel), بدون تغيير (Zimmer), -s (Autos). الجمع دائماً die.",
    why: "أنماط تاريخية — تُحفظ مع الكلمة مثل العربية (تفاحات/كتب).",
    examples: [
      { de: "der Tisch → die Tische", ar: "الطاولة → الطاولات" },
      { de: "der Apfel → die Äpfel", ar: "التفاحة → التفاحات" },
    ],
    eselsbruecke: "أهم ثلاثة: -e، -en، -er. والجمع دائماً die.",
    mistakeLink: "plural",
  },

  /* ═══════════ A2 ═══════════ */
  {
    id: "a2-perfekt", level: "A2", category: "tenses",
    titleAr: "الماضي التام (Perfekt)", titleDe: "Das Perfekt",
    summary: "haben/sein (مضارع) + Partizip II في النهاية. sein للحركة والتغير، haben للباقي. المنتظم: ge+جذر+t، القوي: ge+جذر متغير+en.",
    why: "الزمن الأول في المحادثة — الإطار: المساعد يفتح والتصريف يغلق.",
    examples: [
      { de: "Ich habe gegessen.", ar: "أكلت." },
      { de: "Ich bin nach Berlin geflogen.", ar: "طرت إلى برلين." },
    ],
    eselsbruecke: "«حساب = haben، حركة = sein» — وge- علامة التصريف.",
    mistakeLink: "conjugation",
  },
  {
    id: "a2-dativ", level: "A2", category: "cases",
    titleAr: "حالة الجر (Dativ) مع الأفعال", titleDe: "Der Dativ",
    summary: "أفعال تأخذ Dativ دائماً: helfen, gefallen, gehören, danken, gratulieren, antworten. der→dem, die→der, das→dem, الجمع den+n.",
    why: "الفعل يتجه «إلى شخص» — اسأل: لمن؟ (wem?)",
    examples: [
      { de: "Ich helfe dem Vater.", ar: "أساعد الأب." },
      { de: "Das gehört der Mutter.", ar: "هذا يخص الأم." },
    ],
    eselsbruecke: "«Dativ = لمن؟ (wem؟)» — وعائلة الأفعال: helfen-gefallen-gehören-danken.",
    mistakeLink: "case",
  },
  {
    id: "a2-wechsel", level: "A2", category: "prepositions",
    titleAr: "حروف الجر المتغيرة (Wechselpräpositionen)", titleDe: "wo? Dativ / wohin? Akkusativ",
    summary: "9 حروف: in, an, auf, über, unter, vor, hinter, neben, zwischen. wo? (سكون) → Dativ. wohin? (حركة) → Akkusativ.",
    why: "تغيير الأداة يخبرك بالحركة أو السكون بدون كلمات إضافية.",
    examples: [
      { de: "Die Tasse steht auf dem Tisch.", ar: "الكوب واقف على الطاولة (سكون)." },
      { de: "Ich stelle die Tasse auf den Tisch.", ar: "أضع الكوب على الطاولة (حركة)." },
    ],
    eselsbruecke: "«السكون Dativ (يمكث)، الحركة Akkusativ (يمشي)».",
    mistakeLink: "preposition",
  },
  {
    id: "a2-modal", level: "A2", category: "modal",
    titleAr: "الأفعال الشرطية الست", titleDe: "Die Modalverben",
    summary: "können (يستطيع), müssen (يجب), wollen (يريد), sollen (ينبغي), dürfen (يُسمح), mögen (يحب). المفرد بلا نهاية غالباً: ich kann, du kannst, er kann. الفعل الأساسي في النهاية.",
    why: "الفعل الشرطي يعدّل المعنى — والأساسي يذهب للنهاية.",
    examples: [
      { de: "Ich kann Deutsch sprechen.", ar: "أستطيع التحدث بالألمانية." },
      { de: "Du sollst viel trinken.", ar: "يجب أن تشرب كثيراً." },
    ],
    eselsbruecke: "«الستة: كان-موست-فول-سول-دورف-موك» — والمفرد بلا نهاية.",
    mistakeLink: "conjugation",
  },
  {
    id: "a2-nebensaetze", level: "A2", category: "sentences",
    titleAr: "الجمل الثانوية: weil, dass, wenn, ob", titleDe: "Nebensätze",
    summary: "بعد الروابط: الفعل يذهب للنهاية. weil (لأنّ), dass (أنّ), wenn (إذا/عندما), ob (هل).",
    why: "الجملة الثانوية «قوس» يفتحه الرابط ويغلقه الفعل.",
    examples: [
      { de: "Ich lerne, weil ich will.", ar: "أتعلم لأنني أريد." },
      { de: "Ich glaube, dass er kommt.", ar: "أعتقد أنه يأتي." },
    ],
    eselsbruecke: "«الرابط يفتح القوس والفعل يغلقه» — كل الروابط ترسل الفعل للنهاية.",
    mistakeLink: "word-order",
  },
  {
    id: "a2-possessiv", level: "A2", category: "pronouns",
    titleAr: "الضمائر الملكية", titleDe: "Possessivpronomen",
    summary: "mein/dein/sein/ihr + نهايات مثل ein: mein Vater, meinen Vater (نصب), meinem Vater (جر), meine Mutter, meiner Mutter (جر).",
    why: "الملكية «صفة» تتبع الاسم في جنسه وحالته.",
    examples: [
      { de: "Ich sehe meinen Bruder.", ar: "أرى أخي." },
      { de: "Ich helfe meinem Vater.", ar: "أساعد أبي." },
    ],
    eselsbruecke: "«mein مثل ein تماماً» — احفظ جدول ein وستعرف كل الملكيات.",
    mistakeLink: "case",
  },
  {
    id: "a2-reflexiv", level: "A2", category: "verbs",
    titleAr: "الأفعال الانعكاسية", titleDe: "Reflexive Verben",
    summary: "sich freuen, sich ärgern, sich anmelden, sich beeilen... الضمير: mich, dich, sich, uns, euch. الغائب دائماً sich.",
    why: "الفعل يقع على الفاعل نفسه — «أفرح نفسي».",
    examples: [
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع للعطلة." },
      { de: "Beeil dich bitte!", ar: "استعجل من فضلك!" },
    ],
    eselsbruecke: "«sich = نفس» — والغائب دائماً sich.",
    mistakeLink: "pronoun",
  },
  {
    id: "a2-konnektoren", level: "A2", category: "connectives",
    titleAr: "أدوات الربط: العادية والمقلوبة", titleDe: "und, aber, denn / deshalb, trotzdem",
    summary: "عادية (لا تغير الترتيب): und, aber, oder, denn. مقلوبة (الفعل أولاً): deshalb, trotzdem, dann, außerdem, sonst.",
    why: "المقلوبة تحمل معنى النتيجة/المعاكسة فتقفز للبداية.",
    examples: [
      { de: "Ich bin müde, aber glücklich.", ar: "أنا متعب لكن سعيد." },
      { de: "Es regnet, deshalb bleibe ich.", ar: "تمطر لذلك أبقى." },
    ],
    eselsbruecke: "«عائلة عادية: und-aber-oder-denn» — «مقلوبة: deshalb-trotzdem-dann».",
    mistakeLink: "word-order",
  },
  {
    id: "a2-komparativ", level: "A2", category: "adjectives",
    titleAr: "المقارنة والتفضيل", titleDe: "Komparativ und Superlativ",
    summary: "المقارنة: صفة+er als (schneller als). التفضيل: am + صفة + sten (am schnellsten). الشواذ: gut→besser→am besten, viel→mehr, gern→lieber.",
    why: "مثل العربية «أفعل» — الألمانية تضيف -er والأفعَل = am...sten.",
    examples: [
      { de: "Der Zug ist schneller als der Bus.", ar: "القطار أسرع من الحافلة." },
      { de: "Das Flugzeug ist am schnellsten.", ar: "الطائرة الأسرع." },
    ],
    eselsbruecke: "«+er مثل أفعل، am+sten مثل الأفعَل» — والشواذ الثلاثة.",
    mistakeLink: "grammar",
  },
  {
    id: "a2-esgibt", level: "A2", category: "sentences",
    titleAr: "es gibt + Akkusativ (يوجد)", titleDe: "„Es gibt“ + Akkusativ",
    summary: "يوجد/هناك: es gibt + نصب. Es gibt einen Park. السؤال: Gibt es...? النفي: Es gibt keinen/keine...",
    why: "حرفياً «هو يعطي»: es يعطي الوجود للمفعول — فالنصب.",
    examples: [
      { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
      { de: "Gibt es hier einen Automaten?", ar: "هل يوجد صراف هنا؟" },
    ],
    eselsbruecke: "«es gibt = هو يعطي» → المفعول نصب: einen Park.",
    mistakeLink: "case",
  },

  /* ═══════════ B1 ═══════════ */
  {
    id: "b1-genitiv", level: "B1", category: "cases",
    titleAr: "حالة المضاف إليه (Genitiv)", titleDe: "Der Genitiv",
    summary: "الملكية الرسمية: des (مذكر/محايد +s), der (مؤنث/جمع). das Buch des Lehrers. حروفه: wegen, trotz, während, statt + Genitiv.",
    why: "علامة المستوى المتوسط — في الكتابة والصحافة إلزامية.",
    examples: [
      { de: "Das Buch des Lehrers ist neu.", ar: "كتاب المعلّم جديد." },
      { de: "Wegen des Regens bleiben wir.", ar: "بسبب المطر نبقى." },
    ],
    eselsbruecke: "«Genitiv = لمن؟ (wessen؟)» — وحروفه الأربعة: wegen-trotz-während-statt.",
    mistakeLink: "case",
  },
  {
    id: "b1-relativ", level: "B1", category: "sentences",
    titleAr: "الجمل النسبية", titleDe: "Relativsätze",
    summary: "الضمير النسبي يطابق الاسم بالجنس والعدد وحالته حسب دوره: der (فاعل), den (مفعول), dem (جر). الفعل في نهاية النسبية.",
    why: "الضمير «نيابة» عن الاسم — جنسه من الاسم، حالته من وظيفته.",
    examples: [
      { de: "Der Mann, der dort steht, ist mein Lehrer.", ar: "الرجل الذي يقف هناك معلّمي." },
      { de: "Das Buch, das ich lese, ist gut.", ar: "الكتاب الذي أقرؤه جيد." },
    ],
    eselsbruecke: "«جنس الاسم + دور الكلمة داخل النسبية» = الضمير الصحيح.",
    mistakeLink: "grammar",
  },
  {
    id: "b1-praeteritum", level: "B1", category: "tenses",
    titleAr: "الماضي البسيط الكامل", titleDe: "Das Präteritum",
    summary: "المنتظم: جذر+te (arbeitete). الشاذ: تغيير جذري (ging, kam, sah). الأفعال المساعدة: war, hatte. في الكتابة والقصص للكل.",
    why: "نصوص القراءة والقصص كلها بـ Präteritum — لا بد منه للفهم.",
    examples: [
      { de: "Ich arbeitete fünf Jahre in einer Firma.", ar: "عملت خمس سنوات في شركة." },
      { de: "Er ging jeden Tag zu Fuß.", ar: "كان يمشي كل يوم." },
    ],
    eselsbruecke: "«المنتظم +te، الشاذ غيّر الجذر» — اعتمد جدول الأفعال الشاذة.",
    mistakeLink: "conjugation",
  },
  {
    id: "b1-plusquamperfekt", level: "B1", category: "tenses",
    titleAr: "الماضي التام المركب (Plusquamperfekt)", titleDe: "hatte/war + Partizip II",
    summary: "ما قبل الماضي: hatte/war (Präteritum) + Partizip II. Bevor ich studierte, hatte ich gearbeitet. مع bevor/nachdem/als.",
    why: "ترتيب الأحداث: حدث قديم (Plusquamperfekt) ثم أحدث (ماضٍ).",
    examples: [
      { de: "Bevor ich kam, hatte er gegessen.", ar: "قبل أن آتي كان قد أكل." },
      { de: "Nachdem er gegessen hatte, ging er.", ar: "بعد أن أكل ذهب." },
    ],
    eselsbruecke: "«Plusquamperfekt = كان قد» — مع bevor/nachdem/als.",
    mistakeLink: "conjugation",
  },
  {
    id: "b1-konjunktiv2", level: "B1", category: "modal",
    titleAr: "صيغة الشرط (Konjunktiv II)", titleDe: "würde, wäre, hätte, könnte",
    summary: "غير واقعي/مؤدب: würde + Infinitiv (Ich würde reisen). الأشكال: wäre (كان سيكون), hätte (كان سيملك), könnte (كان يستطيع). التمني والتهذيب.",
    why: "تمييز الواقع عن الافتراض — والأدب الشرطي الألماني.",
    examples: [
      { de: "Wenn ich reich wäre, würde ich reisen.", ar: "لو كنت غنياً لسافرت." },
      { de: "Könnten Sie bitte helfen?", ar: "هل يمكنكم المساعدة من فضلك؟" },
    ],
    eselsbruecke: "«رباعية الحلم: würde-wäre-hätte-könnte».",
    mistakeLink: "grammar",
  },
  {
    id: "b1-passiv", level: "B1", category: "passive",
    titleAr: "المبني للمجهول (Passiv)", titleDe: "werden + Partizip II",
    summary: "التركيز على الحدث لا الفاعل: wird (مضارع) / wurde (ماضٍ) + Partizip II. الفاعل بـ von + Dativ. البديل: man + فعل.",
    why: "الأخبار والتقارير: لا يهم من فعل — يهم ماذا حدث.",
    examples: [
      { de: "Das Haus wird gebaut.", ar: "البيت يُبنى." },
      { de: "Das Haus wurde 1900 gebaut.", ar: "بُني البيت عام 1900." },
    ],
    eselsbruecke: "«werden + Partizip II = مجهول» — وman بديل سهل.",
    mistakeLink: "grammar",
  },
  {
    id: "b1-adjektiv", level: "B1", category: "adjectives",
    titleAr: "تصريف الصفات (Adjektivdeklination)", titleDe: "Die Adjektivdeklination",
    summary: "قبل الاسم تأخذ الصفة نهاية: بعد der/die/das: -e/-en. بعد ein: نهايات الأداة (ein guter Mann, ein gutes Kind). بدون أداة: نهايات قوية.",
    why: "توازن: إذا كشفت الأداة الجنس تكتفي الصفة بـ -e/-en، وإلا تتحمل هي.",
    examples: [
      { de: "ein guter Mann / eine gute Frau / ein gutes Kind", ar: "رجل جيد / امرأة جيدة / طفل جيد" },
      { de: "Das schöne Bild ist teuer.", ar: "الصورة الجميلة غالية." },
    ],
    eselsbruecke: "«مع ein: الرفع يحمل نهايات الأداة (ر-هـ، س)» — والجر -en.",
    mistakeLink: "article",
  },
  {
    id: "b1-temporal", level: "B1", category: "sentences",
    titleAr: "الجمل الزمنية الست", titleDe: "als, wenn, während, bevor, nachdem, bis",
    summary: "als (ماضٍ مرة), wenn (مضارع/تكرار), während (بينما), bevor (قبل أن), nachdem (بعد أن), bis (حتى). كلها ترسل الفعل للنهاية.",
    why: "الألمانية دقيقة: als لحكاية واحدة، wenn لعادة — يمنع اللبس.",
    examples: [
      { de: "Als ich jung war, lebte ich in Tunis.", ar: "عندما كنت صغيراً عشت في تونس." },
      { de: "Wenn ich Zeit habe, lese ich.", ar: "عندما يكون عندي وقت أقرأ." },
    ],
    eselsbruecke: "«als = حكاية ماضية واحدة، wenn = عادة/مستقبل».",
    mistakeLink: "word-order",
  },
  {
    id: "b1-zweiteilig", level: "B1", category: "connectives",
    titleAr: "الروابط المزدوجة", titleDe: "nicht nur... sondern auch, weder... noch...",
    summary: "nicht nur... sondern auch (ليس فقط بل أيضاً), sowohl... als auch (كلاهما), weder... noch (لا ولا), entweder... oder (إما أو), je... desto (كلما... كلما).",
    why: "تعبير متوازن دقيق — علامة B1.",
    examples: [
      { de: "Ich habe weder Zeit noch Geld.", ar: "ليس لدي وقت ولا مال." },
      { de: "Je mehr du übst, desto besser wirst du.", ar: "كلما تدربت أكثر أصبحت أفضل." },
    ],
    eselsbruecke: "«الأربعة التوأم»: احفظها كثنائيات متلاصقة.",
    mistakeLink: "grammar",
  },
  {
    id: "b1-futur1", level: "B1", category: "tenses",
    titleAr: "المستقبل (Futur I)", titleDe: "werden + Infinitiv",
    summary: "التوقع والنية: werden (مضارع) + Infinitiv في النهاية. Ich werde lernen. ملاحظة: المضارع + ظرف زمان شائع في المحادثة.",
    why: "الاستخدام الثالث لـ werden: + صفة (يصبح), + Partizip II (مجهول), + مصدر (مستقبل).",
    examples: [
      { de: "Ich werde morgen lernen.", ar: "سأتعلم غداً." },
      { de: "Die Technik wird sich entwickeln.", ar: "ستتطور التقنية." },
    ],
    eselsbruecke: "«werden + مصدر = سوف» — مثلث werden الثلاثي.",
    mistakeLink: "conjugation",
  },
  {
    id: "b1-nomenverb", level: "B1", category: "nouns",
    titleAr: "الوصلات الاسمية-الفعلية", titleDe: "Nomen-Verb-Verbindungen",
    summary: "eine Frage stellen (يطرح سؤالاً), Bescheid sagen (يبلغ), Hilfe leisten (يقدم مساعدة), eine Entscheidung treffen (يتخذ قراراً). أسلوب رسمي.",
    why: "الأسلوب الرسمي والإداري — وامتحان Goethe يحبها.",
    examples: [
      { de: "Darf ich eine Frage stellen?", ar: "هل أستطيع طرح سؤال؟" },
      { de: "Er traf eine wichtige Entscheidung.", ar: "اتخذ قراراً مهماً." },
    ],
    eselsbruecke: "«استبدل الفعل بوصلة»: fragen → eine Frage stellen.",
    mistakeLink: "grammar",
  },
  {
    id: "b1-ndeklination", level: "B1", category: "nouns",
    titleAr: "تصريف n (n-Deklination)", titleDe: "den Studenten",
    summary: "أسماء مذكرة (تنتهي بـ e أو لاتينية) تضيف n/en في كل الحالات ما عدا الرفع: der Student → den Studenten, dem Studenten, des Studenten.",
    why: "آثار إعراب لاتيني في أسماء حية: Student, Kunde, Herr, Polizist, Kollege, Junge.",
    examples: [
      { de: "Ich kenne den Studenten.", ar: "أعرف الطالب." },
      { de: "Wir helfen dem Kunden.", ar: "نساعد الزبون." },
    ],
    eselsbruecke: "«رجال بـ e + لاتينيون» يضيفون n/en.",
    mistakeLink: "case",
  },

  /* ═══════════ B2 ═══════════ */
  {
    id: "b2-konjunktiv1", level: "B2", category: "modal",
    titleAr: "نقل الكلام غير المباشر (Konjunktiv I)", titleDe: "Die indirekte Rede",
    summary: "لنقل الأقوال: er habe, sie sei, er werde. Er sagt, er habe keine Zeit. يبين أن الكلام منقول وليس مؤكداً.",
    why: "الصحفي يحتاج «مسافة»: أنقل القول دون المسؤولية عن صحته.",
    examples: [
      { de: "Er sagt, er habe keine Zeit.", ar: "يقول إنه لا وقت عنده." },
      { de: "Sie sagt, sie sei müde.", ar: "تقول إنها متعبة." },
    ],
    eselsbruecke: "«Konjunktiv I = علامة النقل» — النهاية -e: mache, habe, sei.",
    mistakeLink: "grammar",
  },
  {
    id: "b2-zustandspassiv", level: "B2", category: "passive",
    titleAr: "مجهول الحالة (Zustandspassiv)", titleDe: "sein + Partizip II",
    summary: "الحالة المنتهية: ist geöffnet (مفتوح) مقابل wird geöffnet (يُفتح). مع شرطي: kann geliefert werden. بدائل: sich lassen, -bar, man.",
    why: "الدقة: عملية (wird) مقابل نتيجة (ist) مقابل إمكانية (kann/sich lassen).",
    examples: [
      { de: "Die Tür ist geöffnet.", ar: "الباب مفتوح (حالة)." },
      { de: "Das Problem lässt sich lösen.", ar: "المشكلة قابلة للحل." },
    ],
    eselsbruecke: "«ist = حالة، wird = عملية، -bar = قابل للـ».",
    mistakeLink: "grammar",
  },
  {
    id: "b2-relativ-adv", level: "B2", category: "sentences",
    titleAr: "النسبية المتقدمة (حروف جر + wo/was)", titleDe: "auf den, wo, was, wofür",
    summary: "حرف الجر قبل الضمير: Der Mann, auf den ich warte. wo للمكان (in dem). was بعد alles/nichts. wo+حرف جر: wofür, womit.",
    why: "الاختصارات الأنيقة: wo بدل in dem، was بعد كل شيء.",
    examples: [
      { de: "Der Mann, auf den ich warte, ist mein Anwalt.", ar: "الرجل الذي أنتظره محامي." },
      { de: "Alles, was du sagst, ist wichtig.", ar: "كل ما تقوله مهم." },
    ],
    eselsbruecke: "«حرف الجر يسبق الضمير» — و«was بعد كل شيء، wo بعد مكان».",
    mistakeLink: "preposition",
  },
  {
    id: "b2-partizipial", level: "B2", category: "adjectives",
    titleAr: "المشاركات كصفات", titleDe: "Partizip I/II als Adjektive",
    summary: "Partizip I (نشط): das spielende Kind. Partizip II (منتهي): der geschriebene Brief. تختصر الجمل النسبية: der arbeitende Mann = der Mann, der arbeitet.",
    why: "أسلوب مكثف: كلمة واحدة تعوض جملة — حبيب الصحافة والأدب.",
    examples: [
      { de: "Das spielende Kind ist glücklich.", ar: "الطفل اللاعب سعيد." },
      { de: "Der geschriebene Brief liegt auf dem Tisch.", ar: "الرسالة المكتوبة على الطاولة." },
    ],
    eselsbruecke: "«-end = فاعل (يلعب)، ge-...t/en = مفعول (مكتوب)».",
    mistakeLink: "article",
  },
  {
    id: "b2-konnektoren-adv", level: "B2", category: "connectives",
    titleAr: "الروابط المتقدمة", titleDe: "indem, anstatt...zu, ohne...zu, es sei denn",
    summary: "indem (بأن/طريقة), anstatt...zu (بدلاً من أن), ohne...zu (دون أن), es sei denn (إلا إذا), je nachdem (حسبما), statt dass (بدل أن بفاعل).",
    why: "بفاعل واحد: anstatt/ohne + zu + مصدر — اختصار أنيق.",
    examples: [
      { de: "Man lernt, indem man übt.", ar: "يتعلم المرء بالممارسة." },
      { de: "Er ging, ohne zu grüßen.", ar: "غادر دون أن يحيي." },
    ],
    eselsbruecke: "«فاعل واحد → zu + مصدر» — و«es sei denn = إلا إذا» كتلة واحدة.",
    mistakeLink: "word-order",
  },
  {
    id: "b2-nominalisierung", level: "B2", category: "nouns",
    titleAr: "الاشتقاق الاسمي (Nominalisierung)", titleDe: "lesen → das Lesen",
    summary: "تحويل الفعل إلى اسم: das Lesen, die Arbeit, die Verbesserung. الاستخدامات الرسمية: beim Lesen, zum Nachdenken.",
    why: "النصوص الرسمية تحب الأسماء — الاشتقاق يختصر ويرفع الأسلوب.",
    examples: [
      { de: "Beim Lesen lernt man.", ar: "بالقراءة يتعلم المرء." },
      { de: "Die Verbesserung der Bedingungen ist wichtig.", ar: "تحسين الظروف مهم." },
    ],
    eselsbruecke: "«الفعل → das + مصدر كبير» — وbeim = عند + اسم.",
    mistakeLink: "grammar",
  },
  {
    id: "b2-futur2", level: "B2", category: "tenses",
    titleAr: "المستقبل التام (Futur II)", titleDe: "werde + Partizip II + haben/sein",
    summary: "اكتمال في المستقبل: Bis 2030 werde ich Deutsch gelernt haben. الحركة: werde gegangen sein. الفعل العادي: werde gemacht haben.",
    why: "التوقع يحتاج «الاكتمال»: سيكون قد فعل ≠ سيفعل.",
    examples: [
      { de: "Bis 2030 werde ich Deutsch gelernt haben.", ar: "بحلول 2030 سأكون قد تعلمت الألمانية." },
      { de: "Er wird gegangen sein.", ar: "سيكون قد ذهب." },
    ],
    eselsbruecke: "«سيكون قد = werde + PII + haben/sein» — اسأل: هل اكتمل؟",
    mistakeLink: "conjugation",
  },
  {
    id: "b2-verben-praep", level: "B2", category: "prepositions",
    titleAr: "الأفعال مع حروف الجر الثابتة", titleDe: "sich interessieren für, warten auf",
    summary: "كل فعل يلتصق بحرف جر وحالة: sich interessieren für (+A), warten auf (+A), träumen von (+D), abhängen von (+D), sich kümmern um (+A), denken an (+A).",
    why: "الألمانية لا تسمح بالتبديل — احفظ الفعل مع حرفه ككلمة واحدة.",
    examples: [
      { de: "Ich interessiere mich für Musik.", ar: "أهتم بالموسيقى." },
      { de: "Ich warte auf den Bus.", ar: "أنتظر الحافلة." },
    ],
    eselsbruecke: "«الفعل + حرفه = كلمة واحدة»: sich-interessieren-für.",
    mistakeLink: "preposition",
  },
  {
    id: "b2-akademisch", level: "B2", category: "sentences",
    titleAr: "الكتابة الأكاديمية", titleDe: "Akademisches Schreiben",
    summary: "التأكيد: es ist erwiesen, dass... التلطيف: meiner Ansicht nach, möglicherweise. التحفظ: in gewissem Maße. الخاتمة: zusammenfassend lässt sich sagen...",
    why: "الجرأة المدروسة: أكّد المدعوم ولطّف غير المؤكد.",
    examples: [
      { de: "Es ist erwiesen, dass Sprachen das Denken prägen.", ar: "ثابت أن اللغات تشكل التفكير." },
      { de: "Meiner Ansicht nach ist das wichtig.", ar: "في رأيي هذا مهم." },
    ],
    eselsbruecke: "«ثلاثية الأكاديميا: أكّد-لطّف-تحفظ» — وخاتمة ذهبية: zusammenfassend.",
    mistakeLink: "grammar",
  },
  {
    id: "b2-verbaustausch", level: "B2", category: "nouns",
    titleAr: "الوصلات المتقدمة", titleDe: "in Betracht ziehen, zur Verfügung stellen",
    summary: "in Betracht ziehen (يأخذ بعين الاعتبار), zur Verfügung stellen (يضع تحت التصرف), Wert legen auf (يولي أهمية), eine Rolle spielen (يلعب دوراً).",
    why: "لغة المقابلات والمراسلات — ترفع خطابك لمستوى ممتاز.",
    examples: [
      { de: "Ich ziehe die Stelle in Betracht.", ar: "آخذ المنصب بعين الاعتبار." },
      { de: "Ich stelle meine Erfahrung zur Verfügung.", ar: "أضع خبرتي تحت التصرف." },
    ],
    eselsbruecke: "«وصلات الخطاب الخمس» جاهزة: bewerben um, Anbei finden Sie, Wert legen auf...",
    mistakeLink: "grammar",
  },
  {
    id: "b2-modalpartikeln", level: "B2", category: "particles",
    titleAr: "الجسيمات المشدِّدة", titleDe: "Modalpartikeln: doch, ja, mal, denn, eigentlich, wohl",
    summary: "كلمات صغيرة بلا ترجمة حرفية تنقل موقف المتكلم: doch = «بلى» (رداً على نفي)، ja = تأكيد حار، mal = تخفيف الطلب، denn = فضول في السؤال، eigentlich = «أصلاً/بالمناسبة»، wohl = «على الأرجح». بدونها تبدو الألمانية منطوقة «روبوطية».",
    why: "تظهر في امتحان B2 (Hören وSprechen) وفي كل محادثة ألمانية حقيقية — إتقانها علامة الطلاقة.",
    examples: [
      { de: "Komm doch mit!", ar: "تعال معنا (بلى تعال)!" },
      { de: "Das ist ja super!", ar: "هذا ممتاز حقاً!" },
      { de: "Kannst du mir mal helfen?", ar: "هل تساعدني فقط قليلاً؟" },
      { de: "Was machst du denn hier?", ar: "ماذا تفعل هنا إذاً (فضولاً)؟" },
      { de: "Wo wohnst du eigentlich?", ar: "أين تسكن أصلاً؟" },
      { de: "Er hat wohl den Bus verpasst.", ar: "على الأرجح فاته الحافلة." },
    ],
    eselsbruecke: "D-J-M-D-E-W: Doch=بلى، Ja=أكيد، Mal=فقط، Denn=إذاً، Eigentlich=أصلاً، Wohl=غالباً.",
    mistakeLink: "grammar",
  },
];

/** الفئات بالعربية */
export const GRAMMAR_CATEGORIES: Record<GrammarCategory, string> = {
  verbs: "الأفعال",
  nouns: "الأسماء",
  articles: "الأدوات",
  pronouns: "الضمائر",
  adjectives: "الصفات",
  cases: "الحالات الإعرابية",
  prepositions: "حروف الجر",
  sentences: "الجمل",
  tenses: "الأزمنة",
  passive: "المبني للمجهول",
  modal: "الأفعال الشرطية",
  connectives: "الروابط",
  negation: "النفي",
  "word-order": "ترتيب الكلمات",
  particles: "الجسيمات المشدِّدة",
};

/** إيجاد قاعدة بالمعرّف (لربط قاموس الأخطاء) */
export function getGrammarTopicById(id: string): GrammarTopic | undefined {
  return GRAMMAR_REFERENCE.find((t) => t.id === id);
}

/** قواعد نوع خطأ معين (لربط قاموس الأخطاء بالمرجع — اقتراح 1) */
export function getTopicsByMistakeType(type: ErrorTypeCode): GrammarTopic[] {
  return GRAMMAR_REFERENCE.filter((t) => t.mistakeLink === type);
}
