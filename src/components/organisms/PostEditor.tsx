
import React, { useState } from 'react';
// import './PostEditor.css';
import Button from '@/components/atoms/Button';
import { withAuthCheck } from '@/lib/withAuthCheck';
import useAppState from '@/hooks/useAppState';
import AuthModal from '../AuthModal';

type Props =  {
    handleAddPost:(newPost:string)=> void;
}

function PostEditor({handleAddPost}:Props) {
const [newPost, setNewPost] = useState('');
const { openAuth,setOpenAuth, isAuthenticated } = useAppState();

const protectedAddPost = withAuthCheck(() => {
  handleAddPost(newPost);
  setNewPost("");
}, {
  isAuthenticated,
  openAuthModal: () => setOpenAuth(true),
});


  return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="border-b">
        <div className="flex items-center p-2 space-x-2">
          <select className="px-3 py-1.5 bg-white border rounded-md text-sm">
            <option>Paragraph</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
          </select>
          
          <Button featureFlag={false} className="p-1.5 font-bold hover:bg-gray-100 rounded">B</Button>
          <Button featureFlag={false} className="p-1.5 italic hover:bg-gray-100 rounded">I</Button>
          <Button featureFlag={false} className="p-1.5 underline hover:bg-gray-100 rounded">U</Button>
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <Button featureFlag={false} className="p-1.5 hover:bg-gray-100 rounded">
            <span className="text-xl">•</span>
          </Button>
          <Button featureFlag={false} className="p-1.5 hover:bg-gray-100 rounded">
            <span className="text-xl">=</span>
          </Button>
          
          <Button featureFlag={false} className="p-1.5 hover:bg-gray-100 rounded text-sm">99</Button>
          <Button featureFlag={false} className="p-1.5 hover:bg-gray-100 rounded text-sm">&lt;/&gt;</Button>
          
          <Button featureFlag={false} className="ml-auto p-1.5 bg-red-100 text-red-500 rounded-md">
            <span>🗑️</span>
          </Button>
        </div>
      </div>
      
      <div className="editor-content">
        <div className="flex flex-col gap-3 mb-4">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded p-3 resize-none"
          placeholder="Share your thoughts..."
        />
        </div>
      </div>
      
      <div className="flex items-center justify-between p-3 border-t">
        <div className="flex space-x-3">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600">+</button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600">🎤</button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600">📷</button>
        </div>
        <Button 
        onClick={()=>{
            console.log('on click ',isAuthenticated,newPost)
           protectedAddPost();  
        }   
        }

         className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full text-white">
          <span className="transform rotate-90">➔</span>
        </Button>
      </div>
      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
    </div>
  );
}

export default PostEditor;