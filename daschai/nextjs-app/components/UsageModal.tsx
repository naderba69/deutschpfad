"use client";

import React from "react";
import { UsageStats } from "@/lib/types";

interface UsageModalProps {
  isOpen: boolean;
  usage: UsageStats;
  onClose: () => void;
  onReset: () => void;
}

export const UsageModal: React.FC<UsageModalProps> = ({
  isOpen,
  usage,
  onClose,
  onReset,
}) => {
  if (!isOpen) return null;

  const cost = ((usage.totalTokens / 1000) * 0.003).toFixed(3);

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-[#111827] border border-gray-700 rounded-2xl w-full max-w-md flex flex-col shadow-2xl overflow-hidden text-xs">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="font-bold text-base flex items-center gap-2 text-white">
            <i className="fa-solid fa-chart-pie text-sky-400"></i> API Usage Analytics
          </div>
          <button onClick={onClose} className="p-1 hover:text-white text-gray-400">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-[#1f2937] border border-gray-700 p-3 rounded-xl">
              <div className="text-gray-400 text-[10px]">Total Reqs</div>
              <div className="text-lg font-bold text-indigo-400 mt-1">{usage.requests}</div>
            </div>
            <div className="bg-[#1f2937] border border-gray-700 p-3 rounded-xl">
              <div className="text-gray-400 text-[10px]">Total Tokens</div>
              <div className="text-lg font-bold text-sky-400 mt-1">{usage.totalTokens.toLocaleString()}</div>
            </div>
            <div className="bg-[#1f2937] border border-gray-700 p-3 rounded-xl">
              <div className="text-gray-400 text-[10px]">Est. Cost</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">${cost}</div>
            </div>
          </div>

          <div className="bg-[#1f2937] border border-gray-700 p-3 rounded-xl space-y-2">
            <div className="font-semibold text-white">Token Distribution</div>
            <div className="flex justify-between text-gray-300">
              <span>Prompt Tokens:</span>
              <span className="font-mono">{usage.promptTokens.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Completion Tokens:</span>
              <span className="font-mono">{usage.completionTokens.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-400 text-[10px] pt-1 border-t border-gray-700">
              <span>Last Reset:</span>
              <span>{new Date(usage.lastReset).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-between items-center bg-[#0b0f19]">
          <button
            onClick={() => {
              onReset();
              onClose();
            }}
            className="text-red-400 hover:text-red-300 flex items-center gap-1"
          >
            <i className="fa-solid fa-rotate-left"></i> Reset Stats
          </button>
          <button onClick={onClose} className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
