"use client";

import {LLMSettings} from "@/components/settings/llm-settings";
import {DataManager} from "@/components/settings/data-manager";
import {AudioSettings} from "@/components/settings/audio-settings";

/**
 * عميل صفحة الإعدادات:
 * إعدادات الصوت + الذكاء الاصطناعي + إدارة البيانات والنسخ الاحتياطي
 */
export function SettingsClient() {
  return (
    <div className="space-y-6">
      <AudioSettings />
      <LLMSettings />
      <DataManager />
    </div>
  );
}
