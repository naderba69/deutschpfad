"use client";

import {Globe} from "lucide-react";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type {CultureNote} from "@/types/lesson";

/**
 * 8) الثقافة والسياق (Landeskunde): لماذا نقول هذه العبارة في هذا الموقف؟
 */
export function LandeskundeSection({notes}: {notes: CultureNote[]}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
          السياق الألماني
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">
          اللغة تتبع عادات الناس. هذه الملاحظات تشرح متى نستعمل كل عبارة، وهي عادات عامة تختلف من شخص لآخر.
        </p>
        {notes.map((note) => (
          <div key={note.titleAr} className="rounded-xl border bg-muted/30 p-4">
            <h3 className="font-bold">{note.titleAr}</h3>
            <p className="mt-1 leading-relaxed text-muted-foreground">{note.bodyAr}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
