import React, { useRef } from "react";

interface Message {
  role: string;
  text: string;
}

interface ChatFormProps {
  chatHistory: Message[];
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
  generateBotResponse: (history: Message[]) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({
  chatHistory,
  setChatHistory,
  generateBotResponse,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage = inputRef.current?.value.trim();
    if (!userMessage) return;

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);
    }, 600);

    generateBotResponse([
      ...chatHistory,
      { role: "user", text: userMessage },
    ]);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-2 border-2 border-gray-200 focus-within:border-[#1386ed] focus-within:shadow-[0_0_0_3px_rgba(19,134,237,0.1)] transition-all duration-200"
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Nhập câu hỏi của bạn..."
        className="flex-1 border-none outline-none bg-transparent text-sm text-gray-700 py-2 placeholder:text-gray-400 placeholder:italic"
      />
      <button
        type="submit"
        className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1386ed] text-white border-none cursor-pointer text-base transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_12px_rgba(19,134,237,0.4)] flex-shrink-0 material-symbols-rounded"
      >
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;