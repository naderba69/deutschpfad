import type { Metadata } from "next";

import {SettingsClient} from "@/components/settings/settings-client";
import {ReminderSettings} from "@/components/dashboard/reminder-settings";
import {ByokCard} from "@/components/settings/byok-card";

export const metadata: Metadata = {
  title: "الإعدادات — البيانات والنسخ الاحتياطي",
  description:
    "إدارة بياناتك في درب الألمانية: تصدير واستيراد JSON، النسخ الاحتياطي التلقائي، ومعامل النسيان الشخصي.",
};

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          الإعدادات والبيانات
        </h1>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground">
          بياناتك ملكك 100% — تُحفظ على جهازك (IndexedDB) ويمكنك تصديرها واستيرادها
          والاستعادة من نسخ احتياطية تلقائية يومية.
        </p>
      </div>
      <SettingsClient />

      {/* مفتاح LLM الخاص (BYOK — P0-02) */}
      <div className="mt-6">
        <ByokCard />
      </div>

      {/* التذكير اليومي */}
      <div className="mt-6">
        <ReminderSettings />
      </div>
    </div>
  );
}
