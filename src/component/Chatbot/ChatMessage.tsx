import React from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ChatbotIcon from "./ChatbotIcon";

interface Message {
  role: string;
  text: string;
}

interface ChatMessageProps {
  chat: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  const isBot = chat.role === "model";
  const navigate = useNavigate();

  // Xử lý click link: nếu là internal path thì dùng navigate, nếu external thì open tab mới
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!href) return;
    if (href.startsWith("http://") || href.startsWith("https://")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      // Internal path (e.g. /detailDoctor/bs123 hoặc /dat-lich)
      navigate(href);
    }
  };

  return (
    <div
      className={`flex items-start gap-3 mb-4 ${
        isBot ? "flex-row" : "flex-col items-end"
      }`}
    >
      {/* Icon bot */}
      {isBot && (
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden ring-1 ring-[#1386ed]/20">
          <ChatbotIcon />
        </div>
      )}

      {/* Nội dung tin nhắn */}
      <div
        className={`px-4 py-3 max-w-[80%] text-sm leading-relaxed break-words rounded-[18px] animate-[fadeInUp_0.3s_ease] ${
          isBot
            ? "bg-[#f0f7ff] border-l-[3px] border-[#1386ed] rounded-tl-[4px] text-gray-700 shadow-[0_2px_8px_rgba(19,134,237,0.1)]"
            : "bg-[#1386ed] text-white rounded-tr-[4px] shadow-[0_2px_8px_rgba(19,134,237,0.3)]"
        }`}
      >
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            ul: ({ ...props }) => (
              <ul className="list-disc pl-5 my-2 space-y-1" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="list-decimal pl-5 my-2 space-y-1" {...props} />
            ),
            li: ({ ...props }) => <li className="my-1" {...props} />,
            strong: ({ ...props }) => (
              <strong
                className={`font-semibold ${isBot ? "text-[#1386ed]" : "text-white"}`}
                {...props}
              />
            ),
            p: ({ ...props }) => <p className="mb-1 last:mb-0" {...props} />,
            // Link màu xanh, gạch chân, hover đậm hơn — dùng navigate cho internal link
            a: ({ href, children, ...props }) => (
              <a
                href={href || "#"}
                onClick={(e) => handleLinkClick(e, href || "")}
                className={`underline font-medium cursor-pointer transition-colors duration-150 ${
                  isBot
                    ? "text-[#1386ed] hover:text-[#0d6abf]"
                    : "text-white hover:text-blue-100"
                }`}
                {...props}
              >
                {children}
              </a>
            ),
          }}
        >
          {chat.text || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;