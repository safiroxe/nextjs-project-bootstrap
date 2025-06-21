"use client";

import React from "react";
import { users } from "../lib/data";

export default function Achievements() {
  // For demo, use first user as current user
  const user = users[0];

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded shadow max-w-md mx-auto my-6">
      <h2 className="text-xl font-bold mb-2">Logros y Nivel</h2>
      <p className="mb-2">
        <strong>Usuario:</strong> {user.username}
      </p>
      <p className="mb-2">
        <strong>Nivel:</strong> {user.level}
      </p>
      <div>
        <strong>Logros:</strong>
        {user.achievements.length === 0 ? (
          <p>No tienes logros aún.</p>
        ) : (
          <ul className="list-disc list-inside">
            {user.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
