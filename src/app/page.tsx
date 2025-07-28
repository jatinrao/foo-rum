'use client'
import { useEffect, useState } from 'react';
import PostList from '@/components/atoms/PostList';
import AuthModal from '@/components/organisms/AuthModal';
import { withAuthCheck } from '@/lib/withAuthCheck';
import useAppState from '@/hooks/useAppState';
import Button from '@/components/atoms/Button';
import { getAllPosts } from '@/lib/db';
import PostEditor from '@/components/organisms/PostEditor';
import Header from '@/components/molecules/Header';
import useToast from '@/hooks/useToast';
// import Image from "next/image";

export default function Home() {
  const initPosts = getAllPosts();
  const { openAuth, setOpenAuth, isAuthenticated,user } = useAppState();
  const [allPosts, setAllPosts] = useState<any[]>(initPosts);
  const {Toast,showToast} = useToast();
  useEffect(()=>{
    showToast('INIT');
  },[])

  const handleAddPost = (newPost:string) => {
  if (newPost.trim()) {
    const post = {
      id: crypto.randomUUID(),
      authorId: user?.id || 'guest',
      content: newPost.trim(),
      createdAt: new Date().toISOString(),
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
