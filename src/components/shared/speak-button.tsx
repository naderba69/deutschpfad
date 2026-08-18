"use client";

import * as React from "react";
import {Loader2, Volume2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {getPreferredRate} from "@/lib/preferences/audio";
import {cn} from "@/lib/utils";

interface SpeakButtonProps {
  /** النص الألماني المراد نطقه */
  text: string;
  /** سرعة النطق (0.75 = بطيء، 1 = عادي، 1.25 = سريع) */
  rate?: number;
  /** عنصر تحكم بالحجم */
  size?: "sm" | "default" | "lg" | "icon";
  variant?: "ghost" | "outline" | "default" | "gold";
  className?: string;
  label?: string;
  autoLabel?: boolean;
}

/**
 * زر النطق — Web Speech API (SpeechSynthesis) بصوت ألماني de-DE
 * (النسخة الأساسية — التقييم الكامل للكلام في المرحلة 3)
 */
export function SpeakButton({
  text,
  rate = 1,
  size = "icon",
  variant = "ghost",
  className,
  label,
}: SpeakButtonProps) {
  const [speaking, setSpeaking] = React.useState(false);
  const [noVoice, setNoVoice] = React.useState(false);

  const speak = React.useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        setNoVoice(true);
        globalThis.setTimeout(() => setNoVoice(false), 3000);
        return;
      }

      // ═══ إصلاح «الاستماع الصامت»: بعض المتصفحات تُحمّل أصوات النطق
      // متأخراً (voiceschanged) أو لا تملكها أصلاً. ننتظر لحظة قصيرة ثم
      // نُخبر المستخدم بوضوح بدل الصمت التام ═══
      let voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        const ready = await new Promise<boolean>((resolve) => {
          const timer = globalThis.setTimeout(() => resolve(window.speechSynthesis.getVoices().length > 0), 1500);
          window.speechSynthesis.onvoiceschanged = () => {
            globalThis.clearTimeout(timer);
            resolve(window.speechSynthesis.getVoices().length > 0);
          };
        });
        if (!ready) {
          setNoVoice(true);
          globalThis.setTimeout(() => setNoVoice(false), 3000);
          return;
        }
        voices = window.speechSynthesis.getVoices();
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      // تطبيق سرعة الاستماع المفضلة (إعداد عام) على السرعة الأساسية
      const pref = getPreferredRate();
      utterance.rate = Math.min(1.5, Math.max(0.5, rate * pref));
      utterance.pitch = 1;

      // اختيار صوت ألماني إن وجد — مع حماية: لو رفض المتصفح الكائن
      // (قد يرمي خطأ في بعض البيئات) نكمل بالصوت الافتراضي بدل الانهيار
      const germanVoice =
        voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.startsWith("de"));
      if (germanVoice) {
        try {
          utterance.voice = germanVoice;
        } catch {
          /* صوت افتراضي */
        }
      }

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [text, rate],
  );

  return (
    <div className="inline-flex items-center gap-1">
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={speak}
        aria-label={`استمع: ${text}`}
        title={`استمع: ${text}`}
        className={cn("shrink-0", className)}
      >
        {speaking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
        {label ? <span className="text-xs">{label}</span> : null}
      </Button>
      {noVoice && (
        <span
          className="max-w-40 rounded-md border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[9px] font-bold leading-tight text-gold-strong"
          role="status"
        >
          لا يتوفر صوت نطق في هذا المتصفح — جرّب Chrome أو فعّل أصوات ألمانية من إعدادات الجهاز
        </span>
      )}
    </div>
  );
}
