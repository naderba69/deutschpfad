"use client";

import {AiAskTeacher, AiCefrAssessment} from "@/components/ai/ask-teacher";
import {AiContextTranslator} from "@/components/ai/context-translator";
import {AiExerciseGenerator} from "@/components/ai/exercise-generator";
import {AiGoetheWriter} from "@/components/ai/goethe-writer";
import {AiSentenceGenerator} from "@/components/ai/sentence-generator";
import {AiStoryGenerator} from "@/components/ai/story-generator";
import {AiVoiceTeacher} from "@/components/ai/voice-teacher";
import {AiTestAnalysis} from "@/components/ai/test-analysis";
import {AiWeeklyReport} from "@/components/ai/weekly-report";
import {AiWritingCorrector} from "@/components/ai/writing-corrector";
import {useLLM} from "@/components/providers/llm-provider";
import {ZapOff} from "lucide-react";

/**
 * صفحة الأدوات الذكية — تُخفى تلقائياً عند غياب مفاتيح LLM
 */
export function AiToolsClient() {
  const { isConfigured } = useLLM();

  if (!isConfigured) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border bg-muted/20 p-10 text-center">
        <ZapOff className="mx-auto h-12 w-12 text-muted-foreground" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-extrabold">الأدوات الذكية غير مفعّلة بعد</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          أضف مفتاحاً واحداً على الأقل (GEMINI_API_KEY أو GROQ_API_KEY أو OPENROUTER_API_KEY)
          في <code dir="ltr" className="font-de">.env.local</code> وأعد تشغيل الخادم — وستظهر
          كل الأدوات الذكية هنا فوراً. المنصة تعمل بالكامل بدونها.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <AiAskTeacher />
      {/* المعلم الصوتي (جديد) */}
      <AiVoiceTeacher />
      {/* مقيّم الكتابة بمعايير غوته الرسمية (جديد) */}
      <AiGoetheWriter />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AiWritingCorrector />
        <AiCefrAssessment />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AiExerciseGenerator />
        <AiSentenceGenerator />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AiStoryGenerator />
        <AiContextTranslator />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AiTestAnalysis />
        <AiWeeklyReport />
      </div>
    </div>
  );
}
