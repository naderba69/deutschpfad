"use client";

import React, { useState } from "react";
import { AppSettings } from "@/lib/types";

interface GitHubWorkbenchProps {
  isOpen: boolean;
  settings: AppSettings;
  onClose: () => void;
  onAskAiReview: (path: string, content: string) => void;
}

export const GitHubWorkbench: React.FC<GitHubWorkbenchProps> = ({
  isOpen,
  settings,
  onClose,
  onAskAiReview,
}) => {
  const [tree, setTree] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ path: string; content: string } | null>(null);

  if (!isOpen) return null;

  const fetchTree = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          functionName: "get_tree",
          args: { branch: settings.githubBranch || "main" },
          config: {
            token: settings.githubToken,
            owner: settings.githubOwner,
            repo: settings.githubRepo,
            defaultBranch: settings.githubBranch || "main",
          },
        }),
      });
      const data = await res.json();
      setTree(data.tree || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchFile = async (path: string) => {
    setSelectedFile({ path, content: "// Loading file content..." });
    try {
      const res = await fetch("/api/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          functionName: "get_file_content",
          args: { path, branch: settings.githubBranch || "main" },
          config: {
            token: settings.githubToken,
            owner: settings.githubOwner,
            repo: settings.githubRepo,
            defaultBranch: settings.githubBranch || "main",
          },
        }),
      });
      const data = await res.json();
      setSelectedFile({ path, content: data.content || "// Empty or binary file" });
    } catch (e: any) {
      setSelectedFile({ path, content: `// Error loading file: ${e.message}` });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-[#111827] border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="font-bold text-base flex items-center gap-2 text-white">
            <i className="fa-brands fa-github text-emerald-400"></i> GitHub Repository Workbench
          </div>
          <button onClick={onClose} className="p-1 hover:text-white text-gray-400">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 overflow-hidden space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">
              Target Repo:{" "}
              <strong className="text-white">
                {settings.githubOwner ? `${settings.githubOwner}/${settings.githubRepo} (${settings.githubBranch})` : "Not Configured"}
              </strong>
            </span>
            <button
              onClick={fetchTree}
              disabled={loading}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg flex items-center gap-1.5 transition"
            >
              <i className={`fa-solid fa-rotate ${loading ? "animate-spin" : ""}`}></i> Refresh Tree
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 flex-1 min-h-[360px] overflow-hidden text-xs">
            {/* Tree Explorer */}
            <div className="bg-[#1f2937] border border-gray-700 rounded-lg p-2 overflow-y-auto font-mono space-y-1">
              <div className="text-[10px] font-bold text-gray-400 mb-1 px-1">FILE EXPLORER</div>
              {tree.length === 0 ? (
                <div className="text-gray-500 p-2 text-center">Click Refresh Tree to load repository files.</div>
              ) : (
                tree.map((item) => {
                  const isDir = item.type === "tree";
                  const isSelected = selectedFile?.path === item.path;
                  return (
                    <div
                      key={item.path}
                      onClick={() => !isDir && fetchFile(item.path)}
                      className={`px-2 py-1 rounded cursor-pointer flex items-center gap-2 truncate transition ${
                        isSelected
                          ? "bg-indigo-600/30 text-indigo-400 font-bold"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <i className={`fa-solid ${isDir ? "fa-folder text-amber-400" : "fa-file-code text-sky-400"}`}></i>
                      <span className="truncate">{item.path}</span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Viewer */}
            <div className="col-span-2 bg-[#1f2937] border border-gray-700 rounded-lg p-3 flex flex-col overflow-hidden">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-700">
                <span className="font-mono text-gray-300 truncate">{selectedFile?.path || "No file selected"}</span>
                {selectedFile && (
                  <button
                    onClick={() => {
                      onAskAiReview(selectedFile.path, selectedFile.content);
                      onClose();
                    }}
                    className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[11px] font-semibold flex items-center gap-1 shrink-0"
                  >
                    <i className="fa-solid fa-robot"></i> Review with AI
                  </button>
                )}
              </div>
              <pre className="flex-1 overflow-auto font-mono text-[11px] leading-relaxed text-gray-200 bg-black/40 p-2.5 rounded">
                {selectedFile?.content || "// Click a file in the tree to view its content"}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-800 flex justify-end bg-[#0b0f19]">
          <button onClick={onClose} className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
