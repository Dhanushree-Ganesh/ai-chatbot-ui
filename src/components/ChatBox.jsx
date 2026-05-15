import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Typing from "./Typing";

function ChatBox({ messages, setMessages }) {

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages]);

  const sendMessage = () => {

    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user"
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    let reply = "";

    const text = input.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      reply = "Hello 👋 Nice to meet you!";
    }
    else if (text.includes("help")) {
      reply = "Sure! Tell me what you need help with.";
    }
    else if (text.includes("react")) {
      reply = "ReactJS is a JavaScript library for building UI.";
    }
    else if (text.includes("bye")) {
      reply = "Goodbye 👋 Have a great day!";
    }
    else {
      reply = "Sorry, I don't understand that yet.";
    }

    setTimeout(() => {

      const botReply = {
        text: reply,
        sender: "bot"
      };

      setMessages((prev) => [...prev, botReply]);

      setTyping(false);

    }, 1000);

    setInput("");
  };

  return (
    <div className="chat-container">

      <div className="messages">

        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            sender={msg.sender}
          />
        ))}

        {typing && <Typing />}

        <div ref={bottomRef}></div>

      </div>

      <div className="input-box">

        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatBox;