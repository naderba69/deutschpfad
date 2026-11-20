"use client";

import * as React from "react";
import {Type} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {loadBankWortschatz, ownWortschatz} from "@/lib/session/lesson-content";
import type {VocabEntry} from "@/types/lesson";

/**
 * 3) المفردات (Wortschatz): كل كلمة مع جملة مثال قبل أن تُستعمل في القواعد والتمارين.
 * المحتوى المتزامن (محتوى الدرس أو قائمة إضافية) يظهر فوراً، وإلا يُحمَّل بنك المستوى عند الفتح.
 */
export function WortschatzSection({lessonId, explicit}: {lessonId: string; explicit?: readonly VocabEntry[]}) {
  const own = React.useMemo(() => ownWortschatz(lessonId, explicit), [lessonId, explicit]);
  const [bank, setBank] = React.useState<VocabEntry[] | null>(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (own.length > 0) return;
    let active = true;
    loadBankWortschatz(lessonId)
      .then((entries) => {
        if (active) setBank(entries);
      })
      .catch(() => {
        if (active) setFailed(true);
      });
    return () => {
      active = false;
    };
  }, [lessonId, own.length]);

  const entries = own.length > 0 ? own : bank;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Type className="h-5 w-5 text-primary" aria-hidden="true" />
          كلمات هذا الدرس
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {failed ? (
          <p role="alert" className="text-sm text-destructive">
            تعذّر تحميل كلمات هذا الدرس. أعد تحميل الصفحة أو تابع إلى القسم التالي لاحقاً.
          </p>
        ) : entries === null ? (
          <p className="text-sm text-muted-foreground">جارٍ تحميل الكلمات…</p>
        ) : entries.length === 0 ? (
          <p className="text-sm text-muted-foreground">لا كلمات جديدة في هذا الدرس.</p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              استمع إلى كل كلمة واقرأ المثال بصوت مرتفع. لا داعي لحفظ كل شيء الآن، فستستعمل هذه الكلمات في التمارين.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {entries.map((entry, i) => (
                <li key={`${i}-${entry.de}`} className="rounded-xl border bg-background p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-de text-lg font-bold" dir="ltr" lang="de">
                      {entry.de}
                    </span>
                    <SpeakButton text={entry.de} size="sm" className="h-7 w-7" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{entry.ar}</p>
                  {entry.exampleDe && (
                    <p className="font-de mt-3 text-sm" dir="ltr" lang="de">
                      {entry.exampleDe}
                    </p>
                  )}
                  {entry.exampleAr && <p className="mt-0.5 text-xs text-muted-foreground">{entry.exampleAr}</p>}
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
