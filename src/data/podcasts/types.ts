import type { LevelCode } from "@/types/curriculum";

export interface PodcastQuestion {
  de: string;
  ar: string;
  options: { text: string; ar: string; correct: boolean; explanation?: string }[];
}

export interface PodcastEpisode {
  id: string;
  level: LevelCode;
  title: string;
  titleAr: string;
  emoji: string;
  /** النص المسموع (يُقرأ بـ TTS) */
  script: string;
  scriptAr: string;
  /** تنبيه تحريري عربي عند الحاجة إلى بيان حدود الادعاءات أو خيالها */
  contentNoteAr?: string;
  questions: PodcastQuestion[];
}

/**
 * أنواع البودكاست — فُصلت عن الحلقات في الدفعة 61 لاحترام سقف حجم الملفات،
 * حتى تُقسَّم الحلقات نفسها إلى ملفين بلا تكرار للأنواع.
 */
