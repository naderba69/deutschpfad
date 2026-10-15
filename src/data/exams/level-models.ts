/**
 * ═══════════════════════════════════════════════════════════
 *  سجلّ النماذج التدريبية A1–B1 — مصدر واحد للصفحة والحارس
 *  لكل مستوى نموذج واحد على الأقل، وكل نموذج يحمل أجزاءه الأربعة
 *  (استماع · قراءة · كتابة · تحدث) وصوته. أُضيف النموذج الثاني لـ A1
 *  بعد أن صار للمشغّل بديل آلي معلَن: فالنموذج الجديد يُقرأ بنطق آلي
 *  إلى أن تُنتَج مقاطعه، والمتعلم يُخبَر بذلك بدل أن يسمع صمتاً.
 * ═══════════════════════════════════════════════════════════
 */
import { A1_HOEREN } from "@/data/exams/a1-hoeren";
import { A1_LESEN } from "@/data/exams/a1-lesen";
import { A1_SCHREIBEN } from "@/data/exams/a1-schreiben";
import { A1_SPRECHEN, type A1SpeakingPart } from "@/data/exams/a1-sprechen";
import { A1_MODEL2_HOEREN } from "@/data/exams/a1-model2-hoeren";
import { A1_MODEL2_LESEN } from "@/data/exams/a1-model2-lesen";
import { A1_MODEL2_SCHREIBEN } from "@/data/exams/a1-model2-schreiben";
import { A1_MODEL2_SPRECHEN } from "@/data/exams/a1-model2-sprechen";
import { A2_HOEREN } from "@/data/exams/a2-hoeren";
import { A2_LESEN } from "@/data/exams/a2-lesen";
import { A2_SCHREIBEN } from "@/data/exams/a2-schreiben";
import { A2_SPRECHEN } from "@/data/exams/a2-sprechen";
import { A2_MODEL2_HOEREN } from "@/data/exams/a2-model2-hoeren";
import { A2_MODEL2_LESEN } from "@/data/exams/a2-model2-lesen";
import { A2_MODEL2_SCHREIBEN } from "@/data/exams/a2-model2-schreiben";
import { A2_MODEL2_SPRECHEN } from "@/data/exams/a2-model2-sprechen";
import { B1_HOEREN } from "@/data/exams/b1-hoeren";
import { B1_LESEN } from "@/data/exams/b1-lesen";
import { B1_SCHREIBEN } from "@/data/exams/b1-schreiben";
import { B1_SPRECHEN } from "@/data/exams/b1-sprechen";
import { B1_MODEL2_HOEREN } from "@/data/exams/b1-model2-hoeren";
import { B1_MODEL2_LESEN } from "@/data/exams/b1-model2-lesen";
import { B1_MODEL2_SCHREIBEN } from "@/data/exams/b1-model2-schreiben";
import { B1_MODEL2_SPRECHEN } from "@/data/exams/b1-model2-sprechen";
import { LEVEL_AUDIO, LEVEL_EXAM_DATA, type ExamLevel } from "@/data/exams/level-audio";
import type { ExamAudioTrack } from "@/lib/tests/exam-audio";
import type { ExamHoerenTeil, ExamLesenTeil, ExamSchreibaufgabe } from "@/types/exam";

export interface ExamModel {
  /** معرّف فريد داخل المستوى (يُستخدم في العنوان وفي الحراسة) */
  id: string;
  /** اسم يظهر في الاختيار */
  label: string;
  /** حالة الصوت كما هي فعلاً — تُعرض للمتعلم قبل البدء */
  audioNoteAr: string;
  /**
   * مجلد تسجيلات التحدث — **فقط** للنماذج التي سُجِّلت جولاتها فعلاً.
   * يُترك فارغاً لأي نموذج بجولات مختلفة، وإلا شُغِّل تسجيل نموذج آخر بنصّ آخر
   * (المشغّل ينتقل للنطق الآلي بالنصّ الصحيح عند الغياب).
   */
  speakingAudioBase?: string;
  hoeren: ExamHoerenTeil[];
  lesen: ExamLesenTeil[];
  schreiben: ExamSchreibaufgabe[];
  sprechen: A1SpeakingPart[];
  audio: ExamAudioTrack[];
}

