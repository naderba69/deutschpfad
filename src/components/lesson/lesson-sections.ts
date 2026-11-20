import {AlertTriangle, BookMarked, BookOpen, ClipboardCheck, Dumbbell, Globe, Headphones, Languages, Layers, Lightbulb, MessageSquareText, Mic, PenLine, Repeat, Sparkles, TableProperties, Target, Type, type LucideIcon} from "lucide-react";

/**
 * المكونات العشرة الإلزامية لكل درس — تعريف موحد
 */
export interface LessonSectionDef {
  id: string;
  label: string;
  short: string;
  icon: LucideIcon;
}

/*
 * الترتيب = تسلسل المراحل العشر (lib/session/stages.ts): الخطوات تُعرض بهذا الترتيب،
 * فلا يظهر قسم من مرحلة لاحقة قبل مرحلة سابقة.
 */
export const LESSON_SECTIONS: LessonSectionDef[] = [
  /* 1 أهداف الحصة */
  { id: "lernziele", label: "الأهداف التعليمية", short: "الأهداف", icon: Target },
  /* 2 التمهيد والاسترجاع: أولاً استرجاع الأخطاء السابقة ثم التمهيد */
  { id: "review", label: "مراجعة تراكمية (Interleaving)", short: "مراجعة سابقة", icon: Repeat },
  { id: "einfuehrung", label: "التمهيد وتنشيط المعرفة", short: "التمهيد", icon: Lightbulb },
  /* 3 المفردات */
  { id: "wortschatz", label: "المفردات (Wortschatz)", short: "المفردات", icon: Type },
  /* 4 القواعد */
  { id: "theorie", label: "الشرح النظري", short: "الشرح", icon: BookOpen },
  { id: "verben", label: "جدول الأفعال الشاذة", short: "أفعال شاذة", icon: TableProperties },
  /* 5 الاستقبال: القراءة ثم الاستماع */
  { id: "lesetext", label: "نصّ القراءة (Lesetext)", short: "القراءة", icon: BookMarked },
  { id: "hoerverstehen", label: "الاستماع (Hörverstehen)", short: "الاستماع", icon: Headphones },
  /* 6 التطبيق الموجَّه */
  { id: "uebungen", label: "التدريبات التفاعلية", short: "التدريبات", icon: Dumbbell },
  /* 7 الإنتاج: النطق والكتابة والكلام والوساطة والتفاعل */
  { id: "aussprache", label: "النطق (Aussprache)", short: "النطق", icon: Mic },
  { id: "schreiben", label: "الكتابة (Schreiben)", short: "الكتابة", icon: PenLine },
  { id: "mediation", label: "الوساطة اللغوية (Mediation)", short: "الوساطة", icon: Languages },
  { id: "interaction", label: "تفاعل موجّه (Interaktion)", short: "التفاعل", icon: MessageSquareText },
  { id: "oral-production", label: "إنتاج شفهي مفتوح", short: "الكلام", icon: Mic },
  /* 8 الثقافة والسياق */
  { id: "landeskunde", label: "الثقافة والسياق (Landeskunde)", short: "الثقافة", icon: Globe },
  /* 9 اختبار الانتقال */
  { id: "minitest", label: "التقييم الختامي (Mini-Test)", short: "التقييم", icon: ClipboardCheck },
  /* 10 التثبيت والمراجعة */
  { id: "fehler", label: "الأخطاء الشائعة والتريكات", short: "الأخطاء والحيل", icon: AlertTriangle },
  { id: "lernkarten", label: "بطاقات المراجعة", short: "البطاقات", icon: Layers },
  { id: "vertiefung", label: "التعمّق بعد الدرس", short: "التعمّق", icon: Sparkles },
];
