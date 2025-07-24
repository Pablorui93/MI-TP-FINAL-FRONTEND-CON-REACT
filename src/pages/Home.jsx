import React, { useState } from "react";
import { useChat } from "../context/ChatContext.jsx";
import ChatList from "../components/ChatList.jsx";
import "../styles/Home.css";

const Home = () => {
  const { chats } = useChat();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChats = Object.fromEntries(
    Object.entries(chats).filter(([_, chat]) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="home-container">
      <div className="home-title-container">
        <a href="/" className="home-title">WhatsApp</a>
      </div>
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Buscar un chat o iniciar uno nuevo"
          className="chat-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ChatList chats={filteredChats} />
    </div>
  );
};

export default Home;
