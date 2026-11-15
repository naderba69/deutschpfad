"use client";

import * as React from "react";

import {cn} from "@/lib/utils";

/**
 * ScrollRegion — حاوية تمرير أفقي يمكن الوصول إليها بلوحة المفاتيح.
 *
 * المشكلة: `overflow-x-auto` وحده يخفي المحتوى عن مستخدم لوحة المفاتيح — لا
 * يستطيع تمريره إلا بالفأرة أو اللمس، فلا يرى أعمدة الجدول الأخيرة (WCAG 2.1.1).
 * المتصفح يجعل الحاوية قابلة للتركيز تلقائياً في Chrome/Edge فقط عند التمرير،
 * وهذا سلوك غير قياسي وغير موثوق عبر المتصفحات.
 *
 * الحل الموصى به: `tabindex="0"` + `role="region"` + اسم — فيُعلَن «منطقة»
 * باسمها، ويستطيع المستخدم تمريرها بالأسهم.
 */
export function ScrollRegion({
  label,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {label: string}) {
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className={cn(
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
