import React from 'react';
import Button from '../atoms/Button';

function Header() {
  return (
    <header className="flex justify-between items-center py-2">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="w-5 h-1 bg-gray-700 rounded"></span>
        </div>
        <h1 className="text-xl font-semibold">foo-rum</h1>
      </div>
      <Button className="flex items-center space-x-2 text-black">
        <span>Login</span>
        <span className="transform rotate-90">➜</span>
      </Button>
    </header>
  );
}

export default Header;