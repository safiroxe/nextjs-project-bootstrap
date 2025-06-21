"use client";

import React from "react";
import { posts, users } from "../lib/data";

export default function Feed() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => {
        const user = users.find((u) => u.id === post.userId);
        if (!user) return null;

        return (
          <div
            key={post.id}
            className="bg-gray-200 dark:bg-gray-800 rounded overflow-hidden shadow"
          >
            <div className="p-2 flex items-center gap-2">
              <img
                src={user.avatarUrl}
                alt={user.username}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">{user.username}</span>
            </div>
            {post.type === "photo" ? (
              <img src={post.url} alt={post.description} className="w-full" />
            ) : (
              <video controls className="w-full">
                <source src={post.url} type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            )}
            {post.description && (
              <p className="p-2 text-sm text-gray-700 dark:text-gray-300">
                {post.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
