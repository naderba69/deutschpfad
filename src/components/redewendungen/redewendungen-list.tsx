"use client";

import {SpeakButton} from "@/components/shared/speak-button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {REDEWENDUNGEN} from "@/data/supplemental/content";

/**
 * قائمة التعابير — ترجمة حرفية + معنى حقيقي + مثال
 */
export function RedewendungenList() {
  return (
    <div className="space-y-3">
      {REDEWENDUNGEN.map((r, i) => (
        <Card key={i} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2">
                  <span className="font-de text-lg font-bold" dir="ltr" lang="de">
                    {r.de}
                  </span>
                  <Badge variant="outline" className="font-de text-[11px]">
                    {r.level}
                  </Badge>
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground" dir="ltr" lang="de">
                  {r.literal}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary">= {r.meaning}</p>
                <div className="mt-2 rounded-lg bg-muted/30 p-2.5">
                  <p className="font-de text-sm" dir="ltr" lang="de">
                    {r.example}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{r.exampleAr}</p>
                </div>
              </div>
              <SpeakButton text={r.de} variant="outline" size="sm" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
