# تدقيق المكونات الشامل — 2026-11-10

قراءة سطراً بسطر لكل مكونات `src/components/` (217 ملف `.tsx`، نحو 33,870 سطراً)
عبر دفعات مجلداً مجلداً: `ai/` و`dashboard/` و`dialogues/` و`placement/` و`dictionary/`
و`diktate/` و`errors/` و`forms/` و`flashcards/` و`gamification/` و`glossar/` و`grammar/`
و`home/` و`hoeren/` و`lesson/` و`lesson/exercises/` و`lesson/sections/` و`lesson/speech/`
و`shared/` و`layout/` و`settings/` و`tests/` و`speaking/` و`writing/` و`learning-path/`
و`verbs/` و`level/` و`satzbau/` و`redemittel/` و`landeskunde/` و`redewendungen/`
و`schreiben/` و`reading/` و`stories/` و`podcasts/` و`review/` و`shop/` و`umschreiben/`
و`speech/` و`llm/` و`alltag/` و`assistant/` و`brand/` و`daily/` و`offline/` و`providers/`.

هذا تدقيق مصدري (قراءة كود) — لا يشمل E2E مرئياً (Chromium غير متاح شبكياً).

## عيوب أُصلحت في هذه الجولة

1. **ادعاء CEFR/Goethe في الشهادة** (`gamification/certificate.tsx`): كانت الشهادة
   الداخلية (تُفتح عند 80% وحدات) تنص «وفق معايير CEFR ومنهجية معهد غوته» وتُسمّى
   «شهادة إتمام» وتشهد بإتمام «متطلبات المستوى» مع ختم «CEFR {code}». صُحّح النص إلى
   وثيقة متابعة داخلية صريحة: ليست شهادة رسمية ولا إثباتاً لمستوى CEFR، والنطاق
   موسوم «(داخلي)». إكمال الوحدات لا يساوي مستوى CEFR أو جاهزية امتحان خارجي.
2. **قفل الخريطة المتعرجة شكلي فقط** (`learning-path/winding-path.tsx`): عقد
   الدروس المقفلة كانت روابط `<Link>` فعّالة رغم أيقونة القفل — أي درس كان قابلاً
   للفتح مباشرة متجاوزاً التسلسل. الآن المقفلة `href="#"` + منع افتراضي +
   `aria-disabled` مع شرح في `aria-label`.
3. **نص مضلل في تحدي الذاكرة** (`gamification/memory-challenge.tsx`): الواجهة تقول
   «من المستويات الأربعة» بينما البنك A1+A2 فقط. صُحّح إلى «من مستويات A1–A2».
4. **ادعاء «الاحتراف»** (`home/hero.tsx` و`learning-path/sequential-path.tsx`):
   «من الصفر حتى الاحتراف» و«الاحتراف الأكاديمي (B2)» — B2 مستوى مستخدم مستقل
   لا احتراف. صُحّح إلى «من الصفر حتى B2 بثقة» و«المستوى المتقدم (B2)» و«رحلتك
   الكاملة لتعلم الألمانية» بدل «لإتقان الألمانية».
5. **نص خارطة طريق قديم** (`verbs/starke-verben-table.tsx`): «الجدول الكامل
   التفاعلي قادم في المرحلة 13» — الجدول تفاعلي بالكامل أصلاً. صُحّح.
6. **تعليق غير دقيق** (`gamification/daily-quests.tsx`): «5 مهام» و«سلسلة 3 أيام»
   غير موجودة في الكود (4 مهام). صُحّح التعليق.
7. **تعليق بعدد قديم** (`learning-path/sequential-path.tsx`): «كل الدروس (46)»
   — حُذف العدد الثابت (العدد الحقيقي يُعرض ديناميكياً من `LESSON_META.length`).
8. **كود ميت**: حالة `round` في `challenge-mode.tsx` (لا تُحدَّث أبداً) وخاصية
   `autoLabel` في `speak-button.tsx` (مُعلنة ولا تُستخدم) ومساعد
   `completedLessesSetSize` (اسم خاطئ + غلاف زائد) في `teacher-mentor.tsx` — حُذفت.
