"use client";

import React, { useState } from "react";
import { ChatMessage } from "@/lib/types";
import { CodeBlock } from "./CodeBlock";
import { marked } from "marked";
import DOMPurify from "dompurify";

interface MessageItemProps {
  message: ChatMessage;
  onRetry?: () => void;
  onTriggerPrompt?: (prompt: string) => void;
  ttsVoice?: string;
  ttsRate?: number;
  ttsPitch?: number;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  onRetry,
  onTriggerPrompt,
  ttsVoice,
  ttsRate = 1.0,
  ttsPitch = 1.0,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showOcr, setShowOcr] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = () => {
    if (message.content) {
      navigator.clipboard.writeText(message.content);
    }
  };

  const handleSpeak = () => {
    if (!("speechSynthesis" in window) || !message.content) return;

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (isSpeaking) {
        setIsSpeaking(false);
        return;
      }
    }

    const cleanText = message.content
      .replace(/```[\s\S]*?```/g, " Code omitted. ")
      .replace(/[*#_~`\[\]]/g, "")
      .replace(/<[^>]*>/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = ttsRate;
    utterance.pitch = ttsPitch;

    const isArabic = /[\u0600-\u06FF]/.test(cleanText);
    const voices = window.speechSynthesis.getVoices();

    if (ttsVoice && ttsVoice !== "auto") {
      const match = voices.find((v) => v.name === ttsVoice);
      if (match) utterance.voice = match;
    } else if (isArabic) {
      const arVoice = voices.find((v) => v.lang.startsWith("ar"));
      if (arVoice) utterance.voice = arVoice;
      utterance.lang = "ar-SA";
    } else {
      const enVoice = voices.find((v) => v.lang.startsWith("en"));
      if (enVoice) utterance.voice = enVoice;
      utterance.lang = "en-US";
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  if (message.role === "tool") {
    return (
      <div className="flex gap-3 max-w-4xl mx-auto w-full my-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0 text-xs">
          <i className="fa-solid fa-terminal"></i>
        </div>
        <div className="flex-1 bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3 text-xs">
          <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1.5">
            <i className="fa-solid fa-circle-check"></i> Tool Executed: {message.name}
          </div>
          <pre className="p-2 bg-black/40 rounded font-mono text-gray-300 max-h-48 overflow-y-auto whitespace-pre-wrap">
            {message.content}
          </pre>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!message.content) {
      return (
        <div className="flex items-center gap-1 py-1">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]"></span>
        </div>
      );
    }

    const html = DOMPurify.sanitize(marked.parse(message.content) as string);
    return <div className="prose prose-invert max-w-none text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className={`flex gap-3 max-w-4xl mx-auto w-full my-2 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm shadow-md ${
          isUser ? "bg-blue-600 text-white" : "bg-gradient-to-tr from-indigo-600 to-sky-400 text-white"
        }`}
      >
        <i className={`fa-solid ${isUser ? "fa-user" : "fa-robot"}`}></i>
      </div>

      {/* Bubble Content */}
      <div className={`flex flex-col gap-1 min-w-0 max-w-[85%] ${isUser ? "items-end" : "items-start"}`}>
        <div className="flex items-center gap-2 text-[11px] text-gray-400 px-1">
          <span>{isUser ? "You" : "OX-Alpha Copilot"}</span>
          <span>{message.timestamp}</span>
          {message.pending && (
            <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-1 font-semibold">
              <i className="fa-solid fa-clock"></i> Pending (Offline)
            </span>
          )}
        </div>

        <div
          className={`p-4 rounded-2xl text-sm ${
            isUser
              ? "bg-blue-900/60 border border-blue-500/50 text-white rounded-br-sm"
              : "bg-[#1f2937] border border-gray-700/80 text-gray-100 rounded-bl-sm shadow-lg"
          }`}
        >
          {/* Attachments & OCR */}
          {message.attachment && (
            <div className="mb-3 space-y-2">
              <div className="max-w-[280px] rounded-lg overflow-hidden border border-gray-700">
                <img src={message.attachment.base64} alt="Attachment" className="w-full h-auto" />
              </div>
              {message.attachment.ocrText && (
                <div className="bg-sky-950/30 border border-sky-500/30 rounded-lg p-2 text-xs">
                  <div
                    onClick={() => setShowOcr(!showOcr)}
                    className="font-semibold text-sky-400 flex items-center justify-between cursor-pointer"
                  >
                    <span>
                      <i className="fa-solid fa-font mr-1"></i> Extracted OCR Text
                    </span>
                    <i className={`fa-solid ${showOcr ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                  </div>
                  {showOcr && (
                    <div className="mt-2 p-2 bg-black/40 rounded font-mono text-[11px] text-gray-300 max-h-36 overflow-y-auto whitespace-pre-wrap">
                      {message.attachment.ocrText}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {renderContent()}
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition text-xs text-gray-400 px-1">
          <button onClick={handleCopy} className="p-1 hover:text-white rounded flex items-center gap-1">
            <i className="fa-regular fa-copy"></i> Copy
          </button>
          {!isUser && (
            <>
              <button
                onClick={handleSpeak}
                className={`p-1 hover:text-white rounded flex items-center gap-1 ${isSpeaking ? "text-indigo-400 animate-pulse" : ""}`}
              >
                <i className="fa-solid fa-volume-high"></i> Listen
              </button>
              {onRetry && (
                <button onClick={onRetry} className="p-1 hover:text-white rounded flex items-center gap-1">
                  <i className="fa-solid fa-rotate-right"></i> Retry
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
