"use client";

import {LLMSettings} from "@/components/settings/llm-settings";
import {DataManager} from "@/components/settings/data-manager";

/**
 * عميل صفحة الإعدادات — المرحلة 5:
 * إعدادات الذكاء الاصطناعي + إدارة البيانات والنسخ الاحتياطي
 * (ستُضاف تفضيلات المستخدم في المرحلة 12)
 */
export function SettingsClient() {
  return (
    <div className="space-y-6">
      <LLMSettings />
      <DataManager />
    </div>
  );
}
