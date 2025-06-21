"use client";

import React, { useState } from "react";
import { chats, users, Chat, ChatMessage } from "../lib/data";

export default function ChatComponent() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(
    chats.length > 0 ? chats[0].id : null
  );
  const [messageInput, setMessageInput] = useState("");

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;
    // Simulate sending message
    alert(`Mensaje enviado: ${messageInput}`);
    setMessageInput("");
  };

  return (
    <div className="flex h-[500px] border rounded overflow-hidden">
      <aside className="w-1/4 border-r overflow-y-auto">
        <h2 className="p-2 font-bold border-b">Chats</h2>
        <ul>
          {chats.map((chat) => {
            const otherUserId = chat.participants.find(
              (id) => id !== "1" // assuming current user id "1"
            );
            const otherUser = users.find((u) => u.id === otherUserId);
            return (
              <li
                key={chat.id}
                className={`p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  chat.id === selectedChatId ? "bg-gray-300 dark:bg-gray-600" : ""
                }`}
                onClick={() => setSelectedChatId(chat.id)}
              >
                {otherUser ? otherUser.username : "Chat"}
              </li>
            );
          })}
        </ul>
      </aside>
      <section className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100 dark:bg-gray-900">
          {selectedChat ? (
            selectedChat.messages.map((msg: ChatMessage) => {
              const user = users.find((u) => u.id === msg.userId);
              return (
                <div key={msg.id} className="mb-2">
                  <span className="font-semibold">{user?.username}: </span>
                  <span>{msg.message}</span>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">Selecciona un chat</p>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="p-2 border-t flex gap-2"
        >
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
