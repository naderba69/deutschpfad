"use client";

import * as React from "react";
import Link from "next/link";
import {AlertTriangle, BookMarked} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getTopicsByMistakeType} from "@/data/grammar/reference";
import {getMistakeStatsResult, type MistakeStat} from "@/lib/storage/mistake-dictionary";

/**
 * قاموس الأخطاء الشخصي — نقاط ضعفك معروضة مباشرة
 * (اقتراح المرحلة 11: من تحليل المعلّم إلى واجهة مدمجة)
 * + الأخطاء التي لها إجابة صحيحة تصبح بطاقات مراجعة تلقائياً
 * + رابط لكل خطأ → القاعدة المقابلة في المرجع النحوي (اقتراح المرحلة 12)
 */
export function MistakeDictionaryCard() {
  const [mistakes, setMistakes] = React.useState<MistakeStat[]>([]);
  const [readError, setReadError] = React.useState(false);

  React.useEffect(() => {
    void getMistakeStatsResult().then((result) => {
      if (result.ok) setMistakes(result.stats);
      else setReadError(true);
    });
  }, []);

  const total = mistakes.reduce((s, m) => s + m.count, 0);
  const max = mistakes[0]?.count ?? 0;

  if (mistakes.length === 0) {
    return (
      <Card>
        <CardHeader className="border-b bg-muted/20">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="h-5 w-5 text-primary" aria-hidden="true" />
            قاموس الأخطاء الشخصي
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5">
          <p role={readError ? "alert" : undefined} className={readError ? "text-sm text-destructive" : "text-sm text-muted-foreground"}>
            {readError ? "تعذرت قراءة سجل التمارين؛ لا يمكن تأكيد وجود أخطاء مسجلة الآن." : "لا أخطاء مسجلة بعد! أجب عن تمارين لتُبنى خريطة أخطائك الشخصية تلقائياً."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5 text-primary" aria-hidden="true" />
          قاموس الأخطاء الشخصي — نقاط ضعفك
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-5">
        <p className="text-xs text-muted-foreground">
          الخطأ الذي له إجابة صحيحة يُضاف تلقائياً إلى بطاقات المراجعة، ولا حاجة لإضافته يدوياً.
        </p>
        {mistakes.map((m) => {
          const topics = getTopicsByMistakeType(m.errorType);
          return (
            <div key={m.errorType} className="rounded-xl border bg-card p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{m.label}</span>
                <span className="font-de text-muted-foreground">
                  {m.count} / {total}
                </span>
              </div>
              <Progress value={(m.count / Math.max(max, 1)) * 100} className="mt-2 h-1.5" aria-label={m.label} />
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground">
                  {Math.round((m.count / total) * 100)}% من أخطائك
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {/* ربط بالمرجع النحوي (اقتراح 1) */}
                  {topics.length > 0 && (
                    <Link
                      href={`/grammatik#${topics[0].id}`}
                      className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                      <BookMarked className="h-3 w-3" aria-hidden="true" />
                      راجع القاعدة
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
