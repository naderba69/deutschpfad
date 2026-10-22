import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";

/**
 * رقاقة فلتر موحّدة (المرحلة 5) — البديل الوحيد عن أنماط متفرقة كانت في 19 ملفاً:
 *
 *   • الشكل:      rounded-lg في الأغلب وrounded-full في 4 ملفات   → وُحّد rounded-lg
 *   • الحشو:      py-1 مقابل py-1.5                                → وُحّد py-1.5
 *               (و`.tap-target` تفرض 36px فأصبح الحشو غير مؤثّر على الارتفاع)
 *   • الخلفية الخاملة: شفّافة / bg-muted/40 / bg-background        → وُحّد bg-background
 *               (bg-muted/40 فوق البطاقة البيضاء = rgb(247,249,251) مقابل rgb(248,250,252)
 *                فرق غير محسوس؛ وبقي حرف «الكل» مقروءاً بتباين AA)
 *   • لون النص الخامل: موروث غامق / text-muted-foreground          → وُحّد muted
 *   • حدّ التحويم: primary/50 مقابل primary/40                     → وُحّد /40
 *   • الخط:       font-de في بعضها فقط                            → وُحّد font-de
 *               (Inter للاتينية والأرقام، والعربية ترتد إلى Tajawal فلا يتغيّر شكلها)
 *
 * أُضيف `aria-pressed` (قارئات الشاشة تُعلن «مضغوط») — تحسين وصول لا يغيّر المنظر.
 * النغمات: primary (افتراضي) · soft (نشط بلمسة خفيفة) · gold (التمييز الذهبي).
 */
const filterChipVariants = cva(
  "font-de tap-target inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-bold transition-colors",
  {
    variants: {
      tone: {
        primary: "",
        soft: "",
        gold: "",
      },
      active: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {tone: "primary", active: true, className: "border-primary bg-primary text-primary-foreground"},
      {tone: "primary", active: false, className: "bg-background text-muted-foreground hover:border-primary/40"},
      {tone: "soft", active: true, className: "border-primary bg-primary/10 text-primary"},
      {tone: "soft", active: false, className: "bg-background text-muted-foreground hover:border-primary/40"},
      {tone: "gold", active: true, className: "border-gold bg-gold/15 text-gold-strong"},
      {tone: "gold", active: false, className: "bg-background text-muted-foreground hover:border-primary/40"},
    ],
    defaultVariants: {tone: "primary", active: false},
  },
);

export type FilterChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof filterChipVariants>;

export function FilterChip({className, tone, active, type = "button", ...props}: FilterChipProps) {
  return (
    <button
      type={type}
      aria-pressed={active ?? false}
      className={cn(filterChipVariants({tone, active}), className)}
      {...props}
    />
  );
}
