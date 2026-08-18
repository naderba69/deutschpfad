"use client";

import * as React from "react";
import {KeyRound, Trash2} from "lucide-react";

import {Button} from "@/components/ui/button";

/**
 * ═══════════════════════════════════════════════════════════
 *  مفتاحك الخاص للذكاء الاصطناعي (BYOK) — إصلاح P0-02
 *  · يُحفظ محلياً فقط على جهازك (dp:llm:user-key)
 *  · يُستدعى المزود (Gemini) مباشرة من متصفحك — لا يمر بخادم المنصة
 *  · لا يُصدَّر في النسخة الاحتياطية أبداً
 *  · بدون مفتاح: الميزات الذكية مخفية — صاحب المنصة لا يدفع شيئاً
 * ═══════════════════════════════════════════════════════════
 */
export function ByokCard() {
  const [key, setKey] = React.useState("");
  const [saved, setSaved] = React.useState(false);
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem("dp:llm:user-key");
      if (stored) {
        setKey("••••••••" + stored.slice(-4));
        setSaved(true);
      }
    } catch {
      /* تجاهل */
    }
  }, []);

  const save = () => {
    const value = key.trim();
    if (!value || value.startsWith("••")) return;
    try {
      window.localStorage.setItem("dp:llm:user-key", value);
      setSaved(true);
      setKey("••••••••" + value.slice(-4));
      setStatus("✓ حُفظ مفتاحك محلياً — الميزات الذكية مفعّلة الآن");
      window.dispatchEvent(new Event("llm-key-changed"));
    } catch {
      setStatus("⚠️ تعذّر الحفظ");
    }
  };

  const remove = () => {
    try {
      window.localStorage.removeItem("dp:llm:user-key");
      setKey("");
      setSaved(false);
      setStatus("حُذف المفتاح — الميزات الذكية ستُخفى");
      window.dispatchEvent(new Event("llm-key-changed"));
    } catch {
      /* تجاهل */
    }
  };

  return (
    <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/[0.03] p-4">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <KeyRound className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-extrabold">🔑 مفتاحك الخاص للذكاء الاصطناعي (اختياري)</h4>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            أضف مفتاح Gemini API خاصاً بك لتفعيل المعلّم الذكي — يُحفظ على جهازك فقط،
            وتُجرى المكالمات من متصفحك مباشرة (المنصة لا ترى مفتاحك ولا تدفع شيئاً).
            بدون مفتاح تبقى الميزات الأساسية مجانية بالكامل.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="password"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
            setStatus("");
          }}
          placeholder="AIza… (مفتاح Gemini API)"
          dir="ltr"
          className="h-10 flex-1 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring"
        />
        {saved ? (
          <Button variant="destructive" size="sm" className="shrink-0 gap-1.5" onClick={remove}>
            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
            حذف المفتاح
          </Button>
        ) : (
          <Button size="sm" className="shrink-0 gap-1.5" onClick={save} disabled={!key.trim() || key.startsWith("••")}>
            حفظ محلياً
          </Button>
        )}
      </div>

      {status && <p className="text-xs font-bold text-primary">{status}</p>}
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        ⚠️ المفتاح مخزّن في متصفحك فقط — لا يُرسل لأي خادم ولا يُضمَّن في النسخة الاحتياطية.
        احصل على مفتاح مجاني من aistudio.google.com (لا يتطلب بطاقة دفع).
      </p>
    </div>
  );
}
