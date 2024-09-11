import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import styles from "./WebSocketScreen.module.css";

const WebSocketScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("wss://echo.websocket.org");

    ws.onopen = () => {
      console.log("WebSocket соединение установлено.");
    };

    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (error) => {
      console.error("Ошибка WebSocket:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket соединение закрыто.");
    };

    setSocket(ws);

    return () => {
      if (
        ws.readyState === WebSocket.OPEN ||
        ws.readyState === WebSocket.CONNECTING
      ) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
      setMessage("");
    } else {
      console.error("WebSocket не готов к отправке сообщений.");
    }
  };

  return (
    <div className={styles.websocket}>
      <h2 className={styles.title}>WebSocket</h2>
      <input
        className={styles.input}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение"
      />
      <button className={styles.btn} onClick={sendMessage}>
        Отправить
      </button>
      <ul className={styles.list}>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <Navigation />
    </div>
  );
};

export default WebSocketScreen;
