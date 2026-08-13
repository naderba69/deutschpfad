import {Inter, Tajawal} from "next/font/google";

/**
 * الخطوط:
 * — Tajawal: واجهة عربية واضحة (متغيرات الأوزان 200→900)
 * — Inter: للنص الألماني/اللاتيني (خط متغير)
 * يتم تحميلهما ذاتياً (Self-hosted) في البناء — ما يعني عملهما
 * حتى بدون إنترنت بعد تثبيت التطبيق (PWA).
 */
export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontTajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});
