"use client";

import * as React from "react";
import {PlusCircle} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {addManualCard} from "@/lib/srs/flashcard-service";
import type { LevelCode } from "@/types/curriculum";

const LEVELS: LevelCode[] = ["A1", "A2", "B1", "B2"];

/**
 * إضافة بطاقة يدوية إلى حقيبة المراجعة
 */
export function AddCardForm({ onAdded }: { onAdded?: () => void }) {
  const [de, setDe] = React.useState("");
  const [ar, setAr] = React.useState("");
  const [example, setExample] = React.useState("");
  const [exampleAr, setExampleAr] = React.useState("");
  const [level, setLevel] = React.useState<LevelCode>("A1");
  const [saving, setSaving] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!de.trim() || !ar.trim()) return;
    setSaving(true);
    await addManualCard({
      de: de.trim(),
      ar: ar.trim(),
      example: example.trim() || undefined,
      exampleAr: exampleAr.trim() || undefined,
      level,
    });
    setSaving(false);
    setDone(true);
    setDe("");
    setAr("");
    setExample("");
    setExampleAr("");
    onAdded?.();
    setTimeout(() => setDone(false), 2500);
  };

  return (
    <form onSubmit={submit} className="space-y-4 rounded-xl border bg-card p-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="card-de">الكلمة الألمانية *</Label>
          <Input
            id="card-de"
            value={de}
            onChange={(e) => setDe(e.target.value)}
            dir="ltr"
            lang="de"
            placeholder="z.B. der Apfel"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="card-ar">المعنى بالعربية *</Label>
          <Input
            id="card-ar"
            value={ar}
            onChange={(e) => setAr(e.target.value)}
            placeholder="مثال: التفاحة"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="card-example">جملة مثال (اختياري)</Label>
          <Input
            id="card-example"
            value={example}
            onChange={(e) => setExample(e.target.value)}
            dir="ltr"
            lang="de"
            placeholder="Ich esse einen Apfel."
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="card-example-ar">ترجمة المثال (اختياري)</Label>
          <Input
            id="card-example-ar"
            value={exampleAr}
            onChange={(e) => setExampleAr(e.target.value)}
            placeholder="آكل تفاحة."
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>المستوى</Label>
        <div className="flex gap-1.5" role="radiogroup" aria-label="مستوى البطاقة">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              role="radio"
              aria-checked={level === lvl}
              onClick={() => setLevel(lvl)}
              className={
                level === lvl
                  ? "rounded-lg bg-primary px-3 py-1.5 font-de text-xs font-bold text-primary-foreground"
                  : "rounded-lg border px-3 py-1.5 font-de text-xs font-bold text-muted-foreground hover:border-primary/50"
              }
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={saving || !de.trim() || !ar.trim()} className="gap-1.5">
          <PlusCircle className="h-4 w-4" aria-hidden="true" />
          {saving ? "جارٍ الحفظ…" : "أضف البطاقة"}
        </Button>
        {done && <span className="text-sm font-semibold text-success">أُضيفت بنجاح ✓</span>}
      </div>
    </form>
  );
}
