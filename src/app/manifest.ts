import type { MetadataRoute } from "next";

/**
 * بيان تطبيق الويب (Web App Manifest) لملف PWA
 * — يُقدَّم تلقائياً على /manifest.webmanifest —
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "درب الألمانية — DeutschPfad",
    short_name: "DeutschPfad",
    description:
      "منصة عربية متكاملة لتعليم اللغة الألمانية من A1 إلى B2 وفق منهجية معهد غوته ومعايير CEFR — تمارين تفاعلية ونطق صوتي ومراجعة ذكية.",
    start_url: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    background_color: "#f6f9fd",
    theme_color: "#0066ff",
    orientation: "portrait-primary",
    lang: "ar",
    dir: "rtl",
    categories: ["education", "productivity"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      { src: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcuts: [
      {
        name: "مسار التعلم",
        short_name: "المسار",
        description: "خارطة طريقك من A1 إلى B2",
        url: "/learning-path",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
