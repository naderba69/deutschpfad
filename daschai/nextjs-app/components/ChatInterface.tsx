"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChatSession, ChatMessage, AppSettings, UsageStats, MessageAttachment } from "@/lib/types";
import { MessageItem } from "./MessageItem";
import { Sidebar } from "./Sidebar";
import { SettingsModal } from "./SettingsModal";
import { GitHubWorkbench } from "./GitHubWorkbench";
import { UsageModal } from "./UsageModal";
import Tesseract from "tesseract.js";

export const ChatInterface: React.FC = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string>("");
  const [settings, setSettings] = useState<AppSettings>({
    openrouterApiKey: "",
    model: "anthropic/claude-3.5-sonnet",
    systemPrompt: "أنت OX-Alpha Workbench Pro، مهندس برمجيات ووكيل ذكاء اصطناعي خبير.",
    temperature: 0.7,
    maxTokens: 4096,
    streaming: true,
    retries: 2,
    githubToolsEnabled: true,
    githubToken: "",
    githubOwner: "",
    githubRepo: "",
    githubBranch: "main",
    dailyReqLimit: 100,
    dailyTokenLimit: 100000,
    theme: "dark",
    direction: "rtl",
    ttsVoice: "auto",
    ttsRate: 1.0,
    ttsPitch: 1.0,
  });

  const [usage, setUsage] = useState<UsageStats>({
    requests: 0,
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
    lastReset: new Date().toISOString(),
  });

  const [offlineQueue, setOfflineQueue] = useState<{ sessionId: string; messageId: string }[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [attachment, setAttachment] = useState<any | null>(null);
  const [extractionStatus, setExtractionStatus] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [speechLang, setSpeechLang] = useState<"en-US" | "ar-SA">("ar-SA");

  // Modals state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isGitHubOpen, setIsGitHubOpen] = useState(false);
  const [isUsageOpen, setIsUsageOpen] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const savedSettings = localStorage.getItem("ox_alpha_settings");
    if (savedSettings) {
      try {
        setSettings((prev) => ({ ...prev, ...JSON.parse(savedSettings) }));
      } catch (e) {}
    }

    const savedUsage = localStorage.getItem("ox_alpha_usage");
    if (savedUsage) {
      try {
        setUsage(JSON.parse(savedUsage));
      } catch (e) {}
    }

    const savedSessions = localStorage.getItem("ox_alpha_sessions");
    if (savedSessions) {
      try {
        const parsed = JSON.parse(savedSessions);
        setSessions(parsed);
        if (parsed.length > 0) setActiveSessionId(parsed[0].id);
      } catch (e) {}
    } else {
      const initial: ChatSession = {
        id: "session_" + Date.now(),
        title: "محادثة جديدة",
        createdAt: new Date().toISOString(),
        messages: [],
      };
      setSessions([initial]);
      setActiveSessionId(initial.id);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Save Sessions
  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem("ox_alpha_sessions", JSON.stringify(sessions));
    }
  }, [sessions]);

  // Save Usage
  useEffect(() => {
    localStorage.setItem("ox_alpha_usage", JSON.stringify(usage));
  }, [usage]);

  // Auto-scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [sessions, isStreaming]);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];

  // Universal File Processor (PDF RAG, OCR Images, Code & Text Files)
  const handleFileUpload = async (file: File) => {
    const fileName = file.name;
    const isPdf = file.type === "application/pdf" || fileName.toLowerCase().endsWith(".pdf");
    const isImage = file.type.startsWith("image/");

    if (isPdf) {
      setAttachment({ type: "pdf", name: fileName, textContent: "" });
      setExtractionStatus("جاري استخراج صفحات PDF محلياً...");
      try {
        const pdfjsLib = (window as any).pdfjsLib;
        if (pdfjsLib) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
          const buffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
          let text = "";
          for (let p = 1; p <= pdf.numPages; p++) {
            const page = await pdf.getPage(p);
            const content = await page.getTextContent();
            text += `\n--- [صفحة ${p}] ---\n` + content.items.map((it: any) => it.str).join(" ");
          }
          setAttachment({ type: "pdf", name: fileName, numPages: pdf.numPages, textContent: text });
          setExtractionStatus(`تم استخراج ${pdf.numPages} صفحة (${text.length.toLocaleString()} حرف)`);
        }
      } catch (err: any) {
        setExtractionStatus("خطأ في قراءة PDF: " + err.message);
      }
    } else if (isImage) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        setAttachment({ type: "image", base64, mimeType: file.type, name: fileName, textContent: "" });
        setExtractionStatus("جاري استخراج النص الضوئي (OCR)...");
        try {
          const result = await Tesseract.recognize(base64, "ara+eng");
          const extracted = result.data?.text?.trim() || "";
          setAttachment({ type: "image", base64, mimeType: file.type, name: fileName, textContent: extracted });
          setExtractionStatus(extracted ? `تم استخراج OCR (${extracted.length} حرف)` : "تم إرفاق الصورة كمدخل بصري");
        } catch (err) {
          setExtractionStatus("تم إرفاق الصورة بنجاح");
        }
      };
      reader.readAsDataURL(file);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setAttachment({ type: "text", name: fileName, textContent: content });
        setExtractionStatus(`تم تحميل الملف (${content.length.toLocaleString()} حرف)`);
      };
      reader.readAsText(file);
    }
  };

  // Voice Dictation (STT)
  const toggleRecording = () => {
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) {
      alert("خاصية الإملاء الصوتي غير مدعومة في المتصفح الحالي.");
      return;
    }

    if (isRecording) {
      recognitionRef.current?.stop();
      setIsRecording(false);
    } else {
      const rec = new SpeechRec();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = speechLang;
      rec.onresult = (event: any) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setInputVal(transcript);
      };
      rec.onend = () => setIsRecording(false);
      rec.onerror = () => setIsRecording(false);
      rec.start();
      recognitionRef.current = rec;
      setIsRecording(true);
    }
  };

  // Send Message Logic
  const handleSendMessage = async (forcedPrompt?: string) => {
    const textToSend = forcedPrompt || inputVal.trim();
    if (!textToSend && !attachment) return;
    if (isStreaming) return;

    const userMsg: ChatMessage = {
      id: "msg_" + Date.now(),
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      attachment: attachment ? { ...attachment } : null,
      pending: !isOnline,
    };

    const targetSessionId = activeSession.id;

    setSessions((prev) =>
      prev.map((s) => {
        if (s.id === targetSessionId) {
          return {
            ...s,
            title: s.messages.length === 0 ? textToSend.slice(0, 32) || (attachment ? `مستند: ${attachment.name}` : "محادثة جديدة") : s.title,
            messages: [...s.messages, userMsg],
          };
        }
        return s;
      })
    );

    if (!forcedPrompt) {
      setInputVal("");
      setAttachment(null);
      setExtractionStatus(null);
    }

    if (!isOnline) {
      setOfflineQueue((prev) => [...prev, { sessionId: targetSessionId, messageId: userMsg.id }]);
      return;
    }

    setIsStreaming(true);
    abortControllerRef.current = new AbortController();

    const asstMsgId = "asst_" + Date.now();
    const asstMsg: ChatMessage = {
      id: asstMsgId,
      role: "assistant",
      content: "",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setSessions((prev) =>
      prev.map((s) => (s.id === targetSessionId ? { ...s, messages: [...s.messages, asstMsg] } : s))
    );

    try {
      const history = [...activeSession.messages, userMsg].map((m: any) => {
        if (m.role === "user" && m.attachment) {
          let text = m.content || "";
          if (m.attachment.type === "pdf") {
            text += `\n\n[محتوى مستند PDF (${m.attachment.name} - ${m.attachment.numPages} صفحات)]:\n${m.attachment.textContent}`;
          } else if (m.attachment.type === "text") {
            text += `\n\n[محتوى الملف (${m.attachment.name})]:\n${m.attachment.textContent}`;
          } else if (m.attachment.type === "image") {
            if (m.attachment.textContent) text += `\n\n[النص المستخرج OCR]:\n${m.attachment.textContent}`;
            return {
              role: "user",
              content: [
                { type: "text", text },
                { type: "image_url", image_url: { url: m.attachment.base64 } },
              ],
            };
          }
          return { role: "user", content: text };
        }
        return { role: m.role, content: m.content };
      });

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: settings.openrouterApiKey,
          model: settings.model,
          messages: [
            { role: "system", content: settings.systemPrompt },
            ...history,
          ],
          temperature: settings.temperature,
          maxTokens: settings.maxTokens,
          stream: true,
          enableTools: settings.githubToolsEnabled && !!settings.githubToken,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!res.ok) throw new Error(await res.text());

      const reader = res.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullText = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");
          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith("data: ") && trimmed !== "data: [DONE]") {
              try {
                const json = JSON.parse(trimmed.replace("data: ", ""));
                const delta = json.choices[0]?.delta?.content;
                if (delta) {
                  fullText += delta;
                  setSessions((prev) =>
                    prev.map((s) =>
                      s.id === targetSessionId
                        ? {
                            ...s,
                            messages: s.messages.map((m) => (m.id === asstMsgId ? { ...m, content: fullText } : m)),
                          }
                        : s
                    )
                  );
                }
              } catch (e) {}
            }
          }
        }
      }

      const approxTokens = Math.ceil(fullText.length / 4);
      setUsage((prev) => ({
        ...prev,
        requests: prev.requests + 1,
        completionTokens: prev.completionTokens + approxTokens,
        totalTokens: prev.totalTokens + approxTokens,
      }));
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setSessions((prev) =>
          prev.map((s) =>
            s.id === targetSessionId
              ? {
                  ...s,
                  messages: s.messages.map((m) =>
                    m.id === asstMsgId ? { ...m, content: `❌ خطأ: ${err.message}` } : m
                  ),
                }
              : s
          )
        );
      }
    } finally {
      setIsStreaming(false);
    }
  };

  const handleStop = () => {
    if (abortControllerRef.current) abortControllerRef.current.abort();
    setIsStreaming(false);
  };

  return (
    <div className={`flex h-screen w-screen overflow-hidden ${settings.direction === "rtl" ? "rtl" : "ltr"}`}>
      {/* Sidebar */}
      <Sidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        usage={usage}
        settings={settings}
        onSelectSession={setActiveSessionId}
        onNewSession={() => {
          const newS: ChatSession = {
            id: "session_" + Date.now(),
            title: "محادثة جديدة",
            createdAt: new Date().toISOString(),
            messages: [],
          };
          setSessions([newS, ...sessions]);
          setActiveSessionId(newS.id);
        }}
        onDeleteSession={(id) => {
          setSessions(sessions.filter((s) => s.id !== id));
        }}
        onRenameSession={(id) => {
          const s = sessions.find((item) => item.id === id);
          if (s) {
            const title = prompt("العنوان الجديد:", s.title);
            if (title) {
              setSessions(sessions.map((item) => (item.id === id ? { ...item, title } : item)));
            }
          }
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenUsage={() => setIsUsageOpen(true)}
        onExport={() => {
          const blob = new Blob([JSON.stringify(activeSession, null, 2)], { type: "application/json" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `chat_${activeSession.id}.json`;
          a.click();
        }}
        onClearAll={() => {
          if (confirm("هل تريد مسح كافة المحادثات؟")) {
            setSessions([]);
          }
        }}
      />

      {/* Main Chat Workspace */}
      <div className="flex-1 flex flex-col h-full bg-[#0b0f19] relative">
        {/* Top Navbar */}
        <header className="h-14 bg-[#111827]/80 backdrop-blur-md border-b border-gray-800 px-4 flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center gap-3">
            <div
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center gap-2 bg-[#1f2937] border border-gray-700 px-3 py-1.5 rounded-full text-xs text-white cursor-pointer hover:border-indigo-500 transition"
            >
              <span className={`w-2 h-2 rounded-full ${isOnline ? "bg-emerald-500 shadow-emerald-500/50 shadow-sm" : "bg-red-500"}`}></span>
              <span className="font-semibold">{settings.model}</span>
              <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div
              onClick={() => setIsUsageOpen(true)}
              className="hidden sm:flex items-center gap-1.5 bg-indigo-950/30 border border-indigo-500/30 text-indigo-400 px-2.5 py-1 rounded-lg text-xs cursor-pointer"
            >
              <i className="fa-solid fa-coins"></i>
              <span>{usage.requests} طلب | ~{usage.totalTokens} رمز</span>
            </div>

            <button
              onClick={() => setIsGitHubOpen(true)}
              className="flex items-center gap-1.5 bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 px-2.5 py-1 rounded-lg text-xs hover:bg-emerald-900/40 transition"
            >
              <i className="fa-brands fa-github"></i>
              <span className="hidden sm:inline">عميل GitHub</span>
            </button>

            <button
              onClick={() => setSpeechLang(speechLang === "ar-SA" ? "en-US" : "ar-SA")}
              className="w-8 h-8 rounded-lg bg-[#1f2937] border border-gray-700 hover:text-white text-gray-300 text-xs font-bold"
              title="تبديل لغة الصوت"
            >
              {speechLang === "ar-SA" ? "AR" : "EN"}
            </button>

            <button
              onClick={() =>
                setSettings({ ...settings, direction: settings.direction === "rtl" ? "ltr" : "rtl" })
              }
              className="w-8 h-8 rounded-lg bg-[#1f2937] border border-gray-700 hover:text-white text-gray-300 text-xs"
              title="تبديل اتجاه النص"
            >
              <i className="fa-solid fa-right-left"></i>
            </button>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="w-8 h-8 rounded-lg bg-[#1f2937] border border-gray-700 hover:text-white text-gray-300 text-xs"
            >
              <i className="fa-solid fa-sliders"></i>
            </button>
          </div>
        </header>

        {/* Chat Messages */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {activeSession.messages.length === 0 ? (
            <div className="max-w-xl mx-auto my-auto text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-400 flex items-center justify-center text-white text-2xl mx-auto shadow-xl shadow-indigo-500/30">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                OX-Alpha Workbench Pro
              </h1>
              <p className="text-gray-400 text-xs max-w-md mx-auto leading-relaxed">
                بيئة العمل الذاتية للذكاء الاصطناعي وهندسة البرمجيات: تشغيل بايثون داخل المتصفح، محادثة مستندات PDF محلياً، ربط GitHub، واستخراج النصوص بالـ OCR.
              </p>
            </div>
          ) : (
            activeSession.messages.map((msg) => (
              <MessageItem
                key={msg.id}
                message={msg}
                ttsVoice={settings.ttsVoice}
                ttsRate={settings.ttsRate}
                ttsPitch={settings.ttsPitch}
                onTriggerPrompt={handleSendMessage}
              />
            ))
          )}
        </div>

        {/* Input & Upload Dock */}
        <div className="p-4 bg-[#111827]/80 backdrop-blur-md border-t border-gray-800">
          <div className="max-w-4xl mx-auto space-y-2">
            {/* Attachment Bar */}
            {attachment && (
              <div className="flex items-center gap-3 p-2 bg-[#1f2937] border border-gray-700 rounded-xl text-xs">
                {attachment.type === "image" ? (
                  <img src={attachment.base64} alt="Thumb" className="w-10 h-10 rounded-lg object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-xl text-indigo-400">
                    <i className={attachment.type === "pdf" ? "fa-solid fa-file-pdf text-red-400" : "fa-solid fa-file-code"}></i>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white truncate">{attachment.name}</div>
                  <div className="text-[10px] text-sky-400 flex items-center gap-1">
                    <i className="fa-solid fa-circle-notch fa-spin"></i> {extractionStatus || "جاري المعالجة..."}
                  </div>
                </div>
                <button onClick={() => setAttachment(null)} className="p-1 text-gray-400 hover:text-red-400">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            )}

            {/* Textarea Input */}
            <div className="flex flex-col bg-[#1f2937] border border-gray-700 rounded-2xl p-2 focus-within:border-indigo-500 transition shadow-lg">
              <textarea
                rows={2}
                placeholder="اسأل OX-Alpha، أو أملِ صوتياً، أو أرفق ملفات PDF وأكواد وصور..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none resize-none px-2 py-1"
              />

              <div className="flex items-center justify-between pt-1 border-t border-gray-800">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition"
                    title="إرفاق ملف PDF أو كود أو صورة"
                  >
                    <i className="fa-solid fa-paperclip text-xs"></i>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf,image/*,.txt,.md,.json,.py,.js,.ts,.csv"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
                    }}
                  />

                  <button
                    onClick={toggleRecording}
                    className={`p-1.5 rounded-lg transition ${
                      isRecording ? "text-red-400 bg-red-950/40 animate-pulse" : "text-gray-400 hover:text-white hover:bg-gray-700"
                    }`}
                    title="إملاء صوتي"
                  >
                    <i className="fa-solid fa-microphone text-xs"></i>
                  </button>

                  <button
                    onClick={() => setIsGitHubOpen(true)}
                    className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition"
                    title="فتح مستودع GitHub"
                  >
                    <i className="fa-brands fa-github text-xs"></i>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {isStreaming ? (
                    <button
                      onClick={handleStop}
                      className="px-3.5 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1 shadow-md shadow-red-500/20"
                    >
                      <i className="fa-solid fa-stop"></i> إيقاف
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputVal.trim() && !attachment}
                      className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-sky-500 hover:opacity-95 disabled:opacity-40 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-500/20 transition"
                    >
                      <span>إرسال</span> <i className="fa-solid fa-paper-plane text-[10px]"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SettingsModal
        isOpen={isSettingsOpen}
        settings={settings}
        onClose={() => setIsSettingsOpen(false)}
        onSave={(newSet) => {
          setSettings(newSet);
          localStorage.setItem("ox_alpha_settings", JSON.stringify(newSet));
        }}
      />

      <GitHubWorkbench
        isOpen={isGitHubOpen}
        settings={settings}
        onClose={() => setIsGitHubOpen(false)}
        onAskAiReview={(path, content) => {
          handleSendMessage(`يرجى مراجعة ملف المستودع \`${path}\`:\n\n\`\`\`\n${content}\n\`\`\``);
        }}
      />

      <UsageModal
        isOpen={isUsageOpen}
        usage={usage}
        onClose={() => setIsUsageOpen(false)}
        onReset={() => {
          const res: UsageStats = {
            requests: 0,
            promptTokens: 0,
            completionTokens: 0,
            totalTokens: 0,
            lastReset: new Date().toISOString(),
          };
          setUsage(res);
        }}
      />
    </div>
  );
};
