import { useState } from "react";
import Message from "./Message";

function ChatBox() {

  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you?",
      sender: "bot"
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (input.trim() === "") return;

    const userMessage = {
      text: input,
      sender: "user"
    };

    let reply = "";

    const userText = input.toLowerCase();

    if (userText.includes("hello")) {
      reply = "Hello! Nice to meet you 😊";
    }
    else if (userText.includes("hi")) {
      reply = "Hi there 👋";
    }
    else if (userText.includes("help")) {
      reply = "Sure! Tell me how I can help.";
    }
    else if (userText.includes("bye")) {
      reply = "Goodbye 👋";
    }
    else {
      reply = "Sorry, I don't understand.";
    }

    const botReply = {
      text: reply,
      sender: "bot"
    };

    setMessages([...messages, userMessage, botReply]);

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
      </div>

      <div className="input-box">

        <input
         type="text"
  placeholder="Type message..."
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