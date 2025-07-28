'use client';

import { getRandomEmoji } from '@/lib/utils';
import { useEffect, useState } from 'react';


export default function Emoji() {
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    setEmoji(getRandomEmoji());
  }, []);

  if (!emoji) return null; 

  return <span>{emoji}</span>;
}