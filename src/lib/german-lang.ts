/**
 * وسم النص الألماني بسمة اللغة (`lang="de"`)
 *
 * المشروع عربي الاتجاه واللغة، وفيه مئات النصوص الألمانية المضمّنة في المكوّنات
 * والبيانات. قارئ الشاشة ينطق كل ما لا سمة له بلغة الصفحة (العربية)، فتخرج
 * الكلمات الألمانية مشوّهة. الإصلاح الكامل يكون في المصدر، وهذا المُكمّل يغطّي
 * ما تبقّى: كل عنصر يستخدم صنف الخط الألماني `font-de` ويحتوي نصاً لاتينياً
 * بلا حروف عربية يُوسم تلقائياً بعد الترطيب.
 *
 * لا يغيّر النص ولا الشكل، ولا يمسّ العناصر التي فيها عربية (نص مختلط).
 */
export const GERMAN_FONT_CLASS = "font-de";

const ARABIC = /[\u0600-\u06FF]/;
const LATIN_WORD = /[A-Za-zÄÖÜäöüß]{2}/;
/** ليست نصاً ألمانياً: أسماء إنجليزية ورموز CSS تظهر في صفحة نظام التصميم */
const NOT_GERMAN = /^(hsl\(|Design System$)/;

interface MarkableElement {
  textContent: string | null;
  getAttribute: (name: string) => string | null;
  setAttribute: (name: string, value: string) => void;
}

interface MarkableRoot {
  querySelectorAll: (selector: string) => ArrayLike<MarkableElement>;
}

/** يوسم العناصر الألمانية ويعيد العدد الذي تغيّر. */
export function markGermanElements(root: MarkableRoot): number {
  const selector = `.${GERMAN_FONT_CLASS}:not([lang])`;
  let marked = 0;
  for (const el of Array.from(root.querySelectorAll(selector))) {
    const text = (el.textContent ?? "").trim();
    if (!text || ARABIC.test(text) || !LATIN_WORD.test(text) || NOT_GERMAN.test(text)) continue;
    el.setAttribute("lang", "de");
    if (!el.getAttribute("dir")) el.setAttribute("dir", "ltr");
    marked += 1;
  }
  return marked;
}
