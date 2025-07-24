import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";

// Montamos la aplicación en el div "root" del index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>
);