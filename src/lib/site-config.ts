/**
 * الإعدادات العامة للموقع
 * — اسم المنتج وروابط التنقل والبيانات الوصفية —
 */
export const siteConfig = {
  name: "درب الألمانية",
  nameLatin: "DeutschPfad",
  tagline: "من الصفر (A1) حتى الاحتراف (B2)",
  description:
    "منصة تعليمية عربية متكاملة لتعليم اللغة الألمانية من المستوى A1 حتى B2 وفق منهجية معهد غوته (Goethe-Institut) ومعايير الإطار الأوروبي المرجعي للغات (CEFR)، مع تمارين تفاعلية ونطق صوتي ومراجعة ذكية مبنية على خوارزمية SM-2 وميزات مدعومة بالذكاء الاصطناعي.",
  // ═══ P1-06: لا ننشر localhost أبداً ═══
  // 1) NEXT_PUBLIC_APP_URL إن وُضع
  // 2) VERCEL_URL تلقائياً على Vercel (نحوّله https)
  // 3) افتراضياً: نطاق النشر الفعلي (كان fallback إلى localhost
  //    فيتسرب إلى OG/robots/sitemap في الإنتاج — خطأ صامت)
  url: resolveSiteUrl(),
  keywords: [
    "تعلم الألمانية",
    "اللغة الألمانية للعرب",
    "A1",
    "A2",
    "B1",
    "B2",
    "معهد غوته",
    "CEFR",
    "دويتش",
    "Deutsch lernen",
    "قواعد الألمانية",
  ],
  navItems: [
    { title: "الرئيسية", href: "/" },
    { title: "لوحة التحكم", href: "/dashboard" },
    { title: "مسار التعلم", href: "/learning-path" },
    { title: "التحفيز", href: "/gamification" },
    { title: "الاختبارات", href: "/tests" },
    { title: "امتحان الختم", href: "/tests/seal/b2" },
    { title: "بطاقاتي", href: "/flashcards" },
    { title: "الأدوات الذكية", href: "/ai-tools" },
    { title: "المعلّم الذكي", href: "/assistant" },
    { title: "المرجع النحوي", href: "/grammatik" },
    { title: "القاموس", href: "/glossar" },
    { title: "القراءة المتدرجة", href: "/reading" },
    { title: "الحياة اليومية", href: "/alltag" },
    { title: "التعابير", href: "/redewendungen" },
    { title: "السيناريوهات", href: "/dialogues" },
    { title: "الاستمارات", href: "/forms" },
    { title: "الاستراتيجيات", href: "/strategien" },
    { title: "بنك العبارات", href: "/redemittel" },
    { title: "نماذج الكتابة B2", href: "/schreibmodelle" },
    { title: "مقيّم الكتابة", href: "/schreib-bewertung" },
    { title: "مفردات B2 بالمواضيع", href: "/wortschatz-b2" },
    { title: "تحويل الجمل B2", href: "/umschreibungen" },
    { title: "تدريب التحدث", href: "/sprechtraining" },
    { title: "الإملاء", href: "/diktate" },
    { title: "لعبة تركيب الجمل", href: "/satzbau" },
    { title: "مراجعة دون إنترنت", href: "/offline-review" },
    { title: "الأسئلة الشائعة", href: "/faq" },
    { title: "مكتبة الاستماع", href: "/hoeren" },
    { title: "الأفعال الشاذة", href: "/verben" },
    { title: "نظام التصميم", href: "/design-system" },
  ],
  levelsNav: [
    { code: "A1", href: "/learning-path#a1" },
    { code: "A2", href: "/learning-path#a2" },
    { code: "B1", href: "/learning-path#b1" },
    { code: "B2", href: "/learning-path#b2" },
  ],
  /* ═══ التنقل المنظم (المجموعات المنسدلة) — الشكل الاحترافي ═══ */
  navGroups: [
    {
      label: "تعلّم",
      items: [
        { title: "مسار التعلم", href: "/learning-path" },
        { title: "مركز A1", href: "/level/a1" },
        { title: "مركز A2", href: "/level/a2" },
        { title: "مركز B1", href: "/level/b1" },
        { title: "مركز B2", href: "/level/b2" },
        { title: "القصص التفاعلية 📖", href: "/stories" },
        { title: "مسار الكتابة المتدرج ✍️", href: "/writing-path" },
        { title: "الثقافة الألمانية 🏰", href: "/landeskunde" },
      ],
    },
    {
      label: "تدرب",
      items: [
        { title: "بطاقاتي (مراجعة ذكية)", href: "/flashcards" },
        { title: "مراجعة الجمل (SRS) 🧠", href: "/sentence-review" },
        { title: "المراجعة الأسبوعية 📅", href: "/review/weekly" },
        { title: "المراجعة الشهرية 📆", href: "/review/monthly" },
        { title: "دفتر أخطائي 📖", href: "/error-notebook" },
        { title: "البودكاست التعليمي 🎧", href: "/podcasts" },
        { title: "تدريب التحدث", href: "/sprechtraining" },
        { title: "مقيّم الكتابة", href: "/schreib-bewertung" },
        { title: "تدريب الإملاء", href: "/diktate" },
        { title: "لعبة تركيب الجمل", href: "/satzbau" },
      ],
    },
    {
      label: "اختبر",
      items: [
        { title: "مركز الاختبارات", href: "/tests" },
        { title: "كفاياتك CEFR 📊", href: "/dashboard/competencies" },
        { title: "تحديد المستوى", href: "/placement" },
        { title: "محاكاة Goethe", href: "/tests/mock" },
        { title: "امتحان الختم", href: "/tests/seal/b2" },
        { title: "محاكاة B2 الكاملة", href: "/tests/vollpruefung" },
      ],
    },
    {
      label: "مراجع",
      items: [
        { title: "القاموس الشامل", href: "/glossar" },
        { title: "المرجع النحوي", href: "/grammatik" },
        { title: "القراءة المتدرجة", href: "/reading" },
        { title: "مكتبة الاستماع", href: "/hoeren" },
        { title: "الأفعال الشاذة", href: "/verben" },
        { title: "بنك العبارات", href: "/redemittel" },
      ],
    },
  ],
  footerLinks: {
    منصة: [
      { title: "الرئيسية", href: "/" },
      { title: "الأسئلة الشائعة", href: "/faq" },
      { title: "الخصوصية والشفافية", href: "/privacy" },
      { title: "عن المنصة", href: "/about" },
      { title: "لوحة التحكم", href: "/dashboard" },
      { title: "مركز التحفيز", href: "/gamification" },
      { title: "المراجعة اليومية", href: "/dashboard/review" },
      { title: "وضع 5 دقائق", href: "/dashboard/five-minutes" },
      { title: "مسار التعلم", href: "/learning-path" },
      { title: "الاختبارات", href: "/tests" },
      { title: "الاختبار الأسبوعي", href: "/tests/weekly" },
      { title: "بطاقاتي (المراجعة الذكية)", href: "/flashcards" },
      { title: "الأدوات الذكية", href: "/ai-tools" },
      { title: "حدّد مستواك", href: "/placement" },
      { title: "محاكاة الامتحان الشفهي", href: "/tests/sprechen" },
      { title: "الأفعال الشاذة", href: "/verben" },
      { title: "كبسولة اليوم", href: "/tageskapsel" },
      { title: "الحياة اليومية", href: "/alltag" },
      { title: "التعابير والأمثال", href: "/redewendungen" },
      { title: "السيناريوهات المتفرعة", href: "/dialogues" },
      { title: "الاستمارات الرسمية", href: "/forms" },
      { title: "الاستراتيجيات", href: "/strategien" },
      { title: "بنك العبارات الامتحانية", href: "/redemittel" },
      { title: "نماذج الكتابة B2", href: "/schreibmodelle" },
      { title: "مقيّم الكتابة بمعايير غوته", href: "/schreib-bewertung" },
      { title: "مفردات B2 بالـ18 موضوعاً", href: "/wortschatz-b2" },
      { title: "تدريب تحويل الجمل (B2)", href: "/umschreibungen" },
      { title: "تدريب التحدث الصوتي", href: "/sprechtraining" },
      { title: "تدريب الإملاء", href: "/diktate" },
      { title: "لعبة تركيب الجمل", href: "/satzbau" },
      { title: "المراجعة دون إنترنت", href: "/offline-review" },
      { title: "تقرير التقدم (PDF)", href: "/dashboard/report" },
      { title: "الأسئلة الشائعة", href: "/faq" },
    { title: "مقيّم الكتابة", href: "/schreib-bewertung" },
    { title: "مفردات B2 بالمواضيع", href: "/wortschatz-b2" },
    { title: "تحويل الجمل B2", href: "/umschreibungen" },
    { title: "تدريب التحدث", href: "/sprechtraining" },
    { title: "الإملاء", href: "/diktate" },
    { title: "لعبة تركيب الجمل", href: "/satzbau" },
    { title: "مراجعة دون إنترنت", href: "/offline-review" },
    { title: "الأسئلة الشائعة", href: "/faq" },
      { title: "مكتبة الاستماع", href: "/hoeren" },
      { title: "محاكاة امتحان B2 الكامل", href: "/tests/vollpruefung" },
    { title: "بنك العبارات", href: "/redemittel" },
    { title: "نماذج الكتابة B2", href: "/schreibmodelle" },
    { title: "مقيّم الكتابة", href: "/schreib-bewertung" },
    { title: "مفردات B2 بالمواضيع", href: "/wortschatz-b2" },
    { title: "تحويل الجمل B2", href: "/umschreibungen" },
    { title: "تدريب التحدث", href: "/sprechtraining" },
    { title: "الإملاء", href: "/diktate" },
    { title: "لعبة تركيب الجمل", href: "/satzbau" },
    { title: "مراجعة دون إنترنت", href: "/offline-review" },
    { title: "الأسئلة الشائعة", href: "/faq" },
    { title: "مكتبة الاستماع", href: "/hoeren" },
      { title: "المرجع النحوي", href: "/grammatik" },
      { title: "القاموس الشامل", href: "/glossar" },
      { title: "القراءة المتدرجة", href: "/reading" },
      { title: "المعلّم الذكي", href: "/assistant" },
      { title: "الإعدادات والبيانات", href: "/settings" },
      { title: "نظام التصميم", href: "/design-system" },
    ],
    "مراجع سريعة": [
      { title: "المرجع النحوي", href: "/grammatik" },
      { title: "القاموس الشامل", href: "/glossar" },
      { title: "القراءة المتدرجة", href: "/reading" },
      { title: "الأفعال الشاذة", href: "/verben" },
      { title: "الاختبارات", href: "/tests" },
      { title: "الاختبار الأسبوعي", href: "/tests/weekly" },
      { title: "تحديد المستوى", href: "/tests/placement" },
      { title: "الامتحان الشفهي", href: "/tests/sprechen" },
      { title: "حدّد مستواك (سريع)", href: "/placement" },
      { title: "كبسولة اليوم", href: "/tageskapsel" },
      { title: "الحياة اليومية", href: "/alltag" },
      { title: "الاستمارات الرسمية", href: "/forms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** حلّ رابط الموقع الموثوق (P1-06) */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  // على Vercel: VERCEL_URL مثل "deutschpfad.vercel.app"
  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;

  // التطوير المحلي فقط (نستخدم localhost في dev — لا يُبنى للإنتاج)
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  // الإنتاج بلا متغيرات: نطاق النشر الفعلي — لا localhost أبداً
  return "https://deutschpfad.vercel.app";
}
