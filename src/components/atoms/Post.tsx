import { PostWithUser } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import React from 'react';



function Post({ data }:{data:PostWithUser}) {
  const { id,authorId,content,createdAt,userName,userProfile } = data;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={userProfile} alt={userName} className="w-10 h-10 rounded-full object-cover mr-3" />
          <div>
            <div className="font-medium">{userName}</div>
            <div className="text-sm text-gray-500">{formatDate(createdAt.toString())}</div>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <span className="text-2xl">{"E"}</span>
          <p className="text-gray-800 leading-relaxed">{content}</p>
        </div>
      </div>
      
      <div className="flex border-t py-3 px-4">
        <button className="p-1.5 hover:bg-gray-100 rounded mr-4">
          <span className="text-xl text-gray-500">♡</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded mr-4">
          <span className="text-xl text-gray-500">💬</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded">
          <span className="text-xl text-gray-500">↗</span>
        </button>
      </div>
    </div>
  );
}

export default Post;