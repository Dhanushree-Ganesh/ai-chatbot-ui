import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import "./App.css";

function App() {

  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help you?",
      sender: "bot"
    }
  ]);

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-chat">

        <Navbar />

        <ChatBox
          messages={messages}
          setMessages={setMessages}
        />

      </div>

    </div>
  );
}

export default App;