"use client";

import * as React from "react";

import {LangDe} from "@/components/shared/lang-de";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {GERMAN_KEYS, insertAtSelection} from "@/lib/srs/typing-keys";
import {reviewCardByTyping} from "@/lib/srs/flashcard-service";
import type {TypedGrade} from "@/lib/srs/ebbinghaus";
import type {Sm2CardData} from "@/types/srs";

interface TypedAnswerPanelProps {
  card: Sm2CardData;
  /** يُستدعى عند الضغط على «التالي» بعد تسجيل النتيجة */
  onDone: (lapse: boolean) => void;
}

/**
 * وضع الكتابة: يكتب المتعلم الكلمة الألمانية مع مادتها، فتُحسب الدقة
 * من المسافة بين الكتابة والهدف، وتُخصم عقوبة المادة تلقائياً.
 */
export function TypedAnswerPanel({card, onDone}: TypedAnswerPanelProps) {
  const [value, setValue] = React.useState("");
  const [grade, setGrade] = React.useState<TypedGrade | null>(null);
  const [busy, setBusy] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const insertKey = (ch: string) => {
    const el = inputRef.current;
    const start = el?.selectionStart ?? value.length;
    const end = el?.selectionEnd ?? value.length;
    const next = insertAtSelection(value, start, end, ch);
    setValue(next.value);
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(next.cursor, next.cursor);
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (grade || busy || value.trim() === "") return;
    setBusy(true);
    const res = await reviewCardByTyping(card.id, value);
    setBusy(false);
    if (res) setGrade(res.grade);
  };

  const percent = grade ? Math.round(grade.accuracy * 100) : 0;

  return (
    <div className="space-y-3">
      <form onSubmit={submit} className="space-y-2">
        <label htmlFor="typed-answer" className="block text-sm font-semibold">
          اكتب الكلمة الألمانية مع مادتها (der / die / das):
        </label>
        <Input
          id="typed-answer"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={grade !== null}
          dir="ltr"
          lang="de"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder="die Zahl"
          className="font-de text-lg"
        />

        {/* لوحة الأحرف الألمانية */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="أحرف ألمانية">
          {GERMAN_KEYS.map((ch) => (
            <Button
              key={ch}
              type="button"
              variant="outline"
              size="sm"
              disabled={grade !== null}
              onClick={() => insertKey(ch)}
              className="font-de min-w-[2.5rem]"
            >
              {ch}
            </Button>
          ))}
        </div>

        {grade === null && (
          <Button type="submit" disabled={busy || value.trim() === ""} className="w-full">
            تحقّق
          </Button>
        )}
      </form>

      {grade && (
        <div className="space-y-2 rounded-xl border bg-muted/30 p-4 text-sm" role="status">
          <p className="font-bold">
            دقتك: <span className="font-de text-primary">{percent}%</span>
            {grade.lapse ? " — تحتاج مراجعة قريبة (بعد 10 دقائق)" : " — تذكّر جيد"}
          </p>
          {!grade.articleOk && (
            <p className="text-destructive">المادة ليست صحيحة أو ناقصة.</p>
          )}
          <p>
            الإجابة الصحيحة: <LangDe>{card.de}</LangDe>
          </p>
          <Button className="w-full" onClick={() => onDone(grade.lapse)}>
            التالي
          </Button>
        </div>
      )}
    </div>
  );
}
