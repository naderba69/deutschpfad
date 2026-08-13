"use client";

import {CheckCircle2} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type { Lernziel } from "@/types/lesson";

/**
 * 1) الأهداف التعليمية (Lernziele)
 */
export function LernzieleSection({ lernziele }: { lernziele: Lernziel[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
          ماذا ستتقن في نهاية هذا الدرس؟
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {lernziele.map((ziel, i) => (
            <li key={ziel.id} className="flex items-start gap-3 rounded-xl border bg-muted/20 p-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-de text-xs font-bold text-primary">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground">{ziel.ar}</p>
                <p className="font-de mt-0.5 text-sm text-muted-foreground" dir="ltr" lang="de">
                  {ziel.de}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
