import { useEffect, useState, useRef } from "react";
import axios from "axios";
import ChatbotIcon from "./ChatbotIcon";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";

interface Message {
    role: string;
    text: string;
}

const ChatbotWidget: React.FC = () => {
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [showChatbot, setShowChatbot] = useState<boolean>(false);
    const chatBodyRef = useRef<HTMLDivElement>(null);

    const generateBotResponse = async (history: Message[]): Promise<void> => {
        const updateHistory = (text: string) => {
            setChatHistory((prev) => [
                ...prev.filter((msg) => msg.text !== "Thinking..."),
                { role: "model", text },
            ]);
        };

        try {
            const mappedHistory = history.map(({ role, text }) => ({
                role,
                parts: [{ text }],
            }));

            const response = await axios.post(
                "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent",
                { contents: mappedHistory },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-goog-api-key": process.env.REACT_APP_GEMINI_API_KEY as string,
                    },
                }
            );

            const botText: string =
                response.data.candidates[0]?.content?.parts[0]?.text?.trim() ?? "";
            updateHistory(botText);
        } catch (error) {
            console.error("Error generating bot response:", error);
            updateHistory("Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại.");
        }
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [chatHistory]);

    return (
        <>
            {/* Keyframe animation — inject 1 lần duy nhất */}
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.5; }
          30%            { transform: translateY(-8px); opacity: 1;   }
        }
      `}</style>

            {/* Wrapper cố định góc phải */}
            <div className="fixed bottom-7 right-7 z-[1000]">

                {/* ===== CHATBOT POPUP ===== */}
                <div
                    className={`
            absolute bottom-20 right-0
            w-[420px] max-w-[90vw]
            bg-white rounded-2xl overflow-hidden
            shadow-[0_20px_40px_rgba(19,134,237,0.15),0_10px_25px_rgba(0,0,0,0.1)]
            transition-all duration-300 origin-bottom-right
            ${showChatbot
                            ? "opacity-100 visible translate-y-0 scale-100"
                            : "opacity-0 invisible translate-y-4 scale-90"
                        }
          `}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 bg-[#1386ed]">
                        <div className="flex items-center gap-3">
                            {/* Icon nền trắng */}
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 p-1.5">
                                <ChatbotIcon />
                            </div>
                            <div>
                                <h3 className="text-white text-base font-semibold leading-tight m-0">
                                    Trợ lý AI
                                </h3>
                                <p className="text-blue-100 text-xs mt-0.5 m-0">Đang hoạt động</p>
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
                        className="flex flex-col gap-4 h-[430px] overflow-y-auto overflow-x-hidden px-5 py-6 bg-gray-50
              [scrollbar-width:thin] [scrollbar-color:#1386ed_#f1f1f1]
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#1386ed] [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        {/* Tin nhắn chào mặc định */}
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-9 h-9 rounded-full bg-[#1386ed] flex items-center justify-center flex-shrink-0 mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    className="w-5 h-5 fill-white"
                                >
                                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
                                </svg>
                            </div>
                            <p className="px-4 py-3 max-w-[80%] text-sm leading-relaxed text-gray-700 bg-[#f0f7ff] border-l-[3px] border-[#1386ed] rounded-[18px] rounded-tl-[4px] shadow-[0_2px_8px_rgba(19,134,237,0.1)] m-0">
                                Xin chào! 🧐 <br /> Tôi có thể giúp gì cho bạn hôm nay?
                            </p>
                        </div>

                        {/* Lịch sử hội thoại */}
                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat} />
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-4 bg-white border-t border-gray-100">
                        <ChatForm
                            chatHistory={chatHistory}
                            setChatHistory={setChatHistory}
                            generateBotResponse={generateBotResponse}
                        />
                    </div>
                </div>

                {/* ===== TOGGLE BUTTON ===== */}
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