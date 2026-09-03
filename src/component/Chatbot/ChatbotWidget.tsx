import { useEffect, useState, useRef } from "react";
import axios from "axios";
import ChatbotIcon from "./ChatbotIcon";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface QuickReply {
  label: string;
  text: string;
}

interface Message {
  role: string;
  text: string;
  quickReplies?: QuickReply[];
}

interface GeminiHistory {
  role: string;
  parts: { text: string }[];
}

interface SessionData {
  phone?: string;
  waitingFor?: string;
  pendingBooking?: any;
}

const QUICK_REPLIES = [
  { label: "Đặt lịch khám", text: "Tôi muốn đặt lịch khám" },
  { label: "Bảng giá dịch vụ", text: "Cho tôi xem bảng giá dịch vụ" },
  { label: "Lịch trống hôm nay", text: "Còn lịch trống không?" },
  { label: "Tra cứu lịch hẹn", text: "Tra cứu lịch hẹn của tôi" },
  { label: "Giới thiệu bác sĩ", text: "Giới thiệu các bác sĩ của phòng khám" },
  { label: "Giờ làm việc", text: "Giờ làm việc của phòng khám?" },
];

// ─── Session Storage keys ────────────────────────────────────────────────────
const SS_CHAT_HISTORY = "chatbot_chat_history";
const SS_GEMINI_HISTORY = "chatbot_gemini_history";
const SS_SESSION_DATA = "chatbot_session_data";
const SS_SHOW_QUICK = "chatbot_show_quick";

const loadFromSession = <T,>(key: string, fallback: T): T => {
  try {
    const raw = sessionStorage.getItem(key);
    if (raw) return JSON.parse(raw) as T;
  } catch {
    // ignore parse error
  }
  return fallback;
};

const saveToSession = (key: string, value: unknown) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota error
  }
};

// ─── Component ────────────────────────────────────────────────────────────────
const ChatbotWidget: React.FC = () => {
  const userAuth = useSelector((state: RootState) => state.user);
  const isLoggedIn = !!userAuth?.login;
  const accessToken = userAuth?.user?.access_token;
  const hasResumedRef = useRef(false);

  const [chatHistory, setChatHistory] = useState<Message[]>(() =>
    loadFromSession<Message[]>(SS_CHAT_HISTORY, [])
  );
  const [geminiHistory, setGeminiHistory] = useState<GeminiHistory[]>(() =>
    loadFromSession<GeminiHistory[]>(SS_GEMINI_HISTORY, [])
  );
  const [sessionData, setSessionData] = useState<SessionData>(() =>
    loadFromSession<SessionData>(SS_SESSION_DATA, {})
  );
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showQuickReplies, setShowQuickReplies] = useState<boolean>(() =>
    loadFromSession<boolean>(SS_SHOW_QUICK, true)
  );
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Persist chatHistory → sessionStorage
  useEffect(() => {
    saveToSession(SS_CHAT_HISTORY, chatHistory);
  }, [chatHistory]);

  // Persist geminiHistory → sessionStorage
  useEffect(() => {
    saveToSession(SS_GEMINI_HISTORY, geminiHistory);
  }, [geminiHistory]);

  // Persist sessionData → sessionStorage
  useEffect(() => {
    saveToSession(SS_SESSION_DATA, sessionData);
  }, [sessionData]);

  // Persist showQuickReplies → sessionStorage
  useEffect(() => {
    saveToSession(SS_SHOW_QUICK, showQuickReplies);
  }, [showQuickReplies]);

  const generateBotResponse = async (
    history: Message[],
    messageText?: string
  ): Promise<void> => {
    const lastUserMsg = messageText || history[history.length - 1]?.text || "";
    setIsTyping(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat`,
        { message: lastUserMsg, history: geminiHistory, sessionData },
        isLoggedIn && accessToken
          ? { headers: { token: `Bearer ${accessToken}` } }
          : undefined
      );

      const { reply, sessionData: newSession, quickReplies } = response.data;

      setChatHistory((prev) => {
        const updated = [...prev, { role: "model", text: reply, quickReplies }];
        saveToSession(SS_CHAT_HISTORY, updated);
        return updated;
      });
      setIsTyping(false);

      if (newSession) {
        setSessionData(newSession);
      }

      setGeminiHistory((prev) => {
        const updated = [
          ...prev.slice(-10),
          { role: "user", parts: [{ text: lastUserMsg }] },
          { role: "model", parts: [{ text: reply }] },
        ];
        saveToSession(SS_GEMINI_HISTORY, updated);
        return updated;
      });
    } catch (error: any) {
      setIsTyping(false);
      const errMsg =
        error?.response?.data?.reply ||
        "Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại hoặc gọi **(028) 1234 5678**.";
      setChatHistory((prev) => {
        const updated = [...prev, { role: "model", text: errMsg }];
        saveToSession(SS_CHAT_HISTORY, updated);
        return updated;
      });
    }
  };

  const sendQuickReply = (text: string) => {
    setShowQuickReplies(false);
    const newHistory = [...chatHistory, { role: "user", text }];
    setChatHistory(newHistory);
    generateBotResponse(newHistory, text);
  };

  // Auto scroll khi có tin nhắn mới
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, isTyping]);

  useEffect(() => {
    if (
      isLoggedIn &&
      !hasResumedRef.current &&
      sessionData.waitingFor === "booking_confirm"
    ) {
      hasResumedRef.current = true;
      generateBotResponse(chatHistory, "Tiếp tục đặt lịch");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

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

      <div className="fixed bottom-10 sm:bottom-20 right-5 z-[1000]">
        <div className={`
          absolute bottom-20 right-0
          w-[420px] max-w-[90vw]
          max-h-[80vh] sm:max-h-none flex flex-col
          bg-white rounded-2xl overflow-hidden
          shadow-[0_20px_40px_rgba(19,134,237,0.15),0_10px_25px_rgba(0,0,0,0.1)]
          transition-all duration-300 origin-bottom-right
          ${showChatbot ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-4 scale-90"}
        `}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#1386ed]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <ChatbotIcon />
              </div>
              <div>
                <h3 className="text-white text-base font-semibold leading-tight m-0">
                  Linh - Tiếp Tân nha khoa ToothHive
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
            className="flex flex-col flex-1 min-h-0 sm:flex-none sm:h-[430px] overflow-y-auto overflow-x-hidden px-4 py-5 bg-gray-50
              [scrollbar-width:thin] [scrollbar-color:#1386ed_#f1f1f1]
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#1386ed] [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {/* Tin nhắn chào mặc định */}
            <div className="flex items-start gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden ring-1 ring-[#1386ed]/20">
                <ChatbotIcon />
              </div>
              <div className="flex flex-col gap-2 max-w-[80%]">
                <p className="px-4 py-3 text-sm leading-relaxed text-gray-700 bg-[#f0f7ff] border-l-[3px] border-[#1386ed] rounded-[16px] rounded-tl-[4px] shadow-[0_2px_8px_rgba(19,134,237,0.1)] m-0">
                  Xin chào! Tôi là <strong>Linh</strong> — Tiếp Tân Ảo của Toothhive.<br />
                  Tôi có thể giúp bạn đặt lịch, xem giá hoặc tra cứu thông tin. Bạn cần gì?
                </p>
              </div>
            </div>

            {/* Quick reply chips — chỉ hiện khi chưa có chat history */}
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

            {/* Lịch sử chat */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} onQuickReply={sendQuickReply} />
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden ring-1 ring-[#1386ed]/20">
                  <ChatbotIcon />
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