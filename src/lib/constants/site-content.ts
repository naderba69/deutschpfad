import {AudioLines, Award, BarChart3, BookOpen, BrainCircuit, ClipboardCheck, GraduationCap, Mic, MousePointerClick, Repeat, Sparkles, Trophy, WifiOff, type LucideIcon} from "lucide-react";
import {TOTAL_LESSONS, TOTAL_UNITS} from "@/lib/constants/curriculum";

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
    title: "محتوى تدريبي من A1 إلى B2",
    description:
      "مواد في نطاقات A1–B2 تستلهم موضوعات ومهارات من CEFR وGoethe. هذا وصف لنطاق المحتوى، وليس ادعاءً بتغطية كل واصفات CEFR أو مطابقة رسمية لمنهج Goethe.",
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
      "نقاط XP وشارات إنجاز وسلسلة أيام متتالية وشجرة لغة تنمو معك. شهادة الإتمام رقمية وداخلية؛ لا تثبت مستوى CEFR ولا تعادل شهادة رسمية."
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
    title: "تابع تقدمك",
    description: "اختبارات تدريبية داخلية مستوحاة من بعض أنماط Goethe، مع تقرير تقدم وشهادة إتمام من المنصة؛ لا تمنح اعتماداً أو شهادة Goethe.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "4", label: "نطاقات تدريبية من A1 إلى B2" },
  { value: String(TOTAL_UNITS), label: "وحدة دراسية" },
  { value: "3600+", label: "كلمة ومصطلح" },
  { value: String(TOTAL_LESSONS), label: "درس تفاعلي" },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "هل المنصة مجانية بالكامل؟",
    answer:
      "التدريبات الأساسية متاحة حالياً دون اشتراك مدفوع، ولا تحتاج إلى إنشاء حساب أو إدخال بطاقة ائتمان لاستخدامها. بعض الميزات الذكية اختيارية وقد تعتمد على مزوّد خارجي وشروطه أو مفاتيح استخدام يضيفها المستخدم؛ تحقق من شروط المزوّد قبل تفعيلها. قد تتغير الميزات أو شروط إتاحتها.",
  },
  {
    question: "لا أعرف أي شيء عن الألمانية — هل أستطيع البدء؟",
    answer:
      "بالتأكيد! المسار يبدأ من الصفر تماماً (الأبجدية والنطق) في مستوى A1. كل درس يشرح بالعربية مع مقارنات مباشرة مع اللغة العربية وتمارين متدرجة، فلا تحتاج أي خلفية مسبقة.",
  },
  {
    question: "كم يستغرق الوصول إلى مستوى B2؟",
    answer:
      "لا يوجد جدول زمني واحد يضمن الوصول إلى B2؛ تختلف المدة بحسب خبرتك السابقة، وساعات الدراسة، والممارسة الفعلية للمهارات الأربع. الخطط داخل المنصة تقديرية وقابلة للتعديل، ولا تمثل وعداً بموعد أو نتيجة.",
  },
  {
    question: "هل أحصل على شهادة معترف بها؟",
    answer:
      "لا تصدر المنصة شهادة Goethe أو telc أو ÖSD ولا تضمن الجاهزية لامتحانها. توفر تدريبات وتقارير داخلية، ويمكن إصدار شهادة إتمام من المنصة عند استيفاء شروطها؛ وهي توثق إكمال أنشطة المنصة فقط ولا تمثل اعتماداً أو إثباتاً رسمياً لمستوى CEFR.",
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
  { icon: GraduationCap, label: "موضوعات مستوحاة من CEFR وGoethe" },
  { icon: Mic, label: "نطق ألماني حقيقي" },
  { icon: Sparkles, label: "ذكاء اصطناعي اختياري عند توفره" },
  { icon: WifiOff, label: "يعمل دون إنترنت بعد أول زيارة" },
];
