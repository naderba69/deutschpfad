/**
 * ═══════════════════════════════════════════════════════════
 *  صوت البودكاست — تسجيل مُنتَج بدل نطق الجهاز
 * ═══════════════════════════════════════════════════════════
 *
 * لماذا هذه الوحدة: مكتبة البودكاست تعرض وسم «استماع» على 20 حلقة، بينما كان
 * المشغّل يعتمد `speakGerman`/`speakSequence` (نطق الجهاز) وحده — أي «استماع»
 * بلا تسجيل. هذه الوحدة تجعل التسجيل **مصدراً واحداً للمسار**: البيان مشتقّ من
 * `PODCASTS` نفسها (النص المنطوق هو `episode.script` حرفياً، لا نصّ موازٍ)،
 * والمشغّل والحارس يقرآن الدالة نفسها `podcastAudioPath`.
 *
 * الملفات: public/audio/podcasts/<معرّف الحلقة>.mp3
 *
 * الإنتاج على دفعات (سقف 10 مقاطع في الرد الواحد) — لذلك البيان يفرّق صراحة بين
 * **مُنتَج** (مسار) و**غير مُنتَج بعد** (`undefined`)، والمشغّل يعلن الحالة بدل
 * أن يدّعي تسجيلاً غير موجود: «تسجيل» أو «صوت الجهاز».
 */
import { PODCASTS } from "@/data/podcasts";

/** مجلد الملفات داخل public */
export const PODCAST_AUDIO_BASE = "/audio/podcasts";

/**
 * أقصى طول نصّ يضمنه مقطع واحد (سقف أداة التوليد 1500 حرف).
 * أطول حلقة قياساً 423 حرفاً — فالقاعدة تُثبت أن **كل** حلقة قابلة للإنتاج
 * بمقطع واحد، وأي حلقة تُكتب أطول من ذلك تفشل قبل الإنتاج لا بعده.
 */
export const MAX_PODCAST_CLIP_CHARS = 1500;

/**
 * الحلقات التي **أُنتج تسجيلها فعلاً** — تُزاد مع كل دفعة إنتاج، والحارس
 * يطابقها مع القرص في الاتجاهين (لا بيان بلا ملف، ولا ملف يتيم بلا بيان).
 *
 * الدفعة 60 (2026-10-17): أول مقطعين (`voice-02`) — A1 «Auf dem Markt» (15.5 ث)
 * و«Mein Haustier» (11.7 ث)، كلاهما ALL_VALID. الإنتاج يتواصل على دفعات لأن
 * سقف التوليد **10 مقاطع في الرد الواحد** (بلغته هذه الدفعة مبكراً)، فالبقية
 * (18 حلقة) تبقى على نطق الجهاز **مُعلَنة كذلك** في المشغّل — لا ادّعاء.
 *
 * القاعدة الصوتية: مستوى واحد بصوت واحد، ليثبت المتعلم على نبرة مألوفة.
 */
export const PRODUCED_PODCAST_AUDIO: readonly string[] = [
  /* A1 — مُنتَج */
  "p-a1-markt",
  "p-a1-haustier",
];

/**
 * الحلقات المتبقية بلا تسجيل (18) — تُقرأ بصوت الجهاز وتُعلن ذلك. موضوعة هنا
 * صراحةً ليكون «ما لم يُنتَج» معلوماً بالاسم لا ضمنيّاً، وليحرس الاختبار أن
 * مجموع المُنتَج والمتبقّي هو كل الحلقات بلا فجوة ولا تكرار.
 */
export const PENDING_PODCAST_AUDIO: readonly string[] = [
  "p-a1-geburstag",
  "p-a1-meine-familie",
  "p-a2-sonnntag",
  "p-a2-zug",
  "p-a2-wochenmarkt",
  "p-a2-kinoabend",
  "p-a2-wohnung",
  "p-b1-umwelt",
  "p-b1-homeoffice",
  "p-b1-reisen",
  "p-b1-gesundheit",
  "p-b1-lernen",
  "p-b2-digitalisierung",
  "p-b2-globalisierung",
  "p-b2-kuenstliche-intelligenz",
  "p-b2-gesunde-ernaehrung",
  "p-b2-work-life-balance",
  "p-b2-migration",
];

export interface PodcastAudioClip {
  /** معرّف الحلقة كما في `PODCASTS` */
  id: string;
  level: string;
  /** المسار بلا امتداد — الاستعمال: `${path}.mp3` */
  path: string;
  /** ما يُسجَّل/يُشغَّل — `episode.script` نفسه حرفياً */
  text: string;
}

/**
 * كل المقاطع **المُنتَجة**، مشتقّة من بيانات الحلقات نفسها.
 * معرّف وارد في `PRODUCED_PODCAST_AUDIO` ولا وجود له في `PODCASTS` يُتجاهل هنا
 * ويُمسكه الحارس — فلا يمرّ بيانٌ يشير إلى حلقة محذوفة.
 */
export function podcastAudioClips(): PodcastAudioClip[] {
  return PODCASTS.filter((ep) => PRODUCED_PODCAST_AUDIO.includes(ep.id)).map((ep) => ({
    id: ep.id,
    level: String(ep.level),
    path: `${PODCAST_AUDIO_BASE}/${ep.id}`,
    text: ep.script,
  }));
}

/**
 * **مصدر واحد للمسار**: يعيد مسار الحلقة إن كان تسجيلها مُنتَجاً، وإلا `undefined`
 * (فيقرأ المشغّل النصّ بصوت الجهاز ويعلن ذلك).
 */
export function podcastAudioPath(episodeId: string): string | undefined {
  const clip = podcastAudioClips().find((c) => c.id === episodeId);
  return clip ? `${clip.path}.mp3` : undefined;
}

/** هل لهذه الحلقة تسجيل مُنتَج؟ (للعرض الصادق في الواجهة) */
export function hasProducedAudio(episodeId: string): boolean {
  return PRODUCED_PODCAST_AUDIO.includes(episodeId) && PODCASTS.some((ep) => ep.id === episodeId);
}
