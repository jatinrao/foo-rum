
import React, { useState } from 'react';
// import './PostEditor.css';
import Button from '@/components/atoms/Button';
import { withAuthCheck } from '@/lib/withAuthCheck';
import useAppState from '@/hooks/useAppState';
import AuthModal from './AuthModal';
import { AddIcon, BoldIcon, BulletIcon, CameraIcon, CodeIcon, DeleteIcon, EmojiIcon, ItalicIcon, MicIcon, NumberListIcon, QuoteIcon, SendIcon, UnderlineIcon } from '@/lib/icons';

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
     <div className="bg-card-grey rounded-xl shadow-md overflow-hidden p-0 border-card-grey border-8 w-full max-w-[600px] animate-bordershrink">
      <div className="border-none bg-white rounded-xl p-1.5 shadow-cards">
        <div className="bg-white flex flex-row justify-between pb-2">
        <div className="flex items-center p-2 space-x-2 bg-card-grey h-10 rounded-xl">
          <select name="para-input" className="px-3 py-1.5 bg-white border rounded-md text-xs font-medium shadow-buttons">
            <option className='w-full'>Paragraph</option>
            <option className='w-full'>Heading 1</option>
            <option className='w-full'>Heading 2</option>
          </select>
          
          <Button featureFlag={false} className="p-1 font-bold bg-white py-1 m-0 hidden sm:block ml-4 shadow-buttons" icon={<BoldIcon/>}></Button>
          <Button featureFlag={false} className="p-1 italic  rounded-xl m-0 hidden sm:block" icon={<ItalicIcon/>}></Button>
          <Button featureFlag={false} className="p-1 underline rounded-xl hidden sm:block" icon={<UnderlineIcon/>}></Button>
          
          <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
          
          <Button featureFlag={false} className="p-1.5 hover:bg-gray-100 rounded hidden md:block" icon={<BulletIcon/>}>
          </Button>
          <Button featureFlag={false} className="p-1.5 hover:bg-gray-100 rounded hidden md:block" icon={<NumberListIcon/>}>
          </Button>
          
          <div className="h-6 w-px bg-[#0002] hidden lg:block"></div>

          <Button featureFlag={false} className="p-1.5 text-sm hidden lg:block" icon={<QuoteIcon/>}></Button>
          <Button featureFlag={false} className="p-1.5  text-sm hidden lg:block " icon={<CodeIcon/>}></Button>
        </div>
      <div className="flex items-center justify-center h-10 w-10 bg-red-100 rounded-xl">
        <Button onClick={()=> setNewPost("")} className="" icon={<DeleteIcon/>}>
          </Button>
      </div>
      </div>
      
      
        <div className="relative mb-4 w-full">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          rows={3}
          className="w-full rounded p-3 pl-10 resize-none text-[#0006] outline-none"
          placeholder="How are you feeling today?"
        />
        <div className='absolute left-3 top-[16px]'>
            <Button featureFlag={false} icon={<EmojiIcon/>} />
        </div>
        </div>
     
      
      <div className="flex items-center justify-between pt-1 border-t border-[#D9D9D9]">
        <div className="flex space-x-1">
          <Button featureFlag={false} className="w-8 h-8 flex items-center justify-center bg-[#0001] rounded-xl" icon={<AddIcon/>}></Button>
          <Button featureFlag={false} className="w-8 h-8 flex items-center justify-center" icon={<MicIcon/>}></Button>
          <Button featureFlag={false} className="w-8 h-8 flex items-center justify-center" icon={<CameraIcon/>}></Button>
        </div>
        <Button 
        onClick={()=>{
           protectedAddPost();  
        }   
        }

         className="w-10 h-10 flex items-center justify-center rounded-full" icon={<SendIcon/>}>
        </Button>
      </div>
      </div>
      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
    </div>
  );
}

export default PostEditor;