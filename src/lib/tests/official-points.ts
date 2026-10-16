/**
 * ═══════════════════════════════════════════════════════════
 *  النقاط الرسمية للامتحانات — تصريح صريح بدل «نسبة فقط»
 *
 *  العطب المقيس (تدقيق 2026-10-16): شاشة النتيجة كانت تعرض
 *  «{صحيح} من {مجموع} ({نسبة}%)» ثم سطراً عاماً «نسب تدريبية وليست درجة
 *  رسمية» — بلا أي صلة بالنموذج الرسمي: لا تحويل نقاط (15 سؤال استماع في A1
 *  = 25 نقطة ⇒ ≈1.67 للسؤال الواحد)، ولا ذكر لحدّ النجاح الرسمي (60 من 100)
 *  ولا لشروط النجاح الإضافية. هذا الملف يصرّح بالنموذج الرسمي لكل مستوى
 *  ويحوّل نتيجتنا إليه **تحويلاً معلَناً**:
 *   · عدد أسئلتنا = العدد الرسمي ⇒ تحويل **دقيق** (وتُعرض قيمة السؤال الواحد).
 *   · عدد أسئلتنا أقل ⇒ تحويل **تناسبي** مع تنبيه صريح بالفرق — فلا يُفهم أن
 *     «20 من 25» تنبؤ بالنتيجة الرسمية.
 *
 *  المصادر الرسمية (Goethe-Institut — تحقّق 2026-10-16):
 *   · **A1 (Start Deutsch 1)**: 100 نقطة · النجاح 60 من 100 · كل جزء 25 نقطة
 *     (الكتابي 75 = استماع + قراءة + كتابة، والتحدث 25) · **استماع 15 سؤالاً
 *     (15 × 1.66 = 25)** وقراءة 15 سؤالاً · **غير وحداتي**: المجموع هو الفيصل
 *     ولا عتبة لكل جزء (والأجزاء الأربعة تُقدَّم كلها).
 *   · **A2 (Goethe-Zertifikat A2)**: 100 نقطة · النجاح 60 **+** عتبتان
 *     إلزاميتان: 45 من 75 كتابيًّا و15 من 25 شفويًّا · قراءة/استماع 20 سؤالاً
 *     × 1.25 = 25 · كتابة وتحدث بالمعايير · غير وحداتي.
 *   · **B1 / B2**: امتحان **وحداتي**؛ كل مكوّن 100 نقطة والنجاح 60 فيه،
 *     ولا يعوّض مكوّنٌ مكوّناً (B2: استماع 30 سؤالاً وقراءة 30 سؤالاً —
 *     وهو عدد أسئلتنا نفسها ⇒ تحويل دقيق).
 *
 *  **B1**: المصادر الرسمية تصف 4 أجزاء استماع و5 أجزاء قراءة، وعدد الأسئلة
 *  نحو 30 (٢٩–٣٠ في الاستماع) — ولا نجزم بعدد «رسمي» حيث لا يجزم المصدر،
 *  فيُعرض تحويل B1 **تناسبيّاً دائماً** بلا ادّعاء دقة.
 * ═══════════════════════════════════════════════════════════
 */

export type OfficialLevel = "A1" | "A2" | "B1" | "B2";

export type ExamModuleKey = "hoeren" | "lesen" | "schreiben" | "sprechen";

export interface OfficialModuleSpec {
  /** سقف نقاط المكوّن في النموذج الرسمي */
  max: number;
  /** هل يُقاس المكوّن بأسئلة موضوعية عندنا (استماع/قراءة)؟ */
  itemsBased: boolean;
  /** عدد أسئلة المكوّن في النموذج الرسمي — يغيب حين لا يجزم المصدر */
  officialItems?: number;
}

export interface OfficialExamModel {
  /** وحداتي: يُنجح كل مكوّن وحده (B1/B2) — غير وحداتي: المجموع (A1/A2) */
  modular: boolean;
  /** سقف المجموع الرسمي */
  total: number;
  /** حدّ النجاح الرسمي */
  pass: number;
  /** قاعدة النجاح تُعرض للمتعلم */
  passRuleAr: string;
  /** عتبات إلزامية إضافية (A2) */
  hurdlesAr: readonly string[];
  modules: Record<ExamModuleKey, OfficialModuleSpec>;
}

