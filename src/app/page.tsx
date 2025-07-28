'use client'
import { useState } from 'react';
import PostList from '@/components/atoms/PostList';
import AuthModal from '@/components/organisms/AuthModal';
import useAppState from '@/hooks/useAppState';
import { getAllPosts, PostWithUser } from '@/lib/db';
import PostEditor from '@/components/organisms/PostEditor';
import Header from '@/components/molecules/Header';
import useToast from '@/hooks/useToast';

export default function Home() {
  const initPosts = getAllPosts();
  const { openAuth, setOpenAuth,user } = useAppState();
  const [allPosts, setAllPosts] = useState<PostWithUser[]>(initPosts);
  const {Toast} = useToast();

  const handleAddPost = (newPost:string) => {
  if (newPost.trim()) {
    const post = {
      id: crypto.randomUUID(),
      authorId: user?.id || 'NA',
      userName:user?.name || 'NA',
      userProfile:user?.profile || '/images/user-placeholder.png',
      content: newPost.trim(),
      createdAt: new Date(),
    };
    setAllPosts((prev) => [post, ...prev]);
   
  }
};


  return (
   <div className="max-w-screen-xl mx-auto p-4 font-sans relative">
    <Header/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        
      <PostEditor handleAddPost={handleAddPost}/> 

      <PostList posts={allPosts} />

      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
      
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* footer content */}
      </footer>
      <Toast/>
    </div>
  );
}
