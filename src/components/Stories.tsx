"use client";

import React from "react";
import { stories, users } from "../lib/data";

export default function Stories() {
  return (
    <div className="flex space-x-4 overflow-x-auto py-4">
      {stories.map((story) => {
        const user = users.find((u) => u.id === story.userId);
        if (!user) return null;

        return (
          <div key={story.id} className="relative flex-shrink-0 w-20 h-28 cursor-pointer">
            <img
              src={story.url}
              alt={`${user.username} story`}
              className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
            />
            {story.isLive && (
              <span className="absolute bottom-0 right-0 bg-red-600 text-white text-xs px-1 rounded">
                LIVE
              </span>
            )}
            <p className="text-center text-xs mt-1 text-gray-700 dark:text-gray-300 truncate">
              {user.username}
            </p>
          </div>
        );
      })}
    </div>
  );
}
