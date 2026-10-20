"use client";

import * as React from "react";
import Link from "next/link";
import {AlertTriangle, BookMarked, BookmarkPlus, Check} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {getTopicsByMistakeType} from "@/data/grammar/reference";
import {addMistakeAsCard, getMistakeStats, type MistakeStat} from "@/lib/storage/mistake-dictionary";

/**
 * قاموس الأخطاء الشخصي — نقاط ضعفك معروضة مباشرة
 * (اقتراح المرحلة 11: من تحليل المعلّم إلى واجهة مدمجة)
 * + زر «أضف الخطأ لبطاقاتي» للتدرب عليه
 * + رابط لكل خطأ → القاعدة المقابلة في المرجع النحوي (اقتراح المرحلة 12)
 */
export function MistakeDictionaryCard() {
  const [mistakes, setMistakes] = React.useState<MistakeStat[]>([]);
  const [added, setAdded] = React.useState<string[]>([]);

  React.useEffect(() => {
    void getMistakeStats().then(setMistakes);
  }, []);

  const total = mistakes.reduce((s, m) => s + m.count, 0);
  const max = mistakes[0]?.count ?? 0;

  const addToCards = async (m: MistakeStat) => {
    await addMistakeAsCard(m);
    setAdded((prev) => [...prev, m.errorType]);
  };

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
          <p className="text-sm text-muted-foreground">
            لا أخطاء مسجلة بعد! أجب عن تمارين لتُبنى خريطة أخطائك الشخصية تلقائياً.
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
                  <button
                    type="button"
                    onClick={() => void addToCards(m)}
                    disabled={added.includes(m.errorType)}
                    className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-colors hover:border-primary/50 disabled:opacity-60"
                  >
                    {added.includes(m.errorType) ? (
                      <>
                        <Check className="h-3 w-3 text-success" aria-hidden="true" />
                        أُضيفت للبطاقات
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="h-3 w-3" aria-hidden="true" />
                        أضف الخطأ لبطاقاتي
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
