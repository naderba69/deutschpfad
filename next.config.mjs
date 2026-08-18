import withPWAInit from "@ducanh2912/next-pwa";

/**
 * إعدادات PWA عبر @ducanh2912/next-pwa
 * - dest: مكان توليد ملفات الـ Service Worker (public/sw.js)
 * - register: تسجيل تلقائي للـ Service Worker (لا يحتاج كود يدوي)
 * - skipWaiting: تفعيل النسخة الجديدة فوراً عند التحديث
 * - disable: تعطيل الـ SW في بيئة التطوير فقط حتى لا يعطّل الـ HMR
 * - runtimeCaching: تحسينات الكاش — الصور/الأيقونات CacheFirst،
 *   وملفات JS/CSS من المبنى CacheFirst (لها بصمات فريدة)،
 *   وباقي التنقلات NetworkFirst (الافتراضي) لضمان الحداثة.
 */
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        // الأصول الثابتة: أيقونات التطبيق وشعارات وصور عامة — تُخزَّن محلياً شهراً
        urlPattern: ({ url }) =>
          /\.(?:png|jpg|jpeg|svg|webp|gif|ico)$/i.test(url.pathname) &&
          !url.pathname.startsWith("/_next/"),
        handler: "CacheFirst",
        options: {
          cacheName: "static-assets",
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 يوماً
          },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        // ملفات JS/CSS المبنية (لها بصمات محتوى فريدة) — تخزين دائم آمن
        urlPattern: ({ url }) => /\/_next\/static\/.+\.(?:js|css)$/i.test(url.pathname),
        handler: "CacheFirst",
        options: {
          cacheName: "next-static",
          expiration: {
            maxEntries: 128,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ضغط الاستجابات (gzip/brotli) عبر خادم Next المدمج عند الاستضافة الذاتية
  compress: true,
  // إخفاء ترويسة X-Powered-By (أمان + نظافة)
  poweredByHeader: false,
  // ESLint مفعّل بالكامل أثناء البناء — أي خطأ يوقف النشر
  // تحسين الحزم: عزل بيانات الدروس الكاملة في حزمة خاصة تُحمَّل فقط
  // عند الحاجة الفعلية (اختبار الوحدة)، بدل سحبها مع كل صفحات الاختبارات
  webpack(config) {
    const splitChunks = config.optimization?.splitChunks;
    if (splitChunks && typeof splitChunks === "object") {
      splitChunks.cacheGroups = {
        ...(splitChunks.cacheGroups ?? {}),
        lessonData: {
          test: /[\\/]src[\\/]data[\\/]lessons[\\/]/,
          idHint: "lesson-data",
          chunks: "all",
          priority: 40,
          reuseExistingChunk: true,
        },
      };
    }
    return config;
  },
  async headers() {
    // ═══ P1-03: رؤوس أمان عامة لكل الصفحات (تُطبَّق قبل قواعد المسارات) ═══
    const securityHeaders = [
      // يمنع المتصفح من تخمين نوع المحتوى
      { key: "X-Content-Type-Options", value: "nosniff" },
      // يحدد مصدر المرجع المُرسل مع الروابط
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // يقيد وصول الكاميرا/الميكروفون/الجيولوكيشن لأطر خارجية
      { key: "Permissions-Policy", value: "camera=(), microphone=(self), geolocation=(), payment=(), usb=()" },
      // منع التضمين في iframes خارجية (clickjacking)
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob: https:",
          "font-src 'self' data:",
          "connect-src 'self' https://generativelanguage.googleapis.com https://api.groq.com https://openrouter.ai https://www.google-analytics.com",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; "),
      },
    ];

    return [
      {
        // رؤوس الأمان على كل المسارات
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // الأيقونات والشعار: تغيير نادر → كاش طويل غير قابل للتغيير
        source: "/icons/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/logo.svg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // صفحة عدم الاتصال: نسمح بالتخزين حتى تُعرض عند الطيران
        source: "/offline",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default withPWA(nextConfig);
