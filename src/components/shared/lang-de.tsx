import * as React from "react";

import {cn} from "@/lib/utils";

/**
 * مكوّن النص الألماني
 * — يضمن اتجاه LTR + خط Inter + سمة lang="de" لقارئات الشاشة
 * — داخل واجهة عربية RTL. يُستخدم لكل كلمة/جملة ألمانية بالموقع.
 *
 * مثال:
 * <p>مرحباً! <LangDe>Guten Tag!</LangDe></p>
 *
 * **قاعدة الجولة العاشرة (اللغة والاتجاه):** بعض الحقول بياناتها حرّة —
 * «الخطأ/الصواب» في دروس النطق، وخيارات الأسئلة، وأمثلة الجدول — وقد تحتوي
 * نصاً عربياً (شرح نطق) لا ألمانياً. وَسمُها بـ`lang="de"` كان يجعل قارئ
 * الشاشة ينطق العربية بصوت ألماني (WCAG 3.1.2). لذلك يفحص المكوّن نصّه:
 * إن وجد حرفاً عربياً لم يدّعِ الألمانية، وترك الاتجاه للمتصفح (`dir="auto"`).
 */
const ARABIC = /[\u0600-\u06FF]/;

function flatten(node: React.ReactNode): string {
  return React.Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (React.isValidElement<{children?: React.ReactNode}>(child)) return flatten(child.props.children);
      return "";
    })
    .join(" ");
}

export function LangDe({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  const containsArabic = ARABIC.test(flatten(children));
  return (
    <span
      {...(containsArabic ? {dir: "auto" as const} : {dir: "ltr" as const, lang: "de"})}
      className={cn("font-de", className)}
      {...props}
    >
      {children}
    </span>
  );
}
