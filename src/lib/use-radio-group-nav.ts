"use client";

import * as React from "react";

/**
 * تنقّل بلوحة المفاتيح داخل مجموعة أزرار `role="radiogroup"`.
 *
 * نمط ARIA APG لمجموعة الاختيار الواحد يوجب أن تنتقل الأسهم بين الخيارات وأن
 * يختار السهمُ الخيارَ الذي يصل إليه التركيز (Selection follows focus). أغلب
 * مجموعاتنا أزرار `<button role="radio">` لا `input[type=radio]`، وهي لا تحصل
 * على هذا السلوك تلقائياً، فيبقى مستخدم لوحة المفاتيح عالقاً على الخيار الذي
 * وصله بـ Tab (WCAG 2.1.1 / 4.1.2).
 *
 * لا يعتمد على `ref` كي يصلح لأي عدد من المجموعات في المكوّن نفسه: الحاوية
 * تُستخرج من `event.currentTarget`.
 *
 * الاتجاه: في الصفحات RTL يكون «التالي» هو السهم الأيسر، وفي LTR هو الأيمن.
 * عمودياً: الأسفل = التالي دائماً، والأعلى = السابق دائماً.
 */
export function useRadioGroupNav() {
  const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    const container = event.currentTarget;
    const rtl = (container.closest("[dir]")?.getAttribute("dir") ?? document.documentElement.dir) === "rtl";
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const backward = rtl ? "ArrowRight" : "ArrowLeft";

    let delta = 0;
    let index: number | null = null;
    switch (event.key) {
      case forward:
      case "ArrowDown":
        delta = 1;
        break;
      case backward:
      case "ArrowUp":
        delta = -1;
        break;
      case "Home":
        index = 0;
        break;
      case "End":
        index = Number.MAX_SAFE_INTEGER;
        break;
      default:
        return;
    }

    const radios = Array.from(
      container.querySelectorAll<HTMLElement>('[role="radio"]:not([disabled]):not([aria-disabled="true"])'),
    ).filter((el) => el.closest('[role="radiogroup"]') === container);
    if (radios.length === 0) return;

    const current = radios.indexOf(document.activeElement as HTMLElement);
    let next: number;
    if (index !== null) {
      next = Math.min(index, radios.length - 1);
    } else if (current === -1) {
      next = delta > 0 ? 0 : radios.length - 1;
    } else {
      next = (current + delta + radios.length) % radios.length;
    }

    const target = radios[next];
    if (!target) return;
    event.preventDefault();
    target.focus();
    // الاختيار يتبع التركيز: ننقر الخيار ليمرّ عبر نفس معالج onClick المستخدم بالنقر.
    target.click();
  }, []);

  return { onKeyDown };
}
