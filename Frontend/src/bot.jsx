import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

function Bot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const userText = input;

    try {
      const res = await axios.post(
        "http://localhost:4002/bot/v1/message",
        { text: userText },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessages((prev) => [
        ...prev,
        { text: userText, sender: "user" },
        { text: res.data.botMessage || "No reply", sender: "bot" },
      ]);
    } catch (error) {
      console.error("❌ Frontend Error:", error.response?.data || error.message);

      let errorMsg = "Something went wrong.";

      if (error.response?.status === 429) {
        errorMsg = "⚠️ Rate limit reached. Your OpenAI API key is exhausted.";
      }

      setMessages((prev) => [
        ...prev,
        { text: userText, sender: "user" },
        { text: errorMsg, sender: "bot" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 w-full border-b border-gray-800 bg-gray-800 z-10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-lg font-bold">BotSpoof</h1>
          <FaUserCircle size={30} className="cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-20 pb-24 px-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 text-lg mt-8">
            👋 Hi, I'm <span className="text-green-500 font-semibold">BotSpoof</span>.
          </div>
        )}

        <div className="flex flex-col space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-xl max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-gray-800 text-gray-100 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl max-w-[60%] self-start">
              Bot is typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-800 bg-gray-800 z-10 px-4 py-3">
        <div className="flex w-full max-w-4xl mx-auto bg-gray-900 rounded-full px-4 py-2 shadow-lg">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
            placeholder="Ask BotSpoof..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full text-white font-medium transition-colors"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Bot;