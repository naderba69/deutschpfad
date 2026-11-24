/**
 * ═══════════════════════════════════════════════════════════
 *  المراجع الرسمية لأعداد الكلمات وأوزان الكتابة
 *
 *  كل مدخل له حالة تحقق:
 *   · verified  : رأيت النص في وثيقة رسمية (goethe.de / telc)
 *   · partial   : جزء من الأرقام من وثيقة رسمية، والباقي من مصدر ثانوي
 *   · unverified: لا يوجد رقم رسمي مؤكد بعد — لا يُحسب فيه أي فحص
 *
 *  ملاحظة: مهام التدريب في src/data/writing-path لها حدودها الخاصة
 *  (minWords) وليست أرقام امتحان؛ هذا الملف مرجع فقط.
 * ═══════════════════════════════════════════════════════════
 */
import type {LevelCode} from "@/types/curriculum";

export type VerificationStatus = "verified" | "partial" | "unverified";

export interface OfficialWritingRef {
  exam: "Goethe" | "telc";
  status: VerificationStatus;
  /** وصف مختصر بالعربية للمرجع */
  summary: string;
  /** المصدر الذي أُخذت منه الأرقام */
  source: string;
}

export const OFFICIAL_WRITING: Record<LevelCode, OfficialWritingRef> = {
  A1: {
    exam: "Goethe",
    status: "unverified",
    summary: "لا يوجد رقم رسمي مؤكد لعدد الكلمات بعد.",
    source: "لم يُتحقق من وثيقة رسمية",
  },
  A2: {
    exam: "Goethe",
    status: "verified",
    summary:
      "الجزء 1 (رسالة قصيرة): 20–30 كلمة. الجزء 2 (بريد): 30–40 كلمة. أقل من 10 كلمات في الجزء 1 أو 15 في الجزء 2 تعني صفراً للمهمة.",
    source: "goethe.de — A2 Modellsatz Erwachsene (Schreiben)",
  },
  B1: {
    exam: "Goethe",
    status: "partial",
    summary:
      "المهمة 1 و2: حوالي 80 كلمة، 10 نقاط لكل معيار. المهمة 3: حوالي 40 كلمة، نقاط 4/4/6/6. النجاح 60 من 100. الأرقام الخاصة بالمهمتين 2 و3 من مصادر ثانوية.",
    source: "bfu.goethe.de — B1 Modellsatz (المهمة 1 والنقاط)؛ الباقي ثانوي",
  },
  B2: {
    exam: "Goethe",
    status: "unverified",
    summary: "المصادر متعارضة: نماذج مختلفة تعطي أرقاماً مختلفة. لا فحص قبل التحقق من النموذج الحالي.",
    source: "لم يُتحقق من النموذج الحالي",
  },
};

/** telc B1 (وليس مستوى بعينه في الجدول): ثلاثة معايير، كل معيار A=5 B=3 C=1 D=0، الناتج × 3 = 45 */
export const TELC_B1_WRITING: OfficialWritingRef & {weights: {A: number; B: number; C: number; D: number}; multiplier: number; maxPoints: number; passPoints: number} = {
  exam: "telc",
  status: "partial",
  summary:
    "مهمة واحدة (رسالة شخصية أو شبه رسمية) بأربع نقاط محتوى. ثلاثة معايير: A=5 B=3 C=1 D=0، ثم يُضرب المجموع × 3 = 45 نقطة. النجاح الكتابي 135 من 225. عدد الكلمات غير محدد في وثيقة telc التي رأيتها.",
  source: "telc.net — B1 Übungstest 1 (Bewertungskriterien)؛ عدد الكلمات من مصادر ثانوية",
  weights: {A: 5, B: 3, C: 1, D: 0},
  multiplier: 3,
  maxPoints: 45,
  passPoints: 135,
};

/** جملة عرض موحّدة لحالة التحقق */
export function statusLabel(s: VerificationStatus): string {
  if (s === "verified") return "مؤكد من وثيقة رسمية";
  if (s === "partial") return "مؤكد جزئياً";
  return "غير مؤكد بعد";
}
