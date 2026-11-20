"use client";

import {Type} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type {VocabEntry} from "@/types/lesson";

/**
 * 3) المفردات (Wortschatz): كل كلمة مع جملة مثال قبل أن تُستعمل في القواعد والتمارين.
 */
export function WortschatzSection({entries}: {entries: VocabEntry[]}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Type className="h-5 w-5 text-primary" aria-hidden="true" />
          كلمات هذا الدرس
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          استمع إلى كل كلمة واقرأ المثال بصوت مرتفع. لا داعي لحفظ كل شيء الآن، فستستعمل هذه الكلمات في التمارين.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {entries.map((entry) => (
            <li key={entry.de} className="rounded-xl border bg-background p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-de text-lg font-bold" dir="ltr" lang="de">
                  {entry.de}
                </span>
                <SpeakButton text={entry.de} size="sm" className="h-7 w-7" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{entry.ar}</p>
              <p className="font-de mt-3 text-sm" dir="ltr" lang="de">
                {entry.exampleDe}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{entry.exampleAr}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
