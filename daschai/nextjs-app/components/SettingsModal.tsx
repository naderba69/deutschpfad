"use client";

import React, { useState } from "react";
import { AppSettings } from "@/lib/types";

interface SettingsModalProps {
  isOpen: boolean;
  settings: AppSettings;
  onClose: () => void;
  onSave: (newSettings: AppSettings) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  settings,
  onClose,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<"ai" | "github" | "limits" | "voice">("ai");
  const [form, setForm] = useState<AppSettings>({ ...settings });

  if (!isOpen) return null;

  const handleChange = (key: keyof AppSettings, val: any) => {
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-[#111827] border border-gray-700 rounded-2xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="font-bold text-base flex items-center gap-2 text-white">
            <i className="fa-solid fa-sliders text-indigo-400"></i> Configuration Settings
          </div>
          <button onClick={onClose} className="p-1 hover:text-white text-gray-400">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-gray-800 px-4 pt-2 gap-2 text-xs font-semibold">
          {[
            { id: "ai", label: "AI & OpenRouter" },
            { id: "github", label: "GitHub Agent" },
            { id: "limits", label: "Quota & Limits" },
            { id: "voice", label: "Voice & Speech" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2 px-2 border-b-2 transition ${
                activeTab === tab.id
                  ? "border-indigo-500 text-indigo-400"
                  : "border-transparent text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          {activeTab === "ai" && (
            <>
              <div className="space-y-1.5">
                <label className="font-semibold text-gray-300 flex justify-between">
                  <span>OpenRouter API Key <span className="text-red-400">*</span></span>
                  <a href="https://openrouter.ai/keys" target="_blank" className="text-sky-400 text-[11px]">Get Key</a>
                </label>
                <input
                  type="password"
                  placeholder="sk-or-v1-..."
                  value={form.openrouterApiKey}
                  onChange={(e) => handleChange("openrouterApiKey", e.target.value)}
                  className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-300">Model Selector</label>
                <select
                  value={form.model}
                  onChange={(e) => handleChange("model", e.target.value)}
                  className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none focus:border-indigo-500"
                >
                  <option value="anthropic/claude-3.5-sonnet">Claude 3.5 Sonnet (Best Reasoning & Code)</option>
                  <option value="openai/gpt-4o">OpenAI GPT-4o (Omni Multimodal)</option>
                  <option value="openai/gpt-4o-mini">OpenAI GPT-4o Mini (Fast & Cheap)</option>
                  <option value="deepseek/deepseek-chat">DeepSeek V3 (High Performance)</option>
                  <option value="deepseek/deepseek-r1">DeepSeek R1 (Advanced Reasoning)</option>
                  <option value="google/gemini-2.0-flash-001">Google Gemini 2.0 Flash</option>
                  <option value="meta-llama/llama-3.3-70b-instruct">Meta Llama 3.3 70B</option>
                  <option value="mistralai/mistral-large-2411">Mistral Large</option>
                  <option value="qwen/qwen-2.5-coder-32b-instruct">Qwen 2.5 Coder 32B</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-300">System Prompt</label>
                <textarea
                  rows={3}
                  value={form.systemPrompt}
                  onChange={(e) => handleChange("systemPrompt", e.target.value)}
                  className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none focus:border-indigo-500 font-mono text-[11px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-gray-300">Temperature ({form.temperature})</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={form.temperature}
                    onChange={(e) => handleChange("temperature", parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-gray-300">Max Tokens</label>
                  <input
                    type="number"
                    value={form.maxTokens}
                    onChange={(e) => handleChange("maxTokens", parseInt(e.target.value))}
                    className="w-full p-1.5 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#1f2937] rounded-lg border border-gray-700">
                <span className="font-semibold text-gray-300">Stream Response Tokens</span>
                <input
                  type="checkbox"
                  checked={form.streaming}
                  onChange={(e) => handleChange("streaming", e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 rounded"
                />
              </div>
            </>
          )}

          {activeTab === "github" && (
            <>
              <div className="flex items-center justify-between p-2.5 bg-[#1f2937] rounded-lg border border-gray-700">
                <div>
                  <div className="font-semibold text-white">Enable Autonomous GitHub Tools</div>
                  <div className="text-[10px] text-gray-400">Allows AI to read files, inspect trees, make commits & PRs.</div>
                </div>
                <input
                  type="checkbox"
                  checked={form.githubToolsEnabled}
                  onChange={(e) => handleChange("githubToolsEnabled", e.target.checked)}
                  className="w-4 h-4 accent-indigo-600 rounded"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-300 flex justify-between">
                  <span>GitHub Personal Access Token (PAT)</span>
                  <a href="https://github.com/settings/tokens" target="_blank" className="text-sky-400 text-[11px]">Generate</a>
                </label>
                <input
                  type="password"
                  placeholder="ghp_... or github_pat_..."
                  value={form.githubToken}
                  onChange={(e) => handleChange("githubToken", e.target.value)}
                  className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-300">Repo Owner</label>
                  <input
                    type="text"
                    placeholder="e.g. octocat"
                    value={form.githubOwner}
                    onChange={(e) => handleChange("githubOwner", e.target.value)}
                    className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-300">Repo Name</label>
                  <input
                    type="text"
                    placeholder="e.g. repo-name"
                    value={form.githubRepo}
                    onChange={(e) => handleChange("githubRepo", e.target.value)}
                    className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-gray-300">Default Target Branch</label>
                <input
                  type="text"
                  value={form.githubBranch}
                  onChange={(e) => handleChange("githubBranch", e.target.value)}
                  className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none"
                />
              </div>
            </>
          )}

          {activeTab === "limits" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-300">Daily Requests Limit</label>
                  <input
                    type="number"
                    value={form.dailyReqLimit}
                    onChange={(e) => handleChange("dailyReqLimit", parseInt(e.target.value))}
                    className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-300">Daily Token Limit</label>
                  <input
                    type="number"
                    value={form.dailyTokenLimit}
                    onChange={(e) => handleChange("dailyTokenLimit", parseInt(e.target.value))}
                    className="w-full p-2 bg-[#1f2937] border border-gray-700 rounded-lg text-white outline-none"
                  />
                </div>
              </div>
              <p className="text-[11px] text-gray-400">
                You will receive automatic notification toasts when approaching 80% and 100% of your configured daily quotas.
              </p>
            </>
          )}

          {activeTab === "voice" && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-300">Speech Rate ({form.ttsRate}x)</label>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={form.ttsRate}
                    onChange={(e) => handleChange("ttsRate", parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-semibold text-gray-300">Speech Pitch ({form.ttsPitch})</label>
                  <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    value={form.ttsPitch}
                    onChange={(e) => handleChange("ttsPitch", parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-end gap-2 bg-[#0b0f19]">
          <button onClick={onClose} className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5"
          >
            <i className="fa-solid fa-floppy-disk"></i> Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};