/** مقاطع بنطق آلي فقط (لا ملفات مُنتَجة بعد) — النص نفسه ينطقه المشغّل */
function ttsTracks(base: string, parts: ExamHoerenTeil[]): ExamAudioTrack[] {
  return parts.map((part) => ({
    base,
    files: [],
    fallbackText: part.audioText,
    maxPlays: part.allowRepeat ? 2 : 1,
  }));
}

/** النموذج الأول لكل مستوى — صوته مسجّل (LEVEL_AUDIO) */
function recordedModel(
  level: ExamLevel,
  parts: { hoeren: ExamHoerenTeil[]; lesen: ExamLesenTeil[]; schreiben: ExamSchreibaufgabe[]; sprechen: A1SpeakingPart[] },
): ExamModel {
  return {
    id: `${level}-1`,
    label: "النموذج 1 (صوت مُسجَّل)",
    audioNoteAr: "مقاطع الاستماع مسجّلة صوتياً، والجزآن 1 و3 يُشغَّلان مرتين.",
    speakingAudioBase: `/audio/speaking-${level.toLowerCase()}`,
    ...parts,
    audio: LEVEL_AUDIO[level],
  };
}

export const LEVEL_MODELS: Record<ExamLevel, ExamModel[]> = {
  A1: [
    recordedModel("A1", { hoeren: A1_HOEREN, lesen: A1_LESEN, schreiben: A1_SCHREIBEN, sprechen: A1_SPRECHEN }),
    {
      id: "A1-2",
      label: "النموذج 2 (نطق آلي)",
      audioNoteAr: "مقاطع هذا النموذج غير مسجّلة بعد — يُقرأ نصّ الاستماع بنطق آلي معلَن، والجزآن 1 و3 مرتين.",
      hoeren: A1_MODEL2_HOEREN,
      lesen: A1_MODEL2_LESEN,
      schreiben: A1_MODEL2_SCHREIBEN,
      sprechen: A1_MODEL2_SPRECHEN,
      audio: ttsTracks("/audio/exam-a1", A1_MODEL2_HOEREN),
    },
  ],
  A2: [
    recordedModel("A2", { hoeren: A2_HOEREN, lesen: A2_LESEN, schreiben: A2_SCHREIBEN, sprechen: A2_SPRECHEN }),
    {
      id: "A2-2",
      label: "النموذج 2 (نطق آلي)",
      audioNoteAr: "مقاطع هذا النموذج غير مسجّلة بعد — يُقرأ نصّ الاستماع بنطق آلي معلَن، والجزآن 1 و3 مرتين.",
      hoeren: A2_MODEL2_HOEREN,
      lesen: A2_MODEL2_LESEN,
      schreiben: A2_MODEL2_SCHREIBEN,
      sprechen: A2_MODEL2_SPRECHEN,
      audio: ttsTracks("/audio/exam-a2", A2_MODEL2_HOEREN),
    },
  ],
  B1: [
    recordedModel("B1", { hoeren: B1_HOEREN, lesen: B1_LESEN, schreiben: B1_SCHREIBEN, sprechen: B1_SPRECHEN }),
    {
      id: "B1-2",
      label: "النموذج 2 (نطق آلي)",
      audioNoteAr: "مقاطع هذا النموذج غير مسجّلة بعد — يُقرأ نصّ الاستماع بنطق آلي معلَن، والجزآن 1 و3 مرتين.",
      hoeren: B1_MODEL2_HOEREN,
      lesen: B1_MODEL2_LESEN,
      schreiben: B1_MODEL2_SCHREIBEN,
      sprechen: B1_MODEL2_SPRECHEN,
      audio: ttsTracks("/audio/exam-b1", B1_MODEL2_HOEREN),
    },
  ],
};

/** النموذج المطلوب أو الأول إن لم يوجد المعرّف */
export function examModel(level: ExamLevel, id?: string): ExamModel {
  const models = LEVEL_MODELS[level];
  return models.find((m) => m.id === id) ?? models[0];
}

/** أجزاء المستوى (للحارس وللتوافق) */
export { LEVEL_EXAM_DATA };
