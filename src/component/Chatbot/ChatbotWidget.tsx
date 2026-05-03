import { useEffect, useState, useRef } from "react";
import axios from "axios";
import ChatbotIcon from "./ChatbotIcon";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";

interface Message {
  role: string;
  text: string;
}

interface GeminiHistory {
  role: string;
  parts: { text: string }[];
}

interface SessionData {
  phone?: string;
  waitingFor?: string;
}

const QUICK_REPLIES = [
  { label: "Đặt lịch khám", text: "Tôi muốn đặt lịch khám" },
  { label: "Bảng giá dịch vụ", text: "Cho tôi xem bảng giá dịch vụ" },
  { label: "Lịch trống hôm nay", text: "Còn lịch trống không?" },
  { label: "Tra cứu lịch hẹn", text: "Tra cứu lịch hẹn của tôi" },
  { label: "Giới thiệu bác sĩ", text: "Giới thiệu các bác sĩ của phòng khám" },
  { label: "Giờ làm việc", text: "Giờ làm việc của phòng khám?" },
];

const ChatbotWidget: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [geminiHistory, setGeminiHistory] = useState<GeminiHistory[]>([]);
  const [sessionData, setSessionData] = useState<SessionData>({});
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showQuickReplies, setShowQuickReplies] = useState<boolean>(true);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const generateBotResponse = async (
    history: Message[],
    messageText?: string
  ): Promise<void> => {
    const lastUserMsg = messageText || history[history.length - 1]?.text || "";

    // Hiển thị typing indicator, KHÔNG thêm "Thinking..." vào history
    setIsTyping(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat`,
        {
          message: lastUserMsg,
          history: geminiHistory,
          sessionData,
        }
      );

      const { reply, sessionData: newSession } = response.data;

      // Thêm reply của bot vào history (không cần filter Thinking... nữa)
      setChatHistory((prev) => [...prev, { role: "model", text: reply }]);
      setIsTyping(false);

      if (newSession) setSessionData(newSession);

      setGeminiHistory((prev) => [
        ...prev.slice(-10),
        { role: "user", parts: [{ text: lastUserMsg }] },
        { role: "model", parts: [{ text: reply }] },
      ]);

    } catch (error: any) {
      setIsTyping(false);
      const errMsg =
        error?.response?.data?.reply ||
        "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.";
      setChatHistory((prev) => [...prev, { role: "model", text: errMsg }]);
    }
  };

  const sendQuickReply = (text: string) => {
    setShowQuickReplies(false);
    const newHistory = [...chatHistory, { role: "user", text }];
    setChatHistory(newHistory);
    // KHÔNG thêm "Thinking..." — isTyping lo việc đó
    generateBotResponse(newHistory, text);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, isTyping]);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30%            { transform: translateY(-6px); opacity: 1; }
        }
        .quick-chip {
          display: inline-block;
          padding: 6px 12px;
          background: #f0f7ff;
          border: 1.5px solid #1386ed;
          border-radius: 20px;
          font-size: 12px;
          color: #1386ed;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .quick-chip:hover {
          background: #1386ed;
          color: white;
        }
      `}</style>

      <div className="fixed bottom-7 right-7 z-[1000]">
        <div className={`
          absolute bottom-20 right-0
          w-[420px] max-w-[90vw]
          bg-white rounded-2xl overflow-hidden
          shadow-[0_20px_40px_rgba(19,134,237,0.15),0_10px_25px_rgba(0,0,0,0.1)]
          transition-all duration-300 origin-bottom-right
          ${showChatbot ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-4 scale-90"}
        `}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#1386ed]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 p-1.5">
                <ChatbotIcon />
              </div>
              <div>
                <h3 className="text-white text-base font-semibold leading-tight m-0">
                  Dũng — Tiếp Tân Ảo
                </h3>
                <p className="text-blue-100 text-xs mt-0.5 m-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block"></span>
                  Toothhive · Đang hoạt động
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowChatbot(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-transparent border-none cursor-pointer text-2xl hover:bg-white/10 transition-colors duration-200 material-symbols-rounded"
            >
              close
            </button>
          </div>

          {/* Body */}
          <div
            ref={chatBodyRef}
            className="flex flex-col h-[430px] overflow-y-auto overflow-x-hidden px-4 py-5 bg-gray-50
              [scrollbar-width:thin] [scrollbar-color:#1386ed_#f1f1f1]
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#1386ed] [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {/* Tin nhắn chào */}
            <div className="flex items-start gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#1386ed] flex items-center justify-center flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-4 h-4 fill-white">
                  <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2 max-w-[80%]">
                <p className="px-4 py-3 text-sm leading-relaxed text-gray-700 bg-[#f0f7ff] border-l-[3px] border-[#1386ed] rounded-[16px] rounded-tl-[4px] shadow-[0_2px_8px_rgba(19,134,237,0.1)] m-0">
                  Xin chào! Tôi là <strong>Dũng</strong> — Tiếp Tân Ảo của Toothhive.<br />
                  Tôi có thể giúp bạn đặt lịch, xem giá hoặc tra cứu thông tin. Bạn cần gì?
                </p>
              </div>
            </div>

            {/* Quick reply chips */}
            {showQuickReplies && chatHistory.length === 0 && (
              <div className="flex flex-wrap gap-2 mb-4 pl-10">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.text}
                    className="quick-chip"
                    onClick={() => sendQuickReply(qr.text)}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Chat history */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}

            {isTyping && (
              <div className="flex items-start gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#1386ed] flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-4 h-4 fill-white">
                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#f0f7ff] border-l-[3px] border-[#1386ed] rounded-[16px] rounded-tl-[4px]">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#1386ed]"
                      style={{ animation: `bounce 1.4s infinite ease-in-out ${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-white border-t border-gray-100">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 rounded-full bg-[#1386ed] text-white border-none cursor-pointer flex items-center justify-center text-2xl shadow-[0_6px_20px_rgba(19,134,237,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(19,134,237,0.5)] material-symbols-rounded"
        >
          {showChatbot ? "close" : "mode_comment"}
        </button>
      </div>
    </>
  );
};

export default ChatbotWidget;