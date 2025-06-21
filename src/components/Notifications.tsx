"use client";

import React from "react";

const mockNotifications = [
  { id: "n1", message: "GamerOne empezó a seguirte." },
  { id: "n2", message: "Tu clip fue destacado en Discover." },
  { id: "n3", message: "StreamerTwo está transmitiendo en vivo." },
];

export default function Notifications() {
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 dark:bg-gray-900 rounded shadow my-6">
      <h2 className="text-xl font-bold mb-2">Notificaciones</h2>
      {mockNotifications.length === 0 ? (
        <p>No tienes notificaciones.</p>
      ) : (
        <ul className="list-disc list-inside">
          {mockNotifications.map((notif) => (
            <li key={notif.id} className="mb-1">
              {notif.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
