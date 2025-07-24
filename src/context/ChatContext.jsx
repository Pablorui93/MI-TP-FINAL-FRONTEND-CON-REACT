import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({
  homero: {
  name: "Homero",
  avatar: "https://clonemsguserdeish24.netlify.app/img/homero.jpeg",
  messages: [
    {
      from: "them",
      text: "¡Mmm... rosquillas!",
      time: "08:15 AM",
      timestamp: new Date("2023-12-01T08:15:00").getTime(),
    },
  ],
},
marge: {
  name: "Marge",
  avatar: "https://clonemsguserdeish24.netlify.app/img/marge.jpeg",
  messages: [
    {
      from: "them",
      text: "Homero, no me parece una buena idea...",
      time: "09:45 AM",
      timestamp: new Date("2023-12-01T09:45:00").getTime(),
    },
  ],
},
moe: {
  name: "Moe",
  avatar: "https://clonemsguserdeish24.netlify.app/img/moe.jpeg",
  messages: [
    {
      from: "them",
      text: "¡Moe's Tavern, habla Moe!",
      time: "03:20 PM",
      timestamp: new Date("2023-12-01T15:20:00").getTime(),
    },
  ],
},
apu: {
  name: "Apu",
  avatar: "https://clonemsguserdeish24.netlify.app/img/apu.jpeg",
  messages: [
    {
      from: "them",
      text: "¡Gracias, vuelva prontos!",
      time: "05:00 PM",
      timestamp: new Date("2023-12-01T17:00:00").getTime(),
    },
  ],
},

  });


  const sendMessage = (characterId, messageText) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const timestamp = now.getTime();

    setChats((prevChats) => {
      const updatedMessages = [
        ...prevChats[characterId].messages,
        {
        from: "me",
        text: messageText,
        time: time,
        timestamp: timestamp,
        delivered: true, // esto lo podrías usar para estados futuros
      },
    ];

      return {
      ...prevChats,
      [characterId]: {
        ...prevChats[characterId],
        messages: updatedMessages,
      },
    };
  });
}

  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);