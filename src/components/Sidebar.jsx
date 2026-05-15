function Sidebar() {

  return (
    <div className="sidebar">

      <h2>AI Bot</h2>

      <button
        onClick={() => window.open("/", "_blank")}
      >
        + New Chat
      </button>

      <ul>
        <li>React Help</li>
        <li>Project Ideas</li>
        <li>AI Assistant</li>
      </ul>

    </div>
  );
}

export default Sidebar;