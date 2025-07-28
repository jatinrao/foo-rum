import { v4 as uuidv4 } from 'uuid';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: string;
};

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
};

export type PostWithUser = {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  userName: string;
  userProfile: string;
};

const users: User[] = [
  {
    id: uuidv4(),
    name: 'Theresa Webb',
    email: 'demo@example.com',
    password: 'password123',
    profile: '/images/user_1.png',
  },
  {
    id: uuidv4(),
    name: 'John Doe',
    email: 'test@user.com',
    password: 'password123',
    profile: '/images/user_2.png',
  },
];

const posts: Post[] = [
  {
    id: uuidv4(),
    authorId: users[0].id,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: new Date("Sun Jul 27 2025 20:23:05 GMT+0530 (India Standard Time)"),
  },
  {
    id: uuidv4(),
    authorId: users[1].id,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    createdAt: new Date("Sun Jul 27 2025 20:23:05 GMT+0530 (India Standard Time)"),
  },
];


export function getAllPosts(): Array<PostWithUser> {
  return posts.map((post) => {
    const user = users.find((u) => u.id === post.authorId);
    return {
      ...post,
      userName: user?.name || 'Unknown',
      userProfile: user?.profile || '/avatars/placeholder.png',
    };
  });
}

export function addPost(authorId: string, content: string): void {
  posts.unshift({
    id: uuidv4(),
    authorId,
    content,
    createdAt: new Date(),
  });
}

export function login(email: string, password: string): User | null {
  return users.find((u) => u.email === email && u.password === password) || null;
}

export function signup(name: string, email: string, password: string): User {
  const user: User = {
    id: uuidv4(),
    name,
    email,
    password,
    profile: `/images/user-placeholder.png`
  };
  
  users.push(user);
  return user;
}

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
