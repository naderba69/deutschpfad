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
    // بدء تحميل الأصوات فوراً (يُستدعى مرة واحدة)
    initVoices(() => setReady(true));
    // تسخين فعلي: جملة صامتة (volume 0) لتهيئة محرك النطق
    try {
      const t = window.setTimeout(() => {
        if ("speechSynthesis" in window) {
          const u = new SpeechSynthesisUtterance(" ");
          u.lang = "de-DE";
          u.volume = 0;
          window.speechSynthesis.speak(u);
        }
      }, 800);
      return () => window.clearTimeout(t);
    } catch {
      /* تجاهل */
    }
  }, []);

  // لا يظهر أي شيء — مكوّن خلفي
  return <span className="hidden" aria-hidden="true">{ready ? "✓" : ""}</span>;
}
