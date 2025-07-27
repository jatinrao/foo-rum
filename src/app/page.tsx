'use client'
import { useState } from 'react';
import PostList from '@/components/PostList';
import AuthModal from '@/components/AuthModal';
import { withAuthCheck } from '@/lib/withAuthCheck';
import useAppState from '@/hooks/useAppState';
import Button from '@/components/Button';
import { getAllPosts } from '@/lib/db';
// import Image from "next/image";

export default function Home() {
  const initPosts = getAllPosts();
  const { openAuth, setOpenAuth, isAuthenticated,user } = useAppState();
  const [newPost, setNewPost] = useState('');
  const [allPosts, setAllPosts] = useState<any[]>(initPosts);

  const handleAddPost = () => {
  if (newPost.trim()) {
    const post = {
      id: crypto.randomUUID(),
      authorId: user?.id || 'guest',
      content: newPost.trim(),
      createdAt: new Date().toISOString(),
    };
    setAllPosts((prev) => [post, ...prev]);
    setNewPost('');
  }
};


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
       <div className="flex flex-col gap-3 mb-4">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded p-3 resize-none"
          placeholder="Share your thoughts..."
        />
        <div className="flex justify-end">
          <Button
            onClick={withAuthCheck(handleAddPost, {
              isAuthenticated,
              openAuthModal: () => setOpenAuth(true),
            })}
          >
            ➕ Post
          </Button>
        </div>
      </div>

      <PostList posts={allPosts} />

      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
      
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* footer content */}
      </footer>
    </div>
  );
}
