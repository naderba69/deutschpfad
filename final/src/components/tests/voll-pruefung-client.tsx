"use client";

/**
 * محاكاة امتحان Goethe B2 الكامل (Vollprüfung)
 * — الأجزاء المكتوبة الأربعة بتوقيت حقيقي (LevelTest B2) —
 * ثم الخطوة الشفهية (Vortrag + Diskussion) ونتيجة نهائية بمعايير غوته.
 */
import * as React from "react";
import {Award, BookOpenCheck, Headphones, Mic, PenLine, Timer} from "lucide-react";

import {LevelTest} from "@/components/tests/level-test";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getLastTestResult} from "@/lib/storage/test-results-store";

const EXAM_STEPS = [
  { icon: <BookOpenCheck className="h-5 w-5" aria-hidden="true" />, title: "Lesen — القراءة", time: "35 دقيقة", desc: "نصوص وأنواع غوته: إعلانات، مقالات، آراء، فقرات ناقصة" },
  { icon: <Headphones className="h-5 w-5" aria-hidden="true" />, title: "Hören — الاستماع", time: "25 دقيقة", desc: "إعلان، رسالة هاتفية، مقابلة، محاضرة" },
  { icon: <Timer className="h-5 w-5" aria-hidden="true" />, title: "Grammatik & Wortschatz", time: "30 دقيقة", desc: "قواعد ومفردات B2 الشاملة" },
  { icon: <PenLine className="h-5 w-5" aria-hidden="true" />, title: "Schreiben — الكتابة", time: "30 دقيقة", desc: "Forumsbeitrag + رسالة رسمية" },
  { icon: <Mic className="h-5 w-5" aria-hidden="true" />, title: "Sprechen — الشفهي", time: "7 دقائق", desc: "عرض تقديمي + مناقشة (رابط منفصل)" },
];

export function VollPruefungClient() {
  const [verdict, setVerdict] = React.useState<{ pct: number; passed: boolean; level: string } | null>(null);

  React.useEffect(() => {
    let mounted = true;
    void (async () => {
      const last = await getLastTestResult();
      if (!mounted || !last || last.kind !== "level" || last.level !== "B2") return;
      setVerdict({ pct: Math.round(last.overallPct), passed: last.passed, level: last.estimatedLevel });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* خارطة الامتحان */}
      <Card className="overflow-hidden">
        <CardContent className="space-y-3 p-5">
          <p className="font-bold text-primary">📋 هيكل امتحان Goethe B2 الحقيقي:</p>
          <ol className="space-y-2">
            {EXAM_STEPS.map((s, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border bg-muted/20 p-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold">
                    <span className="font-de" dir="ltr" lang="de">{s.title}</span>
                    <span className="ms-2 rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">{s.time}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-muted-foreground">
            💡 الدرجات في غوته الحقيقي: نجاح من 60%، «جيد» من 75%، «ممتاز» من 90%. كل جزء
            يُقيَّم منفصلاً — لا تهمل أي مهارة.
          </p>
        </CardContent>
      </Card>

      {/* النتيجة النهائية (تظهر بعد إكمال الاختبار) */}
      {verdict && (
        <Card className="overflow-hidden border-gold/40 bg-gold/10">
          <CardContent className="space-y-3 p-5 text-center">
            <Award className="mx-auto h-10 w-10 text-gold-strong" aria-hidden="true" />
            <p className="font-de text-4xl font-extrabold text-primary">{verdict.pct}%</p>
            <p className="font-bold">
              {verdict.passed
                ? verdict.pct >= 90
                  ? "Sehr gut — ممتاز! 🏆 أنت جاهز للامتحان الحقيقي"
                  : verdict.pct >= 75
                    ? "Gut — جيد جداً، أبقِ مستواك بمراجعة أسبوعية"
                    : "Bestanden — ناجح، واصل تقوية المهارات الأضعف"
                : "Nicht bestanden — أعد التدريب على المهارات الأقل من 60% ثم أعد المحاكاة"}
            </p>
            <Progress value={verdict.pct} className="mx-auto h-3 max-w-sm" aria-label={`النتيجة ${verdict.pct}%`} />
            <p className="text-xs text-muted-foreground">
              المستوى المقدر: <span className="font-de font-bold">{verdict.level}</span>
            </p>
          </CardContent>
        </Card>
      )}

      {/* الخطوة الشفهية */}
      <Card className="overflow-hidden">
        <CardContent className="space-y-3 p-5">
          <p className="font-bold">🎤 الخطوة الأخيرة — الشفهي (Sprechen):</p>
          <p className="text-sm text-muted-foreground">
            بعد الأجزاء المكتوبة، أكمل الشفهي في صفحته المخصصة: عرض تقديمي (اختر موضوعاً
            وتحدث 3 دقائق) ثم مناقشة (4 دقائق) — مع تسجيل صوتي وتقييم ذاتي بمعايير الممتحن.
          </p>
          <Button asChild size="lg" className="gap-1.5">
            <a href="/tests/sprechen">
              <Mic className="h-4 w-4" aria-hidden="true" />
              انتقل إلى الامتحان الشفهي B2
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* الأجزاء المكتوبة — LevelTest B2 */}
      <div className="rounded-2xl border bg-muted/20 p-4">
        <p className="mb-3 text-sm font-bold text-muted-foreground">
          ⏱️ الأجزاء المكتوبة تبدأ الآن — بتوقيت حقيقي مثل الامتحان (يُسلَّم كل قسم تلقائياً):
        </p>
        <LevelTest level="B2" />
      </div>
    </div>
  );
}
