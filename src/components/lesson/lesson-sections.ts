import {AlertTriangle, BookOpen, ClipboardCheck, Dumbbell, Headphones, Languages, Layers, Lightbulb, MessageSquareText, Mic, PenLine, Repeat, TableProperties, Target, type LucideIcon} from "lucide-react";

/**
 * المكونات العشرة الإلزامية لكل درس — تعريف موحد
 */
export interface LessonSectionDef {
  id: string;
  label: string;
  short: string;
  icon: LucideIcon;
}

export const LESSON_SECTIONS: LessonSectionDef[] = [
  { id: "lernziele", label: "الأهداف التعليمية", short: "الأهداف", icon: Target },
  { id: "einfuehrung", label: "التمهيد وتنشيط المعرفة", short: "التمهيد", icon: Lightbulb },
  { id: "review", label: "مراجعة تراكمية (Interleaving)", short: "مراجعة سابقة", icon: Repeat },
  { id: "theorie", label: "الشرح النظري", short: "الشرح", icon: BookOpen },
  { id: "verben", label: "جدول الأفعال الشاذة", short: "أفعال شاذة", icon: TableProperties },
  { id: "hoerverstehen", label: "الاستماع (Hörverstehen)", short: "الاستماع", icon: Headphones },
  { id: "aussprache", label: "النطق (Aussprache)", short: "النطق", icon: Mic },
  { id: "schreiben", label: "الكتابة (Schreiben)", short: "الكتابة", icon: PenLine },
  { id: "uebungen", label: "التدريبات التفاعلية", short: "التدريبات", icon: Dumbbell },
  { id: "fehler", label: "الأخطاء الشائعة والتريكات", short: "الأخطاء والحيل", icon: AlertTriangle },
  { id: "minitest", label: "التقييم الختامي (Mini-Test)", short: "التقييم", icon: ClipboardCheck },
  { id: "lernkarten", label: "بطاقات المراجعة", short: "البطاقات", icon: Layers },
  /* ═══ مكوّنا الوساطة والتفاعل (CEFR 2020) — يُعرضان إن توفرا في الدرس ═══ */
  { id: "mediation", label: "الوساطة اللغوية (Mediation)", short: "الوساطة", icon: Languages },
  { id: "interaction", label: "تفاعل حي (Interaktion)", short: "التفاعل", icon: MessageSquareText },
];
