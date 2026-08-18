import type { ErrorTypeCode, ExerciseType } from "@/types/lesson";

/**
 * الأحداث التحليلية — تُسجَّل في IndexedDB (مخزن events)
 * — تغذي لوحة التحكم والمراجعة الذكية (المرحلة 12) —
 */
export type AnalyticsEvent =
  | {
      id?: number;
      type: "exercise-result";
      ts: number;
      exerciseId: string;
      exerciseType: ExerciseType;
      correct: boolean;
      points: number;
      errorType?: ErrorTypeCode;
    }
  | {
      id?: number;
      type: "pronunciation-score";
      ts: number;
      target: string;
      score: number;
    }
  | {
      id?: number;
      type: "self-pronunciation-rating";
      ts: number;
      target: string;
      rating: 0 | 0.5 | 1;
    }
  | {
      id?: number;
      type: "skill-result";
      ts: number;
      /** المهارة: الاستماع/القراءة/التحدث/الكتابة/القواعد/المفردات */
      skill: string;
      correct: boolean;
    }
  | {
      id?: number;
      type: "lesson-completed";
      ts: number;
      lessonId: string;
      unitId: string;
    }
  | {
      id?: number;
      type: "lesson-view";
      ts: number;
      lessonId: string;
    }
  | {
      id?: number;
      type: "review";
      ts: number;
      cardId: string;
      quality: number;
    }
  | {
      id?: number;
      type: "test-result";
      ts: number;
      result: import("@/types/test").TestResult;
    }
  | {
      id?: number;
      type: "session-minute";
      ts: number;
      /** عدد الدقائق في هذه النبضة (عادة 1) */
      minutes: number;
    };

/** إحصائيات مجمّعة من الأحداث */
export interface EventStats {
  totalEvents: number;
  exercisesAnswered: number;
  exercisesCorrect: number;
  accuracyPct: number;
  pronunciationScores: number[];
  pronunciationAvg: number | null;
  reviewsCount: number;
  lessonsCompleted: number;
  errorTypeCounts: Record<string, number>;
  xp: number;
}
