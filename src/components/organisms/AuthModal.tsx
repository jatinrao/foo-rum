'use client';

import { useState } from 'react';
import useAppState from '../../hooks/useAppState';
import Button from '../atoms/Button';
import { signup, login } from '../../lib/db';
import Image from 'next/image';

type Props = {
  onClose: () => void;
};

export default function AuthModal({ onClose }: Props) {
  const { login: setAuth,setOpenAuth } = useAppState();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    console.log('submit',isSignup,name,email,password);
    try {
      if (isSignup) {
          if(name.length != 0 && email.length != 0 && password.length != 0){
            const user = signup( name,email, password );
            setAuth(user);
            onClose();
          }
          else {setError("Please check input values.")
          }
        
      } else {
        console.log('here',email,password,email.length > 0 && password.length>0);
        if(email.length > 0 && password.length>0){
        const user = login(email, password);
        if(user){
          setAuth(user);
          onClose();
        }
        else {
          setError('Invalid credentials,please try again.')
        }
        
        }
        else {
          setError("Please check input values.")
        }
      }
      
      
    } catch (err:unknown) {
      setError('Something went wrong :'+ JSON.stringify(err));
    }
  };

  return (
    <div className="fixed inset-0 bg-[#8c8c8c4a] flex justify-center items-center z-50" onClick={()=>setOpenAuth(false)}>
      <div className="bg-[#EBEBEB] opacity-100 p-3 rounded-xl shadow-lg" onClick={(e)=> e.stopPropagation()}>
        <div className='bg-white p-6 rounded-xl min-w-[300px] max-w-[400px]'>
        <div className='bg-[#EBEBEB] rounded-[50%] h-12 w-12 flex my-4 mx-auto'>
          <Image src="/images/log-in.svg" className='cursor-pointer m-auto' alt="login-icon ml-0" width={20} height={20}/>
        </div>
        <h2 className="text-xl font-bold text-center">{isSignup ? 'Sign Up' : 'Sign in to continue'}</h2>
        <p className='text-md text-center mb-12'>Sign in to access all the features on this app</p>
        {isSignup && <>
        <label htmlFor={"name-input"} className="font-semibold text-md my-4 p-2"> Name</label>
        <input
          id="name-input"
          placeholder="Name"
          type="text"
          className="w-full mb-4 rounded-xl bg-[#F4F4F4] text-[#0007] h-12 px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
        /></>}

        <label htmlFor='email-input' className="font-semibold text-md my-4 p-2">Email or username</label>
        <input
          id="email-input"
          placeholder="Enter your email or username"
          className="w-full mb-4 rounded-xl bg-[#F4F4F4] text-[#0007] h-12 px-2 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass-input" className="font-semibold text-md my-4 p-2">Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          className="w-full mb-4 rounded-xl bg-[#F4F4F4] text-[#0007] h-12 px-2 py-1"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />

        {error.length >0 && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="flex items-center my-2">
          <Button className='bg-[#5057EA] text-white w-full rounded-xl h-12 justify-center' onClick={handleSubmit}>{isSignup ? 'Sign Up' : 'Login'}</Button>
        </div>
        </div>
        <p className="text-sm text-[#0008] my-4 text-center">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-[#5057EA] hover:underline"
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
