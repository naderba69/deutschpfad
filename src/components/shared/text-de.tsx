"use client";

import * as React from "react";
import {Volume2} from "lucide-react";

/**
 * ═══════════════════════════════════════════════════════════
 *  TextDe — نص ألماني قابل للنقر للنطق (Web Speech API)
 *  يضيف زر صوت صغير بجانب أي جملة/كلمة ألمانية.
 *  يستخدم أصوات الجهاز de-DE — لا يحتاج أي مفتاح LLM.
 *  · إن لم يوجد صوت ألماني في الجهاز: يظهر تنبيه إرشادي.
 * ═══════════════════════════════════════════════════════════
 */
export function TextDe({ text, className }: { text: string; className?: string }) {
  const [state, setState] = React.useState<"idle" | "playing" | "unsupported">("idle");

  const speak = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setState("unsupported");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const gv = voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.startsWith("de"));
    if (gv) u.voice = gv;
    u.onstart = () => setState("playing");
    u.onend = () => setState("idle");
    u.onerror = () => setState("idle");
    window.speechSynthesis.speak(u);
  };

  return (
    <span className={`inline-flex items-center gap-1.5 align-middle ${className ?? ""}`}>
      <button
        type="button"
        onClick={speak}
        aria-label={`استمع: ${text}`}
        title={state === "unsupported" ? "متصفحك لا يدعم النطق — استخدم Chrome/Edge" : "اضغط للاستماع"}
        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
          state === "playing"
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary"
        }`}
      >
        <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      <span className="font-de" dir="ltr">{text}</span>
    </span>
  );
}
