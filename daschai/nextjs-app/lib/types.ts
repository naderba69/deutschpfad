export interface MessageAttachment {
  base64: string;
  mimeType: string;
  name: string;
  ocrText?: string | null;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string | null;
  timestamp?: string;
  attachment?: MessageAttachment | null;
  tool_calls?: any[];
  tool_call_id?: string;
  name?: string;
  pending?: boolean;
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  messages: ChatMessage[];
}

export interface AppSettings {
  openrouterApiKey: string;
  model: string;
  customModel?: string;
  systemPrompt: string;
  temperature: number;
  maxTokens: number;
  streaming: boolean;
  retries: number;
  githubToolsEnabled: boolean;
  githubToken: string;
  githubOwner: string;
  githubRepo: string;
  githubBranch: string;
  dailyReqLimit: number;
  dailyTokenLimit: number;
  theme: string;
  direction: 'ltr' | 'rtl';
  ttsVoice: string;
  ttsRate: number;
  ttsPitch: number;
}

export interface UsageStats {
  requests: number;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  lastReset: string;
}
