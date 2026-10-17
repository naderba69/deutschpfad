/**
 * مفاتيح التخزين الموحدة — لمنع تكرارها بين الوحدات
 */
export const PROGRESS_KEY = "progress:v2";
export const SETTINGS_KEY_PREFIX = "settings:";

/** مفاتيح الإعدادات */
export const SETTINGS_KEYS = {
  /** تفضيلات المستخدم (المرحلة 12): الهدف، الخطّة، شخصية المعلّم… */
  preferences: "preferences",
} as const;
