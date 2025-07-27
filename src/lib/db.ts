import { v4 as uuidv4 } from 'uuid';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: string;
};

type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
};

type PostWithUser = {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  userName: string;
  userProfile: string;
};

export let users: User[] = [
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

let posts: Post[] = [
  {
    id: uuidv4(),
    authorId: users[0].id,
    content: 'Hello from Theresa!',
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    authorId: users[1].id,
    content: 'John Doe was here.',
    createdAt: new Date(),
  },
];


export function getAllPosts(): Array<Post & { userName: string; userProfile: string }> {
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