export const OFFICIAL_MODELS: Record<OfficialLevel, OfficialExamModel> = {
  A1: {
    modular: false,
    total: 100,
    pass: 60,
    passRuleAr: "النجاح الرسمي: 60 من 100 في المجموع (الكتابي 75 + التحدث 25).",
    hurdlesAr: ["الأجزاء الأربعة تُقدَّم كلها — ولا عتبة لكل جزء على حدة."],
    modules: {
      hoeren: { max: 25, itemsBased: true, officialItems: 15 },
      lesen: { max: 25, itemsBased: true, officialItems: 15 },
      schreiben: { max: 25, itemsBased: false },
      sprechen: { max: 25, itemsBased: false },
    },
  },
  A2: {
    modular: false,
    total: 100,
    pass: 60,
    passRuleAr: "النجاح الرسمي: 60 من 100 في المجموع، مع عتبتين إلزاميتين:",
    hurdlesAr: [
      "45 من 75 في الكتابي (قراءة + استماع + كتابة)",
      "15 من 25 في التحدث",
    ],
    modules: {
      hoeren: { max: 25, itemsBased: true, officialItems: 20 },
      lesen: { max: 25, itemsBased: true, officialItems: 20 },
      schreiben: { max: 25, itemsBased: false },
      sprechen: { max: 25, itemsBased: false },
    },
  },
  B1: {
    modular: true,
    total: 100,
    pass: 60,
    passRuleAr: "النجاح الرسمي: امتحان وحداتي — 60 من 100 في كل مكوّن على حدة.",
    hurdlesAr: ["لا يعوّض مكوّنٌ مكوّناً: لكل مكوّن شهادة منفصلة."],
    modules: {
      hoeren: { max: 100, itemsBased: true },
      lesen: { max: 100, itemsBased: true },
      schreiben: { max: 100, itemsBased: false },
      sprechen: { max: 100, itemsBased: false },
    },
  },
  B2: {
    modular: true,
    total: 100,
    pass: 60,
    passRuleAr: "النجاح الرسمي: امتحان وحداتي — 60 من 100 في كل مكوّن على حدة.",
    hurdlesAr: ["لا يعوّض مكوّنٌ مكوّناً: لكل مكوّن شهادة منفصلة."],
    modules: {
      hoeren: { max: 100, itemsBased: true, officialItems: 30 },
      lesen: { max: 100, itemsBased: true, officialItems: 30 },
      schreiben: { max: 100, itemsBased: false },
      sprechen: { max: 100, itemsBased: false },
    },
  },
};

/** نتيجة تحويل مكوّن إلى النقاط الرسمية */
export interface OfficialConversion {
  /** النقاط المحوَّلة في النموذج الرسمي (منزلة عشرية واحدة) */
  points: number;
  /** سقف المكوّن الرسمي */
  max: number;
  /** تحويل دقيق: عدد أسئلتنا = العدد الرسمي */
  exact: boolean;
  /** قيمة السؤال الواحد (تُعرض فقط عند التحويل الدقيق) */
  perItem?: number;
  /** تنبيه الفرق في عدد الأسئلة — يُعرض مع التحويل التناسبي */
  noteAr?: string;
}

/**
 * تحويل نتيجة مكوّن موضوعي (استماع/قراءة) إلى النقاط الرسمية.
 * تعيد `null` للمكوّنات المقيَّمة بمعايير (كتابة/تحدث) وللمجموع الصفري —
 * فلا تُعرض نقطة رسمية لمكوّن لا نقيسه بأسئلة.
 */
export function officialModulePoints(
  level: OfficialLevel,
  key: ExamModuleKey,
  score: { correct: number; total: number },
): OfficialConversion | null {
  const spec = OFFICIAL_MODELS[level].modules[key];
  if (!spec.itemsBased || score.total <= 0) return null;

  const points = Math.round(((spec.max * score.correct) / score.total) * 10) / 10;
  const exact = spec.officialItems !== undefined && score.total === spec.officialItems;
  const perItem = exact
    ? Math.round((spec.max / (spec.officialItems as number)) * 100) / 100
    : undefined;

  let noteAr: string | undefined;
  if (!exact) {
    noteAr =
      spec.officialItems !== undefined
        ? `عدد أسئلتنا ${score.total} مقابل ${spec.officialItems} في النموذج الرسمي — النقاط محوَّلة تناسبيّاً.`
        : "عدد أسئلة النموذج الرسمي يختلف عن عدد أسئلتنا — النقاط محوَّلة تناسبيّاً (نموذج تدريبي مبسَّط).";
  }

  return { points, max: spec.max, exact, perItem, noteAr };
}

/** سطر أمانة ثابت أسفل شاشة النتيجة */
export const HONESTY_NOTE_AR =
  "محاكاة تدريبية لا امتحان رسمي: حيث يقلّ عدد أسئلتنا عن النموذج الرسمي فالنقاط محوَّلة تناسبيّاً، والنتيجة الرسمية تُحدَّد في الامتحان وحده.";
