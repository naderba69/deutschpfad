import type { Metadata, Viewport } from "next";

import {Footer} from "@/components/layout/footer";
import {Header} from "@/components/layout/header";
import {MobileBottomNav} from "@/components/layout/mobile-bottom-nav";
import {LLMProvider} from "@/components/providers/llm-provider";
import {ProgressProvider} from "@/components/providers/progress-provider";
import {ServiceWorkerRegister} from "@/components/providers/service-worker-register";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {VoiceWarmup} from "@/components/providers/voice-warmup";
import {fontInter, fontTajawal} from "@/lib/fonts";
import {siteConfig} from "@/lib/site-config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — تعلّم الألمانية من الصفر حتى الاحتراف (A1 → B2)`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.nameLatin }],
  creator: siteConfig.nameLatin,
  applicationName: siteConfig.nameLatin,
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f9fd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${fontTajawal.variable} ${fontInter.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* بيانات منظمة (JSON-LD) للـ SEO — Course schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "درب الألمانية — تعلم الألمانية من A1 إلى B2",
              description: siteConfig.description,
              provider: {
                "@type": "EducationalOrganization",
                name: siteConfig.nameLatin,
                url: siteConfig.url,
              },
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Online",
                inLanguage: "ar",
                teaches: ["German language", "Goethe-Zertifikat preparation", "CEFR A1-B2"],
              },
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ProgressProvider>
            <LLMProvider>
              {/* overflow-x-clip يقصّ الفائض الأفقي دون أن يكسر position:sticky
                  (overflow-x-hidden كان يكسر كل الأشرطة اللاصقة في التطبيق) */}
              {/* pb-28: حشوة سفلية مريحة على الجوال — يمنع الشريط السفلي الثابت
                  من تغطية آخر محتوى في الصفحة (ارتفاع الشريط ~68px + هامش أمان) */}
              <div className="relative flex min-h-screen flex-col overflow-x-clip pb-28 md:pb-0">
                {/* رابط تخطي التنقل — يظهر عند التركيز بلوحة المفاتيح فقط */}
                <a
                  href="#main-content"
                  className="sr-only z-[100] rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:shadow-lg"
                >
                  تخطَّ إلى المحتوى الرئيسي
                </a>
                <Header />
                <main id="main-content" className="flex-1">
                  {children}
                </main>
                <Footer />
                {/* شريط التنقل السفلي للجوال — يضيف مساحة سفلية حتى لا يغطي المحتوى */}
                <MobileBottomNav />
              </div>
              <ServiceWorkerRegister />
              <VoiceWarmup />
            </LLMProvider>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
