import type { Metadata } from "next";

import {ConversationSimulator} from "@/components/speaking/conversation-simulator";

export const metadata: Metadata = {
  title: "محادثة تفاعلية — DeutschPfad",
  description:
    "سيناريوهات محادثة واقعية (مقهى، طبيب، بنك) تختار فيها ردّك والمحاور يردّ — بلا LLM وبلا خادم، مع نطق ألماني. مجاني 100%.",
};

export default function ConversationsPage() {
  return <ConversationSimulator />;
}
