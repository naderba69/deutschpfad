"use client";

import * as React from "react";
import {Loader2, Volume2} from "lucide-react";

import {Button} from "@/components/ui/button";
import {getPreferredRate} from "@/lib/preferences/audio";
import {waitForGermanVoice} from "@/lib/speech/voices";
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
  /** اسم وصول مستقل عند ضرورة إخفاء النص المرئي/المسموع قبل كشفه. */
  ariaLabel?: string;
  /** ملف صوت بشري مسجّل (مثل /audio/dialogues-a1/…mp3). إن تعذّر تشغيله يُستعمل صوت الجهاز. */
  audioSrc?: string;
}

/** المقطع الحالي — حتى لا يتداخل صوتان */
let currentClip: HTMLAudioElement | null = null;

/**
 * زر الاستماع — يولّد Web Speech API (SpeechSynthesis) صوتاً ألمانياً بطلب de-DE.
 * جودة الصوت واللكنة يعتمدان على الأصوات المتاحة في المتصفح والجهاز.
 */
export function SpeakButton({
  text,
  rate = 1,
  size = "icon",
  variant = "ghost",
  className,
  label,
  ariaLabel,
  audioSrc,
}: SpeakButtonProps) {
  const [speaking, setSpeaking] = React.useState(false);
  const [noVoice, setNoVoice] = React.useState(false);

  const speak = React.useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (audioSrc) {
        try {
          currentClip?.pause();
          const clip = new Audio(audioSrc);
          currentClip = clip;
          await clip.play();
          return;
        } catch {
          // لا يوجد ملف أو تعذّر التشغيل: نرجع إلى صوت الجهاز
        }
      }
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        setNoVoice(true);
        globalThis.setTimeout(() => setNoVoice(false), 3000);
        return;
      }

      // Firefox/بعض أنظمة الحاسوب قد يعرض أصواتاً إنجليزية أولاً ثم يحمّل الألمانية لاحقاً.
      // انتظر صوت de فعلياً ولا تنطق النص الألماني بصوت إنجليزي بديل.
      const germanVoice = await waitForGermanVoice();
      if (!germanVoice) {
        setNoVoice(true);
        globalThis.setTimeout(() => setNoVoice(false), 5000);
        return;
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      // تطبيق سرعة الاستماع المفضلة (إعداد عام) على السرعة الأساسية
      const pref = getPreferredRate();
      utterance.rate = Math.min(1.5, Math.max(0.5, rate * pref));
      utterance.pitch = 1;

      try {
        utterance.voice = germanVoice;
      } catch {
        // لا تسمح بصوت افتراضي قد يكون إنجليزياً إذا رفض المتصفح الصوت الألماني.
        setNoVoice(true);
        globalThis.setTimeout(() => setNoVoice(false), 5000);
        return;
      }

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [text, rate, audioSrc],
  );

  return (
    <div className="inline-flex items-center gap-1">
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={speak}
        aria-label={ariaLabel ?? `استمع: ${text}`}
        title={ariaLabel ?? `استمع: ${text}`}
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
          لا يوجد صوت ألماني مثبت على الجهاز — ثبّت حزمة صوت ألماني ثم أعد المحاولة
        </span>
      )}
    </div>
  );
}
