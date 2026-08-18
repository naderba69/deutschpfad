import type { Metadata } from "next";

import {ReadingLibraryClient} from "@/components/reading/reading-library-client";

export const metadata: Metadata = {
  title: "مكتبة القراءة المتدرجة (Graded Readers)",
  description:
    "نصوص قراءة متدرجة من A1 إلى B2 مع نطق صوتي وترجمة وأسئلة فهم — اقرأ بما يناسب مستواك وتقدم تدريجياً.",
};

export default function ReadingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          مكتبة القراءة المتدرجة
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          نصوص أصلية مصممة لكل مستوى (A1→B2): اقرأ، استمع، ترجم عند الحاجة، وأجب عن
          أسئلة الفهم — القراءة المتدرجة أقوى طريقة لبناء المفردات.
        </p>
      </div>

      {/* أنواع قراءة غوته B2 الخمسة (المرجع) */}
      <div className="mb-6 rounded-2xl border bg-muted/20 p-4">
        <p className="mb-3 text-sm font-bold text-primary">📋 أجزاء قراءة Goethe B2 الخمسة — ما الذي يتدرب عليه كل نص:</p>
        <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-5">
          <div className="rounded-lg border bg-background p-2.5"><p className="font-bold">Teil 1 · Zuordnung</p><p className="mt-0.5 text-muted-foreground">مطابقة آراء/عبارات مع أشخاص</p></div>
          <div className="rounded-lg border bg-background p-2.5"><p className="font-bold">Teil 2 · Artikel</p><p className="mt-0.5 text-muted-foreground">مقال + أسئلة اختيار تفصيلية</p></div>
          <div className="rounded-lg border bg-background p-2.5"><p className="font-bold">Teil 3 · Richtig/Falsch</p><p className="mt-0.5 text-muted-foreground">صواب/خطأ/غير مذكور</p></div>
          <div className="rounded-lg border bg-background p-2.5"><p className="font-bold">Teil 4 · Textteile</p><p className="mt-0.5 text-muted-foreground">فقرات ناقصة تُكمل بجمل</p></div>
          <div className="rounded-lg border bg-background p-2.5"><p className="font-bold">Teil 5 · Kurztexte</p><p className="mt-0.5 text-muted-foreground">نصوص قصيرة (رسائل/إعلانات)</p></div>
        </div>
      </div>

      {/* استراتيجيات القراءة السريعة (اقتراح المرحلة النهائية) */}
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { title: "🔍 Skimming (قراءة المسح)", desc: "اقرأ العنوان والجملة الأولى من كل فقرة فقط — لتفهم الفكرة العامة في 30 ثانية. هذا أول سؤال في امتحان B2 Lesen." },
          { title: "🎯 Scanning (قراءة التصيّد)", desc: "ابحث عن الكلمة المفتاحية من السؤال في النص (تواريخ، أسماء، أرقام) — لا تقرأ كل شيء. مهارة إنقاذ الوقت." },
          { title: "🚫 تجاهل المجهول", desc: "لا تتوقف عند كل كلمة جديدة — خمّن من السياق واستمر. الكلمات المجهولة تُستبعد من الامتحان غالباً." },
        ].map((t) => (
          <div key={t.title} className="rounded-xl border bg-muted/20 p-4">
            <p className="text-sm font-bold">{t.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>

      <ReadingLibraryClient />
    </div>
  );
}
