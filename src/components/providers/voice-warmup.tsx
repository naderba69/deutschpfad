"use client";

/**
 * تسخين الأصوات (Voice Warm-up) — يُستدعى عند التحميل الأول
 * حتى يكون النطق الألماني جاهزاً فوراً عند أول نقرة "استمع"
 * (دون تأخير تحميل الأصوات غير المتزامن).
 */
import * as React from "react";

import {initVoices} from "@/lib/speech/voices";

export function VoiceWarmup() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // بدء تحميل الأصوات فوراً وتحرير مستمع voiceschanged عند إزالة المكوّن.
    const stopListening = initVoices(() => setReady(true));
    const timer = window.setTimeout(() => {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(" ");
        utterance.lang = "de-DE";
        utterance.volume = 0;
        window.speechSynthesis.speak(utterance);
      }
    }, 800);
    return () => {
      window.clearTimeout(timer);
      stopListening();
    };
  }, []);

  // لا يظهر أي شيء — مكوّن خلفي
  return <span className="hidden" aria-hidden="true">{ready ? "✓" : ""}</span>;
}
