import {AudioLines, Award, BarChart3, BookOpen, BrainCircuit, ClipboardCheck, GraduationCap, Mic, MousePointerClick, Repeat, Sparkles, Trophy, WifiOff, type LucideIcon} from "lucide-react";

/**
 * محتوى الصفحة الرئيسية (بيانات فقط — لا JSX)
 * — فصل المحتوى عن المكونات —
 */

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: GraduationCap,
    title: "منهج أكاديمي كامل",
    description:
      "أربعة مستويات CEFR (A1→B2) بتسلسل بيداغوجي دقيق مطابق لمنهجية معهد غوته، من الحرف الأول حتى الكتابة الأكاديمية.",
  },
  {
    icon: MousePointerClick,
    title: "تمارين تفاعلية متنوعة",
    description:
      "اختيار متعدد، سحب وإفلات، ترتيب كلمات، إكمال فراغات، وصل، وإملاء — مع تصحيح فوري يشرح «لماذا» وتصنيف نوع الخطأ.",
  },
  {
    icon: AudioLines,
    title: "نطق واستماع حقيقي",
    description:
      "توليد صوت ألماني (de-DE) لأي جملة، تدرّج سرعة الاستماع، تمارين Shadowing، وتقييم نطقك عبر التعرف على الكلام.",
  },
  {
    icon: BrainCircuit,
    title: "مراجعة ذكية SM-2",
    description:
      "خوارزمية التكرار المتباعد مع معامل نسيان شخصي لك — تذكّر ما تنساه قبل أن تنساه، وتوفّر وقت المراجعة.",
  },
  {
    icon: Sparkles,
    title: "معلّم افتراضي بالذكاء الاصطناعي",
    description:
      "معلّم محادثة حر، مصحح كتابة يشرح كل خطأ بالعربية، مولّد تمارين لا نهائية، وقصص بمستواك بالضبط.",
  },
  {
    icon: WifiOff,
    title: "يعمل بدون إنترنت",
    description:
      "تطبيق ويب تقدمي (PWA) يُثبَّت على هاتفك، يواصل العمل كاملاً دون اتصال، ويحفظ تقدمك على جهازك.",
  },
  {
    icon: BarChart3,
    title: "تتبع تقدمك بإحصاءات",
    description:
      "لوحة تحكم تعرض نقاط قوتك وضعفك، منحنى النسيان الشخصي، خريطة نشاطك الحرارية، ومقارنة قبل/بعد.",
  },
  {
    icon: Trophy,
    title: "تحفيز وألعاب",
    description:
      "نقاط XP، شارات إنجاز، سلسلة أيام متتالية، شجرة لغة تنمو معك، وشهادة PDF احترافية عند إتمام كل مستوى.",
  },
];

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    icon: ClipboardCheck,
    title: "اختبر مستواك",
    description: "اختبار تحديد مستوى تشخيصي لكل مهارة على حدة (قواعد، مفردات، استماع، قراءة، كتابة) يضعك في نقطة البداية الصحيحة.",
  },
  {
    icon: BookOpen,
    title: "تعلّم بالوتيرة المناسبة",
    description: "دروس منظمة بخطة زمنية مرنة (مكثفة/متوسطة/بطيئة) وفق هدفك: سفر، عمل، دراسة، أو امتحان Goethe-Zertifikat.",
  },
  {
    icon: Repeat,
    title: "راجع بذكاء",
    description: "خوارزمية SM-2 تعيد عرض الكلمات والقواعد لحظة اقتراب نسيانها، مع تنويع السياقات والتكرار المتداخل.",
  },
  {
    icon: Award,
    title: "احصل على شهادتك",
    description: "اختبارات نهاية مستوى بصيغة Goethe-Zertifikat مع توقيت حقيقي، وشهادة إتمام رقمية PDF عند النجاح.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "4", label: "مستويات CEFR كاملة" },
  { value: "44", label: "وحدة دراسية" },
  { value: "3600+", label: "كلمة ومصطلح" },
  { value: "240+", label: "درس تفاعلي" },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "هل المنصة مجانية بالكامل؟",
    answer:
      "نعم — كل المحتوى والتمارين والاختبارات مجانية 100% بدون تسجيل أو بطاقة ائتمان. الميزات الذكية المدعومة بالذكاء الاصطناعي تستخدم مزودين مجانيين (Gemini Flash / Groq / OpenRouter) مع سقف يومي 50 طلباً وذاكرة تخزين مؤقت للطلبات المتكررة.",
  },
  {
    question: "لا أعرف أي شيء عن الألمانية — هل أستطيع البدء؟",
    answer:
      "بالتأكيد! المسار يبدأ من الصفر تماماً (الأبجدية والنطق) في مستوى A1. كل درس يشرح بالعربية مع مقارنات مباشرة مع اللغة العربية وتمارين متدرجة، فلا تحتاج أي خلفية مسبقة.",
  },
  {
    question: "كم يستغرق الوصول إلى مستوى B2؟",
    answer:
      "وفق تقديرات معهد غوته الرسمية: A1 في ~8 أسابيع، A2 في ~8 أسابيع، B1 في ~10-12 أسبوعاً، B2 في ~12-14 أسبوعاً (بمعدل 2-3 ساعات أسبوعياً). ستختار خطتك الزمنية (مكثفة/متوسطة/بطيئة) وسيتكيف المسار مع وتيرتك.",
  },
  {
    question: "هل أحصل على شهادة معترف بها؟",
    answer:
      "الشهادات الرسمية المعترف بها تصدر فقط من مراكز معهد غوته (Goethe-Institut) أو telc أو ÖSD. منصتنا تعدّك لهذه الامتحانات بمحاكاة كاملة لشكل الاختبار والتوقيت، وتقدم لك شهادة إتمام رقمية PDF توثق اجتيازك لمستوى المنهج كتأكيد ذاتي على استعدادك.",
  },
  {
    question: "هل أحتاج إنترنت دائماً للاستخدام؟",
    answer:
      "لا. المنصة تطبيق ويب تقدمي (PWA): بعد أول زيارة يمكنك تثبيتها على هاتفك وتعمل بعدها دون اتصال — الدروس والتمارين والبطاقات كلها محفوظة محلياً. الميزات الصوتية وذكاء التصحيح تحتاج اتصالاً فقط في بعض الحالات.",
  },
];

export interface TrustItem {
  icon: LucideIcon;
  label: string;
}

export const TRUST_ITEMS: TrustItem[] = [
  { icon: GraduationCap, label: "منهجية معهد غوته" },
  { icon: Mic, label: "نطق ألماني حقيقي" },
  { icon: Sparkles, label: "مدعوم بالذكاء الاصطناعي" },
  { icon: WifiOff, label: "يعمل دون إنترنت" },
];
