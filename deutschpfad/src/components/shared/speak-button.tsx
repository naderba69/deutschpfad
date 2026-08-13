"use client";

import * as React from "react";
import {Loader2, Volume2} from "lucide-react";

import {Button} from "@/components/ui/button";
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

  const speak = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = rate;
      utterance.pitch = 1;

      // اختيار صوت ألماني إن وجد
      const voices = window.speechSynthesis.getVoices();
      const germanVoice =
        voices.find((v) => v.lang === "de-DE") ?? voices.find((v) => v.lang.startsWith("de"));
      if (germanVoice) utterance.voice = germanVoice;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [text, rate],
  );

  return (
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
  );
}
