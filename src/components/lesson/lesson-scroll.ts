/**
 * التمرير إلى أول محتوى القسم في الدرس (الجولة الثانية عشرة).
 *
 * `scrollIntoView({block:"start"})` يضع البطاقة تحت الأشرطة بفضل
 * `scroll-padding`، لكن ارتفاع الشريط اللاصق يتغيّر بعد أول رندر فتنتقل
 * البطاقة إلى منتصف الشاشة (236px). نحسب الموضع صراحةً من ارتفاع الهيدر
 * والشريط، ونعيده بعد استقرار التخطيط.
 *
 * تُرجع دالة إلغاء لمؤقّت الانتظار (لتُنظَّف في `useEffect`).
 */
export function scrollToLessonTarget(targetId: string): () => void {
  const run = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const header = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const strip =
      document.querySelector("[data-lesson-sticky-strip]")?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + target.getBoundingClientRect().top - header - strip - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };
  const settle = window.setTimeout(run, 120);
  return () => window.clearTimeout(settle);
}
