import * as React from "react";

import {cn} from "@/lib/utils";

/**
 * مكوّن النص الألماني
 * — يضمن اتجاه LTR + خط Inter + سمة lang="de" لقارئات الشاشة
 * — داخل واجهة عربية RTL. يُستخدم لكل كلمة/جملة ألمانية بالموقع.
 *
 * مثال:
 * <p>مرحباً! <LangDe>Guten Tag!</LangDe></p>
 */
export function LangDe({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span dir="ltr" lang="de" className={cn("font-de", className)} {...props}>
      {children}
    </span>
  );
}
