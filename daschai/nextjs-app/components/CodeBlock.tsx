"use client";

import React, { useState } from "react";
import DOMPurify from "dompurify";

interface CodeBlockProps {
  code: string;
  language: string;
  onGenerateTest: (code: string, lang: string) => void;
  onSuggestImprovements: (code: string, lang: string) => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  onGenerateTest,
  onSuggestImprovements,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
  const [currentCode, setCurrentCode] = useState(code);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const lang = (language || "text").toLowerCase();
  const isPython = ["python", "py"].includes(lang);
  const isJS = ["javascript", "js"].includes(lang);
  const isSvg = lang === "svg" || (currentCode.includes("<svg") && currentCode.includes("</svg>"));

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormat = async () => {
    try {
      if (typeof window !== "undefined" && (window as any).prettier) {
        const prettier = (window as any).prettier;
        const plugins = (window as any).prettierPlugins;
        let parser = "babel";
        if (["html", "xml", "svg"].includes(lang)) parser = "html";
        else if (["css", "scss"].includes(lang)) parser = "postcss";
        else if (["json"].includes(lang)) parser = "json";

        const formatted = await prettier.format(currentCode, {
          parser,
          plugins: Object.values(plugins || {}),
          semi: true,
          singleQuote: true,
        });
        setCurrentCode(formatted);
      }
    } catch (e) {
      console.warn("Formatting failed", e);
    }
  };

  const handleRunPython = async () => {
    setIsRunning(true);
    setTerminalOutput("⏳ جاري تهيئة بيئة Python (Pyodide Wasm)...");
    try {
      if (typeof window !== "undefined") {
        if (!(window as any)._pyodide) {
          const loadPyodide = (window as any).loadPyodide;
          if (!loadPyodide) throw new Error("Pyodide library is not loaded");
          (window as any)._pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
          });
        }
        const pyodide = (window as any)._pyodide;
        await pyodide.runPythonAsync(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
        `);
        await pyodide.runPythonAsync(currentCode);
        const stdout = await pyodide.runPythonAsync("sys.stdout.getvalue()");
        const stderr = await pyodide.runPythonAsync("sys.stderr.getvalue()");
        const out = stdout + (stderr ? `\n[Stderr]: ${stderr}` : "");
        setTerminalOutput(out || "✓ تم تنفيذ الكود بنجاح دون مخرجات.");
      }
    } catch (err: any) {
      setTerminalOutput(`❌ خطأ: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleRunJS = () => {
    const logs: string[] = [];
    const origLog = console.log;
    try {
      console.log = (...args) => logs.push(args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" "));
      const res = new Function(currentCode)();
      if (res !== undefined) logs.push(`Return: ${JSON.stringify(res)}`);
      setTerminalOutput(logs.join("\n") || "✓ تم تنفيذ JavaScript بنجاح.");
    } catch (err: any) {
      setTerminalOutput(`❌ خطأ: ${err.message}`);
    } finally {
      console.log = origLog;
    }
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([currentCode], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `diagram_${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-3 rounded-lg border border-gray-700 bg-[#0d1117] overflow-hidden text-xs">
      {/* Code Block Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#161b22] border-b border-gray-700 text-gray-400 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold uppercase text-sky-400">{lang}</span>
          {isSvg && (
            <div className="flex bg-gray-800 rounded p-0.5 text-[11px]">
              <button
                className={`px-2 py-0.5 rounded ${activeTab === "code" ? "bg-indigo-600 text-white" : "text-gray-400"}`}
                onClick={() => setActiveTab("code")}
              >
                Code
              </button>
              <button
                className={`px-2 py-0.5 rounded ${activeTab === "preview" ? "bg-indigo-600 text-white" : "text-gray-400"}`}
                onClick={() => setActiveTab("preview")}
              >
                معاينة
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {isPython && (
            <button
              onClick={handleRunPython}
              disabled={isRunning}
              className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition flex items-center gap-1 font-semibold"
            >
              <i className={`fa-solid ${isRunning ? "fa-circle-notch fa-spin" : "fa-play"}`}></i> تشغيل Python
            </button>
          )}
          {isJS && (
            <button
              onClick={handleRunJS}
              className="px-2 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition flex items-center gap-1 font-semibold"
            >
              <i className="fa-solid fa-play"></i> تشغيل JS
            </button>
          )}
          <button
            onClick={handleFormat}
            className="px-2 py-1 rounded bg-white/5 hover:bg-indigo-600 hover:text-white transition text-gray-300 flex items-center gap-1"
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i> تنسيق
          </button>
          <button
            onClick={() => onGenerateTest(currentCode, language)}
            className="px-2 py-1 rounded bg-white/5 hover:bg-indigo-600 hover:text-white transition text-gray-300 flex items-center gap-1"
          >
            <i className="fa-solid fa-vial-circle-check"></i> اختبارات
          </button>
          <button
            onClick={() => onSuggestImprovements(currentCode, language)}
            className="px-2 py-1 rounded bg-white/5 hover:bg-indigo-600 hover:text-white transition text-gray-300 flex items-center gap-1"
          >
            <i className="fa-solid fa-lightbulb"></i> تحسين
          </button>
          {isSvg && (
            <button
              onClick={handleDownloadSvg}
              className="px-2 py-1 rounded bg-white/5 hover:bg-emerald-600 hover:text-white transition text-gray-300 flex items-center gap-1"
            >
              <i className="fa-solid fa-download"></i> SVG
            </button>
          )}
          <button
            onClick={handleCopy}
            className="px-2 py-1 rounded bg-white/5 hover:bg-indigo-600 hover:text-white transition text-gray-300 flex items-center gap-1"
          >
            <i className={`fa-solid ${copied ? "fa-check text-green-400" : "fa-copy"}`}></i>
            {copied ? "تم النسخ" : "نسخ"}
          </button>
        </div>
      </div>

      {/* Body: Preview or Code */}
      {isSvg && activeTab === "preview" ? (
        <div className="p-6 flex items-center justify-center bg-slate-900 min-h-[160px]">
          <div
            className="max-w-full overflow-auto"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(currentCode, {
                ADD_TAGS: ["svg", "path", "circle", "rect", "line", "polygon", "text", "g", "defs", "linearGradient", "stop", "use"],
                ADD_ATTR: ["viewBox", "xmlns", "d", "fill", "stroke", "stroke-width", "cx", "cy", "r", "x", "y", "width", "height", "points", "transform", "font-size", "font-weight", "text-anchor", "id", "offset", "stop-color"],
              }),
            }}
          />
        </div>
      ) : (
        <pre className="p-3 m-0 overflow-x-auto font-mono text-sm leading-relaxed text-gray-200">
          <code>{currentCode}</code>
        </pre>
      )}

      {/* Terminal Output */}
      {terminalOutput && (
        <div className="bg-[#050811] border-t border-gray-700 p-3 font-mono text-xs">
          <div className="flex justify-between items-center text-gray-400 mb-1.5 pb-1 border-b border-gray-800 text-[10px]">
            <span>مخرجات التنفيذ (Terminal)</span>
            <button onClick={() => setTerminalOutput(null)} className="hover:text-white">إغلاق</button>
          </div>
          <div className="text-emerald-300 whitespace-pre-wrap">{terminalOutput}</div>
        </div>
      )}
    </div>
  );
};