9. **إتاحة**: أُضيف `aria-pressed` للأزرار المبدّلة في 14 ملفاً (focus-mode،
   preferences-card، journey-preferences، goethe-local، redemittel، satzbau،
   schreibmodelle، reading، umschreibungen، writing-path، offline،
   teacher-personality-card، certificate) و`aria-expanded` لزر الحقائق في
   landeskunde؛ وحوّلت `role="radiogroup"` إلى `role="group"` حيث الأزرار
   مبدّلة لا radio حقيقية.

## عيوب أُصلحت في دفعات سابقة (ضمن نفس المراجعة)

- `cacheKey` ميتة في `ai-tool-shell.tsx`؛ منطق مفردات `story-generator.tsx`
  (خريطة `LEVEL_WORDS` متدرجة)؛ `aria-pressed` على 11 زراً في 6 ملفات `ai/`؛
  تعبير `dir` الميت في `assistant-client.tsx`؛ 3 روابط داخلية `<a href={...}>`
  في `five-minutes.tsx` و`placement-test.tsx` استُبدلت بـNext `<Link>`؛
  فواصل منفردة زائدة في 8 ملفات مكونات وفي `src/lib/gamification/badges.ts`.

## ما تم التحقق منه بلا عيوب

- `providers/` (progress/llm/theme/service-worker/voice-warmup): تحميل IndexedDB
  مع مرآة LocalStorage، حماية من الكتابة فوق بيانات غير مقروءة، عدّاد LLM،
  تسخين أصوات TTS.
- `dashboard/`: كل البطاقات تعرض أخطاء قراءة صريحة بدل أصفار مضللة، و`cefr-competencies`
  و`exam-readiness-card` و`predictive-path` و`certificate-path` و`mastery-certificate`
  كلها تنص صراحة أن المؤشرات داخلية لا تثبت CEFR.
- `settings/data-manager.tsx`: قائمة المخازن السبعة في إعادة التعيين تطابق
  `src/lib/storage/db.ts` تماماً (progress/cards/events/settings/snapshots/
  llm-cache/llm-usage).
- `dashboard/reminder-settings.tsx`: حلقة التذكير `scheduleLoop` مستدعاة فعلياً
  عند التفعيل (سطر 73) — لا كود ميت.
- `shared/speak-button.tsx`: ينتظر صوت de-DE فعلياً ولا ينطق الألمانية بصوت
  إنجليزي بديل؛ `font-de` يشمل Tajawal فلا مشكلة عرض للعربية.
- `home/`: كل البطاقات (study-plan، weekly-league، growth-dashboard،
  daily-plan، today-suggestions) تعالج أخطاء القراءة بصدق.

## ملاحظات وتوصيات متبقية (غير حرجة)

1. `today-suggestions.tsx`: استدعاء `useEffect` ثانٍ في منتصف المكوّن (بعد بناء
   مصفوفة الاقتراحات) — يعمل لأن الترتيب ثابت، لكنه هش؛ يُنصح بنقله للأعلى.
2. `celebration.tsx`: كود رسم البطاقة مكرر بين `shareAsImage` و`shareNative`
   (DRY) — يُنصح باستخراج دالة رسم واحدة.
3. `daily-vocab-challenge.tsx`: خلط `sort(() => rand() - 0.5)` متحيّز إحصائياً —
   يُنصح بـFisher–Yates.
4. `unit-row.tsx` و`learning-path-client.tsx`: أزرار «إكمال (تجريبي)» و«تجربة
   سريعة» تسمح بتجاوز التسلسل/الختم يدوياً — موسومة «تجريبي» لكنها تُضعف
   دلالة التقدم؛ يُنصح بإخفائها خلف وضع مطوّر أو إزالتها قبل الإطلاق.
5. `detail-tabs.tsx`: التبويبات تعمل بالنقر فقط دون تنقل بلوحة المفاتيح
   (أسهم) — تحسين إتاحة مستقبلي.
6. `level-hub.tsx`: الدروس المقفلة تستخدم `href="#"` — يعمل لكنه يضيف
   مدخلاً فارغاً لسجل التصفح؛ الأفضل إزالة الرابط أصلاً.
7. E2E المرئي ما زال غير متاح (تنزيل Chromium محظور شبكياً) — المراجعة
   البصرية للمكونات لم تُجرَ.

## التحقق

`typecheck` ✓ · `lint` ✓ · اختبارات كاملة **851/851 عبر 113 ملفاً** ✓ ·
`git diff --check` ✓ (بعد `npm ci --include=dev`).
