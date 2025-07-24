import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useChat } from "../context/ChatContext.jsx";
import "../styles/Chat.css";

const Chat = () => {
  const { id } = useParams();
  const { chats, sendMessage } = useChat();
  const chat = chats[id];
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);


  if (!chat) return <p>Chat no encontrado.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(id, newMessage);
      setNewMessage("");
    }
  };

  const handleFeatureInDevelopment = () => {
    alert("Funcionalidad en desarrollo.");
  };


  return (
    <div className="chat-container">

      <div className="chat-header-wrapper">
        <div className="chat-header">
          <div className="chat-header-left">
            <img src={chat.avatar} alt={chat.name} className="chat-avatar-chat" />
            <h2 className="chat-name-chat">{chat.name}</h2>
          </div>
          <div className="chat-header-right">
            <div className="chat-icons">
              <div className="video-dropdown-group" onClick={handleFeatureInDevelopment}>
                {/* Ícono cámara de video */}
                <button className="icon-btn video-call-icon">
                  <svg className="camera-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
                  </svg>
                </button>

                {/* Ícono chevron (selector de llamada) */}
                <button className="icon-btn chevron-icon">
                  <svg className="chevron-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
              </div>

              <button className="icon-btn search-icon" onClick={handleFeatureInDevelopment}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </button>

              <button className="icon-btn menu-icon" onClick={handleFeatureInDevelopment}>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {chat.messages.map((msg, index) => (
          <div key={index} className={`message ${msg.from}`}>
            <div className="message-content">
              <span className="message-text">{msg.text}</span>
              <div className="message-meta">
                <span className="message-time">{msg.time}</span>
                {msg.from === "me" && (
                  <span className="message-tick">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 10">
                      <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form-wrapper">
          <div className="chat-form">
            {/* Icono "+" */}
            <button type="button" className="form-icon plus-icon" onClick={handleFeatureInDevelopment}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>
            </button>

            {/* Icono emoji */}
            <button type="button" className="form-icon emoji-icon" onClick={handleFeatureInDevelopment}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
              </svg>
            </button>

            {/* Input de texto */}
            <div className={`input-wrapper ${isTyping ? "typing" : ""}`}>
            <input
              type="text"
              placeholder="Escribe un mensaje"
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
                setIsTyping(e.target.value.trim().length > 0); // activa barra si hay texto
              }}
            />
            </div>


            {/* Icono enviar o microfono */}
            <button type="submit" className="form-icon send-button">
              {newMessage.trim() ? (
                // Icono de enviar (ya lo tenías)
                <svg className= "send-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>
              ) : (
                // Icono de micrófono
                <svg classname="microphone-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16" onClick={handleFeatureInDevelopment}>
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
                </svg>
              )}
            </button>
          </div>
      </form>

    </div>
  );
};

export default Chat;


