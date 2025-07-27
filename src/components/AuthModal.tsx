'use client';

import { useState } from 'react';
import useAppState from '../hooks/useAppState';
import Button from './Button';
import { signup, login } from '../lib/db';

type Props = {
  onClose: () => void;
};

export default function AuthModal({ onClose }: Props) {
  const { login: setAuth } = useAppState();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    try {
      if (isSignup) {
        signup( name,email, password );
      } else {
        login(email, password);
      }
      setAuth();
      onClose();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[300px]">
        <h2 className="text-lg font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>

        {isSignup && <input
          placeholder="Name"
          type="text"
          className="w-full mb-2 border rounded px-2 py-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />}
        <input
          placeholder="Email"
          className="w-full mb-2 border rounded px-2 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full mb-2 border rounded px-2 py-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="flex justify-between items-center mb-2">
          <Button onClick={handleSubmit}>{isSignup ? 'Sign Up' : 'Login'}</Button>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:underline"
          >
            Cancel
          </button>
        </div>

        <p className="text-sm text-gray-600">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-500 hover:underline"
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
