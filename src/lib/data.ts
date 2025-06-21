export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  isStreaming: boolean;
  level: number;
  achievements: string[];
}

export interface Post {
  id: string;
  userId: string;
  type: "photo" | "clip";
  url: string;
  description?: string;
  timestamp: number;
}

export interface Story {
  id: string;
  userId: string;
  url: string;
  isLive: boolean;
  timestamp: number;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  message: string;
  timestamp: number;
}

export interface Chat {
  id: string;
  participants: string[];
  messages: ChatMessage[];
}

export const users: User[] = [
  {
    id: "1",
    username: "GamerOne",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    isStreaming: true,
    level: 5,
    achievements: ["First Kill", "Top Streamer"],
  },
  {
    id: "2",
    username: "StreamerTwo",
    avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    isStreaming: false,
    level: 3,
    achievements: ["Rising Star"],
  },
  {
    id: "3",
    username: "PlayerThree",
    avatarUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    isStreaming: false,
    level: 2,
    achievements: [],
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    userId: "1",
    type: "photo",
    url: "https://images.pexels.com/photos/163077/fall-autumn-red-season-163077.jpeg",
    description: "Epic win!",
    timestamp: Date.now() - 1000000,
  },
  {
    id: "p2",
    userId: "2",
    type: "clip",
    url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Check this clip!",
    timestamp: Date.now() - 500000,
  },
  {
    id: "p3",
    userId: "3",
    type: "photo",
    url: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    description: "New high score",
    timestamp: Date.now() - 200000,
  },
];

export const stories: Story[] = [
  {
    id: "s1",
    userId: "1",
    url: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    isLive: true,
    timestamp: Date.now() - 300000,
  },
  {
    id: "s2",
    userId: "2",
    url: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    isLive: false,
    timestamp: Date.now() - 600000,
  },
];

export const chats: Chat[] = [
  {
    id: "c1",
    participants: ["1", "2"],
    messages: [
      {
        id: "m1",
        chatId: "c1",
        userId: "1",
        message: "Hola, ¿cómo estás?",
        timestamp: Date.now() - 10000,
      },
      {
        id: "m2",
        chatId: "c1",
        userId: "2",
        message: "Bien, gracias!",
        timestamp: Date.now() - 5000,
      },
    ],
  },
];
