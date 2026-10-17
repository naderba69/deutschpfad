import localFont from "next/font/local";

/**
 * الخطوط:
 * — Tajawal: واجهة عربية واضحة (أوزان 200→900)
 * — Inter: للنص الألماني/اللاتيني (أوزان 100→900)
 * الملفات مخزّنة داخل المستودع في src/fonts (مصدرها @fontsource بترخيص OFL)،
 * فلا يحتاج البناء إلى الوصول إلى Google Fonts، ويعمل التطبيق بلا إنترنت بعد التثبيت (PWA).
 */
export const fontInter = localFont({
  src: [
    { path: "../fonts/inter/inter-latin-100-normal.woff2", weight: "100", style: "normal" },
    { path: "../fonts/inter/inter-latin-200-normal.woff2", weight: "200", style: "normal" },
    { path: "../fonts/inter/inter-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/inter/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/inter/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/inter/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/inter/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/inter/inter-latin-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/inter/inter-latin-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const fontTajawal = localFont({
  src: [
    { path: "../fonts/tajawal/tajawal-arabic-200-normal.woff2", weight: "200", style: "normal" },
    { path: "../fonts/tajawal/tajawal-arabic-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/tajawal/tajawal-arabic-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/tajawal/tajawal-arabic-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/tajawal/tajawal-arabic-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/tajawal/tajawal-arabic-800-normal.woff2", weight: "800", style: "normal" },
    { path: "../fonts/tajawal/tajawal-arabic-900-normal.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-tajawal",
  display: "swap",
});
