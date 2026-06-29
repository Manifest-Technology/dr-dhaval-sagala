"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import ChatHeader from "./chat-header";
import ChatMessage from "./chat-message";
import QuickReplies from "./quick-replies";
import ChatComposer from "./chat-composer";

import {
  Message,
  getCurrentTime,
} from "./types";

export default function WhatsAppBooking() {
  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        sender: "bot",
        name: "Dr. Dhaval Sagala",
        text:
          "👋 Welcome to Dr. Dhaval Sagala's Orthopaedic Clinic.\n\nI am Dr. Dhaval's virtual assistant. I can help you with appointments, consultations, timings and hospital information.\n\nPlease select an option below or type your question.",
        time: getCurrentTime(),
      },
    ]);

  const [
    showReplies,
    setShowReplies,
  ] = useState(true);

  // ✅ Scroll only inside chat body
  const chatRef =
    useRef<HTMLDivElement>(null);

  // ✅ Prevent auto-scroll on first page load
  const isFirstRender =
    useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current =
        false;
      return;
    }

    if (!chatRef.current) {
      return;
    }

    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function handleReply(
    option: string
  ) {
    setShowReplies(false);

    const time =
      getCurrentTime();

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        name: "You",
        text: option,
        time,
      },
      {
        id: Date.now() + 1,
        sender: "bot",
        name: "Dr. Dhaval Sagala",
        text:
          "Thank you for your enquiry. Please continue on WhatsApp and our team will assist you personally regarding your request.",
        time,
      },
    ]);
  }

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          flex h-[750px] w-full flex-col overflow-hidden rounded-[36px]
          border border-border/50
          bg-[#efeae2]
          dark:bg-[#111b21]
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        "
      >
        <ChatHeader />

        {/* CHAT BODY */}
        <div
          ref={chatRef}
          className="
            flex-1
            overflow-y-auto
            px-5
            py-5
            scroll-smooth
          "
        >
          <div className="space-y-5">
            {messages.map(
              (message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                />
              )
            )}

            {showReplies && (
              <QuickReplies
                onSelect={
                  handleReply
                }
              />
            )}
          </div>
        </div>

        {/* COMPOSER */}
        <div
          className="
            border-t border-border/50
            bg-white/90
            p-4
            backdrop-blur
            dark:bg-[#202c33]
          "
        >
          <ChatComposer />
        </div>
      </motion.div>
    </div>
  );
}