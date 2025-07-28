import React from 'react';
import Button from '../atoms/Button';
import Image from 'next/image';
import useAppState from '@/hooks/useAppState';

function Header() {
  const {setOpenAuth, isAuthenticated,user } = useAppState();
  return (
    <header className="flex justify-between items-center py-2 sticky top-0">
      <div className="flex items-center space-x-2">
        <Image src="/images/mouse.svg" alt="logo" width={34} height={34}/>
        <h1 className="text-xl font-bold">foo-rum</h1>
      </div>
      {isAuthenticated && user ? <div className="flex items-center mb-4">
                                    <Image src={user.profile} alt={user.name} className="w-6 h-6 rounded-full object-cover mr-3" width={24} height={24} />
                                     <div>
                                         <div className="font-medium text-md">{user.name}</div>
                                    </div>
                                 </div>: 
                                <Button className="flex items-center space-around text-black cursor-pointer"  onClick={() => setOpenAuth(true)}>
                                    <span className='cursor-pointer'>Login</span><Image src="/images/log-in.svg" className='cursor-pointer' alt="login-icon ml-0" width={20} height={20}/>
                                </Button>
}
    </header>
  );
}

export default Header;