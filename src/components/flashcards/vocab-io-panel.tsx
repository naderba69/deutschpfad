"use client";

import * as React from "react";
import {BookOpen, Download, Upload} from "lucide-react";

import {Button} from "@/components/ui/button";
import {CORE_BANK} from "@/data/srs/core-bank";
import {exportCustomVocab, importVocabItems} from "@/lib/srs/flashcard-service";
import {parseVocabFile} from "@/lib/srs/vocab-file";

/**
 * ملف المفردات: تصدير مفرداتك اليدوية إلى JSON، واستيراد ملف مثله،
 * وإضافة البنك الأساسي (80 بطاقة). الاستيراد لا يكرر بطاقة موجودة.
 */
export function VocabIOPanel({onChanged}: {onChanged?: () => void}) {
  const [message, setMessage] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const fileRef = React.useRef<HTMLInputElement>(null);

  const exportFile = async () => {
    setBusy(true);
    try {
      const file = await exportCustomVocab();
      const blob = new Blob([JSON.stringify(file, null, 2)], {type: "application/json"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `deutschpfad-vocab-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setMessage(`صُدّرت ${file.items.length} مفردة.`);
    } catch {
      setMessage("تعذّر التصدير. حاول مرة أخرى.");
    } finally {
      setBusy(false);
    }
  };

  const importFile = async (f: File) => {
    setBusy(true);
    try {
      const parsed = parseVocabFile(await f.text());
      if (!parsed.ok) {
        setMessage(parsed.error);
        return;
      }
      const r = await importVocabItems(parsed.items, "vocab");
      const skipNote = parsed.skipped > 0 ? ` وتخطّيت ${parsed.skipped} سطراً غير صالح.` : ".";
      setMessage(`أُضيفت ${r.added} مفردة، وكانت ${r.existing} موجودة مسبقاً${skipNote}`);
      onChanged?.();
    } catch {
      setMessage("تعذّر الاستيراد. لم يُضف شيء.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const addCoreBank = async () => {
    setBusy(true);
    try {
      const r = await importVocabItems([...CORE_BANK], "core");
      setMessage(`أُضيفت ${r.added} بطاقة من البنك الأساسي، وكانت ${r.existing} موجودة مسبقاً.`);
      onChanged?.();
    } catch {
      setMessage("تعذّرت إضافة البنك الأساسي.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-3 rounded-xl border bg-card p-5">
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => void exportFile()} disabled={busy}>
          <Download className="ms-1 h-4 w-4" aria-hidden="true" />
          تصدير مفرداتي (JSON)
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={busy}>
          <Upload className="ms-1 h-4 w-4" aria-hidden="true" />
          استيراد ملف JSON
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => void addCoreBank()} disabled={busy}>
          <BookOpen className="ms-1 h-4 w-4" aria-hidden="true" />
          أضف البنك الأساسي (80 بطاقة)
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          aria-label="اختر ملف مفردات JSON"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void importFile(f);
          }}
        />
      </div>
      <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
