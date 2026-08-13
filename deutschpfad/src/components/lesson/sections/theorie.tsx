"use client";

import {AlertCircle, Brain, CheckCircle2, GitCompare, Lightbulb, XCircle} from "lucide-react";

import {ExplainAgain} from "@/components/lesson/explain-again";
import {SpeakButton} from "@/components/shared/speak-button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type { TheoryBlock } from "@/types/lesson";

/** جدول التصريف مع أزرار نطق للمحتوى الألماني */
function ConjugationTable({ table }: { table: NonNullable<TheoryBlock["table"]> }) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-background">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/40">
            {table.columns.map((col) => (
              <th key={col} className="px-4 py-2.5 text-start font-bold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="px-4 py-2.5 font-semibold">{row.label}</td>
              {row.cells.map((cell, j) => (
                <td key={j} className="font-de px-4 py-2.5" dir="ltr" lang="de">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** الأمثلة المترجمة مع نطق */
function Examples({ examples }: { examples: TheoryBlock["examples"] }) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-muted-foreground">أمثلة من سياقات واقعية:</p>
      <ul className="space-y-2">
        {examples.map((ex, i) => (
          <li key={i} className="flex items-start justify-between gap-3 rounded-xl border bg-muted/20 p-3">
            <div>
              <p className="font-de font-semibold" dir="ltr" lang="de">
                {ex.de}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{ex.ar}</p>
            </div>
            <SpeakButton text={ex.de} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** أخطاء شائعة: خاطئ → صحيح مع السبب */
function CommonMistakes({ mistakes }: { mistakes: TheoryBlock["commonMistakes"] }) {
  return (
    <div>
      <p className="mb-2 text-sm font-bold text-muted-foreground">
        أخطاء يقع فيها المتعلم العربي تحديداً:
      </p>
      <ul className="space-y-3">
        {mistakes.map((m, i) => (
          <li key={i} className="rounded-xl border bg-background p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-lg bg-destructive/10 px-2 py-1 font-de text-sm text-destructive line-through decoration-2" dir="ltr" lang="de">
                {m.wrong}
              </span>
              <XCircle className="h-4 w-4 text-destructive" aria-hidden="true" />
              <span className="inline-flex items-center gap-1 rounded-lg bg-success/10 px-2 py-1 font-de text-sm font-semibold text-success" dir="ltr" lang="de">
                {m.right}
              </span>
              <CheckCircle2 className="h-4 w-4 text-success" aria-hidden="true" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{m.whyAr}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** كتلة شرح واحدة — تتبع النمط الإلزامي ذي 9 نقاط */
export function TheoryBlockView({ block, lessonId }: { block: TheoryBlock; lessonId: string }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="text-lg leading-snug">
          <span>{block.titleAr}</span>
          <span className="font-de mt-1 block text-base font-semibold text-primary" dir="ltr" lang="de">
            {block.titleDe}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        {/* الشرح */}
        <div>
          <p className="leading-relaxed">{block.explanationAr}</p>
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              <span className="font-bold">لماذا؟ </span>
              {block.whyAr}
            </p>
          </div>
        </div>

        {/* الجدول */}
        {block.table && <ConjugationTable table={block.table} />}

        {/* الأمثلة */}
        <Examples examples={block.examples} />

        {/* المقارنة مع العربية */}
        <div className="flex items-start gap-2 rounded-xl border bg-muted/30 p-3 text-sm leading-relaxed">
          <GitCompare className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <p>
            <span className="font-bold">مقارنة مع العربية: </span>
            {block.comparisonWithArabic}
          </p>
        </div>

        {/* تريك الحفظ */}
        <div className="flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm leading-relaxed">
          <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gold-foreground" aria-hidden="true" />
          <p>
            <span className="font-bold">تريك حفظ (Eselsbrücke): </span>
            {block.eselsbruecke}
          </p>
        </div>

        {/* الأخطاء الشائعة */}
        {block.commonMistakes.length > 0 && <CommonMistakes mistakes={block.commonMistakes} />}

        {/* مقارنة بقاعدة مشابهة */}
        {block.relatedRuleComparison && (
          <div className="flex items-start gap-2 rounded-xl border border-indigo-300/50 bg-indigo-500/5 p-3 text-sm leading-relaxed">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" aria-hidden="true" />
            <p>
              <span className="font-bold">{block.relatedRuleComparison.title}: </span>
              {block.relatedRuleComparison.content}
            </p>
          </div>
        )}

        {/* شرح بديل عند «لم أفهم» (ميزة ذكية تُخفى بدون مفاتيح) */}
        <ExplainAgain
          lessonId={lessonId}
          blockId={block.id}
          titleAr={block.titleAr}
          titleDe={block.titleDe}
          explanationAr={block.explanationAr}
        />
      </CardContent>
    </Card>
  );
}

/** 3) قسم الشرح النظري */
export function TheorieSection({ blocks, lessonId }: { blocks: TheoryBlock[]; lessonId: string }) {
  return (
    <div className="space-y-5">
      {blocks.map((block) => (
        <TheoryBlockView key={block.id} block={block} lessonId={lessonId} />
      ))}
    </div>
  );
}
