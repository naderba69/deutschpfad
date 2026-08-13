import type { EventStats } from "@/types/analytics";

/**
 * التقرير الأسبوعي المحلي — يولّد تقريراً نصياً من إحصائيات المستخدم
 * (يعمل بدون LLM — بديل ذكي دائماً متاح)
 */

export function buildLocalWeeklyReport(stats: EventStats): string {
  const lines: string[] = [];

  lines.push("📊 تقريرك الأسبوعي — نظرة سريعة");
  lines.push("");

  // النشاط
  lines.push(`✅ تمارين محلولة: ${stats.exercisesAnswered} (دقة ${stats.accuracyPct}%)`);
  lines.push(`🎧 تقييمات نطق: ${stats.pronunciationScores.length} (متوسط ${stats.pronunciationAvg ?? "—"}%)`);
  lines.push(`🔁 مراجعات بطاقات: ${stats.reviewsCount}`);
  lines.push(`📘 دروس مكتملة: ${stats.lessonsCompleted}`);
  lines.push(`⚡ نقاط الخبرة: ${stats.xp}`);
  lines.push("");

  // نقاط القوة
  if (stats.accuracyPct >= 80) {
    lines.push("💪 نقطة قوتك: دقة ممتازة في التمارين — استمر! ");
  } else if (stats.accuracyPct >= 60) {
    lines.push("💪 نقطة قوتك: دقة جيدة — ركّز على أنواع الأخطاء المتكررة.");
  } else {
    lines.push("💪 نقطة قوتك: أنت تتدرب بنشاط — الدقة ستتحسن مع المراجعة.");
  }

  // نقاط الضعف
  const topErrors = Object.entries(stats.errorTypeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2);
  if (topErrors.length > 0) {
    lines.push("⚠️ أكثر الأخطاء تكراراً: " + topErrors.map(([k, v]) => `${k} (${v})`).join("، "));
    lines.push("   → راجع هذه الأنواع في دروسك وأضفها لبطاقات المراجعة.");
  } else {
    lines.push("⚠️ لا أخطاء مسجلة — رائع! جرّب تمارين أكثر لتحدٍّ أكبر.");
  }
  lines.push("");

  // خطة الأسبوع القادم
  lines.push("🎯 خطة الأسبوع القادم:");
  lines.push("1) راجع 5 بطاقات مستحقة يومياً (SM-2 يذكرك).");
  lines.push("2) أكمل درساً واحداً + تمريناته التفاعلية.");
  lines.push("3) درّب نطقك 3 مرات على الأقل (سجّل نطقك وقارن).");
  lines.push("");
  lines.push("تذكّر: الانتظام اليومي أهم من الكمية — حتى 5 دقائق تصنع فرقاً! 💛");

  return lines.join("\n");
}

/** رسالة تحفيزية حسب السلوك */
export function motivationalMessage(stats: EventStats): string {
  if (stats.accuracyPct >= 85 && stats.exercisesAnswered >= 30) {
    return "أداء أسطوري هذا الأسبوع — أنت تتقدم بسرعة كبيرة! 🏆";
  }
  if (stats.pronunciationScores.length >= 5) {
    return "تدريب نطق ممتاز! أذنك تتحسن — واصل التسجيل والمقارنة. 🎧";
  }
  if (stats.reviewsCount >= 20) {
    return "مراجعة ذكية رائعة — SM-2 يبني ذاكرتك بصمت. 🔁";
  }
  if (stats.exercisesAnswered === 0) {
    return "ابدأ اليوم بتمرين واحد فقط — أول خطوة هي الأهم! 🌱";
  }
  return "التقدم البطيء الثابت يهزم التقدم السريع المتقطع — استمر! 💛";
}
