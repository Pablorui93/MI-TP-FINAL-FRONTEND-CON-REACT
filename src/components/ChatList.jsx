import React from "react";
import { Link } from "react-router-dom";
import "../styles/Chatlist.css";

const ChatList = ({ chats }) => {
  const sortedChats = Object.entries(chats).sort(([, a], [, b]) => {
    const timeA = a.messages[a.messages.length - 1]?.timestamp || 0;
    const timeB = b.messages[b.messages.length - 1]?.timestamp || 0;
    return timeB - timeA;
  });

  return (
    <div className="chat-list">
      {sortedChats.map(([id, chat]) => {
        const lastMessage = chat.messages[chat.messages.length - 1];

        return (
          <Link to={`/chat/${id}`} key={id} className="chat-link">
            <div className="chat-card">
              <div className="chat-avatar-home-wrapper">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="chat-avatar-home"
                />
              </div>

              <div className="chat-text">
                <div className="chat-header-home">
                  <span className="chat-name-home">{chat.name}</span>
                  <span className="chat-time-home">{lastMessage?.time || ""}</span>
                </div>

                <div className="chat-preview">
                  {lastMessage?.from === "me" && (
                    <span className="chat-check-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 12" style={{ marginRight: "4px" }}>
                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                      </svg>
                    </span>
                  )}
                  {lastMessage?.text}
                </div>

              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ChatList;
