"use client";

import {AlertTriangle, Brain, Landmark} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type { FehlerUndTipps } from "@/types/lesson";

/**
 * 8) الأخطاء الشائعة والتريكات (Fehler & Eselsbrücken) + لقطة ثقافية
 */
export function FehlerUndTippsSection({ data }: { data: FehlerUndTipps }) {
  return (
    <div className="space-y-5">
      {/* الأخطاء الشائعة */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
            احذر! أخطاء يقع فيها المتعلم العربي
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {data.mistakes.map((m, i) => (
            <div key={i} className="rounded-xl border bg-background p-3">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-lg bg-destructive/10 px-2 py-1 font-de text-destructive line-through decoration-2" dir="ltr" lang="de">
                  {m.wrong}
                </span>
                <span className="text-muted-foreground">← الصواب:</span>
                <span className="rounded-lg bg-success/10 px-2 py-1 font-de font-semibold text-success" dir="ltr" lang="de">
                  {m.right}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{m.whyAr}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* التريكات */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Brain className="h-5 w-5 text-gold-strong" aria-hidden="true" />
            تريكات الحفظ (Eselsbrücken)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {data.eselsbruecken.map((trick, i) => (
              <li
                key={i}
                className="rounded-xl border border-gold/30 bg-gold/10 p-3 text-sm leading-relaxed"
              >
                💡 {trick}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* لقطة ثقافية */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Landmark className="h-5 w-5 text-primary" aria-hidden="true" />
            لقطة ثقافية: {data.culturalNote.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed text-muted-foreground">{data.culturalNote.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
