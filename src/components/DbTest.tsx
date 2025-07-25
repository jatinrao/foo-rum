'use client';

import { login, signup, addPost, getAllPosts, getUserById } from '../lib/db';
import { useEffect } from 'react';

export default function DbTest() {
  
  useEffect(() => {
    const user = login('alice@example.com', 'password123');
    console.log('Logged in:', user);

    const newUser = signup('newuser@example.com', 'test123', 'New User');
    console.log('Signed up:', newUser);

    const post = addPost(newUser.id, 'New user post!');
    console.log('New Post:', post);

    const all = getAllPosts();
    console.log('All Posts:', all);

    const foundUser = getUserById(newUser.id);
    console.log('Found User:', foundUser);
  }, []);

  return <div className="text-sm text-gray-500">Check console for DB test logs</div>;
}
