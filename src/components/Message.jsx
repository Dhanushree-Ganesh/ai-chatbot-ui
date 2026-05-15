function Message({ text, sender }) {

  return (
    <div className={sender === "user" ? "user-msg" : "bot-msg"}>
      {text}
    </div>
  );
}

export default Message;