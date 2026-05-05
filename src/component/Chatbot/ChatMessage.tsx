import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Message {
  role: string;
  text: string;
}

interface ChatMessageProps {
  chat: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  const isBot = chat.role === "model";

  return (
    <div
      className={`flex items-start gap-3 mb-4 ${
        isBot ? "flex-row" : "flex-col items-end"
      }`}
    >
      {/* Icon bot — chỉ hiện bên trái khi là bot */}
      {isBot && (
        <div className="w-9 h-9 rounded-full bg-[#1386ed] flex items-center justify-center flex-shrink-0 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="w-5 h-5 fill-white"
          >
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
          </svg>
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
          }}
        >
          {chat.text || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;