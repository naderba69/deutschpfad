"use client";

import React, { useState } from "react";
import { ChatSession, UsageStats, AppSettings } from "@/lib/types";

interface SidebarProps {
  sessions: ChatSession[];
  activeSessionId: string;
  usage: UsageStats;
  settings: AppSettings;
  onSelectSession: (id: string) => void;
  onNewSession: () => void;
  onDeleteSession: (id: string) => void;
  onRenameSession: (id: string) => void;
  onOpenSettings: () => void;
  onOpenUsage: () => void;
  onExport: () => void;
  onClearAll: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sessions,
  activeSessionId,
  usage,
  settings,
  onSelectSession,
  onNewSession,
  onDeleteSession,
  onRenameSession,
  onOpenSettings,
  onOpenUsage,
  onExport,
  onClearAll,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSessions = sessions.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const reqRatio = (usage.requests / (settings.dailyReqLimit || 100)) * 100;
  const tokenRatio = (usage.totalTokens / (settings.dailyTokenLimit || 100000)) * 100;
  const usagePercent = Math.min(100, Math.round(Math.max(reqRatio, tokenRatio)));
  const tokenK = usage.totalTokens > 1000 ? `~${(usage.totalTokens / 1000).toFixed(1)}k` : `~${usage.totalTokens}`;

  return (
    <aside className="w-72 bg-[#111827] border-r border-gray-800 flex flex-col h-full shrink-0 z-20">
      {/* Brand Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-bold text-base tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <i className="fa-solid fa-brain"></i>
          </div>
          <div>
            <div className="text-white">OX-Alpha</div>
            <div className="text-[10px] font-semibold tracking-wider text-indigo-400 uppercase">Workbench Pro</div>
          </div>
        </div>
      </div>

      {/* Action: New Session & Search */}
      <div className="p-3 space-y-2">
        <button
          onClick={onNewSession}
          className="w-full py-2.5 px-3 bg-gradient-to-r from-indigo-600 to-sky-500 hover:opacity-90 text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-500/20 transition"
        >
          <i className="fa-solid fa-plus"></i> New Session
        </button>

        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-500 text-xs"></i>
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 bg-[#1f2937] border border-gray-700 rounded-lg text-xs text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        {filteredSessions.map((s) => {
          const isActive = s.id === activeSessionId;
          return (
            <div
              key={s.id}
              onClick={() => onSelectSession(s.id)}
              className={`group flex items-center justify-between p-2 rounded-lg text-xs cursor-pointer transition ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-400 font-semibold border-l-2 border-indigo-500"
                  : "text-gray-400 hover:bg-[#1f2937] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0 flex-1 truncate">
                <i className="fa-regular fa-message text-[11px] shrink-0"></i>
                <span className="truncate">{s.title}</span>
              </div>
              <div className="hidden group-hover:flex items-center gap-1 shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRenameSession(s.id);
                  }}
                  className="p-1 hover:text-white rounded"
                  title="Rename"
                >
                  <i className="fa-solid fa-pen-to-square text-[10px]"></i>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSession(s.id);
                  }}
                  className="p-1 hover:text-red-400 rounded"
                  title="Delete"
                >
                  <i className="fa-solid fa-trash text-[10px]"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sidebar Footer: Daily Usage & Tools */}
      <div className="p-3 border-t border-gray-800 space-y-2.5 bg-[#0e1422]">
        <div
          onClick={onOpenUsage}
          className="p-2.5 bg-[#1f2937] border border-gray-700 rounded-lg text-xs cursor-pointer hover:border-indigo-500 transition space-y-1.5"
          title="Click to view analytics"
        >
          <div className="flex justify-between text-gray-400 text-[11px]">
            <span>
              <i className="fa-solid fa-gauge-high mr-1"></i> Daily Quota
            </span>
            <span className="font-semibold text-white">{usagePercent}%</span>
          </div>
          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
              style={{ width: `${usagePercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>Reqs: {usage.requests}</span>
            <span>Tokens: {tokenK}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <button
            onClick={onExport}
            className="py-1.5 px-2 bg-[#1f2937] border border-gray-700 hover:bg-gray-700 text-gray-300 rounded text-[11px] flex items-center justify-center gap-1 transition"
            title="Export chat"
          >
            <i className="fa-solid fa-file-export"></i> Export
          </button>
          <button
            onClick={onClearAll}
            className="py-1.5 px-2 bg-[#1f2937] border border-gray-700 hover:bg-gray-700 text-gray-300 rounded text-[11px] flex items-center justify-center gap-1 transition"
            title="Clear all conversations"
          >
            <i className="fa-solid fa-trash-can"></i> Clear
          </button>
          <button
            onClick={onOpenSettings}
            className="py-1.5 px-2 bg-[#1f2937] border border-gray-700 hover:bg-gray-700 text-gray-300 rounded text-[11px] flex items-center justify-center gap-1 transition"
            title="Settings"
          >
            <i className="fa-solid fa-gear"></i> Config
          </button>
        </div>
      </div>
    </aside>
  );
};
