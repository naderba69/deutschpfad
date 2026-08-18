"use client";

import {Link2, MessageCircleQuestion, Sparkles} from "lucide-react";

import {SpeakButton} from "@/components/shared/speak-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type { Einfuehrung } from "@/types/lesson";

/**
 * 2) التمهيد وتنشيط المعرفة السابقة (Einführung)
 * — سؤال تحفيزي قبل عرض القاعدة (مبدأ التوليد قبل التصحيح) —
 */
export function EinfuehrungSection({ einfuehrung }: { einfuehrung: Einfuehrung }) {
  return (
    <div className="space-y-4">
      {/* السؤال التحفيزي */}
      <div className="rounded-2xl border border-gold/40 bg-gold/10 p-5">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-gold-foreground">
          <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
          فكّر قبل أن تقرأ القاعدة:
        </p>
        <p className="mt-2 text-lg font-semibold leading-relaxed">
          {einfuehrung.motivatingQuestionAr}
        </p>
        {einfuehrung.motivatingQuestionDe && (
          <p className="font-de mt-2 text-sm text-muted-foreground" dir="ltr" lang="de">
            {einfuehrung.motivatingQuestionDe}
          </p>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            لنبدأ معاً
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-relaxed text-muted-foreground">{einfuehrung.contextAr}</p>
          {einfuehrung.contextDe && (
            <p className="font-de text-sm text-muted-foreground" dir="ltr" lang="de">
              {einfuehrung.contextDe}
            </p>
          )}

          {einfuehrung.connectionToPreviousAr && (
            <p className="inline-flex items-start gap-2 rounded-xl border bg-muted/40 p-3 text-sm">
              <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {einfuehrung.connectionToPreviousAr}
            </p>
          )}

          {einfuehrung.activateVocabulary && einfuehrung.activateVocabulary.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-semibold text-muted-foreground">
                مفردات سنستعملها اليوم:
              </p>
              <div className="flex flex-wrap gap-2">
                {einfuehrung.activateVocabulary.map((v) => (
                  <span
                    key={v.de}
                    className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm"
                  >
                    <span className="font-de font-semibold" dir="ltr" lang="de">
                      {v.de}
                    </span>
                    <span className="text-muted-foreground">= {v.ar}</span>
                    <SpeakButton text={v.de} size="sm" className="h-6 w-6" />
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
